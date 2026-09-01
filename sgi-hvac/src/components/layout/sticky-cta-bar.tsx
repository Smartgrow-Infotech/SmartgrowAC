'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CalendarCheck, Phone } from 'lucide-react'

import { cn } from '@/lib/utils'
import { site } from '@/config/site'

/**
 * Mobile-only sticky CTA bar. Appears after the hero scrolls past and hides
 * near the footer so it never covers the footer's own CTAs.
 */
export function StickyCtaBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero')
      const footer = document.querySelector('footer')
      const heroHeight = hero?.offsetHeight ?? 600
      const pastHero = window.scrollY > heroHeight * 0.6
      const footerTop = footer?.getBoundingClientRect().top ?? Infinity
      const nearFooter = footerTop < window.innerHeight - 80
      setShow(pastHero && !nearFooter)
    }
    onScroll()
    document.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      document.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-background p-2',
        'shadow-[0_-4px_16px_rgb(11_27_43_/_0.06)] transition-transform duration-300 lg:hidden',
        show ? 'translate-y-0' : 'translate-y-full',
      )}
      // hidden from AT when off-screen — the links are all reachable elsewhere
      aria-hidden={!show}
      inert={!show ? true : undefined}
    >
      <a
        href={site.phoneHref}
        className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-background text-sm font-semibold text-foreground"
      >
        <Phone className="size-4" aria-hidden />
        Call
      </a>
      <Link
        href="/contact"
        className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-action text-sm font-semibold text-white transition-colors hover:bg-action-hover"
      >
        <CalendarCheck className="size-4" aria-hidden />
        Schedule
      </Link>
    </div>
  )
}
