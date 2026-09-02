import type { Metadata } from 'next'

import { site } from '@/config/site'
import { LegalPage, type LegalBlock } from '@/components/sections/legal'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${site.name} collects, uses and protects the information you give us through this site.`,
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
}

const blocks: LegalBlock[] = [
  {
    p: [
      `This policy describes what ${site.name} does with information you give us through this website, and what happens to it afterwards. It is written to be read rather than to be technically unassailable, so if something here is unclear, ask us and we will explain it plainly.`,
    ],
  },
  {
    h: 'What we collect',
    p: [
      'Only two categories of information reach us from this site.',
    ],
    ul: [
      'What you type into a form. Name, phone number, email address, the metro you are in, the type of work you need, and any detail you choose to add. Nothing on our forms is required except what we genuinely need to call you back.',
      'Standard analytics. If analytics is enabled, an aggregate record of which pages were visited, roughly where from, and which links were clicked. This is not tied to your name and we do not attempt to identify individuals from it.',
    ],
  },
  {
    h: 'What we do with it',
    p: [
      'Form submissions are emailed to our dispatch or national accounts team so a person can call you back. That is the whole purpose. If you become a customer, the same details are used to schedule work, invoice you and honour warranties.',
      'Analytics data is used to understand which pages help people and which do not, so we can fix the ones that do not.',
    ],
  },
  {
    h: 'What we do not do',
    ul: [
      'We do not sell your information. Not to lead brokers, not to other contractors, not to anyone.',
      'We do not add you to a marketing list because you asked for a repair. Marketing email is opt-in only, and unsubscribing takes one click.',
      'We do not use your information to build advertising profiles or sell audience segments.',
    ],
  },
  {
    h: 'Who else sees it',
    p: [
      'A small number of service providers process data on our behalf, and only for the purpose we engage them for:',
    ],
    ul: [
      'Our email delivery provider, which transmits form submissions to our inbox.',
      'Our website host, which serves these pages and keeps standard server logs.',
      'Our analytics provider, where analytics is enabled.',
      'Our scheduling and invoicing systems, once you become a customer.',
    ],
  },
  {
    h: 'Cookies',
    p: [
      'This site sets no advertising or cross-site tracking cookies. Where analytics is enabled it may set a first-party cookie to distinguish repeat visits from new ones. Blocking cookies in your browser will not stop any part of this site from working.',
    ],
  },
  {
    h: 'Text messages and calls',
    p: [
      'Submitting a form and ticking the consent box means we may contact you by phone, text or email about that specific request. Message and data rates may apply. Reply STOP to any text to end messages, and tell any of our staff to stop calling and they will.',
    ],
  },
  {
    h: 'How long we keep it',
    p: [
      'Enquiries that do not become jobs are kept for a limited period and then deleted. Customer records are kept as long as we need them to honour warranties and meet tax and licensing record-keeping obligations, which in most states means several years.',
    ],
  },
  {
    h: 'Your rights',
    p: [
      'Wherever you live, you can ask us what we hold about you, ask us to correct it, or ask us to delete it. Residents of states with specific privacy statutes — including California, Colorado, Connecticut, Texas and Virginia — have additional statutory rights, including the right not to be discriminated against for exercising them. Since we do not sell personal information, there is nothing to opt out of on that front.',
      `To exercise any of this, email ${site.email}. We will verify who you are before acting on a deletion request, for obvious reasons.`,
    ],
  },
  {
    h: 'Children',
    p: [
      'This site is not directed at children and we do not knowingly collect information from anyone under 13. If you believe a child has submitted information to us, contact us and we will delete it.',
    ],
  },
  {
    h: 'Security',
    p: [
      'This site is served over HTTPS and form submissions are transmitted encrypted. No system is perfect, and anyone claiming otherwise is selling something — but we do not store payment card details on this site at all, which removes the category of breach that actually hurts.',
    ],
  },
  {
    h: 'Changes',
    p: [
      'If this policy changes materially we will update the date at the top of the page. Continued use of the site after a change means you accept the revised policy.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lead="What we collect, what we do with it, and — more usefully — what we do not do with it."
      updated="September 2026"
      reviewNote="This is a plain-language draft describing how the site is built to behave. It has not been reviewed by counsel and does not yet reflect state-specific notice requirements. Have a privacy attorney review it before launch."
      blocks={blocks}
    />
  )
}
