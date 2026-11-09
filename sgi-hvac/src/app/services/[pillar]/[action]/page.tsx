import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { Service, WithContext } from 'schema-dts'

import { site } from '@/config/site'
import {
  pillarBySlug,
  actionBySlug,
  allActionParams,
} from '@/content/services'
import { images } from '@/content/images'
import { PageHero } from '@/components/sections/page-hero'
import {
  ItemGrid,
  ProcessSteps,
  ActionCards,
  PriceBand,
} from '@/components/sections/blocks'
import { Container, Section, SectionHeader } from '@/components/sections/section'
import { CoverageStrip } from '@/components/sections/coverage'
import { FaqSection, FinalCta } from '@/components/sections/faq'
import { JsonLd } from '@/components/seo/json-ld'

export function generateStaticParams() {
  return allActionParams
}

export async function generateMetadata({
  params,
}: PageProps<'/services/[pillar]/[action]'>): Promise<Metadata> {
  const { pillar, action } = await params
  const a = actionBySlug(pillar, action)
  if (!a) return {}

  return {
    title: a.name,
    description: a.metaDescription,
    alternates: { canonical: `/services/${pillar}/${action}` },
    openGraph: {
      title: `${a.name} | ${site.name}`,
      description: a.metaDescription,
      url: `${site.url}/services/${pillar}/${action}`,
    },
  }
}

export default async function ServiceActionPage({
  params,
}: PageProps<'/services/[pillar]/[action]'>) {
  const { pillar, action } = await params
  const p = pillarBySlug(pillar)
  const a = actionBySlug(pillar, action)
  if (!p || !a) notFound()

  /** The other actions under the same pillar — "two other ways we help". */
  const siblings = p.actions
    .filter((x) => x.slug !== a.slug)
    .slice(0, 3)
    .map((x) => ({
      title: x.name,
      body: x.cardBody,
      href: `/services/${p.slug}/${x.slug}`,
      features: x.cardFeatures,
    }))

  const schema: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: a.name,
    serviceType: `${p.name} — ${a.name}`,
    description: a.metaDescription,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'United States' },
  }

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        eyebrow={a.name}
        title={a.title}
        lead={a.lead}
        crumbs={[
          { label: 'Services', href: '/services' },
          { label: p.name, href: `/services/${p.slug}` },
          { label: a.name },
        ]}
        image={images[p.image]}
      />

      <ItemGrid
        eyebrow={a.itemsEyebrow}
        title={a.itemsTitle}
        lead={a.itemsLead}
        items={a.items}
      />

      <ProcessSteps
        eyebrow={a.processEyebrow}
        title={a.processTitle}
        lead={a.processLead}
        steps={a.process}
        tone="cloud"
      />

      <ItemGrid
        eyebrow={a.costEyebrow}
        title={a.costTitle}
        lead={a.costLead}
        items={a.costDrivers}
        columns={3}
      />

      {a.prices ? (
        <PriceBand
          title={a.prices.title}
          rows={a.prices.rows}
          note={a.prices.note}
          tone="navy"
        />
      ) : (
        a.priceNote && (
          <Section tone="navy" glow>
            <Container>
              <SectionHeader
                eyebrow="On pricing"
                title="Why we will not quote a repair before we look."
                onDark
              />
              <p className="mt-6 max-w-[70ch] text-lead leading-relaxed text-white/85">
                {a.priceNote}
              </p>
              <a
                href={site.phoneHref}
                className="mt-7 inline-flex min-h-11 items-center rounded-lg bg-gold px-6 text-[15px] font-semibold text-navy transition-transform duration-200 hover:-translate-y-0.5"
              >
                Call {site.phone}
              </a>
            </Container>
          </Section>
        )
      )}

      {siblings.length > 0 && (
        <ActionCards
          eyebrow={`Other ${p.name.toLowerCase()} services`}
          title="Not what you need? Here is where to go next."
          cards={siblings}
          tone="sand"
        />
      )}

      <CoverageStrip title={`${a.name} in all ${site.stats.metros} metros.`} />

      <FaqSection
        faqs={a.faqs}
        eyebrow="Quick answers"
        title={`${a.name}: common questions.`}
        tone="mist"
      />

      <FinalCta
        title="Ready when you are."
        lead={`Dispatch answered 24/7 across all ${site.stats.metros} metros.`}
      />
    </>
  )
}
