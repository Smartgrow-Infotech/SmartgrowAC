/**
 * Maintenance plans. Shared by the homepage pricing band and /maintenance-plan.
 *
 * ⚠️ PRICING DECISION STILL OPEN — see smartgrow/contentReference.txt §12.
 * These are flat national "from" prices. Real HVAC labour varies 40–60% between
 * Phoenix and Philadelphia, so this may need to become a per-metro table.
 */

export type Plan = {
  id: string
  name: string
  /** Headline figure, e.g. "$189" or "Custom". */
  price: string
  /** Billing unit appended directly to the price, e.g. "/yr". Empty for custom. */
  unit: string
  /** What you get, rendered after a separator. */
  note: string
  badge?: string
  summary: string
  features: string[]
  cta: { label: string; href: string }
}

/** "$189/yr · 1 annual visit" — and "Custom · Priced per building". */
export const priceLine = (p: Plan) => `${p.price}${p.unit} · ${p.note}`

export const plans: Plan[] = [
  {
    id: 'essential',
    name: 'Essential',
    price: '$189',
    unit: '/yr',
    note: '1 annual visit',
    summary:
      'One full system tune-up per year. Right for single-system homes in mild climates where one seasonal check is enough.',
    features: [
      'One full system tune-up per year',
      'Priority scheduling on repair calls',
      '15% off replacement pricing',
      'Free diagnostic on repair visits',
      'Cancel any time',
    ],
    cta: { label: 'Start Essential', href: '/contact' },
  },
  {
    id: 'complete',
    name: 'Complete',
    price: '$259',
    unit: '/yr',
    note: '2 visits',
    badge: 'Most popular',
    summary:
      'Pre-season cooling tune-up plus pre-season heating tune-up. The right choice in any metro with a real winter and a real summer.',
    features: [
      'Spring cooling + fall heating tune-ups',
      'Priority scheduling on repair calls',
      '15% off replacement pricing',
      'Free diagnostic on repair visits',
      'Flexible scheduling · cancel any time',
    ],
    cta: { label: 'Start Complete', href: '/contact' },
  },
  {
    id: 'facility',
    name: 'Facility',
    price: 'Custom',
    unit: '',
    note: 'Priced per building',
    summary:
      'Multi-system, rooftop, PTAC and multi-site facility contracts. Priced on equipment count, visit frequency and response tier.',
    features: [
      'Multi-system and multi-site contracts',
      'Rooftop and packaged-unit programs',
      'PTAC and per-unit programs',
      'Quarterly, semi-annual or annual cadence',
      'Defined response SLAs in writing',
    ],
    cta: {
      label: 'Talk to our commercial team',
      href: '/commercial/national-accounts',
    },
  },
]
