import type { ServicePillar } from './types'

export const airConditioning: ServicePillar = {
  slug: 'air-conditioning',
  name: 'Air Conditioning',
  eyebrow: 'Air Conditioning',
  title: 'AC repair, maintenance and installation — nationwide.',
  lead: 'Split systems, packaged rooftop units, ductless heads and PTAC. Diagnosed before we quote, in every market we serve.',
  metaDescription:
    'Air conditioning repair, maintenance and installation nationwide. Split systems, packaged units, ductless and PTAC. Licensed local technicians in 10 metros, dispatch answered 24/7.',
  image: 'serviceAc',
  intro:
    'VGB Technologies services air conditioning across ten major U.S. metros — split systems, packaged rooftop units, ductless mini-splits and PTAC. We repair every major brand regardless of who installed it, run annual and semi-annual maintenance programs, and size replacements with a Manual J load calculation rather than a rule of thumb. Technicians are licensed in the state they work in and dispatch is answered 24 hours a day.',

  actionsEyebrow: 'All AC services',
  actionsTitle: 'Pick your path.',
  actionsLead:
    'Three ways we help with cooling. Pick the one that matches where you actually are.',

  problemsEyebrow: 'What we see most',
  problemsTitle: 'Common AC problems we fix.',
  problemsLead:
    'If you are seeing any of these, we have diagnosed it several thousand times across our markets.',
  problems: [
    {
      title: 'AC will not turn on',
      body: 'Tripped breaker, failed capacitor, dead thermostat or control board. We isolate the cause before quoting parts.',
    },
    {
      title: 'Blowing warm air',
      body: 'Low refrigerant, a frozen evaporator coil, a dirty filter or a failing compressor. Often a same-day fix once diagnosed.',
    },
    {
      title: 'Short cycling',
      body: 'Turns on and off within minutes. Usually an oversized unit, a dirty filter, or thermostat placement — sometimes an install error.',
    },
    {
      title: 'Water around the air handler',
      body: 'Clogged condensate drain, iced coil or a failed condensate pump. Fast to find, usually fast to fix — and the fastest way to ruin a ceiling.',
    },
    {
      title: 'Rising electric bills',
      body: 'Dirty coils, duct leakage, an ageing compressor or a wrong-size system. We will show you the measurements rather than the theory.',
    },
    {
      title: 'Will not reach setpoint',
      body: 'In Phoenix and Dallas this is often correct operation at design temperature. We will tell you if it is the equipment or the building envelope — and we will not sell you a bigger unit to fix insulation.',
    },
  ],

  faqs: [
    {
      q: 'How often should I service my air conditioning?',
      a: 'Once a year in most markets, ideally in spring before the cooling season. In Phoenix we recommend twice, because the duty cycle here loads coils and drifts refrigerant charge faster than anywhere else we work.',
    },
    {
      q: 'How do I know if I need a new system?',
      a: 'The usual signals: twelve or more years old, a repair quote at half the cost of replacement, R-22 refrigerant, or bills climbing while usage stays flat. Two or more of those together usually means replacement is the cheaper path. One on its own often does not.',
    },
    {
      q: 'What size AC do I need?',
      a: 'That comes out of a Manual J load calculation, which accounts for square footage, insulation, window area and orientation, ductwork and climate. Rule-of-thumb sizing is how systems end up oversized, and oversized systems short-cycle, dehumidify badly and wear out early.',
    },
    {
      q: 'Do you install ductless in homes without ductwork?',
      a: 'Yes, and in Los Angeles and Philadelphia it is most of what we do. Line sets route through closets or exterior covers rather than through demolished plaster. Single-zone systems run $4,500–$8,000 installed; multi-zone $11,000–$22,000.',
    },
    {
      q: 'Do you offer emergency AC repair?',
      a: 'Yes, in all ten metros, with dispatch answered 24/7. In extreme-heat markets we triage by heat-exposure risk rather than strictly by call order, and we will tell you where you sit rather than leaving you guessing.',
    },
    {
      q: 'Will you service a system you did not install?',
      a: 'Yes. We service every major brand regardless of origin, and a large share of our maintenance contracts start on equipment another contractor installed years earlier.',
    },
  ],

  actions: [
    {
      slug: 'repair',
      name: 'AC Repair',
      title: 'AC repair — diagnosed before we quote.',
      lead: 'Split systems, packaged units, ductless and PTAC. Same-day diagnostic on most calls, licensed technicians in all ten metros.',
      metaDescription:
        'Same-day AC repair diagnostics across 10 U.S. metros. Split systems, packaged units, ductless and PTAC. Honest quote in writing before any work starts.',
      cardBody:
        'Same-day diagnostic on most calls. Every major brand, regardless of who installed it.',
      cardFeatures: [
        'Full-system diagnostic before any quote',
        'Refrigerant, capacitor, compressor, control board',
        'All major brands serviced',
        '24/7 emergency dispatch',
      ],

      itemsEyebrow: 'Symptoms we diagnose',
      itemsTitle: 'What is your AC doing — or not doing?',
      itemsLead:
        'Each of these has a clear diagnostic path. We work it in order rather than replacing parts until something changes.',
      items: [
        {
          title: 'Will not turn on',
          body: 'Tripped breaker, blown capacitor, failed thermostat or control board. We isolate the cause before quoting any parts.',
        },
        {
          title: 'Blowing warm air',
          body: 'Low refrigerant, frozen evaporator coil, dirty filter or a failing compressor. Often same-day once we have diagnosed it.',
        },
        {
          title: 'Short cycling',
          body: 'On and off within minutes. Usually a dirty filter overheating a limit, an oversized unit, or a thermostat in the wrong place.',
        },
        {
          title: 'Leaking water',
          body: 'Clogged condensate drain, ice on the coil, or a failed condensate pump. Quick to find and, in an attic, urgent to fix.',
        },
        {
          title: 'Tripping the breaker',
          body: 'A short in the compressor, a dirty condenser, loose wiring or an undersized circuit. Worth fixing carefully — this is the failure mode that damages systems.',
        },
        {
          title: 'New or louder noises',
          body: 'Loose hardware, worn bearings, a refrigerant hiss or duct movement. We will locate it and tell you what it actually means.',
        },
      ],

      processEyebrow: 'How a repair visit works',
      processTitle: 'Diagnose first. Quote next. Then fix.',
      processLead:
        'The same four steps on every call, whether it is a condo PTAC or a 25-ton rooftop unit.',
      process: [
        {
          title: 'Phone triage',
          body: 'We ask what the system is doing, the brand and rough age, and whether it is a genuine emergency — before dispatching a truck. Some problems get solved on the call, and that costs you nothing.',
        },
        {
          title: 'On-site diagnostic',
          body: 'Full system check: refrigerant, electrical, airflow, drainage, controls. We look past the obvious symptom so the repair fixes the actual cause.',
        },
        {
          title: 'Written quote',
          body: 'Parts, labour and your options in writing before any work begins. If repair versus replace is close, you get both numbers and the reasoning.',
        },
        {
          title: 'Repair and verify',
          body: 'We fix it, run a full cycle, measure the result and show you what changed. Workmanship warranty on top of the parts warranty.',
        },
      ],

      costEyebrow: 'What affects the cost',
      costTitle: 'Three things move a repair price.',
      costDrivers: [
        {
          title: 'System type and age',
          body: 'A capacitor on a five-year-old split system is a different job from a control board on a twelve-year-old ductless head. Older systems sometimes need parts sourced rather than pulled off the van.',
        },
        {
          title: 'Refrigerant and access',
          body: 'Refrigerant type matters — R-22 is gone and R-410A is in phase-down, and both affect cost. Rooftop and high-rise condensers may need lift access or building coordination.',
        },
        {
          title: 'Warranty status',
          body: 'Many systems under ten years still carry parts warranty. We check before quoting so you are not paying for something the manufacturer already owes you.',
        },
      ],
      priceNote:
        'We do not publish repair prices. A price before a diagnosis is a guess, and guesses get revised upward once someone is actually on site. What we will tell you on the phone is the diagnostic fee, whether it credits toward the repair, and roughly what a repair of that type usually runs.',

      faqs: [
        {
          q: 'Do you charge for the diagnostic visit?',
          a: 'Yes — it covers the trip and the time to establish what is actually wrong. If you approve the repair it typically credits toward the job. You get the number on the phone before we schedule, not on the invoice afterwards.',
        },
        {
          q: 'Will you push me toward replacement?',
          a: 'No. If a repair is the right call we will say so, including on older equipment. The pattern to watch for from any contractor is a modest repair quoted alongside a replacement with no middle option — that is a sales script, not a diagnosis.',
        },
        {
          q: 'How quickly can you get to me?',
          a: 'Dispatch is answered 24/7 and you will get a real window on the call, based on the situation, your location and what is already on the board. We do not advertise a fixed arrival guarantee because across ten metros it is not one anybody can keep.',
        },
        {
          q: 'What brands do you repair?',
          a: 'All major brands — Carrier, Trane, Lennox, Rheem, Daikin, Mitsubishi Electric, York, Goodman, Bryant, American Standard, LG, Amana, Friedrich and others. If you can find a model number we can almost always source parts.',
        },
        {
          q: 'Do you warranty repairs?',
          a: 'Yes. Parts carry the manufacturer warranty — typically one to five years depending on the component — and most repairs carry our workmanship warranty on top. The specifics go on your invoice.',
        },
        {
          q: 'My building has restricted roof or elevator access. Is that a problem?',
          a: 'No. We work high-rise and multi-tenant buildings weekly in New York, Miami and Chicago. Freight elevator booking, certificates of insurance and after-hours windows are part of the job rather than a surprise.',
        },
      ],
    },

    {
      slug: 'maintenance',
      name: 'AC Maintenance',
      title: 'AC tune-ups and maintenance plans.',
      lead: 'Annual service catches refrigerant loss, dirty coils and electrical wear before they become emergency calls. Essential $189 · Complete $259.',
      metaDescription:
        'Annual AC tune-ups and maintenance plans across 10 U.S. metros. Essential $189/yr, Complete $259/yr. Keeps your manufacturer warranty valid.',
      cardBody:
        'Annual tune-ups catch the failures that become July emergencies — and keep your manufacturer warranty valid.',
      cardFeatures: [
        'Full multi-point tune-up',
        'Coil, filter and drain service',
        'Refrigerant charge verification',
        'Plans from $189/yr',
      ],

      itemsEyebrow: 'Why annual maintenance',
      itemsTitle: 'What a tune-up actually buys you.',
      itemsLead:
        'Maintenance is not a polite formality. It is the cheapest way to keep cooling reliable through a market that runs it hard.',
      items: [
        {
          title: 'Keeps your warranty valid',
          body: 'Nearly every manufacturer requires documented annual service to honour parts coverage. Skip it and a compressor claim can be denied on paperwork alone.',
        },
        {
          title: 'Catches refrigerant loss early',
          body: 'A slow leak quietly destroys efficiency and then the compressor. Catching it at a tune-up is a small repair; catching it after the compressor starves is not.',
        },
        {
          title: 'Prevents peak-season failures',
          body: 'Most July emergency calls trace back to something visible the previous spring — a weak capacitor, a loaded coil, a loose connection.',
        },
        {
          title: 'Restores measurable efficiency',
          body: 'Dirty coils and low charge force the system to work harder for the same result. A proper tune-up usually shows up on the bill rather than just on the invoice.',
        },
        {
          title: 'Extends equipment life',
          body: 'Maintained systems commonly run 15–18 years. Neglected ones often fail around year ten — sooner in Phoenix.',
        },
        {
          title: 'Documented for your records',
          body: 'Every visit produces a written report with measurements. Useful for warranty claims, capex planning and insurance — and essential for facility managers.',
        },
      ],

      processEyebrow: 'What we actually do',
      processTitle: 'Real cleaning, real measurements, real findings.',
      process: [
        {
          title: 'Easy scheduling',
          body: 'We hold seasonal slots so you are not competing with the peak-season rush. Pick spring cooling, autumn heating, or both on the Complete plan.',
        },
        {
          title: 'Full system tune-up',
          body: 'Refrigerant charge verification, coil cleaning both sides, condensate drain clearing, electrical torque check, capacitor and contactor testing, blower and filter service, thermostat calibration, and measured temperature split. Typically 60–90 minutes per system.',
        },
        {
          title: 'Written findings',
          body: 'What we cleaned, what is wearing, what to watch next season — with the numbers. No invented "repairs recommended" list.',
        },
        {
          title: 'Easy renewal',
          body: 'We reach out next season. Same paperwork, ideally the same technician. You do not have to remember anything.',
        },
      ],

      costEyebrow: 'What affects the price',
      costTitle: 'Flat pricing, with three things that change it.',
      costDrivers: [
        {
          title: 'System count and size',
          body: 'One central system is single pricing. A four-zone ductless setup, or a home running both central and window units, takes longer and costs more.',
        },
        {
          title: 'Single visit versus Complete',
          body: 'Complete at $259 covers both cooling and heating tune-ups for the year — better value than booking two singles at $189 each.',
        },
        {
          title: 'Multi-unit and commercial',
          body: 'Property managers and facilities get a per-unit contract rate below the residential price. We quote on the building rather than per call.',
        },
      ],

      faqs: [
        {
          q: 'What is actually included in a tune-up?',
          a: 'Refrigerant charge verification, evaporator and condenser coil cleaning, condensate drain clearing, electrical connection torque check, capacitor and contactor testing, blower and filter service, thermostat calibration, measured temperature split and airflow, and a written findings report. Typically 60–90 minutes per system.',
        },
        {
          q: 'Single visit or the Complete plan?',
          a: 'If you have both cooling and heating, Complete at $259 is almost always the better deal — it covers both seasons and beats two single visits at $189 each. A single visit makes sense if you genuinely only run one season, which is rare outside Miami and Phoenix.',
        },
        {
          q: 'When should I schedule?',
          a: 'Spring, before the first genuinely hot week. Once it is 95°F the schedule fills with emergency calls and routine work gets pushed. Booking ahead also means you pick the day rather than us.',
        },
        {
          q: 'Can I skip a year?',
          a: 'You can, but the warranty clock keeps running. Most manufacturers require documented annual service to honour parts coverage, so skipping a year can turn a covered compressor claim into your problem.',
        },
        {
          q: 'Do you maintain ductless systems?',
          a: 'Yes. Ductless heads have washable filters, indoor coils and condensate lines that all need annual attention, and multi-zone systems have more of each. We price by head count.',
        },
        {
          q: 'Can you do a whole building at once?',
          a: 'Yes — multi-unit condo and rental buildings are routine for us. We quote per unit, schedule in one visit window, and provide either a single invoice or per-unit reports depending on what your accounting needs.',
        },
      ],
    },

    {
      slug: 'installation-replacement',
      name: 'AC Install & Replace',
      title: 'AC installation and replacement, right-sized.',
      lead: 'Manual J load calculation on every install. Permits pulled, old equipment hauled, financing available.',
      metaDescription:
        'AC installation and replacement across 10 U.S. metros. Manual J right-sizing, permits handled, published price ranges. Ductless, central, packaged and PTAC.',
      cardBody:
        'Manual J load calculation on every install. Sized to the building, not to the invoice.',
      cardFeatures: [
        'Free in-home estimate',
        'Manual J right-sizing',
        'Ductless, central, packaged and PTAC',
        'Financing available',
      ],

      itemsEyebrow: 'When it is time to replace',
      itemsTitle: 'Signs your AC is past its prime.',
      itemsLead:
        'Not every old system needs replacing. If two or more of these are true, replacement usually becomes the cheaper path.',
      items: [
        {
          title: '12 or more years old',
          body: 'Most central systems run 12–15 years, less in Phoenix. Past that, parts get harder to source and efficiency has fallen well behind current equipment.',
        },
        {
          title: 'Repair cost approaching half of replacement',
          body: 'A $4,000 repair on a fourteen-year-old system rarely pencils out against a new one with better efficiency and a fresh warranty.',
        },
        {
          title: 'R-22 or R-410A supply issues',
          body: 'R-22 was phased out in 2020 and R-410A is now in phase-down under the AIM Act. On older systems a significant leak effectively forces the decision.',
        },
        {
          title: 'Climbing bills at steady usage',
          body: 'Same thermostat habits, rising cost. Usually compressor wear or refrigerant loss rather than anything you are doing differently.',
        },
        {
          title: 'Cannot hold setpoint',
          body: 'Running constantly without getting there means undersized, leaking ductwork, or genuinely near end of life. Worth a load calculation before spending anything.',
        },
        {
          title: 'Multiple failures in one season',
          body: 'Two or three repair calls in a single summer is usually the system telling you something. Replacement starts to look like the cheaper path.',
        },
      ],

      processEyebrow: 'How a new install works',
      processTitle: 'From estimate to a system you can measure.',
      process: [
        {
          title: 'In-home estimate',
          body: 'Manual J load calculation, not a rule of thumb. We measure the space, insulation, window load, orientation and existing ductwork before specifying anything.',
        },
        {
          title: 'Options and written quote',
          body: 'Two or three real options with efficiency ratings, brand, warranty and full installed price. Financing shown alongside the cash price so you can compare properly.',
        },
        {
          title: 'Permits and installation',
          body: 'We pull the permits and coordinate building access where it is needed. Old equipment leaves the same day.',
        },
        {
          title: 'Commissioning and walkthrough',
          body: 'Full system test with measured airflow and charge, warranty registration, and a walkthrough so you know how to run it. We follow up after the first season.',
        },
      ],

      costEyebrow: 'What affects the price',
      costTitle: 'Install pricing varies more than repair does.',
      costDrivers: [
        {
          title: 'System type and size',
          body: 'A two-ton central replacement is a different job from a four-zone ductless install or a high-output packaged unit. The load calculation tells us what you actually need.',
        },
        {
          title: 'Ductless versus ducted complexity',
          body: 'Replacing in place is cheaper than running new line sets through finished walls. Where there is a genuine choice we will quote both routes.',
        },
        {
          title: 'Building access and permits',
          body: 'High-rises need permits, freight elevator booking and sometimes after-hours condenser placement. We coordinate all of it, and it is a real line item rather than a surprise.',
        },
      ],
      prices: {
        title: 'Published install ranges.',
        rows: [
          { label: 'Ductless, single-zone', range: '$4,500 – $8,000' },
          { label: 'Ductless, multi-zone', range: '$11,000 – $22,000' },
          { label: 'Central AC replacement (existing ductwork)', range: '$7,000 – $13,500' },
          { label: 'Full system with new ductwork', range: '$16,000 – $28,000' },
          { label: 'Packaged rooftop (residential)', range: '$9,000 – $16,000' },
          { label: 'PTAC unit swap', range: '$1,600 – $2,800' },
        ],
        note: 'Ranges vary meaningfully by metro — Phoenix packaged units and New York high-rise access sit at opposite ends. We publish install bands and refuse to publish repair prices, because installs can be scoped from a site visit and repairs cannot.',
      },

      faqs: [
        {
          q: 'How long does an install take?',
          a: 'Most ductless mini-splits take one to two days. A central replacement reusing existing ductwork is usually a single day. A new central system with new ductwork runs two to four days. PTAC swaps are a couple of hours per unit.',
        },
        {
          q: 'What is Manual J and why does it matter?',
          a: 'It is the industry-standard load calculation — square footage, insulation, window area and orientation, infiltration, ductwork and climate. Eyeball sizing is how systems end up oversized, and oversized systems short-cycle, dehumidify badly and wear out early. Right-sizing typically saves 15–30% on operating cost.',
        },
        {
          q: 'Do I need permits?',
          a: 'For most equipment replacement and all new installations, yes. We pull them as part of the job so you are not dealing with the city. In condo and co-op buildings we also handle association approvals.',
        },
        {
          q: 'Is financing available?',
          a: 'Yes, on qualifying residential replacements, with a soft pre-qualification that does not affect your credit score. We show the monthly figure beside the cash price so you can compare honestly.',
        },
        {
          q: 'Which brand do you recommend?',
          a: 'It depends on the application rather than on a dealer agreement. Mitsubishi Electric and Daikin lead for ductless, Carrier and Trane for central, Friedrich for PTAC. We will explain the trade-offs in plain language.',
        },
        {
          q: 'Can you install ductless without tearing up walls?',
          a: 'Yes — that is most of our Los Angeles and Philadelphia work. Line sets route through closets, behind cabinetry, or in exterior covers painted to match the trim. We design the routing at the estimate so you see exactly what will be visible.',
        },
      ],
    },
  ],
}
