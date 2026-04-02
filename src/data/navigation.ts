export interface NavLink {
  label: string;
  href: string;
}

export interface NavSection {
  [category: string]: NavLink[];
}

export const navItems = [
  "Features",
  "Solutions",
  "Developers",
  "Resources",
  "Integrations",
] as const;

export const navDirectLinks: NavLink[] = [
  { label: "Blog", href: "https://www.revenuecat.com/blog" },
  { label: "Pricing", href: "https://www.revenuecat.com/pricing" },
];

export const navAuth = {
  login: { label: "Log In", href: "https://app.revenuecat.com/login" },
  signup: { label: "Sign Up", href: "https://app.revenuecat.com/signup" },
};

export const footerNav: NavSection = {
  Resources: [
    { label: "Press Kit", href: "https://www.revenuecat.com/press-kit/" },
    { label: "Careers", href: "https://jobs.ashbyhq.com/revenuecat" },
    { label: "Blog", href: "https://www.revenuecat.com/blog/" },
    { label: "Podcast", href: "https://subclub.com/" },
    {
      label: "Customer Stories",
      href: "https://www.revenuecat.com/testimonials",
    },
    { label: "Partners", href: "https://www.revenuecat.com/partners/" },
    {
      label: "Help Center",
      href: "https://community.revenuecat.com/",
    },
    { label: "Contact", href: "https://www.revenuecat.com/contact/" },
  ],
  Documentation: [
    {
      label: "Quickstart Guide",
      href: "https://www.revenuecat.com/docs/welcome/overview/",
    },
    {
      label: "Migration Guide",
      href: "https://www.revenuecat.com/docs/migrating-to-revenuecat/migration-paths/",
    },
    {
      label: "SDKs",
      href: "https://www.revenuecat.com/docs/getting-started/installation/",
    },
    {
      label: "API Reference",
      href: "https://www.revenuecat.com/docs/api-v1/",
    },
    {
      label: "Sample Apps",
      href: "https://www.revenuecat.com/docs/platform-resources/sample-apps/",
    },
    { label: "System Status", href: "https://status.revenuecat.com/" },
    { label: "View All Docs", href: "https://www.revenuecat.com/docs/" },
  ],
  Product: [
    {
      label: "Why RevenueCat",
      href: "https://www.revenuecat.com/why-revenuecat",
    },
    {
      label: "Integrations",
      href: "https://www.revenuecat.com/integrations/",
    },
    {
      label: "For Engineering Teams",
      href: "https://www.revenuecat.com/for-developers/",
    },
    {
      label: "For Marketing Teams",
      href: "https://www.revenuecat.com/for-marketing",
    },
    {
      label: "For Product Teams",
      href: "https://www.revenuecat.com/for-product/",
    },
    { label: "Pricing", href: "https://www.revenuecat.com/pricing/" },
    { label: "Changelog", href: "https://www.revenuecat.com/changelog" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "https://www.revenuecat.com/privacy" },
    {
      label: "Terms and Conditions",
      href: "https://www.revenuecat.com/terms",
    },
    { label: "GDPR", href: "https://www.revenuecat.com/gdpr" },
    {
      label: "Security and Compliance",
      href: "https://www.revenuecat.com/security-and-compliance",
    },
    {
      label: "Fair Billing Policy",
      href: "https://www.revenuecat.com/fair-billing/",
    },
  ],
};

export const socialLinks = [
  {
    label: "Github",
    href: "https://github.com/RevenueCat",
  },
  {
    label: "X (formerly Twitter)",
    href: "https://x.com/revenuecat",
  },
  {
    label: "Mastodon",
    href: "https://mastodon.social/@revenuecat",
  },
];
