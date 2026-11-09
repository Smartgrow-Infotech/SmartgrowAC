import type { Faq } from '@/components/sections/faq'
import type { Item } from '@/components/sections/blocks'

/**
 * Per-metro editorial content.
 *
 * This file is the whole reason the site is national rather than generic. The
 * reference site won on hyper-local proof — neighbourhood names, "five minutes
 * from our shop". That does not survive going national, so each metro instead
 * leads with the HVAC problem that market actually has: humidity in Houston,
 * duty cycle in Phoenix, boilers in Chicago, altitude in Denver, salt air in
 * Miami. Ten metros, ten genuinely different pages.
 *
 * ⚠️ Every `testimonial` below is INVENTED sample copy. Replace with real,
 * attributable reviews before launch — see smartgrow/contentReference.txt §0.
 */

export type MetroContent = {
  /** Dense, quotable opener written for answer engines. ~100 words. */
  intro: string
  whyTitle: string
  why: string[]
  buildings: Item[]
  /** Honest arrival-window language for this market. */
  response: string
  testimonial: { quote: string; name: string; detail: string }
  faqs: Faq[]
}

export const metroContent: Record<string, MetroContent> = {
  'dallas-fort-worth': {
    intro:
      'VGB Technologies has served the Dallas–Fort Worth metroplex since 2009, and DFW remains our headquarters and largest market. We install and service air conditioning, heat pumps, furnaces, ductless mini-splits, water heaters and indoor air quality systems for single-family homes, multifamily properties and commercial facilities across Dallas, Fort Worth, Plano, Arlington, Irving, Frisco, Garland and Richardson. Our technicians are licensed in Texas and dispatch is answered 24 hours a day.',
    whyTitle: 'Eight months of cooling, and an air handler in a 140°F attic.',
    why: [
      'DFW runs its air conditioning roughly eight months a year, and that duty cycle defines the work here. A system that would last eighteen years in Philadelphia sees its compressor work twice as hard, and we see failures cluster around year ten to twelve rather than fifteen.',
      'The other defining feature is where the equipment lives. Most DFW homes put the air handler in an unconditioned attic that reaches 140°F in August — a genuinely hostile place for a blower motor and a drain pan. A large share of our summer emergency calls are condensate overflows from attic units: a $200 problem that becomes a $6,000 ceiling repair if the safety switch was never installed or was bypassed. We check for that on every maintenance visit, and it is the single highest-value thing we do in this market.',
    ],
    buildings: [
      {
        title: 'Single-family with attic air handlers',
        body: 'The dominant DFW configuration. Condensate management, attic-heat derating, and duct leakage in unconditioned space.',
      },
      {
        title: 'New-build tract homes',
        body: 'Frisco, Prosper and McKinney build-outs — often builder-grade single-stage equipment that is under-specified for the actual load.',
      },
      {
        title: 'Multifamily and garden apartments',
        body: 'Per-unit split systems and packaged units. Portfolio programs with per-unit invoicing for property managers.',
      },
      {
        title: 'Commercial rooftop',
        body: 'Retail, restaurant and office packaged RTUs across the metroplex, including crane-lift replacements.',
      },
    ],
    response:
      'Most of the metroplex is inside an hour of a crew during business hours. Dispatch is answered 24/7 and we will give you a real window on the call.',
    testimonial: {
      quote:
        'Our attic unit flooded the guest bedroom ceiling the first time. After that we got on their maintenance plan, and the tech found a clogged drain line on the very first visit. Hasn’t happened again in four years.',
      name: 'D. Whitfield, Plano',
      detail: 'Maintenance plan member since 2022',
    },
    faqs: [
      {
        q: 'Why do attic air handlers cause so many problems in DFW?',
        a: 'Because the attic reaches 140°F in summer, which cooks the blower motor and evaporates nothing from a drain pan that is already struggling. Add a clogged condensate line and the overflow goes through your ceiling. A working float switch is the cheapest insurance in this market, and we verify it on every visit.',
      },
      {
        q: 'Is a heat pump worth it in Dallas, or should I stay with gas?',
        a: 'Heat pumps make strong sense here. Winters are mild enough that a cold-climate unit rarely needs backup, and you are already buying a compressor for eight months of cooling. Where gas still wins is a home with very cheap gas service and an existing furnace with years left in it. We will show you both numbers.',
      },
      {
        q: 'How fast can you reach my address in DFW?',
        a: 'Most of the metroplex is within an hour during business hours. Traffic on I-635 and the Tollway is the real variable, and we will factor it into the window we give you rather than quoting a best case.',
      },
      {
        q: 'Do you handle new-construction warranty work?',
        a: 'Yes, and it is common in the Frisco and McKinney build-outs. Builder-grade equipment is frequently under-specified for the load, so we will tell you honestly whether you have a warranty defect or a sizing problem — those get resolved very differently.',
      },
      {
        q: 'Do you serve outside the immediate metroplex?',
        a: 'Within a reasonable radius, yes. Past that we will say so rather than accepting the job and sending someone two hours each way.',
      },
    ],
  },

  phoenix: {
    intro:
      'VGB Technologies serves the Phoenix metropolitan area with air conditioning repair, replacement and maintenance, heat pump service, water heaters and indoor air quality systems. We work across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale and Peoria, on both residential packaged units and commercial rooftop systems. Our technicians are licensed in Arizona and dispatch is answered 24 hours a day — with summer calls triaged by heat-exposure risk rather than strictly in order.',
    whyTitle: 'The hardest cooling duty cycle in the country.',
    why: [
      'Phoenix is the most demanding cooling market in the United States and the equipment reflects it. A system that runs 2,000 hours a year in Atlanta runs closer to 3,500 here, against 115°F ambient temperatures that push condensers to the edge of their design envelope. The practical consequence: we see ten-to-twelve-year replacement cycles where other markets see fifteen to eighteen, and refrigerant loss is a leading failure mode rather than an occasional one.',
      'The second Phoenix-specific reality is the packaged rooftop unit. Most single-storey Phoenix homes use a packaged unit on the roof rather than a split system, so every service call involves roof access and every replacement involves either a crane or a very careful crew. It also means the entire system bakes in direct sun year-round. We stock for packaged units here in a way we do not in any other metro.',
    ],
    buildings: [
      {
        title: 'Residential packaged rooftop units',
        body: 'The default Phoenix configuration. Roof access on every call, and full-system replacement rather than a split swap.',
      },
      {
        title: 'Two-storey split systems',
        body: 'Newer and larger homes. Condenser placement and line-set shading matter more here than almost anywhere else.',
      },
      {
        title: 'Commercial RTUs',
        body: 'Retail and restaurant packaged units under punishing runtime. Quarterly service is not optional in this climate.',
      },
      {
        title: 'Ductless for additions and casitas',
        body: 'Guest houses, converted garages and Arizona rooms that the main system was never sized to cover.',
      },
    ],
    response:
      'Summer calls are triaged by heat-exposure risk, not call order. If you are being moved back in the queue, we will tell you that on the phone.',
    testimonial: {
      quote:
        '118 degrees, unit died at 4pm on a Saturday, and we have a two-year-old. They moved us up the queue because of that, told us straight it would be 90 minutes, and were there in 80.',
      name: 'R. Okonkwo, Chandler',
      detail: 'Emergency AC repair, July 2025',
    },
    faqs: [
      {
        q: 'Why do Phoenix systems fail sooner than elsewhere?',
        a: 'Runtime and ambient temperature. Roughly 3,500 operating hours a year against 115°F air means compressors and capacitors live much harder lives. Plan for a ten-to-twelve-year replacement cycle here rather than the fifteen-plus you would get in a milder market.',
      },
      {
        q: 'Do you triage emergency calls differently in summer?',
        a: 'Yes. Extreme heat is a genuine medical emergency, so households with infants, elderly residents or anyone with a heat-affected medical condition move to the front of the queue. If that means you are moved back, we will say so directly rather than quietly leaving you waiting.',
      },
      {
        q: 'My home has a packaged unit on the roof. Is that a problem?',
        a: 'It is the norm here and we are set up for it. Roof access is part of every call, and a replacement is a full-unit swap rather than a split-system change-out. We stock packaged units locally so you are not waiting on a special order in August.',
      },
      {
        q: 'How often should I service my AC in Phoenix?',
        a: 'Twice a year rather than once. In most markets an annual tune-up is enough; here the duty cycle means coils load up and refrigerant charge drifts faster. Our Complete plan is built around that.',
      },
      {
        q: 'Is refrigerant loss really that common here?',
        a: 'It is one of the leading failure modes in this market. Thermal cycling works on flare fittings and braze joints harder than in mild climates. Catching a slow leak at a tune-up is a modest repair; catching it after the compressor starves is not.',
      },
    ],
  },

  houston: {
    intro:
      'VGB Technologies serves greater Houston with air conditioning, heating, indoor air quality and water heater service across Houston, Katy, Sugar Land, The Woodlands, Pearland, Pasadena, Cypress and Spring. We work single-family, multifamily and light commercial properties, are licensed in Texas, and answer dispatch 24 hours a day. In this market most of our work is humidity control as much as cooling.',
    whyTitle: 'Humidity is the problem here. Cooling is just how you get at it.',
    why: [
      'Houston runs 80% relative humidity for months at a time, and that changes what a working system looks like. Your air conditioner removes moisture only as a side effect of running long enough to condense it. A correctly sized system does that; an oversized one satisfies the thermostat in eight minutes, shuts off, and leaves the house cool and clammy at 60% indoor humidity.',
      'That is why the most common complaint we get here is not "it will not cool" — it is "it cools but the house feels wet". The fix is usually right-sizing, a variable-speed blower, or a dedicated dehumidifier working alongside the AC rather than a bigger unit. We will tell you which one you actually need, and it is frequently the cheapest of the three.',
    ],
    buildings: [
      {
        title: 'Slab-on-grade single-family',
        body: 'The Houston default. Attic air handlers, flexible duct in unconditioned space, and duct leakage that pulls humid air straight into the system.',
      },
      {
        title: 'Master-planned communities',
        body: 'Katy, Cypress and The Woodlands. Newer, tighter envelopes that dehumidify poorly without a dedicated strategy.',
      },
      {
        title: 'Mid-rise and multifamily',
        body: 'Per-unit split systems and packaged units, with corridor pressurisation issues that push humidity into units.',
      },
      {
        title: 'Light commercial and restaurant',
        body: 'Kitchen makeup-air balance, which in this climate is the difference between a comfortable dining room and a wet one.',
      },
    ],
    response:
      'Greater Houston is a large service area and traffic is the variable. We will give you a real window rather than a best case.',
    testimonial: {
      quote:
        'Two companies told us to buy a bigger unit. These guys measured, said our system was already oversized, and put in a dehumidifier instead. Half the price and the house finally feels dry.',
      name: 'A. Nguyen, Sugar Land',
      detail: 'Whole-home dehumidification, 2025',
    },
    faqs: [
      {
        q: 'My AC cools but the house still feels damp. Why?',
        a: 'Almost always an oversized system. It reaches setpoint before it has run long enough to condense meaningful moisture out of the air, then shuts off. The answer is usually right-sizing, a variable-speed blower, or a dedicated dehumidifier — not a bigger unit.',
      },
      {
        q: 'Do I need a whole-home dehumidifier in Houston?',
        a: 'Many homes here genuinely benefit, particularly tighter newer builds. We measure indoor relative humidity before recommending one. If you are sitting above 55% with the AC running normally, it is worth the conversation.',
      },
      {
        q: 'Is ductwork in the attic a problem here?',
        a: 'It is the single most common source of trouble. Leaky flexible duct in a hot, humid attic pulls moisture-laden air into the system and undoes the dehumidification you paid for. Sealing it is often a better investment than new equipment.',
      },
      {
        q: 'How does hurricane season affect service?',
        a: 'Power events cause a wave of compressor and control-board failures. If your system took a surge, tell us on the call — it changes what we check first and often what we bring.',
      },
    ],
  },

  'los-angeles': {
    intro:
      'VGB Technologies serves Los Angeles with ductless mini-split installation, air conditioning, heating, filtration and water heater service across Los Angeles, Pasadena, Glendale, Burbank, Santa Monica, Long Beach, Torrance and Inglewood. Much of our LA work is retrofitting cooling into older homes that were never built with ductwork, and our technicians are licensed in California.',
    whyTitle: 'Beautiful old housing stock with nowhere to put a duct.',
    why: [
      'A large share of Los Angeles housing predates central air entirely — bungalows, Spanish revival, mid-century homes with plaster walls, no attic clearance and no chase to run a trunk line through. The textbook answer, running ductwork, means tearing into finished walls and losing closet space. That is why ductless is the right answer here far more often than in any other market we serve.',
      'The second factor is air quality. Wildfire smoke has moved filtration from a nice-to-have to something people call about by name, and standard one-inch filters do essentially nothing for PM2.5. We size proper media filtration so it captures smoke particulate without choking a blower that was never specified for the pressure drop.',
    ],
    buildings: [
      {
        title: 'Pre-war bungalows and Spanish revival',
        body: 'Plaster walls, no duct chases, protected exteriors. Line-set routing and condenser placement are the whole job.',
      },
      {
        title: 'Mid-century homes',
        body: 'Low-slope roofs and minimal attic clearance. Ductless or high-velocity small-duct rather than conventional retrofit.',
      },
      {
        title: 'Multi-unit and ADUs',
        body: 'Converted garages and accessory dwellings that need their own independent system.',
      },
      {
        title: 'Light commercial storefront',
        body: 'Retail and office along the corridors, usually packaged rooftop or ductless.',
      },
    ],
    response:
      'LA traffic is the honest constraint. We build it into the window we quote instead of pretending it does not exist.',
    testimonial: {
      quote:
        'Three contractors told us we would have to lose a closet and cut into the plaster. These guys routed the line set through the back of a cabinet and you genuinely cannot tell.',
      name: 'M. Serrano, Pasadena',
      detail: 'Multi-zone ductless retrofit, 2025',
    },
    faqs: [
      {
        q: 'Can I get cooling in a house with no ductwork?',
        a: 'Yes, and ductless is usually the right answer rather than a compromise. Each indoor head has its own thermostat, line sets route through closets or exterior covers, and you avoid the demolition a duct retrofit would need.',
      },
      {
        q: 'What can I do about wildfire smoke?',
        a: 'Proper media filtration at MERV 13 or above, sized so the pressure drop does not choke your blower. A one-inch filter in the return grille does very little for smoke particulate. We verify your blower can handle the upgrade before recommending it.',
      },
      {
        q: 'Do you handle Title 24 compliance?',
        a: 'Yes. Equipment changeouts and new installs carry California energy-code requirements, and permit and documentation handling is part of the job rather than something we hand back to you.',
      },
      {
        q: 'Do I even need heating in Los Angeles?',
        a: 'Usually only modestly. That is an argument for a ductless heat pump — you are buying cooling anyway, and heating comes essentially free with the same equipment rather than maintaining a separate furnace you use six weeks a year.',
      },
    ],
  },

  denver: {
    intro:
      'VGB Technologies serves the Denver metro with heating, air conditioning, humidification and water heater service across Denver, Aurora, Lakewood, Littleton, Arvada, Westminster, Centennial and Thornton. Our technicians are licensed in Colorado. Altitude changes how combustion equipment has to be specified here, and dry winter air makes humidification a comfort issue rather than a luxury.',
    whyTitle: 'Altitude changes the equipment. Dry air changes the comfort.',
    why: [
      'Above roughly 2,000 feet, air is thinner and combustion equipment has to be derated accordingly — Denver sits well past that. A furnace specified as if it were at sea level will not deliver its rated output here, and installers who ignore it leave customers with a system that never quite keeps up on the coldest nights. Getting the derate right is a basic competence question in this market and it is one of the first things we check on an existing system.',
      'The other Denver reality is how dry it gets. Indoor relative humidity routinely falls below 15% in winter, which means static shock, cracked hardwood, split trim and sinuses that never settle. Whole-home humidification is standard here in a way it simply is not in Houston or Miami, and it lets most homeowners drop the thermostat a degree or two and feel the same.',
    ],
    buildings: [
      {
        title: 'Post-war single-family',
        body: 'Forced-air with existing ductwork. Furnace replacement with correct altitude derate, plus humidification.',
      },
      {
        title: 'Older homes with swamp coolers',
        body: 'Evaporative-to-refrigerated conversions, which need a genuine load calculation rather than a like-for-like swap.',
      },
      {
        title: 'Foothills and larger lots',
        body: 'Multi-zone systems and longer line sets. Snow-load and clearance considerations for outdoor equipment.',
      },
      {
        title: 'Light commercial',
        body: 'Office and retail rooftop units, likewise derated for altitude.',
      },
    ],
    response:
      'Denver is compact enough that most of the metro is within the hour outside of snow events. We will tell you when weather changes that.',
    testimonial: {
      quote:
        'Our previous furnace never kept up below about ten degrees. They found it had been specified at sea-level output. The replacement was sized correctly for altitude and the difference was immediate.',
      name: 'K. Lindqvist, Arvada',
      detail: 'Furnace replacement, 2024',
    },
    faqs: [
      {
        q: 'What does altitude derating actually mean?',
        a: 'Thinner air carries less oxygen, so combustion equipment produces less heat than its sea-level rating and has to be specified accordingly. Getting this wrong is why some homes never quite keep up in a cold snap. It is one of the first things we check on an existing system here.',
      },
      {
        q: 'Should I convert my swamp cooler to refrigerated air?',
        a: 'Usually yes for comfort and humidity control, but it is a real project rather than a swap — the load calculation, ductwork and electrical all need to be right. We will lay out what the conversion genuinely involves before you commit.',
      },
      {
        q: 'Do I need a humidifier in Denver?',
        a: 'Most homes here benefit substantially. Indoor humidity routinely drops below 15% in winter, which damages wood floors and trim and makes the air feel colder than it is. Correct humidification often lets you drop the thermostat a degree or two.',
      },
      {
        q: 'Do heat pumps work through a Colorado winter?',
        a: 'Cold-climate models hold full output to around 5°F, which covers most of the season. Below that a modest backup takes over. We size the backup honestly rather than pretending it is never needed.',
      },
    ],
  },

  chicago: {
    intro:
      'VGB Technologies serves Chicagoland with boiler, furnace, heat pump and air conditioning service across Chicago, Evanston, Oak Park, Naperville, Schaumburg, Cicero, Berwyn and Skokie. Our technicians are licensed in Illinois. A large share of the housing stock here still runs on steam or hydronic heat, and servicing it well is a different skill set from forced air.',
    whyTitle: 'Steam and hydronic heat, in buildings a century old.',
    why: [
      'Chicago has one of the largest surviving stocks of steam and hot-water heating in the country, concentrated in the two-flats, three-flats and pre-war apartment buildings that define whole neighbourhoods. These systems are not obsolete — a sound cast-iron boiler with good piping can run another two decades — but they fail differently from forced air, and diagnosing banging radiators or uneven heat across floors is its own discipline.',
      'Where replacement does make sense, the efficiency gain is dramatic. Much of the pre-1995 equipment still in service runs at 60–75% AFUE against 95%+ for modern condensing units, and the gas savings on a Chicago winter are substantial. What we will not do is tell you a working 30-year-old boiler must go. If the heat exchanger is sound and the piping is good, we will say so.',
    ],
    buildings: [
      {
        title: 'Two-flats and three-flats',
        body: 'Shared boilers serving multiple units, with balance and tenant-comfort issues that a single thermostat cannot solve.',
      },
      {
        title: 'Pre-war steam-heated buildings',
        body: 'Radiator air vents, pitched piping, low-water cutoffs, sight-glass work. A different discipline from forced air.',
      },
      {
        title: 'Bungalow belt single-family',
        body: 'Forced air with retrofitted central cooling, and AFUE conversions where the old equipment is genuinely spent.',
      },
      {
        title: 'Light commercial and storefront',
        body: 'Mixed-use buildings with retail below and residential above, on one mechanical system.',
      },
    ],
    response:
      'A cold snap fills the board fast. We triage by pipe-freeze risk and vulnerable occupants, and we will tell you where you sit.',
    testimonial: {
      quote:
        'Two other companies quoted a full boiler replacement. These guys found bad air vents and pitch on two radiators, fixed it for a few hundred dollars, and told us the boiler had years left.',
      name: 'J. Bartosz, Oak Park',
      detail: 'Steam system repair, 2025',
    },
    faqs: [
      {
        q: 'Do you service steam heat?',
        a: 'Yes, and it is a significant part of our Chicago work. Steam boilers, radiator air vents, low-water cutoffs, sight-glass cleaning and pipe pitch. It is a genuinely different discipline from forced air and not every contractor keeps the skill set.',
      },
      {
        q: 'Why do my radiators bang?',
        a: 'Almost always condensate trapped by bad pitch, a failed air vent, or water sitting in horizontal piping — very rarely the boiler itself. It is usually inexpensive to fix once properly diagnosed, and dramatic to live with until then.',
      },
      {
        q: 'Is my 30-year-old boiler worth keeping?',
        a: 'Possibly. Cast-iron boilers routinely run 30 to 40 years with maintenance, and a sound one with good piping is not automatically a replacement candidate. If the heat exchanger is cracked or you are burning gas at 65% AFUE, the maths changes. You will get both numbers.',
      },
      {
        q: 'Can I add central air to a home with radiators?',
        a: 'Yes. Ductless is usually cleanest since there is no existing ductwork to reuse, and high-velocity small-duct is an option where you want it invisible. You keep the hydronic heat you already have.',
      },
    ],
  },

  philadelphia: {
    intro:
      'VGB Technologies serves the Philadelphia area with heating, air conditioning, ductless retrofits and water heater service across Philadelphia, Bala Cynwyd, Cherry Hill, Upper Darby, King of Prussia, Conshohocken and Media. Our technicians are licensed in Pennsylvania. Rowhome geometry and oil-to-gas conversions define much of the work in this market.',
    whyTitle: 'Rowhomes, oil conversions, and no room for a duct.',
    why: [
      'The Philadelphia rowhome is a specific engineering problem: narrow, deep, three storeys, party walls on both sides, and no chase to run ductwork through. Retrofitting conventional central air means losing closet space on every floor. Ductless solves it cleanly, and high-velocity small-duct handles the cases where visible indoor heads are unacceptable in a period interior.',
      'The other recurring project here is fuel conversion. A meaningful share of the older stock still runs on oil, and at current prices the operating-cost gap against high-efficiency gas or a heat pump is wide enough that conversion frequently pays for itself. It is a real project — gas service, venting, tank removal — so we quote the pieces separately rather than burying them in one number.',
    ],
    buildings: [
      {
        title: 'Rowhomes and trinities',
        body: 'Narrow, deep, multi-storey. Ductless or high-velocity, with line sets routed through closets and chases.',
      },
      {
        title: 'Twins and older single-family',
        body: 'Often oil-fired. Conversion candidates where the operating-cost gap justifies the project.',
      },
      {
        title: 'Converted multi-unit',
        body: 'Single-family homes split into apartments, usually with one heating system and no per-unit control.',
      },
      {
        title: 'Historic-district properties',
        body: 'Exterior equipment placement and visible penetrations need care and, sometimes, approval.',
      },
    ],
    response:
      'The city core and the Main Line are both comfortably inside our radius. We will give you an honest window on the call.',
    testimonial: {
      quote:
        'We were quoted a duct retrofit that would have cost us a closet on all three floors. They did a four-zone ductless in two days and our oil bill is gone.',
      name: 'T. Ruggiero, South Philadelphia',
      detail: 'Oil-to-ductless conversion, 2025',
    },
    faqs: [
      {
        q: 'Can I get central air in a rowhome?',
        a: 'Yes, though rarely with conventional ductwork — there is nowhere to put it without losing closet space on every floor. Ductless is the usual answer, and high-velocity small-duct works where visible indoor heads would not suit the interior.',
      },
      {
        q: 'Should I convert from oil?',
        a: 'Frequently yes. The operating-cost gap against high-efficiency gas or a heat pump is wide enough that conversion often pays for itself. It is a real project though — gas service, venting, tank removal — and we quote those pieces separately so you can see them.',
      },
      {
        q: 'Do you work in historic districts?',
        a: 'Yes. Exterior equipment placement and wall penetrations need care and sometimes approval, and we plan for that at the estimate rather than discovering it on install day.',
      },
      {
        q: 'How do you handle a house split into apartments?',
        a: 'Usually per-unit ductless so each tenant controls their own space and their own bill, or a zoned central system where the ductwork already exists. Which one is right depends on the building economics as much as the engineering.',
      },
    ],
  },

  'new-york': {
    intro:
      'VGB Technologies serves the New York metro with PTAC, water-source heat pump, ductless and water heater service across Manhattan, Brooklyn, Queens, the Bronx, Staten Island, Jersey City, Hoboken and Yonkers. We work high-rise condo and co-op buildings, pre-war walk-ups and light commercial, and coordinate directly with building management on access and approvals.',
    whyTitle: 'The equipment is easy. The building is the project.',
    why: [
      'In most markets an HVAC job is a technical problem. In New York it is a logistics problem wearing a technical problem as a disguise. Freight elevator booking, certificates of insurance naming the right entities, board approval for anything touching a façade, restricted work windows, and a super who needs notice — all of that has to be solved before a technician touches equipment.',
      'We are set up for it. Most high-rise units here run PTAC or water-source heat pumps, both of which are quick swaps once you are actually in the unit. Our COI and licensing are already on file with many building management companies in the metro, which routinely takes weeks out of a job that would otherwise stall on paperwork.',
    ],
    buildings: [
      {
        title: 'High-rise condo and co-op',
        body: 'PTAC arrays and water-source heat pumps. Per-unit replacement with board approval and freight coordination handled.',
      },
      {
        title: 'Pre-war walk-ups',
        body: 'Steam heat and no cooling. Ductless retrofits where the façade and the board both allow it.',
      },
      {
        title: 'Brownstones and townhouses',
        body: 'Multi-floor systems with genuine zoning needs, and mechanical space at a permanent premium.',
      },
      {
        title: 'Light commercial and retail',
        body: 'Ground-floor storefronts and small offices, usually ductless or through-wall.',
      },
    ],
    response:
      'Building access is usually the constraint, not distance. We will tell you what the building needs from you before we schedule.',
    testimonial: {
      quote:
        'Our board had rejected two contractors on paperwork alone. These guys already had a COI on file with our management company and were scheduled within a week.',
      name: 'Board member, Upper West Side co-op',
      detail: 'Per-unit WSHP replacement program',
    },
    faqs: [
      {
        q: 'Do you handle board approvals and building paperwork?',
        a: 'Yes, and in this market it is most of the job. Certificates of insurance with the right additional insureds, licensing documentation, freight elevator booking and resident notice. We are already on file with many management companies here.',
      },
      {
        q: 'What is the difference between a PTAC and a water-source heat pump?',
        a: 'A PTAC is self-contained and exchanges heat through the exterior wall. A water-source heat pump uses a building-wide water loop instead, which is quieter and more efficient but means the building owns part of the system. Older high-rises tend to run PTAC; newer towers tend to run WSHP.',
      },
      {
        q: 'Who is responsible for the building loop?',
        a: 'The building. You own the heat pump inside your unit; the HOA or management owns the loop, cooling tower and pumps. Some buildings include in-unit maintenance in common charges, most do not — worth checking your governing documents.',
      },
      {
        q: 'Can I put a ductless system in a pre-war apartment?',
        a: 'Often yes, but the constraint is the façade and the board rather than the engineering. Condenser placement and wall penetrations usually need approval. We will tell you early whether your building is likely to allow it.',
      },
    ],
  },

  atlanta: {
    intro:
      'VGB Technologies serves metro Atlanta with air conditioning, heating, ductwork and indoor air quality service across Atlanta, Marietta, Sandy Springs, Decatur, Alpharetta, Roswell, Smyrna and Dunwoody. Our technicians are licensed in Georgia. Crawlspace ductwork and humidity in both seasons define most of the residential work in this market.',
    whyTitle: 'The ductwork is under the house, and that is the whole story.',
    why: [
      'A large share of Atlanta homes run their ductwork through a vented crawlspace — humid, unconditioned and frequently the real reason a system underperforms. Leaky flexible duct down there pulls damp crawlspace air straight into the return, which costs you capacity, drags humidity up, and in bad cases brings a musty smell with it. Testing and sealing the duct is often a better investment than new equipment, and we will say so even though it is the smaller sale.',
      'Atlanta is also unusual in having a humidity problem in both seasons: muggy summers, and shoulder seasons where the system barely runs and moisture creeps up anyway. Add heavy spring pollen and filtration becomes a comfort issue rather than a technicality for a lot of households here.',
    ],
    buildings: [
      {
        title: 'Crawlspace-ducted single-family',
        body: 'The Atlanta default and the usual root cause. Duct leakage testing, sealing and insulation before equipment.',
      },
      {
        title: 'Split-level and multi-storey',
        body: 'Uneven floor-to-floor temperatures that zoning solves more cheaply than a second system.',
      },
      {
        title: 'Intown bungalows',
        body: 'Older stock with limited duct space, often better served by ductless or small-duct systems.',
      },
      {
        title: 'Suburban new build',
        body: 'Tighter envelopes that need a deliberate ventilation and dehumidification strategy.',
      },
    ],
    response:
      'The perimeter and the intown neighbourhoods are both well covered. I-285 traffic is the honest variable.',
    testimonial: {
      quote:
        'They tested our ductwork before quoting anything and found we were losing a third of our airflow under the house. Sealing it fixed the upstairs problem we had been trying to solve with a bigger unit.',
      name: 'C. Adeyemi, Decatur',
      detail: 'Duct sealing and rebalance, 2025',
    },
    faqs: [
      {
        q: 'Why is my upstairs always hotter?',
        a: 'Usually duct leakage and poor return sizing rather than an undersized system. Heat rises, the upstairs return cannot keep up, and a crawlspace duct run is losing air before it arrives. We test before recommending equipment, because equipment is rarely the fix.',
      },
      {
        q: 'Is crawlspace ductwork worth sealing?',
        a: 'In this market it is frequently the highest-return work we do. Leaky duct in a humid crawlspace costs you capacity and pulls moisture into the house. It is a smaller job than a replacement and often solves the problem the replacement was meant to.',
      },
      {
        q: 'What can I do about pollen season?',
        a: 'Proper media filtration sized so it does not choke the blower. A thicker four-inch media cabinet captures far more than a one-inch filter and needs changing far less often.',
      },
      {
        q: 'Do I need a dehumidifier in Atlanta?',
        a: 'Some homes do, particularly newer tight builds and anywhere the system is oversized. We measure indoor humidity before recommending one rather than selling it by default.',
      },
    ],
  },

  miami: {
    intro:
      'VGB Technologies serves South Florida with air conditioning, indoor air quality and water heater service across Miami, Miami Beach, Coral Gables, Hialeah, Aventura, Doral, Kendall and Fort Lauderdale. Our technicians are licensed in Florida. Salt-air corrosion and high-rise condo access are the two factors that shape almost every job in this market.',
    whyTitle: 'Salt air shortens everything, and the building sets the schedule.',
    why: [
      'Coastal South Florida is genuinely corrosive. Salt-laden air attacks condenser coils, fasteners and cabinets, and equipment within a few miles of the water simply does not last as long as the same unit inland. Coil coatings and corrosion-resistant hardware are worth specifying here in a way they are not in Dallas, and rinsing coils is a real maintenance item rather than a cosmetic one.',
      'The second factor is that a great deal of the housing is high-rise condo, which means the building sets the schedule. Association approval, certificates of insurance, freight elevator booking and hurricane-code requirements for equipment tie-down all sit between you and a working system. We handle that coordination as part of the job.',
    ],
    buildings: [
      {
        title: 'High-rise condo',
        body: 'PTAC and water-source heat pumps, with association approval and freight coordination on every unit.',
      },
      {
        title: 'Coastal single-family',
        body: 'Salt exposure drives specification. Coil coatings and corrosion-resistant hardware are worth the premium here.',
      },
      {
        title: 'Older inland housing',
        body: 'Split systems with humidity-control needs and frequently undersized returns.',
      },
      {
        title: 'Hospitality and retail',
        body: 'Hotel PTAC programs and restaurant rooftop units, scheduled around operations.',
      },
    ],
    response:
      'Distance is rarely the constraint here — building access is. We will tell you what your association needs before we schedule.',
    testimonial: {
      quote:
        'Our building rejected the last two contractors over insurance paperwork. These guys sent the COI with the right additional insureds the same day and the association approved it without a second meeting.',
      name: 'Property manager, Brickell',
      detail: 'Per-unit PTAC replacement program',
    },
    faqs: [
      {
        q: 'How much does salt air actually shorten equipment life?',
        a: 'Meaningfully, within a few miles of the coast. Salt attacks condenser coils, fasteners and cabinets. Coil coatings and corrosion-resistant hardware are worth specifying here, and rinsing coils is genuine maintenance rather than a cosmetic extra.',
      },
      {
        q: 'Do you handle condo association approvals?',
        a: 'Yes, and in this market it is usually the critical path. Certificates of insurance with the correct additional insureds, licensing documentation and freight elevator booking are part of the job rather than something we hand back to you.',
      },
      {
        q: 'What are the hurricane-code requirements?',
        a: 'Outdoor equipment needs proper tie-down and anchoring to code, and replacement is the right moment to confirm yours is compliant. We check it as part of an install rather than treating it as an optional extra.',
      },
      {
        q: 'Should I run my AC while away for the season?',
        a: 'Yes — leave it running at a moderate setpoint or use a humidistat. Shutting it off entirely in this climate is how people come back to mould. We can set that up so it runs efficiently while the place is empty.',
      },
    ],
  },
}
