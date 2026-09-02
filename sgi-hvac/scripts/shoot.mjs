/**
 * Visual verification. Screenshots routes at desktop + mobile, plus any
 * individual sections named by id, so layout regressions are caught by looking
 * rather than by guessing at CSS.
 *
 *   node scripts/shoot.mjs                     # default routes
 *   node scripts/shoot.mjs / /services         # specific routes
 *
 * Requires a dev or prod server on BASE (default http://localhost:3000).
 * Output: screenshots/ (gitignored).
 */
import { chromium } from 'playwright'
import fs from 'node:fs/promises'
import path from 'node:path'

const BASE = process.env.BASE ?? 'http://localhost:3000'
const OUT = path.resolve(import.meta.dirname, '../screenshots')

const routes = process.argv.slice(2).length ? process.argv.slice(2) : ['/']

/** Sections worth capturing on their own, by element id. */
const SECTIONS = ['hero', 'services', 'why', 'coverage', 'pricing', 'upgrades', 'brands', 'faq', 'cta']

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
]

await fs.mkdir(OUT, { recursive: true })

const browser = await chromium.launch()
const results = []

for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  })
  const page = await ctx.newPage()

  const errors = []
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
  page.on('pageerror', (e) => errors.push(String(e)))

  for (const route of routes) {
    const slug = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '-')
    const url = BASE + route

    const res = await page.goto(url, { waitUntil: 'networkidle', timeout: 45_000 })
    // let fonts settle so text metrics are real
    await page.evaluate(() => document.fonts.ready)
    await page.waitForTimeout(350)

    await page.screenshot({
      path: path.join(OUT, `${slug}-${vp.name}-full.png`),
      fullPage: true,
    })

    // per-section shots at every viewport — mobile full-page is too tall to
    // read, and mobile is where layout actually breaks
    for (const id of SECTIONS) {
      const el = page.locator(`#${id}`).first()
      if ((await el.count()) === 0) continue
      const suffix = vp.name === 'desktop' ? '' : `-${vp.name}`
      await el
        .screenshot({ path: path.join(OUT, `${slug}--${id}${suffix}.png`) })
        .catch(() => {})
    }

    results.push({
      route,
      viewport: vp.name,
      status: res?.status(),
      errors: errors.length,
    })
  }

  if (errors.length) {
    console.log(`\nconsole errors (${vp.name}):`)
    ;[...new Set(errors)].slice(0, 10).forEach((e) => console.log('  ' + e))
  }

  await ctx.close()
}

await browser.close()

console.table(results)
const files = await fs.readdir(OUT)
console.log(`\n${files.length} screenshots in screenshots/`)
