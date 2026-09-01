import { Eyebrow, DotGrid, AvailabilityBadge, Logo } from '@/components/brand'
import { Button } from '@/components/ui/button'
import { site } from '@/config/site'

/**
 * TEMPORARY design-system smoke test.
 * Replaced by the real homepage in the next step.
 */
export default function Page() {
  return (
    <main id="main" className="flex-1">
      <section className="relative overflow-hidden bg-background">
        <DotGrid />
        <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-14">
          <Logo priority />

          <Eyebrow className="mt-10">Nationwide HVAC · Since {site.founded}</Eyebrow>

          <h1 className="mt-5 max-w-[15ch] text-hero font-bold text-balance">
            Nationwide HVAC service. Local licensed technicians.
          </h1>

          <p className="mt-5 max-w-[52ch] text-lead text-slate">
            Repair, replacement and maintenance for homes and multi-site
            facilities across {site.stats.metros} major U.S. metros. One number,
            one standard, one invoice.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button size="lg">Schedule Service</Button>
            <Button size="lg" variant="outline">
              Call {site.phone}
            </Button>
          </div>

          <div className="mt-8">
            <AvailabilityBadge />
          </div>
        </div>
      </section>

      {/* token check */}
      <section className="bg-cloud">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-14">
          <Eyebrow>Design tokens</Eyebrow>
          <h2 className="mt-4 text-section font-bold">Palette and type scale.</h2>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {[
              ['Ink', 'bg-ink'],
              ['Slate', 'bg-slate'],
              ['Cloud', 'bg-cloud border border-border'],
              ['Navy', 'bg-navy'],
              ['Teal', 'bg-teal'],
              ['Orange', 'bg-orange'],
              ['Action', 'bg-action'],
              ['Success', 'bg-success'],
            ].map(([name, cls]) => (
              <div key={name}>
                <div className={`h-16 rounded-xl ${cls}`} />
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-slate">
                  {name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-4">
            <p className="text-display font-black">Display 64</p>
            <p className="text-hero font-bold">Hero 50</p>
            <p className="text-section font-bold">Section 36</p>
            <p className="text-sub font-bold">Sub 24</p>
            <p className="text-cardtitle font-medium">Card title 20</p>
            <p className="text-lead">Lead 18 — Inter, tighter tracking.</p>
            <p className="text-body">Body 15 — Inter at the brand&apos;s stated size.</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate">
              Mono label 11
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy brand-glow">
        <div className="relative z-10 mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-14">
          <Eyebrow onDark>On dark surfaces</Eyebrow>
          <h2 className="mt-4 text-section font-bold text-white">
            Deep Navy band with the Action Blue glow.
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Logo surface="dark" height={44} />
            <span className="chip-accent">Most popular</span>
          </div>
          <div className="mt-6">
            <AvailabilityBadge onDark />
          </div>
        </div>
      </section>
    </main>
  )
}
