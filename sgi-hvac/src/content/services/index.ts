import { airConditioning } from './air-conditioning'
import { heating } from './heating'
import { indoorAirQuality } from './indoor-air-quality'
import { waterHeaters } from './water-heaters'

export type { ServicePillar, ServiceAction } from './types'

/** The four service pillars, in nav order. */
export const pillars = [
  airConditioning,
  heating,
  indoorAirQuality,
  waterHeaters,
] as const

export const pillarBySlug = (slug: string) =>
  pillars.find((p) => p.slug === slug)

export const actionBySlug = (pillarSlug: string, actionSlug: string) =>
  pillarBySlug(pillarSlug)?.actions.find((a) => a.slug === actionSlug)

/** Every pillar/action pair, for generateStaticParams. */
export const allActionParams = pillars.flatMap((p) =>
  p.actions.map((a) => ({ pillar: p.slug, action: a.slug })),
)
