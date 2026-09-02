import type { ImageKey } from '@/content/images'

/**
 * Cornerstone posts.
 *
 * Three, deliberately. Each one exists to answer a decision a real customer is
 * stuck on, and each maps to a commercial page it can hand off to. A thin blog
 * of thirty 400-word posts is worth less than three that actually settle the
 * question — and unlike the reference site's blog, none of these needs a claim
 * we cannot back up.
 *
 * Body is authored as a small typed block list rather than MDX: it keeps the
 * whole site on one rendering path and one type-check, and there is no author
 * workflow here that needs a markdown pipeline yet.
 */

export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'callout'; title: string; text: string }
  | { type: 'table'; head: string[]; rows: string[][] }

export type Post = {
  slug: string
  title: string
  /** Shown on the index card and in the hero. */
  excerpt: string
  metaDescription: string
  category: 'Homeowners' | 'Facilities' | 'Comfort'
  /** ISO date. Used for schema and display. */
  published: string
  readingMinutes: number
  image: ImageKey
  body: PostBlock[]
  /** Where the post should hand the reader off. */
  next: { label: string; href: string }[]
}

export const posts: Post[] = [
  {
    slug: 'ductless-vs-central-ac-no-ductwork',
    title: 'Ductless vs. central AC in a home with no ductwork',
    excerpt:
      'If your house has radiators and plaster walls, the honest comparison is not efficiency ratings — it is what each option does to your building.',
    metaDescription:
      'Ductless mini-splits or a central system in a home with no ductwork? What each really costs, what installing them does to the building, and how to choose.',
    category: 'Homeowners',
    published: '2026-04-14',
    readingMinutes: 9,
    image: 'upgradeDuctless',
    body: [
      {
        type: 'p',
        text: 'A large share of the housing stock in Los Angeles, Philadelphia, Chicago and New York was built before central air conditioning existed. Those homes were heated by radiators or wall furnaces and were never ducted. If you own one, the question is not which system is more efficient on paper. It is which one you can actually install without gutting the house.',
      },
      {
        type: 'p',
        text: 'Here is the comparison we would give you standing in your hallway.',
      },
      { type: 'h2', text: 'What each option actually requires' },
      {
        type: 'h3',
        text: 'Ductless mini-splits',
      },
      {
        type: 'p',
        text: 'An outdoor condenser connects to one or more indoor heads by a refrigerant line set roughly three inches across. Each head conditions the room it is in and is controlled independently. Installation means a three-inch core hole through an exterior wall per head, plus a line set run to the outdoor unit — usually along an exterior wall in a covered channel, or through closets and soffits where the interior route works out.',
      },
      {
        type: 'p',
        text: 'No ductwork is built, so nothing structural is touched. A typical two- to four-head install is one to two days. That is the whole appeal.',
      },
      { type: 'h3', text: 'Central air in an unducted house' },
      {
        type: 'p',
        text: 'A central system needs somewhere to put an air handler and a path for supply and return ducts to every conditioned room. In a house that never had them, that path has to be created. In practice this means one of: a high-velocity small-duct system snaked through wall cavities, a conventional duct system routed through closets and dropped ceilings, or in some houses, an honest answer that there is no viable route at all.',
      },
      {
        type: 'p',
        text: 'It is a bigger job, involves drywall and finish work, and takes longer. It also produces one thermostat, no visible indoor units, and even air distribution — which is exactly what some people want.',
      },
      { type: 'h2', text: 'The trade-offs nobody puts on an equipment page' },
      {
        type: 'ul',
        items: [
          'Ductless heads are visible. Wall cassettes are much better looking than they were ten years ago, but there is a unit on the wall in each room. Ceiling cassettes and low-wall consoles reduce that; they cost more.',
          'Ductless zones each room independently, which is genuinely better if your south-facing rooms bake and your north bedroom is freezing. Central air will not fix that without added zoning.',
          'Central air filters everything through one place, which makes whole-home filtration, humidification and fresh-air ventilation straightforward. Doing the equivalent on a ductless system means per-head solutions or a separate ventilation system.',
          'Ductless avoids duct losses entirely. Ducts in an unconditioned attic can lose a meaningful share of what you paid to cool. In a hot-attic market that gap is not small.',
          'Resale reads differently by market. In dense Northeast housing stock ductless is completely normal. In a suburban Sun Belt market, buyers may expect central.',
        ],
      },
      {
        type: 'callout',
        title: 'The question that usually settles it',
        text: 'Is there a route for ducts that does not require opening finished walls and ceilings? If yes, both options are genuinely on the table and it comes down to preference and budget. If no, ductless is not a compromise — it is the correct answer, and you should stop feeling like you are settling.',
      },
      { type: 'h2', text: 'What each one costs' },
      {
        type: 'p',
        text: 'Ranges, not quotes — equipment selection, electrical work, access and permit costs move them, and they vary by market.',
      },
      {
        type: 'table',
        head: ['Approach', 'Typical range', 'What drives the number'],
        rows: [
          [
            'Single-zone ductless',
            '$4,000 – $7,500',
            'Head style, capacity, line-set length, electrical run',
          ],
          [
            'Multi-zone ductless (3–4 heads)',
            '$12,000 – $22,000',
            'Head count and style, condenser sizing, routing difficulty',
          ],
          [
            'High-velocity small-duct central',
            '$18,000 – $30,000',
            'Number of outlets, wall-cavity access, finish repair',
          ],
          [
            'Conventional central, retrofit ducting',
            '$16,000 – $32,000',
            'Duct routing, soffit and closet construction, finish work',
          ],
        ],
      },
      {
        type: 'p',
        text: 'Heat pump versions of either — and in 2026 most of what we install is a heat pump — may qualify for federal, state and utility incentives that change the real number substantially. Those programs differ in every metro and the amounts change annually, so we confirm current figures at quote time rather than printing stale ones here.',
      },
      { type: 'h2', text: 'How to decide in about ten minutes' },
      {
        type: 'ul',
        items: [
          'Walk the house and ask where a duct could physically run. Closets stacked between floors, an unfinished basement ceiling, a deep soffit — if none of that exists, you have your answer.',
          'Count how many rooms actually need conditioning. Two or three means ductless is likely cheaper. Seven means the head count starts to erase the savings.',
          'Decide how much you care about visible indoor units, honestly, before anyone quotes you.',
          'Ask whether you want whole-home filtration or humidity control. If yes, that pushes toward ducted, or toward a hybrid.',
          'Get someone to do a Manual J load calculation rather than sizing by square footage. Oversized equipment short-cycles, never dehumidifies properly, and fails early — and it is the single most common installation mistake we find in other people’s work.',
        ],
      },
      {
        type: 'p',
        text: 'There is a hybrid worth mentioning: ducted where a route exists, ductless for the two rooms it does not reach. It is more common than the equipment brochures suggest, and it is often the cheapest good answer.',
      },
    ],
    next: [
      { label: 'Ductless mini-splits', href: '/hvac-systems/ductless-mini-splits' },
      { label: 'Heat pumps', href: '/hvac-systems/heat-pumps' },
      { label: 'AC installation', href: '/services/air-conditioning/installation-replacement' },
    ],
  },

  {
    slug: 'structuring-a-multi-site-hvac-contract',
    title: 'How multi-site operators should structure an HVAC contract',
    excerpt:
      'The clauses that decide whether a portfolio agreement saves you money or just consolidates the invoices — written by the people who have to live inside them.',
    metaDescription:
      'What belongs in a multi-site HVAC contract: response SLAs by tier, approval thresholds, reporting format, parts pools, and the coverage clause most operators forget.',
    category: 'Facilities',
    published: '2026-05-22',
    readingMinutes: 11,
    image: 'commercialRooftop',
    body: [
      {
        type: 'p',
        text: 'Most multi-site HVAC agreements we are asked to replace fail in the same way. They specify a rate card and a vague promise of prompt service, and nothing else. A year in, the operator has consolidated their invoices and learned nothing about their portfolio.',
      },
      {
        type: 'p',
        text: 'The rate card is the least important part of the contract. Here is what actually determines whether the agreement works, in roughly the order it matters.',
      },
      { type: 'h2', text: '1. Site tiers, defined by you' },
      {
        type: 'p',
        text: 'Not every location is equally critical. A distribution office can be uncomfortable for a day. A restaurant kitchen or a data closet cannot. Tier your sites before anyone quotes you, and put the tiers in the agreement with a response window attached to each.',
      },
      {
        type: 'p',
        text: 'The vendor should not be the one deciding which of your sites matters. If a proposal arrives with a single blanket response time for a hundred locations, it was written to be easy to sell, not to be operated.',
      },
      { type: 'h2', text: '2. Response SLAs that mean something' },
      {
        type: 'ul',
        items: [
          'Define response as when a technician is on site, not when someone returns your call. The gap between those two definitions is where most SLA disputes live.',
          'Separate severity from tier. A Tier 1 site with a failed rooftop unit during service hours is not the same call as a Tier 1 site with a noisy fan.',
          'Say what happens when the window is missed. Even a modest credit changes behaviour, because it forces the vendor to staff honestly rather than promise generously.',
          'Be suspicious of a guaranteed one-hour response across multiple metros. Across real geography and real traffic, nobody can hold that. A vendor who promises it is either not going to honour it or has priced the failure in.',
        ],
      },
      { type: 'h2', text: '3. Approval thresholds' },
      {
        type: 'p',
        text: 'Set a dollar figure below which the technician proceeds without approval, and above which they stop and call. Get this wrong in either direction and it costs you: too low and your facilities manager spends their week approving $180 capacitor replacements; too high and you find out about a $4,000 decision on the invoice.',
      },
      {
        type: 'p',
        text: 'Most portfolios we work with land somewhere between $500 and $1,500. Name who can approve, and name a backup — a single named approver on vacation is how a site stays down over a long weekend.',
      },
      { type: 'h2', text: '4. Reporting format, specified in the contract' },
      {
        type: 'p',
        text: 'This is the clause that turns a vendor agreement into a management tool, and it is the one most often left out.',
      },
      {
        type: 'ul',
        items: [
          'Every visit produces the same structured report: equipment identified by asset tag, readings taken, work performed, parts used, and anything flagged with a photo.',
          'Monthly roll-up by site: visit count, spend, open items, repeat issues.',
          'Annual portfolio view: cost per site, cost per square foot, equipment approaching end of life.',
          'A specified export format so the data can leave the vendor’s system and enter yours. If reporting only exists inside their portal, you are renting your own operating history.',
        ],
      },
      {
        type: 'callout',
        title: 'Why this clause is the real prize',
        text: 'Consolidating vendors is not primarily about unit price. It is about producing comparable data across every location, so that after a year you can rank sites by cost, spot the equipment failing early, and build a capital plan from evidence instead of from whoever complained loudest. A contract without a reporting clause cannot deliver that no matter how good the rate card is.',
      },
      { type: 'h2', text: '5. Equipment inventory and age baseline' },
      {
        type: 'p',
        text: 'Require an inventory at onboarding: every unit, its model and serial, its installation year, its condition, and its expected remaining life. It takes real time and some vendors resist it because it is unbillable work up front.',
      },
      {
        type: 'p',
        text: 'It is also the difference between a replacement schedule and a series of emergencies. Without a baseline, every failure is a surprise capital request, and capital requests made in a crisis get approved at the worst prices.',
      },
      { type: 'h2', text: '6. Parts pools, where they make sense' },
      {
        type: 'p',
        text: 'For portfolios with standardised equipment — a chain with the same rooftop unit at forty sites, or a hotel group on the same PTAC — a stocked pool of common consumables converts a two-day parts wait into a same-visit fix. It only works where the equipment really is standardised. On a mixed portfolio it is an expensive shelf.',
      },
      { type: 'h2', text: '7. The coverage clause most operators forget' },
      {
        type: 'p',
        text: 'Ask directly, in writing: which of my locations will your own employed technicians serve, and which will be subcontracted? Then ask what happens at a site the vendor cannot cover well.',
      },
      {
        type: 'p',
        text: 'A national program that quietly subcontracts your outlying location to whoever answered the phone is not a national program — it is a markup on a stranger. There is nothing wrong with a vendor saying they do not cover a market. There is a great deal wrong with finding that out from a technician you have never heard of standing in your store.',
      },
      { type: 'h2', text: '8. Term, exit and portability' },
      {
        type: 'ul',
        items: [
          'A master agreement with per-location addendums, so sites can be added or removed mid-term as your footprint changes without renegotiating everything.',
          'A stated notice period, and no auto-renewal that quietly locks you in for another year.',
          'On exit, your data — the inventory, the service history, the reports — comes with you. Put that in writing.',
        ],
      },
      { type: 'h2', text: 'What to ask on the first call' },
      {
        type: 'ul',
        items: [
          'Which of my sites do your own employees cover, and which would be subcontracted?',
          'Show me the standard visit report, filled in, from a real job.',
          'What is your response SLA by tier, and what happens when you miss it?',
          'What does the onboarding inventory involve, and how long does it take?',
          'Which of my locations would you decline, and why?',
        ],
      },
      {
        type: 'p',
        text: 'That last question is the useful one. A vendor who answers it honestly is telling you they intend to be measured on what they actually deliver.',
      },
    ],
    next: [
      { label: 'National accounts', href: '/commercial/national-accounts' },
      { label: 'Maintenance contracts', href: '/commercial/maintenance-contracts' },
      { label: 'Property management', href: '/commercial/property-management' },
    ],
  },

  {
    slug: 'ac-cools-but-house-feels-clammy',
    title: 'Why your AC cools but the house still feels clammy',
    excerpt:
      'The thermostat says 72 and you are still sticky. That is a humidity problem, and in most cases it is caused by equipment that is too big.',
    metaDescription:
      'Cold but clammy? Why oversized AC fails to dehumidify, how to diagnose short-cycling, and what actually fixes indoor humidity in Houston, Miami and Atlanta.',
    category: 'Comfort',
    published: '2026-06-30',
    readingMinutes: 8,
    image: 'blogHumidity',
    body: [
      {
        type: 'p',
        text: 'A house at 72°F with 65% relative humidity feels considerably worse than the same house at 75°F with 45%. Your skin cannot evaporate moisture into air that is already saturated, so you stay damp and the room feels heavy no matter what the thermostat reads.',
      },
      {
        type: 'p',
        text: 'In Houston, Miami, Atlanta and the rest of the humid Southeast, this is the complaint we hear most. It is almost never a refrigerant problem, and it is usually not a broken system at all.',
      },
      { type: 'h2', text: 'How air conditioning removes moisture' },
      {
        type: 'p',
        text: 'Dehumidification is a side effect of cooling, not a separate function. Warm humid air passes over a cold evaporator coil, water condenses on the coil, and it drains away. Crucially, this takes time. The coil has to stay cold and the air has to keep moving across it for long enough that meaningful condensation happens.',
      },
      {
        type: 'p',
        text: 'A system that runs in short bursts cools the air quickly and then stops before it has removed much water. The thermostat is satisfied. You are not.',
      },
      { type: 'h2', text: 'The usual culprit: oversized equipment' },
      {
        type: 'p',
        text: 'An air conditioner sized larger than the house needs hits the target temperature fast and shuts off — a pattern called short-cycling. It is the single most common cause of a cold, clammy house, and it is an installation decision rather than a fault.',
      },
      {
        type: 'p',
        text: 'It happens because sizing by square footage, or by matching whatever was there before, is faster than doing a Manual J load calculation. Bigger also feels safer to the person selling it. The result is a system that cools well, dehumidifies badly, cycles constantly, wears its compressor out early, and costs more to run.',
      },
      {
        type: 'callout',
        title: 'A test you can run yourself',
        text: 'On a hot afternoon, time how long your system runs per cycle. Ten minutes or less, repeatedly, is short-cycling. A correctly sized system on a design-condition day should run in long cycles — fifteen to twenty minutes and up — and on the hottest afternoons it may run almost continuously. That is not a fault. That is what correct sizing looks like.',
      },
      { type: 'h2', text: 'The other causes, in rough order of frequency' },
      {
        type: 'ul',
        items: [
          'Blower speed set too high. Air moving too fast across the coil does not linger long enough to give up its moisture. On many systems this is a setting change, not a repair — and it is the cheapest fix on this list when it applies.',
          'Leaky return ducts in a hot attic or crawlspace. A return leak pulls in unconditioned, very humid air and dumps the moisture load right back on the system. Common in Atlanta crawlspace construction and Sun Belt attic ductwork.',
          'A dirty evaporator coil or clogged filter. Restricted airflow and reduced heat transfer. The maintenance answer, and genuinely common.',
          'Unaddressed moisture sources — an unsealed crawlspace, an unvented bathroom, a damp basement. No amount of air conditioning outruns standing water under the floor.',
          'Low refrigerant charge. Real, but far less common than the others, and it is where an inexperienced technician tends to reach first because adding refrigerant is billable.',
        ],
      },
      { type: 'h2', text: 'What actually fixes it' },
      {
        type: 'h3',
        text: 'Cheap first, if the system is correctly sized',
      },
      {
        type: 'ul',
        items: [
          'Have the blower speed checked and adjusted for dehumidification.',
          'Have the ducts tested for leakage and sealed, particularly returns in unconditioned space.',
          'Clean the coil and get on a maintenance schedule so it stays clean.',
          'Fix the moisture sources: encapsulate the crawlspace, vent the bathrooms outside rather than into the attic.',
        ],
      },
      { type: 'h3', text: 'If the system is oversized' },
      {
        type: 'ul',
        items: [
          'A variable-capacity or two-stage system. Instead of running full blast and stopping, it runs at a lower capacity for much longer — which is exactly the long runtime dehumidification needs. This is the real fix, and it is why we recommend variable-capacity equipment almost everywhere in the humid Southeast.',
          'A whole-home dehumidifier tied into the ductwork. It controls humidity independently of temperature, so you can hold 50% at 75°F rather than chasing it by over-cooling. Roughly $2,000 to $3,500 installed, and it is the right answer for a house that is otherwise fine.',
          'Correct sizing at replacement time. When the system is due anyway, insist on a Manual J load calculation. It is normal for the correct answer to be smaller than what is currently installed.',
        ],
      },
      { type: 'h2', text: 'What to aim for' },
      {
        type: 'p',
        text: 'Indoor relative humidity between 45% and 55% is the target. Below 40% gets uncomfortably dry and hard on wood floors and furniture. Above 60% is where the house feels clammy and where mould and dust mites become a genuine concern rather than a marketing line.',
      },
      {
        type: 'p',
        text: 'A $15 hygrometer will tell you where you actually are. Buy one before you buy anything else — it turns a vague complaint into a number, and a number is something a technician can work with.',
      },
    ],
    next: [
      { label: 'Indoor air quality', href: '/services/indoor-air-quality' },
      { label: 'AC maintenance', href: '/services/air-conditioning/maintenance' },
      { label: 'Houston', href: '/service-areas/houston' },
    ],
  },
]

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug)
