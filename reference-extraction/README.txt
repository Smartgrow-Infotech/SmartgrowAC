================================================================================
REFERENCE EXTRACTION — https://www.tanousnj.com/
Tanous Heating & Air Conditioning (Hoboken, NJ, USA)
Extracted 2026-09-01 · 60/60 pages captured
================================================================================

WHAT THIS FOLDER IS
--------------------------------------------------------------------------------
A complete capture of the reference site, split into the two deliverables
requested by contentExtractionPrompt.txt and designExtractionPrompt.txt, plus
the raw source material both were built from.

The reference business operates in Hudson County, New Jersey. All of its
geography, pricing, licence numbers, phone number, brand mix and local building
stock are US-specific and WILL need rewriting for our market. That rewrite is
the next step — nothing here has been adapted yet. This is the source-of-truth
capture only.


THE TWO DELIVERABLES
--------------------------------------------------------------------------------
contentReference.txt   13 sections. What the site SAYS, OFFERS, how it is
                       ORGANIZED and how it CONVERTS. No design notes.
                       Includes: full nav + footer map · page-by-page content ·
                       the 5 reusable page templates that generate 47 of the
                       60 pages · every service, price, timeline and spec ·
                       all ~350 FAQ pairs · SEO/schema patterns · tone
                       analysis · and 14 defects found in the source site.

designReference.txt    17 sections. How the site LOOKS, MOVES and is BUILT.
                       No copy. Nearly everything is [VERIFIED] because the
                       site ships one unminified 97KB stylesheet with a
                       complete CSS custom-property token block.
                       Includes: exact palette · full type scale · spacing and
                       breakpoint system · every component spec · every shadow,
                       radius and gradient · the (very small) motion system ·
                       a ready-to-paste :root block · and an honest list of
                       what could not be verified.


RAW SOURCE MATERIAL (./raw/)
--------------------------------------------------------------------------------
raw/sitemap.xml             the site's sitemap — 60 URLs, the basis of coverage
raw/design-system.css       THE stylesheet, 96,980 bytes / 1,108 lines,
                            unminified with comments. The design source of truth.
raw/app.js                  THE script, 2,719 bytes / 74 lines. All of it.
raw/seo-metadata.txt        title / meta description / canonical / H1 /
                            schema.org types for all 60 pages
raw/pages/*.html            all 60 pages, raw unmodified HTML (~4.8 MB)
raw/text/*.txt              those 60 pages stripped to readable text, with
                            {LINK:...} and [IMG alt: ...] markers preserved
raw/body/*.txt              the same, with the global header and footer removed
raw/lean/*.txt              the same again, with repeated blocks (the service
                            form, the brand logo row, the 10-city link row, the
                            rating block) collapsed to placeholders
raw/bundles/*.txt           the lean files concatenated into 7 reading bundles:
                              A-core · B-services · C-services2 · D-systems
                              E-commercial · F-areas · G-blog

Filenames use "__" where the URL had "/". So
  services__water-heaters__tankless-water-heaters.html
  = https://www.tanousnj.com/services/water-heaters/tankless-water-heaters/


HEADLINE FINDINGS
--------------------------------------------------------------------------------
STACK      WordPress + Bricks Builder + Gravity Forms + Yoast. One hand-written
           CSS file, one 74-line JS file, Google Fonts (Fraunces + Inter), GA4.
           ZERO animation, scroll, slider or 3D libraries. Fully server-rendered.
           The whole design is reproducible with vanilla CSS and ~75 lines of JS.

STRUCTURE  60 pages from 5 repeating templates, in a 4-level hierarchy:
           service × sub-service × system × city. Near-complete internal
           link mesh, no orphan pages.

CONVERSION Phone-first. The number is in the header, the mobile icon button,
           the sticky mobile bar, every hero, every section close and the
           footer. Secondary: a 6-field Gravity Form. No booking tool, no chat.

POSITION   Anti-marketing honesty as the differentiator — they explicitly
           REFUSE a response-time guarantee and use that refusal as the trust
           signal. Paired with unusually open price transparency (install and
           equipment bands published on nearly every page) while repair pricing
           is deliberately withheld.

CAUTION    The source site has 14 documented defects (broken footer link,
           truncated title tag, all six homepage carousel CTAs pointing to the
           wrong URL, contradictory pricing in three places, copy-paste errors,
           and testimonials the site itself flags as "ready to be verified
           before final launch"). See contentReference.txt §13 before reusing
           anything. Do not inherit these.

GAPS TO    No team page, no names, no faces — despite "family-owned" being the
BEAT       core claim. No case studies, no social presence, no FAQPage schema
           despite ~350 FAQ pairs, no visible focus states, no
           prefers-reduced-motion, no lazy loading. All are easy wins for us.
================================================================================
