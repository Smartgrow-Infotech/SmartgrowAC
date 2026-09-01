'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'

import { site } from '@/config/site'
import { navSections } from '@/content/navigation'
import { Logo, AvailabilityBadge } from '@/components/brand'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function MobileDrawer() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex size-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-cloud"
        >
          <Menu className="size-6" aria-hidden />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="flex w-[min(420px,100vw)] flex-col p-0">
        <SheetHeader className="border-b border-border px-5 py-4">
          <SheetTitle asChild>
            <Link href="/" onClick={close} aria-label={`${site.name} — home`}>
              <Logo height={32} />
            </Link>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex-1 overflow-y-auto" aria-label="Mobile">
          <Accordion type="single" collapsible className="w-full">
            {navSections.map((section) => (
              <AccordionItem
                key={section.label}
                value={section.label}
                className="border-b border-border"
              >
                <AccordionTrigger className="px-5 py-4 text-base font-semibold hover:bg-cloud hover:no-underline">
                  {section.label}
                </AccordionTrigger>
                <AccordionContent className="bg-cloud px-5 pb-4 pt-1">
                  {section.columns.map((col) => (
                    <div key={col.heading} className="mt-3 first:mt-1">
                      <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                        {col.heading}
                      </p>
                      <ul role="list">
                        {col.links.map((link) => (
                          <li key={link.href + link.label}>
                            <Link
                              href={link.href}
                              onClick={close}
                              className="block py-2 text-[14.5px] font-medium text-foreground transition-colors hover:text-action"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </nav>

        <div className="shrink-0 border-t border-border bg-cloud p-5">
          <AvailabilityBadge />
          <a
            href={site.phoneHref}
            className="mt-1 block font-display text-2xl font-bold text-foreground transition-colors hover:text-action"
          >
            {site.phone}
          </a>
          <Link
            href="/financing"
            onClick={close}
            className="mt-2 inline-block text-sm font-medium text-action underline-offset-4 hover:underline"
          >
            Financing options
          </Link>
          <Button asChild className="mt-4 w-full" size="lg">
            <Link href="/contact" onClick={close}>
              Schedule Service
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
