import type { ServicePillar } from './types'

/**
 * IAQ is the most over-sold category in HVAC, so the copy here leads with
 * WHICH problem a given market actually has rather than selling all four
 * products to everyone. That honesty is the differentiator.
 */
export const indoorAirQuality: ServicePillar = {
  slug: 'indoor-air-quality',
  name: 'Indoor Air Quality',
  eyebrow: 'Indoor Air Quality',
  title: 'Cleaner, drier, better-ventilated air.',
  lead: 'Filtration, humidity control and fresh-air ventilation. Three different problems with three different right answers — and we will tell you which one you actually have.',
  metaDescription:
    'Whole-home air purifiers, humidifiers, dehumidifiers and ERV/HRV ventilation across 10 U.S. metros. We measure before recommending.',
  image: 'serviceIaq',
  intro:
    'VGB Technologies installs and services whole-home indoor air quality systems across ten major U.S. metros: media filtration and UV-C purification, bypass and steam humidifiers, whole-home dehumidifiers, and ERV/HRV fresh-air ventilation sized to ASHRAE 62.2. What you need depends almost entirely on your climate, so we measure indoor humidity and airflow before recommending equipment rather than selling the full catalogue.',

  actionsEyebrow: 'All IAQ solutions',
  actionsTitle: 'Pick your problem.',
  actionsLead:
    'Four approaches, each solving something genuinely different. Most homes need one. Some need two. Almost none need all four.',

  problemsEyebrow: 'The honest version',
  problemsTitle: 'What you need depends on where you live.',
  problemsLead:
    'Indoor air quality is the most over-sold category in this trade. Here is the version we would give a friend.',
  problems: [
    {
      title: 'Houston, Miami, Atlanta — humidity',
      body: 'Your AC removes moisture only as a side effect of running. Oversized systems short-cycle before they dehumidify, leaving cool clammy air. You need dehumidification, not filtration.',
    },
    {
      title: 'Denver, Chicago, Philadelphia — dryness',
      body: 'Heated winter air drops to desert humidity. Static shock, cracked hardwood, split trim, dry sinuses. You need a humidifier.',
    },
    {
      title: 'Los Angeles, Phoenix, Denver — particulates',
      body: 'Wildfire smoke and dust are the real load. A one-inch filter does almost nothing for PM2.5. You need proper media filtration, sized so it does not choke the blower.',
    },
    {
      title: 'New York and any tight modern build',
      body: 'Well-sealed buildings trap CO₂ and VOCs, and opening a window throws away the air you paid to condition. You need mechanical ventilation with energy recovery.',
    },
    {
      title: 'Allergies or asthma in the household',
      body: 'This changes the maths everywhere. Whole-home filtration at MERV 13 or above covers every room the system reaches, which portable units cannot.',
    },
    {
      title: 'Musty smell in summer',
      body: 'Usually humidity above 60% in a basement or crawlspace rather than anything in the ductwork. Measure before you buy anything.',
    },
  ],

  faqs: [
    {
      q: 'What is the difference between a purifier and a humidifier?',
      a: 'A purifier filters particles out of the air — dust, pollen, smoke, dander. A humidifier adds moisture to air that is too dry. They solve opposite problems, and in a Denver or Chicago winter a home may genuinely need both.',
    },
    {
      q: 'Do I need a purifier if I already have a good filter?',
      a: 'Standard one-inch filters at MERV 8–11 capture roughly 30–60% of airborne particulate. Whole-home media filtration at MERV 13+ captures far more, including smoke-range PM2.5. If nobody in the house has allergies, asthma or smoke exposure, the honest answer is that you may not need it.',
    },
    {
      q: 'What is an ERV and does my home need one?',
      a: 'An energy recovery ventilator brings fresh outside air in and exhausts stale air out while recovering most of the heat and humidity between the two streams. Older draughty homes ventilate themselves. Tight modern construction does not, and that is where an ERV earns its place.',
    },
    {
      q: 'Will a dehumidifier increase my electric bill?',
      a: 'Modestly — typically $5–15 a month during humid months. But dry air feels cooler, so the AC often runs less. Net impact is frequently close to a wash, and it prevents the mould remediation that costs far more.',
    },
    {
      q: 'Can I just upgrade my one-inch filter to MERV 13?',
      a: 'Possibly, but pressure drop on a one-inch MERV 13 is significant and can strain an older single-speed blower, reduce airflow and ice the coil. A proper four-inch media cabinet is the right way to upgrade filtration without the side effects. We verify your blower can handle it first.',
    },
  ],

  actions: [
    {
      slug: 'air-purifiers',
      name: 'Air Purifiers',
      title: 'Whole-home air purifiers and filtration.',
      lead: 'Media filtration at MERV 11–16 plus optional UV-C, installed on your existing system and sized so it does not choke the blower.',
      metaDescription:
        'Whole-home air purifier installation across 10 U.S. metros. MERV 11–16 media cabinets and UV-C, sized against your blower capacity.',
      cardBody:
        'Media filtration and UV-C on your existing system. Wildfire smoke, pollen, dander and construction dust.',
      cardFeatures: [
        'MERV 11–16 media cabinets',
        'Optional UV-C sterilisation',
        'Blower capacity verified first',
        'Most installs in half a day',
      ],
      itemsEyebrow: 'Why whole-home',
      itemsTitle: 'What proper filtration actually does.',
      items: [
        { title: 'Captures sub-micron particulate', body: 'MERV 13+ captures pollen, dander, mould spores and combustion soot down to 0.3 microns. A one-inch filter captures a fraction of that.' },
        { title: 'Every room, not one room', body: 'A portable unit cleans the room it sits in. Whole-home filtration covers every room the system reaches, which for most homes is a very different proposition.' },
        { title: 'Wildfire smoke', body: 'In Los Angeles, Denver and Phoenix this has moved from occasional to seasonal. Smoke-range PM2.5 needs MERV 13 as a floor.' },
        { title: 'Less strain, not more', body: 'Counterintuitively, a thick media filter has far more surface area than a one-inch, so despite the higher MERV it can actually reduce pressure drop.' },
        { title: 'Longer change intervals', body: 'A four-inch cabinet runs six to twelve months against one to three for a one-inch. Fewer changes, less chance of forgetting.' },
        { title: 'UV-C where it earns it', body: 'Correctly placed UV-C sterilises airborne organisms and keeps the coil clean. It is a secondary priority behind good media filtration, not a replacement for it.' },
      ],
      processEyebrow: 'What installation involves',
      processTitle: 'A clean retrofit to your existing system.',
      process: [
        { title: 'Measure the blower', body: 'Higher MERV means more pressure drop. We verify your blower can handle it before recommending anything — this is the step most quotes skip.' },
        { title: 'Size the cabinet', body: 'Four- or five-inch media cabinet upstream of the air handler, sized to your system rather than to whatever is on the van.' },
        { title: 'Install and seal', body: 'Cabinet fitted into the return, sealed properly so it filters air rather than letting it bypass. Most installs take half a day.' },
        { title: 'Verify airflow', body: 'Measured airflow after installation, so we know the upgrade improved filtration without starving the coil.' },
      ],
      costEyebrow: 'What affects the price',
      costTitle: 'Three decisions drive the number.',
      costDrivers: [
        { title: 'MERV rating', body: 'MERV 11 is the low-cost upgrade from a one-inch. MERV 13 is the sweet spot for most homes. MERV 16 is for severe allergies and needs blower verification.' },
        { title: 'Cabinet size and ductwork access', body: 'Most installs find the four to six inches of return-side space needed. A few require minor duct rework.' },
        { title: 'UV-C addition', body: 'Needs a small 120V circuit, usually pulled from the existing furnace circuit. A quick add-on rather than a separate project.' },
      ],
      prices: {
        title: 'Published install ranges.',
        rows: [
          { label: 'Media purifier, MERV 13, 4-inch cabinet', range: '$700 – $1,400' },
          { label: 'UV-C sterilisation add-on', range: '$300 – $600' },
          { label: 'Annual filter cost', range: '$60 – $120' },
        ],
        note: 'Filter change intervals run six to twelve months on a four-inch cabinet, shorter in pet households or high-particulate markets.',
      },
      faqs: [
        { q: 'Is whole-home really better than a portable HEPA?', a: 'For one room with the door shut, a portable unit wins. For everywhere else in the house, whole-home wins decisively — it covers every room the system reaches rather than one.' },
        { q: 'What MERV should I get?', a: 'MERV 13 for most homes: it captures pollen, dander, mould spores and smoke-range PM2.5. MERV 16 for severe allergies or immune-compromised households, with blower verification. MERV 11 as a low-cost step up from a one-inch.' },
        { q: 'Does UV-C actually do anything?', a: 'Properly sized and placed, yes — it sterilises airborne organisms and keeps the evaporator coil clean. The catch is dwell time and placement. We install it correctly or we tell you not to bother.' },
        { q: 'How often do I change the filter?', a: 'Six to twelve months on a four-inch cabinet, twelve on a five-inch. Pet households and high-particulate markets sit at the shorter end. If you are on a maintenance plan we check it at every visit.' },
      ],
    },

    {
      slug: 'humidifiers',
      name: 'Humidifiers',
      title: 'Whole-home humidifiers for dry winter air.',
      lead: 'Static shock, cracked hardwood, split trim and dry sinuses. Heated winter air drops below 20% relative humidity; comfortable is 35–45%.',
      metaDescription:
        'Whole-home humidifier installation across 10 U.S. metros. Bypass and steam systems with smart humidistat control, sized to your home.',
      cardBody:
        'Bypass and steam humidifiers on your existing system, with humidistat control that prevents window condensation.',
      cardFeatures: [
        'Bypass and steam options',
        'Smart humidistat integration',
        'Annual pad or descale service',
        'Most installs in half a day',
      ],
      itemsEyebrow: 'Why humidify',
      itemsTitle: 'What dry winter air actually costs you.',
      items: [
        { title: 'Protects wood and finishes', body: 'Hardwood floors, trim, furniture, instruments and art all suffer below 25% relative humidity. Cracking and shrinkage are cumulative and not reversible.' },
        { title: 'Reduces respiratory irritation', body: 'Dry air dries out nasal passages and airways, which makes colds and sinus problems worse and asthma harder to manage.' },
        { title: 'Lets you turn the thermostat down', body: 'Humidified air at 70°F feels like roughly 72°F at 20% humidity. Most homeowners drop a degree or two and feel the same.' },
        { title: 'Ends the static season', body: 'Static shock is a humidity symptom, not a flooring problem. It disappears above about 35%.' },
        { title: 'Denver and Chicago especially', body: 'Indoor humidity routinely falls below 15% in these markets. This is a comfort issue rather than a luxury.' },
        { title: 'Set-and-forget with the right control', body: 'A smart humidistat lowers the target on the coldest days automatically, so you get the benefit without condensation on the windows.' },
      ],
      processEyebrow: 'What installation involves',
      processTitle: 'A quick retrofit, with three pieces.',
      process: [
        { title: 'Pick bypass or steam', body: 'Bypass is simpler and cheaper and runs when the furnace runs. Steam is more precise, runs independently, and suits larger or open-plan homes.' },
        { title: 'Ductwork connection', body: 'Bypass mounts to the supply or return near the furnace; steam injects into the supply. Both need six to twelve inches of clear duct.' },
        { title: 'Water and drain', body: 'A quarter-inch cold water supply and a drain line for overflow or condensate, routed to a floor drain or condensate pump.' },
        { title: 'Control and commissioning', body: 'Humidistat installed and set, and target humidity tuned so you do not get condensation on cold nights.' },
      ],
      costEyebrow: 'What affects the price',
      costTitle: 'Type and home size do most of it.',
      costDrivers: [
        { title: 'Bypass versus steam', body: 'Bypass suits most homes under about 2,500 sq ft. Steam is the more reliable choice for larger homes, open-plan layouts, or where the furnace does not run enough to humidify via bypass.' },
        { title: 'Water hardness', body: 'Phoenix and Denver water is hard enough that steam units need proper scale management or annual descaling to last.' },
        { title: 'Control choice', body: 'A standalone humidistat works fine but is manual. An integrated smart control adjusts target humidity against outdoor temperature and prevents window condensation.' },
      ],
      prices: {
        title: 'Published install ranges.',
        rows: [
          { label: 'Bypass humidifier', range: '$500 – $900' },
          { label: 'Steam humidifier', range: '$1,500 – $2,500' },
          { label: 'Annual pad replacement or descale', range: '$50 – $150' },
        ],
        note: 'Bypass units suit most homes under 2,500 sq ft; steam is worth the difference on larger or open-plan homes.',
      },
      faqs: [
        { q: 'What humidity should I target?', a: '35–45% relative humidity for most homes. Below 30% you get dry-air symptoms; above 50% in winter you risk window condensation and mould. A smart humidistat lowers the target automatically on the coldest days.' },
        { q: 'Bypass or steam?', a: 'Bypass for most homes under about 2,500 sq ft — simpler, cheaper, reliable. Steam for larger homes, open-plan layouts, or well-insulated homes where the furnace does not run enough to humidify via bypass.' },
        { q: 'Do humidifiers grow mould?', a: 'Properly maintained bypass units do not — water flows through and out the drain rather than sitting. Steam units boil the water. The mould concern people have comes from old standing-water tabletop units, which is a different product entirely.' },
        { q: 'Will it fog up my windows?', a: 'Only if the target is set too high for the outdoor temperature. A smart humidistat handles this automatically. A manual one needs setting down on very cold days — we show you how.' },
      ],
    },

    {
      slug: 'dehumidifiers',
      name: 'Dehumidifiers',
      title: 'Whole-home dehumidifiers for humid climates.',
      lead: 'Cool but clammy air, musty basements, mould risk. Your AC cools; it was never designed to dry — and an oversized one dries even less.',
      metaDescription:
        'Whole-home dehumidifier installation across 10 U.S. metros. Ducted and standalone units for Houston, Miami and Atlanta humidity.',
      cardBody:
        'Whole-home units that run independently of the AC, so cooling and drying stop competing with each other.',
      cardFeatures: [
        'Ducted or standalone',
        '70–120+ pints per day',
        'Integrates with smart thermostats',
        'Most installs in half a day',
      ],
      itemsEyebrow: 'Why a dedicated unit',
      itemsTitle: 'Why your AC is not solving this.',
      items: [
        { title: 'Cooling and drying are different jobs', body: 'Your AC removes moisture only as a side effect of running long enough to condense it. Satisfy the thermostat early and you get cool, wet air.' },
        { title: 'Oversized systems make it worse', body: 'A system that reaches setpoint in eight minutes has not run long enough to dehumidify. This is the single most common cause we find in Houston.' },
        { title: 'Mould needs 60% to thrive', body: 'Basements, crawlspaces and closets often sit above that in summer even with the AC running. Holding 45–55% stops it.' },
        { title: 'Protects the building and contents', body: 'Wood furniture, books, electronics and drywall all degrade in chronic high humidity. Remediation costs far more than prevention.' },
        { title: 'Dry air feels cooler', body: 'Because it lets sweat evaporate. Many households raise the thermostat a degree after installing one and feel more comfortable.' },
        { title: 'Shoulder seasons especially', body: 'Spring and autumn are when the AC barely runs and humidity creeps up unnoticed. A dedicated unit covers that gap.' },
      ],
      processEyebrow: 'What installation involves',
      processTitle: 'Two configurations, one afternoon.',
      process: [
        { title: 'Measure first', body: 'We measure indoor relative humidity under normal operation before recommending anything. If you are under 55% you may not need this.' },
        { title: 'Ducted or standalone', body: 'Ducted integrates with the HVAC system and covers the whole house. Standalone targets a basement or a specific problem area and needs only power and a drain.' },
        { title: 'Drain routing', body: 'Gravity drain to a floor drain where possible; a small condensate pump where not. We plan this at the estimate rather than improvising.' },
        { title: 'Control integration', body: 'Where the thermostat supports it, we integrate so the dehumidifier and the AC are not fighting each other.' },
      ],
      costEyebrow: 'What affects the price',
      costTitle: 'Capacity, configuration and drainage.',
      costDrivers: [
        { title: 'Capacity in pints per day', body: 'Roughly 0.04–0.05 pints per day per square foot. A 2,500 sq ft home needs around 100–125 PPD. Basements alone usually need 70–90.' },
        { title: 'Ducted versus standalone', body: 'Ducted covers the whole home and integrates with the system. Standalone is cheaper and faster but targets one area.' },
        { title: 'Drain availability', body: 'A nearby floor drain costs nothing. Where there is not one, a condensate pump adds a modest amount.' },
      ],
      prices: {
        title: 'Published install ranges.',
        rows: [
          { label: 'Standalone basement dehumidifier', range: '$1,500 – $2,500' },
          { label: 'Ducted whole-home dehumidifier', range: '$2,500 – $4,000' },
          { label: 'Condensate pump, where needed', range: '$150 – $300' },
        ],
        note: 'Running cost is typically $80–200 a year. Most units draw 600–800 watts while running, similar to a high-end laptop.',
      },
      faqs: [
        { q: 'Does my AC not already dehumidify?', a: 'Somewhat — cooling condenses moisture as a side effect. But modern oversized systems reach setpoint before they have dehumidified adequately, which is exactly why the house feels cool and clammy. A separate unit decouples the two jobs.' },
        { q: 'What humidity should I target?', a: '45–55% in summer. Below 40% feels dry; above 60% feels muggy and risks mould. Most units default to 50%, which works well across our humid markets.' },
        { q: 'How big a unit do I need?', a: 'Roughly 0.04–0.05 pints per day per square foot, so a 2,500 sq ft home lands around 100–125 PPD. We measure on the estimate rather than guessing.' },
        { q: 'My basement has standing water. Will this fix it?', a: 'No. A dehumidifier handles ambient humidity, not water intrusion. If water is actually coming in — foundation leaks, drainage — you need waterproofing first. A dehumidifier complements that; it does not substitute for it.' },
      ],
    },

    {
      slug: 'ventilation',
      name: 'Ventilation (ERV/HRV)',
      title: 'Fresh-air ventilation for tight modern homes.',
      lead: 'Well-sealed buildings trap CO₂, VOCs and cooking odours. An ERV brings fresh air in and recovers most of the energy you already paid for.',
      metaDescription:
        'ERV and HRV ventilation systems across 10 U.S. metros. Sized to ASHRAE 62.2 for tight modern construction and deep renovations.',
      cardBody:
        'Energy and heat recovery ventilators sized to ASHRAE 62.2 — fresh air without throwing away conditioned air.',
      cardFeatures: [
        'ERV and HRV sizing',
        'ASHRAE 62.2 calculation',
        'Exterior penetrations included',
        'Most installs in 1–2 days',
      ],
      itemsEyebrow: 'Why mechanical ventilation',
      itemsTitle: 'Tight buildings need a deliberate air supply.',
      items: [
        { title: 'Old homes ventilated themselves', body: 'Draughty construction exchanged air constantly — inefficiently, but constantly. Modern sealed envelopes do not, and that changes the requirement.' },
        { title: 'CO₂ and VOC buildup', body: 'That stuffy feeling in a closed-up house in winter is measurable, not imagined. It is what happens when nothing is bringing fresh air in.' },
        { title: 'Recovers 70–90% of the energy', body: 'A heat-exchange core transfers heat between the outgoing and incoming streams, so fresh air arrives near room temperature rather than arctic.' },
        { title: 'ERV also moves humidity', body: 'An ERV transfers moisture as well as heat, which keeps winter air less dry and rejects summer humidity. For most U.S. climates it beats an HRV.' },
        { title: 'Required by modern code', body: 'Homes built or renovated to current energy code reference ASHRAE 62.2 for ventilation. Inspectors increasingly enforce it.' },
        { title: 'Cheap to run', body: 'An ERV draws roughly 50–100 watts continuously, similar to a small ceiling fan. The recovered energy more than offsets it in a tight home.' },
      ],
      processEyebrow: 'What installation involves',
      processTitle: 'A mid-sized retrofit, done properly.',
      process: [
        { title: 'ASHRAE 62.2 calculation', body: 'Sized on home volume and occupancy rather than a guess. Typical residential lands between 80 and 160 CFM.' },
        { title: 'ERV or HRV', body: 'ERV for most U.S. climates because it manages humidity as well as heat. HRV suits very cold, very dry markets.' },
        { title: 'Ductwork approach', body: 'Integrated shares your existing ductwork and costs less. Dedicated runs its own supply and exhaust for better distribution.' },
        { title: 'Exterior and controls', body: 'Two wall penetrations with proper hooding and screening, a small circuit, and a wall control or thermostat integration.' },
      ],
      costEyebrow: 'What affects the price',
      costTitle: 'Ductwork strategy is the main variable.',
      costDrivers: [
        { title: 'Integrated versus dedicated ducts', body: 'Integrated ties into existing ductwork and is materially cheaper. Dedicated ductwork distributes better but is a bigger project.' },
        { title: 'Exterior access', body: 'Two penetrations through the exterior wall with hooding. Straightforward in most homes; in a New York or Miami condo it needs board approval.' },
        { title: 'Smart controls', body: 'CO₂ and VOC sensors that ramp ventilation when air quality drops. A modest upgrade with a real day-to-day benefit.' },
      ],
      prices: {
        title: 'Published install ranges.',
        rows: [
          { label: 'Integrated ERV/HRV install', range: '$2,500 – $5,000' },
          { label: 'Dedicated-duct install', range: '$4,500 – $8,500' },
          { label: 'Annual running cost', range: '$50 – $120' },
        ],
        note: 'Sized to ASHRAE 62.2 rather than to a rule of thumb — oversizing wastes energy and undersizing leaves the air stuffy anyway.',
      },
      faqs: [
        { q: 'Do I really need mechanical ventilation?', a: 'If your home is well sealed — recent build, foam insulation, new windows — then yes. Older draughty homes ventilate themselves, with the energy penalty that comes with draughts. Modern tight construction genuinely needs a deliberate air supply.' },
        { q: 'ERV or HRV?', a: 'ERV for most U.S. climates. It transfers humidity as well as heat, which means less dry indoor air in winter and less incoming humidity in summer. HRV suits very cold, very dry markets where humidity transfer is not wanted.' },
        { q: 'Will it make my house cold in winter?', a: 'Properly sized, no. The recovery core captures 70–90% of the heat from outgoing air and transfers it to incoming, so fresh air arrives near room temperature. Some installs add a small pre-heater for extreme cold.' },
        { q: 'Is opening a window not the same thing?', a: 'It ventilates, but it throws away the heating or cooling you already paid for. Over a season the difference is substantial — which is the entire point of energy recovery.' },
      ],
    },
  ],
}
