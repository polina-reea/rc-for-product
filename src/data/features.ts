export interface Feature {
  id: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  iconColor: string;
  /** Icon key referencing a component from Icons.tsx */
  iconKey: "paywall" | "experiment" | "target" | "globe" | "billing" | "ltv" | "chart" | "data";
  /** Whether to show AI tag (paywalls only) */
  aiTag?: boolean;
}

// --- Iterate section features ---

export const iterateFeatures: Feature[] = [
  {
    id: "paywalls",
    iconKey: "paywall",
    iconColor: "shadow-feature-blue text-secondary-blue-1",
    title: "Design paywalls, no code",
    aiTag: true,
    description:
      "Start with AI-generated designs or build from scratch. No-code templates, Figma import, custom HTML. Hit publish and it's live on iOS, Android, and web. No App Store review.",
    link: "https://www.revenuecat.com/feature/paywalls",
    linkText: "Explore Paywalls",
  },
  {
    id: "experiments",
    iconKey: "experiment",
    iconColor: "shadow-feature-red text-secondary-red",
    title: "Experiment and predict winners",
    description:
      "Up to four variants. RevenueCat predicts the 12-month LTV winner with revenue-based significance while the test is still running. Ship the winner in one click.",
    link: "https://www.revenuecat.com/feature/experiments/",
    linkText: "Explore Experiments",
  },
  {
    id: "targeting",
    iconKey: "target",
    iconColor: "shadow-feature-green text-secondary-green",
    title: "Target the right users",
    description:
      "Segment by cohort, country, or custom attribute. Show different offerings to different users, no code needed.",
    link: "https://www.revenuecat.com/feature/targeting",
    linkText: "Explore Targeting",
  },
];

// --- V1 uses slightly different titles for iterate features ---

export const iterateFeaturesV1 = [
  {
    ...iterateFeatures[0],
    title: "No-code paywall editor",
  },
  {
    ...iterateFeatures[1],
    title: "A/B testing that predicts the future",
  },
  {
    ...iterateFeatures[2],
    // title stays same
  },
];

// --- Understand section features ---

export interface UnderstandFeature {
  iconKey: "ltv" | "chart" | "data";
  title: string;
  description: string;
  color: string;
  /** Special rendering hint */
  variant?: "explorer" | "chart" | "logos";
}

export const understandFeatures: UnderstandFeature[] = [
  {
    iconKey: "ltv",
    title: "Predict, don't react",
    description:
      "LTV Prediction forecasts revenue by cohort. Cohort Explorer lets you slice by acquisition source, country, or custom segment.",
    color: "shadow-feature-blue text-secondary-blue-1",
    variant: "explorer",
  },
  {
    iconKey: "chart",
    title: "Paywall performance",
    description:
      "Four real-time charts: encounter rates, conversion, LTV by paywall, and abandonment. See what earns, not just what gets clicks.",
    color: "shadow-feature-red text-secondary-red",
    variant: "chart",
  },
  {
    iconKey: "data",
    title: "Your data, everywhere",
    description:
      "Stream events to Amplitude, Mixpanel, Segment, or your warehouse via Charts API and webhooks. No analyst bottleneck.",
    color: "shadow-feature-green text-secondary-green",
    variant: "logos",
  },
];

// --- Expand section features ---

export const expandFeatures: Feature[] = [
  {
    id: "funnels",
    iconKey: "globe",
    iconColor: "shadow-feature-blue text-secondary-blue-1",
    title: "Build web funnels",
    description:
      "Multi-step funnels with branching logic. Segment by country, survey response, or UTM source. Step-by-step conversion analytics show exactly where users drop off.",
    link: "https://www.revenuecat.com/feature/funnels/",
    linkText: "Explore Funnels",
  },
  {
    id: "billing",
    iconKey: "billing",
    iconColor: "shadow-feature-green text-secondary-green",
    title: "Skip the 30%",
    description:
      "Stripe, Apple Pay, or Google Pay checkout. Test prices the App Store won't let you. Web purchases auto-unlock in-app entitlements.",
    link: "https://www.revenuecat.com/feature/billing/",
    linkText: "Explore Web Billing",
  },
];

// --- V1 uses slightly different titles for expand features ---

export const expandFeaturesV1 = [
  {
    ...expandFeatures[0],
    title: "Web-to-app onboarding",
  },
  {
    ...expandFeatures[1],
    // title stays same
  },
];
