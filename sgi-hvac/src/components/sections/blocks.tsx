import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

import { cn } from '@/lib/utils'
import { site } from '@/config/site'
import { Container, Section, SectionHeader, type Tone } from './section'

/**
 * The repeating content blocks every inner page is assembled from.
 *
 * The reference site built 60 pages out of five templates; these are the
 * pieces those templates are made of. Keeping them here means a copy or
 * spacing change lands once, not on 47 pages.
 */

export type Item = { title: string; body: string }

/** 6-card grid — symptoms, signs, reasons, "what we see most". */
export function ItemGrid({
  eyebrow,
  title,
  lead,
  items,
  tone = 'default',
  columns = 3,
  id,
}: {
  eyebrow: string
  title: string
  lead?: string
  items: Item[]
  tone?: Tone
  columns?: 2 | 3
  id?: string
}) {
  return (
    <Section tone={tone} id={id}>
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} lead={lead} />
        <ul
          role="list"
          className={cn(
            'mt-10 grid gap-4 sm:grid-cols-2',
            columns === 3 && 'lg:grid-cols-3',
          )}
        >
          {items.map((it) => (
            <li
              key={it.title}
              className="rounded-xl border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
            >
              <h3 className="font-display text-[17px] font-bold leading-snug text-balance">
                {it.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {it.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

/** Numbered four-step process. */
export function ProcessSteps({
  eyebrow,
  title,
  lead,
  steps,
  tone = 'cloud',
}: {
  eyebrow: string
  title: string
  lead?: string
  steps: Item[]
  tone?: Tone
}) {
  return (
    <Section tone={tone}>
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} lead={lead} />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="rounded-xl border border-border bg-background p-6"
            >
              <span className="font-mono text-[13px] font-medium tracking-[0.14em] text-action">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-[17px] font-bold leading-snug">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}

export type ActionCard = {
  title: string
  body: string
  href: string
  features: string[]
  cta?: string
}

/** "Pick your path" cards with checkmark feature lists. */
export function ActionCards({
  eyebrow,
  title,
  lead,
  cards,
  tone = 'default',
}: {
  eyebrow: string
  title: string
  lead?: string
  cards: ActionCard[]
  tone?: Tone
}) {
  return (
    <Section tone={tone}>
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} lead={lead} />
        <ul
          role="list"
          className={cn(
            'mt-10 grid gap-5',
            cards.length === 2 && 'md:grid-cols-2',
            cards.length === 3 && 'md:grid-cols-2 lg:grid-cols-3',
            cards.length >= 4 && 'sm:grid-cols-2 lg:grid-cols-4',
          )}
        >
          {cards.map((c) => (
            <li key={c.href + c.title}>
              <Link
                href={c.href}
                className="group flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
              >
                <h3 className="font-display text-cardtitle font-bold text-balance">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
                <ul role="list" className="mt-4 flex flex-1 flex-col gap-2">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-action">
                        <Check
                          className="size-2.5 text-white"
                          aria-hidden
                          strokeWidth={3.5}
                        />
                      </span>
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-action">
                  {c.cta ?? 'Explore'}
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
 * Published price ranges.
 *
 * We publish install bands and deliberately never publish repair prices —
 * that distinction is the core of the brand's honesty positioning, so the
 * component only takes ranges plus a note.
 */
export function PriceBand({
  eyebrow = 'What it costs',
  title,
  lead,
  rows,
  note,
  tone = 'navy',
}: {
  eyebrow?: string
  title: string
  lead?: string
  rows: { label: string; range: string }[]
  note?: string
  tone?: Tone
}) {
  return (
    <Section tone={tone} glow={tone === 'navy'}>
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} lead={lead} onDark />
        <dl className="mt-9 divide-y divide-white/12 border-y border-white/12">
          {rows.map((r) => (
            <div
              key={r.label}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4"
            >
              <dt className="text-[15.5px] text-white/85">{r.label}</dt>
              <dd className="font-display text-[19px] font-bold tabular-nums text-white">
                {r.range}
              </dd>
            </div>
          ))}
        </dl>
        {note && (
          <p className="mt-6 max-w-[68ch] text-sm leading-relaxed text-white/70">
            {note}{' '}
            <a
              href={site.phoneHref}
              className="font-semibold text-white underline underline-offset-4"
            >
              Call {site.phone}
            </a>
            .
          </p>
        )}
      </Container>
    </Section>
  )
}

/** Editorial explainer — heading left, running prose right. */
export function Explainer({
  eyebrow,
  title,
  paragraphs,
  tone = 'default',
}: {
  eyebrow: string
  title: string
  paragraphs: string[]
  tone?: Tone
}) {
  return (
    <Section tone={tone}>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <SectionHeader eyebrow={eyebrow} title={title} />
          <div className="space-y-4">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-lead text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
