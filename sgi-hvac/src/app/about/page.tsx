import type { Metadata } from 'next'
import type { AboutPage as AboutPageSchema, WithContext } from 'schema-dts'

import { site } from '@/config/site'
import { PageHero } from '@/components/sections/page-hero'
import { ItemGrid, Explainer } from '@/components/sections/blocks'
import { Container, Section, SectionHeader } from '@/components/sections/section'
import { CoverageStrip } from '@/components/sections/coverage'
import { FaqSection, FinalCta } from '@/components/sections/faq'
import type { Faq } from '@/components/sections/faq'
import { images } from '@/content/images'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'About',
  description: `${site.name} has been an HVAC contractor since ${site.founded}. ${site.stats.technicians} employed, licensed technicians across ${site.stats.metros} U.S. metros — one contractor in ten markets, not ten contractors with one logo.`,
  alternates: { canonical: '/about' },
}

const values = [
  {
    title: 'Honest answers, including the unprofitable ones',
    body: 'We do not publish repair prices, because a price before a diagnosis is a guess and guesses get revised upward once someone is on site. We do publish install ranges, because you deserve to know roughly what you are walking into. And if a $300 repair buys you five more years, that is the recommendation you will get — not a replacement quote.',
  },
  {
    title: 'Local licensing, not local subcontracting',
    body: 'Every technician holds the license their state requires and works for us. We do not broker your job to the lowest bidder in your zip code and take a margin off the top. That is the entire difference between a national contractor and a national lead broker.',
  },
  {
    title: 'We will tell you where we are weak',
    body: 'There are markets we do not serve well and jobs we are not the right fit for. Saying so costs us a call and earns the next five. It is also the reason we are in ten metros instead of fifty.',
  },
]

const numbers = [
  { value: `${site.yearsInService}`, label: 'Years in service' },
  { value: `${site.stats.metros}`, label: 'Metros served' },
  { value: site.stats.technicians, label: 'Technicians' },
  { value: `${site.stats.statesLicensed}`, label: 'States licensed' },
  { value: site.stats.jobsCompleted, label: 'Jobs completed' },
  { value: '24/7', label: 'Dispatch answered' },
]

const faqs: Faq[] = [
  {
    q: 'Are you a real company or a lead broker?',
    a: 'A real contractor. We employ our technicians, hold the licenses ourselves, run our own dispatch and carry our own insurance. Lead brokers sell your phone number to whoever bids highest; we send our own crew and stand behind the work.',
  },
  {
    q: 'Are you licensed in my state?',
    a: `We hold contractor and HVAC licenses in every state we operate in — ${site.stats.statesLicensed} of them. License numbers are included on every invoice and certificate of insurance, and we will send them before we send a technician if you would rather check first.`,
  },
  {
    q: 'Why only ten metros?',
    a: 'Because we employ and license our technicians rather than brokering the work. Adding a market means hiring, licensing and training a crew there, which takes roughly a year. Growing slowly is the trade we made for being able to say the technician in Denver works to the same checklist as the one in Miami.',
  },
  {
    q: 'Do you subcontract any work?',
    a: 'HVAC service, repair and installation are ours. Adjacent trades that legally require their own license — structural, roofing membrane work, some electrical service upgrades — go to licensed partners, and we tell you when that is happening and who is doing it.',
  },
  {
    q: 'Are you insured?',
    a: `Yes — general liability and workers' compensation. A certificate of insurance is available on request and is standard on every commercial engagement before work begins.`,
  },
  {
    q: 'What happens if something goes wrong after you leave?',
    a: 'Call us and we come back. Labor and parts warranties are stated in writing on the invoice rather than described vaguely at the door, so there is nothing to argue about later.',
  },
]

export default function AboutPage() {
  const schema: WithContext<AboutPageSchema> = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${site.name}`,
    url: `${site.url}/about`,
    about: { '@id': `${site.url}/#organization` },
  }

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        eyebrow={`About ${site.name}`}
        title="Built to be one contractor in ten markets — not ten contractors with one logo."
        lead={`Founded ${site.founded}. ${site.stats.technicians} technicians. ${site.stats.metros} metros. Every one of them employed, licensed and trained to the same standard.`}
        crumbs={[{ label: 'About' }]}
        image={images.heroTechnician}
        tone="cloud"
      />

      <Explainer
        eyebrow="Our history"
        title="Why we built it this way."
        paragraphs={[
          `${site.name} started in ${site.address.city} in ${site.founded} as a single-market HVAC contractor. We went national for an unglamorous reason: our best commercial customers kept opening locations in cities we did not serve, and every time they did they got a worse experience from someone else and blamed the whole category.`,
          'So we expanded deliberately — one metro at a time, hiring and licensing locally rather than buying a franchise network. It is slower. It is why we are in ten metros and not fifty. It is also why the technician who shows up in Denver works to the same checklist as the one in Miami.',
        ]}
      />

      <ItemGrid
        eyebrow="What we stand for"
        title="Three commitments we are willing to lose work over."
        items={values}
        columns={3}
        tone="mist"
      />

      {/* By the numbers */}
      <Section tone="navy" glow>
        <Container>
          <SectionHeader
            eyebrow="By the numbers"
            title="What the operation actually looks like."
            onDark
          />
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-6">
            {numbers.map((n) => (
              <div key={n.label}>
                <dt className="sr-only">{n.label}</dt>
                <dd>
                  <span className="block text-stat font-bold leading-none tracking-[-0.04em] text-white">
                    {n.value}
                  </span>
                  <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">
                    {n.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* Licensing */}
      <Section tone="sand">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <SectionHeader eyebrow="Licensing" title="Licensed where we work." />
            <div className="space-y-4">
              <p className="text-lead leading-relaxed text-muted-foreground">
                We hold contractor and HVAC licenses in every state we operate
                in. Numbers appear on every invoice and every certificate of
                insurance, and we will send them before we send a technician if
                you would rather verify first.
              </p>
              <p className="text-lead leading-relaxed text-muted-foreground">
                {site.insuranceNote}
              </p>
              <ul role="list" className="flex flex-wrap gap-2.5 pt-2">
                {site.licenses.map((l) => (
                  <li
                    key={l.state}
                    className="rounded-full border border-border bg-background px-3.5 py-1.5 font-mono text-[12px] tracking-[0.04em]"
                  >
                    <span className="font-semibold">{l.state}</span>{' '}
                    <span className="text-muted-foreground">{l.number}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <CoverageStrip title={`Employed, licensed crews in all ${site.stats.metros} metros.`} />

      <FaqSection
        faqs={faqs}
        eyebrow="Quick answers"
        title="What people ask before they call."
        tone="mist"
      />

      <FinalCta
        title="Talk to a dispatcher, not a call center."
        lead="Someone who knows the crews in your market picks up, day or night."
      />
    </>
  )
}
