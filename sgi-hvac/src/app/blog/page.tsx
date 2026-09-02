import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import type { Blog, WithContext } from 'schema-dts'

import { site } from '@/config/site'
import { posts } from '@/content/posts'
import { images } from '@/content/images'
import { PageHero } from '@/components/sections/page-hero'
import { Container, Section } from '@/components/sections/section'
import { CoverageStrip } from '@/components/sections/coverage'
import { FinalCta } from '@/components/sections/faq'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Straight answers to the HVAC decisions people actually get stuck on — sizing, humidity, ductless retrofits and multi-site contracts.',
  alternates: { canonical: '/blog' },
}

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

export default function BlogPage() {
  const [lead, ...rest] = posts

  const schema: WithContext<Blog> = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${site.name} HVAC Blog`,
    url: `${site.url}/blog`,
    publisher: { '@id': `${site.url}/#organization` },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting' as const,
      headline: p.title,
      description: p.metaDescription,
      datePublished: p.published,
      url: `${site.url}/blog/${p.slug}`,
    })),
  }

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        eyebrow="Blog"
        title="Straight answers to the questions people get stuck on."
        lead="Three long pieces rather than thirty short ones. Each covers a decision we get asked about constantly, in enough depth to actually settle it."
        crumbs={[{ label: 'Blog' }]}
        variant="compact"
        tone="cloud"
        hideActions
      />

      {/* Featured post */}
      <Section size="sm">
        <Container>
          <Link
            href={`/blog/${lead.slug}`}
            className="group grid gap-8 rounded-2xl border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:p-8"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-cloud">
              <Image
                src={images[lead.image].src}
                alt={images[lead.image].alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div>
              <span className="inline-flex items-center rounded-full bg-mist px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-action">
                {lead.category}
              </span>
              <h2 className="mt-4 max-w-[20ch] text-[clamp(1.5rem,2.8vw,2.125rem)] font-bold leading-[1.1] tracking-[-0.035em] text-balance">
                {lead.title}
              </h2>
              <p className="mt-4 max-w-[52ch] text-lead text-muted-foreground">
                {lead.excerpt}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[12px] uppercase tracking-[0.1em] text-muted-foreground">
                <time dateTime={lead.published}>{formatDate(lead.published)}</time>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-3.5" aria-hidden />
                  {lead.readingMinutes} min read
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-action">
                Read the piece
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </div>
          </Link>
        </Container>
      </Section>

      {/* The rest */}
      <Section tone="mist">
        <Container>
          <p className="eyebrow">All posts</p>
          <ul role="list" className="mt-8 grid gap-5 md:grid-cols-2">
            {rest.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
                >
                  <div className="relative aspect-[16/9] bg-cloud">
                    <Image
                      src={images[p.image].src}
                      alt={images[p.image].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-action">
                      {p.category}
                    </span>
                    <h3 className="mt-3 font-display text-cardtitle font-bold leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                      <time dateTime={p.published}>{formatDate(p.published)}</time>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-3" aria-hidden />
                        {p.readingMinutes} min
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CoverageStrip title={`Service in all ${site.stats.metros} metros.`} />

      <FinalCta
        title="Still not sure what you are looking at?"
        lead="Describe the symptom and we will tell you what it usually means — before anyone books a visit."
      />
    </>
  )
}
