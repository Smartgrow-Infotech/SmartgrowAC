import type { Metadata } from 'next'

import { site } from '@/config/site'
import { systemsForHomes, systemsForBuildings } from '@/content/systems'
import { images } from '@/content/images'
import { PageHero } from '@/components/sections/page-hero'
import { ActionCards } from '@/components/sections/blocks'
import { Container, Section } from '@/components/sections/section'
import { CoverageStrip } from '@/components/sections/coverage'
import { FaqSection, FinalCta } from '@/components/sections/faq'
import type { Faq } from '@/components/sections/faq'

export const metadata: Metadata = {
  title: 'HVAC Systems — Ductless, Heat Pumps, PTAC, Rooftop',
  description: `Every major HVAC system explained honestly. Ductless, heat pumps, central, zoning, PTAC, water-source and commercial rooftop — across ${site.stats.metros} U.S. metros.`,
  alternates: { canonical: '/hvac-systems' },
}

const faqs: Faq[] = [
  {
    q: 'How do I know which system is right for my building?',
    a: 'The building usually decides rather than preference. No ductwork and plaster walls means ductless. Sound existing ductwork means central or a ducted heat pump. A high-rise condo means PTAC or water-source. A commercial roof means a packaged RTU. We do a free assessment and recommend honestly, including when that is not the most expensive option.',
  },
  {
    q: 'Will you service a system you did not install?',
    a: 'Yes. We service every major brand regardless of origin, and a large share of our maintenance contracts start on equipment another contractor installed years earlier.',
  },
  {
    q: 'What is the difference between a heat pump and a ductless mini-split?',
    a: 'Mini-splits are a type of heat pump — specifically ductless ones. Conventional heat pumps use ductwork like central AC. Both heat and cool. Whether you have usable ductwork is what decides between them.',
  },
  {
    q: 'Why is PTAC so common in high-rise condos?',
    a: 'Because each unit is self-contained and independent. One failed PTAC affects one room rather than the building, and replacement is a one to two hour swap with no refrigerant work. That practicality is why property managers standardise on them.',
  },
  {
    q: 'Are heat pump incentives real?',
    a: 'Yes, and often substantial — federal 25C credits plus state and utility programs. The programs differ in every metro we serve and the amounts change annually, so we identify what applies to you and confirm current figures at quote time rather than quoting stale numbers.',
  },
  {
    q: 'Do you publish prices?',
    a: 'For installations, yes — every system page carries a published range. For repairs, deliberately not: a repair price before a diagnosis is a guess, and guesses get revised upward once someone is on site.',
  },
]

export default function SystemsPage() {
  return (
    <>
      <PageHero
        eyebrow="HVAC Systems"
        title="Every major system, explained honestly."
        lead="Ductless, heat pumps, central split systems, zoning, PTAC, water-source and commercial rooftop. Which one is right depends on the building — so here is what each is genuinely good at, and what it is not."
        crumbs={[{ label: 'Systems' }]}
        image={images.upgradeHeatPump}
        tone="frost"
      />

      <Section size="sm">
        <Container>
          <p className="max-w-[78ch] text-lead leading-relaxed text-foreground">
            SmartgrowInfotech installs and services every major HVAC system type
            across {site.stats.metros} U.S. metros. Each page below explains what
            the system actually is, where it wins, where it does not, what it
            costs, and what installing it genuinely involves — including the
            trade-offs most equipment pages leave out.
          </p>
        </Container>
      </Section>

      <ActionCards
        eyebrow="For homes"
        title="Residential systems."
        lead="Four configurations cover almost every home in our markets."
        cards={systemsForHomes.map((s) => ({
          title: s.name,
          body: s.lead,
          href: `/hvac-systems/${s.slug}`,
          features: s.brands,
          cta: `Explore ${s.name.toLowerCase()}`,
        }))}
      />

      <ActionCards
        eyebrow="For buildings"
        title="Commercial and multi-unit systems."
        lead="High-rise, hospitality and commercial equipment — including the work most contractors decline."
        cards={systemsForBuildings.map((s) => ({
          title: s.name,
          body: s.lead,
          href: `/hvac-systems/${s.slug}`,
          features: s.brands,
          cta: `Explore ${s.name.toLowerCase()}`,
        }))}
        tone="cloud"
      />

      <CoverageStrip title={`All systems, all ${site.stats.metros} metros.`} />

      <FaqSection
        faqs={faqs}
        eyebrow="Quick answers"
        title="Choosing between systems."
        tone="mist"
      />

      <FinalCta
        title="Not sure which system you need?"
        lead="Free assessment. We recommend honestly, even when it is not the most expensive option."
      />
    </>
  )
}
