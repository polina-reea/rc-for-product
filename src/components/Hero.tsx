import { Button } from "@/components/ui/Button";
import { LinkWithArrow } from "@/components/ui/LinkWithArrow";
import { TestimonialCarousel } from "./TestimonialCarousel";

export function Hero() {
  return (
    <section className="bg-gray-50">
    <div className="flex max-xl:flex-col pt-22 mx-auto w-full max-w-7xl flex-row gap-x-24 px-8 pb-20 max-xl:max-w-5xl max-xl:gap-0 max-xl:pt-16 max-lg:max-w-3xl max-lg:px-5 max-lg:pb-10 max-md:max-w-none max-md:px-5">
      <div className="flex flex-col justify-center max-xl:mx-auto max-xl:w-4/5 max-xl:items-center max-md:w-full max-md:max-w-md w-[40%] shrink-0 max-lg:w-full max-lg:items-center max-lg:pb-10 max-md:px-4">
        <p className="-order-1 mb-3.5 flex h-10 w-max items-center text-secondary-blue-1 uppercase">
          <span className="text-sm font-medium font-object">For Product Teams</span>
        </p>
        <h1 className="font-object font-medium text-balance text-primary max-w-4xl max-lg:max-w-2xl max-md:max-w-xl text-[56px] max-xl:text-[2.75rem] max-lg:text-[2.25rem] max-sm:text-[1.75rem] leading-[1.12] tracking-[-0.04em] text-left max-xl:text-center">
          Stop waiting on engineering.<br />Start shipping
        </h1>
        <p className="mt-6 text-xl leading-snug font-light text-gray-800 max-w-lg max-xl:text-center max-xl:mx-auto max-md:text-base">
          Design paywalls, run A/B experiments, and ship remotely. All from the dashboard. No&nbsp;app&nbsp;release, no&nbsp;engineering&nbsp;tasks, no&nbsp;waiting.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-8 max-xl:gap-5 max-lg:justify-center">
          <Button href="https://app.revenuecat.com/signup" className="tracking-dense max-lg:h-11">Start for free</Button>
          <LinkWithArrow href="https://demo.revenuecat.com/" size="base">Explore Demo</LinkWithArrow>
        </div>
      </div>

      {/* Right side — testimonial carousel */}
      <div className="flex-1 flex items-center justify-center max-xl:mt-10 min-h-[520px] max-xl:min-h-[480px] max-lg:min-h-0 max-md:min-h-[400px]">
        <TestimonialCarousel />
      </div>
    </div>
    </section>
  );
}
