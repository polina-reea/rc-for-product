export interface Testimonial {
  id: string;
  company: string;
  category: string;
  logo: string;
  person: string;
  title: string;
  avatar: string;
  link: string;
  /** Plain text parts of the quote for inline usage */
  quoteParts: {
    before: string;
    bold: string;
    after: string;
  };
  quoteClass?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "chatgpt",
    company: "ChatGPT",
    category: "AI-Powered Conversational Assistant",
    logo: "https://cdn.sanity.io/images/c3qnx9b0/production/26753149521bfd2786c698504599908365f707f4-80x80.svg?w=128&q=75&auto=format",
    person: "Sara Conlon",
    title: "Head of Financial Engineering",
    avatar:
      "https://cdn.sanity.io/images/c3qnx9b0/production/11799f6c149ca96216c10ad887cfb2d546fba164-96x96.jpg?w=96&q=75&auto=format",
    link: "https://www.revenuecat.com/customers/revenuecat-openai",
    quoteParts: {
      before: "With RevenueCat, we ",
      bold: "never had to slow down",
      after: ". They made it easy to keep our focus on building the best product while ensuring our mission of accessible, safe AI for everyone.",
    },
    quoteClass: "text-lg",
  },
  {
    id: "holywater",
    company: "HOLYWATER",
    category: "Streaming & Entertainment",
    logo: "https://cdn.sanity.io/images/c3qnx9b0/production/89186aeb48369a707fd6e2203f844f63fe4d2174-80x80.svg?w=128&q=75&auto=format",
    person: "Anatolii Kasianov",
    title: "CTO and Co-founder",
    avatar:
      "https://cdn.sanity.io/images/c3qnx9b0/production/71ea6ff5cd78c0ba1e3afcce90d83c7875974c61-72x72.webp?w=96&q=75&auto=format",
    link: "https://www.revenuecat.com/customers/holywater/",
    quoteParts: {
      before: "RevenueCat ",
      bold: "eliminates the manual work",
      after: ". We can set up new products, entitlements, and price tiers quickly—without spending days building backend logic.",
    },
    quoteClass: "text-lg",
  },
  {
    id: "dub",
    company: "dub",
    category: "Music Streaming",
    logo: "https://cdn.sanity.io/images/c3qnx9b0/production/14acecb4a197d80dfa7986b2d8155c6a62256ca4-80x80.svg?w=128&q=75&auto=format",
    person: "Brett Chereskin",
    title: "COO",
    avatar:
      "https://cdn.sanity.io/images/c3qnx9b0/production/6b050be5acd2b53a12419b06a9cb648a6fb7800b-80x80.jpg?w=96&q=75&auto=format",
    link: "https://www.revenuecat.com/customers/dub-app",
    quoteParts: {
      before:
        "Moving from monthly to annual subscriptions was the most important shift we made for our business. RevenueCat gave us the flexibility to ",
      bold: "run A/B tests without engineering overhead",
      after: ", which was a game changer.",
    },
    quoteClass: "text-base",
  },
  {
    id: "vsco",
    company: "VSCO",
    category: "Photo Filters",
    logo: "https://cdn.sanity.io/images/c3qnx9b0/production/c067c6e0abe15a50015961e743f0fba52e9cd260-80x80.svg?w=128&q=75&auto=format",
    person: "Shaheen Essabhoy",
    title: "Business Intelligence",
    avatar:
      "https://cdn.sanity.io/images/c3qnx9b0/production/aa695acb486b9b84caaf0dae1f49933a62318122-82x82.jpg?w=96&q=75&auto=format",
    link: "https://www.revenuecat.com/customers/vsco/",
    quoteParts: {
      before:
        "The RevenueCat and Braze integration allowed us to implement ",
      bold: "fast winback messaging",
      after: ".",
    },
    quoteClass: "text-xl",
  },
  {
    id: "rocketsim",
    company: "RocketSim",
    category: "An essential tool for app developers",
    logo: "https://cdn.sanity.io/images/c3qnx9b0/production/39f531e18947f35909fa6c1dd5858d562f2b1db9-80x80.svg?w=128&q=75&auto=format",
    person: "Antoine van der Lee",
    title: "Founder",
    avatar:
      "https://cdn.sanity.io/images/c3qnx9b0/production/681fa4aaa9574a6e693bc6fa348fdf5f6721710c-400x400.jpg?w=96&q=75&auto=format",
    link: "https://www.revenuecat.com/customers/rocketsim/",
    quoteParts: {
      before: "Using RevenueCat Experiments, I ",
      bold: "increased RocketSim's LTV by 47%",
      after: ". Experiments allowed me to quickly deploy tests for subscription duration mix and trial duration, all remotely without a new app submission.",
    },
    quoteClass: "text-base",
  },
  {
    id: "floga",
    company: "Floga",
    category: "Fitness Community",
    logo: "https://cdn.sanity.io/images/c3qnx9b0/production/72bc3edc393f03211054a0a2fbaa95c7baf0ec28-80x80.svg?w=64&q=75&auto=format",
    person: "Umberto Mezzadra",
    title: "CEO",
    avatar: "",
    link: "https://www.revenuecat.com/customers/floga",
    quoteParts: {
      before: "Generated ",
      bold: "$120K+ in one day",
      after:
        " of pre-launch lifetime memberships via RevenueCat Web Billing.",
    },
  },
];

/** Helper to find a testimonial by id */
export function getTestimonial(id: string): Testimonial {
  const t = testimonials.find((t) => t.id === id);
  if (!t) throw new Error(`Testimonial not found: ${id}`);
  return t;
}
