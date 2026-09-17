// data/seo/locations.ts
// Location data for programmatic SEO pages

export interface Location {
  slug: string;
  name: string;
  region: string;
  postcode: string;
  context: string; // Unique local context for content differentiation
  industries: string[]; // Key local industries
  population?: string;
  // Long-form local material, merged in from the retired
  // /articles/hansendev/web-and-ai-integration-services-for-* article set, which was
  // targeting the same queries as these pages. Only the suburbs those articles
  // covered have it; the section is skipped where it is absent.
  localInsight?: {
    heading: string;
    paragraphs: string[];
    faqs: { question: string; answer: string }[];
  };
}

export const LOCATIONS: Location[] = [
  {
    slug: 'cairns-cbd',
    name: 'Cairns CBD',
    region: 'Cairns City',
    postcode: '4870',
    context: 'As the commercial heart of Far North Queensland, Cairns CBD is home to hundreds of retail shops, professional services, restaurants, and tourism operators along the Esplanade and Shields Street precinct.',
    industries: ['Tourism & Hospitality', 'Retail', 'Professional Services', 'Restaurants & Cafes', 'Real Estate'],
    localInsight: {
      heading: 'Working with Cairns CBD businesses',
      paragraphs: [
        'The CBD serves two customer bases at once: visitors deciding what to book while they walk the Esplanade, and professional services firms whose clients are local and repeat. A site pitched hard at one usually reads badly to the other, and that is normally the first thing worth sorting out.',
        'Demand also swings between the dry and the wet. Booking flows, rostering and stock all have to cope with a quiet Tuesday in February and a full Saturday in July, which is more an automation problem than a design one.',
      ],
      faqs: [
        { question: 'Do you work on site with CBD businesses?', answer: 'Yes. We\'re based in Cairns, so scoping, handover and training can happen in your office rather than over a call.' },
        { question: 'Most of my customers find me on a phone. Does that change the build?', answer: 'It changes the priorities. Someone searching on the Esplanade is on mobile data with one hand free, so load time, thumb-reachable actions and a visible Book or Call button matter more than a large desktop hero image.' },
      ],
    },
  },
  {
    slug: 'palm-cove',
    name: 'Palm Cove',
    region: 'Cairns Northern Beaches',
    postcode: '4879',
    context: 'Palm Cove is a boutique beachside village known for its luxury resorts, day spas, and award-winning restaurants along Williams Esplanade. It attracts high-end tourists and has a thriving local hospitality scene.',
    industries: ['Luxury Tourism', 'Day Spas & Wellness', 'Fine Dining', 'Boutique Accommodation', 'Wedding Services'],
    localInsight: {
      heading: 'Working with Palm Cove businesses',
      paragraphs: [
        'Palm Cove\'s resorts, day spas and restaurants sell on presentation, and the website is usually what a guest sees after a booking platform has already taken its cut. Anything that shifts a booking direct - availability that is genuinely current, an enquiry form that works at 10pm - tends to pay for itself quickly.',
        'The northern beaches also share a practical constraint in cyclone season. Anything that needs to stay up when the power does not is worth hosting and backing up accordingly, and that is a decision to make before launch rather than after.',
      ],
      faqs: [
        { question: 'We already sell through booking platforms. Is a website still worth it?', answer: 'The site is where you keep the margin the platforms take. It doesn\'t have to replace them - it has to be good enough that a guest who found you on a platform books direct the second time.' },
        { question: 'Do you cover the rest of the northern beaches?', answer: 'Yes - Trinity Beach, Clifton Beach and Smithfield as well. It is a short drive from Cairns, so on-site work is straightforward.' },
      ],
    },
  },
  {
    slug: 'port-douglas',
    name: 'Port Douglas',
    region: 'Douglas Shire',
    postcode: '4877',
    context: 'Port Douglas is a premium tourism destination and gateway to the Great Barrier Reef and Daintree Rainforest. Macrossan Street is lined with boutiques, galleries, and restaurants serving an international visitor base.',
    industries: ['Tourism & Reef Tours', 'Boutique Retail', 'Fine Dining', 'Luxury Accommodation', 'Adventure Tourism'],
    localInsight: {
      heading: 'Working with Port Douglas businesses',
      paragraphs: [
        'Reef operators, resorts and Macrossan Street retail all run on a short, intense season, and most of the pain is administrative rather than technical: the same five questions answered by hand, bookings re-keyed between systems, staff stretched at exactly the wrong moment.',
        'Visitors here are largely international and plan their day on a phone over breakfast. They expect current availability and an answer at 10pm, which is where automation earns its keep - and a booking flow that understands stinger season saves a lot of email.',
      ],
      faqs: [
        { question: 'We\'re an hour from Cairns. Does that make support harder?', answer: 'No. Most work is remote, and Port Douglas is an easy trip when something genuinely needs doing in person - which is more than an offshore agency can offer at any distance.' },
        { question: 'Can a booking system handle weather-dependent tours?', answer: 'Yes, and it should. Conditional availability, weather-pending reservations and automatic notice to guests are all workable once the system is yours rather than off the shelf.' },
      ],
    },
  },
  {
    slug: 'trinity-beach',
    name: 'Trinity Beach',
    region: 'Cairns Northern Beaches',
    postcode: '4879',
    context: 'Trinity Beach is a popular family-friendly beach suburb with a growing residential community. Local businesses cater to both residents and holiday visitors, with cafes, fitness studios, and trades services in demand.',
    industries: ['Cafes & Takeaway', 'Fitness & Wellness', 'Trades & Home Services', 'Holiday Rentals', 'Childcare'],
    localInsight: {
      heading: 'Working with Trinity Beach businesses',
      paragraphs: [
        'Trinity Beach runs on a mix of residents and holiday visitors, so a local business is often serving two markets from one site: the Sunday-morning regular and the family staying a week. Making both journeys obvious usually beats adding more pages.',
        'Trades and home services here win most work by phone. The gap worth closing is the after-hours one - enquiries that land at 7pm and go cold before anyone sees them.',
      ],
      faqs: [
        { question: 'I\'m a sole trader. Is custom work overkill?', answer: 'Often, yes. Plenty of jobs around Trinity Beach are better served by a fast, simple site plus one automation that stops enquiries going unanswered. We\'ll say so if that\'s the honest answer.' },
        { question: 'Can you help with the Google listing as well as the site?', answer: 'Yes. For local searches the Google Business Profile does as much work as the website, so we set the two up to agree with each other.' },
      ],
    },
  },
  {
    slug: 'smithfield',
    name: 'Smithfield',
    region: 'Cairns Northern Suburbs',
    postcode: '4878',
    context: 'Smithfield is a major retail and commercial hub anchored by Smithfield Shopping Centre. Home to James Cook University, it has a mix of student services, medical practices, and retail businesses.',
    industries: ['Retail', 'Medical & Health', 'Education Services', 'Food & Beverage', 'Professional Services'],
  },
  {
    slug: 'edge-hill',
    name: 'Edge Hill',
    region: 'Cairns Inner Suburbs',
    postcode: '4870',
    context: 'Edge Hill is one of Cairns\' most established suburbs with a vibrant cafe culture along Collins Avenue. Known for the Botanic Gardens precinct, it has a mix of creative businesses, health practitioners, and specialty retail.',
    industries: ['Cafes & Restaurants', 'Health & Wellness', 'Creative Services', 'Specialty Retail', 'Professional Services'],
  },
  {
    slug: 'redlynch',
    name: 'Redlynch',
    region: 'Cairns Western Suburbs',
    postcode: '4870',
    context: 'Redlynch is a rapidly growing residential suburb at the base of the Lamb Range. Redlynch Central shopping village serves a large family-oriented community with trades, medical, and retail services.',
    industries: ['Trades & Construction', 'Medical & Dental', 'Retail', 'Fitness & Sport', 'Childcare & Education'],
  },
  {
    slug: 'gordonvale',
    name: 'Gordonvale',
    region: 'Cairns Southern Corridor',
    postcode: '4865',
    context: 'Gordonvale is a historic sugar town 25km south of Cairns, growing as an affordable residential area. Local businesses serve the agricultural sector and expanding suburban community.',
    industries: ['Agriculture & Farming', 'Trades & Construction', 'Retail', 'Food & Beverage', 'Automotive'],
  },
  {
    slug: 'kuranda',
    name: 'Kuranda',
    region: 'Tablelands',
    postcode: '4881',
    context: 'Kuranda is the "Village in the Rainforest", famous for its markets, Scenic Railway, and Skyrail. Local businesses are heavily tourism-focused with arts, crafts, and nature experiences.',
    industries: ['Tourism & Markets', 'Arts & Crafts', 'Nature Experiences', 'Cafes & Restaurants', 'Boutique Retail'],
    localInsight: {
      heading: 'Working with Kuranda businesses',
      paragraphs: [
        'Kuranda trades heavily on foot traffic through the markets, which makes it unusually exposed when visitor numbers move. The businesses that hold up best are the ones with a way to sell to someone who has already gone home.',
        'Most visitors arrive having decided very little, and many are deciding on the Skyrail or the train on patchy mobile coverage. A page that loads slowly in the rainforest has effectively lost the customer before it renders.',
      ],
      faqs: [
        { question: 'We sell at the markets. Can stock stay in step online?', answer: 'Yes - that sync is usually the point. Selling the same piece twice because the market stall and the online store keep separate counts is the problem worth designing out.' },
        { question: 'Our season is very uneven. Does that suit a custom build?', answer: 'Sometimes not. If the quiet months are tight, a smaller build plus one or two automations is often the better call, and we\'ll tell you when that\'s the case.' },
      ],
    },
  },
  {
    slug: 'mareeba',
    name: 'Mareeba',
    region: 'Tablelands',
    postcode: '4880',
    context: 'Mareeba is the agricultural heartland of Far North Queensland, known for coffee, mango, and sugarcane farming. It serves as the commercial centre for the western Tablelands region.',
    industries: ['Agriculture & Coffee', 'Trades & Construction', 'Automotive', 'Retail', 'Professional Services'],
    localInsight: {
      heading: 'Working with Mareeba businesses',
      paragraphs: [
        'Mareeba\'s mix of agriculture, coffee, transport and trades produces a common pattern: three or four systems that don\'t talk to each other, and a person whose job is effectively copying between them. That is the cheapest thing to fix and usually the first thing we look at.',
        'Being on the Tablelands rather than the coast also changes how customers find you. Setting the Google Business Profile service area to cover Mareeba, Atherton and Kuranda properly is often worth more than another page on the site.',
      ],
      faqs: [
        { question: 'Our operation is seasonal. Can the software handle that?', answer: 'It should. Harvest and freight work in bursts, so anything built for it needs to cope with a flat month and a flat-out month without a different process for each.' },
        { question: 'Do we need to come to Cairns for meetings?', answer: 'No. Most of it works over video, and we come up the range when a session is better done in the room.' },
      ],
    },
  },
  {
    slug: 'atherton',
    name: 'Atherton',
    region: 'Atherton Tablelands',
    postcode: '4883',
    context: 'Atherton is the main town of the Atherton Tablelands, a fertile highland region with a cooler climate. It serves as a regional centre for agriculture, education, and healthcare.',
    industries: ['Agriculture & Dairy', 'Healthcare', 'Education', 'Retail', 'Government Services'],
    localInsight: {
      heading: 'Working with Atherton businesses',
      paragraphs: [
        'Atherton\'s base of agriculture, healthcare, education and government services is steadier than the coast, and the businesses here are usually less interested in growth hacking than in removing admin. Booking, rostering and record-keeping are where the hours actually go.',
        'Connectivity still varies across the Tablelands. Anything that has to work in a paddock or a shed rather than an office needs to tolerate a dropped connection, which rules out some cloud-only tools before you start.',
      ],
      faqs: [
        { question: 'Will something built for a coastal tourism business suit us?', answer: 'Usually not without changes. A dairy operation or a medical practice has different peaks, different record-keeping and different privacy obligations to a reef tour, and it\'s worth building for the one you\'re actually in.' },
        { question: 'What if our internet drops out mid-job?', answer: 'Then the tool needs to keep working and sync later. We\'d rather design for that than assume a connection that isn\'t always there.' },
      ],
    },
  },
  {
    slug: 'innisfail',
    name: 'Innisfail',
    region: 'Cassowary Coast',
    postcode: '4860',
    context: 'Innisfail is a heritage town known for its Art Deco architecture and surrounding banana and sugar plantations. It serves as the commercial centre for the Cassowary Coast region.',
    industries: ['Agriculture', 'Retail', 'Trades & Construction', 'Food & Beverage', 'Government Services'],
    localInsight: {
      heading: 'Working with Innisfail businesses',
      paragraphs: [
        'Innisfail\'s agriculture, trades and retail businesses mostly run on software that almost fits. The cost shows up as workarounds - a spreadsheet beside the system, a step someone remembers to do - rather than as a licence fee, which makes it easy to under-count.',
        'The Cassowary Coast is its own economic pocket, closer to Tully and Mission Beach than to Cairns in practice. Work here is nearly all remote, with visits when something warrants them.',
      ],
      faqs: [
        { question: 'Are we too far out for this to be practical?', answer: 'No. Distance stopped mattering for the build years ago; what still matters is being in the same time zone and reachable, which an offshore agency is not.' },
        { question: 'Can you replace just the part that does not work?', answer: 'Often that\'s the better project. Replacing one broken step and leaving the rest alone is cheaper and less disruptive than a rebuild you didn\'t ask for.' },
      ],
    },
  },
  {
    slug: 'mission-beach',
    name: 'Mission Beach',
    region: 'Cassowary Coast',
    postcode: '4852',
    context: 'Mission Beach is a laid-back coastal village surrounded by World Heritage rainforest. Tourism, adventure activities, and the creative arts drive the local economy.',
    industries: ['Tourism & Adventure', 'Accommodation', 'Cafes & Restaurants', 'Water Sports', 'Creative Arts'],
    localInsight: {
      heading: 'Working with Mission Beach businesses',
      paragraphs: [
        'Mission Beach swings hard between a full peak season and quiet months, and the two need different things from a business: capacity handling in one, and a reason for people to book ahead in the other. A site that only solves the first leaves the second on the table.',
        'Tourism operators here also deal with weather more directly than most. Bookings that can be held, moved or refunded without a phone call are worth more here than another marketing page.',
      ],
      faqs: [
        { question: 'How do we keep bookings coming in the quiet months?', answer: 'Mostly by capturing people while they\'re still interested - an enquiry that gets an answer at once, and a follow-up that happens without anyone remembering to send it.' },
        { question: 'Can a site handle high-resolution photography without getting slow?', answer: 'Yes. Images get compressed and sized properly at build time, so the beach still looks like the beach and the page still loads on mobile data.' },
      ],
    },
  },
  {
    slug: 'mossman',
    name: 'Mossman',
    region: 'Douglas Shire',
    postcode: '4873',
    context: 'Mossman is the administrative centre of the Douglas Shire, with the Mossman Sugar Mill as a local landmark. It serves as a service town for surrounding farming and tourism communities.',
    industries: ['Sugar & Agriculture', 'Trades & Construction', 'Retail', 'Tourism Services', 'Government'],
  },
  {
    slug: 'clifton-beach',
    name: 'Clifton Beach',
    region: 'Cairns Northern Beaches',
    postcode: '4879',
    context: 'Clifton Beach is a quiet residential beach suburb popular with families and retirees. The small shopping village services a growing community that values lifestyle and convenience.',
    industries: ['Cafes & Takeaway', 'Health & Wellness', 'Real Estate', 'Trades & Home Services', 'Retail'],
  },
  {
    slug: 'earlville',
    name: 'Earlville',
    region: 'Cairns Southern Suburbs',
    postcode: '4870',
    context: 'Earlville is a major retail hub anchored by Stockland Cairns shopping centre. It has a dense concentration of retail, medical, and professional service businesses.',
    industries: ['Retail', 'Medical & Health', 'Professional Services', 'Food & Beverage', 'Automotive'],
  },
  {
    slug: 'freshwater',
    name: 'Freshwater',
    region: 'Cairns Inner Suburbs',
    postcode: '4870',
    context: 'Freshwater is a leafy inner suburb home to the historic Freshwater Railway Station, the departure point for the Kuranda Scenic Railway. It has a village feel with local cafes and small businesses.',
    industries: ['Tourism', 'Cafes & Restaurants', 'Trades & Home Services', 'Health & Wellness', 'Creative Services'],
  },
  {
    slug: 'whitfield',
    name: 'Whitfield',
    region: 'Cairns Inner Suburbs',
    postcode: '4870',
    context: 'Whitfield is an elevated residential suburb with rainforest surroundings and proximity to the Botanic Gardens. It attracts health professionals, consultants, and home-based businesses.',
    industries: ['Health & Medical', 'Professional Services', 'Home-Based Business', 'Wellness', 'Consulting'],
  },
  {
    slug: 'bentley-park',
    name: 'Bentley Park',
    region: 'Cairns Southern Suburbs',
    postcode: '4869',
    context: 'Bentley Park is one of Cairns\' fastest-growing suburbs with new housing estates and the Mt Sheridan Plaza shopping centre. It has strong demand for trades, childcare, and retail services.',
    industries: ['Trades & Construction', 'Retail', 'Childcare & Education', 'Food & Beverage', 'Medical & Dental'],
  },
  {
    slug: 'tully',
    name: 'Tully',
    region: 'Cassowary Coast',
    postcode: '4854',
    context: 'Tully is famous as Australia\'s wettest town, with a strong agricultural base in sugar and bananas. The Golden Gumboot monument attracts passing tourists on the Bruce Highway.',
    industries: ['Agriculture', 'Trades & Construction', 'Retail', 'Tourism', 'Government Services'],
  },
  {
    slug: 'ravenshoe',
    name: 'Ravenshoe',
    region: 'Atherton Tablelands',
    postcode: '4888',
    context: 'Ravenshoe is Queensland\'s highest town, known for the Millstream Falls and wind farm. It serves a rural community with timber, agriculture, and eco-tourism.',
    industries: ['Agriculture & Timber', 'Eco-Tourism', 'Trades', 'Retail', 'Renewable Energy'],
  },
  {
    slug: 'yungaburra',
    name: 'Yungaburra',
    region: 'Atherton Tablelands',
    postcode: '4884',
    context: 'Yungaburra is a charming heritage village on the Tablelands, famous for its monthly markets and platypus viewing at Peterson Creek. Tourism, arts, and B&Bs drive the local economy.',
    industries: ['Tourism & Markets', 'Accommodation (B&Bs)', 'Arts & Crafts', 'Cafes & Restaurants', 'Agriculture'],
  },
  {
    slug: 'cardwell',
    name: 'Cardwell',
    region: 'Cassowary Coast',
    postcode: '4849',
    context: 'Cardwell is a small seaside town on the Bruce Highway, the gateway to Hinchinbrook Island. Fishing, tourism, and passing highway trade support local businesses.',
    industries: ['Tourism & Fishing', 'Accommodation', 'Food & Beverage', 'Retail', 'Marine Services'],
  },
  {
    slug: 'babinda',
    name: 'Babinda',
    region: 'Cairns Southern Corridor',
    postcode: '4861',
    context: 'Babinda is a small sugar town south of Cairns, known for the Babinda Boulders swimming hole. Local businesses serve the agricultural and passing tourist trade.',
    industries: ['Agriculture', 'Tourism', 'Trades', 'Retail', 'Food & Beverage'],
  },
  {
    slug: 'cooktown',
    name: 'Cooktown',
    region: 'Cook Shire',
    postcode: '4895',
    context: 'Cooktown is a historic frontier town where Captain Cook beached the Endeavour in 1770. It serves as the northernmost service centre in Far North Queensland with growing tourism.',
    industries: ['Tourism & Heritage', 'Government Services', 'Fishing & Marine', 'Retail', 'Trades & Construction'],
  },
];

export const getLocation = (slug: string): Location | undefined => {
  return LOCATIONS.find(l => l.slug === slug);
};

export const getAllLocationSlugs = (): string[] => {
  return LOCATIONS.map(l => l.slug);
};
