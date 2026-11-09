import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import type { Product, WithContext } from 'schema-dts'

import { site } from '@/config/site'
import { systems, systemBySlug } from '@/content/systems'
import { images } from '@/content/images'
import { PageHero } from '@/components/sections/page-hero'
import { ItemGrid, ProcessSteps, PriceBand } from '@/components/sections/blocks'
import { Container, Section, SectionHeader } from '@/components/sections/section'
import { CoverageStrip } from '@/components/sections/coverage'
import { FaqSection, FinalCta } from '@/components/sections/faq'
import { JsonLd } from '@/components/seo/json-ld'

export function generateStaticParams() {
  return systems.map((s) => ({ system: s.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/hvac-systems/[system]'>): Promise<Metadata> {
  const { system } = await params
  const s = systemBySlug(system)
  if (!s) return {}

  return {
    title: s.name,
    description: s.metaDescription,
    alternates: { canonical: `/hvac-systems/${system}` },
    openGraph: {
      title: `${s.name} | ${site.name}`,
      description: s.metaDescription,
      url: `${site.url}/hvac-systems/${system}`,
    },
  }
}

export default async function SystemPage({
  params,
}: PageProps<'/hvac-systems/[system]'>) {
  const { system } = await params
  const s = systemBySlug(system)
  if (!s) notFound()

  const others = systems.filter((x) => x.slug !== s.slug).slice(0, 4)

  const schema: WithContext<Product> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: s.name,
    description: s.metaDescription,
    category: 'HVAC equipment',
    brand: s.brands.map((b) => ({ '@type': 'Brand' as const, name: b })),
    // No offers node: prices are ranges scoped by market, not a purchasable SKU.
  }

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        eyebrow={s.name}
        title={s.title}
        lead={s.lead}
        crumbs={[
          { label: 'Systems', href: '/hvac-systems' },
          { label: s.name },
        ]}
        image={images[s.image]}
      />

      {/* Plain-English explainer */}
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <SectionHeader eyebrow="What it is" title="In plain English." />
            <div className="space-y-4">
              {s.whatItIs.map((p) => (
                <p key={p.slice(0, 40)} className="text-lead text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <ItemGrid
        eyebrow="Why this system"
        title={s.benefitsTitle}
        items={s.benefits}
        tone="mist"
      />

      {/* Brands */}
      <Section tone="electric" size="sm">
        <Container>
          <SectionHeader
            eyebrow="Equipment we install"
            title={`${s.name} brands we install and service.`}
            onDark
          />
          <ul role="list" className="mt-7 flex flex-wrap gap-3">
            {s.brands.map((b) => (
              <li
                key={b}
                className="rounded-full border border-white/14 bg-white/6 px-4 py-2 font-mono text-[12px] uppercase tracking-[0.1em] text-white"
              >
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[70ch] text-sm leading-relaxed text-white/90">
            We service every major brand regardless of who installed it. Brand
            matters far less than whether the system was sized and installed
            correctly in the first place.
          </p>
        </Container>
      </Section>

      <ProcessSteps
        eyebrow="Sizing and options"
        title={s.sizingTitle}
        steps={s.sizing}
        tone="default"
      />

      <ItemGrid
        eyebrow="What installation involves"
        title={s.installTitle}
        items={s.install}
        columns={3}
        tone="cloud"
      />

      {s.prices && (
        <PriceBand
          title={s.prices.title}
          rows={s.prices.rows}
          note={s.prices.note}
          tone="navy"
        />
      )}

      {/* Compare other systems */}
      <Section tone="sand">
        <Container>
          <SectionHeader
            eyebrow="Compare"
            title="Considering something else?"
            lead="Each system suits a different building. These are the usual alternatives."
          />
          <ul role="list" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/hvac-systems/${o.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-background p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="font-display text-[17px] font-bold leading-snug">
                    {o.name}
                  </span>
                  <span className="mt-1.5 flex-1 text-sm text-muted-foreground">
                    {o.navNote}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-action">
                    Explore
                    <ArrowRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CoverageStrip title={`${s.name} in all ${site.stats.metros} metros.`} />

      <FaqSection
        faqs={s.faqs}
        eyebrow="Quick answers"
        title={`${s.name}: common questions.`}
        tone="mist"
      />

      <FinalCta
        title="Not sure this is the right system?"
        lead="Free assessment. We will recommend honestly, even when it is not the most expensive option."
      />
    </>
  )
}
