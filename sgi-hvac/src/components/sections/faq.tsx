import Link from 'next/link'
import type { FAQPage, WithContext } from 'schema-dts'

import { site } from '@/config/site'
import { Container, Section, type Tone } from './section'
import { JsonLd } from '@/components/seo/json-ld'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export type Faq = { q: string; a: string }

/**
 * FAQ block — split layout, Radix accordion, and FAQPage JSON-LD emitted from
 * the SAME data so the two can never drift.
 *
 * The reference site carried ~350 Q&A pairs across 60 pages and emitted no FAQ
 * schema at all. This is the single largest free SEO win available here.
 */
export function FaqSection({
  faqs,
  eyebrow = 'Quick answers',
  title = 'Straight answers to the questions we get most.',
  lead,
  tone = 'default',
}: {
  faqs: Faq[]
  eyebrow?: string
  title?: string
  lead?: string
  tone?: Tone
}) {
  const schema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <Section tone={tone} id="faq">
      <JsonLd data={schema} />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-4 text-section font-bold text-balance">{title}</h2>
            {lead && (
              <p className="mt-3.5 text-lead text-muted-foreground">{lead}</p>
            )}

            <div className="mt-7 rounded-xl bg-cloud p-6">
              <p className="font-display text-[17px] font-medium">
                Have a different question?
              </p>
              <a
                href={site.phoneHref}
                className="mt-1 block font-display text-2xl font-bold text-action underline-offset-4 hover:underline"
              >
                {site.phone}
              </a>
              <p className="mt-1.5 text-[13px] text-muted-foreground">
                Dispatch answered 24/7 across all {site.stats.metros} metros.
              </p>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className="border-b border-input first:border-t"
              >
                <AccordionTrigger className="py-6 text-left font-display text-[22px] font-bold leading-tight hover:text-action hover:no-underline lg:text-[26px]">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="max-w-[62ch] pb-6 text-[15.5px] leading-relaxed text-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  )
}

/**
 * Final CTA band — closes nearly every page.
 *
 * Solid gold, so the page ends on its strongest colour right before the deep
 * blue footer. Deep blue on gold measures 9.6:1.
 */
export function FinalCta({
  title,
  lead,
  primary = { label: 'Schedule Service', href: '/contact' },
}: {
  title: string
  lead?: string
  /** `null` drops the form CTA and promotes the phone — used on /emergency-hvac,
   *  where telling someone in a crisis to fill in a form is the wrong advice. */
  primary?: { label: string; href: string } | null
}) {
  return (
    <Section tone="gold" id="cta">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[clamp(2.25rem,5vw,3.25rem)] font-black leading-[1.04] tracking-[-0.045em] text-balance text-navy">
            {title}
          </h2>
          {lead && (
            <p className="mx-auto mt-3.5 max-w-[52ch] text-lead text-navy">{lead}</p>
          )}

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {primary && (
              <Link
                href={primary.href}
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-navy px-7 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-action"
              >
                {primary.label}
              </Link>
            )}
            <a
              href={site.phoneHref}
              className={
                primary
                  ? 'inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-navy px-7 text-[15px] font-semibold text-navy transition-colors hover:bg-navy hover:text-white'
                  : 'inline-flex min-h-13 items-center justify-center rounded-lg bg-navy px-8 text-[17px] font-bold text-white transition-colors duration-200 hover:bg-action'
              }
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
