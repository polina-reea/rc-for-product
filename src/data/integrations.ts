export interface Integration {
  name: string;
  logo: string;
  href?: string;
}

/** Full integrations list with links (used in Integrations grid section) */
export const integrations: Integration[] = [
  {
    name: "Amplitude",
    logo: "/integrations/Amplitude.svg",
    href: "https://www.revenuecat.com/integrations/amplitude/",
  },
  {
    name: "Mixpanel",
    logo: "/integrations/Mixpanel.svg",
    href: "https://www.revenuecat.com/integrations/mixpanel/",
  },
  {
    name: "Braze",
    logo: "/integrations/Braze.svg",
    href: "https://www.revenuecat.com/integrations/braze/",
  },
  {
    name: "Adjust",
    logo: "/integrations/Adjust.svg",
    href: "https://www.revenuecat.com/integrations/adjust/",
  },
  {
    name: "AppsFlyer",
    logo: "/integrations/AppsFlyer.svg",
    href: "https://www.revenuecat.com/integrations/appsflyer/",
  },
  {
    name: "Segment",
    logo: "/integrations/Segment.svg",
    href: "https://www.revenuecat.com/integrations/segment/",
  },
  {
    name: "Stripe",
    logo: "/integrations/Stripe.svg",
    href: "https://www.revenuecat.com/integrations/stripe/",
  },
  {
    name: "Slack",
    logo: "/integrations/Slack.svg",
    href: "https://www.revenuecat.com/integrations/slack/",
  },
];

/** Compact list for Foundation section (no links) */
export const foundationIntegrations = integrations.map(({ name, logo }) => ({
  name,
  logo,
}));

/** Subset for "Your data, everywhere" in Understand section */
export const analyticsIntegrations = [
  { name: "Amplitude", src: "/integrations/Amplitude.svg" },
  { name: "Mixpanel", src: "/integrations/Mixpanel.svg" },
  { name: "Segment", src: "/integrations/Segment.svg" },
  { name: "Slack", src: "/integrations/Slack.svg" },
];
