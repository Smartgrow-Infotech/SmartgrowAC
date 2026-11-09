import type { Metadata } from 'next'

import { site } from '@/config/site'
import { headquartersMetro } from '@/content/metros'
import { images } from '@/content/images'
import { PageHero } from '@/components/sections/page-hero'
import { CoverageGrid } from '@/components/sections/coverage'
import { FaqSection, FinalCta } from '@/components/sections/faq'
import type { Faq } from '@/components/sections/faq'

export const metadata: Metadata = {
  title: 'Coverage — HVAC Service in 10 U.S. Metros',
  description: `${site.name} serves ${site.stats.metros} major U.S. metros with licensed local HVAC technicians. Same standards, same reporting, one number.`,
  alternates: { canonical: '/service-areas' },
}

const faqs: Faq[] = [
  {
    q: 'Why only ten metros?',
    a: 'Because we employ and license our technicians rather than brokering work to whoever is nearest. Adding a market means hiring and licensing a crew there, which is slow. We would rather serve ten metros properly than fifty on paper.',
  },
  {
    q: 'Do you charge travel fees to outlying areas?',
    a: 'Not inside our published metro service radius. Outside it we will tell you honestly whether we can serve you well rather than adding a fee and hoping it works out.',
  },
  {
    q: 'What if my location is just outside one of your metros?',
    a: 'Call and ask. If you are close we can often still help. If you are genuinely far outside, we will say so rather than accepting the job and subcontracting it to someone we cannot stand behind.',
  },
  {
    q: 'Are standards actually the same in every market?',
    a: 'That is the entire point of the model. Same diagnostic process, same written reporting format, same escalation path, same rate structure — in Dallas, in Denver, in Miami. It is also what makes portfolio-level cost comparison possible for multi-site operators.',
  },
  {
    q: 'Can you cover a multi-site portfolio across several of these metros?',
    a: 'Yes, and it is the core of our commercial business. One master agreement, per-location service plans, one account manager and consolidated invoicing. We will also map which of your sites we can serve well before you sign anything.',
  },
  {
    q: 'Are your technicians licensed in each state?',
    a: 'Yes. Every technician holds the licence their state requires, and we publish the numbers by state. We do not subcontract into markets we cannot stand behind.',
  },
]

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title={`HVAC service in ${site.stats.metros} major U.S. metros.`}
        lead="Local licensed crews, national standards. Same diagnostic process, same reporting, same escalation path — wherever the call comes from."
        badge={`Headquarters — ${headquartersMetro.city}`}
        crumbs={[{ label: 'Coverage' }]}
        image={images.heroTechnician}
      />

      <CoverageGrid tone="default" />

      <FaqSection
        faqs={faqs}
        eyebrow="Coverage questions"
        title="How the coverage model actually works."
        tone="mist"
      />

      <FinalCta
        title="Not sure if you are in range?"
        lead="Call and we will tell you honestly. Dispatch answered 24/7."
      />
    </>
  )
}
