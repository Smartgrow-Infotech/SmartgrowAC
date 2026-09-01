/**
 * Image manifest.
 *
 * Every photographic slot on the site resolves through this file, so swapping
 * a photo is a one-line edit and no component hard-codes a path.
 *
 * SOURCE: Unsplash. The Unsplash License permits free commercial use, with or
 * without attribution. Credits are recorded anyway in public/images/CREDITS.md.
 *
 * ⚠️ For production, register a free Unsplash API key and re-fetch through the
 * official API — see scripts/fetch-images.mjs. The current fetch reads public
 * CDN URLs, which is fine for a build but is not their documented integration
 * path.
 *
 * Run `node scripts/fetch-images.mjs` to download and optimise everything here.
 */

export type SiteImage = {
  /** Local path under /public. */
  src: string
  /** Unsplash CDN id — the download source. */
  unsplashId: string
  /** Meaningful alt text. Never decorative for content images. */
  alt: string
  width: number
  height: number
}

const W = 1800

/** 4:3 — hero and service cards. */
const w43 = { width: W, height: Math.round((W * 3) / 4) }
/** 16:10 — carousel slides. */
const w1610 = { width: W, height: Math.round((W * 10) / 16) }

export const images = {
  /** Hero: two U.S. service technicians on a residential call. */
  heroHome: {
    src: '/images/hero-home.webp',
    unsplashId: 'photo-1739203469638-d6f54c24a5da',
    alt: 'Two SmartgrowInfotech service technicians working from a ladder at a residential property',
    ...w43,
  },
  /** Portrait of a technician in branded workwear — about, careers, metros. */
  heroTechnician: {
    src: '/images/hero-technician.webp',
    unsplashId: 'photo-1732395805034-e0bf859665e5',
    alt: 'A service technician in uniform outside a building',
    ...w43,
  },
  /** Equipment-led alternative for commercial and system pages. */
  heroEquipment: {
    src: '/images/hero-equipment.webp',
    unsplashId: 'photo-1776860155275-eee24bfb1dee',
    alt: 'A modern home exterior with an outdoor heat-pump unit installed alongside it',
    ...w43,
  },

  // ── Service pillars ────────────────────────────────────────────────────
  serviceAc: {
    src: '/images/service-air-conditioning.webp',
    unsplashId: 'photo-1718203862467-c33159fdc504',
    alt: 'A wall-mounted air-conditioning unit on a brick exterior',
    ...w43,
  },
  serviceHeating: {
    src: '/images/service-heating.webp',
    unsplashId: 'photo-1744063909793-8a1e85ace349',
    alt: 'Two hydronic radiators against a clean interior wall',
    ...w43,
  },
  serviceIaq: {
    src: '/images/service-indoor-air-quality.webp',
    unsplashId: 'photo-1759646827242-cf09e30709aa',
    alt: 'An air-handling unit suspended from a ceiling structure',
    ...w43,
  },
  serviceWaterHeaters: {
    src: '/images/service-water-heaters.webp',
    unsplashId: 'photo-1751486289950-5c4898a4c773',
    alt: 'Pipework and mechanical equipment installed on a wall',
    ...w43,
  },

  // ── Comfort upgrades ───────────────────────────────────────────────────
  upgradeDuctless: {
    src: '/images/upgrade-ductless.webp',
    unsplashId: 'photo-1757219525975-03b5984bc6e8',
    alt: 'A ductless mini-split indoor head mounted high on an interior wall',
    ...w1610,
  },
  upgradeHeatPump: {
    src: '/images/upgrade-heat-pump.webp',
    unsplashId: 'photo-1698479603408-1a66a6d9e80f',
    alt: 'Several outdoor heat-pump condenser units side by side',
    ...w1610,
  },
  upgradeZoning: {
    src: '/images/upgrade-zoning.webp',
    unsplashId: 'photo-1619140099965-06d74aaf51fa',
    alt: 'A wall thermostat displaying the current room temperature',
    ...w1610,
  },
  upgradeDehumidification: {
    src: '/images/upgrade-dehumidification.webp',
    unsplashId: 'photo-1780590105333-11af9647816d',
    alt: 'Flexible metal ductwork running through a mechanical space',
    ...w1610,
  },
  upgradeFiltration: {
    src: '/images/upgrade-filtration.webp',
    unsplashId: 'photo-1781431304403-72720232aeb6',
    alt: 'A louvered return-air grille on a wall',
    ...w1610,
  },
  upgradeThermostat: {
    src: '/images/upgrade-thermostat.webp',
    unsplashId: 'photo-1545259741-2ea3ebf61fa3',
    alt: 'A smart thermostat mounted on an interior wall',
    ...w1610,
  },
} as const satisfies Record<string, SiteImage>

export type ImageKey = keyof typeof images
