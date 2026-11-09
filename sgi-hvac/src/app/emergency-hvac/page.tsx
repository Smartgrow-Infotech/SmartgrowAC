import type { Metadata } from 'next'
import {
  AlertTriangle,
  Building2,
  Droplets,
  Flame,
  Phone,
  Snowflake,
  Wind,
} from 'lucide-react'
import type { Service, WithContext } from 'schema-dts'

import { site } from '@/config/site'
import { metros } from '@/content/metros'
import { PageHero } from '@/components/sections/page-hero'
import { Container, Section, SectionHeader } from '@/components/sections/section'
import { CoverageStrip } from '@/components/sections/coverage'
import { FaqSection, FinalCta } from '@/components/sections/faq'
import type { Faq } from '@/components/sections/faq'
import { AvailabilityBadge } from '@/components/brand'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Emergency HVAC — Dispatch Answered 24/7',
  description: `Emergency HVAC in all ${site.stats.metros} U.S. metros. A person answers day or night on ${site.phone}, and you get an honest arrival window — not a marketing promise.`,
  alternates: { canonical: '/emergency-hvac' },
}

/**
 * Safety copy note: the reference site published one specific gas-utility
 * emergency number. We serve ten metros with different utilities, so naming a
 * number would be actively dangerous. The correct instruction is always "your
 * gas utility's emergency line, then 911." Do not add a number here.
 */
const callNow = [
  {
    icon: Snowflake,
    title: 'No heat in freezing weather',
    body: 'Pipe-freeze risk starts within hours, not days. Calling early is the difference between a repair and a flood.',
    severity: 'urgent' as const,
  },
  {
    icon: Wind,
    title: 'No cooling in extreme heat',
    body: 'In Phoenix, Dallas or Houston indoor temperatures reach genuinely dangerous levels fast — especially with infants, elderly residents or pets in the building.',
    severity: 'urgent' as const,
  },
  {
    icon: Flame,
    title: 'Gas smell',
    body: "Leave the building first. Call your gas utility's emergency line, then 911 if they direct you to. Call us once the site is safe — not before.",
    severity: 'life' as const,
  },
  {
    icon: AlertTriangle,
    title: 'Carbon monoxide alarm',
    body: 'Leave the building and call 911. Then call us. Do not re-enter to investigate, and do not assume it is a faulty detector.',
    severity: 'life' as const,
  },
  {
    icon: Droplets,
    title: 'Water leaking from equipment',
    body: 'Shut off the water supply and kill power to the unit at the breaker. Move anything valuable clear of the area, then call.',
    severity: 'urgent' as const,
  },
  {
    icon: Building2,
    title: 'Facility system failure',
    body: 'Rooftop or central plant failure during occupancy. Contract clients get priority routing per their agreed response tier.',
    severity: 'urgent' as const,
  },
]

const whileYouWait = [
  {
    title: 'If it is cold',
    body: 'Open cabinet doors under sinks on exterior walls and let a pencil-width trickle run from the furthest tap. Close off unused rooms. Do not use an oven or a gas range as a heat source — that is how carbon monoxide incidents start.',
  },
  {
    title: 'If it is hot',
    body: 'Close blinds on the sun side, run ceiling fans counter-clockwise, and move anyone vulnerable to the coolest room in the building. If indoor temperature is climbing past the mid-90s, leave for somewhere air-conditioned and let us meet you there.',
  },
  {
    title: 'Before we arrive',
    body: 'Check that the breaker has not tripped and the thermostat is calling. Clear access to the indoor unit and the outdoor condenser. Note what you heard or smelled and when it started — that detail routinely cuts diagnostic time in half.',
  },
]

const faqs: Faq[] = [
  {
    q: 'Do you charge more at night and on weekends?',
    a: 'After-hours rates apply outside normal business hours, and we tell you the rate on the phone before we dispatch — not after the technician is standing in your kitchen. Maintenance plan holders get priority routing at their plan rate.',
  },
  {
    q: 'How fast will someone actually get here?',
    a: 'We give you a real window based on your location, the severity of the situation and what is already on the board. Sometimes that is 90 minutes. Sometimes it is tomorrow morning. We tell you which, so you can make an actual decision.',
  },
  {
    q: 'Is a person really answering at 3am?',
    a: 'Yes. Dispatch is answered by our own people, not an overflow service that takes a message and emails it. They can triage the situation and tell you what to do in the meantime.',
  },
  {
    q: 'What counts as an emergency?',
    a: 'No heat in freezing conditions, no cooling in dangerous heat, anything involving gas or carbon monoxide, water actively damaging the building, and any commercial failure affecting occupancy. If you are unsure, call — triaging it is free.',
  },
  {
    q: 'Can you help if I am outside your ten metros?',
    a: 'Not with a truck, and we will say so immediately rather than stringing you along. What we can do at 2am is talk you through making the building safe and point you at what to look for in a local contractor.',
  },
  {
    q: 'Do you handle commercial emergencies differently?',
    a: 'Yes. Contract clients route by their agreed tier, and building failures affecting occupancy escalate ahead of routine residential calls. That is the priority structure we agree with you in writing at the start.',
  },
]

export default function EmergencyPage() {
  const schema: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Emergency HVAC Service',
    serviceType: '24/7 emergency HVAC repair',
    description: `Emergency HVAC dispatch answered 24 hours a day across ${site.stats.metros} U.S. metros.`,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: metros.map((m) => ({
      '@type': 'City' as const,
      name: `${m.city}, ${m.state}`,
    })),
    hoursAvailable: {
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
  }

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        eyebrow="Dispatch answered 24/7"
        title={`Emergency HVAC in all ${site.stats.metros} metros.`}
        lead="A person answers, day or night. What you'll get is an honest arrival window based on the actual situation, your location and what's already on the board — not a marketing promise."
        crumbs={[{ label: 'Emergency HVAC' }]}
        variant="compact"
        hideActions
      >
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a
            href={site.phoneHref}
            className="inline-flex min-h-13 items-center gap-2.5 rounded-lg bg-gold px-7 text-[17px] font-bold text-navy transition-colors hover:bg-white"
          >
            <Phone className="size-5" aria-hidden />
            Call {site.phone} now
          </a>
          <AvailabilityBadge />
        </div>
      </PageHero>

      {/* When to call immediately */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="When to call immediately"
            title="Six situations that should not wait until morning."
            lead="Two of these are life-safety first and HVAC second. Those are marked."
          />
          <ul role="list" className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {callNow.map(({ icon: Icon, title, body, severity }) => (
              <li
                key={title}
                className={
                  severity === 'life'
                    ? 'rounded-xl border-2 border-destructive/35 bg-destructive/5 p-6'
                    : 'rounded-xl border border-border bg-background p-6 shadow-card'
                }
              >
                <span
                  className={
                    severity === 'life'
                      ? 'inline-flex size-11 items-center justify-center rounded-lg bg-destructive/12 text-destructive'
                      : 'inline-flex size-11 items-center justify-center rounded-lg bg-mist text-action'
                  }
                >
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-cardtitle font-bold leading-snug">
                  {title}
                </h3>
                {severity === 'life' && (
                  <p className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-destructive">
                    Life safety first
                  </p>
                )}
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-[76ch] rounded-xl border border-border bg-cloud p-5 text-[15px] leading-relaxed">
            <strong className="font-semibold">On gas and carbon monoxide:</strong>{' '}
            we deliberately do not print a utility emergency number here. We serve{' '}
            {site.stats.metros} metros with different utilities, and a wrong number
            at the wrong moment is worse than no number. Use your own gas
            utility&rsquo;s emergency line — it is on your bill and on their
            website — and call 911 if you are directed to or if anyone feels unwell.
          </p>
        </Container>
      </Section>

      {/* While you wait */}
      <Section tone="mist">
        <Container>
          <SectionHeader
            eyebrow="While you wait"
            title="What you can usefully do before we arrive."
          />
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {whileYouWait.map((w, i) => (
              <li
                key={w.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <span className="font-mono text-[12px] font-semibold tracking-[0.1em] text-action">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-cardtitle font-bold leading-snug">
                  {w.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  {w.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Our promise */}
      <Section tone="navy" glow>
        <Container>
          <SectionHeader
            eyebrow="Our promise"
            title="No fake arrival guarantees. Just an honest answer."
            onDark
          />
          <div className="mt-6 max-w-[74ch] space-y-4">
            <p className="text-lead leading-relaxed text-white/85">
              Plenty of contractors advertise a 60-minute response. We do not,
              because across ten metros and real traffic it is not a promise
              anyone can keep — it is a lead-generation tactic.
            </p>
            <p className="text-lead leading-relaxed text-white/85">
              What we do instead: a person answers, we triage honestly, and we
              tell you a real window. If that window is tomorrow morning, we say
              tomorrow morning — so you can make an actual decision instead of
              waiting all night on a truck that was never coming.
            </p>
          </div>
          <a
            href={site.phoneHref}
            className="mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-lg bg-gold px-6 text-[15px] font-semibold text-navy transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Phone className="size-4" aria-hidden />
            Call {site.phone}
          </a>
        </Container>
      </Section>

      <CoverageStrip title={`24/7 dispatch in all ${site.stats.metros} metros.`} />

      <FaqSection
        faqs={faqs}
        eyebrow="Quick answers"
        title="Emergency calls: what to expect."
        tone="default"
      />

      <FinalCta
        title="If it is an emergency, call — do not fill in a form."
        lead="Someone picks up at any hour, and triaging it costs nothing."
        primary={null}
      />
    </>
  )
}
