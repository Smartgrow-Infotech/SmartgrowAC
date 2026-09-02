import type { ServicePillar } from './types'

export const heating: ServicePillar = {
  slug: 'heating',
  name: 'Heating',
  eyebrow: 'Heating',
  title: 'Furnace, heat pump and boiler service — nationwide.',
  lead: 'From a Chicago cast-iron boiler to a Denver cold-climate heat pump. Every heating type in use across our metros, diagnosed before we quote.',
  metaDescription:
    'Furnace, boiler and heat pump repair, maintenance and installation across 10 U.S. metros. Combustion safety checks, altitude-correct sizing, licensed technicians.',
  image: 'serviceHeating',
  intro:
    'SmartgrowInfotech services heating across ten major U.S. metros — gas and electric furnaces, cold-climate heat pumps, steam and hydronic boilers, and hybrid systems. We run calibrated combustion analysis on every gas tune-up rather than a visual check, size replacements with a Manual J load calculation, and derate combustion equipment correctly for altitude in Denver. Technicians are licensed in the state they work in and dispatch is answered 24 hours a day.',

  actionsEyebrow: 'All heating services',
  actionsTitle: 'Pick your path.',
  actionsLead:
    'Three ways we help with heat, plus two deep dives if you already know what you have.',

  problemsEyebrow: 'What we see most',
  problemsTitle: 'Common heating problems we fix.',
  problems: [
    {
      title: 'No heat at all',
      body: 'Ignition failure, a failed control board, a dead thermostat or low fuel pressure. We work the safety chain in order rather than guessing.',
    },
    {
      title: 'Boiler losing pressure',
      body: 'A failed expansion tank, a bad pressure-reducing valve, or a leak in the system. Common on older equipment and a straightforward diagnostic.',
    },
    {
      title: 'Banging radiators',
      body: 'Almost always trapped condensate from bad pitch or a failed air vent — very rarely the boiler itself. Cheap to fix once diagnosed, miserable to live with until then.',
    },
    {
      title: 'Uneven heat between floors',
      body: 'Duct leakage, undersized returns, failed zone valves, or a thermostat in the wrong place. Usually fixable without replacing equipment.',
    },
    {
      title: 'Short cycling',
      body: 'Fires for a minute, shuts off, fires again. Usually a dirty filter overheating the limit switch, an undersized return, or an oversized unit.',
    },
    {
      title: 'Yellow flame or soot',
      body: 'A gas flame should be sharp blue. Yellow means incomplete combustion, which can produce carbon monoxide. Sometimes a burner cleaning, sometimes a cracked heat exchanger. Always worth diagnosing.',
    },
  ],

  faqs: [
    {
      q: 'How often should I service my heating system?',
      a: 'Once a year, ideally in early autumn before the first cold snap. On gas equipment this is a safety check as much as an efficiency one — cracked heat exchangers and blocked flues are found with a combustion analyser, not by looking.',
    },
    {
      q: 'What is the difference between a furnace and a boiler?',
      a: 'A furnace heats air and pushes it through ducts. A boiler heats water — as steam or hot water — and circulates it to radiators or radiant floors. Chicago, Philadelphia and New York have a great deal of boiler stock; Dallas and Atlanta are almost entirely forced air. We service both.',
    },
    {
      q: 'Should I repair or replace an old furnace or boiler?',
      a: 'Repair if it is under twelve years (furnace) or twenty (boiler), the repair is under 30% of replacement, and maintenance has been kept up. Replace if it is 15+ years (furnace) or 25+ (boiler), the repair is half the cost of new, or the AFUE is under 80% — modern condensing equipment runs 90–96%.',
    },
    {
      q: 'Do heat pumps work in cold winters?',
      a: 'Modern cold-climate models hold full output to around 5°F, which covers the large majority of a Denver or Chicago winter. Below that a modest backup takes over — typically a few days a year. Older base-model heat pumps do struggle below 30°F, which is where the reputation came from.',
    },
    {
      q: 'Do you handle fuel conversions?',
      a: 'Yes. Oil-to-gas is common in Philadelphia and parts of Chicago, and oil-to-heat-pump is increasingly viable. We handle the equipment, coordinate gas service and venting, and pull permits. We quote the conversion pieces separately so you can see what each part costs.',
    },
    {
      q: 'Is carbon monoxide really a risk?',
      a: 'It is the reason combustion service is not optional. Cracked heat exchangers, blocked flues and improper venting are the usual causes, and all three are found with a calibrated combustion analyser measuring CO, O₂, CO₂ and flue temperature. Numbers either pass spec or they do not.',
    },
  ],

  actions: [
    {
      slug: 'repair',
      name: 'Heating Repair',
      title: 'Heating repair — diagnosed before we quote.',
      lead: 'Furnaces, heat pumps, boilers, hydronic and steam. Same-day diagnostic on most calls, and honest triage on the phone about what is genuinely an emergency.',
      metaDescription:
        'Same-day heating repair across 10 U.S. metros. Furnaces, boilers, heat pumps, steam and hydronic. Honest emergency triage, quote in writing before any work.',
      cardBody:
        'Same-day diagnostic on most calls. Furnace, boiler, heat pump and hydronic — every system our markets actually have.',
      cardFeatures: [
        'Diagnostic before any quote',
        'Gas, electric, oil and heat pump',
        'Steam and hydronic specialists',
        '24/7 emergency dispatch',
      ],

      itemsEyebrow: 'Symptoms we diagnose',
      itemsTitle: 'What is your heat doing — or not doing?',
      itemsLead:
        'Systems here range from a 1950s steam boiler to a 2025 cold-climate heat pump. The same diagnostic discipline applies to both.',
      items: [
        {
          title: 'No heat at all',
          body: 'Pilot or ignition failure, a blown control board, a dead thermostat or low fuel pressure. We isolate the cause before quoting parts.',
        },
        {
          title: 'Uneven heat between rooms',
          body: 'Duct leakage, undersized returns, failed zone valves or thermostat placement. Often fixable without touching the equipment.',
        },
        {
          title: 'Strange smells',
          body: 'Gas, exhaust or burning dust each mean something different. A gas smell is leave-the-building-and-call. The others usually are not emergencies.',
        },
        {
          title: 'Short cycling',
          body: 'Usually overheating from a dirty filter tripping the limit switch, an undersized return, or an oversized unit. Often a same-day fix.',
        },
        {
          title: 'Banging or whistling',
          body: 'Banging steam radiators is nearly always pitch or a failed air vent. Whistling in hydronic is usually trapped air. Both have known patterns.',
        },
        {
          title: 'Ignition will not light',
          body: 'Thermocouple, gas valve, igniter or flame sensor. Standard diagnostic order, standard parts, most jobs same-day.',
        },
      ],

      processEyebrow: 'How a repair visit works',
      processTitle: 'Diagnose first. Quote next. Then fix.',
      process: [
        {
          title: 'Phone triage',
          body: 'We ask what it is doing, brand and rough age, and whether it is genuinely urgent. Below about 25°F with pipes at risk, or with vulnerable people in the building, we treat it as an emergency and say so.',
        },
        {
          title: 'On-site diagnostic',
          body: 'Full system check rather than just the loudest symptom, including a combustion check on gas equipment. We isolate the actual cause.',
        },
        {
          title: 'Written quote',
          body: 'Parts, labour and options in writing before any work starts. If repair versus replace is close, you get both numbers.',
        },
        {
          title: 'Repair and verify',
          body: 'We fix it, run a full cycle, verify combustion is in spec, and explain what we did. Workmanship warranty on top of parts.',
        },
      ],

      costEyebrow: 'What affects the cost',
      costTitle: 'Heating repair varies more than cooling.',
      costDrivers: [
        {
          title: 'System type',
          body: 'A failed gas valve on a modern condensing boiler is different work from a sooted-up atmospheric steam boiler. Hydronic, steam and forced air each have their own diagnostic path.',
        },
        {
          title: 'Parts and age',
          body: 'Pre-2000 boilers sometimes need parts sourced specially. We will tell you on the phone whether it is a stock item or a longer wait.',
        },
        {
          title: 'Steam versus hydronic complexity',
          body: 'Older steam systems need pipe access, low-water cutoff testing and sometimes skim work that hydronic does not. Old buildings simply take more time.',
        },
      ],
      priceNote:
        'We do not publish repair prices — a number before a diagnosis is a guess. After-hours and weekend calls are available for genuine emergencies, and we will tell you the diagnostic fee before we schedule.',

      faqs: [
        {
          q: 'When is no heat a genuine emergency?',
          a: 'Below roughly 25°F with pipes at risk of freezing, or with infants, elderly or medically vulnerable people in the building. A mild evening with blankets and a working fireplace usually is not. We will help you decide on the call rather than upselling you into an after-hours rate.',
        },
        {
          q: 'Do you service steam heat?',
          a: 'Yes, and in Chicago, New York and Philadelphia it is a substantial part of what we do. Steam boilers, radiator air vents, low-water cutoffs, sight-glass cleaning and pipe pitch. It is a genuinely different discipline from forced air.',
        },
        {
          q: 'Is my 25-year-old boiler worth repairing?',
          a: 'Often yes. Cast-iron boilers routinely run 30–40 years with maintenance, and a sound one with good piping is not automatically a replacement candidate. If the heat exchanger is cracked the answer changes. You will get both numbers.',
        },
        {
          q: 'My heat pump feels weak in cold weather. Is it broken?',
          a: 'Maybe not. Standard heat pumps lose capacity below about 30°F, and even cold-climate models hand over to backup below roughly 5°F. If it feels weak well above that, it is worth checking refrigerant charge and the defrost cycle.',
        },
        {
          q: 'Do you warranty heating repairs?',
          a: 'Yes. Parts carry the manufacturer warranty — one to ten years depending on the component and brand — and labour carries our workmanship warranty. Everything is documented on the invoice.',
        },
      ],
    },

    {
      slug: 'maintenance',
      name: 'Heating Maintenance',
      title: 'Heating tune-ups and combustion safety checks.',
      lead: 'Pre-season service for furnaces, heat pumps and boilers. Calibrated combustion analysis, CO safety inspection, and a written report. Essential $189 · Complete $259.',
      metaDescription:
        'Pre-season heating tune-ups across 10 U.S. metros. Calibrated combustion analysis and CO safety inspection. Essential $189/yr, Complete $259/yr.',
      cardBody:
        'Pre-season tune-ups catch what becomes a January breakdown — and on gas equipment it is a safety check, not just an efficiency one.',
      cardFeatures: [
        'Calibrated combustion analysis',
        'CO safety inspection',
        'Heat exchanger and flue check',
        'Complete plan covers both seasons',
      ],

      itemsEyebrow: 'Why pre-season service',
      itemsTitle: 'What a heating tune-up actually buys you.',
      itemsLead:
        'On combustion equipment this is one of the few genuinely preventable causes of household carbon monoxide exposure.',
      items: [
        {
          title: 'CO safety inspection',
          body: 'Cracked heat exchangers, blocked flues and bad seals all release carbon monoxide. We use a calibrated combustion analyser, not a visual check and a sniff.',
        },
        {
          title: 'Prevents January breakdowns',
          body: 'A midwinter failure is almost always traceable to something visible the previous autumn. Catching it in October beats queueing during a cold snap.',
        },
        {
          title: 'Maintains combustion efficiency',
          body: 'Soot, scale and dirty burners drag efficiency down 5–15% over a season. A clean system burns the gas you actually paid for.',
        },
        {
          title: 'Keeps your warranty valid',
          body: 'Almost all manufacturer warranties require documented annual service. Skip it and a control-board or heat-exchanger claim can be denied.',
        },
        {
          title: 'Cleans soot and scale',
          body: 'Combustion residue and water-side scale accumulate quietly, and it is that long-term wear that kills heat exchangers.',
        },
        {
          title: 'You pick the slot',
          body: 'We hold pre-season schedules so you are not competing with November demand. Pick a weekday and, ideally, keep the same technician year to year.',
        },
      ],

      processEyebrow: 'What we actually do',
      processTitle: 'Real cleaning, real combustion analysis, real numbers.',
      process: [
        {
          title: 'Easy scheduling',
          body: 'Pre-season slots held in advance so you are not booked into the rush. Complete plan customers get both visits scheduled together.',
        },
        {
          title: 'Full system tune-up',
          body: 'Furnaces: combustion analysis, burner cleaning, blower service, heat exchanger inspection, gas pressure check, filter swap. Boilers: the same combustion work plus low-water cutoff test, water-side cleaning or flush, expansion tank check and steam skim where applicable.',
        },
        {
          title: 'Written findings',
          body: 'Measured CO, O₂, CO₂, flue temperature and combustion efficiency — numbers that either pass spec or do not. Plus what we cleaned and what to watch.',
        },
        {
          title: 'Easy renewal',
          body: 'We reach out next season. You do not have to remember anything.',
        },
      ],

      costEyebrow: 'What affects the price',
      costTitle: 'Flat residential pricing, with three variables.',
      costDrivers: [
        {
          title: 'System type',
          body: 'Forced-air furnace tune-ups are quicker than steam boiler service, which often needs water-side flushing and low-water cutoff testing on top.',
        },
        {
          title: 'Single versus Complete',
          body: 'Complete at $259 covers autumn heating plus spring cooling — better value than two singles at $189 each.',
        },
        {
          title: 'Multi-system and commercial',
          body: 'Buildings with multiple units, rooftop equipment or a boiler room get a per-property contract rate. We quote on the building.',
        },
      ],

      faqs: [
        {
          q: 'What is combustion analysis?',
          a: 'We put a calibrated probe in the flue and measure CO, O₂, CO₂, flue temperature and combustion efficiency. The numbers either pass spec or they do not — it is real evidence the system is burning safely, rather than an opinion.',
        },
        {
          q: 'When should I schedule?',
          a: 'September or October, before the first cold snap. By mid-November the board fills with emergency calls and routine tune-ups get pushed. Booking early also means you pick the day.',
        },
        {
          q: 'What is different about a boiler tune-up?',
          a: 'Furnaces get combustion analysis, burner cleaning, blower service, heat exchanger inspection and a filter swap. Boilers get the same combustion work plus a low-water cutoff test, water-side cleaning or flush, expansion tank check, and a steam skim if applicable. Boilers usually take longer.',
        },
        {
          q: 'How serious is the carbon monoxide risk really?',
          a: 'Serious enough that it is the main reason we insist on analysing rather than inspecting. The usual causes — cracked heat exchangers, blocked flues, improper venting — are all things an annual combustion check finds and a visual inspection misses.',
        },
        {
          q: 'Do you service steam boilers on a plan?',
          a: 'Yes, and in Chicago and New York it is routine. The visit includes burner work, low-water cutoff testing, sight-glass cleaning, a skim if needed, and radiator air-vent inspection.',
        },
      ],
    },

    {
      slug: 'installation-replacement',
      name: 'Heating Install & Replace',
      title: 'Furnace, heat pump and boiler installation.',
      lead: 'High-efficiency condensing furnaces, cold-climate heat pumps and hydronic boilers. Manual J sized, permits and venting handled, financing available.',
      metaDescription:
        'Furnace, boiler and heat pump installation across 10 U.S. metros. Manual J right-sizing, altitude-correct derating, permits and venting handled.',
      cardBody:
        'High-efficiency furnaces, cold-climate heat pumps and hydronic boilers — plus fuel conversions where the maths justifies it.',
      cardFeatures: [
        'Free in-home estimate',
        'Manual J right-sizing',
        'Altitude derating where it applies',
        'Permits and venting handled',
      ],

      itemsEyebrow: 'When it is time to replace',
      itemsTitle: 'Signs your heating system is at end of life.',
      itemsLead:
        'Not every old system needs replacing. A few patterns make replacement the clearly cheaper long-term call.',
      items: [
        {
          title: '15 or more years old',
          body: 'Most residential furnaces run 15–20 years and boilers considerably longer. Past that, parts get expensive and efficiency lags well behind current equipment.',
        },
        {
          title: 'Repair cost approaching half of new',
          body: 'A $3,000 control-and-burner job on a 22-year-old furnace is hard to justify against a new condensing unit with a fresh warranty.',
        },
        {
          title: 'Low AFUE and climbing bills',
          body: 'Pre-1995 equipment is often 60–75% AFUE against 90–96% for modern condensing. On a Chicago winter the gas saving alone can carry the upgrade.',
        },
        {
          title: 'Parts getting hard to find',
          body: 'If your technician is sourcing parts from salvage or warning you the next failure ends it, that is the system telling you.',
        },
        {
          title: 'Yellow flame or persistent soot',
          body: 'Incomplete combustion. Sometimes cleanable, but on old equipment it is frequently the heat exchanger going.',
        },
        {
          title: 'Cannot keep up in cold weather',
          body: 'Constant running without reaching setpoint. Undersized, lost heat exchanger surface, or — in Denver — never derated correctly for altitude in the first place.',
        },
      ],

      processEyebrow: 'How a new install works',
      processTitle: 'From estimate to a system you can measure.',
      process: [
        {
          title: 'In-home estimate',
          body: 'Manual J load calculation, and in Denver an altitude derate on any combustion equipment. We measure before specifying.',
        },
        {
          title: 'Options and written quote',
          body: 'Two or three real options with efficiency, brand, warranty and full installed price. Conversions quoted as separate line items so you can see them.',
        },
        {
          title: 'Permits and installation',
          body: 'Gas piping, venting and equipment permits pulled and inspections scheduled. Old equipment hauled out.',
        },
        {
          title: 'Commissioning and walkthrough',
          body: 'Full system test, combustion verified in spec, warranty registration, and a walkthrough. We follow up after the first season.',
        },
      ],

      costEyebrow: 'What affects the price',
      costTitle: 'Three drivers do most of the work.',
      costDrivers: [
        {
          title: 'System type',
          body: 'Boiler, furnace or heat pump are very different equipment costs. A steam boiler and a condensing combi sit at opposite ends of the range.',
        },
        {
          title: 'Existing fuel and venting',
          body: 'Moving from oil to gas, or upgrading to a condensing system, often means new gas piping or sidewall venting. That is a real change to scope.',
        },
        {
          title: 'Conversion complexity',
          body: 'Steam-to-hydronic, or replacing radiators with forced air, adds days. We quote conversions separately so the breakdown is visible.',
        },
      ],
      prices: {
        title: 'Published install ranges.',
        rows: [
          { label: 'Condensing furnace replacement', range: '$5,500 – $11,000' },
          { label: 'Cold-climate ducted heat pump', range: '$12,000 – $20,000' },
          { label: 'Ductless heat pump, single-zone', range: '$5,500 – $9,000' },
          { label: 'Hydronic boiler replacement', range: '$9,000 – $18,000' },
          { label: 'Oil-to-gas conversion', range: '$12,000 – $24,000' },
        ],
        note: 'Federal 25C credits, state efficiency programs and utility rebates frequently apply to heat pump and high-efficiency installs, and the programs differ in every metro. Verify current amounts at the time of purchase — these change annually.',
      },

      faqs: [
        {
          q: 'Boiler or furnace — how do I decide?',
          a: 'Usually you replace with the same type unless you are doing a full system change. Existing radiators or radiant floors mean a boiler; existing ductwork means a furnace. Conversions are possible but expensive, so they need a real reason.',
        },
        {
          q: 'Heat pump or gas furnace?',
          a: 'Heat pumps cost less to run if you also need cooling, since it is one piece of equipment for both. Gas has lower upfront cost and faster heat output in deep cold. Many homes do well on a hybrid — heat pump for mild days, gas for cold snaps.',
        },
        {
          q: 'What does altitude derating mean in Denver?',
          a: 'Thinner air carries less oxygen, so combustion equipment produces less than its sea-level rating and must be specified accordingly. Ignoring it is why some homes never quite keep up in a cold snap. We check it on every Denver install and on existing systems we inspect.',
        },
        {
          q: 'Are permits and inspections included?',
          a: 'Yes. Gas piping, venting and most new equipment require them. We pull the permits and schedule the inspection as part of the job.',
        },
        {
          q: 'What incentives are available?',
          a: 'Federal 25C credits plus state and utility programs, which differ in every metro we serve. We identify what applies in your market and provide the documentation you need to claim it. Amounts change annually, so we confirm current figures at quote time rather than quoting stale numbers.',
        },
      ],
    },

    {
      slug: 'furnace-repair',
      name: 'Furnace Repair',
      title: 'Gas furnace repair — 80% to 96% AFUE.',
      lead: 'Forced-air gas furnaces. Ignition, flame sensor, blower, control board and heat exchanger. Same-day diagnostic, quote in writing before any work.',
      metaDescription:
        'Gas furnace repair across 10 U.S. metros. Ignition failure, short cycling, yellow flame, blower faults. Same-day diagnostic and honest repair-or-replace numbers.',
      cardBody:
        'Forced-air gas furnaces, 80% through 96% AFUE. A relatively small set of failure modes, most of which diagnose quickly.',
      cardFeatures: [
        'Ignition and flame sensor faults',
        'Blower and control board',
        'Heat exchanger inspection',
        'Same-day on most calls',
      ],

      itemsEyebrow: 'Symptoms we diagnose',
      itemsTitle: 'Common furnace failure patterns.',
      itemsLead:
        'Forced-air furnaces have a fairly small set of common failures. Most diagnose in 20 to 40 minutes once someone is on site.',
      items: [
        {
          title: 'Will not ignite',
          body: 'Hot surface igniter, flame sensor, gas valve or control board. Standard diagnostic order, standard parts, usually same-day.',
        },
        {
          title: 'Yellow flame or soot',
          body: 'Should be a sharp blue. Yellow means incomplete combustion — sometimes a burner cleaning, sometimes a heat exchanger issue. Always worth diagnosing.',
        },
        {
          title: 'Short cycling',
          body: 'Fires briefly then shuts off. Usually a dirty filter overheating the limit switch, an undersized return, or a failed limit or pressure switch.',
        },
        {
          title: 'Blower will not stop',
          body: 'Runs after the burner shuts down. Usually a stuck fan-limit switch or a failed control-board relay. Easy to test, easy to swap.',
        },
        {
          title: 'Cold spots in the house',
          body: 'More often a duct leak, a closed damper or thermostat placement than the furnace itself. We trace it back to the cause.',
        },
        {
          title: 'Persistent unusual smell',
          body: 'Burning dust is normal at first fire each autumn. Burning plastic or sulphur is not — that could be a melting wire or a cracked heat exchanger.',
        },
      ],

      processEyebrow: 'How a repair visit works',
      processTitle: 'Diagnose first. Quote next. Then fix.',
      process: [
        {
          title: 'Phone triage',
          body: 'What it is doing, brand and rough age, and whether it is genuinely urgent. Some faults get solved on the call.',
        },
        {
          title: 'On-site diagnostic',
          body: 'Full system check including combustion, not just the loudest symptom.',
        },
        {
          title: 'Written quote',
          body: 'Parts, labour and options in writing before any work starts.',
        },
        {
          title: 'Repair and verify',
          body: 'Fixed, cycled, combustion verified in spec, and explained. Workmanship warranty on top of parts.',
        },
      ],

      costEyebrow: 'What affects the cost',
      costTitle: 'Furnace repair pricing is fairly predictable.',
      costDrivers: [
        {
          title: 'Furnace type',
          body: 'Single-stage is simplest. Two-stage and modulating furnaces carry more sensors and a longer diagnostic. Condensing units add the venting and condensate side.',
        },
        {
          title: 'Parts availability',
          body: 'Newer furnaces use stocked parts, usually same-day. Pre-2000 units sometimes need sourcing — we will tell you on the phone.',
        },
        {
          title: 'Venting and gas-line work',
          body: 'If the diagnostic uncovers a cracked flue, weak pressure or a blocked intake, that is additional licensed work. We quote it separately so you see the breakdown.',
        },
      ],
      priceNote:
        'We do not publish repair prices. After-hours calls are available during cold snaps, and we will tell you the diagnostic fee before scheduling.',

      faqs: [
        {
          q: 'Yellow flame — should I worry?',
          a: 'Yes, but do not panic. A persistent yellow flame means incomplete combustion, which can produce carbon monoxide. Sometimes it is just dirty burners and cleanable; sometimes it is a cracked heat exchanger and not safe to run. Get it diagnosed, and check your CO detectors are working.',
        },
        {
          q: 'Why does my furnace keep short cycling?',
          a: 'Most commonly a dirty filter. It restricts airflow, the limit switch overheats, and the system shuts down to protect itself. Other causes are undersized returns, a failed limit switch, or an oversized furnace. We rule them out in order.',
        },
        {
          q: 'How often should I change the filter?',
          a: 'Disposable one-inch filters every one to three months during the season. Thicker four- or five-inch media filters every six to twelve months. Pets or allergies mean more often. A dirty filter is the single most common cause of the furnace problems we see.',
        },
        {
          q: 'What is the difference between 80% and 95% AFUE?',
          a: 'AFUE is the share of fuel converted to usable heat. An 80% furnace sends 20% up the flue; a 95% condensing unit sends 5% and condenses water out of the exhaust. In a cold market the annual gas saving often justifies the upgrade when you are replacing anyway.',
        },
        {
          q: 'When should I replace rather than repair?',
          a: '15+ years old, a cracked heat exchanger, repair cost climbing toward half of replacement, multiple failures in one season, or soot and yellow flame that will not clear after cleaning. You get both numbers.',
        },
      ],
    },

    {
      slug: 'heat-pump-repair',
      name: 'Heat Pump Repair',
      title: 'Heat pump repair — ducted and ductless.',
      lead: 'Reversing valves, defrost faults, refrigerant loss and compressor issues. The same equipment as your cooling system, running in the other direction.',
      metaDescription:
        'Heat pump repair across 10 U.S. metros. Reversing valve, defrost cycle, refrigerant and compressor faults on ducted and ductless systems.',
      cardBody:
        'Ducted and ductless heat pumps. Reversing valve, defrost cycle, refrigerant charge and compressor faults.',
      cardFeatures: [
        'Ducted and ductless systems',
        'Reversing valve and defrost faults',
        'Cold-climate model expertise',
        'Same-day diagnostic on most calls',
      ],

      itemsEyebrow: 'Symptoms we diagnose',
      itemsTitle: 'How heat pumps actually fail.',
      itemsLead:
        'A heat pump is a reversible air conditioner, so it inherits every cooling failure mode and adds a few of its own.',
      items: [
        {
          title: 'Weak heat in cold weather',
          body: 'Could be normal operation below the unit’s threshold, or low refrigerant charge, or a defrost fault. Worth measuring before assuming.',
        },
        {
          title: 'Stuck in one mode',
          body: 'A failed reversing valve or its solenoid. The system heats but will not cool, or the reverse. A well-defined diagnostic.',
        },
        {
          title: 'Iced-over outdoor unit',
          body: 'Some frost is normal in winter; a solid block is not. Usually a failed defrost board, sensor or reversing valve.',
        },
        {
          title: 'Backup heat running constantly',
          body: 'Expensive and usually a symptom rather than the fault. Often low charge, a defrost problem, or a thermostat configured wrong.',
        },
        {
          title: 'Short cycling',
          body: 'Oversizing, low charge, or a thermostat in the wrong place. Same causes as on the cooling side.',
        },
        {
          title: 'Indoor head not responding',
          body: 'On ductless, communication faults between indoor and outdoor units are common and often a wiring or board issue rather than a failed compressor.',
        },
      ],

      processEyebrow: 'How a repair visit works',
      processTitle: 'Diagnose first. Quote next. Then fix.',
      process: [
        {
          title: 'Phone triage',
          body: 'Brand, rough age, ducted or ductless, and what it is actually doing. Some heat pump complaints turn out to be correct cold-weather behaviour.',
        },
        {
          title: 'On-site diagnostic',
          body: 'Refrigerant charge, defrost cycle, reversing valve, airflow and controls — measured rather than estimated.',
        },
        {
          title: 'Written quote',
          body: 'Parts, labour and options in writing before work starts.',
        },
        {
          title: 'Repair and verify',
          body: 'Fixed, cycled in both modes, and verified. Workmanship warranty on top of parts.',
        },
      ],

      costEyebrow: 'What affects the cost',
      costTitle: 'Three things move the price.',
      costDrivers: [
        {
          title: 'Ducted versus ductless',
          body: 'Ductless multi-zone systems have more components and more communication between them. Diagnostics take longer; parts are more model-specific.',
        },
        {
          title: 'Which component failed',
          body: 'A defrost board is a modest part. A reversing valve or compressor is not, and on an older system that is where repair-versus-replace becomes a real conversation.',
        },
        {
          title: 'Refrigerant and warranty status',
          body: 'Charge type affects cost, and many systems under ten years still carry parts warranty. We check before quoting.',
        },
      ],
      priceNote:
        'We do not publish repair prices — a number before a diagnosis is a guess. We will tell you the diagnostic fee on the call.',

      faqs: [
        {
          q: 'My heat pump feels weak below freezing. Is that a fault?',
          a: 'Often not. Standard models lose capacity below about 30°F and even cold-climate units hand over to backup around 5°F. If it feels weak well above those thresholds, charge and defrost are worth measuring.',
        },
        {
          q: 'Why is my outdoor unit iced up?',
          a: 'Light frost in winter is normal and the defrost cycle clears it. A solid block of ice is not — usually a failed defrost board or sensor, or a reversing valve that is not switching. Worth attending to before it damages the coil.',
        },
        {
          q: 'My backup heat runs constantly. Why?',
          a: 'Usually a symptom rather than the fault. Low refrigerant charge, a defrost problem, or a thermostat configured to bring in backup too early. It is worth diagnosing quickly because electric backup is expensive to run.',
        },
        {
          q: 'Do you service ductless multi-zone systems?',
          a: 'Yes — Mitsubishi Electric, Daikin, Fujitsu, LG and others. Communication faults between indoor and outdoor units are common on these and frequently turn out to be wiring or a board rather than a failed compressor.',
        },
      ],
    },
  ],
}
