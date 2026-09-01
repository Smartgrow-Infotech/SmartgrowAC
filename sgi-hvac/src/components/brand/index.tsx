import { cn } from '@/lib/utils'

export { Logo, LogoMark } from './logo'

/**
 * The circuit eyebrow — orange node, fading trace, mono label.
 *
 * The brand's signature section-opener. Structural equivalent of the reference
 * site's red-underlined eyebrow, which appeared on eleven different selectors;
 * this is the same job done in SmartgrowInfotech's own visual language.
 */
export function Eyebrow({
  children,
  onDark = false,
  className,
  as: Tag = 'p',
}: {
  children: React.ReactNode
  onDark?: boolean
  className?: string
  as?: 'p' | 'span' | 'div' | 'h2'
}) {
  return (
    <Tag className={cn('eyebrow', onDark && 'eyebrow-on-dark', className)}>
      {children}
    </Tag>
  )
}

/**
 * Blue-tinted dot grid with a radial fade. Sits behind hero content.
 * Purely decorative, so it is hidden from assistive tech.
 */
export function DotGrid({
  onDark = false,
  className,
}: {
  onDark?: boolean
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={cn('dot-grid', onDark && 'dot-grid-on-dark', className)}
    />
  )
}

/**
 * Pulsing green dot + mono label.
 *
 * The brand page pairs this device with scarcity messaging. We use it for
 * availability instead — the content strategy deliberately rejects scarcity
 * mechanics (no countdowns, no "3 slots left"). Same component, honest claim.
 */
export function AvailabilityBadge({
  label,
  onDark = false,
  className,
}: {
  label?: string
  onDark?: boolean
  className?: string
}) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em]',
        onDark ? 'text-white/72' : 'text-muted-foreground',
        className,
      )}
    >
      <span className="availability-dot" aria-hidden />
      {label ?? 'Dispatch answered 24/7'}
    </p>
  )
}
