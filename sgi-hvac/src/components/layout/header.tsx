'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'

import { cn } from '@/lib/utils'
import { site } from '@/config/site'
import { navSections } from '@/content/navigation'
import { Logo, Eyebrow } from '@/components/brand'
import { Button } from '@/components/ui/button'
import { MobileDrawer } from './mobile-drawer'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    document.addEventListener('scroll', onScroll, { passive: true })
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-[76px] border-b border-border',
        'bg-background/92 backdrop-blur-md',
        'transition-shadow duration-200',
        scrolled && 'shadow-[0_1px_2px_rgb(11_27_43_/_0.06)]',
      )}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-14">
        <Link href="/" aria-label={`${site.name} — home`} className="shrink-0">
          <Logo priority />
        </Link>

        {/* Desktop navigation */}
        <NavigationMenu viewport={false} className="hidden max-w-none lg:flex">
          <NavigationMenuList className="gap-7">
            {navSections.map((section) => (
              // `static` so the mega-menu panel positions against the header,
              // not the item — that is what makes it full-bleed.
              <NavigationMenuItem key={section.label} className="static">
                <NavigationMenuTrigger
                  className={cn(
                    'h-auto rounded-none bg-transparent px-0 py-1.5 text-[15px] font-medium',
                    'hover:bg-transparent focus:bg-transparent data-open:bg-transparent',
                    'data-open:hover:bg-transparent data-popup-open:bg-transparent',
                    // the underline slide-in — the reference site's cleanest
                    // interaction, recoloured to Action Blue
                    'relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5',
                    'after:origin-left after:scale-x-0 after:bg-action',
                    'after:transition-transform after:duration-200',
                    'hover:after:scale-x-100 data-open:after:scale-x-100',
                  )}
                >
                  {section.label}
                </NavigationMenuTrigger>

                <NavigationMenuContent
                  className={cn(
                    'left-0 top-full w-screen rounded-none border-b border-border',
                    'bg-background p-0 shadow-[0_8px_24px_rgb(11_27_43_/_0.09)]',
                  )}
                >
                  <div className="mx-auto max-w-[1200px] px-5 py-9 sm:px-8 lg:px-14">
                    <div className={cn('grid gap-9', section.gridClass)}>
                      {section.columns.map((col) => (
                        <div key={col.heading}>
                          <p className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                            {col.heading}
                          </p>
                          <ul role="list" className="flex flex-col">
                            {col.links.map((link) => (
                              <li key={link.href + link.label}>
                                <Link
                                  href={link.href}
                                  className="block rounded-md py-1.5 text-[14.5px] font-medium text-foreground transition-colors hover:text-action"
                                >
                                  {link.label}
                                  {link.note && (
                                    <span className="mt-0.5 block text-[12.5px] font-normal leading-snug text-muted-foreground">
                                      {link.note}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* featured panel */}
                      <div className="flex flex-col gap-2.5 rounded-xl bg-cloud p-6">
                        <Eyebrow>{section.featured.eyebrow}</Eyebrow>
                        <p className="font-display text-[18px] font-medium leading-tight text-foreground">
                          {section.featured.title}
                        </p>
                        <p className="text-[13.5px] leading-relaxed text-muted-foreground">
                          {section.featured.body}
                        </p>
                        <Button asChild size="sm" className="mt-2 w-fit">
                          <Link href={section.featured.cta.href}>
                            {section.featured.cta.label}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTAs */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-[15px] font-medium text-foreground transition-colors hover:text-action"
          >
            <Phone className="size-4" aria-hidden />
            {site.phone}
          </a>
          <Button asChild>
            <Link href="/contact">Schedule Service</Link>
          </Button>
        </div>

        {/* Mobile CTAs */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phone}`}
            className="inline-flex size-11 items-center justify-center rounded-lg bg-action text-white transition-colors hover:bg-action-hover"
          >
            <Phone className="size-5" aria-hidden />
          </a>
          <MobileDrawer />
        </div>
      </div>
    </header>
  )
}
