import type { Metadata } from 'next'

import { site } from '@/config/site'
import { LegalPage, type LegalBlock } from '@/components/sections/legal'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: `Terms governing use of the ${site.name} website, including how pricing information published here should be read.`,
  alternates: { canonical: '/terms' },
}

const blocks: LegalBlock[] = [
  {
    p: [
      `These terms govern your use of this website. They do not govern work we perform for you — that is covered by the written proposal, contract and invoice for the specific job, which takes precedence over anything on this site if the two ever disagree.`,
    ],
  },
  {
    h: 'Pricing published on this site',
    p: [
      'This point matters more than the rest of this page, so it goes first.',
      'Installation price ranges published here are ranges, not quotes. They reflect typical jobs in our markets and will move with equipment selection, the condition of your existing system, electrical and ductwork requirements, access, permit costs and local labour rates. A binding price comes only from a written proposal after someone has seen the building.',
      'We deliberately do not publish repair prices, because a repair price given before a diagnosis is a guess — and guesses get revised upward once someone is on site. Anyone quoting you a repair figure over the phone is either guessing or planning to change it.',
    ],
  },
  {
    h: 'Estimates and proposals',
    p: [
      'Written estimates are valid for the period stated on the document. Equipment availability and manufacturer pricing change, sometimes quickly, and an expired estimate may need to be reissued.',
      'Where work uncovers a condition that could not reasonably have been seen during the assessment — a failed heat exchanger behind a panel, undersized existing wiring, hidden water damage — we stop, tell you, and get written approval before doing anything that changes the price.',
    ],
  },
  {
    h: 'Scheduling and arrival windows',
    p: [
      'Arrival windows are estimates given in good faith. Traffic, weather and emergency escalations move them. We will tell you when a window slips rather than letting you wait. We do not advertise a guaranteed response time, and we would treat any contractor who does with some scepticism.',
    ],
  },
  {
    h: 'Warranties',
    p: [
      'Labour and parts warranties are stated in writing on the invoice for each job. Equipment carries the manufacturer warranty for that model, which is typically conditional on registration and on documented annual maintenance — we will tell you what those conditions are rather than letting you discover them at claim time.',
      'Warranty work requires that the equipment has not been modified, serviced by others in a way that caused the failure, or operated outside its design conditions.',
    ],
  },
  {
    h: 'Licensing and insurance',
    p: [
      `We hold contractor and HVAC licences in every state where we perform work. Licence numbers appear on invoices and certificates of insurance and are available on request before work begins. ${site.insuranceNote}`,
    ],
  },
  {
    h: 'Content on this site',
    p: [
      'Technical explanations, system comparisons and maintenance guidance published here are general information about how HVAC equipment works. They are written carefully, but they are not a substitute for a technician assessing your specific building. Do not use anything here as instructions for working on gas piping, refrigerant circuits or electrical service — those require a licence for good reason.',
      `Text, images, layout and code on this site belong to ${site.legalName} or its licensors. You may read, print and share pages for your own use. You may not republish substantial portions commercially, or scrape the site to train or populate a competing service, without written permission.`,
    ],
  },
  {
    h: 'Third-party links',
    p: [
      'Where we link to manufacturers, utility rebate programs or government incentive pages, we do not control that content and are not responsible for it. Incentive amounts in particular change frequently — confirm current figures with the administering body before relying on them.',
    ],
  },
  {
    h: 'Limitation of liability',
    p: [
      'To the extent permitted by law, our liability arising from your use of this website is limited to the amount you paid us, if anything, for services related to that use. Nothing here limits liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be limited.',
      'Your rights as a consumer under the law of your state are not affected by anything on this page.',
    ],
  },
  {
    h: 'Governing law',
    p: [
      `These terms are governed by the laws of ${site.address.regionName}, without regard to conflict-of-law principles. Consumer-protection and home-improvement contract rules in the state where the work is performed apply regardless, and where they conflict with these terms, they win.`,
    ],
  },
  {
    h: 'Changes',
    p: [
      'We may update these terms. The date at the top of the page reflects the current version. Material changes do not apply retroactively to work already contracted.',
    ],
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      lead="What using this site means, and — most importantly — how the prices published here should and should not be read."
      updated="September 2026"
      reviewNote="This is a plain-language draft. Home-improvement contract rules, right-of-cancellation notices and consumer-protection requirements differ across every state this site claims to serve, and several of them mandate specific wording. Have a contracts attorney review it before launch."
      blocks={blocks}
    />
  )
}
