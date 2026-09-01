import type { Faq } from '@/components/sections/faq'
import { site } from '@/config/site'

/**
 * FAQ copy. Answers lead with the direct answer, then the reasoning — that is
 * what makes them quotable by answer engines and useful to a reader skimming.
 *
 * Source copy: smartgrow/contentReference.txt §8.
 */

export const homeFaqs: Faq[] = [
  {
    q: 'Are you a national franchise or a referral network?',
    a: 'Neither. We employ our technicians and run our own dispatch in every metro we serve. When you call one number you reach one company — not a lead broker routing you to whoever bid lowest that morning.',
  },
  {
    q: 'Do you really answer the phone 24/7?',
    a: `Yes. Calls to ${site.phone} reach a person around the clock, every day. What we won't do is promise an arrival window before we know the situation, your location and what's already on the board. You'll get a real answer on the call.`,
  },
  {
    q: 'Which metros do you cover?',
    a: 'Dallas–Fort Worth, Houston, Phoenix, Los Angeles, Denver, Chicago, Philadelphia, New York, Atlanta and Miami — plus the surrounding service radius. If you are just outside one, call and we will tell you honestly whether we can serve you well.',
  },
  {
    q: 'Can you handle multi-site facilities across several states?',
    a: 'That is the core of our commercial business. One master agreement, per-location service plans, one account manager, consolidated invoicing and unified reporting across every site.',
  },
  {
    q: 'What brands do you install?',
    a: 'Carrier, Trane, Lennox, Rheem, Daikin, Mitsubishi Electric, Navien and Honeywell as primary lines. We service every major brand regardless of who installed it.',
  },
  {
    q: 'Do you offer financing?',
    a: 'Yes — residential financing on qualifying replacements and efficiency upgrades, with soft pre-qualification that does not affect your credit score. Commercial customers typically use their own capital programs.',
  },
]

export const servicesFaqs: Faq[] = [
  {
    q: 'Why will you not quote a repair price over the phone?',
    a: 'Because we would be guessing, and guesses get revised upward once the technician is on site. Two systems with identical symptoms routinely need different repairs. What we will tell you on the phone is the diagnostic fee, whether it credits toward the repair, and roughly what a repair of that type typically runs. Then you get a real number in writing before any work.',
  },
  {
    q: 'Will you push me toward replacement?',
    a: 'No. If a repair is the right call we will say so, including on older equipment. You get both numbers and the reasoning. The pattern to watch for from any contractor is a modest repair quoted alongside a replacement with no middle option — that is a sales script, not a diagnosis.',
  },
  {
    q: 'Do you actually employ your technicians, or subcontract?',
    a: 'We employ them. Every technician on a job is on our payroll, holds the licence their state requires, and works to the same documented process. We use licensed trade partners for adjacent scopes — an electrical service upgrade, roofing around a curb — and we tell you when we do.',
  },
  {
    q: 'What if my location is outside your ten metros?',
    a: 'We will tell you. If you are just outside a service radius we can often still help. If you are genuinely far outside it, we will say so rather than accepting the job and subcontracting it. For multi-site operators we map which of your locations we can serve well before you sign anything.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes, in every state we operate in. We carry general liability and workers’ compensation, and a certificate of insurance is available on request with additional insureds added as your management company requires.',
  },
  {
    q: 'Do you service equipment you did not install?',
    a: 'Yes. We service every major brand regardless of origin. A large share of our maintenance contracts start on equipment another contractor installed years earlier.',
  },
]
