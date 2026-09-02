import type { Faq } from '@/components/sections/faq'
import type { Item } from '@/components/sections/blocks'
import type { ImageKey } from '@/content/images'

/**
 * Equipment pages.
 *
 * These answer "what is this and is it right for my building", which is a
 * different job from the service pages ("something is broken, help"). The
 * audience arrives comparing options, so every page names what the system is
 * genuinely bad at as well as what it is good at.
 */

export type SystemAudience = 'home' | 'building'

export type HvacSystem = {
  slug: string
  name: string
  navNote: string
  audience: SystemAudience
  title: string
  lead: string
  metaDescription: string
  image: ImageKey
  /** Plain-English explainer, two paragraphs. */
  whatItIs: string[]
  benefitsTitle: string
  benefits: Item[]
  brands: string[]
  sizingTitle: string
  sizing: Item[]
  installTitle: string
  install: Item[]
  prices?: { title: string; rows: { label: string; range: string }[]; note: string }
  faqs: Faq[]
}

export const systems: HvacSystem[] = [
  {
    slug: 'ductless-mini-splits',
    name: 'Ductless Mini-Splits',
    navNote: 'No ductwork required',
    audience: 'home',
    title: 'Ductless mini-splits — cooling and heating without ductwork.',
    lead: 'The right answer for older homes with no ducts, additions, converted attics, garages, and any room your existing system never reached.',
    metaDescription:
      'Ductless mini-split installation and service across 10 U.S. metros. Single and multi-zone systems for homes without ductwork. Manual J right-sized.',
    image: 'upgradeDuctless',
    whatItIs: [
      'A small outdoor condenser connects to one or more indoor heads through thin refrigerant lines about the diameter of a garden hose. The indoor head mounts on the wall, conditions that room directly, and drains condensate through a small line. No ductwork, no air handler closet, no tearing into finished walls.',
      'Each head has its own thermostat, so a bedroom can sit at 68 while the rest of the house stays at 74. Almost every modern unit is also a heat pump, which means one system covers both seasons rather than a separate furnace you use for six weeks.',
    ],
    benefitsTitle: 'Why ductless wins in older housing.',
    benefits: [
      { title: 'Built for buildings that never had ducts', body: 'Plaster walls, period mouldings and no chase to run a trunk line through. Line sets route through closets or exterior covers rather than through demolition.' },
      { title: 'True per-room control', body: 'Each head has its own thermostat. Central systems need zoning hardware to get anywhere close, and even then not per room.' },
      { title: 'Efficient in both directions', body: 'Modern units are heat pumps with SEER ratings well above conventional central, and no duct losses because there are no ducts.' },
      { title: 'Handles the rooms nothing else reaches', body: 'Converted attics, garages, sunrooms, ADUs and additions that the main system was never sized to cover.' },
      { title: 'Install without moving out', body: 'Most single-zone installs take one to two days and multi-zone two to three. You can generally stay in the house throughout.' },
      { title: 'The trade-off, stated plainly', body: 'The indoor head is visible — typically a 36-inch unit high on the wall. Some owners genuinely dislike it. Ceiling cassettes and floor-mount units help, and each has its own constraints.' },
    ],
    brands: ['Mitsubishi Electric', 'Daikin', 'Carrier', 'LG'],
    sizingTitle: 'Picking the right configuration.',
    sizing: [
      { title: 'Single-zone versus multi-zone', body: 'One outdoor unit per head is simpler and cheaper. One outdoor unit serving two to five heads saves outdoor space, which matters on a small lot or a condo balcony.' },
      { title: 'BTU per room', body: 'Each head is sized to its room rather than to a single guess. Roughly 9k BTU for a small bedroom, 12k for a living room, up to 24k for a large open space.' },
      { title: 'Head style and placement', body: 'Wall-mount is standard. Ceiling cassettes suit finished ceilings, floor-mount works under windows, and ducted cassettes hide the unit in a soffit.' },
      { title: 'Outdoor unit placement', body: 'Rear yard, side of the building, balcony or roof. This affects line-set length, noise, condensate routing and, in condos, whether the board will approve it.' },
    ],
    installTitle: 'What installation actually involves.',
    install: [
      { title: 'Line-set routing', body: 'From the outdoor unit to each head. Short straight runs are simple; multi-floor runs through closets or exterior covers take planning, and we design it at the estimate so you see what will be visible.' },
      { title: 'Electrical', body: 'Most installs need a dedicated circuit and often a small panel addition. We coordinate with a licensed electrician where the service needs upgrading.' },
      { title: 'Permits and approvals', body: 'Most markets require an electrical permit. Condo and co-op buildings usually need board approval for exterior unit placement — we handle the paperwork.' },
    ],
    prices: {
      title: 'Published install ranges.',
      rows: [
        { label: 'Single-zone', range: '$4,500 – $8,000' },
        { label: 'Two to three zones', range: '$9,000 – $15,000' },
        { label: 'Four or more zones', range: '$15,000 – $22,000' },
      ],
      note: 'Multi-zone systems cost more than most people expect once head count, line-set routing and electrical are included. We quote the routing at the estimate rather than discovering it on install day.',
    },
    faqs: [
      { q: 'Why ductless instead of central AC?', a: 'If your home has no ductwork, ductless is dramatically less invasive and usually cheaper than retrofitting ducts. You also get true per-room control, which central cannot do without zoning hardware. In Los Angeles and Philadelphia it is the right answer most of the time.' },
      { q: 'Can the line sets be hidden?', a: 'Yes, and that is most of our installs. Common routes are through closets, behind crown moulding, inside built-in cabinetry, or in exterior line-set covers painted to match the trim. We design the routing at the estimate so you see exactly what will be visible.' },
      { q: 'Are ductless units also heat pumps?', a: 'Almost all modern units, yes. You get cooling in summer and heating in winter from the same equipment. Some older or budget models are cooling-only; we spec heat-pump capable unless you specifically want otherwise.' },
      { q: 'How long does a multi-zone install take?', a: 'Two to three days typically. Day one is the outdoor unit and line-set routing, day two the indoor heads, electrical and commissioning. You can usually stay in the house throughout.' },
      { q: 'Which brand do you recommend?', a: 'Mitsubishi Electric and Daikin lead for residential — reliable, quiet, well supported. Mitsubishi Hyper-Heat is the pick where winters are genuinely cold. We spec what fits the application rather than what a dealer agreement rewards.' },
    ],
  },

  {
    slug: 'heat-pumps',
    name: 'Heat Pumps',
    navNote: 'One system, both seasons',
    audience: 'home',
    title: 'Heat pumps — one system for heating and cooling.',
    lead: 'Cold-climate models hold full output down to about 5°F. Federal and utility incentives are real. For most replacement projects this is now the default question.',
    metaDescription:
      'Heat pump installation across 10 U.S. metros. Cold-climate ducted and ductless systems, Manual J sized, incentives identified up front.',
    image: 'upgradeHeatPump',
    whatItIs: [
      'A heat pump is the same equipment as your air conditioner — refrigerant cycle, outdoor compressor, indoor coil — with the ability to run in reverse. In summer it moves heat from inside the house to outside. In winter it moves heat from outside air to inside, because even cold air contains usable heat.',
      'Modern cold-climate models deliver full rated capacity down to roughly 5°F, which covers the large majority of a Denver or Chicago winter. Below that threshold most installs bring in a modest backup — typically a handful of days a year. The reputation heat pumps have for struggling in cold weather comes from older base models that lost capacity below 30°F.',
    ],
    benefitsTitle: 'The case for a heat pump now.',
    benefits: [
      { title: 'One piece of equipment, both seasons', body: 'Replaces the AC and the furnace with a single system. Less mechanical space, one maintenance schedule, no gas line concerns in a tight basement.' },
      { title: 'Incentives are substantial', body: 'Federal 25C credits plus state and utility programs often take thousands off. The programs differ in every metro and we identify what applies to you.' },
      { title: 'Cheap to run where you also need cooling', body: 'You were buying a compressor for the cooling season anyway. Getting heat from it too is close to free capacity.' },
      { title: 'Works with existing ductwork', body: 'If you have forced-air ductwork in reasonable condition, a ducted heat pump can generally reuse it with minor modification.' },
      { title: 'Future-proof against fuel changes', body: 'Runs on electricity, which gets cleaner as the grid does, and avoids new gas hookups where codes are tightening.' },
      { title: 'Where it is not the answer', body: 'If you have very cheap gas and a furnace with years left, replacing it early rarely pays. We will tell you that rather than selling the upgrade.' },
    ],
    brands: ['Mitsubishi Electric', 'Daikin', 'Carrier', 'Trane'],
    sizingTitle: 'Sizing needs more care than cooling.',
    sizing: [
      { title: 'Ducted or ductless', body: 'Ductless suits homes with no ductwork and gives per-room control. Ducted reuses existing ductwork with a central air handler, like central AC that also heats.' },
      { title: 'Cold-climate capacity', body: 'Standard models lose output below 30°F. Cold-climate models hold full capacity to about 5°F. In Denver, Chicago, Philadelphia and New York you want the cold-climate model, not the base one.' },
      { title: 'Backup heat decision', body: 'Most installs include electric resistance backup, or keep an existing gas furnace for a hybrid setup. Backup runs perhaps five to ten days a year. We size it honestly rather than pretending it is never needed.' },
      { title: 'Load calculation matters more', body: 'Heating load is usually larger than cooling load in northern markets. We size to cover heating and then verify cooling capacity is adequate. Skipping this is how heat pumps end up undersized and get blamed for it.' },
    ],
    installTitle: 'What installation involves.',
    install: [
      { title: 'Electrical service', body: 'Larger units sometimes need a service upgrade, often to a 200A panel. We coordinate a licensed electrician and quote it as a visible line item rather than a surprise.' },
      { title: 'Refrigerant lines and air handling', body: 'Ductless means line sets to each head. Ducted means an indoor air handler plus supply and return connections. We design around existing routing where it exists.' },
      { title: 'Defrost and condensate', body: 'Heat pumps defrost the outdoor coil periodically in winter, which produces water that has to be routed away from the foundation. In Denver and Chicago that planning matters.' },
    ],
    prices: {
      title: 'Published install ranges, before incentives.',
      rows: [
        { label: 'Ductless heat pump, single-zone', range: '$5,500 – $9,000' },
        { label: 'Ductless heat pump, multi-zone', range: '$12,000 – $22,000' },
        { label: 'Ducted heat pump (existing ductwork)', range: '$12,000 – $20,000' },
        { label: 'Electrical service upgrade, where needed', range: '$1,500 – $3,000' },
      ],
      note: 'Federal 25C credits and utility rebates frequently reduce these meaningfully, and the programs differ in every metro. Amounts change annually, so we confirm current figures at quote time rather than quoting stale numbers.',
    },
    faqs: [
      { q: 'Do heat pumps really work in cold winters?', a: 'Modern cold-climate models do — full capacity to around 5°F, which covers most of a Denver or Chicago winter. Below that a modest backup takes over for a handful of days. Older base models struggled below 30°F, which is where the reputation came from.' },
      { q: 'Do I need backup heat?', a: 'In cold markets, yes, and we recommend it. Either electric resistance in a ducted air handler or keeping your existing gas furnace for a hybrid setup. It runs perhaps five to ten days a year — cheap insurance.' },
      { q: 'Heat pump or gas furnace — which is cheaper to run?', a: 'It depends on local gas and electricity rates. In most of our markets a cold-climate heat pump runs roughly level with gas, with the bonus that it also handles cooling. A hybrid setup switches between the two based on outdoor temperature for the lowest cost.' },
      { q: 'Can I reuse my existing ductwork?', a: 'Usually yes, with possible minor modifications. If you have a forced-air furnace, the ductwork is generally heat-pump compatible. We inspect and measure airflow at the estimate rather than assuming.' },
      { q: 'How long do heat pumps last?', a: 'Ductless cold-climate units 15–20 years, ducted central units 12–18. Both are shorter than a gas furnace, but they run year-round rather than one season — you are getting far more operating hours out of them.' },
    ],
  },

  {
    slug: 'central-hvac-systems',
    name: 'Central HVAC',
    navNote: 'Traditional split systems',
    audience: 'home',
    title: 'Central HVAC — split systems and ducted comfort.',
    lead: 'Traditional AC plus furnace, or an all-electric ducted heat pump. The right choice where good ductwork already exists.',
    metaDescription:
      'Central HVAC installation and replacement across 10 U.S. metros. Split-system AC and furnace, ducted heat pumps, Manual J right-sized.',
    image: 'serviceAc',
    whatItIs: [
      'An outdoor condenser connects through refrigerant lines to an indoor air handler or furnace, and conditioned air is distributed through ductwork to registers in each room, with returns pulling air back to be filtered and re-conditioned. One thermostat controls the whole system.',
      'Where ductwork already exists and is in reasonable condition, central is hard to beat on cost per ton and on whole-home filtration. Where it does not exist, retrofitting it into finished walls is usually more disruptive and more expensive than going ductless.',
    ],
    benefitsTitle: 'When central is the right call.',
    benefits: [
      { title: 'Even whole-home comfort', body: 'Mature ductwork delivers conditioned air to every room consistently once it is properly sized and balanced.' },
      { title: 'Whole-house filtration', body: 'Filtration happens at the air handler, so a single media cabinet upgrade covers every room. Ductless cannot do this.' },
      { title: 'Simple to service', body: 'One piece of equipment per season rather than four to six ductless heads. Annual maintenance is quicker and cheaper.' },
      { title: 'Lowest cost per ton', body: 'If the ductwork is already there, central is generally the cheapest way to condition a whole house.' },
      { title: 'Humidity control at the coil', body: 'A properly sized system with a variable-speed blower dehumidifies well, which matters enormously in Houston and Atlanta.' },
      { title: 'Where it is not the answer', body: 'No ductwork and finished plaster walls. Retrofitting ducts there costs more and looks worse than ductless. We will say so.' },
    ],
    brands: ['Carrier', 'Trane', 'Lennox', 'Rheem'],
    sizingTitle: 'Getting the specification right.',
    sizing: [
      { title: 'Manual J load calculation', body: 'Square footage, insulation, window area and orientation, infiltration and ductwork. Rule-of-thumb sizing is how systems end up oversized, short-cycling and dehumidifying badly.' },
      { title: 'Single-stage versus variable-speed', body: 'Single-stage is on or off at full output. Variable-speed runs at low capacity most of the time — quieter, dehumidifies far better, uses less energy. Costs about 20% more and usually earns it back.' },
      { title: 'Ductwork condition', body: 'Leaky or undersized ductwork will sabotage a brand-new system. We test rather than assume. In Atlanta, sealing crawlspace duct is frequently a better investment than new equipment.' },
      { title: 'Matched tiers', body: 'If you are replacing both halves, the AC and furnace should be compatible tiers. Pairing a single-stage furnace with a variable-speed condenser wastes most of the benefit.' },
    ],
    installTitle: 'What installation involves.',
    install: [
      { title: 'Ductwork assessment', body: 'Sound, reasonably sealed ductwork means a fast in-place replacement. Leaky runs or extensions into new space add days and budget — we measure and quote both routes.' },
      { title: 'Electrical and gas', body: 'A new condenser may need a larger circuit; a condensing furnace needs gas pressure verified and sometimes a line upgrade. Both handled as part of the install.' },
      { title: 'Permits and inspections', body: 'Required for gas, electrical and most equipment swaps. We pull them and schedule the inspection.' },
    ],
    prices: {
      title: 'Published install ranges.',
      rows: [
        { label: 'AC replacement (existing ductwork)', range: '$7,000 – $13,500' },
        { label: 'Furnace replacement', range: '$5,500 – $11,000' },
        { label: 'Matched AC + furnace replacement', range: '$11,000 – $20,000' },
        { label: 'Full system with new ductwork', range: '$16,000 – $28,000' },
      ],
      note: 'Ductwork condition is the largest single variable. We test airflow and leakage at the estimate, because a new system on bad ductwork underperforms and you will blame the equipment.',
    },
    faqs: [
      { q: 'Central or ductless?', a: 'Central wins where ductwork already exists and is sound — better whole-home filtration, simpler servicing, lower cost per ton. Ductless wins for retrofits into homes with no ducts and for per-room control. The building usually decides, not preference.' },
      { q: 'Replace just the AC, just the furnace, or both?', a: 'If both are twelve or more years old, replacing as a matched system saves on labour and gives you compatible equipment. If one is much newer, a phased approach can make sense. We will lay out both.' },
      { q: 'Is variable-speed worth the upgrade?', a: 'For most homes, yes — particularly if anyone is home during the day. It runs at low capacity most of the time, dehumidifies far better than single-stage, and is dramatically quieter. Around 20% more upfront, recovered over the system life.' },
      { q: 'Will my existing ductwork work?', a: 'Usually with minor modifications. We measure airflow and check for leakage rather than assuming. Older systems sometimes need new returns added; a full redesign is rare in well-built homes.' },
      { q: 'How long will a new system last?', a: 'Central AC 12–15 years, and up to 20 for variable-speed. High-efficiency furnaces 15–20, variable-speed gas furnaces 20+. Annual maintenance extends all of these meaningfully — and in Phoenix, subtract a few years.' },
    ],
  },

  {
    slug: 'zoning-systems',
    name: 'Zoning Systems',
    navNote: 'Room-by-room control',
    audience: 'home',
    title: 'Zoning — different temperatures, one system.',
    lead: 'The fix for the hot upstairs and the cold basement, without running two systems or replacing the one you have.',
    metaDescription:
      'HVAC zoning systems across 10 U.S. metros. Motorised dampers and per-zone thermostats retrofitted to existing central systems.',
    image: 'upgradeZoning',
    whatItIs: [
      'Motorised dampers are installed in your ductwork, one set per zone, and each zone gets its own thermostat. A control panel decides which dampers open and close based on which zone is calling for air, so conditioned air goes only where it is needed.',
      'The result is cooling the upstairs bedrooms at night without freezing the downstairs, or heating a basement office without overheating the top floor — from one system rather than two, and at a fraction of what a multi-zone ductless retrofit would cost.',
    ],
    benefitsTitle: 'Why multi-storey homes need it.',
    benefits: [
      { title: 'Solves stack effect', body: 'Warm air rises. A single thermostat on one floor will always be lying to the system about the others. Zoning gives each floor its own truth.' },
      { title: 'Far cheaper than multi-zone ductless', body: 'Zoning an existing central system runs $2,500–$5,500 for two or three zones. A multi-zone ductless retrofit is $12,000+.' },
      { title: 'Uses the ductwork you have', body: 'No new line sets, no exterior unit work. Dampers, wiring and thermostats — most retrofits are one to two days.' },
      { title: 'Cuts energy waste', body: 'You stop conditioning rooms nobody is in, which on a three-storey home is a meaningful share of the runtime.' },
      { title: 'Ends the thermostat argument', body: 'Genuinely the most common reason people call about this. Different people, different floors, different preferences.' },
      { title: 'Where it is not the answer', body: 'If the system runs constantly and still never gets cold enough, that is a sizing or ductwork problem, not a zoning problem. Zoning will not fix it and we will tell you so.' },
    ],
    brands: ['Honeywell', 'Ecobee', 'Carrier', 'Trane'],
    sizingTitle: 'Designing the zones.',
    sizing: [
      { title: 'How many zones', body: 'Two (upstairs/downstairs) or three (basement/main/upper) covers most homes. Four or more starts hitting airflow limits unless the system was designed for it.' },
      { title: 'Bypass damper', body: 'When only one small zone calls, the blower can over-pressurise the ducts. A bypass relieves it, protecting the blower and cutting noise. Most retrofits need one.' },
      { title: 'Variable-speed blower', body: 'If you are also replacing the system, a variable-speed blower is ideal for zoning — it ramps airflow to match how many zones are open, so the bypass does less work.' },
      { title: 'Smart thermostat integration', body: 'Ecobee and Honeywell integrate cleanly with most zoning panels, giving app control and per-zone scheduling. Worth the small upgrade if you are zoning anyway.' },
    ],
    installTitle: 'What installation involves.',
    install: [
      { title: 'Mapping the ductwork', body: 'We map your duct layout and identify where dampers go, usually at the trunk-line takeoffs to each floor. Cleaner layouts cost less to zone.' },
      { title: 'Blower capacity check', body: 'We verify your existing blower can handle the zoning logic. Most modern blowers handle two or three zones easily; older single-speed units may need a bypass or a minimum-airflow limit.' },
      { title: 'Control wiring', body: 'Thermostat wiring runs from each zone back to the control panel near the air handler, usually through existing pathways rather than new drywall work.' },
    ],
    prices: {
      title: 'Published install ranges.',
      rows: [
        { label: 'Two-zone retrofit', range: '$2,500 – $4,000' },
        { label: 'Three-zone retrofit', range: '$3,500 – $5,500' },
        { label: 'Added during a new system install', range: '$1,500 – $3,500' },
      ],
      note: 'Adding zoning while replacing the system is $1,000–$2,500 cheaper than retrofitting it later, because the labour overlaps. Worth deciding before you replace rather than after.',
    },
    faqs: [
      { q: 'Will zoning fix my hot upstairs?', a: 'If the problem is that different rooms want different temperatures, yes. If the system runs constantly and never gets cold enough anywhere, that is sizing or ductwork and zoning will not fix it. We diagnose which one you have before quoting.' },
      { q: 'Zoning or multi-zone ductless — which is cheaper?', a: 'Zoning an existing central system is $2,500–$5,500. A multi-zone ductless retrofit is $12,000–$22,000. If you already have central HVAC with reasonable ductwork, zoning is dramatically cheaper. If you have no ductwork, ductless is the only realistic option.' },
      { q: 'Can I add zoning to my existing system?', a: 'Usually, if the system is in reasonable shape with accessible ductwork. We inspect at the estimate — a very old or undersized system is often not worth zoning until it is replaced.' },
      { q: 'Do smart thermostats work with zoning?', a: 'Ecobee and Honeywell integrate cleanly with most zoning panels. Nest is more limited and needs workarounds with some. We spec what works with your specific panel rather than what you already own.' },
      { q: 'Does zoning change my maintenance?', a: 'Barely. Same annual tune-up on the central system, plus a quick check on damper actuators and zone communication — maybe ten extra minutes. Our maintenance plans cover zoned systems at the same price.' },
    ],
  },

  {
    slug: 'smart-thermostats',
    name: 'Smart Thermostats',
    navNote: 'Installed and paired properly',
    audience: 'home',
    title: 'Smart thermostats — installed and actually paired right.',
    lead: 'Ecobee and Honeywell, wired correctly to your specific equipment. Including two-stage, heat pump and ductless systems where a DIY install usually goes wrong.',
    metaDescription:
      'Smart thermostat installation across 10 U.S. metros. Ecobee and Honeywell, correctly wired for two-stage, heat pump and zoned systems.',
    image: 'upgradeThermostat',
    whatItIs: [
      'A smart thermostat replaces your existing control with one that schedules itself, responds to occupancy, and can be adjusted from a phone. The hardware is inexpensive and widely available. What is not straightforward is wiring it correctly to equipment more complex than a single-stage furnace.',
      'Two-stage and modulating systems, heat pumps with backup heat, dehumidifier integration and zoning panels all need specific configuration. Getting it wrong is why so many people end up with backup heat running constantly, or a two-stage system that only ever uses one stage. That configuration step is most of what we are actually doing.',
    ],
    benefitsTitle: 'What a correctly configured thermostat buys you.',
    benefits: [
      { title: 'Backup heat stops running unnecessarily', body: 'The single most expensive misconfiguration on a heat pump. Set up correctly, electric backup engages only when it genuinely needs to.' },
      { title: 'Both stages actually get used', body: 'A two-stage system wired as single-stage runs at full output constantly. You paid for the modulation; this is how you get it.' },
      { title: 'Dehumidification control', body: 'On systems that support it, the thermostat can call for longer, lower-speed runtime to dry the air. Genuinely valuable in Houston, Miami and Atlanta.' },
      { title: 'Remote sensors fix uneven rooms', body: 'Ecobee remote sensors let the system average or prioritise specific rooms, which solves a lot of complaints without hardware changes.' },
      { title: 'Real scheduling and reporting', body: 'Usage reporting that shows what your system is actually doing, which is how you find problems before they become failures.' },
      { title: 'The honest caveat', body: 'On a simple single-stage furnace with a C-wire present, this is genuinely a DIY job and we will tell you so rather than charging for an hour of work.' },
    ],
    brands: ['Ecobee', 'Honeywell'],
    sizingTitle: 'What determines the right choice.',
    sizing: [
      { title: 'Your equipment type', body: 'Single-stage, two-stage, modulating, heat pump with backup, or ductless — each needs different wiring and configuration. This is the decision, not the brand.' },
      { title: 'C-wire availability', body: 'Smart thermostats need constant power. Many older homes have no common wire, which means either running one or fitting an adapter at the board.' },
      { title: 'Zoning panel compatibility', body: 'Ecobee and Honeywell integrate with most zoning panels. Nest is more limited. If you are zoned, this constrains the choice.' },
      { title: 'Remote sensors', body: 'Worth it if you have rooms that run consistently hot or cold. Lets the system average across rooms rather than obeying one wall.' },
    ],
    installTitle: 'What installation involves.',
    install: [
      { title: 'Wiring assessment', body: 'We check what wiring you actually have, including whether a common wire exists. This is where most DIY installs get stuck.' },
      { title: 'Equipment configuration', body: 'Staging, heat-pump backup thresholds, dehumidification and zone integration configured for your specific system rather than left on defaults.' },
      { title: 'Verification', body: 'We cycle the system through every mode and confirm each stage and the backup engage when they should — not just that the screen lights up.' },
    ],
    prices: {
      title: 'Published install ranges.',
      rows: [
        { label: 'Thermostat install (C-wire present)', range: '$150 – $300' },
        { label: 'With C-wire run or adapter', range: '$250 – $500' },
        { label: 'Heat pump or two-stage configuration', range: '$250 – $450' },
        { label: 'Zoned system, per zone', range: '$200 – $350' },
      ],
      note: 'Hardware is usually purchased separately and we are happy to install one you already own. On a simple single-stage system with a C-wire, this is a genuine DIY job and we will say so.',
    },
    faqs: [
      { q: 'Can I not just install this myself?', a: 'On a single-stage furnace with a C-wire present, yes — and we will tell you that rather than charging for an hour. Where it goes wrong is heat pumps with backup heat, two-stage equipment and zoned systems, which need configuration beyond wiring.' },
      { q: 'What is a C-wire and do I need one?', a: 'The common wire provides constant power, which smart thermostats need. Many older homes do not have one. The fix is either running a new wire or fitting an adapter at the control board — we check which is practical at the visit.' },
      { q: 'Why is my backup heat running all the time?', a: 'Almost always thermostat configuration rather than a fault. A heat pump wired or configured as conventional heat brings in expensive electric backup far too early. It is one of the most common problems we correct.' },
      { q: 'Ecobee or Honeywell?', a: 'Both are excellent and both integrate well with zoning. Ecobee has the better remote-sensor system, which matters if you have rooms that run hot or cold. We spec against your equipment rather than a preference.' },
      { q: 'Will it work with my ductless system?', a: 'Ductless systems usually use their own controls rather than a conventional thermostat. Some support integration through an adapter. We will tell you honestly whether it is worth it for your specific units.' },
    ],
  },

  {
    slug: 'ptac-units',
    name: 'PTAC Units',
    navNote: 'Hotels & high-rise condos',
    audience: 'building',
    title: 'PTAC units — hotels, condos and high-rise apartments.',
    lead: 'Self-contained through-wall units. Fast swaps when the sleeve is sound, and per-unit programs for buildings running dozens of them.',
    metaDescription:
      'PTAC replacement and service across 10 U.S. metros. Hotel and high-rise condo programs with per-unit pricing and board coordination.',
    image: 'serviceIaq',
    whatItIs: [
      'PTAC stands for Packaged Terminal Air Conditioner — a self-contained heating and cooling unit that slides into a metal sleeve through an exterior wall. Compressor, coil, fan, heat and controls all sit in one chassis. No outdoor condenser, no refrigerant lines, no ductwork.',
      'Most older high-rise apartments, condos and hotels use them, because each unit is independent: one failed PTAC affects one room rather than the building. That independence is exactly what makes them practical at scale and why property managers standardise on them.',
    ],
    benefitsTitle: 'Why buildings standardise on PTAC.',
    benefits: [
      { title: 'One unit, one room, one failure', body: 'A failed PTAC affects that room only. Nothing else in the building goes down with it — which is the entire reason they dominate multi-unit residential.' },
      { title: 'Fast replacement', body: 'Where the sleeve is sound, a swap is a one to two hour job with no refrigerant work and no exterior access. Whole floors can be done in a day.' },
      { title: 'Low cost per unit', body: 'A PTAC is a fraction of what a ductless or central system costs per room, which is what makes outfitting a 100-room hotel viable.' },
      { title: 'Independent billing and control', body: 'Each occupant runs and pays for their own unit. No shared plant, no allocation arguments.' },
      { title: 'Predictable program economics', body: 'Hotels typically replace on a rolling six to eight year cycle. That is a budgetable line item rather than a series of emergencies.' },
      { title: 'The trade-offs', body: 'Noisier and less efficient than a ductless or water-source system, and the wall penetration is fixed. For a single-family home it is rarely the right answer.' },
    ],
    brands: ['Friedrich', 'Amana', 'GE', 'LG'],
    sizingTitle: 'Specifying correctly.',
    sizing: [
      { title: 'BTU per room', body: '7,000 BTU for small bedrooms, 9,000–12,000 for living rooms and master suites, 15,000+ for larger combined spaces. Oversizing hurts dehumidification; undersizing means constant running.' },
      { title: 'Heat type', body: 'Electric resistance is cheapest to buy and most expensive to run. Heat-pump PTAC is more efficient but falls back to resistance below about 35°F. Hydronic works where the building has a loop.' },
      { title: 'Voltage', body: '208V or 230V is determined by the building, not by preference. Wrong voltage damages equipment, so we verify before ordering — every time.' },
      { title: 'Sleeve compatibility', body: 'Most units use a standard 42-inch by 16-inch sleeve, but 1970s and 80s buildings sometimes have non-standard ones. A sound sleeve means a fast swap; a corroded one changes the job substantially.' },
    ],
    installTitle: 'What replacement involves.',
    install: [
      { title: 'Sleeve condition', body: 'Sound sleeve means a same-visit swap with no exterior work. A rusted or damaged sleeve needs replacing, which means working from outside — a materially bigger job we quote separately.' },
      { title: 'Electrical verification', body: 'Circuit and voltage confirmed before ordering. We occasionally find wiring problems left by a previous DIY install, and we quote that before touching it.' },
      { title: 'Building coordination', body: 'Most condo and co-op buildings need board approval and freight elevator booking. We handle the paperwork rather than handing it back to you.' },
    ],
    prices: {
      title: 'Published install ranges.',
      rows: [
        { label: 'Single PTAC replacement (sleeve intact)', range: '$1,600 – $2,800' },
        { label: 'Sleeve replacement, additional', range: '$400 – $1,000' },
        { label: 'Multi-unit program pricing', range: 'Per-unit, below single-unit rate' },
      ],
      note: 'Buildings replacing in batches get per-unit pricing well below the single-unit rate, scheduled during low-occupancy windows. Ask about a rolling replacement program rather than replacing reactively.',
    },
    faqs: [
      { q: 'How long do PTACs last?', a: 'Seven to ten years in normal residential use. Hotel and high-use commercial units often need replacing at five to seven, because they run far more hours per day.' },
      { q: 'Replace or repair?', a: 'Under six years with a single component failure — capacitor, fan motor, thermostat — repair usually wins. Eight or more years with a compressor or refrigerant problem, replace: the repair costs more than the unit is worth.' },
      { q: 'Do I need board approval?', a: 'In most condo buildings, yes, even for a like-for-like swap. The board wants to know who is doing the work, that they are insured, and in some buildings that the unit matches the building spec. We handle that coordination.' },
      { q: 'Do you do whole-building programs?', a: 'Yes, and it is a significant part of our commercial work. Per-unit pricing below the single-unit rate, scheduled in batches, with either one invoice or per-unit reports depending on what your accounting needs.' },
      { q: 'Is a heat-pump PTAC worth the upgrade?', a: 'Modest heating savings against electric resistance, but heat-pump PTACs fall back to resistance below about 35°F anyway — so in a cold market they spend the worst weeks running as resistance regardless. In Miami it makes more sense than in Chicago.' },
    ],
  },

  {
    slug: 'water-source-heat-pumps',
    name: 'Water-Source Heat Pumps',
    navNote: 'Mid- and high-rise',
    audience: 'building',
    title: 'Water-source heat pumps for mid- and high-rise buildings.',
    lead: 'The system in most modern condo towers. Quiet, efficient, and replaceable in half a day without touching anyone else in the building.',
    metaDescription:
      'Water-source heat pump service and replacement across 10 U.S. metros. Per-unit work in condo towers, with board coordination handled.',
    image: 'serviceWaterHeaters',
    whatItIs: [
      'Each unit has its own compact heat pump inside it, usually in a closet or mechanical chase. Instead of exchanging heat with outdoor air, it uses water from a building-wide loop running at a moderate temperature year-round — typically 60–90°F.',
      'The building maintains that loop with a rooftop cooling tower and a boiler for cold-weather supplement. Each owner controls their own thermostat and runs their own compressor. The practical split is that you own the equipment in your unit and the association owns the loop.',
    ],
    benefitsTitle: 'Why modern towers use them.',
    benefits: [
      { title: 'Independent per unit', body: 'Each owner has their own system. No shared compressor to fail, no shared filtration, no one unit affecting another.' },
      { title: 'Genuinely quiet', body: 'No outdoor unit and no fan fighting extreme weather. Considerably quieter than PTAC, which is why newer buildings moved to them.' },
      { title: 'Consistent efficiency year-round', body: 'The loop stays at a moderate temperature, so performance does not collapse on the hottest or coldest days the way air-source equipment can.' },
      { title: 'Half-day replacement', body: 'Isolate the unit valves, swap, refill the condensate trap, restart. No exterior work, no roof access, no refrigerant lines through the building.' },
      { title: 'No wall penetration', body: 'Nothing on the façade, which matters enormously for board approvals and for buildings with architectural constraints.' },
      { title: 'The trade-off', body: 'You depend on the building maintaining the loop properly. If the association neglects the cooling tower or water treatment, every unit suffers and there is nothing you can do individually.' },
    ],
    brands: ['Carrier', 'Trane', 'ClimateMaster', 'WaterFurnace'],
    sizingTitle: 'Specifying a replacement.',
    sizing: [
      { title: 'Match the original BTU rating', body: 'The building loop is designed for specific per-unit loads. Oversizing causes loop temperature swings that affect your neighbours; undersizing leaves you uncomfortable. We replace in kind unless the original was wrong.' },
      { title: 'Single or two-stage', body: 'Single-stage is standard. Two-stage gives better dehumidification and quieter operation in the same footprint for a modest premium — worth it if you are home a lot.' },
      { title: 'Filter style', body: 'Disposable one-inch is most common. A media cabinet gives longer change intervals and better filtration but needs slightly more closet depth.' },
      { title: 'Building spec', body: 'Many buildings have standardised on a specific brand and capacity. We respect the spec for approval purposes, though we can often upgrade tier within it.' },
    ],
    installTitle: 'What replacement involves.',
    install: [
      { title: 'Loop isolation', body: 'We isolate your unit valves so the building loop keeps running for everyone else. Old isolation valves sometimes leak — if so we coordinate timing with the building engineer.' },
      { title: 'Electrical and condensate', body: 'Each unit has its own breaker and condensate drain, both verified during the swap. Condensate pumps often need replacing at the same time.' },
      { title: 'Board approval and access', body: 'Most buildings require approval and freight elevator booking. Our COI and licensing are already on file with many management companies in New York and Miami.' },
    ],
    prices: {
      title: 'Published install ranges.',
      rows: [
        { label: 'Single-unit WSHP replacement', range: '$3,800 – $6,800' },
        { label: 'With condensate pump replacement', range: '$4,200 – $7,300' },
        { label: 'Multi-unit building program', range: 'Per-unit, quoted per building' },
      ],
      note: 'Building-loop work — cooling tower, boiler, pumps, water treatment — is the association’s responsibility rather than yours. We quote that separately for boards and property managers.',
    },
    faqs: [
      { q: 'How is this different from a PTAC?', a: 'A PTAC exchanges heat through the exterior wall and is self-contained. A water-source heat pump uses the building’s water loop instead — quieter, more efficient, and no wall penetration. Older high-rises tend to run PTAC; newer towers run WSHP.' },
      { q: 'Who maintains the building loop?', a: 'The association or management company. They own the cooling tower, boiler, pumps and water treatment. You own the heat pump inside your unit. Some buildings include in-unit maintenance in common charges; most do not — worth checking your governing documents.' },
      { q: 'How long do they last?', a: 'Fifteen to twenty years in normal residential use. Heavily used units — short-term rentals, sublets — sometimes need replacing at ten to twelve. Annual maintenance extends this considerably.' },
      { q: 'How long does a replacement take?', a: 'Most single-unit swaps are a half day. We schedule with the building for freight elevator access and, if the isolation valves are suspect, for loop timing.' },
      { q: 'What usually fails?', a: 'Compressor, reversing valve, condensate pump and refrigerant leaks — in roughly that order. Each diagnoses in about 30 to 45 minutes once we are in the unit.' },
    ],
  },

  {
    slug: 'rooftop-units',
    name: 'Rooftop Units',
    navNote: 'Commercial packaged systems',
    audience: 'building',
    title: 'Commercial rooftop units — the whole system on the roof.',
    lead: 'Packaged RTUs for retail, restaurant, office and light industrial. Including the crane work and permits most contractors decline.',
    metaDescription:
      'Commercial rooftop HVAC across 10 U.S. metros. RTU replacement with crane coordination, permits and single-day execution.',
    image: 'heroEquipment',
    whatItIs: [
      'A packaged rooftop unit contains the entire system — compressor, condenser, heat exchanger, blower and controls — in one weatherproof cabinet sitting on a curb on the roof. Ductwork drops through the curb into the space below.',
      'Most commercial buildings in our markets use them, because ground-level real estate is too valuable to give to mechanical equipment and putting it on the roof keeps the noise out of the workspace. In Phoenix, most single-storey homes use a residential version of the same idea.',
    ],
    benefitsTitle: 'Why commercial buildings use RTUs.',
    benefits: [
      { title: 'No floor space given up', body: 'The entire system lives on the roof. For retail and restaurant, where every square foot is revenue, that is the whole argument.' },
      { title: 'Noise stays outside', body: 'Compressor and blower noise is on the roof rather than in the dining room or the sales floor.' },
      { title: 'Modular by zone', body: 'Larger spaces run several RTUs, each covering a zone. One failure takes out part of the building rather than all of it.' },
      { title: 'Serviceable without disruption', body: 'Routine maintenance happens on the roof during trading hours without a technician in your space.' },
      { title: 'Predictable replacement', body: 'Ten to twenty years depending on duty cycle. Restaurants with kitchen heat load sit at the short end; offices at the long end.' },
      { title: 'The hard part is logistics', body: 'Replacement means a crane, permits, and often a street closure. That is precisely why most contractors decline the work — and why we built a practice around it.' },
    ],
    brands: ['Carrier', 'Trane', 'Lennox', 'AAON'],
    sizingTitle: 'Specifying a commercial RTU.',
    sizing: [
      { title: 'Tonnage per square foot', body: 'Roughly one ton per 400–500 sq ft as a starting point, but it varies enormously with occupancy, equipment heat, window load and ventilation requirements. We run a Manual N commercial load calculation.' },
      { title: 'Single-zone versus multiple units', body: 'Smaller spaces are often one larger RTU with internal zoning. Larger spaces use multiple units with dedicated zones. We map this at the site visit.' },
      { title: 'Gas or electric heat', body: 'Most commercial buildings in our markets spec gas for cost. Electric is used where there is no gas service or for backup. Heat-pump RTUs are increasingly common under electrification mandates.' },
      { title: 'Curb compatibility', body: 'If the existing roof curb matches the new unit, the swap is far faster. About 60% of replacements reuse the existing curb with an adapter. We measure at the site visit so you know which before we quote.' },
    ],
    installTitle: 'What replacement involves.',
    install: [
      { title: 'Crane lift and rigging', body: 'Scheduled with a local firm sized to the unit weight and roof access. Usually a three to six hour window of street activity, coordinated with the city and, where needed, police traffic management.' },
      { title: 'Permits', body: 'Mechanical and electrical always; gas where applicable; structural review for roof loading case by case; street closure frequently in dense markets. We pull the full package.' },
      { title: 'Curb and weatherproofing', body: 'Curb compatibility, flashing, weatherproofing and coordination with your roofing warranty. We bring in a roofing partner where curb work is needed.' },
    ],
    prices: {
      title: 'Published install ranges.',
      rows: [
        { label: 'Single 5-ton RTU (existing curb)', range: '$22,000 – $30,000' },
        { label: 'Single 7.5-ton RTU', range: '$28,000 – $38,000' },
        { label: '10-ton with new curb adapter', range: '$38,000 – $50,000' },
        { label: 'Multi-unit projects', range: '10–15% below single-unit rate' },
      ],
      note: 'Crane, permits and street closure are quoted as separate visible line items rather than buried in the equipment price, so you can see exactly what the logistics cost against the hardware.',
    },
    faqs: [
      { q: 'How long do commercial RTUs last?', a: 'Ten to twenty years depending on duty cycle. Restaurant units fighting kitchen heat load often need replacing at eight to twelve. Office and retail units commonly run fifteen to twenty with quarterly maintenance.' },
      { q: 'How does crane coordination work?', a: 'We schedule the crane with a local firm sized to your unit and roof access. Most dense-market sites need a city permit and, depending on street width, police traffic management. You get a date and a three to six hour window; we handle the rest.' },
      { q: 'What permits are needed?', a: 'Mechanical and electrical always, gas if applicable, structural review for roof loading case by case, and a street-closure permit frequently in dense markets. We pull all of them as part of the project.' },
      { q: 'Will a new unit fit my existing curb?', a: 'About 60% of the time, with an adapter kit. We measure the existing curb at the site visit so you know which path you are on before we quote, rather than discovering it on lift day.' },
      { q: 'How much will my business be disrupted?', a: 'Most single-unit replacements happen in one day. Offices and multi-zone retail often do not need to close at all. Restaurants and businesses that cannot operate without HVAC usually schedule off-hours or off-season, and we work those windows.' },
    ],
  },
]

export const systemBySlug = (slug: string) => systems.find((s) => s.slug === slug)
export const systemsForHomes = systems.filter((s) => s.audience === 'home')
export const systemsForBuildings = systems.filter((s) => s.audience === 'building')
