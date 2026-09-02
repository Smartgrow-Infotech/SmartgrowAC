import { z } from 'zod'

import { metros } from '@/content/metros'

const metroSlugValues = metros.map((m) => m.slug)

export const serviceTypes = [
  'No cooling',
  'No heat',
  'Repair — something is wrong',
  'Maintenance / tune-up',
  'Replacement or new install estimate',
  'Indoor air quality',
  'Water heater',
  'Commercial / multi-site',
  'Something else',
] as const

export const propertyTypes = ['Home', 'Commercial building', 'Multifamily / HOA'] as const

/**
 * Shared shape for both lead forms.
 *
 * `website` is a honeypot — a real person never sees it, so any value means a
 * bot. `startedAt` is the epoch ms the form mounted; a submission faster than
 * MIN_FILL_MS was not typed by a human. Both are checked server-side. No
 * visible CAPTCHA: it costs conversions on exactly the emergency calls that
 * matter most.
 */
const antiSpam = {
  website: z.string().max(0, 'Rejected.').optional().or(z.literal('')),
}

/** Injected at submit time, not a form field — see the *FormSchema exports. */
const timing = { startedAt: z.number().int().positive() }

export const MIN_FILL_MS = 2_500
export const MAX_FILL_MS = 6 * 60 * 60 * 1000

export const serviceFormSchema = z.object({
  ...antiSpam,
  kind: z.literal('service'),
  name: z.string().trim().min(2, 'Please enter your name.').max(120),
  email: z.email('Please enter a valid email address.').max(200),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a phone number we can reach you on.')
    .max(30)
    // Deliberately permissive: extensions, +1, dots and parens are all fine.
    // Rejecting an unusual-but-valid number loses a real customer.
    .regex(/^[\d\s()+.\-x]+$/i, 'Please use digits and standard phone characters.'),
  metro: z
    .string()
    .refine((v) => metroSlugValues.includes(v) || v === 'other', 'Please choose a location.'),
  serviceType: z.enum(serviceTypes),
  propertyType: z.enum(propertyTypes).optional(),
  message: z.string().trim().max(2000).optional().or(z.literal('')),
  consent: z.literal(true, 'Please confirm we can contact you about this request.'),
})

export const accountsFormSchema = z.object({
  ...antiSpam,
  kind: z.literal('accounts'),
  name: z.string().trim().min(2, 'Please enter your name.').max(120),
  company: z.string().trim().min(2, 'Please enter your company name.').max(160),
  email: z.email('Please enter a valid email address.').max(200),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a phone number we can reach you on.')
    .max(30)
    .regex(/^[\d\s()+.\-x]+$/i, 'Please use digits and standard phone characters.'),
  siteCount: z.string().trim().max(40).optional().or(z.literal('')),
  message: z.string().trim().max(2000).optional().or(z.literal('')),
  consent: z.literal(true, 'Please confirm we can contact you about this request.'),
})

/**
 * Server-side shapes. Identical to the form shapes plus the timing field the
 * client injects on submit, which is why the form schemas stay free of it —
 * react-hook-form would otherwise demand it as a registered input.
 */
export const serviceLeadSchema = serviceFormSchema.extend(timing)
export const accountsLeadSchema = accountsFormSchema.extend(timing)

export const leadSchema = z.discriminatedUnion('kind', [
  serviceLeadSchema,
  accountsLeadSchema,
])

export type ServiceForm = z.infer<typeof serviceFormSchema>
export type AccountsForm = z.infer<typeof accountsFormSchema>
export type ServiceLead = z.infer<typeof serviceLeadSchema>
export type AccountsLead = z.infer<typeof accountsLeadSchema>
export type Lead = z.infer<typeof leadSchema>

export type LeadResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> }
