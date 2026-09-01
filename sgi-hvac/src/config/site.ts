/**
 * SINGLE SOURCE OF TRUTH for company data.
 *
 * ⚠️  EVERY VALUE MARKED `TODO` IS INVENTED PLACEHOLDER DATA.
 *     Nothing here is real. Replace it all before this site goes live.
 *     See ../../../smartgrow/contentReference.txt §0 for the full warning.
 *
 * Changing the company name, phone, address or stats is a one-file edit.
 */

export const site = {
  // ── Identity ──────────────────────────────────────────────────────────
  name: 'SmartgrowInfotech',
  legalName: 'SmartgrowInfotech LLC', // TODO verify actual registered entity
  shortName: 'SGI',
  tagline: 'Nationwide HVAC. Local technicians.',
  description:
    'Nationwide HVAC repair, replacement and maintenance for homes and multi-site facilities. Licensed local technicians in 10 major U.S. metros. Dispatch answered 24/7.',

  // TODO confirm production domain — affects canonical URLs and schema @id
  url: 'https://hvac.smartgrowinfotech.com',

  founded: 2009, // TODO verify
  get yearsInService() {
    return new Date().getFullYear() - this.founded
  },

  // ── Contact ───────────────────────────────────────────────────────────
  // TODO REPLACE. (888) 555-0142 is in the 555-0100–555-0199 block, which is
  // reserved for fictional use. It is safe in a mockup. It does NOT work.
  phone: '(888) 555-0142',
  phoneHref: 'tel:+18885550142',

  email: 'service@smartgrowinfotech.com', // TODO
  accountsEmail: 'accounts@smartgrowinfotech.com', // TODO
  careersEmail: 'careers@smartgrowinfotech.com', // TODO

  // TODO REPLACE — invented address
  address: {
    street: '4514 Cole Avenue, Suite 600',
    city: 'Dallas',
    region: 'TX',
    regionName: 'Texas',
    postalCode: '75205',
    country: 'US',
  },

  hoursNote: 'Dispatch answered 24/7, 365 days',

  // ── Proof ─────────────────────────────────────────────────────────────
  // TODO REPLACE ALL — every figure below is invented.
  stats: {
    metros: 10,
    technicians: '190+',
    statesLicensed: 38,
    jobsCompleted: '41,000+',
    rating: 4.9,
    reviewCount: 2400,
  },

  /**
   * Gate for AggregateRating JSON-LD.
   *
   * Deliberately FALSE. Google treats unverifiable self-serving
   * AggregateRating as a manual-action risk. Do not flip this until
   * `stats.rating` and `stats.reviewCount` reflect real, auditable reviews.
   * (The reference site we studied emits this on all 60 pages — including its
   * privacy policy — which is exactly the mistake to avoid.)
   */
  emitAggregateRating: false,

  /**
   * Licensing. Left as obvious placeholder tokens on purpose — publishing a
   * fabricated contractor licence number is a regulatory problem, not a
   * copywriting one.
   */
  licenses: [
    { state: 'TX', number: '[TX-LIC-PLACEHOLDER]' },
    { state: 'AZ', number: '[AZ-LIC-PLACEHOLDER]' },
    { state: 'CA', number: '[CA-LIC-PLACEHOLDER]' },
  ],
  insuranceNote: 'General liability and workers’ compensation. COI on request.',

  // ── Analytics ─────────────────────────────────────────────────────────
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_ID ?? '', // TODO
} as const

/** Brands installed as primary lines. TODO — confirm real dealer agreements. */
export const installBrands = [
  'Carrier',
  'Trane',
  'Lennox',
  'Rheem',
  'Daikin',
  'Mitsubishi Electric',
  'Navien',
  'Honeywell',
] as const

/** Additional brands serviced regardless of who installed them. */
export const servicedBrands = [
  'York',
  'Goodman',
  'American Standard',
  'Bryant',
  'Bosch',
  'LG',
  'Amana',
  'Ruud',
  'A.O. Smith',
  'Bradford White',
  'Rinnai',
  'Weil-McLain',
  'AAON',
  'ClimateMaster',
] as const

export type Site = typeof site
