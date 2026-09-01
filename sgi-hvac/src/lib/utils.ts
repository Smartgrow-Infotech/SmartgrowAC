import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * tailwind-merge has no knowledge of our custom `--text-*` theme keys, so out
 * of the box it classifies `text-section` as a text COLOUR. That makes
 * `cn('text-section', 'text-white')` resolve to just `text-white` — the size is
 * silently dropped. Every heading on a dark section rendered at body size
 * because of this.
 *
 * Registering the custom scale under `font-size` fixes it and prevents the
 * whole class of bug. Keep this list in sync with the `--text-*` tokens in
 * app/globals.css.
 */
const FONT_SIZES = [
  'hero',
  'display',
  'section',
  'sub',
  'cardtitle',
  'lead',
  'body',
  'stat',
] as const

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: [...FONT_SIZES] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
