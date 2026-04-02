import { LinkWithArrow } from "@/components/ui/LinkWithArrow";
import { FloatingBlobs } from "./FloatingBlobs";
import { LtvIcon, ChartIcon, DataIcon } from "../Icons";
import { understandFeatures } from "@/data/features";
import { analyticsIntegrations } from "@/data/integrations";
import { getTestimonial } from "@/data/testimonials";

const iconMap: Record<string, React.ReactNode> = {
  ltv: <LtvIcon />,
  chart: <ChartIcon />,
  data: <DataIcon />,
};

const holywater = getTestimonial("holywater");

export function SectionUnderstandV2() {
  return (
    <section className="relative bg-white py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20 snap-section" id="understand">
      <FloatingBlobs color="red" />
      <div className="container relative z-10">
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium font-object border border-secondary-blue-1/20 bg-secondary-blue-1/5 text-secondary-blue-1">
            Understand
          </span>
        </div>
        <h2 className="font-object leading-dense font-medium tracking-tighter text-primary text-[3.25rem] max-xl:text-[2.5rem] max-lg:text-[2rem] max-sm:text-[1.625rem] mx-auto mb-4 max-w-[48rem] text-center text-pretty max-lg:mb-3">
          <span className="v2-gradient-text">See what drives growth</span><br />&amp; do more of it
        </h2>
        <p className="text-xl leading-snug font-light text-gray-800 max-w-2xl mx-auto text-center mb-16 text-pretty max-md:mb-10 max-md:text-base">
          Your pricing decision shouldn&apos;t depend on an analyst<br />pulling data from three different dashboards next Tuesday.
        </p>

        {/* Feature list - centered like Pillars */}
        <ul className="relative grid w-full grid-cols-3 gap-16 max-lg:gap-10 max-md:grid-cols-1 max-md:gap-10 mb-16">
          {understandFeatures.map((feature) => (
            <li key={feature.title} className="relative flex flex-col items-center gap-4 text-center max-md:gap-3">
              <div
                className={`flex size-10 shrink-0 items-center justify-center rounded-full bg-white/80 ${feature.color}`}
                aria-hidden="true"
              >
                <span className="inline-flex items-center justify-center size-5">
                  {iconMap[feature.iconKey]}
                </span>
              </div>
              <h3 className="font-object text-2xl leading-none tracking-tighter text-primary max-lg:text-xl max-md:text-lg">
                {feature.title}
              </h3>
              <p className="text-base leading-snug font-light text-gray-800 max-lg:text-sm max-md:text-base max-md:max-w-[280px] max-md:mx-auto">
                {feature.description}
              </p>
              {feature.variant === "explorer" && (
                <div className="mt-1 rounded-lg border border-border-light bg-white p-2.5 w-[200px]">
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
              {feature.variant === "chart" && (
                <div className="mt-1 rounded-lg border border-border-light bg-white p-3 w-[240px]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-medium text-primary">Paywall Conversion</span>
                    <span className="text-[10px] font-medium text-secondary-green">28.4%</span>
                  </div>
                  <svg viewBox="0 0 200 44" className="w-full h-auto" fill="none">
                    <polyline points="0,34 25,22 50,24 75,26 100,18 125,22 150,20 175,19 200,16" stroke="#11D483" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              )}
              {feature.variant === "logos" && (
                <div className="flex items-center justify-center gap-4 mt-1">
                  {analyticsIntegrations.map((logo) => (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img key={logo.name} className="h-7 w-7 object-contain" src={logo.src} alt={logo.name} height={28} width={28} />
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Inline testimonial */}
        <div className="max-w-lg mx-auto mb-10 rounded-xl bg-white p-5 border border-border-light" style={{ boxShadow: "0 4px 12px rgba(144,138,208,0.08)" }}>
          <div className="flex items-center gap-3 mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="size-9 rounded-xl object-contain" src={holywater.logo} alt={holywater.company} width={36} height={36} />
            <div>
              <p className="text-sm font-medium text-primary leading-tight">{holywater.company}</p>
              <p className="text-[12px] text-gray-750 leading-tight">{holywater.person}, CTO</p>
            </div>
          </div>
          <p className="text-[15px] leading-snug text-gray-800">
            &ldquo;RevenueCat&rsquo;s data is fully integrated into our marketing decisions, directly contributing to <strong className="font-medium v2-gradient-text">HOLYWATER&rsquo;s 3.5x YoY&nbsp;growth</strong>.&rdquo;
          </p>
        </div>

        <div className="text-center">
          <LinkWithArrow href="https://www.revenuecat.com/feature/charts/" size="base">Explore Charts</LinkWithArrow>
        </div>
      </div>
    </section>
  );
}
