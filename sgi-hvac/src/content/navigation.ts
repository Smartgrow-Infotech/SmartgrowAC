/**
 * SINGLE SOURCE OF TRUTH for navigation.
 *
 * The header mega-menus, the mobile drawer and the footer all read from here.
 * The reference site hand-maintained its nav and footer separately and shipped
 * a broken footer link as a result (/commercial/rooftop-crane/, a page that
 * does not exist). Deriving all three from one structure makes that class of
 * bug impossible.
 *
 * See smartgrow/contentReference.txt §4.
 */
import { site } from '@/config/site'
import { metros } from './metros'

export type NavLink = {
  label: string
  href: string
  /** Optional one-line descriptor shown in mega-menus. */
  note?: string
}

export type NavColumn = {
  heading: string
  links: NavLink[]
}

export type FeaturedPanel = {
  eyebrow: string
  title: string
  body: string
  cta: NavLink
}

export type NavSection = {
  label: string
  href: string
  columns: NavColumn[]
  featured: FeaturedPanel
  /** Grid template for the mega-menu on desktop. */
  gridClass: string
}

export const navSections: NavSection[] = [
  {
    label: 'Services',
    href: '/services',
    gridClass: 'lg:grid-cols-[1fr_1fr_1fr_1fr_1.25fr]',
    columns: [
      {
        heading: 'Air Conditioning',
        links: [
          { label: 'All AC Services', href: '/services/air-conditioning' },
          { label: 'AC Repair', href: '/services/air-conditioning/repair' },
          { label: 'AC Maintenance', href: '/services/air-conditioning/maintenance' },
          {
            label: 'Install & Replace',
            href: '/services/air-conditioning/installation-replacement',
          },
        ],
      },
      {
        heading: 'Heating',
        links: [
          { label: 'All Heating', href: '/services/heating' },
          { label: 'Heating Repair', href: '/services/heating/repair' },
          { label: 'Heating Maintenance', href: '/services/heating/maintenance' },
          {
            label: 'Install & Replace',
            href: '/services/heating/installation-replacement',
          },
          { label: 'Furnace Repair', href: '/services/heating/furnace-repair' },
          { label: 'Heat Pump Repair', href: '/services/heating/heat-pump-repair' },
        ],
      },
      {
        heading: 'Indoor Air Quality',
        links: [
          { label: 'All IAQ', href: '/services/indoor-air-quality' },
          { label: 'Air Purifiers', href: '/services/indoor-air-quality/air-purifiers' },
          { label: 'Humidifiers', href: '/services/indoor-air-quality/humidifiers' },
          {
            label: 'Dehumidifiers',
            href: '/services/indoor-air-quality/dehumidifiers',
          },
          { label: 'Ventilation', href: '/services/indoor-air-quality/ventilation' },
        ],
      },
      {
        heading: 'Water Heaters',
        links: [
          { label: 'All Water Heaters', href: '/services/water-heaters' },
          { label: 'Repair', href: '/services/water-heaters/repair' },
          { label: 'Maintenance', href: '/services/water-heaters/maintenance' },
          {
            label: 'Install & Replace',
            href: '/services/water-heaters/installation-replacement',
          },
          { label: 'Tankless', href: '/services/water-heaters/tankless-water-heaters' },
        ],
      },
    ],
    featured: {
      eyebrow: 'No heat? No cool?',
      title: 'Dispatch answered 24/7.',
      body: "Emergency HVAC in all 10 metros. We'll tell you the real arrival window — not a marketing one.",
      cta: { label: `Call ${site.phone}`, href: site.phoneHref },
    },
  },
  {
    label: 'Systems',
    href: '/hvac-systems',
    gridClass: 'lg:grid-cols-[1fr_1fr_1fr_1.25fr]',
    columns: [
      {
        heading: 'For Homes',
        links: [
          {
            label: 'Ductless Mini-Splits',
            href: '/hvac-systems/ductless-mini-splits',
            note: 'No ductwork required',
          },
          {
            label: 'Heat Pumps',
            href: '/hvac-systems/heat-pumps',
            note: 'One system, both seasons',
          },
          {
            label: 'Central HVAC',
            href: '/hvac-systems/central-hvac-systems',
            note: 'Traditional split systems',
          },
          {
            label: 'Zoning Systems',
            href: '/hvac-systems/zoning-systems',
            note: 'Room-by-room control',
          },
          {
            label: 'Smart Thermostats',
            href: '/hvac-systems/smart-thermostats',
            note: 'Installed and paired properly',
          },
        ],
      },
      {
        heading: 'For Buildings',
        links: [
          {
            label: 'PTAC Units',
            href: '/hvac-systems/ptac-units',
            note: 'Hotels & high-rise condos',
          },
          {
            label: 'Water-Source Heat Pumps',
            href: '/hvac-systems/water-source-heat-pumps',
            note: 'Mid- and high-rise',
          },
          {
            label: 'Rooftop Units',
            href: '/hvac-systems/rooftop-units',
            note: 'Commercial packaged systems',
          },
        ],
      },
      {
        heading: 'Browse',
        links: [
          { label: 'All HVAC Systems', href: '/hvac-systems' },
          { label: 'All Services', href: '/services' },
          { label: 'Commercial Work', href: '/commercial' },
        ],
      },
    ],
    featured: {
      eyebrow: 'Not sure what fits?',
      title: 'Get a load calculation, not a guess.',
      body: 'Manual J on every residential install. Manual N on commercial. We size to the building, not to the invoice.',
      cta: { label: 'Request an estimate', href: '/contact' },
    },
  },
  {
    label: 'Commercial',
    href: '/commercial',
    gridClass: 'lg:grid-cols-[1.2fr_1fr_1.25fr]',
    columns: [
      {
        heading: 'By Program',
        links: [
          {
            label: 'National Accounts',
            href: '/commercial/national-accounts',
            note: 'Multi-site, one agreement',
          },
          {
            label: 'Property Management',
            href: '/commercial/property-management',
            note: 'Portfolio contracts',
          },
          {
            label: 'Multifamily & HOA',
            href: '/commercial/multifamily',
            note: 'Per-unit programs',
          },
          {
            label: 'Hospitality',
            href: '/commercial/hospitality',
            note: 'Hotels & restaurant groups',
          },
          {
            label: 'Light Commercial',
            href: '/commercial/light-commercial',
            note: 'Single-site offices & retail',
          },
        ],
      },
      {
        heading: 'Services',
        links: [
          {
            label: 'Rooftop Replacement',
            href: '/commercial/rooftop-replacement',
            note: 'Crane, permits, coordination',
          },
          {
            label: 'Maintenance Contracts',
            href: '/commercial/maintenance-contracts',
            note: 'Quarterly to annual',
          },
          {
            label: 'Emergency HVAC',
            href: '/emergency-hvac',
            note: '24/7 priority dispatch',
          },
        ],
      },
    ],
    featured: {
      eyebrow: 'Multi-site operators',
      title: 'One agreement. Ten metros. One invoice.',
      body: 'Stop managing ten vendor relationships. Consolidated SLAs, unified reporting, one account manager.',
      cta: { label: 'See national accounts', href: '/commercial/national-accounts' },
    },
  },
  {
    label: 'Coverage',
    href: '/service-areas',
    gridClass: 'lg:grid-cols-[1fr_1fr_1fr_1.25fr]',
    columns: [
      {
        heading: 'Southwest',
        links: metros
          .filter((m) => m.region === 'Southwest')
          .map((m) => ({ label: m.name, href: `/service-areas/${m.slug}` })),
      },
      {
        heading: 'West & Mountain',
        links: metros
          .filter((m) => m.region === 'West & Mountain')
          .map((m) => ({ label: m.name, href: `/service-areas/${m.slug}` })),
      },
      {
        heading: 'Midwest, Northeast & Southeast',
        links: [
          ...metros
            .filter(
              (m) => m.region === 'Midwest & Northeast' || m.region === 'Southeast',
            )
            .map((m) => ({ label: m.name, href: `/service-areas/${m.slug}` })),
          { label: 'All 10 metros', href: '/service-areas' },
        ],
      },
    ],
    featured: {
      eyebrow: 'Headquarters',
      title: `${site.address.city}, ${site.address.region}.`,
      body: `${site.address.street}. National dispatch, local crews — every technician licensed in the state they work in.`,
      cta: { label: 'Dallas–Fort Worth HVAC', href: '/service-areas/dallas-fort-worth' },
    },
  },
  {
    label: 'Company',
    href: '/about',
    gridClass: 'lg:grid-cols-[1fr_1fr_1.25fr]',
    columns: [
      {
        heading: 'Plans & Service',
        links: [
          { label: 'Maintenance Plan', href: '/maintenance-plan' },
          { label: 'Emergency HVAC', href: '/emergency-hvac' },
          { label: 'Commercial Contracts', href: '/commercial/maintenance-contracts' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Blog', href: '/blog' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    featured: {
      eyebrow: 'Recommended',
      title: 'Maintenance Plan from $189/yr.',
      body: 'Essential $189 · Complete $259 · Facility on request. Cancel any time.',
      cta: { label: 'See plans', href: '/maintenance-plan' },
    },
  },
]

export const footerColumns: NavColumn[] = [
  {
    heading: 'Services',
    links: [
      { label: 'Air Conditioning', href: '/services/air-conditioning' },
      { label: 'Heating', href: '/services/heating' },
      { label: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
      { label: 'Water Heaters', href: '/services/water-heaters' },
      { label: 'Maintenance Plan', href: '/maintenance-plan' },
      { label: 'Emergency HVAC', href: '/emergency-hvac' },
    ],
  },
  {
    heading: 'Systems',
    links: [
      { label: 'Ductless Mini-Splits', href: '/hvac-systems/ductless-mini-splits' },
      { label: 'Heat Pumps', href: '/hvac-systems/heat-pumps' },
      { label: 'Central HVAC', href: '/hvac-systems/central-hvac-systems' },
      { label: 'PTAC Units', href: '/hvac-systems/ptac-units' },
      { label: 'Rooftop Units', href: '/hvac-systems/rooftop-units' },
      { label: 'All Systems', href: '/hvac-systems' },
    ],
  },
  {
    heading: 'Commercial',
    links: [
      { label: 'National Accounts', href: '/commercial/national-accounts' },
      { label: 'Property Management', href: '/commercial/property-management' },
      { label: 'Multifamily & HOA', href: '/commercial/multifamily' },
      { label: 'Hospitality', href: '/commercial/hospitality' },
      { label: 'Light Commercial', href: '/commercial/light-commercial' },
      { label: 'Maintenance Contracts', href: '/commercial/maintenance-contracts' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Emergency HVAC', href: '/emergency-hvac' },
    ],
  },
]

export const legalLinks: NavLink[] = [
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Sitemap', href: '/sitemap.xml' },
]

/**
 * Every internal href the navigation references. Used by the link-integrity
 * test so a nav entry pointing at a non-existent route fails the build rather
 * than shipping.
 */
export const allNavHrefs = [
  ...navSections.flatMap((s) => [
    s.href,
    ...s.columns.flatMap((c) => c.links.map((l) => l.href)),
    s.featured.cta.href,
  ]),
  ...footerColumns.flatMap((c) => c.links.map((l) => l.href)),
  ...legalLinks.map((l) => l.href),
].filter((h) => h.startsWith('/'))
