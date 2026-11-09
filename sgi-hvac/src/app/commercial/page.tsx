import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { site } from '@/config/site'
import { commercialPrograms } from '@/content/commercial'
import { images } from '@/content/images'
import { PageHero } from '@/components/sections/page-hero'
import { ActionCards } from '@/components/sections/blocks'
import { Container, Section, SectionHeader } from '@/components/sections/section'
import { CoverageStrip } from '@/components/sections/coverage'
import { FaqSection, FinalCta } from '@/components/sections/faq'
import type { Faq } from '@/components/sections/faq'

export const metadata: Metadata = {
  title: 'Commercial HVAC — Multi-Site, Property Management & Facilities',
  description: `Commercial HVAC across ${site.stats.metros} U.S. metros. National accounts, property management, multifamily, hospitality and light commercial — with the rooftop crane work most contractors decline.`,
  alternates: { canonical: '/commercial' },
}

const faqs: Faq[] = [
  {
    q: 'What makes a national contractor different from a local one?',
    a: 'Comparable data. A local contractor can be excellent, but if you operate in nine markets you end up with nine rate cards, nine reporting formats and no way to compare sites. One vendor with one standard is what makes portfolio-level cost analysis possible at all.',
  },
  {
    q: 'Do you work with condo associations and co-op boards?',
    a: 'Yes, and it is a substantial part of our business. We work directly with property managers, board members and individual unit owners, with documentation, invoicing and reporting set up for HOA and co-op workflows.',
  },
  {
    q: 'What permits and crane work do you handle?',
    a: 'Rooftop replacement in a dense market usually needs a mechanical permit, electrical permit, gas permit where applicable, structural review for roof loading, and often a street-closure permit with police traffic management. We pull all of it, and we quote the logistics as visible line items rather than burying them in the equipment price.',
  },
  {
    q: 'How do commercial maintenance contracts work?',
    a: 'Three tiers plus custom. Basic is scheduled visits. Standard adds priority dispatch with defined response SLAs. Full adds a parts pool for common consumables. Each property gets a written scope rather than vague boilerplate, and anything outside it needs approval before work.',
  },
  {
    q: 'Can you respond to building emergencies after hours?',
    a: 'Yes, dispatch is answered 24/7. Contract clients get priority routing per their tier. We will tell you what to expect for arrival based on the actual situation rather than quoting a guarantee nobody can keep across ten metros.',
  },
  {
    q: 'What if some of my locations are outside your metros?',
    a: 'We map that before you sign anything and tell you plainly which sites we can serve well. For the rest we would rather help you source properly than accept the work and subcontract it to someone we cannot stand behind.',
  },
]

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title="Commercial HVAC for facilities, portfolios and multi-site operators."
        lead="Single-site offices to 200-location national programs. One agreement, defined SLAs, consolidated reporting — and the rooftop crane work most contractors decline."
        crumbs={[{ label: 'Commercial' }]}
        image={images.commercialRooftop}
      />

      <Section size="sm">
        <Container>
          <p className="max-w-[78ch] text-lead leading-relaxed text-foreground">
            VGB Technologies serves commercial clients across{' '}
            {site.stats.metros} U.S. metros: multi-site national accounts,
            property management portfolios, condo and co-op buildings,
            hospitality, and single-site light commercial. We run our own
            dispatch and employ our technicians in every market, which is what
            makes one standard across a portfolio possible rather than
            aspirational.
          </p>
        </Container>
      </Section>

      {/* The moat, stated once and clearly */}
      <Section tone="navy" glow>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-14">
            <div className="max-w-[54ch]">
              <p className="eyebrow eyebrow-on-dark">
                Why multi-site operators consolidate
              </p>
              <h2 className="mt-5 text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.04] tracking-[-0.045em] text-white">
                <span className="block">One agreement.</span>
                <span className="block">Ten metros.</span>
                <span className="block">One invoice.</span>
              </h2>
              <p className="mt-5 text-lead text-white/80">
                If you operate in more than three markets you already know the
                problem: a different contractor in every city, a different rate
                card, a different response standard, and a stack of invoices
                nobody can compare. Consolidating is not really about unit
                price — it is about being able to answer &ldquo;how is our HVAC
                performing&rdquo; with a number instead of a shrug.
              </p>
            </div>

            <Link
              href="/commercial/national-accounts"
              className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-gold py-1.5 pl-7 pr-1.5 text-[15px] font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5"
            >
              See national accounts
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-navy text-white transition-transform duration-200 group-hover:-rotate-45">
                <ArrowRight className="size-4" aria-hidden />
              </span>
            </Link>
          </div>
        </Container>
      </Section>

      <ActionCards
        eyebrow="By program"
        title="How we work with commercial clients."
        lead="Every engagement starts with a walkthrough or portfolio review, at no charge."
        cards={commercialPrograms.map((p) => ({
          title: p.name,
          body: p.lead,
          href: `/commercial/${p.slug}`,
          features: p.cardFeatures,
          cta: 'Explore',
        }))}
      />

      <Section tone="sand" size="sm">
        <Container>
          <SectionHeader
            eyebrow="Who we work with"
            title="Retail, restaurant, medical, franchise, multifamily and office."
            lead="If you operate more than a handful of sites, the vendor-management problem is usually bigger than the HVAC problem."
          />
        </Container>
      </Section>

      <CoverageStrip title={`Commercial service in all ${site.stats.metros} metros.`} />

      <FaqSection
        faqs={faqs}
        eyebrow="Quick answers"
        title="How commercial work actually runs."
        tone="mist"
      />

      <FinalCta
        title="Talk to our commercial team."
        lead="Building manager, condo board, facilities lead or multi-site operator — we will walk the scope with you at no charge."
      />
    </>
  )
}
