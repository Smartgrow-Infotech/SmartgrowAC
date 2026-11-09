import type { Metadata } from 'next'

import { site } from '@/config/site'
import { pillars } from '@/content/services'
import { servicesFaqs } from '@/content/faqs'
import { images } from '@/content/images'
import { PageHero } from '@/components/sections/page-hero'
import { ActionCards, ItemGrid } from '@/components/sections/blocks'
import { Container, Section } from '@/components/sections/section'
import { CoverageStrip } from '@/components/sections/coverage'
import { FaqSection, FinalCta } from '@/components/sections/faq'

export const metadata: Metadata = {
  title: 'HVAC Services — Repair, Maintenance & Installation',
  description: `Complete HVAC services across ${site.stats.metros} major U.S. metros. Air conditioning, heating, indoor air quality and water heaters for homes and commercial facilities.`,
  alternates: { canonical: '/services' },
}

/** The repair-or-replace decision block, shared across service hubs. */
const decisionFactors = [
  {
    title: 'Repair usually makes sense if…',
    body: 'The system is under 10 years old, the repair is under 30% of replacement cost, maintenance has been kept up, and it is a single component — a capacitor, ignitor, sensor or contactor.',
  },
  {
    title: 'Replace usually makes sense if…',
    body: 'The system is 12+ years old, the repair is half the cost of replacement or more, it still runs R-22, or energy bills are climbing while your usage has not changed.',
  },
  {
    title: 'And if you are somewhere in between',
    body: 'Call and ask. Two or more of the replace signals together usually settles it. One on its own rarely does, and we will tell you that even though the repair is the smaller invoice.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="All services"
        title={`HVAC services for homes and facilities, in ${site.stats.metros} major metros.`}
        lead="From a single no-cool call to a 40-location rooftop program. Licensed local technicians, national standards, dispatch answered 24/7."
        crumbs={[{ label: 'Services' }]}
        image={images.heroEquipment}
      />

      <Section size="sm">
        <Container>
          <p className="max-w-[78ch] text-lead leading-relaxed text-foreground">
            VGB Technologies services air conditioning, heating, indoor air
            quality and water heaters across {site.stats.metros} major U.S.
            metros. We repair every major brand regardless of who installed it,
            size replacements with a Manual J load calculation rather than a rule
            of thumb, and publish install price ranges while deliberately
            refusing to publish repair prices — because a repair price before a
            diagnosis is a guess.
          </p>
        </Container>
      </Section>

      <ActionCards
        eyebrow="What we service"
        title="Four pillars, every system in the building."
        lead="Each one covers repair, maintenance and replacement across residential and commercial."
        cards={pillars.map((p) => ({
          title: p.name,
          body: p.lead,
          href: `/services/${p.slug}`,
          features: p.actions.slice(0, 4).map((a) => a.name),
          cta: `Explore ${p.name.toLowerCase()}`,
        }))}
      />

      <ItemGrid
        eyebrow="A common question"
        title="Repair or replace?"
        lead="Quick decision factors. Or call and we will give you an honest answer either way."
        items={decisionFactors}
        tone="cloud"
        columns={3}
      />

      <CoverageStrip />

      <FaqSection
        faqs={servicesFaqs}
        eyebrow="Quick answers"
        title="How we work, and why."
        tone="mist"
      />

      <FinalCta
        title="Ready to schedule?"
        lead={`Dispatch answered 24/7. Emergency service available in all ${site.stats.metros} metros.`}
      />
    </>
  )
}
