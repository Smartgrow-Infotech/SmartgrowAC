import type { Metadata } from 'next'
import { Snowflake, Flame, BadgeCheck } from 'lucide-react'
import type { Service, WithContext } from 'schema-dts'

import { site } from '@/config/site'
import { plans } from '@/content/plans'
import { images } from '@/content/images'
import { PageHero } from '@/components/sections/page-hero'
import { Container, Section, SectionHeader } from '@/components/sections/section'
import { PlanSelector } from '@/components/sections/plan-selector'
import { CoverageStrip } from '@/components/sections/coverage'
import { FaqSection, FinalCta } from '@/components/sections/faq'
import type { Faq } from '@/components/sections/faq'
import { ServiceForm } from '@/components/forms/lead-form'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Maintenance Plan',
  description: `Two visits a year, priority service and discounted replacement pricing from ${plans[0].price}${plans[0].unit}. Written report every visit. Cancel any time. Available in all ${site.stats.metros} metros.`,
  alternates: { canonical: '/maintenance-plan' },
}

const included = [
  {
    icon: Snowflake,
    title: 'Cooling tune-up (spring)',
    body: 'Refrigerant charge verified against the nameplate, condenser coil cleaned, capacitor and contactor tested under load, condensate drain cleared, airflow and temperature split measured, electrical connections torqued.',
  },
  {
    icon: Flame,
    title: 'Heating tune-up (fall)',
    body: 'Heat exchanger inspected, combustion analysed and gas pressure verified, burners cleaned, flue draft checked, safeties and limits tested, blower cleaned, thermostat calibration confirmed.',
  },
  {
    icon: BadgeCheck,
    title: 'Priority and perks',
    body: 'Front-of-line scheduling on repair calls, free diagnostic on those visits, 15% off replacement pricing, and a written report every visit — with photos of anything we flag.',
  },
]

const faqs: Faq[] = [
  {
    q: 'Is the maintenance plan actually worth it?',
    a: `Honestly: it depends on your system. On equipment under five years old the plan mostly buys you priority scheduling and the replacement discount. On anything eight years or older it usually pays for itself the first time a tune-up catches a failing capacitor before it takes the compressor with it. If your system is nearly new and you would rather wait, we will tell you that.`,
  },
  {
    q: 'What actually happens on a visit?',
    a: 'A full tune-up against a written checklist, not a filter change and a sticker. You get a report afterwards listing every reading we took, anything we adjusted, and anything we flagged with a photo — so you can compare it against last year and see what is drifting.',
  },
  {
    q: 'Do I have to sign a long contract?',
    a: 'No. Plans are annual and you can cancel any time. We would rather you stay because the reports are useful than because you are locked in.',
  },
  {
    q: 'Does the plan cover repairs and parts?',
    a: 'Residential plans cover the tune-ups plus the perks — the diagnostic on repair calls is free, but parts and repair labor are billed separately at your discounted rate. Facility contracts can include a parts pool for common consumables; that is scoped per building.',
  },
  {
    q: 'What if I have two systems, or a system plus a water heater?',
    a: 'Additional systems are added to the plan at a per-system rate. It is usually cheaper than two separate plans. Tell us what you have when you sign up and we will price it properly rather than guessing.',
  },
  {
    q: 'Do you honor the plan if I move within your coverage?',
    a: `Yes, anywhere in our ${site.stats.metros} metros. Transfer it to the new address or to the buyer of the old one — a documented maintenance history is worth something at closing.`,
  },
]

export default function MaintenancePlanPage() {
  const schema: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'HVAC Maintenance Plan',
    serviceType: 'Preventive HVAC maintenance',
    description: `Annual HVAC maintenance plans with pre-season cooling and heating tune-ups, priority scheduling and discounted replacement pricing. From ${plans[0].price}${plans[0].unit}.`,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'United States' },
  }

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        eyebrow="Maintenance plan"
        title={`Two visits a year. Priority service. From ${plans[0].price}${plans[0].unit}.`}
        lead="Pre-season cooling and heating tune-ups, front-of-line scheduling, discounted replacement pricing, and a written report every visit. Cancel any time."
        crumbs={[{ label: 'Maintenance Plan' }]}
        image={images.serviceAc}
        tone="frost"
      />

      {/* What's included */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="What's included"
            title="What a real tune-up covers."
            lead="Every item below is on the written checklist the technician works through — and on the report you get afterwards."
          />
          <ul role="list" className="mt-10 grid gap-5 md:grid-cols-3">
            {included.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="rounded-xl border border-border bg-background p-6 shadow-card"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-mist text-action">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-cardtitle font-bold leading-snug">
                  {title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Plans */}
      <Section tone="navy" glow id="plans">
        <Container>
          <SectionHeader
            eyebrow="Choose a plan"
            title="Three plans. No lock-in on any of them."
            lead="Pick by how much real winter and real summer your market gets — not by which tier we would rather sell."
            onDark
          />
          <div className="mt-10">
            <PlanSelector />
          </div>
        </Container>
      </Section>

      {/* Honest counter-case */}
      <Section tone="sand" size="sm">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <SectionHeader eyebrow="Straight answer" title="When not to buy this." />
            <div className="space-y-4">
              <p className="text-lead leading-relaxed text-muted-foreground">
                If your system is under five years old, still under manufacturer
                warranty, and you are handy enough to change filters on schedule,
                the plan is mostly buying you priority scheduling. That is worth
                something in a July heatwave, but it is not worth pretending it is
                more than it is.
              </p>
              <p className="text-lead leading-relaxed text-muted-foreground">
                Where it genuinely pays is equipment past year eight, anything in
                a punishing duty cycle like Phoenix or Houston, and any building
                where a failure means displaced tenants rather than an
                uncomfortable evening.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sign-up form */}
      <Section tone="mist">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeader
              eyebrow="Get started"
              title="Tell us what you have."
              lead="We will confirm the right plan for your equipment and market, and book the first visit."
            />
            <div className="rounded-2xl border border-border bg-background p-6 shadow-card sm:p-8">
              <ServiceForm defaultServiceType="Maintenance / tune-up" />
            </div>
          </div>
        </Container>
      </Section>

      <CoverageStrip title={`Plans available in all ${site.stats.metros} metros.`} />

      <FaqSection
        faqs={faqs}
        eyebrow="Quick answers"
        title="Maintenance plans: common questions."
        tone="default"
      />

      <FinalCta
        title="Not sure which plan fits?"
        lead="Tell us the age of your system and where you are. We will tell you honestly whether the plan is worth it."
      />
    </>
  )
}
