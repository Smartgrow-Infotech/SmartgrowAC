import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'

import { cn } from '@/lib/utils'
import { site } from '@/config/site'
import type { SiteImage } from '@/content/images'
import { Container, type Tone } from './section'
import { Eyebrow, DotGrid } from '@/components/brand'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { JsonLd } from '@/components/seo/json-ld'
import type { BreadcrumbList as BreadcrumbSchema, WithContext } from 'schema-dts'

export type Crumb = { label: string; href?: string }

/**
 * Breadcrumb trail + matching BreadcrumbList JSON-LD, emitted from one array
 * so the rendered trail and the structured data can never disagree.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: 'Home', href: '/' }, ...items]

  const schema: WithContext<BreadcrumbSchema> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${site.url}${c.href === '/' ? '' : c.href}` } : {}),
    })),
  }

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumb>
        <BreadcrumbList className="text-[13px]">
          {all.map((c, i) => (
            <span key={c.label} className="contents">
              <BreadcrumbItem>
                {c.href && i < all.length - 1 ? (
                  <BreadcrumbLink asChild>
                    <Link href={c.href}>{c.label}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{c.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {i < all.length - 1 && <BreadcrumbSeparator />}
            </span>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  )
}

/**
 * Inner-page hero.
 *
 * Two shapes: `split` puts a photo beside the copy (category hubs, metros),
 * `compact` is text-only on a tinted band (legal, about, utility pages).
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  image,
  badge,
  tone = 'mist',
  variant = 'split',
  hideActions = false,
  children,
}: {
  eyebrow: string
  title: string
  lead: string
  crumbs: Crumb[]
  image?: SiteImage
  /** Small mono chip beside the rating line — e.g. "Headquarters metro". */
  badge?: string
  tone?: Extract<Tone, 'default' | 'mist' | 'frost' | 'sand' | 'cloud'>
  variant?: 'split' | 'compact'
  /** Suppress the stock CTA pair — used on /contact, where they link to self. */
  hideActions?: boolean
  children?: React.ReactNode
}) {
  const toneClass = {
    default: 'bg-background',
    mist: 'bg-mist',
    frost: 'bg-frost',
    sand: 'bg-sand',
    cloud: 'bg-cloud',
  }[tone]

  return (
    <section
      className={cn('relative overflow-hidden', toneClass)}
      id="page-hero"
    >
      <DotGrid />
      <Container className="relative z-10 pb-[clamp(2.5rem,5vw,4rem)] pt-4">
        <Breadcrumbs items={crumbs} />

        <div
          className={cn(
            'mt-6 grid items-center gap-10',
            variant === 'split' && image && 'lg:grid-cols-[1.1fr_0.9fr] lg:gap-14',
          )}
        >
          <div className={cn(variant === 'compact' && 'max-w-[62ch]')}>
            <Eyebrow>{eyebrow}</Eyebrow>

            <h1 className="mt-5 max-w-[20ch] text-[clamp(2.125rem,4.4vw,3.125rem)] font-bold leading-[1.04] tracking-[-0.045em] text-balance">
              {title}
            </h1>

            <p className="mt-5 max-w-[58ch] text-lead text-muted-foreground">
              {lead}
            </p>

            {badge && (
              <p className="mt-5 inline-flex items-center rounded-full border border-action/25 bg-action/8 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-action">
                {badge}
              </p>
            )}

            {!hideActions && (
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href="/contact">Schedule Service</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={site.phoneHref}>
                    <Phone className="size-4" aria-hidden />
                    Call {site.phone}
                  </a>
                </Button>
              </div>
            )}

            {children}
          </div>

          {variant === 'split' && image && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cloud shadow-[0_24px_60px_rgb(11_27_43_/_0.14)]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/25 to-transparent"
                aria-hidden
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
