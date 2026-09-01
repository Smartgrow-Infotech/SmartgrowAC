'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'

import { plans } from '@/content/plans'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

/**
 * Plan selector — tab list on the left, detail panel on the right.
 *
 * Built on Radix Tabs. The reference site styled this interaction but shipped
 * no handler for it in its JavaScript; Radix gives us working, keyboard-
 * accessible tabs with correct ARIA for free.
 */
export function PlanSelector() {
  return (
    <Tabs defaultValue="complete" className="gap-6 lg:grid lg:grid-cols-2 lg:gap-14">
      <TabsList className="flex h-auto w-full flex-col gap-3 bg-transparent p-0">
        {plans.map((plan) => (
          <TabsTrigger
            key={plan.id}
            value={plan.id}
            className="w-full justify-between rounded-xl border border-white/10 bg-white/4 px-5 py-4 text-left text-white/70 transition-colors data-[state=active]:border-white/30 data-[state=active]:bg-white/8 data-[state=active]:text-white hover:bg-white/7"
          >
            <span className="flex flex-col gap-1">
              <span className="text-[17px] font-semibold text-white">
                {plan.name}
              </span>
              <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-white/60">
                {plan.price}
                {plan.cadence}
              </span>
            </span>
            {plan.badge && (
              <span className="shrink-0 rounded-full bg-action px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white">
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
          className="mt-6 rounded-2xl border border-white/14 bg-white/4 p-8 lg:mt-0"
        >
          <p className="font-display text-2xl font-bold text-white">{plan.name}</p>
          <p className="mt-3 font-display text-[clamp(2.5rem,5vw,3rem)] font-bold leading-none tracking-tight text-white">
            {plan.price}
            <span className="ml-1.5 font-sans text-base font-medium text-white/60">
              {plan.cadence}
            </span>
          </p>
          <p className="mt-4 text-[15.5px] leading-relaxed text-white/78">
            {plan.summary}
          </p>

          <Link
            href={plan.cta.href}
            className="mt-6 inline-flex min-h-11 items-center rounded-full bg-action px-6 text-[15px] font-semibold text-white transition-colors hover:bg-action-hover"
          >
            {plan.cta.label}
          </Link>

          <ul
            role="list"
            className="mt-6 flex flex-col border-t border-white/12 pt-4"
          >
            {plan.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 py-2.5 text-[15px] leading-snug text-white/92"
              >
                <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-white/12">
                  <Check className="size-3 text-white" aria-hidden strokeWidth={3} />
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
