/**
 * One-off asset prep: turn the published brand PNGs into shippable web assets.
 *
 * The source files are 13277x4679 print-resolution rasters at ~500-700KB each,
 * with a large transparent margin. A 36px header logo cannot be served from
 * that. This trims the margin, resizes to 3x the largest rendered size, and
 * writes WebP (served) plus PNG (fallback / OG composition).
 *
 * Re-run with:  node scripts/build-logos.mjs
 * Ideally replace all of this with real SVG originals when they exist.
 */
import sharp from 'sharp'
import fs from 'node:fs/promises'
import path from 'node:path'

const SRC = path.resolve(
  import.meta.dirname,
  '../../reference-extraction/brand/assets',
)
const OUT = path.resolve(import.meta.dirname, '../public/brand')

/** Largest rendered height on the site, x3 for retina. */
const JOBS = [
  {
    src: 'brand_SmartgrowInfotech_plain-horizontal.png',
    name: 'logo-light', // navy wordmark — use ON LIGHT surfaces
    height: 150, // rendered up to 44px (footer) -> 3x + headroom
  },
  {
    src: 'brand_SmartgrowInfotech_darkblue-horizontal.png',
    name: 'logo-dark', // white wordmark — use ON DARK surfaces
    height: 150,
  },
  {
    src: 'brand_SmartgrowInfotech_plain.png',
    name: 'mark', // star only — favicon, OG, compact placements
    height: 512,
  },
]

await fs.mkdir(OUT, { recursive: true })

for (const job of JOBS) {
  const input = path.join(SRC, job.src)
  const before = (await fs.stat(input)).size

  const base = sharp(input)
    .trim() // strip the transparent print margin
    .resize({ height: job.height, withoutEnlargement: true })

  const webpPath = path.join(OUT, `${job.name}.webp`)
  const pngPath = path.join(OUT, `${job.name}.png`)

  await base.clone().webp({ quality: 92 }).toFile(webpPath)
  await base.clone().png({ compressionLevel: 9, palette: true }).toFile(pngPath)

  const meta = await sharp(webpPath).metadata()
  const webpSize = (await fs.stat(webpPath)).size
  const pngSize = (await fs.stat(pngPath)).size

  console.log(
    `${job.name.padEnd(12)} ${meta.width}x${meta.height}  ` +
      `webp ${(webpSize / 1024).toFixed(1)}KB  png ${(pngSize / 1024).toFixed(1)}KB  ` +
      `(from ${(before / 1024).toFixed(0)}KB)`,
  )
}
