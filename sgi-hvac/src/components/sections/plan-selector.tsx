'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'

import { plans, priceLine } from '@/content/plans'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

/**
 * Plan selector — tab list on the left, detail panel on the right.
 *
 * NOTE: `orientation="vertical"` is load-bearing, not cosmetic. shadcn's
 * TabsList carries `group-data-horizontal/tabs:h-8`, which pins the whole list
 * to 32px and crushes multi-line triggers. Vertical orientation switches it to
 * `h-fit` + `flex-col` and makes the triggers full-width and left-aligned,
 * which is the layout we actually want.
 *
 * Built on Radix, so arrow-key navigation and ARIA come for free. The reference
 * site styled this interaction but shipped no handler for it at all.
 */
export function PlanSelector() {
  return (
    <Tabs
      orientation="vertical"
      defaultValue="complete"
      className="flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-12"
    >
      <TabsList className="h-auto w-full flex-col gap-3 bg-transparent p-0">
        {plans.map((plan) => (
          <TabsTrigger
            key={plan.id}
            value={plan.id}
            className="h-auto w-full items-start justify-between gap-4 whitespace-normal rounded-xl border border-white/12 bg-white/5 px-5 py-4 text-left text-white/70 transition-colors hover:bg-white/10 hover:text-white data-active:border-gold data-active:bg-white/10 data-active:text-white data-active:shadow-none"
          >
            <span className="flex min-w-0 flex-col gap-1">
              <span className="font-display text-[17px] font-bold leading-tight text-white">
                {plan.name}
              </span>
              <span className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.1em] text-white/60">
                {priceLine(plan)}
              </span>
            </span>
            {plan.badge && (
              <span className="mt-0.5 shrink-0 rounded-full bg-gold px-2.5 py-1 font-mono text-[10px] uppercase leading-none tracking-[0.08em] text-navy">
                {plan.badge}
              </span>
            )}
          </TabsTrigger>
        ))}
      </TabsList>

      {plans.map((plan) => (
        <TabsContent
          key={plan.id}
          value={plan.id}
          className="rounded-2xl border border-white/14 bg-white/5 p-7 sm:p-9"
        >
          <p className="font-display text-sub font-bold text-white">{plan.name}</p>

          <p className="mt-3 flex flex-wrap items-baseline gap-x-2 font-display text-[clamp(2.5rem,5vw,3rem)] font-bold leading-none tracking-tight text-white">
            <span>
              {plan.price}
              {plan.unit}
            </span>
            <span className="font-sans text-base font-medium tracking-normal text-white/60">
              {plan.note}
            </span>
          </p>

          <p className="mt-4 max-w-[46ch] text-[15.5px] leading-relaxed text-white/78">
            {plan.summary}
          </p>

          <Link
            href={plan.cta.href}
            className="mt-6 inline-flex min-h-11 items-center rounded-full bg-gold px-6 text-[15px] font-semibold text-navy transition-colors hover:bg-white"
          >
            {plan.cta.label}
          </Link>

          <ul role="list" className="mt-7 flex flex-col border-t border-white/12 pt-3">
            {plan.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 py-2.5 text-[15px] leading-snug text-white/92"
              >
                <span className="mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full bg-gold">
                  <Check className="size-3 text-navy" aria-hidden strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </TabsContent>
      ))}
    </Tabs>
  )
}
