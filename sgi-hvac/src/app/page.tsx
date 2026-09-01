import Link from 'next/link'
import { ArrowRight, Droplets, Flame, Phone, Snowflake, Wind } from 'lucide-react'

import { site, installBrands, servicedBrands } from '@/config/site'
import { homeFaqs } from '@/content/faqs'
import { Eyebrow, DotGrid } from '@/components/brand'
import { Container, Section, SectionHeader } from '@/components/sections/section'
import { CoverageGrid } from '@/components/sections/coverage'
import { FaqSection, FinalCta } from '@/components/sections/faq'
import { PlanSelector } from '@/components/sections/plan-selector'
import { UpgradeCarousel } from '@/components/sections/upgrade-carousel'
import { Button } from '@/components/ui/button'

const stats = [
  { figure: `${site.yearsInService}`, label: 'Years in service' },
  { figure: `${site.stats.metros}`, label: 'Metros served' },
  { figure: `${site.stats.rating}★`, label: 'Average rating' },
  { figure: site.stats.technicians, label: 'Technicians' },
  { figure: '24/7', label: 'Dispatch answered' },
]

const services = [
  {
    icon: Snowflake,
    title: 'Air Conditioning',
    body: 'Repair, maintenance and replacement for split systems, packaged units, ductless and PTAC.',
    href: '/services/air-conditioning',
    cta: 'Explore AC services',
  },
  {
    icon: Flame,
    title: 'Heating',
    body: 'Furnaces, heat pumps, boilers and hydronic systems — diagnosed before we quote.',
    href: '/services/heating',
    cta: 'Explore heating',
  },
  {
    icon: Wind,
    title: 'Indoor Air Quality',
    body: 'Filtration, humidity control and fresh-air ventilation for tight modern buildings.',
    href: '/services/indoor-air-quality',
    cta: 'Explore IAQ',
  },
  {
    icon: Droplets,
    title: 'Water Heaters',
    body: 'Tank, tankless, hybrid heat-pump and commercial units.',
    href: '/services/water-heaters',
    cta: 'Explore water heaters',
  },
]

const differentiators = [
  {
    title: 'Licensed in every market we serve',
    body: 'We do not subcontract into markets we cannot stand behind. Every technician on a job holds the licence their state requires, and we publish the numbers by state.',
  },
  {
    title: 'One agreement, ten metros, one invoice',
    body: 'Multi-site operators get a single contract, a single account manager and consolidated billing across every location — not ten vendor relationships and ten renewal dates.',
  },
  {
    title: 'Diagnosis before quote. Every time.',
    body: 'We publish install price ranges and refuse to publish repair prices, because a repair price without a diagnosis is a guess. You get the number after we look, in writing, before any work starts.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="relative overflow-hidden bg-background">
        <DotGrid />
        <Container className="relative py-[clamp(3rem,6vw,4.5rem)]">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div>
              <Eyebrow>
                Nationwide HVAC · Since {site.founded}
              </Eyebrow>

              <h1 className="mt-5 max-w-[16ch] text-hero font-bold text-balance">
                Nationwide HVAC service. Local licensed technicians.
              </h1>

              <p className="mt-5 max-w-[54ch] text-lead text-muted-foreground">
                Repair, replacement and maintenance for homes and multi-site
                facilities across {site.stats.metros} major U.S. metros. One
                number, one standard, one invoice.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="bg-action hover:bg-action-hover">
                  <Link href="/contact">Schedule Service</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={site.phoneHref}>
                    <Phone className="size-4" aria-hidden />
                    Call {site.phone}
                  </a>
                </Button>
              </div>
            </div>

            {/* Media slot — real photography drops in here. */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cloud shadow-[0_24px_60px_rgb(11_27_43_/_0.14)] lg:aspect-[4/3]">
              <div className="dot-grid" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/18 to-transparent" />
            </div>
          </div>

          {/* Stat row — kept visible on mobile, unlike the reference, which hid
              its strongest proof below 768px. */}
          <ul
            role="list"
            className="mt-[clamp(2rem,4vw,3rem)] grid grid-cols-2 gap-6 border-t border-border pt-[clamp(1.5rem,3vw,2rem)] sm:grid-cols-3 lg:grid-cols-5"
          >
            {stats.map((s) => (
              <li key={s.label}>
                <p className="font-display text-stat font-bold text-foreground">
                  {s.figure}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── What we service ──────────────────────────────────────────────── */}
      <Section tone="cloud" id="services">
        <Container>
          <SectionHeader
            eyebrow="What we service"
            title="Every system in the building — residential and commercial."
          />

          <ul role="list" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-cloud">
                      <div className="dot-grid opacity-70" />
                      <span className="absolute left-4 top-4 inline-flex size-11 items-center justify-center rounded-lg bg-background/96 text-action shadow-[0_1px_2px_rgb(11_27_43_/_0.06)]">
                        <Icon className="size-5" aria-hidden strokeWidth={1.75} />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-6">
                      <h3 className="font-display text-cardtitle font-bold">
                        {s.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {s.body}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-action">
                        {s.cta}
                        <ArrowRight
                          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden
                        />
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Container>
      </Section>

      {/* ── Why ──────────────────────────────────────────────────────────── */}
      <Section id="why">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
            <div className="max-w-[52ch]">
              <Eyebrow>Why teams standardize on us</Eyebrow>
              <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.045em]">
                <span className="block">One vendor.</span>
                <span className="block">Every market.</span>
                <span className="block">One standard.</span>
              </h2>
              <p className="mt-5 max-w-[52ch] text-lead text-muted-foreground">
                Most national HVAC coverage is a referral network wearing a
                national badge — different pricing, different standards, a
                different invoice every time. We run our own dispatch, our own
                SLAs and our own quality bar in every metro we serve.
              </p>
            </div>

            <Link
              href="/about"
              className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-action py-1.5 pl-7 pr-1.5 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-action-hover hover:shadow-[0_4px_16px_rgb(0_103_243_/_0.3)]"
            >
              How we operate
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-navy transition-transform duration-200 group-hover:-rotate-45">
                <ArrowRight className="size-4" aria-hidden />
              </span>
            </Link>
          </div>

          <ul role="list" className="mt-12 grid gap-5 lg:grid-cols-3">
            {differentiators.map((d) => (
              <li
                key={d.title}
                className="rounded-xl border border-border bg-background p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
              >
                <h3 className="font-display text-cardtitle font-bold text-balance">
                  {d.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {d.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ── Coverage ─────────────────────────────────────────────────────── */}
      <CoverageGrid />

      {/* ── Maintenance plan ─────────────────────────────────────────────── */}
      <Section tone="navy" size="lg" glow id="pricing">
        <Container>
          <SectionHeader
            eyebrow="Maintenance plan"
            title="Priority service, at a predictable number."
            lead="Two visits a year. Front-of-line scheduling. Discounted replacement pricing. Cancel any time."
            onDark
          />
          <div className="mt-10">
            <PlanSelector />
          </div>
        </Container>
      </Section>

      {/* ── Comfort upgrades ─────────────────────────────────────────────── */}
      <Section size="lg" id="upgrades">
        <Container>
          <SectionHeader
            eyebrow="Comfort upgrades"
            title="Upgrades that pay for themselves."
            lead="What homeowners across our metros are actually choosing — and what each one is genuinely good at."
          />
          <UpgradeCarousel />
        </Container>
      </Section>

      {/* ── Brands ───────────────────────────────────────────────────────── */}
      <Section tone="navy" glow id="brands">
        <Container>
          <SectionHeader
            eyebrow="Equipment we install & service"
            title="Every major brand. Eight we install in volume."
            onDark
          />
          <ul role="list" className="mt-10 flex flex-wrap gap-3">
            {installBrands.map((b) => (
              <li
                key={b}
                className="rounded-full border border-white/14 bg-white/6 px-4 py-2 font-mono text-[12px] uppercase tracking-[0.1em] text-white"
              >
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[70ch] text-[15px] leading-relaxed text-white/72">
            We service every major brand regardless of who installed it —
            including {servicedBrands.slice(0, -1).join(', ')} and{' '}
            {servicedBrands.at(-1)}.
          </p>
        </Container>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FaqSection
        faqs={homeFaqs}
        title="Straight answers to the six questions we get most."
      />

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <FinalCta
        title="Ready to schedule?"
        lead={`Dispatch answered 24/7. Emergency service available in all ${site.stats.metros} metros.`}
      />
    </>
  )
}
