import { ArrowIcon } from "./ArrowIcon";

const integrations = [
  { name: "Amplitude", domain: "amplitude.com" },
  { name: "Mixpanel", domain: "mixpanel.com" },
  { name: "Braze", domain: "braze.com" },
  { name: "Adjust", domain: "adjust.com" },
  { name: "AppsFlyer", domain: "appsflyer.com" },
  { name: "Segment", domain: "segment.com" },
  { name: "Stripe", domain: "stripe.com" },
  { name: "Slack", domain: "slack.com" },
];

export function Integrations() {
  return (
    <section className="bg-white py-20 max-xl:py-16 max-md:py-12">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-object text-2xl font-medium tracking-tighter text-primary mb-2 max-md:text-xl">
            Works with your stack
          </h2>
          <p className="text-base text-gray-800 max-md:text-sm">
            RevenueCat connects to the tools you already use — analytics, attribution, engagement, and more.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {integrations.map((i) => (
            <span
              key={i.name}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gray-50 border border-border-light text-sm font-object text-primary hover:border-secondary-blue-1/30 hover:bg-secondary-blue-1/5 transition-colors duration-200"
            >
              {i.domain ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={`https://www.google.com/s2/favicons?domain=${i.domain}&sz=32`}
                  alt=""
                  width={16}
                  height={16}
                  className="size-4 rounded-sm"
                />
              ) : (
                <span className="size-4 rounded-sm bg-secondary-blue-1/10 flex items-center justify-center text-[8px] text-secondary-blue-1">{"{ }"}</span>
              )}
              {i.name}
            </span>
          ))}
        </div>
        <div className="text-center">
          <a
            className="font-object inline-flex items-center gap-2 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 font-medium text-sm"
            href="https://www.revenuecat.com/integrations/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all integrations <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
