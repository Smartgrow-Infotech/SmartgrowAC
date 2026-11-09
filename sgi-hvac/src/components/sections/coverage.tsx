import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { site } from '@/config/site'
import { metros } from '@/content/metros'
import { Container, Section, SectionHeader, type Tone } from './section'

/**
 * Full coverage grid — the homepage and /service-areas hub.
 * Each tile leads with the metro's differentiating hook, because "we serve 10
 * cities" is worth nothing and "humidity is the real problem in Houston" is
 * worth reading.
 */
export function CoverageGrid({ tone = 'frost' }: { tone?: Tone }) {
  return (
    <Section tone={tone} id="coverage">
      <Container>
        <SectionHeader
          eyebrow="Where we work"
          title={`${site.stats.metros} metros. Local crews in every one.`}
          lead="Same diagnostic process, same reporting, same escalation path — whether the call is in Phoenix or Philadelphia."
        />

        <ul
          role="list"
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {metros.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/service-areas/${m.slug}`}
                className={cn(
                  'group flex h-full flex-col rounded-xl border border-border bg-background p-5',
                  'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card',
                )}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-display text-cardtitle font-bold">
                    {m.name}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    {m.state}
                  </span>
                </div>
                {m.isHeadquarters && (
                  <span className="mt-1.5 w-fit rounded-full bg-cloud px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    Headquarters
                  </span>
                )}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {m.hook}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-action">
                  {m.city} HVAC
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

/**
 * Compact one-line coverage strip. Sits near the bottom of service, system and
 * commercial pages (~40 pages) so every one of them links out to all 10 metros.
 */
export function CoverageStrip({
  title = 'Service across all 10 metros.',
  tone = 'cloud',
}: {
  title?: string
  tone?: Tone
}) {
  return (
    <Section tone={tone} size="sm">
      <Container>
        <h2 className="text-sub font-bold">{title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Local licensed technicians. Same standards in every market.
        </p>
        <ul role="list" className="mt-5 flex flex-wrap gap-2">
          {metros.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/service-areas/${m.slug}`}
                className="inline-flex min-h-9 items-center rounded-full border border-input bg-background px-3.5 text-sm font-medium transition-colors hover:border-action hover:text-action"
              >
                {m.name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
