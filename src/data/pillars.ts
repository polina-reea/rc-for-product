export interface Pillar {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  tags: string[];
}

export const pillars: Pillar[] = [
  {
    number: "1",
    title: "Iterate on monetization",
    shortTitle: "Iterate",
    description: "Ship paywalls, run experiments, and target users. No app release\u00A0needed.",
    tags: ["Paywalls", "Experiments", "Targeting"],
  },
  {
    number: "2",
    title: "Understand your subscribers",
    shortTitle: "Understand",
    description:
      "Real-time Charts, LTV Prediction, and Cohort Explorer. Know what\u00A0works.",
    tags: ["Charts", "LTV Prediction", "Cohort Explorer"],
  },
  {
    number: "3",
    title: "Expand beyond the App Store",
    shortTitle: "Expand",
    description:
      "Web Funnels and Stripe-powered Billing. Reach users before the App\u00A0Store.",
    tags: ["Funnels", "Web Billing"],
  },
];
