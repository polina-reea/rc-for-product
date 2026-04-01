import { BoltIcon, ChartIcon, GlobeIcon } from "./Icons";

const pillars = [
  {
    title: "Iterate on monetization",
    description: "Change your paywall on Monday. See results by Friday. No engineers required.",
    tags: ["Paywalls", "Experiments"],
    glowColor: "bg-[#C1C9F6]",
    borderGradient: "linear-gradient(rgb(249,249,251),rgb(249,249,251)) padding-box, linear-gradient(135deg, rgb(184,194,224) 0%, rgba(234,237,246,0) 100%) border-box, linear-gradient(rgb(234,237,246),rgb(234,237,246)) border-box",
    iconColor: "shadow-feature-blue text-secondary-blue-1",
  },
  {
    title: "Understand your subscribers",
    description: "Know which paywall actually earns, not just which one gets the most clicks.",
    tags: ["Charts", "Experiments", "Cohort Explorer"],
    glowColor: "bg-[#F7D4D4]",
    borderGradient: "linear-gradient(rgb(249,249,251),rgb(249,249,251)) padding-box, linear-gradient(135deg, rgb(224,184,184) 0%, rgba(234,237,246,0) 100%) border-box, linear-gradient(rgb(234,237,246),rgb(234,237,246)) border-box",
    iconColor: "shadow-feature-red text-secondary-red",
  },
  {
    title: "Expand beyond the App Store",
    description: "Start converting users before they ever open the App Store. Keep more of what you earn.",
    tags: ["Funnels", "Web Billing"],
    glowColor: "bg-[#C1F6E0]",
    borderGradient: "linear-gradient(rgb(249,249,251),rgb(249,249,251)) padding-box, linear-gradient(135deg, rgb(184,224,207) 0%, rgba(234,237,246,0) 100%) border-box, linear-gradient(rgb(234,237,246),rgb(234,237,246)) border-box",
    iconColor: "shadow-feature-green text-secondary-green",
  },
];

export function Pillars() {
  return (
    <section className="bg-white py-28 max-xl:py-20 max-md:py-14">
      <div className="container">
        <header className="mb-12 flex flex-col items-center gap-4 text-center max-md:mb-10">
          <h2 className="font-object leading-dense font-medium tracking-tighter text-balance text-primary max-w-4xl max-lg:max-w-2xl text-[2.25rem] max-lg:text-[1.625rem] text-center mx-auto">
            Own your monetization, without waiting for engineering
          </h2>
          <p className="text-xl font-light text-gray-800 max-w-2xl max-md:text-base">
            Built for product managers who want to move fast on pricing, paywalls, and subscription monetization.
          </p>
        </header>

        <ul className="grid grid-cols-3 gap-8 max-xl:gap-6 max-lg:mx-auto max-lg:max-w-md max-lg:grid-cols-1 max-lg:gap-5">
          {pillars.map((pillar) => (
            <li
              key={pillar.title}
              className="relative overflow-hidden rounded-2xl border border-transparent p-5 px-6 max-xl:rounded-xl max-xl:p-4 max-xl:px-5"
              style={{ background: pillar.borderGradient }}
            >
              <div
                className={`pointer-events-none absolute top-0 -left-7.5 size-50 rounded-full opacity-50 blur-[120px] ${pillar.glowColor}`}
                aria-hidden="true"
              />
              <div className="relative z-10 flex h-full flex-col gap-6">
                <div className="flex flex-col gap-5">
                  <div
                    className={`flex size-15 shrink-0 items-center justify-center rounded-full bg-white/80 ${pillar.iconColor}`}
                    aria-hidden="true"
                  >
                    <span className="inline-flex items-center justify-center size-7">
                      {pillar.title.includes("Iterate") ? <BoltIcon /> : pillar.title.includes("Understand") ? <ChartIcon /> : <GlobeIcon />}
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
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium font-object bg-white/60 text-secondary-blue-1"
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
