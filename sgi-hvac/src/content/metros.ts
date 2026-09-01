/**
 * The 10 metro markets.
 *
 * Chosen for genuine climate and building-stock CONTRAST, not population.
 * That is the whole content strategy: the reference site won on hyper-local
 * proof (neighbourhood names, "5 minutes from our shop"), which does not
 * survive going national. Ten metros with ten genuinely different HVAC
 * problems gives every metro page something real to say instead of
 * find-and-replace copy.
 *
 * See smartgrow/contentReference.txt §2.
 */

export type Metro = {
  slug: string
  city: string
  state: string
  stateName: string
  /** Short label used on tiles and in the footer strip. */
  name: string
  /** One-line hook — the thing that makes this market different. */
  hook: string
  /** Used in hero subheads and the coverage grid. */
  region: 'Southwest' | 'West & Mountain' | 'Midwest & Northeast' | 'Southeast'
  isHeadquarters?: boolean
  /** Surrounding cities we serve in this metro. */
  cities: string[]
  /** Major routes — the local-knowledge signal. */
  corridors: string[]
  /** Geo coordinates for per-metro LocalBusiness schema. */
  geo: { lat: number; lng: number }
}

export const metros: Metro[] = [
  {
    slug: 'dallas-fort-worth',
    city: 'Dallas–Fort Worth',
    state: 'TX',
    stateName: 'Texas',
    name: 'Dallas–Fort Worth',
    hook: 'HQ. Heat pumps, attic air handlers, and cooling loads that run eight months a year.',
    region: 'Southwest',
    isHeadquarters: true,
    cities: [
      'Dallas',
      'Fort Worth',
      'Plano',
      'Arlington',
      'Irving',
      'Frisco',
      'Garland',
      'Richardson',
      'McKinney',
      'Grand Prairie',
    ],
    corridors: ['I-35E', 'I-635 LBJ', 'Dallas North Tollway', 'SH-121', 'I-30'],
    geo: { lat: 32.7767, lng: -96.797 },
  },
  {
    slug: 'houston',
    city: 'Houston',
    state: 'TX',
    stateName: 'Texas',
    name: 'Houston',
    hook: 'Humidity is the real problem here, not temperature.',
    region: 'Southwest',
    cities: [
      'Houston',
      'Katy',
      'Sugar Land',
      'The Woodlands',
      'Pearland',
      'Pasadena',
      'Cypress',
      'Spring',
    ],
    corridors: ['I-610 Loop', 'I-45', 'US-59 / I-69', 'Beltway 8'],
    geo: { lat: 29.7604, lng: -95.3698 },
  },
  {
    slug: 'phoenix',
    city: 'Phoenix',
    state: 'AZ',
    stateName: 'Arizona',
    name: 'Phoenix',
    hook: 'Packaged rooftop units under the hardest duty cycle in the country.',
    region: 'Southwest',
    cities: [
      'Phoenix',
      'Scottsdale',
      'Mesa',
      'Tempe',
      'Chandler',
      'Gilbert',
      'Glendale',
      'Peoria',
      'Surprise',
      'Avondale',
    ],
    corridors: ['I-10', 'Loop 101', 'Loop 202', 'SR-51'],
    geo: { lat: 33.4484, lng: -112.074 },
  },
  {
    slug: 'los-angeles',
    city: 'Los Angeles',
    state: 'CA',
    stateName: 'California',
    name: 'Los Angeles',
    hook: 'Older homes without ductwork. Ductless retrofit country.',
    region: 'West & Mountain',
    cities: [
      'Los Angeles',
      'Pasadena',
      'Glendale',
      'Burbank',
      'Santa Monica',
      'Long Beach',
      'Torrance',
      'Inglewood',
    ],
    corridors: ['I-405', 'I-10', 'US-101', 'I-110'],
    geo: { lat: 34.0522, lng: -118.2437 },
  },
  {
    slug: 'denver',
    city: 'Denver',
    state: 'CO',
    stateName: 'Colorado',
    name: 'Denver',
    hook: 'Altitude-derated combustion and genuinely dry winter air.',
    region: 'West & Mountain',
    cities: [
      'Denver',
      'Aurora',
      'Lakewood',
      'Littleton',
      'Arvada',
      'Westminster',
      'Centennial',
      'Thornton',
    ],
    corridors: ['I-25', 'I-70', 'C-470', 'US-36'],
    geo: { lat: 39.7392, lng: -104.9903 },
  },
  {
    slug: 'chicago',
    city: 'Chicago',
    state: 'IL',
    stateName: 'Illinois',
    name: 'Chicago',
    hook: 'Boilers, two-flats, and 90%+ AFUE conversions.',
    region: 'Midwest & Northeast',
    cities: [
      'Chicago',
      'Evanston',
      'Oak Park',
      'Naperville',
      'Schaumburg',
      'Cicero',
      'Berwyn',
      'Skokie',
    ],
    corridors: ['I-90/94 Kennedy', 'I-290 Eisenhower', 'I-55', 'Lake Shore Drive'],
    geo: { lat: 41.8781, lng: -87.6298 },
  },
  {
    slug: 'philadelphia',
    city: 'Philadelphia',
    state: 'PA',
    stateName: 'Pennsylvania',
    name: 'Philadelphia',
    hook: 'Rowhomes, oil-to-gas conversions, and no room for ducts.',
    region: 'Midwest & Northeast',
    cities: [
      'Philadelphia',
      'Bala Cynwyd',
      'Cherry Hill',
      'Upper Darby',
      'King of Prussia',
      'Conshohocken',
      'Media',
    ],
    corridors: ['I-76 Schuylkill', 'I-95', 'Roosevelt Blvd', 'US-1'],
    geo: { lat: 39.9526, lng: -75.1652 },
  },
  {
    slug: 'new-york',
    city: 'New York',
    state: 'NY',
    stateName: 'New York',
    name: 'New York',
    hook: 'PTAC, water-source heat pumps, and building coordination.',
    region: 'Midwest & Northeast',
    cities: [
      'Manhattan',
      'Brooklyn',
      'Queens',
      'The Bronx',
      'Staten Island',
      'Jersey City',
      'Hoboken',
      'Yonkers',
    ],
    corridors: ['FDR Drive', 'BQE', 'I-495 LIE', 'West Side Highway'],
    geo: { lat: 40.7128, lng: -74.006 },
  },
  {
    slug: 'atlanta',
    city: 'Atlanta',
    state: 'GA',
    stateName: 'Georgia',
    name: 'Atlanta',
    hook: 'Crawlspace ductwork and humidity swings in both seasons.',
    region: 'Southeast',
    cities: [
      'Atlanta',
      'Marietta',
      'Sandy Springs',
      'Decatur',
      'Alpharetta',
      'Roswell',
      'Smyrna',
      'Dunwoody',
    ],
    corridors: ['I-285 Perimeter', 'I-75', 'I-85', 'GA-400'],
    geo: { lat: 33.749, lng: -84.388 },
  },
  {
    slug: 'miami',
    city: 'Miami',
    state: 'FL',
    stateName: 'Florida',
    name: 'Miami',
    hook: 'Salt-air corrosion and high-rise condo systems.',
    region: 'Southeast',
    cities: [
      'Miami',
      'Miami Beach',
      'Coral Gables',
      'Hialeah',
      'Aventura',
      'Doral',
      'Kendall',
      'Fort Lauderdale',
    ],
    corridors: ['I-95', 'US-1 Dixie Highway', 'Palmetto Expressway', 'I-195'],
    geo: { lat: 25.7617, lng: -80.1918 },
  },
]

export const metroBySlug = (slug: string) => metros.find((m) => m.slug === slug)

export const metroSlugs = metros.map((m) => m.slug)

export const headquartersMetro = metros.find((m) => m.isHeadquarters)!

/** Grouped for the Coverage mega-menu column layout. */
export const metrosByRegion = metros.reduce<Record<string, Metro[]>>(
  (acc, m) => {
    ;(acc[m.region] ??= []).push(m)
    return acc
  },
  {},
)
