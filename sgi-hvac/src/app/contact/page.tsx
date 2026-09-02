import type { Metadata } from 'next'
import { Building2, Mail, MapPin, Phone } from 'lucide-react'
import type { ContactPage as ContactPageSchema, WithContext } from 'schema-dts'

import { site } from '@/config/site'
import { PageHero } from '@/components/sections/page-hero'
import { Container, Section, SectionHeader } from '@/components/sections/section'
import { CoverageGrid } from '@/components/sections/coverage'
import { FinalCta } from '@/components/sections/faq'
import { ServiceForm } from '@/components/forms/lead-form'
import { JsonLd } from '@/components/seo/json-ld'
import { AvailabilityBadge } from '@/components/brand'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Reach ${site.name} HVAC. Dispatch answered 24/7 on ${site.phone}. Web forms and email get a callback the same business day.`,
  alternates: { canonical: '/contact' },
}

const channels = [
  {
    icon: Phone,
    label: 'Call us — answered 24/7',
    value: site.phone,
    href: site.phoneHref,
    note: 'A person picks up, day or night. Fastest route for anything urgent.',
  },
  {
    icon: Mail,
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    note: 'Callback the same business day.',
  },
  {
    icon: Building2,
    label: 'National accounts',
    value: site.accountsEmail,
    href: `mailto:${site.accountsEmail}`,
    note: 'Multi-site portfolios, property management, facilities.',
  },
]

export default function ContactPage() {
  const schema: WithContext<ContactPageSchema> = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${site.name}`,
    url: `${site.url}/contact`,
    about: { '@id': `${site.url}/#organization` },
  }

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        lead="Dispatch answered 24/7. Web forms and email get a callback the same business day — from a dispatcher, not an answering service reading a script."
        crumbs={[{ label: 'Contact' }]}
        variant="compact"
        tone="cloud"
        hideActions
      >
        <div className="mt-7">
          <AvailabilityBadge />
        </div>
      </PageHero>

      {/* Channels + form, side by side */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <SectionHeader
                eyebrow="How to reach us"
                title="Three ways in."
                className="max-w-none"
              />

              <ul role="list" className="mt-8 space-y-4">
                {channels.map(({ icon: Icon, label, value, href, note }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group flex gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-action/30 hover:shadow-card"
                    >
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-mist text-action">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                          {label}
                        </span>
                        <span className="mt-1 block truncate font-display text-[17px] font-bold text-action">
                          {value}
                        </span>
                        <span className="mt-1 block text-sm text-muted-foreground">
                          {note}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* HQ — with the caveat that matters */}
              <div className="mt-4 flex gap-4 rounded-xl border border-border bg-cloud p-5">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-background text-slate">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    Headquarters
                  </p>
                  <address className="mt-1 text-[15px] not-italic leading-relaxed">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region} {site.address.postalCode}
                  </address>
                  <p className="mt-2 text-sm text-muted-foreground">
                    This is the corporate office. Service is dispatched from local
                    metro crews, not from here — so please do not drive out with a
                    broken condenser.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-border bg-background p-6 shadow-card sm:p-8">
              <p className="eyebrow">Request service</p>
              <h2 className="mt-4 text-cardtitle font-bold">
                Tell us what is going on.
              </h2>
              <p className="mt-2 max-w-[52ch] text-[15px] text-muted-foreground">
                The more you can tell us up front, the better we can match the
                right technician and the right parts to the visit.
              </p>
              <ServiceForm className="mt-7" />
            </div>
          </div>
        </Container>
      </Section>

      <CoverageGrid tone="mist" />

      <FinalCta
        title="Or just call. Someone picks up."
        lead={`${site.phone} — dispatch answered 24/7, 365 days a year.`}
      />
    </>
  )
}
