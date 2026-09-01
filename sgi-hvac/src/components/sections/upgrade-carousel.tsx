'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { images } from '@/content/images'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

/**
 * Comfort upgrades carousel.
 *
 * ⚠️ Every card links to its MATCHING system or service page. On the reference
 * site all six of these pointed at /contact/ even though the destination pages
 * existed — a straight loss of internal linking and user intent. Do not
 * reintroduce that.
 */
const upgrades = [
  {
    title: 'Ductless Mini-Splits',
    body: 'Heating and cooling without ductwork. The answer for older LA and Philadelphia homes, additions, and any room the existing system never reached.',
    href: '/hvac-systems/ductless-mini-splits',
    image: images.upgradeDuctless,
  },
  {
    title: 'Heat Pumps',
    body: 'One system for both seasons. Cold-climate models hold full output to 5°F, and federal 25C credits still apply.',
    href: '/hvac-systems/heat-pumps',
    image: images.upgradeHeatPump,
  },
  {
    title: 'Smart Zoning',
    body: 'Different temperatures upstairs and down without running two systems. The fix for two-story homes that fight their thermostat.',
    href: '/hvac-systems/zoning-systems',
    image: images.upgradeZoning,
  },
  {
    title: 'Whole-Home Dehumidification',
    body: 'The real fix for Houston, Miami and Atlanta summers. Your AC cools; it was never designed to dry.',
    href: '/services/indoor-air-quality/dehumidifiers',
    image: images.upgradeDehumidification,
  },
  {
    title: 'High-Efficiency Filtration',
    body: 'MERV 13 and above, sized so it does not choke your blower. Wildfire smoke, pollen, and construction dust.',
    href: '/services/indoor-air-quality/air-purifiers',
    image: images.upgradeFiltration,
  },
  {
    title: 'Smart Thermostats',
    body: 'Ecobee and Honeywell, installed and actually paired right — including with two-stage and ductless equipment.',
    href: '/hvac-systems/smart-thermostats',
    image: images.upgradeThermostat,
  },
]

export function UpgradeCarousel() {
  return (
    <Carousel opts={{ align: 'start' }} className="mt-10">
      <CarouselContent className="-ml-5">
        {upgrades.map((u) => (
          <CarouselItem
            key={u.href}
            className="basis-[84%] pl-5 sm:basis-1/2 lg:basis-1/3"
          >
            <Link
              href={u.href}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-cloud">
                <Image
                  src={u.image.src}
                  alt={u.image.alt}
                  fill
                  sizes="(max-width: 640px) 84vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="relative flex flex-1 flex-col gap-2.5 bg-navy p-6 text-white">
                <span
                  className="absolute inset-x-0 top-0 h-1 bg-action"
                  aria-hidden
                />
                <h3 className="mt-1 font-display text-cardtitle font-bold text-white">
                  {u.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-white/78">
                  {u.body}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-white">
                  Explore
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-8 flex gap-3">
        <CarouselPrevious className="static size-12 translate-y-0" />
        <CarouselNext className="static size-12 translate-y-0" />
      </div>
    </Carousel>
  )
}
