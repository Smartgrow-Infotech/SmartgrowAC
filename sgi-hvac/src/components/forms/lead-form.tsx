'use client'

import * as React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Loader2, Phone } from 'lucide-react'

import { site } from '@/config/site'
import { metros } from '@/content/metros'
import { cn } from '@/lib/utils'
import { submitLead } from '@/app/actions/lead'
import {
  accountsFormSchema,
  propertyTypes,
  serviceFormSchema,
  serviceTypes,
  type AccountsForm as AccountsValues,
  type ServiceForm as ServiceValues,
} from '@/lib/lead-schema'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const control =
  'h-11 rounded-lg border-border bg-background text-[15px] md:text-[15px]'

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
  className,
}: {
  label: string
  htmlFor: string
  error?: string
  required?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <Label htmlFor={htmlFor} className="text-[13px] font-semibold">
        {label}
        {required && (
          <span className="text-destructive" aria-hidden>
            *
          </span>
        )}
      </Label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="text-[13px] text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

function Success({ kind }: { kind: 'service' | 'accounts' }) {
  return (
    <div className="rounded-xl border border-success/25 bg-success/6 p-7 text-center">
      <CheckCircle2 className="mx-auto size-9 text-success" aria-hidden />
      <p className="mt-4 font-display text-cardtitle font-bold">Request received.</p>
      <p className="mx-auto mt-2 max-w-[46ch] text-[15px] text-muted-foreground">
        {kind === 'service'
          ? 'A dispatcher will call you back the same business day. If this is an emergency, calling is faster — someone picks up at any hour.'
          : 'Someone from the national accounts team will be in touch the same business day to set up a portfolio review.'}
      </p>
      <a
        href={site.phoneHref}
        className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-action px-5 text-[15px] font-semibold text-white transition-colors hover:bg-action-hover"
      >
        <Phone className="size-4" aria-hidden />
        {site.phone}
      </a>
    </div>
  )
}

/** Shared anti-spam + consent tail. */
function Consent({
  id,
  error,
  register,
}: {
  id: string
  error?: string
  register: React.InputHTMLAttributes<HTMLInputElement>
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-start gap-2.5">
        <input
          id={id}
          type="checkbox"
          className="mt-0.5 size-4 shrink-0 accent-action"
          aria-describedby={error ? `${id}-error` : undefined}
          {...register}
        />
        <Label htmlFor={id} className="text-[13px] leading-relaxed font-normal">
          I agree that {site.name} may contact me by phone, text or email about
          this request. Message rates may apply. We do not sell your details.
        </Label>
      </div>
      {error && (
        <p id={`${id}-error`} className="text-[13px] text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

function SubmitButton({
  pending,
  label,
}: {
  pending: boolean
  label: string
}) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-action px-6 text-[15px] font-semibold text-white transition-colors hover:bg-action-hover disabled:opacity-70 sm:w-auto"
    >
      {pending && <Loader2 className="size-4 animate-spin" aria-hidden />}
      {pending ? 'Sending…' : label}
    </button>
  )
}

/* ------------------------------------------------------------------ */
/* Service request                                                     */
/* ------------------------------------------------------------------ */

export function ServiceForm({
  defaultMetro,
  defaultServiceType,
  className,
}: {
  defaultMetro?: string
  defaultServiceType?: (typeof serviceTypes)[number]
  className?: string
}) {
  const [done, setDone] = React.useState(false)
  const [formError, setFormError] = React.useState<string | null>(null)
  // Set on mount, not at render: a prerendered timestamp would be hours stale.
  const startedAt = React.useRef(0)
  React.useEffect(() => {
    startedAt.current = Date.now()
  }, [])

  const {
    register,
    handleSubmit,
    control: rhfControl,
    formState: { errors, isSubmitting },
  } = useForm<ServiceValues>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: {
      kind: 'service',
      website: '',
      metro: defaultMetro ?? '',
      serviceType: defaultServiceType,
      propertyType: 'Home',
    },
  })

  if (done) return <Success kind="service" />

  return (
    <form
      noValidate
      className={cn('flex flex-col gap-5', className)}
      // eslint-disable-next-line react-hooks/refs -- startedAt is read only on submit (event handler), not during render
      onSubmit={handleSubmit(async (values) => {
        setFormError(null)
        const res = await submitLead({ ...values, startedAt: startedAt.current })
        if (res.ok) setDone(true)
        else setFormError(res.error)
      })}
    >
      {/* Honeypot — visually and programmatically hidden from real users. */}
      <div aria-hidden className="hidden">
        <label htmlFor="sf-website">Company website</label>
        <input id="sf-website" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="sf-name" required error={errors.name?.message}>
          <Input
            id="sf-name"
            autoComplete="name"
            className={control}
            aria-invalid={!!errors.name}
            {...register('name')}
          />
        </Field>

        <Field label="Phone" htmlFor="sf-phone" required error={errors.phone?.message}>
          <Input
            id="sf-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={control}
            aria-invalid={!!errors.phone}
            {...register('phone')}
          />
        </Field>

        <Field
          label="Email"
          htmlFor="sf-email"
          required
          error={errors.email?.message}
          className="sm:col-span-2"
        >
          <Input
            id="sf-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className={control}
            aria-invalid={!!errors.email}
            {...register('email')}
          />
        </Field>

        <Field label="Location" htmlFor="sf-metro" required error={errors.metro?.message}>
          <Controller
            control={rhfControl}
            name="metro"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="sf-metro" className={cn(control, 'w-full')}>
                  <SelectValue placeholder="Choose your metro" />
                </SelectTrigger>
                <SelectContent>
                  {metros.map((m) => (
                    <SelectItem key={m.slug} value={m.slug}>
                      {m.city}, {m.state}
                    </SelectItem>
                  ))}
                  <SelectItem value="other">Somewhere else</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </Field>

        <Field
          label="What do you need?"
          htmlFor="sf-service"
          required
          error={errors.serviceType?.message}
        >
          <Controller
            control={rhfControl}
            name="serviceType"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="sf-service" className={cn(control, 'w-full')}>
                  <SelectValue placeholder="Choose one" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>

        <Field
          label="Property type"
          htmlFor="sf-property"
          error={errors.propertyType?.message}
          className="sm:col-span-2"
        >
          <Controller
            control={rhfControl}
            name="propertyType"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="sf-property" className={cn(control, 'w-full')}>
                  <SelectValue placeholder="Choose one" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>

        <Field
          label="Anything else we should know?"
          htmlFor="sf-message"
          error={errors.message?.message}
          className="sm:col-span-2"
        >
          <Textarea
            id="sf-message"
            rows={4}
            placeholder="Age of the system, what it is doing, when it started — anything helps us send the right technician."
            className="rounded-lg border-border bg-background text-[15px] md:text-[15px]"
            {...register('message')}
          />
        </Field>
      </div>

      <Consent
        id="sf-consent"
        error={errors.consent?.message}
        register={register('consent')}
      />

      {formError && (
        <p role="alert" className="rounded-lg bg-destructive/8 px-4 py-3 text-[14px] text-destructive">
          {formError}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton pending={isSubmitting} label="Request service" />
        <p className="text-[13px] text-muted-foreground">
          Or call{' '}
          <a href={site.phoneHref} className="font-semibold text-action underline-offset-4 hover:underline">
            {site.phone}
          </a>{' '}
          — answered 24/7.
        </p>
      </div>
    </form>
  )
}

/* ------------------------------------------------------------------ */
/* National accounts                                                   */
/* ------------------------------------------------------------------ */

export function AccountsForm({ className }: { className?: string }) {
  const [done, setDone] = React.useState(false)
  const [formError, setFormError] = React.useState<string | null>(null)
  const startedAt = React.useRef(0)
  React.useEffect(() => {
    startedAt.current = Date.now()
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AccountsValues>({
    resolver: zodResolver(accountsFormSchema),
    defaultValues: { kind: 'accounts', website: '' },
  })

  if (done) return <Success kind="accounts" />

  return (
    <form
      noValidate
      className={cn('flex flex-col gap-5', className)}
      // eslint-disable-next-line react-hooks/refs -- startedAt is read only on submit (event handler), not during render
      onSubmit={handleSubmit(async (values) => {
        setFormError(null)
        const res = await submitLead({ ...values, startedAt: startedAt.current })
        if (res.ok) setDone(true)
        else setFormError(res.error)
      })}
    >
      <div aria-hidden className="hidden">
        <label htmlFor="af-website">Company website</label>
        <input id="af-website" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="af-name" required error={errors.name?.message}>
          <Input id="af-name" autoComplete="name" className={control} {...register('name')} />
        </Field>

        <Field label="Company" htmlFor="af-company" required error={errors.company?.message}>
          <Input
            id="af-company"
            autoComplete="organization"
            className={control}
            {...register('company')}
          />
        </Field>

        <Field label="Email" htmlFor="af-email" required error={errors.email?.message}>
          <Input
            id="af-email"
            type="email"
            autoComplete="email"
            className={control}
            {...register('email')}
          />
        </Field>

        <Field label="Phone" htmlFor="af-phone" required error={errors.phone?.message}>
          <Input
            id="af-phone"
            type="tel"
            autoComplete="tel"
            className={control}
            {...register('phone')}
          />
        </Field>

        <Field
          label="Roughly how many locations?"
          htmlFor="af-sites"
          error={errors.siteCount?.message}
          className="sm:col-span-2"
        >
          <Input
            id="af-sites"
            placeholder="e.g. 24 sites across 6 states"
            className={control}
            {...register('siteCount')}
          />
        </Field>

        <Field
          label="What are you trying to solve?"
          htmlFor="af-message"
          error={errors.message?.message}
          className="sm:col-span-2"
        >
          <Textarea
            id="af-message"
            rows={4}
            placeholder="Current vendor setup, the sites that keep causing problems, whether you need capex forecasting — whatever is actually driving this."
            className="rounded-lg border-border bg-background text-[15px] md:text-[15px]"
            {...register('message')}
          />
        </Field>
      </div>

      <Consent
        id="af-consent"
        error={errors.consent?.message}
        register={register('consent')}
      />

      {formError && (
        <p role="alert" className="rounded-lg bg-destructive/8 px-4 py-3 text-[14px] text-destructive">
          {formError}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton pending={isSubmitting} label="Request a portfolio review" />
        <p className="text-[13px] text-muted-foreground">
          Or email{' '}
          <a
            href={`mailto:${site.accountsEmail}`}
            className="font-semibold text-action underline-offset-4 hover:underline"
          >
            {site.accountsEmail}
          </a>
        </p>
      </div>
    </form>
  )
}
