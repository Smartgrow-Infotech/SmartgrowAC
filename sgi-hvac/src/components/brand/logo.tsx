import Image from 'next/image'
import { cn } from '@/lib/utils'
import { site } from '@/config/site'

/** Intrinsic size of the trimmed horizontal lockup (see scripts/build-logos.mjs). */
const LOCKUP = { width: 541, height: 150 } as const
const LOCKUP_RATIO = LOCKUP.width / LOCKUP.height

type LogoProps = {
  /**
   * Which surface the logo sits on.
   *  light → navy wordmark (the brand's primary lockup)
   *  dark  → white wordmark
   */
  surface?: 'light' | 'dark'
  /** Rendered height in px. Brand minimum for the horizontal lockup is 32px. */
  height?: number
  className?: string
  priority?: boolean
}

export function Logo({
  surface = 'light',
  height = 36,
  className,
  priority = false,
}: LogoProps) {
  const src = surface === 'dark' ? '/brand/logo-dark.png' : '/brand/logo-light.png'

  return (
    <Image
      src={src}
      alt={site.name}
      width={Math.round(height * LOCKUP_RATIO)}
      height={height}
      priority={priority}
      className={cn('w-auto', className)}
      style={{ height }}
    />
  )
}

/** The star mark alone — compact placements, OG images, app icons. */
export function LogoMark({
  size = 32,
  className,
}: {
  size?: number
  className?: string
}) {
  return (
    <Image
      src="/brand/mark.png"
      alt=""
      aria-hidden
      width={size}
      height={size}
      className={cn('shrink-0', className)}
    />
  )
}
