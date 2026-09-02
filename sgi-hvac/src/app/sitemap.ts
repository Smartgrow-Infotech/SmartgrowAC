import type { MetadataRoute } from 'next'

import { site } from '@/config/site'
import { allActionParams, pillars } from '@/content/services'
import { metros } from '@/content/metros'
import { systems } from '@/content/systems'
import { commercialPrograms } from '@/content/commercial'
import { posts } from '@/content/posts'

/**
 * Priorities are relative and only meaningful against each other. The hubs and
 * the money pages sit at the top; the informational equipment pages sit below.
 * `lastModified` is build time, which is accurate for a fully static site.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const url = (path: string) => `${site.url}${path}`

  const entries: MetadataRoute.Sitemap = [
    { url: url('/'), priority: 1, changeFrequency: 'weekly' },
    { url: url('/services'), priority: 0.9, changeFrequency: 'monthly' },
    { url: url('/service-areas'), priority: 0.9, changeFrequency: 'monthly' },
    { url: url('/commercial'), priority: 0.9, changeFrequency: 'monthly' },
    { url: url('/emergency-hvac'), priority: 0.9, changeFrequency: 'monthly' },
    { url: url('/contact'), priority: 0.8, changeFrequency: 'monthly' },
    { url: url('/maintenance-plan'), priority: 0.8, changeFrequency: 'monthly' },
    { url: url('/hvac-systems'), priority: 0.7, changeFrequency: 'monthly' },
    { url: url('/about'), priority: 0.6, changeFrequency: 'yearly' },
    { url: url('/blog'), priority: 0.6, changeFrequency: 'monthly' },
    { url: url('/privacy-policy'), priority: 0.2, changeFrequency: 'yearly' },
    { url: url('/terms'), priority: 0.2, changeFrequency: 'yearly' },
    { url: url('/accessibility'), priority: 0.2, changeFrequency: 'yearly' },

    ...pillars.map((p) => ({
      url: url(`/services/${p.slug}`),
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    })),
    ...allActionParams.map(({ pillar, action }) => ({
      url: url(`/services/${pillar}/${action}`),
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    })),
    ...metros.map((m) => ({
      url: url(`/service-areas/${m.slug}`),
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    })),
    ...commercialPrograms.map((c) => ({
      url: url(`/commercial/${c.slug}`),
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    })),
    ...systems.map((s) => ({
      url: url(`/hvac-systems/${s.slug}`),
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    })),
    ...posts.map((p) => ({
      url: url(`/blog/${p.slug}`),
      priority: 0.5,
      changeFrequency: 'yearly' as const,
    })),
  ]

  return entries.map((e) => ({ ...e, lastModified: now }))
}
