import Link from 'next/link'
import { Phone } from 'lucide-react'

import { site } from '@/config/site'
import { footerColumns, legalLinks } from '@/content/navigation'
import { metros } from '@/content/metros'
import { Logo, AvailabilityBadge } from '@/components/brand'
import { Button } from '@/components/ui/button'

const badges = [
  `${site.stats.metros} metros`,
  `${site.stats.statesLicensed} states licensed`,
  '24/7 dispatch',
  'Fully insured',
]

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-5 pb-8 pt-14 sm:px-8 lg:px-14">
        {/* top: brand + CTA */}
        <div className="grid gap-8 border-b border-white/12 pb-9 lg:grid-cols-[minmax(0,1fr)_minmax(380px,auto)]">
          <div>
            <Logo surface="dark" height={44} />
            <p className="mt-4 max-w-[46ch] font-display text-[17px] font-medium leading-snug text-white/85">
              Nationwide HVAC service, delivered by licensed local technicians.
              Serving {site.stats.metros} major U.S. metros since {site.founded}.
            </p>

            <ul role="list" className="mt-4 flex flex-wrap gap-2">
              {badges.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-white/14 px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-white/85"
                >
                  {b}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-[13px] leading-relaxed text-white/70">
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
              <span className="mx-2 opacity-40">·</span>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
              <span className="mx-2 hidden opacity-40 sm:inline">·</span>
              <span className="block sm:inline">
                {site.address.street}, {site.address.city}, {site.address.region}{' '}
                {site.address.postalCode}
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-3.5 lg:items-end lg:pt-12">
            <AvailabilityBadge onDark />
            <div className="flex flex-wrap gap-2.5 lg:justify-end">
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Schedule Service</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/50 bg-transparent text-white hover:bg-white hover:text-navy"
              >
                <a href={site.phoneHref}>
                  <Phone className="size-4" aria-hidden />
                  {site.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* link columns */}
        <div className="grid grid-cols-2 gap-8 border-b border-white/12 py-10 lg:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white">
                {col.heading}
              </p>
              <ul role="list">
                {col.links.map((link) => (
                  <li key={link.href} className="py-1">
                    <Link
                      href={link.href}
                      className="text-sm text-white/78 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* coverage strip */}
        <div className="border-b border-white/12 py-6">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
            Coverage
          </p>
          <ul role="list" className="flex flex-wrap gap-x-5 gap-y-2">
            {metros.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/service-areas/${m.slug}`}
                  className="text-sm text-white/78 transition-colors hover:text-white"
                >
                  {m.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/service-areas"
                className="text-sm font-medium text-white underline-offset-4 hover:underline"
              >
                All {site.stats.metros} metros →
              </Link>
            </li>
          </ul>
        </div>

        {/* legal */}
        <div className="flex flex-wrap justify-between gap-3 pt-6 text-xs leading-relaxed text-white/60">
          <p>
            © {new Date().getFullYear()} {site.name}. Licensed and insured in every
            market we serve.
          </p>
          <ul role="list" className="flex flex-wrap gap-4">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/78 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
