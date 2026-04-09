export type Listing = {
  id: number;
  listingId: string;
  badge: string;
  category: string;
  niche: string;
  title: string;
  desc: string;
  price: string;
  monthlyNetProfit: string;
  monthlyRevenue: string;
  monetization: string;
  monthlyMultiple: string;
  firstMadeMoney: string;
  profitGrowth: string;
  revenueGrowth: string;
  trafficGrowth: string;
  screenshot?: string | null;
};

export const listings: Listing[] = [
  {
    id: 1,
    listingId: "#90354",
    badge: "New Listing",
    category: "Health & Fitness",
    niche: "Sports",
    title: "Health & Fitness, Sports",
    desc: "This business, first acquired by the current owner in January 2023, operates in the Health & Fit...",
    price: "$2,555,432",
    monthlyNetProfit: "$58,078",
    monthlyRevenue: "$310,163",
    monetization: "eCommerce, Amazon",
    monthlyMultiple: "44x",
    firstMadeMoney: "2023",
    profitGrowth: "557%",
    revenueGrowth: "104%",
    trafficGrowth: "75%",
    screenshot: "/projects-bidding/thumbnail.svg",
  },
  {
    id: 2,
    listingId: "#90355",
    badge: "New Listing",
    category: "Ecommerce",
    niche: "Fitness",
    title: "Premium Fitness Equipment Shopify Store",
    desc: "A highly profitable Shopify store selling premium fitness equipment with strong brand recognition and loyal repeat customers built over 4 years...",
    price: "$410,000",
    monthlyNetProfit: "$14,200",
    monthlyRevenue: "$21,600",
    monetization: "eCommerce, Shopify",
    monthlyMultiple: "28x",
    firstMadeMoney: "2020",
    profitGrowth: "212%",
    revenueGrowth: "88%",
    trafficGrowth: "43%",
    screenshot: "/projects-bidding/thumbnail.svg",
  },
  {
    id: 3,
    listingId: "#90356",
    badge: "New Listing",
    category: "Apps",
    niche: "Productivity",
    title: "Productivity Mobile App — 120K Downloads",
    desc: "Freemium productivity app with subscription upgrades serving over 120,000 downloads across iOS and Android platforms worldwide...",
    price: "$95,000",
    monthlyNetProfit: "$4,500",
    monthlyRevenue: "$6,800",
    monetization: "Subscriptions, Freemium",
    monthlyMultiple: "21x",
    firstMadeMoney: "2022",
    profitGrowth: "145%",
    revenueGrowth: "67%",
    trafficGrowth: "38%",
    screenshot: "/projects-bidding/thumbnail.svg",
  },
  {
    id: 4,
    listingId: "#90357",
    badge: "Featured",
    category: "Content",
    niche: "Tech",
    title: "Tech Blog Network — 1.5M Monthly Visitors",
    desc: "Established tech blog network generating consistent AdSense and affiliate revenue with over 1.5 million monthly visitors and strong SEO presence...",
    price: "$215,000",
    monthlyNetProfit: "$7,100",
    monthlyRevenue: "$9,400",
    monetization: "AdSense, Affiliate",
    monthlyMultiple: "30x",
    firstMadeMoney: "2018",
    profitGrowth: "320%",
    revenueGrowth: "95%",
    trafficGrowth: "112%",
    screenshot: "/projects-bidding/thumbnail.svg",
  },
  {
    id: 5,
    listingId: "#90358",
    badge: "New Listing",
    category: "Services",
    niche: "Marketing",
    title: "Digital Marketing Agency — Retainer Clients",
    desc: "A fully operational digital marketing agency with 15 recurring retainer clients providing stable monthly recurring revenue and strong growth potential...",
    price: "$350,000",
    monthlyNetProfit: "$11,900",
    monthlyRevenue: "$17,300",
    monetization: "Retainer, Services",
    monthlyMultiple: "29x",
    firstMadeMoney: "2019",
    profitGrowth: "178%",
    revenueGrowth: "72%",
    trafficGrowth: "29%",
    screenshot: "/projects-bidding/thumbnail.svg",
  },
  {
    id: 6,
    listingId: "#90359",
    badge: "New Listing",
    category: "YouTube",
    niche: "Finance",
    title: "Finance YouTube Channel — 420K Subscribers",
    desc: "Monetized finance YouTube channel with 420K subscribers generating income through sponsorship deals, AdSense, and affiliate partnerships...",
    price: "$275,000",
    monthlyNetProfit: "$9,800",
    monthlyRevenue: "$12,500",
    monetization: "AdSense, Sponsorships",
    monthlyMultiple: "28x",
    firstMadeMoney: "2021",
    profitGrowth: "290%",
    revenueGrowth: "83%",
    trafficGrowth: "61%",
    screenshot: "/projects-bidding/thumbnail.svg",
  },
  {
    id: 7,
    listingId: "#90360",
    badge: "New Listing",
    category: "Ecommerce",
    niche: "Eco",
    title: "Eco-Friendly Home Products Store",
    desc: "Sustainable home products ecommerce store with a loyal customer base, strong repeat purchase rate, and growing demand for eco-friendly alternatives...",
    price: "$160,000",
    monthlyNetProfit: "$5,600",
    monthlyRevenue: "$8,900",
    monetization: "eCommerce, DTC",
    monthlyMultiple: "28x",
    firstMadeMoney: "2021",
    profitGrowth: "134%",
    revenueGrowth: "56%",
    trafficGrowth: "47%",
    screenshot: "/projects-bidding/thumbnail.svg",
  },
  {
    id: 8,
    listingId: "#90361",
    badge: "New Listing",
    category: "SaaS",
    niche: "Support",
    title: "Customer Support Automation SaaS",
    desc: "AI-powered customer support automation platform serving 200+ paying companies with strong net revenue retention and expanding enterprise pipeline...",
    price: "$720,000",
    monthlyNetProfit: "$14,800",
    monthlyRevenue: "$19,600",
    monetization: "SaaS, Subscriptions",
    monthlyMultiple: "48x",
    firstMadeMoney: "2021",
    profitGrowth: "412%",
    revenueGrowth: "121%",
    trafficGrowth: "88%",
    screenshot: "/projects-bidding/thumbnail.svg",
  },
];

export const findListingById = (id?: string | number) => {
  if (id === undefined || id === null) return listings[0] ?? null;
  const numericId = typeof id === "string" ? Number(id) : id;
  if (!Number.isFinite(numericId)) return listings[0] ?? null;
  return listings.find((listing) => listing.id === numericId) ?? null;
};
