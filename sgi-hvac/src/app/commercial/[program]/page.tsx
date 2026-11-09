import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import type { Service, WithContext } from 'schema-dts'

import { site } from '@/config/site'
import { commercialPrograms, programBySlug } from '@/content/commercial'
import { images } from '@/content/images'
import { PageHero } from '@/components/sections/page-hero'
import { ItemGrid, ProcessSteps } from '@/components/sections/blocks'
import { Container, Section, SectionHeader } from '@/components/sections/section'
import { CoverageStrip } from '@/components/sections/coverage'
import { FaqSection, FinalCta } from '@/components/sections/faq'
import { JsonLd } from '@/components/seo/json-ld'

export function generateStaticParams() {
  return commercialPrograms.map((p) => ({ program: p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/commercial/[program]'>): Promise<Metadata> {
  const { program } = await params
  const p = programBySlug(program)
  if (!p) return {}

  return {
    title: p.name,
    description: p.metaDescription,
    alternates: { canonical: `/commercial/${program}` },
    openGraph: {
      title: `${p.name} | ${site.name}`,
      description: p.metaDescription,
      url: `${site.url}/commercial/${program}`,
    },
  }
}

export default async function CommercialProgramPage({
  params,
}: PageProps<'/commercial/[program]'>) {
  const { program } = await params
  const p = programBySlug(program)
  if (!p) notFound()

  const others = commercialPrograms.filter((x) => x.slug !== p.slug).slice(0, 4)

  const schema: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: p.name,
    serviceType: `Commercial HVAC — ${p.name}`,
    description: p.metaDescription,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'United States' },
  }

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        eyebrow={p.name}
        title={p.title}
        lead={p.lead}
        crumbs={[
          { label: 'Commercial', href: '/commercial' },
          { label: p.name },
        ]}
        image={images[p.image]}
      />

      {/* The problem this program solves */}
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <SectionHeader eyebrow="What we do" title="The problem, stated plainly." />
            <div className="space-y-4">
              {p.whatWeDo.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-lead text-muted-foreground"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <ItemGrid
        eyebrow="Why operators choose this"
        title={p.whyTitle}
        items={p.why}
        tone="mist"
      />

      <ProcessSteps
        eyebrow="How it works"
        title={p.engagementTitle}
        steps={p.engagement}
        tone="default"
      />

      <ItemGrid
        eyebrow="What affects pricing"
        title={p.pricingTitle}
        items={p.pricing}
        columns={3}
        tone="cloud"
      />

      {/* Honest-coverage commitment — the trust anchor for this whole section */}
      <Section tone="navy" glow>
        <Container>
          <SectionHeader
            eyebrow="Our commitment"
            title="We will tell you what we cannot cover."
            onDark
          />
          <p className="mt-6 max-w-[72ch] text-lead leading-relaxed text-white/85">
            A national program that quietly subcontracts your outlying location
            to whoever answered the phone is not a national program — it is a
            markup. If a site falls outside our coverage, we say so and help you
            source it properly. For multi-site operators we map which of your
            locations we can serve well before you sign anything.
          </p>
          <a
            href={site.phoneHref}
            className="mt-7 inline-flex min-h-11 items-center rounded-lg bg-gold px-6 text-[15px] font-semibold text-navy transition-transform duration-200 hover:-translate-y-0.5"
          >
            Call {site.phone}
          </a>
        </Container>
      </Section>

      {/* Other programs */}
      <Section tone="sand">
        <Container>
          <SectionHeader
            eyebrow="Other programs"
            title="How else we work with commercial clients."
          />
          <ul role="list" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/commercial/${o.slug}`}
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

      <CoverageStrip title={`${p.name} across all ${site.stats.metros} metros.`} />

      <FaqSection
        faqs={p.faqs}
        eyebrow="Quick answers"
        title={`${p.name}: common questions.`}
        tone="mist"
      />

      <FinalCta
        title="Start with a walkthrough."
        lead="No charge, no obligation. We will tell you honestly what we can and cannot cover."
      />
    </>
  )
}
