import { ArrowIcon } from "./ArrowIcon";
import { LtvIcon, ChartIcon, DataIcon } from "./Icons";

export function SectionUnderstand() {
  return (
    <section className="bg-white py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20" id="understand">
      <div className="container">
        <h2 className="font-object leading-dense font-medium tracking-tighter text-primary text-[3.5rem] max-xl:text-[2.75rem] max-lg:text-[2.25rem] max-sm:text-[1.875rem] mx-auto mb-4 max-w-[48rem] text-center text-pretty max-lg:mb-3">
          Understand what drives growth &amp; do more of it
        </h2>
        <p className="text-xl leading-snug font-light text-gray-800 max-w-2xl mx-auto text-center mb-16 max-md:mb-10 max-md:text-base">
          Your pricing decision shouldn&apos;t depend on an analyst pulling data
          from three different dashboards next Tuesday.
        </p>

        {/* Feature list - no cards */}
        <ul className="grid grid-cols-3 gap-12 max-xl:gap-8 max-lg:grid-cols-1 max-lg:max-w-lg max-lg:mx-auto mb-16">
          {[
            {
              icon: <LtvIcon />,
              title: "Predict, don\u2019t react",
              description: "LTV Prediction shows where your revenue is headed. Cohort Explorer lets you slice by any segment or time period.",
              color: "shadow-feature-blue text-secondary-blue-1",
            },
            {
              icon: <ChartIcon />,
              title: "Paywall performance",
              description: "Four real-time charts: encounter rates, conversion, LTV by paywall, and abandonment. See what earns, not just what gets clicks.",
              color: "shadow-feature-red text-secondary-red",
            },
            {
              icon: <DataIcon />,
              title: "Your data, everywhere",
              description: "Pull data into Amplitude, Mixpanel, or your own warehouse via the Charts API. No analyst bottleneck.",
              color: "shadow-feature-green text-secondary-green",
            },
          ].map((feature) => (
            <li key={feature.title} className="flex flex-col gap-4">
              <div className="flex flex-col gap-6.5 max-xl:gap-5 max-lg:gap-4.5 max-sm:gap-3.5">
                <div
                  className={`flex size-15 shrink-0 items-center justify-center rounded-full bg-white/80 max-xl:size-14 max-lg:size-12 max-sm:size-11 ${feature.color}`}
                  aria-hidden="true"
                >
                  <span className="inline-flex items-center justify-center size-7 max-xl:size-6.5 max-lg:size-6 max-sm:size-5">
                    {feature.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-3.5 max-xl:gap-2.5 max-lg:gap-2">
                  <h3 className="font-object text-2xl leading-snug tracking-tighter text-primary max-xl:text-2xl max-lg:text-xl max-md:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-base leading-normal font-light text-gray-800 max-xl:leading-snug">
                    {feature.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <a className="font-object inline-flex items-center gap-2 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 font-medium" href="https://www.revenuecat.com/feature/charts/">
            Explore Charts <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
