import { ArrowIcon } from "../ArrowIcon";
import { FloatingBlobs } from "./FloatingBlobs";

export function FinalCtaV2() {
  return (
    <section className="relative py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20 bg-white snap-section">
      <FloatingBlobs color="mixed" />
      <div className="container relative z-10 flex flex-col items-center">
        <h2 className="font-object leading-dense font-medium tracking-tighter text-balance max-w-4xl max-lg:max-w-2xl max-md:max-w-xl text-[3.25rem] max-xl:text-[2.5rem] max-lg:text-[2rem] max-sm:text-[1.625rem] mx-auto text-center text-primary">
          Your monetization shouldn&apos;t need<br /><span className="v2-gradient-text">an engineering sprint</span>
        </h2>
        <p className="mt-5 max-w-2xl text-center text-xl leading-snug font-light text-pretty text-gray-800 max-xl:mt-4 max-lg:mt-3.5 max-lg:max-w-lg max-md:mt-3 max-md:max-w-md max-md:text-base">
          Every feature comes standard, and it&apos;s free to&nbsp;start.
        </p>
        <div className="mt-8 flex items-center gap-8 max-xl:mt-6 max-lg:mt-5 max-lg:gap-6 max-md:mt-6">
          <a
            className="v2-btn-gradient v2-btn-shimmer whitespace-nowrap font-object font-medium relative inline-flex w-fit items-center justify-center gap-1 text-white h-12 rounded-full text-base px-7 max-md:h-11 max-md:text-sm"
            href="https://app.revenuecat.com/signup"
          >
            <span className="relative z-10 inline-flex whitespace-nowrap items-center justify-center gap-1 w-full">
              Start for free
            </span>
          </a>
          <a
            className="font-object inline-flex items-center gap-1 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 font-medium"
            href="https://demo.revenuecat.com/"
          >
            Explore Demo
            <ArrowIcon className="w-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
