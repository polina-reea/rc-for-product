import { ArrowIcon } from "./ArrowIcon";
import { LtvIcon, ChartIcon, DataIcon } from "./Icons";

export function SectionUnderstand() {
  return (
    <section className="bg-white py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20" id="understand">
      <div className="container">
        <h2 className="font-object leading-dense font-medium tracking-tighter text-primary text-[3.25rem] max-xl:text-[2.5rem] max-lg:text-[2rem] max-sm:text-[1.625rem] mx-auto mb-4 max-w-[48rem] text-center text-pretty max-lg:mb-3">
          Understand what drives growth<br />&amp; do more of it
        </h2>
        <p className="text-xl leading-snug font-light text-gray-800 max-w-2xl mx-auto text-center mb-16 text-pretty max-md:mb-10 max-md:text-base">
          Your pricing decision shouldn&apos;t depend on an analyst<br />pulling data from three different dashboards next Tuesday.
        </p>

        {/* Feature list - no cards */}
        <ul className="grid grid-cols-3 gap-12 max-xl:gap-8 max-lg:grid-cols-1 max-lg:max-w-lg max-lg:mx-auto mb-16">
          {[
            {
              icon: <LtvIcon />,
              title: "Predict, don\u2019t react",
              description: "LTV Prediction forecasts revenue by cohort. Cohort Explorer lets you slice by acquisition source, country, or custom segment.",
              color: "shadow-feature-blue text-secondary-blue-1",
              explorer: true,
            },
            {
              icon: <ChartIcon />,
              title: "Paywall performance",
              description: "Four real-time charts: encounter rates, conversion, LTV by paywall, and abandonment. See what earns, not just what gets clicks.",
              color: "shadow-feature-red text-secondary-red",
              chart: true,
            },
            {
              icon: <DataIcon />,
              title: "Your data, everywhere",
              description: "Stream events to Amplitude, Mixpanel, Segment, or your warehouse via Charts API and webhooks. No analyst bottleneck.",
              color: "shadow-feature-green text-secondary-green",
              logos: [
                { name: "Amplitude", src: "/integrations/Amplitude.svg" },
                { name: "Mixpanel", src: "/integrations/Mixpanel.svg" },
                { name: "Segment", src: "/integrations/Segment.svg" },
                { name: "Slack", src: "/integrations/Slack.svg" },
              ],
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
                  {feature.explorer && (
                    <div className="mt-3 rounded-lg border border-border-light bg-white p-2.5 max-w-[200px]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-medium text-primary">Cohort Explorer</span>
                        <span className="flex items-center gap-1 text-[8px] text-secondary-green"><span className="w-1.5 h-1.5 rounded-full bg-secondary-green" />Live</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1">
                        {[
                          ["bg-secondary-blue-1/15", "bg-secondary-blue-1/10", "bg-secondary-green/12", "bg-secondary-green/8"],
                          ["bg-secondary-blue-1/15", "bg-secondary-blue-1/10", "bg-secondary-green/12", ""],
                          ["bg-secondary-blue-1/15", "bg-secondary-blue-1/10", "", ""],
                        ].map((row, r) => row.map((bg, c) => (
                          <div key={`${r}-${c}`} className={`h-4 rounded ${bg || "bg-gray-50"}`} />
                        )))}
                      </div>
                    </div>
                  )}
                  {feature.chart && (
                    <div className="mt-3 rounded-lg border border-border-light bg-white p-3 max-w-[240px]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-medium text-primary">Paywall Conversion</span>
                        <span className="text-[10px] font-medium text-secondary-green">28.4%</span>
                      </div>
                      <svg viewBox="0 0 200 44" className="w-full h-auto" fill="none">
                        <polyline points="0,34 25,22 50,24 75,26 100,18 125,22 150,20 175,19 200,16" stroke="#11D483" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </div>
                  )}
                  {feature.logos && (
                    <div className="flex items-center gap-4 mt-2">
                      {feature.logos.map((logo: { name: string; src: string }) => (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img key={logo.name} className="h-7 w-7 object-contain" src={logo.src} alt={logo.name} height={28} width={28} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Inline testimonial */}
        <div className="max-w-lg mx-auto mb-10 rounded-xl bg-white p-5 border border-border-light" style={{ boxShadow: "0 4px 12px rgba(144,138,208,0.08)" }}>
          <div className="flex items-center gap-3 mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="size-9 rounded-xl object-contain" src="https://cdn.sanity.io/images/c3qnx9b0/production/89186aeb48369a707fd6e2203f844f63fe4d2174-80x80.svg?w=64&q=75&auto=format" alt="HOLYWATER" width={36} height={36} />
            <div>
              <p className="text-sm font-medium text-primary leading-tight">HOLYWATER</p>
              <p className="text-[12px] text-gray-750 leading-tight">Anatolii Kasianov, CTO</p>
            </div>
          </div>
          <p className="text-[15px] leading-snug text-gray-800">
            &ldquo;RevenueCat&rsquo;s data is fully integrated into our marketing decisions, directly contributing to <strong className="font-medium text-secondary-blue-1">HOLYWATER&rsquo;s 3.5x YoY&nbsp;growth</strong>.&rdquo;
          </p>
        </div>

        <div className="text-center">
          <a className="font-object inline-flex items-center gap-2 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 font-medium" href="https://www.revenuecat.com/feature/charts/">
            Explore Charts <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
