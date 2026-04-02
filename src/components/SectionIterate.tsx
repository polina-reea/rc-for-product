import { ArrowIcon } from "./ArrowIcon";
import { PaywallIcon, ExperimentIcon, TargetIcon } from "./Icons";
import { IterateSequence, PhoneA, PhoneB, EditorPanel } from "./IterateSequence";

export function SectionIterate() {
  return (
    <section className="bg-gray-50 py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20" id="iterate">
      <div className="container">
        <h2 className="font-object leading-dense font-medium tracking-tighter text-primary text-[3.25rem] max-xl:text-[2.5rem] max-lg:text-[2rem] max-sm:text-[1.625rem] mx-auto mb-12 max-w-[48rem] text-center text-pretty max-lg:mb-10 max-md:mb-8">
          Ship paywall changes in minutes.<br />Predict winners in weeks
        </h2>
        {/* Desktop layout */}
        <div className="flex flex-row max-md:hidden">
          <div className="mx-auto flex w-[45%] shrink flex-col justify-center pr-16 max-xl:pr-10">
            <ul className="flex flex-col gap-7">
              {/* Paywalls */}
              <li className="relative flex gap-4.5 max-xl:gap-3.5">
                <div className="flex size-10 max-xl:size-8 shrink-0 items-center justify-center rounded-full bg-white/80 shadow-feature-blue text-secondary-blue-1" aria-hidden="true">
                  <span className="inline-flex items-center justify-center size-5 max-xl:size-4"><PaywallIcon /></span>
                </div>
                <div className="flex max-w-140 flex-col gap-4 max-xl:max-w-64 max-lg:max-w-none">
                  <h3 className="mt-2 font-object text-2xl leading-none tracking-tighter text-primary max-xl:text-xl">
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
                <div className="flex max-w-140 flex-col gap-4 max-xl:max-w-64 max-lg:max-w-none">
                  <h3 className="mt-2 font-object text-2xl leading-none tracking-tighter text-primary max-xl:text-xl">
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
                <div className="flex max-w-140 flex-col gap-4 max-xl:max-w-64 max-lg:max-w-none">
                  <h3 className="mt-2 font-object text-2xl leading-none tracking-tighter text-primary max-xl:text-xl">
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
            <div className="mt-10 rounded-xl bg-white p-5 border border-border-light" style={{ boxShadow: "0 4px 12px rgba(144,138,208,0.08)" }}>
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

          {/* Animated sequence — desktop */}
          <div className="relative w-[55%] max-lg:w-full overflow-hidden flex items-center">
            <div className="pointer-events-none w-full">
              <IterateSequence />
            </div>
          </div>
        </div>

        {/* Mobile layout — feature + panel pairs */}
        <div className="hidden max-md:flex flex-col gap-10 px-4">
          {/* Paywalls */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-3.5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/80 shadow-feature-blue text-secondary-blue-1" aria-hidden="true">
                <span className="inline-flex items-center justify-center size-5"><PaywallIcon /></span>
              </div>
              <div>
                <h3 className="font-object text-lg leading-tight tracking-tighter text-primary font-medium mb-2">
                  No-code paywall editor
                </h3>
                <p className="text-base leading-snug text-gray-800 mb-3">
                  Start with AI-generated designs or build from scratch. No-code templates, Figma import, custom HTML. Hit&nbsp;publish and it&apos;s live on iOS, Android, and web. No App Store&nbsp;review.
                </p>
                <a className="font-object inline-flex items-center rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 gap-2 font-medium text-sm" href="https://www.revenuecat.com/feature/paywalls">
                  Explore Paywalls <ArrowIcon />
                </a>
              </div>
            </div>
            <div className="h-[240px] rounded-2xl bg-white/50 border border-border-light/50 overflow-hidden flex items-center justify-center">
              <div className="scale-[0.7] origin-center flex items-center gap-4">
                <EditorPanel />
                <PhoneA />
              </div>
            </div>
          </div>

          {/* Experiments */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-3.5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/80 shadow-feature-red text-secondary-red" aria-hidden="true">
                <span className="inline-flex items-center justify-center size-5"><ExperimentIcon /></span>
              </div>
              <div>
                <h3 className="font-object text-lg leading-tight tracking-tighter text-primary font-medium mb-2">
                  A/B testing that predicts the future
                </h3>
                <p className="text-base leading-snug text-gray-800 mb-3">
                  Up to four variants. RevenueCat predicts the 12-month LTV winner with revenue-based significance while the test is still running. Ship the winner in one&nbsp;click.
                </p>
                <a className="font-object inline-flex items-center rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 gap-2 font-medium text-sm" href="https://www.revenuecat.com/feature/experiments/">
                  Explore Experiments <ArrowIcon />
                </a>
              </div>
            </div>
            <div className="h-[260px] rounded-2xl bg-white/50 border border-border-light/50 overflow-hidden flex items-center justify-center">
              <div className="scale-[0.6] origin-center flex flex-col items-center gap-3">
                <div className="flex items-end gap-3">
                  <div className="relative">
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex items-center justify-center h-4 px-2 rounded bg-secondary-blue-1 text-[8px] font-medium text-white shadow-sm tracking-wide z-10">A</div>
                    <PhoneA />
                  </div>
                  <span className="font-object text-sm text-gray-750/30 italic shrink-0 mb-28">VS</span>
                  <div className="relative">
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex items-center justify-center h-4 px-2 rounded bg-secondary-red text-[8px] font-medium text-white shadow-sm tracking-wide z-10">B</div>
                    <PhoneB />
                  </div>
                </div>
                <div className="w-[280px] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-object text-[10px] font-medium text-primary">Results</span>
                    <span className="px-1.5 py-0.5 rounded text-[8px] font-medium bg-secondary-green/15 text-secondary-green">Winner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-secondary-blue-1 font-medium w-5 shrink-0">A</span>
                    <div className="flex-1 h-1 rounded-full overflow-hidden bg-border-light">
                      <div className="h-full rounded-full bg-secondary-blue-1" style={{ width: "65%" }} />
                    </div>
                    <span className="text-[9px] font-medium text-secondary-blue-1 w-10 text-right">+23%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-secondary-red font-medium w-5 shrink-0">B</span>
                    <div className="flex-1 h-1 rounded-full overflow-hidden bg-border-light">
                      <div className="h-full rounded-full bg-secondary-red/40" style={{ width: "42%" }} />
                    </div>
                    <span className="text-[9px] text-gray-750/50 w-10 text-right">$4.82</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Targeting */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-3.5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/80 shadow-feature-green text-secondary-green" aria-hidden="true">
                <span className="inline-flex items-center justify-center size-5"><TargetIcon /></span>
              </div>
              <div>
                <h3 className="font-object text-lg leading-tight tracking-tighter text-primary font-medium mb-2">
                  Target the right users
                </h3>
                <p className="text-base leading-snug text-gray-800 mb-3">
                  Segment by cohort, country, or custom attribute. Show different offerings to different users, no code&nbsp;needed.
                </p>
                <a className="font-object inline-flex items-center rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 gap-2 font-medium text-sm" href="https://www.revenuecat.com/feature/targeting">
                  Explore Targeting <ArrowIcon />
                </a>
              </div>
            </div>
            <div className="h-[240px] rounded-2xl bg-white/50 border border-border-light/50 overflow-hidden flex items-center justify-center">
              <div className="w-[280px] rounded-2xl bg-white p-5 shadow-card border border-border-light">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-object text-sm font-medium text-primary">Target Audience</span>
                  <svg className="size-4 text-gray-750/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-lg border-2 border-secondary-blue-1/30 bg-secondary-blue-1/5">
                    <span className="text-[12px] text-secondary-blue-1">Country</span>
                    <span className="text-[12px] font-medium text-primary">US, UK, DE</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg border border-border-light">
                    <span className="text-[12px] text-gray-750">Platform</span>
                    <span className="text-[12px] font-medium text-primary">iOS</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg border border-border-light">
                    <span className="text-[12px] text-gray-750">User Type</span>
                    <span className="text-[12px] font-medium text-primary">New Users</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-border-light flex items-center justify-between">
                  <span className="text-[11px] text-gray-750">Estimated reach</span>
                  <span className="text-[12px] font-medium text-secondary-blue-1">~125,000 users</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inline testimonial */}
          <div className="rounded-xl bg-white p-5 border border-border-light" style={{ boxShadow: "0 4px 12px rgba(144,138,208,0.08)" }}>
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
      </div>
    </section>
  );
}
