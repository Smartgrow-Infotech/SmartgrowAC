import type { ServicePillar } from './types'

export const waterHeaters: ServicePillar = {
  slug: 'water-heaters',
  name: 'Water Heaters',
  eyebrow: 'Water Heaters',
  title: 'Water heater repair, replacement and tankless.',
  lead: 'Tank, tankless, hybrid heat pump and commercial. Right-sized to actual demand, with gas line and venting priced in the quote rather than discovered on install day.',
  metaDescription:
    'Water heater repair, maintenance and installation across 10 U.S. metros. Tank, tankless, hybrid heat pump. Gas line and venting scoped up front.',
  image: 'serviceWaterHeaters',
  intro:
    'SmartgrowInfotech repairs, maintains and installs water heaters across ten major U.S. metros — conventional tank, condensing tankless, hybrid heat pump and light commercial. We size to actual peak demand rather than to whatever came out, and we scope gas line capacity and venting at the estimate so a tankless conversion does not turn into a change order on install day.',

  actionsEyebrow: 'All water heater services',
  actionsTitle: 'Pick your path.',
  actionsLead:
    'Three ways we help, plus a deep dive if you are weighing up tankless.',

  problemsEyebrow: 'What we see most',
  problemsTitle: 'Common water heater problems.',
  problems: [
    { title: 'No hot water at all', body: 'Pilot out, failed gas valve, blown heating element or a tripped reset. On tankless, an error code that points straight at the cause.' },
    { title: 'Runs out too fast', body: 'Undersized for the household, sediment reducing effective capacity, a broken dip tube, or a failed lower element.' },
    { title: 'Leaking at the base', body: 'Water pooling under the tank itself usually means the liner has corroded through. That is a replacement, not a repair — and worth acting on before it floods.' },
    { title: 'Rumbling or popping', body: 'Sediment at the bottom of the tank insulating the burner. Steam pockets form underneath and collapse. A flush usually solves it if caught early.' },
    { title: 'Rusty or discoloured water', body: 'The anode rod has been consumed and the tank lining is now corroding. Replacing the rod in time can add years; leaving it cannot be undone.' },
    { title: 'Tankless error codes', body: 'Each manufacturer uses its own. Ignition failure, flame loss, flow sensor and scale-related limits are the common ones and all have known paths.' },
  ],

  faqs: [
    { q: 'How long should a water heater last?', a: 'Gas tank units 8–12 years, electric 10–15, tankless 18–25, hybrid heat pump 10–15. Hard water and skipped maintenance shorten all of these meaningfully — Phoenix and Denver especially.' },
    { q: 'Tank or tankless?', a: 'Tankless wins on lifespan, endless hot water and running cost; tank wins on upfront cost and install simplicity. If you are staying ten or more years, or you have multiple bathrooms, tankless usually wins on lifetime cost. Selling within a few years, it does not fully recoup.' },
    { q: 'How often should I flush the tank?', a: 'Annually. Sediment accumulates fastest in hard-water markets and it insulates the burner from the water, wasting gas and stressing the tank. It is a 30-minute job that adds years.' },
    { q: 'What is an anode rod?', a: 'A sacrificial metal rod inside the tank that corrodes instead of the tank lining. Once it is consumed — typically year three to six — the tank itself starts rusting. Replacing it at the right moment often adds five years for under $200.' },
    { q: 'Should I switch from electric to gas?', a: 'Usually yes if you already have gas service — it costs less to run per BTU and heats faster. If you do not have gas, a hybrid heat-pump electric unit cuts running cost roughly in half versus standard electric, which is often the better move.' },
  ],

  actions: [
    {
      slug: 'repair',
      name: 'Water Heater Repair',
      title: 'Water heater repair — tank and tankless.',
      lead: 'No hot water, leaks, rusty water and tankless error codes. Same-day diagnostic on most calls, across every major brand.',
      metaDescription:
        'Water heater repair across 10 U.S. metros. Tank, tankless and hybrid heat pump. Same-day diagnostic, honest repair-or-replace numbers.',
      cardBody: 'Tank, tankless and hybrid units. Same-day diagnostic on most calls, all major brands.',
      cardFeatures: ['Tank and tankless', 'All major brands', 'Honest repair-or-replace numbers', '24/7 emergency dispatch'],
      itemsEyebrow: 'Symptoms we diagnose',
      itemsTitle: 'Common water heater failures.',
      itemsLead: 'Tank and tankless fail differently. We service both, and the diagnostic path is different for each.',
      items: [
        { title: 'No hot water', body: 'Tank: pilot out, failed gas valve, blown element, tripped reset. Tankless: an error code that usually points straight at the cause.' },
        { title: 'Not enough hot water', body: 'Tank: undersized, broken dip tube, failed lower element. Tankless: scale limiting heat transfer, or undersized for simultaneous fixtures.' },
        { title: 'Leaking from the tank', body: 'A drip from a fitting is usually repairable. Standing water under the tank itself is a cracked liner and means replacement.' },
        { title: 'Rusty water', body: 'The anode rod is spent and the lining is corroding. Catching this early and swapping the rod can add years; leaving it cannot be undone.' },
        { title: 'Rumbling or popping', body: 'Sediment insulating the burner, with steam pockets forming underneath. A flush usually solves it — sometimes it is caught too late.' },
        { title: 'Tankless error codes', body: 'Navien, Rheem, Rinnai and Bosch each use their own. We carry the lookup tables and the diagnostic experience for all the major brands.' },
      ],
      processEyebrow: 'How a repair visit works',
      processTitle: 'Diagnose first. Quote next. Then fix.',
      process: [
        { title: 'Phone triage', body: 'Tank or tankless, brand, rough age and what it is doing. If there is active water on the floor we will walk you through shutting it off before we arrive.' },
        { title: 'On-site diagnostic', body: 'Full check rather than the loudest symptom — supply, gas or electrical, venting, controls and the tank or heat exchanger itself.' },
        { title: 'Written quote', body: 'Parts, labour and options in writing. If the tank is genuinely done we will say so rather than selling you a repair on it.' },
        { title: 'Repair and verify', body: 'Fixed, tested at the fixtures, and explained. Workmanship warranty on top of parts.' },
      ],
      costEyebrow: 'What affects the cost',
      costTitle: 'Type, fuel and age.',
      costDrivers: [
        { title: 'Tank versus tankless', body: 'Tank repairs — anode, element, dip tube, thermocouple — are usually quick and inexpensive. Tankless repairs such as a heat exchanger or control board run higher, but the unit also lasts far longer.' },
        { title: 'Fuel type', body: 'Gas units bring venting, pilot and gas-line considerations. Electric units bring elements and breaker issues. Different parts, different labour.' },
        { title: 'Age and warranty', body: 'Units under eight years often still carry parts warranty. Older ones sometimes need parts sourced — we will tell you on the phone.' },
      ],
      priceNote:
        'We do not publish repair prices. What we will tell you on the call is the diagnostic fee and roughly what a repair of that type usually runs.',
      faqs: [
        { q: 'Water is pooling under the tank. Is that repairable?', a: 'Usually not. A drip from the relief valve or a top fitting is repairable. Standing water under the tank itself means the liner has corroded through, and at that point replacement is the only real option — ideally before it floods.' },
        { q: 'What do tankless error codes mean?', a: 'Each manufacturer uses its own set. The common ones across brands are ignition failure, flame loss, flow sensor faults and scale-related limits. We carry the lookup tables for the major brands rather than guessing.' },
        { q: 'When should I replace instead of repair?', a: 'A tank under eight years with a single component failure is worth repairing. A tank at ten or more with rust or a leak at the base is not. Tankless is almost always worth repairing well past year fifteen.' },
        { q: 'Do you handle emergencies?', a: 'Yes. A failing water heater can do a lot of damage quickly, so it is treated as urgent. Dispatch is answered 24/7 and we will tell you how to isolate it while you wait.' },
      ],
    },

    {
      slug: 'maintenance',
      name: 'Water Heater Maintenance',
      title: 'Flushing, anode rods and tankless descaling.',
      lead: 'The cheapest way to add years to a water heater. Annual tank flush, anode inspection, and descaling on tankless in hard-water markets.',
      metaDescription:
        'Water heater maintenance across 10 U.S. metros. Annual tank flush, anode rod inspection and tankless descaling. Keeps your warranty valid.',
      cardBody: 'Annual flush, anode inspection and tankless descaling. Cheap work that adds years.',
      cardFeatures: ['Annual sediment flush', 'Anode rod inspection', 'Tankless descaling', 'Keeps warranty valid'],
      itemsEyebrow: 'Why annual service',
      itemsTitle: 'What yearly service actually does.',
      items: [
        { title: 'Removes sediment', body: 'Minerals settle to the bottom and the burner ends up heating sediment rather than water. Wasted gas, stressed tank. A flush takes about 30 minutes.' },
        { title: 'Anode rod prevents rust', body: 'The sacrificial rod corrodes instead of the tank. Inspect at year three to four and swap if spent — often five extra years for under $200.' },
        { title: 'Tankless scale prevention', body: 'Hard-water minerals coat the heat exchanger, blocking flow and cutting output. Annual descaling keeps it at full efficiency.' },
        { title: 'Keeps your warranty valid', body: 'Most manufacturers require documented annual service. Skipping it can turn a covered part claim into your problem.' },
        { title: 'Maintains efficiency', body: 'A flushed, scale-free unit uses noticeably less gas or electricity than a neglected one.' },
        { title: 'Catches small leaks early', body: 'Annual inspection finds loose fittings, slow drips and weak relief valves before they become flooded basements.' },
      ],
      processEyebrow: 'What we actually do',
      processTitle: 'Real flushing, real inspection, written findings.',
      process: [
        { title: 'Easy scheduling', body: 'Bundled with your HVAC tune-up where you are on a plan, so it is one visit rather than two.' },
        { title: 'Flush or descale', body: 'Tank: full sediment flush and drain-valve check. Tankless: cleaning solution pumped through the heat exchanger, around an hour.' },
        { title: 'Anode and safety check', body: 'Anode rod inspected, relief valve tested, fittings and venting checked, temperature verified.' },
        { title: 'Written findings', body: 'What we found, what we did, and what to expect next year — with measurements you can keep for warranty records.' },
      ],
      costEyebrow: 'What affects the price',
      costTitle: 'Type and water hardness.',
      costDrivers: [
        { title: 'Tank versus tankless', body: 'A tank flush is faster and cheaper. Tankless descaling involves pumping a cleaning solution through the heat exchanger and takes longer — but it is critical in hard-water markets.' },
        { title: 'Water hardness', body: 'Phoenix and Denver run hard enough that tankless descaling is annual rather than optional. Atlanta and Miami are comparatively soft. We test on the first visit.' },
        { title: 'Multi-unit contracts', body: 'Property managers with multiple units get a per-unit rate. Bundling with HVAC visits saves a truck roll.' },
      ],
      faqs: [
        { q: 'How often should I flush the tank?', a: 'Once a year in most markets. In hard-water metros like Phoenix and Denver, some buildings benefit from twice. Skipping it lets sediment shorten the tank life by years and waste gas in the meantime.' },
        { q: 'How often does a tankless need descaling?', a: 'Annually in most of our markets, every six months where water is notably hard. Tankless heat exchangers are sensitive to scale — neglected units lose output and fail much earlier.' },
        { q: 'When do I check the anode rod?', a: 'Year three to four, then every couple of years. Most tanks get one or two anode swaps over their life, and each one is far cheaper than a new tank.' },
        { q: 'Can you combine this with my HVAC service?', a: 'Yes, and it is the sensible way to do it. If you are on a maintenance plan we bundle the water heater service into the same visit — one truck roll, one set of paperwork.' },
      ],
    },

    {
      slug: 'installation-replacement',
      name: 'Install & Replace',
      title: 'Water heater installation and replacement.',
      lead: 'From a 40-gallon tank swap to a tankless conversion. Sized to actual peak demand, with gas line and venting scoped at the estimate.',
      metaDescription:
        'Water heater installation across 10 U.S. metros. Tank, tankless and hybrid heat pump, right-sized with gas line and venting scoped up front.',
      cardBody: 'Tank, tankless or hybrid heat pump, sized to your actual demand rather than to whatever came out.',
      cardFeatures: ['Sized to peak demand', 'Gas line and venting scoped', 'Permits included', 'Same-day on most tank swaps'],
      itemsEyebrow: 'When it is time to replace',
      itemsTitle: 'Signs the unit is at end of life.',
      items: [
        { title: '8 or more years (gas tank)', body: 'Gas tanks run 8–12 years, electric 10–15. Once you are in that window, repair money starts looking like money you will spend again shortly.' },
        { title: 'Rusty hot water', body: 'The anode is consumed and the lining is corroding through. Catching it early sometimes buys a year; usually it means replacement is close.' },
        { title: 'Leaking at the base', body: 'A cracked liner. Replace before it floods rather than after — this is the failure that damages finished spaces.' },
        { title: 'Cannot keep up', body: 'Showers going cold mid-rinse means undersized or fully sedimented. If a flush does not fix it, the tank is probably done.' },
        { title: 'Climbing energy bills', body: 'Old sedimented tanks waste 20–30% more energy than a modern condensing tankless. Over the remaining life that adds up.' },
        { title: 'Repeated repairs', body: 'Two or three calls in a year on the same unit usually means the rest is following. Replacing on your schedule beats replacing at 2am.' },
      ],
      processEyebrow: 'How a new install works',
      processTitle: 'From sizing to walkthrough.',
      process: [
        { title: 'Sizing the unit', body: 'Tank by household size and peak-hour demand. Tankless by GPM across simultaneous fixtures. We size to how you actually use hot water rather than replacing like for like.' },
        { title: 'Gas line and venting check', body: 'Tankless draws far more BTU while running than a tank. We measure existing line capacity and plan the venting route at the estimate, so it is a line item rather than a change order.' },
        { title: 'Permits and install', body: 'Permits pulled, old unit hauled, new unit set, connected and commissioned. Building access coordinated where needed.' },
        { title: 'Test and walkthrough', body: 'Tested at the fixtures, temperature verified, warranty registered, and a walkthrough so you know how it works.' },
      ],
      costEyebrow: 'What affects the price',
      costTitle: 'Type, fuel and what the new unit needs.',
      costDrivers: [
        { title: 'Tank versus tankless', body: 'An in-kind tank swap is same-day and predictable. A tankless conversion means new venting, often a gas-line upgrade, and water-line modification — a genuinely bigger project.' },
        { title: 'Gas line and venting upgrades', body: 'Older homes frequently have half-inch gas lines that need upgrading to three-quarter for tankless. Condensing units need PVC sidewall venting. Both quoted separately.' },
        { title: 'Building access', body: 'High-rise installs need freight elevator booking and sometimes after-hours work. We handle it, and it is priced visibly.' },
      ],
      prices: {
        title: 'Published install ranges.',
        rows: [
          { label: 'Tank replacement, in-kind', range: '$1,800 – $3,600' },
          { label: 'Tankless, in-kind replacement', range: '$4,200 – $6,200' },
          { label: 'Tank-to-tankless conversion', range: '$5,800 – $9,500' },
          { label: 'Hybrid heat-pump water heater', range: '$3,800 – $6,000' },
        ],
        note: 'Conversion pricing depends heavily on gas line capacity and venting route, which is exactly why we scope both at the estimate rather than on install day.',
      },
      faqs: [
        { q: 'Do I need a gas line upgrade for tankless?', a: 'Sometimes. A tankless draws far more BTU while running than a tank does — often 150,000–200,000 against 30,000–40,000. Older homes frequently have half-inch lines that need upgrading to three-quarter. We measure gas pressure at the estimate.' },
        { q: 'How long does installation take?', a: 'An in-kind tank swap is two to four hours. A new tank with code upgrades is half a day. A tank-to-tankless conversion with new venting and gas line is a full day. Tankless replacing tankless is half a day.' },
        { q: 'What size do I need?', a: 'Tank: 40 gallons for one to two people, 50 for three to four, 75 for five or more. Tankless: sized in GPM by simultaneous fixture use — typically 7–9 GPM for a two-bathroom home. We size on the estimate.' },
        { q: 'Is a hybrid heat-pump unit worth it?', a: 'If you have the space — it needs a moderately warm utility room or basement, not a closet — it cuts electric water-heating cost roughly in half. Upfront is higher but the savings are real, and tax credits often apply.' },
      ],
    },

    {
      slug: 'tankless-water-heaters',
      name: 'Tankless Water Heaters',
      title: 'Tankless water heaters — the long-term play.',
      lead: 'Endless hot water, an 18–25 year lifespan, and your floor space back. Higher upfront, and the maths usually wins if you are staying.',
      metaDescription:
        'Tankless water heater installation and service across 10 U.S. metros. Condensing units, tank-to-tankless conversions, gas line and venting handled.',
      cardBody: 'Condensing tankless installs and conversions. Endless hot water and roughly double the lifespan of a tank.',
      cardFeatures: ['Condensing units', 'Tank-to-tankless conversions', 'Gas line and venting handled', 'Federal 25C credit often applies'],
      itemsEyebrow: 'Why tankless',
      itemsTitle: 'What you actually get for the extra cost.',
      itemsLead: 'Tankless is not automatically right. Here is when it genuinely is.',
      items: [
        { title: 'Endless hot water', body: 'Back-to-back showers, dishwasher and laundry together. Sized correctly, you cannot run out — which is the whole point for a family.' },
        { title: 'Roughly double the lifespan', body: 'Tanks last 8–12 years, tankless 18–25 with maintenance. Over twenty years of ownership you buy one tankless instead of two or three tanks.' },
        { title: 'Lower running cost', body: 'No standby loss — you are not keeping 50 gallons hot around the clock. Most homes save 20–30% on water heating.' },
        { title: 'Reclaims floor space', body: 'A wall-mounted unit roughly the size of a small suitcase replaces a 50-gallon cylinder. In a tight Philadelphia or Chicago basement that matters.' },
        { title: 'Federal tax credit', body: 'The 25C credit applies to qualifying condensing units. Verify current amounts at purchase — these change annually.' },
        { title: 'Combi units do both jobs', body: 'A combi tankless heats domestic hot water and a hydronic heating system in one unit. For a rowhome with an ageing boiler, that is two replacements in one.' },
      ],
      processEyebrow: 'What installation involves',
      processTitle: 'A bigger project than a tank swap.',
      process: [
        { title: 'Assess existing infrastructure', body: 'Gas line capacity, venting route and water-line position. An in-kind tankless replacement is quick; a first-time conversion adds four to eight hours of work.' },
        { title: 'Gas line sizing', body: 'Often needs upgrading from half-inch to three-quarter. Quoted as its own line item so you can see it.' },
        { title: 'Venting and condensate', body: 'Condensing units need PVC sidewall venting plus a condensate drain. Non-condensing can reuse a chimney but is less efficient and does not qualify for the credit.' },
        { title: 'Commission and walkthrough', body: 'Tested across simultaneous fixtures, temperature set, warranty registered, and descaling schedule explained.' },
      ],
      costEyebrow: 'What affects the price',
      costTitle: 'Infrastructure, not the unit.',
      costDrivers: [
        { title: 'In-kind versus first conversion', body: 'Replacing an existing tankless is predictable. Converting from a tank means new venting, likely a gas-line upgrade and water-line changes.' },
        { title: 'Condensing versus non-condensing', body: 'Condensing runs 95%+ efficiency with PVC sidewall venting and qualifies for the tax credit. Non-condensing is cheaper upfront, runs at about 80%, and vents through the chimney.' },
        { title: 'Standard versus combi', body: 'A combi unit handles hot water and hydronic heating together. More expensive, but it can replace a boiler and a water heater in one go.' },
      ],
      prices: {
        title: 'Published install ranges.',
        rows: [
          { label: 'Tankless, in-kind replacement', range: '$4,200 – $6,200' },
          { label: 'First conversion from tank', range: '$5,800 – $9,500' },
          { label: 'With gas line upgrade and complex venting', range: '$7,000 – $9,500' },
          { label: 'Combi unit (hot water + hydronic heat)', range: '$8,000 – $13,000' },
        ],
        note: 'Federal 25C credits frequently apply to qualifying condensing units. Amounts change annually, so we confirm current figures at quote time rather than quoting stale numbers.',
      },
      faqs: [
        { q: 'Will it really never run out?', a: 'Sized correctly, yes — you can shower, run the dishwasher and have laundry going at once. Sized incorrectly you hit the GPM ceiling and it cannot keep up, which is where the bad reputation comes from. We size to actual fixture count and peak demand.' },
        { q: 'Condensing or non-condensing?', a: 'Condensing runs 95%+ efficiency, vents through PVC out a sidewall and qualifies for the federal credit. Non-condensing is cheaper upfront, around 80% efficient and reuses the chimney. Condensing usually repays the difference in five to seven years on gas savings.' },
        { q: 'What is a combi unit?', a: 'One unit that heats both your domestic hot water and a hydronic heating system. For a rowhome or two-flat with an ageing boiler that is due anyway, it replaces two appliances with one and frees the floor space of both.' },
        { q: 'How often does it need descaling?', a: 'Annually in most markets, every six months where water is notably hard. It takes about an hour and it is what gets you the 18–25 year lifespan rather than a premature heat-exchanger failure.' },
      ],
    },
  ],
}
