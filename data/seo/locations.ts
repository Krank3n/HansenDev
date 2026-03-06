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
}

export const LOCATIONS: Location[] = [
  {
    slug: 'cairns-cbd',
    name: 'Cairns CBD',
    region: 'Cairns City',
    postcode: '4870',
    context: 'As the commercial heart of Far North Queensland, Cairns CBD is home to hundreds of retail shops, professional services, restaurants, and tourism operators along the Esplanade and Shields Street precinct.',
    industries: ['Tourism & Hospitality', 'Retail', 'Professional Services', 'Restaurants & Cafes', 'Real Estate'],
  },
  {
    slug: 'palm-cove',
    name: 'Palm Cove',
    region: 'Cairns Northern Beaches',
    postcode: '4879',
    context: 'Palm Cove is a boutique beachside village known for its luxury resorts, day spas, and award-winning restaurants along Williams Esplanade. It attracts high-end tourists and has a thriving local hospitality scene.',
    industries: ['Luxury Tourism', 'Day Spas & Wellness', 'Fine Dining', 'Boutique Accommodation', 'Wedding Services'],
  },
  {
    slug: 'port-douglas',
    name: 'Port Douglas',
    region: 'Douglas Shire',
    postcode: '4877',
    context: 'Port Douglas is a premium tourism destination and gateway to the Great Barrier Reef and Daintree Rainforest. Macrossan Street is lined with boutiques, galleries, and restaurants serving an international visitor base.',
    industries: ['Tourism & Reef Tours', 'Boutique Retail', 'Fine Dining', 'Luxury Accommodation', 'Adventure Tourism'],
  },
  {
    slug: 'trinity-beach',
    name: 'Trinity Beach',
    region: 'Cairns Northern Beaches',
    postcode: '4879',
    context: 'Trinity Beach is a popular family-friendly beach suburb with a growing residential community. Local businesses cater to both residents and holiday visitors, with cafes, fitness studios, and trades services in demand.',
    industries: ['Cafes & Takeaway', 'Fitness & Wellness', 'Trades & Home Services', 'Holiday Rentals', 'Childcare'],
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
  },
  {
    slug: 'mareeba',
    name: 'Mareeba',
    region: 'Tablelands',
    postcode: '4880',
    context: 'Mareeba is the agricultural heartland of Far North Queensland, known for coffee, mango, and sugarcane farming. It serves as the commercial centre for the western Tablelands region.',
    industries: ['Agriculture & Coffee', 'Trades & Construction', 'Automotive', 'Retail', 'Professional Services'],
  },
  {
    slug: 'atherton',
    name: 'Atherton',
    region: 'Atherton Tablelands',
    postcode: '4883',
    context: 'Atherton is the main town of the Atherton Tablelands, a fertile highland region with a cooler climate. It serves as a regional centre for agriculture, education, and healthcare.',
    industries: ['Agriculture & Dairy', 'Healthcare', 'Education', 'Retail', 'Government Services'],
  },
  {
    slug: 'innisfail',
    name: 'Innisfail',
    region: 'Cassowary Coast',
    postcode: '4860',
    context: 'Innisfail is a heritage town known for its Art Deco architecture and surrounding banana and sugar plantations. It serves as the commercial centre for the Cassowary Coast region.',
    industries: ['Agriculture', 'Retail', 'Trades & Construction', 'Food & Beverage', 'Government Services'],
  },
  {
    slug: 'mission-beach',
    name: 'Mission Beach',
    region: 'Cassowary Coast',
    postcode: '4852',
    context: 'Mission Beach is a laid-back coastal village surrounded by World Heritage rainforest. Tourism, adventure activities, and the creative arts drive the local economy.',
    industries: ['Tourism & Adventure', 'Accommodation', 'Cafes & Restaurants', 'Water Sports', 'Creative Arts'],
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
