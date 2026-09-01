/**
 * Brand typography — see smartgrow/designReference.txt §2.
 *
 *   Satoshi        500 / 700 / 900   headlines, stat figures, pull quotes
 *   Inter          variable          body copy, buttons, nav, forms
 *   JetBrains Mono 400 / 500         eyebrows, labels, stats, metadata
 *
 * The mono face carries the brand's technical character — anything that is
 * DATA (a number, a code, a label, a state) is set in it.
 */
import { Inter, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

/**
 * Satoshi is self-hosted from Fontshare.
 *
 * `adjustFontFallback` is disabled and an explicit metric-adjusted fallback is
 * declared instead, so the swap from Arial to Satoshi doesn't shift the hero
 * H1 — which is the LCP element on most pages.
 *
 * TODO confirm Fontshare's licence permits self-hosting for this project. If
 * it does not, swap to their CDN stylesheet; it is a one-file change.
 */
export const satoshi = localFont({
  variable: '--font-display',
  display: 'swap',
  adjustFontFallback: false,
  fallback: ['Inter', 'system-ui', 'sans-serif'],
  src: [
    { path: './fonts/Satoshi-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Satoshi-700.woff2', weight: '700', style: 'normal' },
    { path: './fonts/Satoshi-900.woff2', weight: '900', style: 'normal' },
  ],
})

export const fontVariables = [
  inter.variable,
  jetbrainsMono.variable,
  satoshi.variable,
].join(' ')
