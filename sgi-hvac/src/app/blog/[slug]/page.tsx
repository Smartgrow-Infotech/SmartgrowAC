import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Clock } from 'lucide-react'
import type { BlogPosting, WithContext } from 'schema-dts'

import { site } from '@/config/site'
import { posts, postBySlug, type PostBlock } from '@/content/posts'
import { images } from '@/content/images'
import { Breadcrumbs } from '@/components/sections/page-hero'
import { Container, Section } from '@/components/sections/section'
import { FinalCta } from '@/components/sections/faq'
import { JsonLd } from '@/components/seo/json-ld'
import { Eyebrow } from '@/components/brand'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const post = postBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.metaDescription,
      url: `${site.url}/blog/${slug}`,
      publishedTime: post.published,
    },
  }
}

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="mt-14 text-section font-bold tracking-[-0.035em] text-balance first:mt-0">
          {block.text}
        </h2>
      )
    case 'h3':
      return (
        <h3 className="mt-9 font-display text-cardtitle font-bold tracking-[-0.02em]">
          {block.text}
        </h3>
      )
    case 'p':
      return (
        <p className="mt-5 text-[17px] leading-[1.72] text-foreground/85">
          {block.text}
        </p>
      )
    case 'ul':
      return (
        <ul role="list" className="mt-6 space-y-3.5">
          {block.items.map((item) => (
            <li key={item.slice(0, 40)} className="flex gap-3.5">
              <span
                className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-action"
                aria-hidden
              />
              <span className="text-[17px] leading-[1.72] text-foreground/85">
                {item}
              </span>
            </li>
          ))}
        </ul>
      )
    case 'callout':
      return (
        <aside className="mt-9 rounded-xl border-l-3 border-action bg-mist p-6">
          <p className="font-display text-[17px] font-bold leading-snug">
            {block.title}
          </p>
          <p className="mt-2.5 text-[16px] leading-[1.7] text-foreground/85">
            {block.text}
          </p>
        </aside>
      )
    case 'table':
      return (
        <div className="mt-8 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <thead>
              <tr className="bg-cloud">
                {block.head.map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]} className="border-t border-border">
                  {row.map((cell, i) => (
                    <td
                      key={cell}
                      className={
                        i === 0
                          ? 'px-5 py-4 text-[15px] font-semibold'
                          : 'px-5 py-4 text-[15px] text-muted-foreground'
                      }
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }
}

export default async function PostPage({ params }: PageProps<'/blog/[slug]'>) {
  const { slug } = await params
  const post = postBySlug(slug)
  if (!post) notFound()

  const image = images[post.image]
  const others = posts.filter((p) => p.slug !== post.slug)

  const schema: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.published,
    dateModified: post.published,
    // Attributed to the organization, not an invented byline. Naming a real
    // author here is a launch item, not something to fabricate.
    author: { '@id': `${site.url}/#organization` },
    publisher: { '@id': `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    image: `${site.url}${image.src}`,
    articleSection: post.category,
  }

  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="bg-cloud">
        <Container className="pb-12 pt-4">
          <Breadcrumbs
            items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]}
          />
          <div className="mt-6 max-w-[24ch]">
            <Eyebrow>{post.category}</Eyebrow>
          </div>
          <h1 className="mt-5 max-w-[22ch] text-[clamp(2.125rem,4.4vw,3.125rem)] font-bold leading-[1.04] tracking-[-0.045em] text-balance">
            {post.title}
          </h1>
          <p className="mt-5 max-w-[62ch] text-lead text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[12px] uppercase tracking-[0.1em] text-muted-foreground">
            <time dateTime={post.published}>{formatDate(post.published)}</time>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden />
              {post.readingMinutes} min read
            </span>
          </div>
        </Container>
      </section>

      {/* Lead image */}
      <Container className="pt-10">
        <div className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-cloud">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </Container>

      {/* Body */}
      <Section size="sm">
        <Container>
          <article className="mx-auto max-w-[68ch]">
            {post.body.map((block, i) => (
              <Block key={`${block.type}-${i}`} block={block} />
            ))}

            {/* Where to go next */}
            <div className="mt-16 rounded-2xl border border-border bg-cloud p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                Read next
              </p>
              <ul role="list" className="mt-4 flex flex-wrap gap-2.5">
                {post.next.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-border bg-background px-4 text-[14px] font-semibold transition-colors hover:border-action/40 hover:text-action"
                    >
                      {n.label}
                      <ArrowRight className="size-3.5" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Container>
      </Section>

      {/* Other posts */}
      <Section tone="mist" size="sm">
        <Container>
          <p className="eyebrow">More reading</p>
          <ul role="list" className="mt-8 grid gap-5 md:grid-cols-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/blog/${o.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-action">
                    {o.category}
                  </span>
                  <span className="mt-3 font-display text-cardtitle font-bold leading-snug">
                    {o.title}
                  </span>
                  <span className="mt-2.5 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                    {o.excerpt}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-action">
                    Read
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

      <FinalCta
        title="Rather have someone look at it?"
        lead={`Free assessment in all ${site.stats.metros} metros. We will tell you honestly what the problem is.`}
      />
    </>
  )
}
