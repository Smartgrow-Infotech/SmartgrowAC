import { cn } from '@/lib/utils'

/**
 * The VGB Technologies wordmark. Type only, set in live text so it stays sharp
 * at any size and needs no image assets.
 *
 * Weight does the work: Satoshi Black for "VGB", Medium for "Technologies".
 * Set the size with a `text-*` class. It scales down with the viewport by
 * default so the mobile header still fits at 320px.
 */
export function Logo({
  surface = 'light',
  className,
}: {
  /** The background it sits on: `dark` means any blue surface. */
  surface?: 'light' | 'dark'
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-block whitespace-nowrap font-display text-[clamp(1.25rem,5.5vw,1.5rem)] leading-none tracking-[-0.035em]',
        surface === 'dark' ? 'text-white' : 'text-navy',
        className,
      )}
    >
      <span
        className={cn(
          'font-black tracking-[-0.02em]',
          surface === 'dark' ? 'text-gold' : 'text-action',
        )}
      >
        VGB
      </span>{' '}
      <span className="font-medium">Technologies</span>
    </span>
  )
}
