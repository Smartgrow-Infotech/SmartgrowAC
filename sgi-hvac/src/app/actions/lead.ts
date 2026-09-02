'use server'

import { Resend } from 'resend'

import { site } from '@/config/site'
import { metroBySlug } from '@/content/metros'
import {
  MAX_FILL_MS,
  MIN_FILL_MS,
  leadSchema,
  type Lead,
  type LeadResult,
} from '@/lib/lead-schema'

const CALL_INSTEAD = `Something went wrong sending your request. Please call us on ${site.phone} — dispatch is answered 24/7.`

const escape = (v: string) =>
  v
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

function rows(pairs: [string, string | undefined][]) {
  return pairs
    .filter(([, v]) => v && v.trim().length > 0)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#50576b;font:600 13px system-ui;vertical-align:top;white-space:nowrap">${escape(
          k,
        )}</td><td style="padding:6px 0;color:#212121;font:400 15px system-ui">${escape(
          (v ?? '').replace(/\n/g, '<br>'),
        )}</td></tr>`,
    )
    .join('')
}

function render(lead: Lead) {
  const isService = lead.kind === 'service'

  const body = isService
    ? rows([
        ['Name', lead.name],
        ['Phone', lead.phone],
        ['Email', lead.email],
        ['Metro', metroBySlug(lead.metro)?.city ?? 'Outside our metros'],
        ['Need', lead.serviceType],
        ['Property', lead.propertyType],
        ['Details', lead.message || undefined],
      ])
    : rows([
        ['Name', lead.name],
        ['Company', lead.company],
        ['Phone', lead.phone],
        ['Email', lead.email],
        ['Locations', lead.siteCount || undefined],
        ['Details', lead.message || undefined],
      ])

  const heading = isService
    ? `New service request — ${lead.serviceType}`
    : `National accounts enquiry — ${lead.company}`

  return {
    subject: heading,
    html: `<div style="max-width:620px;margin:0 auto;padding:24px;font-family:system-ui,sans-serif">
  <p style="margin:0 0 4px;font:600 11px system-ui;letter-spacing:.12em;text-transform:uppercase;color:#0067f3">${
    isService ? 'Service request' : 'National accounts'
  }</p>
  <h1 style="margin:0 0 20px;font:700 22px system-ui;color:#0a1b3a">${escape(heading)}</h1>
  <table style="border-collapse:collapse;width:100%">${body}</table>
  <p style="margin:24px 0 0;padding-top:16px;border-top:1px solid #e5e7eb;font:400 13px system-ui;color:#50576b">
    Submitted via ${escape(site.url)} · ${new Date().toUTCString()}
  </p>
</div>`,
  }
}

export async function submitLead(raw: unknown): Promise<LeadResult> {
  const parsed = leadSchema.safeParse(raw)

  if (!parsed.success) {
    const flat = parsed.error.flatten()
    return {
      ok: false,
      error: 'Please check the highlighted fields.',
      fieldErrors: flat.fieldErrors as Record<string, string[]>,
    }
  }

  const lead = parsed.data

  // Honeypot and timing. Both fail silently as success — telling a bot why it
  // was rejected only helps it get past next time.
  const elapsed = Date.now() - lead.startedAt
  if (lead.website || elapsed < MIN_FILL_MS || elapsed > MAX_FILL_MS) {
    return { ok: true }
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.LEAD_FROM_EMAIL

  if (!apiKey || !from) {
    // Never return { ok: true } here. A form that thanks the customer while
    // dropping the lead is worse than one that tells them to call.
    console.error(
      '[lead] RESEND_API_KEY or LEAD_FROM_EMAIL is not set — the lead was NOT delivered.',
      { kind: lead.kind, email: lead.email },
    )
    return { ok: false, error: CALL_INSTEAD }
  }

  const { subject, html } = render(lead)

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to: lead.kind === 'accounts' ? site.accountsEmail : site.email,
      replyTo: lead.email,
      subject,
      html,
    })

    if (error) {
      console.error('[lead] Resend rejected the message:', error)
      return { ok: false, error: CALL_INSTEAD }
    }

    return { ok: true }
  } catch (err) {
    console.error('[lead] Unexpected failure sending lead:', err)
    return { ok: false, error: CALL_INSTEAD }
  }
}
