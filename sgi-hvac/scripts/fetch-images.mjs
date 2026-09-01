/**
 * Downloads every photo in src/content/images.ts, crops it to the manifest's
 * aspect ratio, and writes an optimised WebP into public/images.
 *
 *   node scripts/fetch-images.mjs          # only fetch what's missing
 *   node scripts/fetch-images.mjs --force  # refetch everything
 *
 * Source is Unsplash. The Unsplash License allows free commercial use with or
 * without attribution; a CREDITS.md is written regardless.
 *
 * TODO for production: register a free Unsplash API key and resolve photos
 * through api.unsplash.com instead of the public CDN. That is their documented
 * integration path and it returns photographer names for proper credit.
 */
import sharp from 'sharp'
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const ROOT = path.resolve(import.meta.dirname, '..')
const OUT = path.join(ROOT, 'public/images')
const FORCE = process.argv.includes('--force')

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'

// Read the manifest without needing a TS toolchain: pull the object literal out
// of the source. Keeps this script dependency-free.
const manifestSrc = await fs.readFile(
  path.join(ROOT, 'src/content/images.ts'),
  'utf8',
)

const entries = [...manifestSrc.matchAll(
  /(\w+):\s*\{\s*src:\s*'([^']+)',\s*unsplashId:\s*'([^']+)',\s*alt:\s*'((?:[^'\\]|\\.)*)',\s*\.\.\.(w43|w1610),/g,
)].map(([, key, src, unsplashId, alt, ratio]) => ({
  key,
  src,
  unsplashId,
  alt,
  ratio,
}))

if (entries.length === 0) {
  console.error('No images parsed from src/content/images.ts — check the format.')
  process.exit(1)
}

const RATIOS = { w43: 3 / 4, w1610: 10 / 16 }
const WIDTH = 1800

await fs.mkdir(OUT, { recursive: true })

/**
 * Records which Unsplash id each local file was built from. Without this, an
 * existing file is skipped even after its manifest id changes — so swapping a
 * photo silently does nothing. Refetch is keyed on the id, not just presence.
 */
const LOCK = path.join(OUT, '.sources.json')
let lock = {}
try {
  lock = JSON.parse(await fs.readFile(LOCK, 'utf8'))
} catch {
  /* first run */
}

const credits = []
let fetched = 0
let skipped = 0

for (const e of entries) {
  const outPath = path.join(ROOT, 'public', e.src.replace(/^\//, ''))
  const height = Math.round(WIDTH * RATIOS[e.ratio])

  credits.push(
    `- **${e.key}** — ${e.alt}\n  Unsplash \`${e.unsplashId}\` · https://images.unsplash.com/${e.unsplashId}`,
  )

  if (!FORCE && lock[e.key] === e.unsplashId) {
    try {
      await fs.access(outPath)
      skipped++
      continue
    } catch {
      /* recorded but missing on disk — fall through and refetch */
    }
  }

  // Ask the CDN for a generous source; we do the final crop locally so the
  // aspect ratio always matches the manifest exactly.
  const url = `https://images.unsplash.com/${e.unsplashId}?fm=jpg&q=85&w=2400&auto=format&fit=crop`

  const res = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!res.ok) {
    console.error(`  FAIL ${e.key} — HTTP ${res.status}`)
    continue
  }
  const buf = Buffer.from(await res.arrayBuffer())

  await sharp(buf)
    .resize(WIDTH, height, { fit: 'cover', position: 'attention' })
    .webp({ quality: 82 })
    .toFile(outPath)

  const size = (await fs.stat(outPath)).size
  console.log(
    `  ok   ${e.key.padEnd(24)} ${WIDTH}x${height}  ${(size / 1024).toFixed(0)}KB`,
  )
  lock[e.key] = e.unsplashId
  fetched++
}

// prune keys no longer in the manifest, then persist
for (const key of Object.keys(lock)) {
  if (!entries.some((e) => e.key === key)) delete lock[key]
}
await fs.writeFile(LOCK, JSON.stringify(lock, null, 2) + '\n', 'utf8')

await fs.writeFile(
  path.join(OUT, 'CREDITS.md'),
  `# Image credits\n\nAll photography sourced from [Unsplash](https://unsplash.com) under the\n[Unsplash License](https://unsplash.com/license), which permits free commercial\nuse with or without attribution.\n\n${credits.join('\n')}\n`,
  'utf8',
)

console.log(`\nfetched ${fetched}, skipped ${skipped} (already present)`)
console.log(`credits -> public/images/CREDITS.md`)
