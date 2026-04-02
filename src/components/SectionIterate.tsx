import { ArrowIcon } from "./ArrowIcon";
import { PaywallIcon, ExperimentIcon, TargetIcon } from "./Icons";
import { IterateSequence } from "./IterateSequence";

export function SectionIterate() {
  return (
    <section className="bg-gray-50 py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20" id="iterate">
      <div className="container">
        <h2 className="font-object leading-dense font-medium tracking-tighter text-primary text-[3.25rem] max-xl:text-[2.5rem] max-lg:text-[2rem] max-sm:text-[1.625rem] mx-auto mb-12 max-w-[48rem] text-center text-pretty max-lg:mb-10 max-md:mb-8">
          Ship paywall changes in minutes.<br />Predict winners in weeks
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
                    Start with AI-generated designs or build from scratch. No-code templates, Figma import, custom HTML. Hit&nbsp;publish and it&apos;s live on iOS, Android, and web. No App Store&nbsp;review.
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
                    Up to four variants. RevenueCat predicts the 12-month LTV winner with revenue-based significance while the test is still running. Ship the winner in one&nbsp;click.
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
                    Segment by cohort, country, or custom attribute. Show different offerings to different users, no code&nbsp;needed.
                  </p>
                  <a className="font-object inline-flex items-center rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 gap-2 font-medium" href="https://www.revenuecat.com/feature/targeting">
                    Explore Targeting <ArrowIcon />
                  </a>
                </div>
              </li>
            </ul>

            {/* Inline testimonial */}
            <div className="mt-10 max-md:mt-8 rounded-xl bg-white p-5 border border-border-light" style={{ boxShadow: "0 4px 12px rgba(144,138,208,0.08)" }}>
              <div className="flex items-center gap-3 mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="size-9 rounded-xl object-contain" src="https://cdn.sanity.io/images/c3qnx9b0/production/39f531e18947f35909fa6c1dd5858d562f2b1db9-80x80.svg?w=64&q=75&auto=format" alt="RocketSim" width={36} height={36} />
                <div>
                  <p className="text-sm font-medium text-primary leading-tight">RocketSim</p>
                  <p className="text-[12px] text-gray-750 leading-tight">Antoine van der Lee, Founder</p>
                </div>
              </div>
              <p className="text-[15px] leading-snug text-gray-800">
                &ldquo;Using RevenueCat Experiments, I increased <strong className="font-medium text-secondary-blue-1">RocketSim&rsquo;s LTV by&nbsp;47%</strong>.&rdquo;
              </p>
            </div>
          </div>

          {/* Animated sequence */}
          <div className="relative w-[55%] max-lg:w-full overflow-hidden flex items-center">
            <div className="pointer-events-none w-full">
              <IterateSequence />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
