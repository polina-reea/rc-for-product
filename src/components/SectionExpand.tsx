import { ArrowIcon } from "./ArrowIcon";
import { GlobeIcon, BillingIcon } from "./Icons";
import { ExpandSequence } from "./ExpandSequence";

export function SectionExpand() {
  return (
    <section className="bg-gray-50 py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20" id="expand">
      <div className="container">
        <h2 className="font-object leading-dense font-medium tracking-tighter text-primary text-[3.25rem] max-xl:text-[2.5rem] max-lg:text-[2rem] max-sm:text-[1.625rem] mx-auto mb-12 max-w-[48rem] text-center text-pretty max-lg:mb-10 max-md:mb-8">
          Reach users<br />before the App Store
        </h2>
        <p className="text-xl leading-snug font-light text-gray-800 max-w-2xl mx-auto text-center mb-16 text-pretty max-md:text-base">
<a href="https://www.revenuecat.com/state-of-subscription-apps-2025/" target="_blank" rel="noopener noreferrer" className="text-secondary-blue-1 underline decoration-secondary-blue-1/40 underline-offset-4 hover:decoration-secondary-blue-1 transition-colors">41% of top subscription apps</a>{" "}already generate revenue through the web.<br />If your monetization starts at the download, you&apos;re starting too late.
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
                    Multi-step funnels with branching logic. Segment by country, survey response, or UTM&nbsp;source. Step-by-step conversion analytics show exactly where users drop&nbsp;off.
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
                    Stripe, Apple Pay, or Google Pay checkout. Test prices the App Store won&apos;t let you. Web purchases auto-unlock in-app&nbsp;entitlements.
                  </p>
                  <a className="font-object inline-flex items-center rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 gap-2 font-medium" href="https://www.revenuecat.com/feature/billing/">
                    Explore Web Billing <ArrowIcon />
                  </a>
                </div>
              </li>
            </ul>

            {/* Inline testimonial */}
            <div className="mt-12 rounded-xl bg-white p-5 border border-border-light" style={{ boxShadow: "0 4px 12px rgba(144,138,208,0.08)" }}>
              <div className="flex items-center gap-3 mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="size-9 rounded-xl object-contain" src="https://cdn.sanity.io/images/c3qnx9b0/production/72bc3edc393f03211054a0a2fbaa95c7baf0ec28-80x80.svg?w=64&q=75&auto=format" alt="Floga" width={36} height={36} />
                <div>
                  <p className="text-sm font-medium text-primary leading-tight">Floga</p>
                  <p className="text-[12px] text-gray-750 leading-tight">Umberto Mezzadra, CEO</p>
                </div>
              </div>
              <p className="text-[15px] leading-snug text-gray-800 mb-2.5">
                Generated <strong className="font-medium text-secondary-blue-1">$120K+ in one&nbsp;day</strong>{" "}of pre-launch lifetime memberships via RevenueCat Web&nbsp;Billing.
              </p>
              <a className="font-object inline-flex items-center gap-1 text-[13px] text-secondary-blue-1 hover:text-secondary-blue-2 font-medium transition-colors" href="https://www.revenuecat.com/customers/floga" target="_blank" rel="noopener noreferrer">
                Read Case Study
                <svg className="w-1.5! shrink-0" viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m0 9.002 6.998-3.844V3.844L0 0v1.711l5.08 2.79L0 7.291z" fill="currentColor" fillRule="evenodd" /></svg>
              </a>
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
