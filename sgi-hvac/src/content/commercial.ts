import type { Faq } from '@/components/sections/faq'
import type { Item } from '@/components/sections/blocks'
import type { ImageKey } from '@/content/images'

/**
 * Commercial programs.
 *
 * This is where the national model earns its keep. The reference site's moat
 * was physical difficulty — crane lifts and street closures most contractors
 * decline. At national scale the equivalent moat is operational consistency
 * across markets, which is what a multi-site facility manager actually buys.
 */

export type CommercialProgram = {
  slug: string
  name: string
  navNote: string
  title: string
  lead: string
  metaDescription: string
  image: ImageKey
  /** Two paragraphs stating the problem this program solves. */
  whatWeDo: string[]
  whyTitle: string
  why: Item[]
  engagementTitle: string
  engagement: Item[]
  pricingTitle: string
  pricing: Item[]
  faqs: Faq[]
  /** Shown on the commercial hub card. */
  cardFeatures: string[]
}

export const commercialPrograms: CommercialProgram[] = [
  {
    slug: 'national-accounts',
    name: 'National Accounts',
    navNote: 'Multi-site, one agreement',
    title: 'One HVAC agreement across every market you operate in.',
    lead: 'For operators running 5 to 500 locations. Defined response SLAs, one account manager, consolidated invoicing, and reporting you can take to a board meeting.',
    metaDescription:
      'National HVAC accounts for multi-site operators. One agreement across 10 U.S. metros, defined SLAs, consolidated invoicing and portfolio-level reporting.',
    image: 'commercialRooftop',
    whatWeDo: [
      'Multi-site facility managers do not have an HVAC problem. They have a vendor-management problem. Twelve contractors across nine states, each with their own rate card, their own idea of what "emergency response" means, and their own invoice format. Nobody can tell you what HVAC costs per square foot across the portfolio, because the data was never comparable to begin with.',
      'We solve that by being one vendor with one standard. Same diagnostic process, same reporting format, same escalation path, same rate structure — in Dallas, in Denver, in Miami. Consolidation is not really about unit price. It is about being able to answer "how is our HVAC performing" with a number instead of a shrug.',
    ],
    whyTitle: 'Why operators consolidate.',
    why: [
      { title: 'Comparable data across every site', body: 'Every visit produces the same written report in the same format. After a year you can rank locations by cost, identify equipment failing early, and build a capex plan from evidence rather than from whoever shouted loudest.' },
      { title: 'Response SLAs in writing, by tier', body: 'Not "reasonable response". A defined number of hours, by site tier and severity, agreed in the contract. You decide which sites are priority — not us.' },
      { title: 'One relationship, one invoice', body: 'One master agreement with per-location addendums. Add or remove sites mid-term as your footprint changes. Consolidated monthly statement or per-location invoicing, whichever your accounting system wants.' },
      { title: 'One account manager who knows your sites', body: 'No re-explaining the building every time you call. Continuity is most of what makes multi-site service actually work.' },
      { title: 'Capex planning you can defend', body: 'Equipment inventoried and age-baselined at onboarding, so replacement forecasting is a schedule rather than a surprise.' },
      { title: 'We will tell you what we cannot cover', body: 'A national program that quietly subcontracts your outlying location to whoever answered the phone is not a national program — it is a markup. If a site falls outside our coverage we say so and help you source it properly.' },
    ],
    engagementTitle: 'How a national program gets built.',
    engagement: [
      { title: 'Portfolio review', body: 'We walk your site list with you: locations, equipment types and ages, current vendors, current pain points, and which sites genuinely cannot go down. No charge.' },
      { title: 'Tiering and SLA design', body: 'Not every location needs same-day response. We tier your sites and price each tier honestly, so you are not paying premium response on a back-office location.' },
      { title: 'Master agreement and onboarding', body: 'One agreement with per-location addendums. COIs issued to your entity. Equipment inventoried and baselined at the first visit.' },
      { title: 'Scheduled execution and reporting', body: 'Planned maintenance on cadence, emergency response by SLA, and a quarterly portfolio report with cost breakdown and recommended capex.' },
    ],
    pricingTitle: 'What drives portfolio pricing.',
    pricing: [
      { title: 'Site count and density', body: 'Sites clustered inside our metros price better than isolated outliers. We will tell you honestly which of your locations we can serve well and which we cannot.' },
      { title: 'Equipment mix', body: 'Packaged rooftop units, split systems and PTAC arrays have genuinely different service economics. Mixed portfolios get mixed per-site rates rather than one blended number that overcharges half your sites.' },
      { title: 'Response tier', body: 'Next-business-day, same-day and after-hours tiers are priced separately and assigned per site, so the premium goes only where it is needed.' },
    ],
    cardFeatures: [
      'One master agreement',
      'Response SLAs in writing',
      'Consolidated invoicing',
      'Quarterly portfolio reporting',
    ],
    faqs: [
      { q: 'How many locations before this makes sense?', a: 'Mathematically the breakeven is around four or five properties. Below that, single-site contracts are usually fine. Above it, the consolidated invoicing and the single point of contact start saving real time and money.' },
      { q: 'What if some of my sites are outside your metros?', a: 'We will map that before you sign anything and tell you plainly which locations we can serve well. For the rest we would rather help you source properly than accept the job and subcontract it to someone we cannot stand behind.' },
      { q: 'Can you handle a mix of property types?', a: 'Yes, and most portfolios are mixed. Retail, restaurant, office and multifamily each have their own service patterns — rentals need more emergency response, condos need board coordination, commercial needs predictable scheduling. One contract covers all of it.' },
      { q: 'How does invoicing work across locations?', a: 'We adapt to your accounting setup. Most operators want either one consolidated monthly statement with per-location breakdowns, or separate invoices per site so they can be charged to individual location accounts. Both work.' },
      { q: 'What does the reporting actually contain?', a: 'Per-visit findings with measurements, work-order summaries, parts and labour breakdown, and recommended capex with equipment ages. Quarterly it rolls up to a portfolio view you can compare site to site — which is the whole reason to consolidate.' },
      { q: 'Do we have to commit long-term?', a: 'No. We work both on annual agreements and case-by-case. Most operators move to an agreement once they see how many small issues get caught early, but there is no pressure and no lock-in requirement.' },
    ],
  },

  {
    slug: 'property-management',
    name: 'Property Management',
    navNote: 'Portfolio contracts',
    title: 'Multi-property HVAC contracts for property managers.',
    lead: 'If you manage five or more properties, you should not be calling a different contractor for each one. One contract, consolidated invoicing, a dedicated contact, emergency response built in.',
    metaDescription:
      'Multi-property HVAC contracts for property management companies across 10 U.S. metros. Consolidated invoicing and per-property service plans.',
    image: 'serviceWaterHeaters',
    whatWeDo: [
      'Property managers running multiple buildings rarely have time to vet a new HVAC contractor for each one. The result is too many vendors, inconsistent service, fragmented invoicing and no single point of accountability when something goes wrong at 6am.',
      'One master contract covers every property in your portfolio, with per-property service plans tuned to what each building actually needs. One contact at our end who knows your buildings and your residents. Consolidated monthly invoicing or per-property, as your accounting prefers.',
    ],
    whyTitle: 'What a portfolio contract gets you.',
    why: [
      { title: 'Single point of contact', body: 'One dedicated contact who knows your buildings, your residents and your operations. No re-explaining the property every time you call.' },
      { title: 'Volume pricing across the portfolio', body: 'Per-property and per-unit rates below single-property pricing. The more properties you bundle, the better the per-visit maths works.' },
      { title: 'Predictable monthly budget', body: 'Annual contract value lets you budget. Variable costs — parts, emergency work — reported separately so nothing hides in a lump sum.' },
      { title: 'Resident calls handled properly', body: 'Residents call our dispatch, we triage, and we respond per your building agreement. You are not the switchboard.' },
      { title: 'Documentation your owners will accept', body: 'Written reports per visit with measurements, useful for owner reporting, capex justification and insurance.' },
      { title: 'Flexible as the portfolio changes', body: 'Properties can be added or removed mid-contract. Your footprint moves; the agreement moves with it.' },
    ],
    engagementTitle: 'How portfolio contracts work.',
    engagement: [
      { title: 'Portfolio review', body: 'We walk your properties with you: residential versus commercial, equipment age and condition, current pain points, current vendor situation. No charge.' },
      { title: 'Per-property quote', body: 'Service plans based on what each building actually needs. Some get quarterly visits, some on-call only, some full emergency coverage. You see the maths per property.' },
      { title: 'Master contract structure', body: 'One agreement with property-by-property addendums, adjusting as the portfolio changes. Insurance certificates issued to your management company.' },
      { title: 'Quarterly reporting', body: 'Per-property visit reports, work-order summaries, parts and labour breakdown, and recommended capex — in whatever format your management software wants.' },
    ],
    pricingTitle: 'What drives the price.',
    pricing: [
      { title: 'Property and unit count', body: 'More properties means better per-property pricing; more units per property means better per-unit pricing. The sweet spot is usually eight or more properties with consistent equipment.' },
      { title: 'Contract level per property', body: 'Buildings with older equipment or vulnerable residents may want full emergency coverage. Others need only quarterly visits. We mix and match rather than forcing one tier.' },
      { title: 'Emergency response SLA', body: 'Same-day, after-hours and 24/7 tiers each cost differently. We size per property based on what that building genuinely needs.' },
    ],
    cardFeatures: [
      'One master contract',
      'Per-property service plans',
      'Consolidated invoicing',
      'Resident call handling',
    ],
    faqs: [
      { q: 'How many properties before this makes sense?', a: 'Around four or five is the mathematical breakeven. Below that, ad-hoc service or single-property contracts are usually fine. Above it, consolidated invoicing and a dedicated contact start saving real time.' },
      { q: 'Can you handle condo, rental and commercial together?', a: 'Yes, and most portfolios are mixed. Each type has its own service pattern — rentals need more emergency response, condos need board coordination, commercial needs predictable scheduling. One contract handles all three.' },
      { q: 'Do you take resident calls directly?', a: 'Yes, on full-tier contracts. Residents call our dispatch, we triage, and we respond per your building agreement. Non-emergency work is typically scheduled within 24–48 hours; genuine emergencies get same-day.' },
      { q: 'Do you do small multi-family?', a: 'Yes — four to twenty units is a sweet spot for portfolio contracts. Single-family rentals work too if you have several in the same metro.' },
      { q: 'How do you handle capex recommendations?', a: 'Documented in each visit report with equipment ages and condition. We do not push capex unnecessarily — you get an honest read on what is healthy, what needs watching and what needs replacing. The decision stays yours.' },
    ],
  },

  {
    slug: 'multifamily',
    name: 'Multifamily & HOA',
    navNote: 'Per-unit programs',
    title: 'HVAC for condo buildings, co-ops and multifamily.',
    lead: 'HOA contracts, board approvals, per-unit PTAC and water-source programs, common-area systems. Volume pricing and freight coordination handled.',
    metaDescription:
      'Condo, co-op and multifamily HVAC across 10 U.S. metros. Per-unit PTAC and WSHP programs, HOA contracts, board approval and freight coordination.',
    image: 'serviceIaq',
    whatWeDo: [
      'Most condo and apartment buildings carry a mix of HVAC needs: per-unit equipment that residents call about, common-area systems the association owns, and mechanical rooms with shared plant. Most contractors focus on one slice of that. We work all of them, which means one phone number for everything mechanical.',
      'For boards and property managers that means consolidated invoicing, predictable response times, and a contractor whose certificate of insurance is already on file with your management company — which routinely takes weeks out of a job that would otherwise stall on paperwork.',
    ],
    whyTitle: 'What sets us apart for building work.',
    why: [
      { title: 'Multi-unit volume pricing', body: 'Per-unit pricing below retail. PTAC and WSHP swaps in batches of four to twenty at predictable rates. Managers get a quote up front rather than surprises afterwards.' },
      { title: 'HOA paperwork already handled', body: 'Certificate of insurance with the right additional insureds, W-9, contractor licence documentation. In New York and Miami we are already on file with many management companies.' },
      { title: 'Scheduled batch execution', body: 'Freight elevator booking, after-hours work, off-season scheduling. Residential-style per-unit work on commercial-scale timelines that respect building operations.' },
      { title: 'Resident-billed and HOA-billed kept separate', body: 'Per-unit work billed to the resident or unit; common-area work billed to the association. Separate invoices, separate work orders, or whatever your accounting needs.' },
      { title: 'Board-friendly documentation', body: 'Written per-visit reports with photos, which is what boards actually need to approve spend and what insurers ask for afterwards.' },
      { title: 'We work the whole building', body: 'From a resident PTAC to the rooftop common-area unit to the boiler room. One vendor rather than three.' },
    ],
    engagementTitle: 'From walkthrough to ongoing contract.',
    engagement: [
      { title: 'Building walkthrough', body: 'We tour with management and inventory everything: PTAC count by unit, common-area equipment, boiler room, water heaters, rooftop units. Photographed and documented. No charge.' },
      { title: 'Per-unit and common-area quote', body: 'Per-unit pricing for resident-facing equipment, separate quote for common-area contracts. The board gets a clear breakdown of what is billed where.' },
      { title: 'Scheduled batch execution', body: 'Per-unit work scheduled in batches to minimise freight elevator usage and resident disruption. Emergency response defined up front.' },
      { title: 'Reporting', body: 'Per-visit written reports, per-unit invoicing where helpful, consolidated monthly statements. We adapt to your management software.' },
    ],
    pricingTitle: 'What drives building pricing.',
    pricing: [
      { title: 'Unit count and equipment type', body: 'Buildings with fifty identical PTACs get better per-unit pricing than a twelve-unit boutique building. WSHP service has different rates from PTAC — we quote against what is actually installed.' },
      { title: 'Building access constraints', body: 'Freight elevator availability, parking, after-hours requirements and security check-in all affect labour time. Buildings that make access easy genuinely save money.' },
      { title: 'Contract level', body: 'Basic scheduled visits versus full coverage with priority emergency response and after-hours. Boards choose the tier that fits the building.' },
    ],
    cardFeatures: [
      'Per-unit volume pricing',
      'COI and board paperwork handled',
      'Freight elevator coordination',
      'Resident and HOA billing separated',
    ],
    faqs: [
      { q: 'Do you provide a Certificate of Insurance?', a: 'Yes, with additional insureds added as your management company requires. We can send it in advance of any work, and in New York and Miami many major managers already have us on file.' },
      { q: 'How do you handle resident-billed versus HOA-billed work?', a: 'Per-unit work residents request is billed to the resident or unit per your management agreement. Association-owned work — common areas, building loops — is billed to the HOA. Separate invoices, separate work orders, whatever your accounting needs.' },
      { q: 'Can you respond to resident emergencies 24/7?', a: 'Yes, on full-tier contracts. The resident calls our dispatch, we triage and respond per the building agreement. Non-emergency calls are typically scheduled within 24–48 hours; no heat in winter or an active water leak gets same-day.' },
      { q: 'Do we have to commit to a long-term contract?', a: 'No. We work both on annual contracts and on a case-by-case basis. Most boards find a contract pays for itself once they see how many small issues get caught early, but there is no pressure.' },
      { q: 'What happens if you find equipment that needs replacing mid-contract?', a: 'It goes in the visit report with a separate quote. The board decides if and when to schedule. Nothing outside the contract scope happens without approval — no surprise charges.' },
      { q: 'Can you work after hours to avoid disrupting residents?', a: 'Yes, and it is common for common-area work. After-hours carries a modest premium, quoted up front so there are no surprises on the invoice.' },
    ],
  },

  {
    slug: 'hospitality',
    name: 'Hospitality',
    navNote: 'Hotels & restaurant groups',
    title: 'HVAC for hotels, restaurants and hospitality.',
    lead: 'PTAC arrays in guest rooms, rooftop units over kitchens, makeup-air balance, banquet load swings. We work the hours your business is closed.',
    metaDescription:
      'Hospitality HVAC across 10 U.S. metros. Hotel PTAC programs, restaurant rooftop units, kitchen makeup-air, scheduled around your operations.',
    image: 'serviceAc',
    whatWeDo: [
      'Hospitality HVAC fails differently. Hotel PTACs run around the clock and burn through compressors. Restaurant rooftop units fight kitchen heat loads other commercial units never see. Bars go from empty to packed in half an hour and the system has to keep up.',
      'Every part of our service model here is built around operational reality: after-hours work so guests and service are not disrupted, fast turnaround on emergencies where a hot guest room is lost revenue, and genuine familiarity with the failure modes specific to commercial kitchens and high-occupancy spaces.',
    ],
    whyTitle: 'We work your hours, not ours.',
    why: [
      { title: 'After-hours execution', body: 'Restaurant rooftop work overnight when the kitchen is closed. Hotel PTAC swaps mid-week off-peak. Bar HVAC after last call. We work when your business does not.' },
      { title: 'High-volume PTAC programs', body: 'Hotels run 100+ PTACs and replace on rolling six to eight year cycles. We run those programs at per-unit pricing well below ad-hoc rates, scheduled during low occupancy.' },
      { title: 'Kitchen makeup-air expertise', body: 'Commercial kitchens need carefully balanced exhaust and makeup air. Get it wrong and you pull cold air through the dining room. We service the full system, not just the AC.' },
      { title: 'Emergency response that reflects the stakes', body: 'A hot guest room in summer is lost revenue plus a review. We treat it as urgent because it is.' },
      { title: 'Banquet and event load swings', body: 'A room goes from empty to 200 people. Often the controls are the real problem rather than the equipment, and we service both.' },
      { title: 'Documentation for capex planning', body: 'Written reports with photos after every visit, which is what you need to justify a rolling replacement program to ownership.' },
    ],
    engagementTitle: 'From site visit to ongoing service.',
    engagement: [
      { title: 'Off-hours walkthrough and inventory', body: 'We tour during off-hours: PTAC count and ages, rooftop condition, kitchen exhaust and makeup, hot water capacity. Documented as a written inventory you can use for capex planning.' },
      { title: 'Service tier design', body: 'Hotels typically need rolling PTAC replacement plus quarterly common-area service. Restaurants need rooftop preventive maintenance plus emergency response. We size the contract to operations.' },
      { title: 'Off-hours scheduling', body: 'Restaurant rooftop work overnight, typically 1am–6am. Hotel PTAC programs during low-occupancy weeks. Banquet venues between events.' },
      { title: 'Emergency response and reporting', body: 'Same-day on hot kitchens or freezing guest rooms. Written report with photos after every visit for capex and insurance documentation.' },
    ],
    pricingTitle: 'What drives hospitality pricing.',
    pricing: [
      { title: 'Equipment count and type', body: 'A 100-room hotel gets per-unit PTAC pricing well below single-unit rates. A restaurant with two rooftop units is priced per unit with kitchen hood adders.' },
      { title: 'Work-hour window', body: 'After-hours carries a premium, quoted up front. Most restaurant clients find it costs less than lost trading hours during the day.' },
      { title: 'Volume and frequency', body: 'Annual contracts — rolling PTAC programs, quarterly RTU maintenance — price better per visit than ad-hoc calls. Most hospitality clients move to a contract within a year.' },
    ],
    cardFeatures: [
      'Overnight and off-peak scheduling',
      'Rolling PTAC replacement programs',
      'Kitchen makeup-air balance',
      'Same-day emergency response',
    ],
    faqs: [
      { q: 'How often should hotel PTACs be replaced?', a: 'Typical commercial runtime is 50–70 hours a week in active rooms, so most hotel PTACs need replacing at seven to ten years — sooner in high-occupancy properties. We inventory ages on the walkthrough and recommend a replacement cycle you can budget.' },
      { q: 'Can you work overnight in a restaurant?', a: 'Yes, and it is most of our restaurant work. Overnight rooftop service, kitchen hood maintenance after closing, equipment swaps during off-hours. We schedule around your service.' },
      { q: 'What about kitchen makeup-air?', a: 'A commercial kitchen needs exhaust and makeup air balanced against each other. Get the maths wrong and the kitchen pulls conditioned air out of the dining room, which customers feel immediately. We design and service the whole system.' },
      { q: 'What does a rolling PTAC program look like?', a: 'Typically 15–25% of units replaced per year on a six to eight year cycle, scheduled during low-occupancy weeks. Single point of contact with your operations team for room availability, and a budget line you can forecast.' },
      { q: 'Do you handle banquet and event spaces?', a: 'Yes, and they are their own challenge because the load swings enormously between empty and a 200-person dinner. Often the controls are the real constraint rather than the equipment, and we service both.' },
    ],
  },

  {
    slug: 'light-commercial',
    name: 'Light Commercial',
    navNote: 'Offices, retail & mixed-use',
    title: 'HVAC for offices, retail and light commercial.',
    lead: 'Small to mid-size offices, retail storefronts, medical and dental, mixed-use. After-hours service so your business stays open.',
    metaDescription:
      'Light commercial HVAC across 10 U.S. metros. Offices, retail, medical and dental, mixed-use. After-hours service and predictable per-visit pricing.',
    image: 'serviceHeating',
    whatWeDo: [
      'Most commercial HVAC vendors specialise at one extreme or the other: residential split systems on one end, large corporate plant on the other. Light commercial — the offices, retail spaces and small-business buildings that make up most commercial real estate in our metros — falls in the gap.',
      'We work it. Rooftop units on retail buildings, ductless in renovated storefronts, central systems in mid-size offices, dedicated server-room cooling. After-hours service so your business stays open, and per-visit pricing disclosed up front rather than discovered on the invoice.',
    ],
    whyTitle: 'What small commercial actually needs.',
    why: [
      { title: 'After-hours as the default', body: 'Office work happens evenings or weekends; retail rooftop work overnight. We default to your operating hours rather than ours.' },
      { title: 'Predictable per-visit pricing', body: 'Diagnostic fees and hourly labour disclosed up front. Repeat clients know exactly what a visit costs before we arrive.' },
      { title: 'You get a facilities department', body: 'Light commercial businesses do not have one. We act like it — equipment inventoried, ages tracked, replacement forecast rather than sprung on you.' },
      { title: 'Licensed and insured for landlords', body: 'COI for your landlord or management company, sent in advance of the first visit rather than after they ask.' },
      { title: 'Server rooms and dedicated cooling', body: 'Small-office server rooms need cooling that runs 24/7, which office HVAC was never designed to do. We size and install it separately.' },
      { title: 'No contract required', body: 'Plenty of our light commercial work is one-off T&M. Many clients move to a contract eventually, but we do not make it a condition.' },
    ],
    engagementTitle: 'From first call to ongoing relationship.',
    engagement: [
      { title: 'First visit and assessment', body: 'We respond to your call — usually a repair — diagnose, quote and execute. While there we document the rest of your equipment, which is useful for capex planning later.' },
      { title: 'Quote and scheduling', body: 'Quote in writing before any work, with after-hours options. You approve in writing before we proceed.' },
      { title: 'Execution and walkthrough', body: 'Work performed cleanly, equipment tested, walkthrough so you know what was done. Photos and a written summary in your file.' },
      { title: 'Optional service contract', body: 'If repeat work looks likely we will quote a maintenance contract that locks in pricing and includes scheduled visits. No pressure — some clients prefer T&M and that is fine.' },
    ],
    pricingTitle: 'What drives the price.',
    pricing: [
      { title: 'Equipment type and size', body: 'Rooftop unit work has different economics from ductless or central systems. We quote against what is actually installed rather than a generic per-square-foot figure.' },
      { title: 'Work-hour window', body: 'Daytime is standard rate; after-hours and weekends carry a modest premium, quoted up front. Most clients find it costs less than lost trading hours.' },
      { title: 'Contract versus ad-hoc', body: 'Annual contracts get better per-visit pricing and priority response. Ad-hoc is entirely fine too — we are happy either way.' },
    ],
    cardFeatures: [
      'After-hours by default',
      'Per-visit pricing up front',
      'Server-room and IDF cooling',
      'No contract required',
    ],
    faqs: [
      { q: 'Do you work on single-tenant office buildings?', a: 'Yes — offices from about 1,000 to 30,000 sq ft are squarely in our range. Single or multi-tenant, owner-occupied or leased.' },
      { q: 'What about server-room cooling?', a: 'Yes. Small-office server rooms need dedicated cooling — usually a mini-split or small dedicated unit — because they run a 24/7 load that office HVAC was never designed for. We size and install it separately from the main system.' },
      { q: 'Do you handle medical and dental offices?', a: 'Yes. They carry specific requirements around filtration and, in some cases, isolation and dedicated equipment cooling. We work within your existing infection-control protocols.' },
      { q: 'How fast can you respond to a no-cool emergency?', a: 'Same-day on most calls if you reach us in the morning. Contract clients get priority dispatch. After-hours emergency response is available at a modest premium.' },
      { q: 'Can you handle a mixed-use building?', a: 'Yes, and it is common — retail below, residential above. We handle the commercial systems and the residential ones, so you have a single point of contact for the whole building.' },
    ],
  },

  {
    slug: 'rooftop-replacement',
    name: 'Rooftop Replacement',
    navNote: 'Crane, permits, coordination',
    title: 'Commercial rooftop replacement — the work others decline.',
    lead: 'Crane lifts, city permits, police-coordinated street closures and single-day execution. The HVAC is straightforward; the project management is why most contractors say no.',
    metaDescription:
      'Commercial rooftop unit replacement across 10 U.S. metros. Crane coordination, full permit package, street closure management, single-day execution.',
    image: 'commercialRooftop',
    whatWeDo: [
      'Most HVAC contractors will not take on rooftop replacement in a dense market. The permits, crane logistics and street-closure coordination are intimidating, so when a commercial rooftop unit fails, building owners frequently spend weeks just finding someone willing to take the project.',
      'That is where we built a practice. Established crane firm relationships, familiarity with the permit process in each of our metros, police coordination experience, and single-day execution capability. The aim is that a rooftop replacement is a one-day event for you rather than a six-week saga.',
    ],
    whyTitle: 'Crane lifts, permits, street closures.',
    why: [
      { title: 'Crane coordination', body: 'We size the crane to your unit and roof access, schedule the lift, coordinate rigging and manage the sequence. Old unit off in the morning, new unit on in the afternoon.' },
      { title: 'Full permit package', body: 'Mechanical and electrical always, gas where applicable, structural review for roof loading case by case, and street closure where the street is too narrow. We pull all of it.' },
      { title: 'Police coordination where required', body: 'In dense markets a lift frequently needs traffic management. We handle notification and scheduling rather than handing you a phone number.' },
      { title: 'Single-day execution', body: 'Most swaps complete in one day — lifted, set, ducted, connected, started and tested before close of business.' },
      { title: 'Line-itemed logistics', body: 'Crane, permits and street closure are quoted as separate visible line items rather than buried in the equipment price, so you can see what the logistics genuinely cost.' },
      { title: 'Weather contingency stated up front', body: 'Crane lifts are weather dependent. Our policy is to reschedule within a week at no charge, and we say so in the quote rather than after it rains.' },
    ],
    engagementTitle: 'From site visit to lift day.',
    engagement: [
      { title: 'Site visit and assessment', body: 'We tour the roof with you: existing unit condition, curb compatibility, roof access, electrical, gas, structural concerns. Photographed and documented, and the quote is written against actual conditions.' },
      { title: 'Permits and crane scheduling', body: 'Full permit package pulled in parallel. Crane firm booked for a specific date window. Lead time is typically two to four weeks depending on the market and whether a street closure is needed.' },
      { title: 'Pre-lift coordination', body: 'Site notices posted, police notified if a closure is required, tenants informed of parking restrictions and expected duration. Old unit disconnected the day before where access allows.' },
      { title: 'Lift day', body: 'Crane arrives early morning. Old unit off and hauled away, new unit set on the curb, ducted, connected, started and tested. Walkthrough with the building owner before the crew leaves.' },
    ],
    pricingTitle: 'What drives project cost.',
    pricing: [
      { title: 'Unit tonnage', body: 'Five-ton units are the most common in light commercial and price predictably. Larger units cost more for both equipment and a bigger crane. Multi-unit projects get volume pricing.' },
      { title: 'Crane logistics', body: 'Building setback, roof height and street access all determine crane size and closure scope. A wide commercial street costs materially less to lift on than a narrow side street.' },
      { title: 'Curb compatibility', body: 'An existing curb that matches means a fast swap. A new curb or adapter adds time plus roofing-warranty coordination. We measure at the site visit so you know which before we quote.' },
    ],
    cardFeatures: [
      'Crane scheduling included',
      'Full permit package',
      'Street closure coordination',
      'Single-day execution',
    ],
    faqs: [
      { q: 'How long does a rooftop replacement take?', a: 'A single-unit swap with the existing curb intact is one day, early morning to mid-afternoon. New curb work adds one to two days for roofing coordination. Multi-unit projects run across consecutive lift days.' },
      { q: 'What is the lead time?', a: 'Typically two to four weeks from approval. Mechanical permits usually clear in five to ten business days; street-closure permits are the long pole at two to four weeks. Crane firms book two to three weeks out for non-emergency work.' },
      { q: 'Do I need a police escort for the crane?', a: 'Frequently in dense markets, depending on street width. We will tell you at the site visit whether it is needed, and it is quoted as a separate line item so you can see the cost.' },
      { q: 'How much will my business be disrupted?', a: 'Most replacements happen in a single day. Offices and multi-zone retail often do not need to close at all. Restaurants and businesses that cannot operate without HVAC usually schedule off-hours or off-season.' },
      { q: 'What if my curb does not match the new unit?', a: 'About 60% of replacements reuse the existing curb with an adapter kit. We measure at the site visit so you know which path you are on before we quote rather than discovering it on lift day.' },
      { q: 'What happens if it rains on lift day?', a: 'We reschedule within a week at no charge for the postponement. Crane lifts are weather dependent and pretending otherwise helps nobody — it is stated in the quote.' },
    ],
  },

  {
    slug: 'maintenance-contracts',
    name: 'Maintenance Contracts',
    navNote: 'Quarterly to annual',
    title: 'Commercial HVAC maintenance contracts.',
    lead: 'Scheduled visits, per-unit pricing, response SLAs in writing, and a written report every time. Predictability instead of panic-priced emergencies.',
    metaDescription:
      'Commercial HVAC maintenance contracts across 10 U.S. metros. Three tiers, defined response SLAs, per-unit pricing and written reports every visit.',
    image: 'serviceIaq',
    whatWeDo: [
      'Commercial HVAC failures cost money in ways the repair invoice never shows. A restaurant rooftop unit failing on a 90°F Saturday costs more in lost trade than a year of preventive maintenance. A condo boiler failing in January costs an association hundreds of resident calls.',
      'A maintenance contract is the cheapest insurance against that. Scheduled visits catch what becomes an emergency. Priority dispatch turns days into hours when something does fail. And per-unit budgeting replaces the worst category of facility expense: unpredictable, ad-hoc, panic-priced repairs.',
    ],
    whyTitle: 'What makes our contracts different.',
    why: [
      { title: 'Per-property scope in writing', body: 'Each property gets a written scope: visit frequency, equipment included, what is covered, what is extra. No vague boilerplate.' },
      { title: 'Response SLAs, not "reasonable effort"', body: 'A defined number of hours by tier and severity, agreed in the contract. You can hold us to it because it is written down.' },
      { title: 'Predictable annual cost', body: 'Annual contract value lets you budget. Variable costs — major parts, emergency work — reported separately rather than hidden in a lump sum.' },
      { title: 'Written report every visit', body: 'Equipment inspected, issues found, parts replaced, recommendations. Useful for capex planning, warranty claims and insurance documentation.' },
      { title: 'Nothing outside scope without approval', body: 'Anything beyond the contract gets quoted and approved before work happens. No surprise line items.' },
      { title: 'Cancel with 60 days notice', body: 'Pro-rated refund on the unused portion of a prepaid contract. If it is not working we would rather know and fix it than hold you to a term.' },
    ],
    engagementTitle: 'Three tiers, plus custom.',
    engagement: [
      { title: 'Basic — scheduled visits', body: 'Quarterly or semi-annual visits: filter changes, belt checks, refrigerant pressure, control verification, written report. Parts and repair labour billed separately at contract rates.' },
      { title: 'Standard — visits plus priority', body: 'Everything in Basic, plus priority dispatch on emergencies. Same-day response during business hours, same-night after hours. Locked-in hourly repair rates.' },
      { title: 'Full — visits, priority and parts pool', body: 'Everything in Standard, plus a parts pool for common consumables — filters, belts, capacitors. The most predictable annual cost, with fewest mid-year surprises.' },
      { title: 'Custom — portfolio and specialty', body: 'Multi-property portfolios, hospitality off-hours work, mixed property types. We design to your operations rather than forcing a template onto your building.' },
    ],
    pricingTitle: 'What drives contract pricing.',
    pricing: [
      { title: 'Equipment count', body: 'More units means better per-unit pricing. A 40-unit hotel PTAC contract prices very differently from a five-unit small office. We adjust as your scope changes.' },
      { title: 'Equipment type', body: 'PTACs are simple with common parts and price lowest per unit. WSHPs are more complex and manufacturer-specific. Rooftop units carry access costs. Mixed portfolios get mixed rates.' },
      { title: 'Tier level', body: 'Basic is the lowest annual cost. Standard with priority response is roughly a 30% premium. Full with a parts pool is roughly 60%. Most clients settle on Standard, because the priority response is what actually saves money.' },
    ],
    cardFeatures: [
      'Three tiers plus custom',
      'Response SLAs in writing',
      'Written report every visit',
      '60-day cancellation',
    ],
    faqs: [
      { q: 'How often are visits?', a: 'It depends on equipment and tier. Office and retail is typically semi-annual, spring and autumn. Hotels and restaurants are quarterly. Condo common areas quarterly. Hotel PTAC arrays run on a rolling schedule through the year. We design frequency around runtime and risk.' },
      { q: 'What is covered versus extra?', a: 'Covered: scheduled visit labour, basic consumables on some tiers, inspection, calibration and reporting. Extra: major parts such as compressors and control boards, refrigerant top-ups, and work outside the contract scope. Everything extra gets approved before any work.' },
      { q: 'How fast do you respond to emergencies?', a: 'Standard tier: same business day on business-hours calls, next morning on after-hours. Full tier: same-day on business hours, same-night after hours. These are committed in the contract as specific hours rather than vague language.' },
      { q: 'Can I cancel mid-contract?', a: 'Yes, with 60 days notice, and we pro-rate a refund on the unused portion of a prepaid contract. If something is not working we would rather know about it than hold you to a term.' },
      { q: 'Will you cover equipment you did not install?', a: 'Yes, the same as equipment we did install, provided it is in serviceable condition. Many of our contract clients have equipment another contractor installed years earlier.' },
    ],
  },
]

export const programBySlug = (slug: string) =>
  commercialPrograms.find((p) => p.slug === slug)
