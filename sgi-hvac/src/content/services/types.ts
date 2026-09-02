import type { Faq } from '@/components/sections/faq'
import type { Item } from '@/components/sections/blocks'
import type { ImageKey } from '@/content/images'

/**
 * Service taxonomy.
 *
 * Four pillars, each with a set of action pages beneath it. The reference site
 * generated 22 of its 60 pages from exactly this shape; defining it once means
 * a new action page is a data entry, not a new component.
 */

export type ServiceAction = {
  slug: string
  /** Short label for cards and breadcrumbs. */
  name: string
  title: string
  lead: string
  metaDescription: string
  /** Card body on the parent pillar page. */
  cardBody: string
  /** Four bullets on the parent pillar card. */
  cardFeatures: string[]

  /** 6-card grid: symptoms, signs, or reasons. */
  itemsEyebrow: string
  itemsTitle: string
  itemsLead?: string
  items: Item[]

  /** Four numbered steps. */
  processEyebrow: string
  processTitle: string
  processLead?: string
  process: Item[]

  /** Three things that move the price. */
  costEyebrow: string
  costTitle: string
  costLead?: string
  costDrivers: Item[]
  /** Published install ranges. Repair pages deliberately have none. */
  prices?: { title: string; rows: { label: string; range: string }[]; note: string }
  /** Shown when there are no published prices — explains why. */
  priceNote?: string

  faqs: Faq[]
}

export type ServicePillar = {
  slug: string
  name: string
  title: string
  lead: string
  metaDescription: string
  eyebrow: string
  image: ImageKey
  /** Dense opening paragraph, written to be quotable. */
  intro: string
  /** "Pick your path" intro. */
  actionsEyebrow: string
  actionsTitle: string
  actionsLead: string
  actions: ServiceAction[]
  problemsEyebrow: string
  problemsTitle: string
  problemsLead?: string
  problems: Item[]
  faqs: Faq[]
}
