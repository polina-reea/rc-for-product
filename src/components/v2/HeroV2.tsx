import { ArrowIcon } from "../ArrowIcon";
import { TestimonialCarousel } from "../TestimonialCarousel";
import { LogoBar } from "../LogoBar";
import { FloatingBlobs } from "./FloatingBlobs";

export function HeroV2() {
  return (
    <section className="bg-gray-50 relative">
      <FloatingBlobs color="mixed" />

      <div className="flex max-xl:flex-col pt-22 mx-auto w-full max-w-7xl flex-row gap-x-24 px-8 pb-20 max-xl:max-w-5xl max-xl:gap-0 max-xl:pt-16 max-lg:max-w-3xl max-lg:px-5 max-lg:pb-10 max-md:max-w-none max-md:px-5 relative z-10">
        <div className="flex flex-col justify-center max-xl:mx-auto max-xl:w-4/5 max-xl:items-center max-md:w-full max-md:max-w-md w-[40%] shrink-0 max-lg:w-full max-lg:items-center max-lg:pb-10 max-md:px-4">
          <p className="-order-1 mb-3.5 flex h-10 w-max items-center text-secondary-blue-1 uppercase">
            <span className="text-sm font-medium font-object">For Product Teams</span>
          </p>
          <h1 className="font-object font-medium text-balance max-w-4xl max-lg:max-w-2xl max-md:max-w-xl text-[56px] max-xl:text-[2.75rem] max-lg:text-[2.25rem] max-sm:text-[1.75rem] leading-[1.12] tracking-[-0.04em] text-left max-xl:text-center text-primary v2-hero-glow">
            Stop waiting on engineering.<br />
            <span className="v2-gradient-text">Start shipping</span>
          </h1>
          <p className="mt-6 text-xl leading-snug font-light text-gray-800 max-w-lg max-xl:text-center max-xl:mx-auto max-md:text-base">
            Design paywalls, run A/B experiments, and ship remotely. All from the dashboard. No&nbsp;app&nbsp;release, no&nbsp;engineering&nbsp;tasks, no&nbsp;waiting.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-8 max-xl:gap-5 max-lg:justify-center">
            <a
              className="v2-btn-gradient v2-btn-shimmer whitespace-nowrap font-object font-medium relative inline-flex w-fit items-center justify-center gap-1 text-white h-12 rounded-full text-base px-7 max-md:h-11 max-md:text-sm tracking-dense max-lg:h-11"
              href="https://app.revenuecat.com/signup"
            >
              <span className="relative z-10 inline-flex whitespace-nowrap items-center justify-center gap-1 w-full">
                Start for free
              </span>
            </a>
            <a
              className="font-object inline-flex items-center rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 gap-2 font-medium"
              href="https://demo.revenuecat.com/"
            >
              Explore Demo
              <ArrowIcon className="w-1.5" />
            </a>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center max-xl:mt-10 min-h-[520px] max-xl:min-h-[480px] max-lg:min-h-0">
          <TestimonialCarousel />
        </div>
      </div>

      {/* Logo bar integrated into hero */}
      <LogoBar />
    </section>
  );
}
