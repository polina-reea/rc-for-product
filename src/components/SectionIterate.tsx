import { ArrowIcon } from "./ArrowIcon";
import { PaywallIcon, ExperimentIcon, TargetIcon } from "./Icons";
import { IterateSequence } from "./IterateSequence";

export function SectionIterate() {
  return (
    <section className="bg-gray-50 py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20" id="iterate">
      <div className="container">
        <h2 className="font-object leading-dense font-medium tracking-tighter text-primary text-[3.5rem] max-xl:text-[2.75rem] max-lg:text-[2.25rem] max-sm:text-[1.875rem] mx-auto mb-12 max-w-[48rem] text-center text-pretty max-lg:mb-10 max-md:mb-8">
          Ship paywall changes in minutes. Predict winners in weeks.
        </h2>
        <div className="flex max-lg:items-center max-md:flex-col max-md:gap-8 flex-row">
          <div className="mx-auto flex w-[45%] shrink flex-col justify-center max-md:items-center max-md:w-full max-md:px-4 max-md:text-center pr-16 max-xl:pr-10">
            <ul className="flex flex-col gap-7 max-md:text-left">
              {/* Paywalls */}
              <li className="relative flex gap-4.5 max-xl:gap-3.5">
                <div className="flex size-10 max-xl:size-8 shrink-0 items-center justify-center rounded-full bg-white/80 shadow-feature-blue text-secondary-blue-1" aria-hidden="true">
                  <span className="inline-flex items-center justify-center size-5 max-xl:size-4"><PaywallIcon /></span>
                </div>
                <div className="flex max-w-140 flex-col gap-4 max-xl:max-w-64 max-lg:max-w-none max-md:gap-2">
                  <h3 className="mt-2 font-object text-2xl leading-none tracking-tighter text-primary max-xl:text-xl max-md:text-lg">
                    No-code paywall editor
                  </h3>
                  <p className="-mt-1.75 text-xl leading-snug text-gray-800 max-xl:text-base">
                    Customize templates or bring your own. Hit publish and it&apos;s live, no app update required.
                  </p>
                  <a className="font-object inline-flex items-center rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 gap-2 font-medium" href="https://www.revenuecat.com/feature/paywalls">
                    Explore Paywalls <ArrowIcon />
                  </a>
                </div>
              </li>

              {/* Experiments */}
              <li className="relative flex gap-4.5 max-xl:gap-3.5">
                <div className="flex size-10 max-xl:size-8 shrink-0 items-center justify-center rounded-full bg-white/80 shadow-feature-red text-secondary-red" aria-hidden="true">
                  <span className="inline-flex items-center justify-center size-5 max-xl:size-4"><ExperimentIcon /></span>
                </div>
                <div className="flex max-w-140 flex-col gap-4 max-xl:max-w-64 max-lg:max-w-none max-md:gap-2">
                  <h3 className="mt-2 font-object text-2xl leading-none tracking-tighter text-primary max-xl:text-xl max-md:text-lg">
                    A/B testing that predicts the future
                  </h3>
                  <p className="-mt-1.75 text-xl leading-snug text-gray-800 max-xl:text-base">
                    Run up to four variants. RevenueCat predicts the 12-month LTV winner while the test is still running.
                  </p>
                  <a className="font-object inline-flex items-center rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 gap-2 font-medium" href="https://www.revenuecat.com/feature/experiments/">
                    Explore Experiments <ArrowIcon />
                  </a>
                </div>
              </li>

              {/* Targeting */}
              <li className="relative flex gap-4.5 max-xl:gap-3.5">
                <div className="flex size-10 max-xl:size-8 shrink-0 items-center justify-center rounded-full bg-white/80 shadow-feature-green text-secondary-green" aria-hidden="true">
                  <span className="inline-flex items-center justify-center size-5 max-xl:size-4"><TargetIcon /></span>
                </div>
                <div className="flex max-w-140 flex-col gap-4 max-xl:max-w-64 max-lg:max-w-none max-md:gap-2">
                  <h3 className="mt-2 font-object text-2xl leading-none tracking-tighter text-primary max-xl:text-xl max-md:text-lg">
                    Target the right users
                  </h3>
                  <p className="-mt-1.75 text-xl leading-snug text-gray-800 max-xl:text-base">
                    Segment by audience, geography, or placement. Right pricing, right users, right time.
                  </p>
                  <a className="font-object inline-flex items-center rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 gap-2 font-medium" href="https://www.revenuecat.com/feature/targeting">
                    Explore Targeting <ArrowIcon />
                  </a>
                </div>
              </li>
            </ul>

            {/* Stat footnote */}
            <div className="mt-10 flex items-baseline gap-3 max-md:mt-8">
              <span className="font-object text-[28px] font-medium text-secondary-red tracking-tight leading-none">+20%</span>
              <p className="text-sm text-gray-750">
                A single paywall experiment lifted revenue 20%.
                <a href="https://www.revenuecat.com/state-of-subscription-apps-2026/" target="_blank" rel="noopener noreferrer" className="ml-1 underline decoration-border-light underline-offset-4 hover:decoration-secondary-blue-1 hover:text-secondary-blue-1 transition-colors">
                  SOSA 2026
                </a>
              </p>
            </div>
          </div>

          {/* Animated sequence */}
          <div className="relative w-[55%] max-lg:w-full max-sm:w-screen overflow-visible flex items-center">
            <div className="pointer-events-none w-full">
              <IterateSequence />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
