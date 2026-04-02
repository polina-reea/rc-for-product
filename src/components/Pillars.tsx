const pillars = [
  {
    strong: "Iterate on monetization.",
    description: "No-code Paywalls, A/B Experiments with LTV prediction, and Targeting by segment. Ship changes without a release\u00A0cycle.",
    tags: ["Paywalls", "Experiments"],
    image: "https://cdn.sanity.io/images/c3qnx9b0/production/5545eb21689d9a03dd3c359037594cc7a1a3c05b-1184x960.jpg?w=1184&q=90&auto=format",
  },
  {
    strong: "Understand your subscribers.",
    description: "Real-time Charts, Cohort Explorer, and LTV Prediction. Track conversion, churn, and payback period in one\u00A0place.",
    tags: ["Charts", "Experiments", "Cohort Explorer"],
    image: "https://www.revenuecat.com/static/f6dec0fa8f50eec1b8f1dc02ffa29e43/17d8e/card1.png",
  },
  {
    strong: "Expand beyond the App\u00A0Store.",
    description: "Web Funnels with branching logic, Stripe-powered Web Billing, and cross-platform entitlements. Skip the 30%\u00A0cut.",
    tags: ["Funnels", "Web Billing"],
    image: "https://www.revenuecat.com/static/fdd7b665b38675d0cb13876d0561e087/17d8e/card3.png",
  },
];

export function Pillars() {
  return (
    <section className="bg-white py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20">
      <div className="container">
        <header className="mb-12 flex flex-col items-center gap-4 text-center max-md:mb-10">
          <h2 className="font-object leading-dense font-medium tracking-tighter text-balance text-primary max-w-4xl max-lg:max-w-2xl text-[2.25rem] max-lg:text-[1.625rem] text-center mx-auto">
            One platform,<br />three ways to grow
          </h2>
          <p className="text-xl font-light text-gray-800 max-w-2xl text-pretty max-md:text-base">
            From your first paywall to global web billing,<br />RevenueCat covers the full monetization lifecycle.
          </p>
        </header>

        <ul className="grid grid-cols-3 gap-8 max-xl:gap-6 max-lg:mx-auto max-lg:max-w-md max-lg:grid-cols-1 max-lg:gap-5">
          {pillars.map((pillar) => (
            <li
              key={pillar.strong}
              className="relative h-full overflow-hidden rounded-2xl border border-border-light bg-gray-50 max-lg:rounded-xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="pointer-events-none w-full object-cover object-bottom"
                height={491}
                width={384}
                src={pillar.image}
                alt=""
              />
              <div className="absolute inset-x-0 bottom-0 p-6 max-xl:p-5 bg-gradient-to-t from-gray-50 from-55% to-transparent pt-20">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium font-object bg-white/80 text-secondary-blue-1 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-light leading-snug text-gray-800 max-lg:text-sm">
                  <strong className="block font-object font-medium leading-tight text-primary mb-1.5 text-base">
                    {pillar.strong}
                  </strong>
                  {pillar.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
