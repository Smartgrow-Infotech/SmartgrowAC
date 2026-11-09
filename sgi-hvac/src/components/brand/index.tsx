import { cn } from '@/lib/utils'

export { Logo } from './logo'

/** The section-opening eyebrow: a gold bar and a mono label. */
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

/** Dot grid with a radial fade behind hero content. Decorative, so hidden from assistive tech. */
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

/** Pulsing dot and mono label, used for availability rather than scarcity. */
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
