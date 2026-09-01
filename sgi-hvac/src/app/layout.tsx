import type { Metadata } from 'next'
import { fontVariables } from './fonts'
import { site } from '@/config/site'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { StickyCtaBar } from '@/components/layout/sticky-cta-bar'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Nationwide HVAC Service & Repair`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_US',
    url: site.url,
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      // Next 16 no longer overrides scroll-behavior during route transitions.
      // This opt-in keeps in-page anchors smooth while navigation stays instant.
      data-scroll-behavior="smooth"
      className={`${fontVariables} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCtaBar />
      </body>
    </html>
  )
}
