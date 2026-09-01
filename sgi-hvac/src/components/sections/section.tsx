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

type Tone = 'default' | 'cloud' | 'navy'

const toneClass: Record<Tone, string> = {
  default: 'bg-background',
  cloud: 'bg-cloud',
  navy: 'bg-navy text-white',
}

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
