import { ArrowIcon } from "./ArrowIcon";

const integrations = [
  { name: "Amplitude", logo: "/integrations/Amplitude.svg", href: "https://www.revenuecat.com/integrations/amplitude/" },
  { name: "Mixpanel", logo: "/integrations/Mixpanel.svg", href: "https://www.revenuecat.com/integrations/mixpanel/" },
  { name: "Braze", logo: "/integrations/Braze.svg", href: "https://www.revenuecat.com/integrations/braze/" },
  { name: "Adjust", logo: "/integrations/Adjust.svg", href: "https://www.revenuecat.com/integrations/adjust/" },
  { name: "AppsFlyer", logo: "/integrations/AppsFlyer.svg", href: "https://www.revenuecat.com/integrations/appsflyer/" },
  { name: "Segment", logo: "/integrations/Segment.svg", href: "https://www.revenuecat.com/integrations/segment/" },
  { name: "Stripe", logo: "https://revenuecat.wpenginepowered.com/wp-content/uploads/2022/01/stripe.svg", href: "https://www.revenuecat.com/integrations/stripe/" },
  { name: "Slack", logo: "/integrations/Slack.svg", href: "https://www.revenuecat.com/integrations/slack/" },
];

export function Integrations() {
  return (
    <section className="bg-white py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-object text-[2.25rem] max-lg:text-[1.875rem] max-sm:text-[1.5rem] leading-dense font-medium tracking-tighter text-primary mb-2">
            Works with your stack
          </h2>
          <p className="text-base text-gray-800 max-md:text-sm">
            RevenueCat connects to the tools you already use.
          </p>
        </div>

        <ul className="grid grid-cols-4 gap-8 max-lg:grid-cols-3 max-sm:grid-cols-2 mb-8">
          {integrations.map((i) => (
            <li key={i.name}>
              <a
                className="relative flex flex-col items-center rounded-2xl border border-border-light p-6 pb-5 text-center transition-colors duration-200 hover:border-secondary-blue-1/30 max-md:p-4"
                href={i.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-16 w-auto max-md:h-14"
                  height={64}
                  width={64}
                  src={i.logo}
                  alt={i.name}
                />
                <h3 className="font-object mt-5 whitespace-nowrap text-base leading-snug text-gray-800/70 font-normal">
                  {i.name}
                </h3>
              </a>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <a
            className="font-object inline-flex items-center gap-2 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 font-medium text-sm"
            href="https://www.revenuecat.com/integrations/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Integrations <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
