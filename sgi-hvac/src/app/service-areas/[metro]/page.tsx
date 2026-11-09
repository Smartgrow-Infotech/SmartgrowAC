import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Quote } from 'lucide-react'
import type { HVACBusiness, WithContext } from 'schema-dts'

import { site } from '@/config/site'
import { metros, metroBySlug } from '@/content/metros'
import { metroContent } from '@/content/metro-content'
import { images } from '@/content/images'
import { Container, Section, SectionHeader } from '@/components/sections/section'
import { PageHero } from '@/components/sections/page-hero'
import { ItemGrid, Explainer } from '@/components/sections/blocks'
import { FaqSection, FinalCta } from '@/components/sections/faq'
import { JsonLd } from '@/components/seo/json-ld'

/** Every service is available in every metro — the list is deliberately identical. */
const serviceChips = [
  { label: 'Air Conditioning', href: '/services/air-conditioning' },
  { label: 'Heating', href: '/services/heating' },
  { label: 'Water Heaters', href: '/services/water-heaters' },
  { label: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
  { label: 'Ductless Mini-Splits', href: '/hvac-systems/ductless-mini-splits' },
  { label: 'Heat Pumps', href: '/hvac-systems/heat-pumps' },
  { label: 'Emergency HVAC', href: '/emergency-hvac' },
  { label: 'Maintenance Plans', href: '/maintenance-plan' },
  { label: 'Commercial', href: '/commercial' },
]

export function generateStaticParams() {
  return metros.map((m) => ({ metro: m.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/service-areas/[metro]'>): Promise<Metadata> {
  const { metro } = await params
  const m = metroBySlug(metro)
  if (!m) return {}

  const c = metroContent[m.slug]
  return {
    title: `HVAC Service in ${m.city}, ${m.state}`,
    description: c.intro.slice(0, 155),
    alternates: { canonical: `/service-areas/${m.slug}` },
    openGraph: {
      title: `HVAC Service in ${m.city}, ${m.state} | ${site.name}`,
      description: c.intro.slice(0, 200),
      url: `${site.url}/service-areas/${m.slug}`,
    },
  }
}

export default async function MetroPage({
  params,
}: PageProps<'/service-areas/[metro]'>) {
  const { metro } = await params
  const m = metroBySlug(metro)
  if (!m) notFound()

  const c = metroContent[m.slug]
  const nearby = metros.filter((x) => x.slug !== m.slug).slice(0, 3)

  /**
   * Per-metro LocalBusiness node. This is the correct national pattern: one
   * Organization site-wide (in the root layout) plus a LocalBusiness per market
   * — rather than the reference site's single LocalBusiness cloned onto all 60
   * pages including its privacy policy.
   */
  const schema: WithContext<HVACBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': `${site.url}/service-areas/${m.slug}#business`,
    name: `${site.name} — ${m.city}`,
    url: `${site.url}/service-areas/${m.slug}`,
    telephone: site.phone,
    priceRange: '$$',
    areaServed: m.cities.map((city) => ({
      '@type': 'City' as const,
      name: `${city}, ${m.state}`,
    })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: m.city,
      addressRegion: m.state,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: m.geo.lat,
      longitude: m.geo.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    // AggregateRating deliberately omitted — see config/site.ts
  }

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        eyebrow={`${m.city}, ${m.state}`}
        title={`HVAC service in ${m.city}.`}
        lead={m.hook}
        badge={m.isHeadquarters ? 'Headquarters metro' : undefined}
        crumbs={[
          { label: 'Coverage', href: '/service-areas' },
          { label: m.name },
        ]}
        image={m.isHeadquarters ? images.heroHome : images.heroTechnician}
      />

      {/* AEO intro — the dense, quotable paragraph */}
      <Section size="sm">
        <Container>
          <p className="max-w-[78ch] text-lead leading-relaxed text-foreground">
            {c.intro}
          </p>
        </Container>
      </Section>

      <Explainer
        eyebrow={`Why ${m.city} is different`}
        title={c.whyTitle}
        paragraphs={c.why}
        tone="mist"
      />

      {/* Services available here */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="What we do here"
            title={`Every service we offer is available across ${m.city}.`}
            lead="Same diagnostic process and the same reporting as every other market we serve."
          />
          <ul role="list" className="mt-8 flex flex-wrap gap-2.5">
            {serviceChips.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="inline-flex min-h-10 items-center rounded-full border border-input bg-background px-4 text-sm font-medium transition-colors hover:border-action hover:text-action"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ItemGrid
        eyebrow={`${m.city} building stock`}
        title="What we work on here."
        items={c.buildings}
        tone="cloud"
        columns={2}
      />

      {/* Geography + response */}
      <Section tone="navy" glow>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeader
                eyebrow="Where we work"
                title={`Across the ${m.city} area.`}
                onDark
              />
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
                Cities
              </p>
              <p className="mt-2 text-[15.5px] leading-relaxed text-white/85">
                {m.cities.join(' · ')}
              </p>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
                Corridors
              </p>
              <p className="mt-2 text-[15.5px] leading-relaxed text-white/85">
                {m.corridors.join(' · ')}
              </p>
            </div>

            <div className="rounded-2xl border border-white/14 bg-white/5 p-7 sm:p-9">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
                Getting to you
              </p>
              <p className="mt-3 text-lead leading-relaxed text-white">
                {c.response}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                We do not advertise a fixed arrival guarantee, because across ten
                metros and real traffic it is not a promise anyone can keep. You
                get a real window on the call instead.
              </p>
              <a
                href={site.phoneHref}
                className="mt-6 inline-flex min-h-11 items-center rounded-lg bg-gold px-6 text-[15px] font-semibold text-navy transition-transform duration-200 hover:-translate-y-0.5"
              >
                Call {site.phone}
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonial — INVENTED sample copy, see metro-content.ts */}
      <Section tone="sand">
        <Container>
          <figure className="mx-auto max-w-[62ch] text-center">
            <Quote
              className="mx-auto size-8 text-action/35"
              aria-hidden
              strokeWidth={1.5}
            />
            <blockquote className="mt-5 font-display text-[clamp(1.375rem,2.4vw,1.75rem)] font-medium leading-snug text-foreground text-balance">
              {c.testimonial.quote}
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {c.testimonial.name}
              </span>
              <span className="mx-2 opacity-40">·</span>
              {c.testimonial.detail}
            </figcaption>
          </figure>
        </Container>
      </Section>

      <FaqSection
        faqs={c.faqs}
        eyebrow={`${m.city} questions`}
        title={`What people ask us in ${m.city}.`}
        tone="mist"
      />

      {/* Nearby metros */}
      <Section size="sm">
        <Container>
          <h2 className="text-sub font-bold">Nearby markets we serve.</h2>
          <ul role="list" className="mt-5 grid gap-3 sm:grid-cols-3">
            {nearby.map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/service-areas/${n.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-background p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="font-display text-cardtitle font-bold">
                    {n.name}
                  </span>
                  <span className="mt-1.5 flex-1 text-sm text-muted-foreground">
                    {n.hook}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-action">
                    {n.city} HVAC
                    <ArrowRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/service-areas"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-action underline-offset-4 hover:underline"
          >
            All {site.stats.metros} metros
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Container>
      </Section>

      <FinalCta
        title={`${m.city} HVAC, on the same standard as every other market.`}
        lead="Dispatch answered 24/7. Licensed local technicians."
      />
    </>
  )
}
