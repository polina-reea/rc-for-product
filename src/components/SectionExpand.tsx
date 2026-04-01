import { ArrowIcon } from "./ArrowIcon";
import { GlobeIcon, BillingIcon } from "./Icons";
import { ExpandSequence } from "./ExpandSequence";

export function SectionExpand() {
  return (
    <section className="bg-gray-50 py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20" id="expand">
      <div className="container">
        <h2 className="font-object leading-dense font-medium tracking-tighter text-primary text-[3.5rem] max-xl:text-[2.75rem] max-lg:text-[2.25rem] max-sm:text-[1.875rem] mx-auto mb-12 max-w-[48rem] text-center text-pretty max-lg:mb-10 max-md:mb-8">
          Reach users before the App Store
        </h2>
        <p className="text-xl leading-snug font-light text-gray-800 max-w-2xl mx-auto text-center mb-16 max-md:text-base">
<a href="https://www.revenuecat.com/state-of-subscription-apps-2025/" target="_blank" rel="noopener noreferrer" className="underline decoration-border-light underline-offset-4 hover:decoration-secondary-blue-1 transition-colors">41% of top subscription apps</a>{" "}already generate revenue through the web.
          If your monetization starts at the download, you&apos;re starting too late.
        </p>

        <div className="flex max-md:flex-col max-md:gap-8 flex-row">
          <div className="mx-auto flex shrink flex-col justify-center pr-24 max-xl:pr-13 max-md:pr-0 max-md:px-4">
            <ul className="flex flex-col gap-7">
              <li className="relative flex gap-4.5 max-xl:gap-3.5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/80 shadow-feature-blue text-secondary-blue-1" aria-hidden="true">
                  <span className="inline-flex items-center justify-center size-5"><GlobeIcon /></span>
                </div>
                <div className="flex max-w-140 flex-col gap-4 max-md:gap-2">
                  <h3 className="mt-2 font-object text-2xl leading-none tracking-tighter text-primary max-xl:text-xl">
                    Web-to-app onboarding
                  </h3>
                  <p className="-mt-1.75 text-xl leading-snug font-light text-gray-800 max-xl:text-base">
                    Multi-step funnels with branching logic. Segment by country,
                    survey answers, or UTM source. Built-in analytics show exactly
                    where users drop off.
                  </p>
                  <a className="font-object inline-flex items-center rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 gap-2 font-medium" href="https://www.revenuecat.com/feature/funnels/">
                    Explore Funnels <ArrowIcon />
                  </a>
                </div>
              </li>

              <li className="relative flex gap-4.5 max-xl:gap-3.5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/80 shadow-feature-green text-secondary-green" aria-hidden="true">
                  <span className="inline-flex items-center justify-center size-5"><BillingIcon /></span>
                </div>
                <div className="flex max-w-140 flex-col gap-4 max-md:gap-2">
                  <h3 className="mt-2 font-object text-2xl leading-none tracking-tighter text-primary max-xl:text-xl">
                    Skip the 30%
                  </h3>
                  <p className="-mt-1.75 text-xl leading-snug font-light text-gray-800 max-xl:text-base">
                    Offer subscriptions on the web with Stripe, Apple Pay, or Google Pay.
                    Full pricing flexibility. Web purchases automatically unlock access inside your app.
                  </p>
                  <a className="font-object inline-flex items-center rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 gap-2 font-medium" href="https://www.revenuecat.com/feature/billing/">
                    Explore Web Billing <ArrowIcon />
                  </a>
                </div>
              </li>
            </ul>

            {/* Proof point */}
            <div className="mt-12 bg-white rounded-2xl p-7 shadow-card border border-border">
              <p className="text-lg leading-normal font-light text-gray-800">
                <strong className="font-medium text-primary">Floga</strong> generated{" "}
                <span className="font-medium text-secondary-red">six figures</span> in revenue
                before their app was even live.
              </p>
            </div>
          </div>

          {/* Animated: Funnels → Web Billing */}
          <div className="pointer-events-none relative w-[55%] max-lg:w-full flex items-center">
            <ExpandSequence />
          </div>
        </div>
      </div>
    </section>
  );
}
