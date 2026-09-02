import { AlertTriangle } from 'lucide-react'

import { site } from '@/config/site'
import { PageHero } from '@/components/sections/page-hero'
import { Container, Section } from '@/components/sections/section'
import { FinalCta } from '@/components/sections/faq'

export type LegalBlock =
  | { h: string; p?: string[]; ul?: string[] }
  | { p: string[]; h?: never; ul?: never }

/**
 * Shared shell for /privacy-policy, /terms and /accessibility.
 *
 * ⚠️ The documents rendered through this are plain-language DRAFTS written to
 * remove dead links and describe how the site actually behaves. They are not
 * legal advice and have not been reviewed by counsel. State consumer-protection
 * and home-improvement contract rules differ across the markets this site
 * claims to serve, so the terms document in particular needs review before
 * launch. The banner below says so on the page rather than only in a comment.
 */
export function LegalPage({
  eyebrow,
  title,
  lead,
  updated,
  blocks,
  reviewNote,
}: {
  eyebrow: string
  title: string
  lead: string
  updated: string
  blocks: LegalBlock[]
  reviewNote: string
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        lead={lead}
        crumbs={[{ label: title }]}
        variant="compact"
        tone="cloud"
        hideActions
      >
        <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.12em] text-muted-foreground">
          Last updated · {updated}
        </p>
      </PageHero>

      <Section>
        <Container>
          <div className="mx-auto max-w-[74ch]">
            <div className="flex gap-3.5 rounded-xl border border-orange/35 bg-sand p-5">
              <AlertTriangle className="mt-0.5 size-5 shrink-0 text-orange" aria-hidden />
              <p className="text-[15px] leading-relaxed">
                <strong className="font-semibold">Draft pending legal review.</strong>{' '}
                {reviewNote}
              </p>
            </div>

            <div className="mt-12 space-y-10">
              {blocks.map((b, i) => (
                <section key={b.h ?? `block-${i}`}>
                  {b.h && (
                    <h2 className="text-cardtitle font-bold tracking-[-0.02em]">
                      {b.h}
                    </h2>
                  )}
                  {b.p?.map((para) => (
                    <p
                      key={para.slice(0, 40)}
                      className="mt-3.5 text-[16px] leading-[1.7] text-muted-foreground"
                    >
                      {para}
                    </p>
                  ))}
                  {b.ul && (
                    <ul
                      role="list"
                      className="mt-4 space-y-2.5 border-l-2 border-border pl-5"
                    >
                      {b.ul.map((li) => (
                        <li
                          key={li.slice(0, 40)}
                          className="text-[16px] leading-[1.7] text-muted-foreground"
                        >
                          {li}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-14 rounded-xl border border-border bg-cloud p-6">
              <h2 className="font-display text-[17px] font-bold">Questions?</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                Email{' '}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-action underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>{' '}
                or call{' '}
                <a
                  href={site.phoneHref}
                  className="font-semibold text-action underline-offset-4 hover:underline"
                >
                  {site.phone}
                </a>
                . Written enquiries can be sent to {site.legalName},{' '}
                {site.address.street}, {site.address.city}, {site.address.region}{' '}
                {site.address.postalCode}.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta
        title="Need something fixed instead?"
        lead="Dispatch is answered 24/7 — including on the days nobody wants to read a policy page."
      />
    </>
  )
}
