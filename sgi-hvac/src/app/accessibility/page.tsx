import type { Metadata } from 'next'

import { site } from '@/config/site'
import { LegalPage, type LegalBlock } from '@/components/sections/legal'

export const metadata: Metadata = {
  title: 'Accessibility',
  description: `How ${site.name} built this site for accessibility, what we have verified, and what to do if something does not work for you.`,
  alternates: { canonical: '/accessibility' },
}

const blocks: LegalBlock[] = [
  {
    p: [
      'We build for WCAG 2.2 Level AA. This page says what that means in practice, what we have actually verified, and what to do if you hit something that does not work — because a statement that only makes claims is not much use to anyone.',
    ],
  },
  {
    h: 'What we have built in',
    ul: [
      'A skip link as the first focusable element on every page, so keyboard and screen-reader users can jump past the navigation.',
      'Full keyboard operation. Every menu, drawer, tab set, accordion and form control is reachable and operable without a mouse, with a visible focus ring at every stop.',
      'Semantic structure — real headings in order, real lists, real landmarks — so screen readers can navigate by structure rather than by reading everything.',
      'Text contrast at 4.5:1 or better against its background throughout. Where a brand colour did not meet that, we use it decoratively rather than for text.',
      'Descriptive alternative text on photography, and decorative graphics hidden from assistive technology rather than announced as noise.',
      'Reduced-motion support: with the operating-system setting enabled, animation and scrolling effects stop.',
      'Form fields with properly associated labels, errors announced in text next to the field rather than by colour alone, and touch targets at least 44px.',
      'Text that reflows and remains readable when zoomed to 200%, and a layout that works at mobile widths without horizontal scrolling.',
    ],
  },
  {
    h: 'What we have verified, and how',
    p: [
      'Keyboard-only navigation through every interactive component. Contrast ratios calculated against the actual token values rather than eyeballed. Rendering checked at desktop and mobile widths, and with reduced motion enabled.',
      'Being straight with you: we have not yet completed a full third-party audit or testing with a representative range of assistive technologies and real users. Until that happens, treat this page as a description of intent backed by internal verification — not as a certification.',
    ],
  },
  {
    h: 'Known gaps',
    ul: [
      'No third-party accessibility audit has been completed.',
      'Testing with screen readers has been limited to internal checks rather than user testing.',
      'We do not use an accessibility overlay widget. They are widely reported to interfere with the assistive technology people already have configured, so we would rather fix the underlying markup.',
    ],
  },
  {
    h: 'If something does not work',
    p: [
      `Tell us and we will fix it. Email ${site.email} or call ${site.phone} — dispatch is answered 24/7 and can route an accessibility report to the right person.`,
      'It helps if you can tell us the page, what you were trying to do, and what assistive technology and browser you were using. It is not required. A message saying "the booking form does not work with my screen reader" is enough for us to start.',
      'We aim to acknowledge accessibility reports within two business days and to tell you what we are doing about it, including a timeline if the fix is not immediate.',
    ],
  },
  {
    h: 'Getting service another way',
    p: [
      'If this website is a barrier, it should never be the only route to us. Calling reaches a person at any hour, and our dispatchers can take every detail the form asks for and book the visit for you. If phone is difficult, email works and gets a same-business-day reply.',
    ],
  },
]

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Accessibility"
      title="Accessibility"
      lead="What we built, what we have actually verified, where the gaps still are, and how to tell us when something does not work."
      updated="September 2026"
      reviewNote="This statement describes the current build honestly, including its gaps. Before launch it should be updated to reflect the results of a third-party audit, and reviewed alongside your ADA compliance posture."
      blocks={blocks}
    />
  )
}
