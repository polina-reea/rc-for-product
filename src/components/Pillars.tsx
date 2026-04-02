const pillars = [
  {
    number: "1",
    title: "Iterate",
    description: "Ship paywalls, run experiments, and target users. No app release\u00A0needed.",
    tags: ["Paywalls", "Experiments", "Targeting"],
    color: "text-secondary-blue-1",
  },
  {
    number: "2",
    title: "Understand",
    description: "Real-time Charts, LTV Prediction, and Cohort Explorer. Know what\u00A0works.",
    tags: ["Charts", "LTV Prediction", "Cohort Explorer"],
    color: "text-secondary-blue-1",
  },
  {
    number: "3",
    title: "Expand",
    description: "Web Funnels and Stripe-powered Billing. Reach users before the App\u00A0Store.",
    tags: ["Funnels", "Web Billing"],
    color: "text-secondary-blue-1",
  },
];

export function Pillars() {
  return (
    <section className="bg-white py-28 max-xl:py-20 max-md:py-14">
      <div className="container">
        <header className="mb-16 flex flex-col items-center gap-4 text-center max-md:mb-10">
          <h2 className="font-object leading-dense font-medium tracking-tighter text-balance text-primary max-w-4xl max-lg:max-w-2xl text-[2.25rem] max-lg:text-[1.625rem] text-center mx-auto">
            One platform,<br />three ways to grow
          </h2>
        </header>

        <ul className="relative grid w-full grid-cols-3 gap-16 max-lg:gap-10 max-md:grid-cols-1 max-md:gap-10 before:absolute before:top-4 before:left-[16.67%] before:h-px before:w-[66.67%] before:border-t-[3px] before:border-dotted before:border-primary/15 max-md:before:hidden">
          {pillars.map((pillar) => (
            <li key={pillar.title} className="relative flex flex-col items-center gap-7 text-center max-md:gap-5">
              <div className="flex flex-col items-center gap-3">
                <div className={`flex size-8 items-center justify-center rounded-full bg-white max-md:size-7 ${pillar.color}`} style={{ boxShadow: "0 2px 8px rgba(87,108,219,0.15)" }}>
                  <span className="mt-0.5 text-base leading-none font-medium max-md:text-sm">{pillar.number}</span>
                </div>
                <h3 className="font-object text-2xl leading-none tracking-tighter text-primary max-lg:text-xl max-md:text-lg">
                  {pillar.title}
                </h3>
                <p className="text-base leading-snug font-light text-gray-800 max-lg:text-sm">
                  {pillar.description}
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-1.5">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium font-object border border-border-light text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
