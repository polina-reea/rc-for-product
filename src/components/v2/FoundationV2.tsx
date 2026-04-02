import { ArrowIcon } from "../ArrowIcon";

export function FoundationV2() {
  return (
    <section className="bg-white py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20">
      <div className="container">
        {/* SDK + Integrations */}
        <div className="text-center mb-16 max-md:mb-10">
          <h2 className="font-object leading-dense font-medium tracking-tighter text-primary text-[3.25rem] max-xl:text-[2.5rem] max-lg:text-[2rem] max-sm:text-[1.625rem] mx-auto mb-4 max-w-[48rem] text-pretty">
            Everything else?<br /><span className="v2-gradient-text">Already handled.</span>
          </h2>
          <p className="text-xl leading-snug font-light text-gray-800 max-w-2xl mx-auto text-pretty max-md:text-base">
            Cross-platform SDKs, server-side receipt validation, and real-time entitlements. Your eng team drops it in once, you ship product from&nbsp;there.
          </p>
        </div>

        {/* Integration logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 max-md:gap-5 mb-12">
          {[
            { name: "Amplitude", logo: "/integrations/Amplitude.svg" },
            { name: "Mixpanel", logo: "/integrations/Mixpanel.svg" },
            { name: "Segment", logo: "/integrations/Segment.svg" },
            { name: "Braze", logo: "/integrations/Braze.svg" },
            { name: "AppsFlyer", logo: "/integrations/AppsFlyer.svg" },
            { name: "Adjust", logo: "/integrations/Adjust.svg" },
            { name: "Slack", logo: "/integrations/Slack.svg" },
            { name: "Stripe", logo: "/integrations/Stripe.svg" },
          ].map((i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={i.name}
              className="h-10 w-10 max-md:h-8 max-md:w-8 object-contain"
              src={i.logo}
              alt={i.name}
              height={32}
              width={32}
            />
          ))}
        </div>

        {/* Links row */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          <a className="font-object inline-flex items-center gap-2 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 font-medium text-sm" href="https://www.revenuecat.com/docs/getting-started/installation" target="_blank" rel="noopener noreferrer">
            View SDKs <ArrowIcon />
          </a>
          <a className="font-object inline-flex items-center gap-2 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 font-medium text-sm" href="https://www.revenuecat.com/integrations/" target="_blank" rel="noopener noreferrer">
            View All Integrations <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
