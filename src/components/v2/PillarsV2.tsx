import { BoltIcon, ChartIcon, GlobeIcon } from "../Icons";
import { FloatingBlobs } from "./FloatingBlobs";

const pillars = [
  {
    title: "Iterate on monetization",
    description: "Change your paywall on Monday. See results by Friday. No engineers required.",
    tags: ["Paywalls", "Experiments"],
    accentColor: "#576CDB",
    gradientBg: "from-[#EEF0FF] to-white",
    iconColor: "shadow-feature-blue text-secondary-blue-1",
    icon: <BoltIcon />,
  },
  {
    title: "Understand your subscribers",
    description: "Know which paywall actually earns, not just which one gets the most clicks.",
    tags: ["Charts", "LTV Prediction", "Cohorts"],
    accentColor: "#F2545B",
    gradientBg: "from-[#FFF0F0] to-white",
    iconColor: "shadow-feature-red text-secondary-red",
    icon: <ChartIcon />,
  },
  {
    title: "Expand beyond the\u00A0App\u00A0Store",
    description: "Convert users before they ever open the App\u00A0Store. Keep more of what you\u00A0earn.",
    tags: ["Web Funnels", "Web Billing"],
    accentColor: "#11D483",
    gradientBg: "from-[#EDFFF6] to-white",
    iconColor: "shadow-feature-green text-secondary-green",
    icon: <GlobeIcon />,
  },
];

export function PillarsV2() {
  return (
    <section className="relative bg-white py-28 max-xl:py-20 max-md:py-14">
      <FloatingBlobs color="blue" />
      <div className="container relative z-10">
        <header className="mb-12 flex flex-col items-center gap-4 text-center max-md:mb-10">
          <h2 className="font-object leading-dense font-medium tracking-tighter text-balance text-primary max-w-4xl max-lg:max-w-2xl text-[2.25rem] max-lg:text-[1.625rem] text-center mx-auto">
            <span className="v2-gradient-text">One platform,</span><br />three ways to grow
          </h2>
          <p className="text-xl font-light text-gray-800 max-w-2xl text-pretty max-md:text-base">
            From your first paywall to global web billing,<br />RevenueCat covers the full monetization lifecycle.
          </p>
        </header>

        <ul className="grid grid-cols-3 gap-8 max-xl:gap-6 max-lg:mx-auto max-lg:max-w-md max-lg:grid-cols-1 max-lg:gap-5">
          {pillars.map((pillar) => (
            <li
              key={pillar.title}
              className={`relative rounded-2xl p-5 px-6 max-xl:rounded-xl max-xl:p-4 max-xl:px-5 bg-gradient-to-b ${pillar.gradientBg} border border-border-light v2-card-hover`}
              style={{ borderTopColor: pillar.accentColor, borderTopWidth: '3px' }}
            >
              <div className="relative z-10 flex h-full flex-col gap-6">
                <div className="flex flex-col gap-5">
                  <div
                    className={`flex size-15 shrink-0 items-center justify-center rounded-full bg-white/80 ${pillar.iconColor}`}
                    aria-hidden="true"
                  >
                    <span className="inline-flex items-center justify-center size-7">
                      {pillar.icon}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3.5">
                    <h3 className="font-object text-[28px] leading-snug tracking-tighter text-primary max-xl:text-2xl max-sm:text-xl">
                      {pillar.title}
                    </h3>
                    <p className="text-base leading-normal font-light text-gray-800">
                      {pillar.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium font-object text-secondary-blue-1"
                      style={{ background: `${pillar.accentColor}10` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
