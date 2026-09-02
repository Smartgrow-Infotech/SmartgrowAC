import { cn } from '@/lib/utils'

/**
 * Shared layout primitives.
 *
 * Container width (1200px) and the fluid side/vertical padding come from the
 * measured reference system — see smartgrow/designReference.txt §3.
 */

export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-14', className)}>
      {children}
    </div>
  )
}

/**
 * Section background tones.
 *
 * The page alternates through these so it never reads as one flat white
 * document. Every light tint is a brand hue dropped onto white, so nothing
 * here introduces a colour that isn't already in the palette. See the rhythm
 * applied in app/page.tsx.
 */
export type Tone =
  | 'default' // white
  | 'cloud' // neutral grey
  | 'mist' // soft Action Blue
  | 'sky' // stronger Action Blue
  | 'frost' // Teal tint
  | 'sand' // Orange tint — used sparingly, for warmth
  | 'navy' // dark blue
  | 'abyss' // deepest blue
  | 'gradient' // Action Blue -> Navy, for the closing CTA

const toneClass: Record<Tone, string> = {
  default: 'bg-background',
  cloud: 'bg-cloud',
  mist: 'bg-mist',
  sky: 'bg-sky',
  frost: 'bg-frost',
  sand: 'bg-sand',
  navy: 'bg-navy text-white',
  abyss: 'bg-abyss text-white',
  gradient:
    'bg-[linear-gradient(135deg,#0067f3_0%,#0a3fa0_46%,#0a1b3a_100%)] text-white',
}

/** True when a tone needs light text and on-dark component variants. */
export const isDarkTone = (t: Tone) =>
  t === 'navy' || t === 'abyss' || t === 'gradient'

export function Section({
  children,
  tone = 'default',
  size = 'default',
  glow = false,
  className,
  id,
}: {
  children: React.ReactNode
  tone?: Tone
  /** `lg` is used for the hero-adjacent, pricing and carousel bands. */
  size?: 'default' | 'lg' | 'sm'
  /** Action Blue radial glow — only meaningful on the navy tone. */
  glow?: boolean
  className?: string
  id?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative',
        toneClass[tone],
        size === 'lg' && 'py-[clamp(4rem,9vw,7.5rem)]',
        size === 'default' && 'py-[clamp(3.5rem,8vw,6rem)]',
        size === 'sm' && 'py-[clamp(2.5rem,6vw,4.5rem)]',
        glow && 'brand-glow overflow-hidden',
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </section>
  )
}

/**
 * Standard section header: circuit eyebrow, Satoshi heading, optional lead.
 * Constrained to ~720px because that is where the reference's measured
 * line-length worked, and our type scale is tighter still.
 */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  onDark = false,
  align = 'left',
  className,
}: {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  lead?: React.ReactNode
  onDark?: boolean
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-[46ch]',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'eyebrow',
            onDark && 'eyebrow-on-dark',
            align === 'center' && 'justify-center',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'mt-4 text-section font-bold text-balance',
          onDark && 'text-white',
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            'mt-3.5 text-lead',
            onDark ? 'text-white/72' : 'text-muted-foreground',
          )}
        >
          {lead}
        </p>
      )}
    </div>
  )
}
