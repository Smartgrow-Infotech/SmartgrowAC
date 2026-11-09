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
 * document. `on-dark` re-scopes the colour tokens for the blue surfaces (see
 * globals.css), so what sits inside them adapts on its own.
 */
export type Tone =
  | 'default' // white
  | 'cloud' // faint blue
  | 'mist' // soft blue
  | 'sky' // stronger blue
  | 'frost' // cool blue
  | 'sand' // gold tint
  | 'gold' // solid gold, deep blue text
  | 'navy' // deep blue
  | 'electric' // electric blue

const toneClass: Record<Tone, string> = {
  default: 'bg-background',
  cloud: 'bg-cloud',
  mist: 'bg-mist',
  sky: 'bg-sky',
  frost: 'bg-frost',
  sand: 'bg-sand',
  gold: 'bg-gold text-navy',
  navy: 'on-dark bg-navy text-white',
  electric: 'on-dark bg-action text-white',
}

/** True when a tone needs light text and on-dark component variants. */
export const isDarkTone = (t: Tone) => t === 'navy' || t === 'electric'

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
  /** Electric blue radial glow — only meaningful on the navy tone. */
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
 * Standard section header: eyebrow, Satoshi heading, optional lead.
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
