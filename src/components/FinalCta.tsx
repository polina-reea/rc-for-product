import { ArrowIcon } from "./ArrowIcon";

export function FinalCta() {
  return (
    <section className="py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20 bg-white">
      <div className="container flex flex-col items-center">
        <h2 className="font-object leading-dense font-medium tracking-tighter text-balance text-primary max-w-4xl max-lg:max-w-2xl max-md:max-w-xl text-[3.5rem] max-xl:text-[2.75rem] max-lg:text-[2.25rem] max-sm:text-[1.875rem] mx-auto text-center">
          Stop waiting on engineering. Start shipping.
        </h2>
        <p className="mt-5 max-w-2xl text-center text-xl leading-snug font-light text-pretty text-gray-800 max-xl:mt-4 max-lg:mt-3.5 max-lg:max-w-lg max-md:mt-3 max-md:max-w-md max-md:text-base">
          Every feature comes standard, and it&apos;s free to start.
        </p>
        <div className="mt-8 flex items-center gap-8 max-xl:mt-6 max-lg:mt-5 max-lg:gap-6 max-md:mt-6">
          <a
            className="transition-colors duration-300 whitespace-nowrap font-object font-medium relative inline-flex w-fit items-center justify-center gap-1 bg-secondary-blue-1 hover:bg-secondary-blue-2 text-white h-12 rounded-full text-base px-7 max-md:h-11 max-md:text-sm"
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
