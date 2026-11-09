import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { Service, WithContext } from 'schema-dts'

import { site } from '@/config/site'
import { pillars, pillarBySlug } from '@/content/services'
import { images } from '@/content/images'
import { PageHero } from '@/components/sections/page-hero'
import { ActionCards, ItemGrid } from '@/components/sections/blocks'
import { Container, Section } from '@/components/sections/section'
import { CoverageStrip } from '@/components/sections/coverage'
import { FaqSection, FinalCta } from '@/components/sections/faq'
import { JsonLd } from '@/components/seo/json-ld'

export function generateStaticParams() {
  return pillars.map((p) => ({ pillar: p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/services/[pillar]'>): Promise<Metadata> {
  const { pillar } = await params
  const p = pillarBySlug(pillar)
  if (!p) return {}

  return {
    title: p.name,
    description: p.metaDescription,
    alternates: { canonical: `/services/${pillar}` },
    openGraph: {
      title: `${p.name} | ${site.name}`,
      description: p.metaDescription,
      url: `${site.url}/services/${pillar}`,
    },
  }
}

export default async function ServicePillarPage({
  params,
}: PageProps<'/services/[pillar]'>) {
  const { pillar } = await params
  const p = pillarBySlug(pillar)
  if (!p) notFound()

  const schema: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: p.name,
    serviceType: p.name,
    description: p.metaDescription,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'United States' },
  }

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        lead={p.lead}
        crumbs={[{ label: 'Services', href: '/services' }, { label: p.name }]}
        image={images[p.image]}
      />

      {/* AEO intro — dense and quotable */}
      <Section size="sm">
        <Container>
          <p className="max-w-[78ch] text-lead leading-relaxed text-foreground">
            {p.intro}
          </p>
        </Container>
      </Section>

      <ActionCards
        eyebrow={p.actionsEyebrow}
        title={p.actionsTitle}
        lead={p.actionsLead}
        cards={p.actions.map((a) => ({
          title: a.name,
          body: a.cardBody,
          href: `/services/${p.slug}/${a.slug}`,
          features: a.cardFeatures,
        }))}
        tone="default"
      />

      <ItemGrid
        eyebrow={p.problemsEyebrow}
        title={p.problemsTitle}
        lead={p.problemsLead}
        items={p.problems}
        tone="cloud"
      />

      <CoverageStrip title={`${p.name} in all ${site.stats.metros} metros.`} />

      <FaqSection
        faqs={p.faqs}
        eyebrow="Quick answers"
        title={`Common questions about ${p.name.toLowerCase()}.`}
        tone="mist"
      />

      <FinalCta
        title="Ready to schedule?"
        lead={`Dispatch answered 24/7. Emergency service in all ${site.stats.metros} metros.`}
      />
    </>
  )
}
