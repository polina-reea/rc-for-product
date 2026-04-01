import { ArrowIcon } from "../ArrowIcon";
import { FloatingBlobs } from "./FloatingBlobs";

export function SectionProtectV2() {
  return (
    <section className="relative bg-white py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20" id="protect">
      <FloatingBlobs color="red" />
      <div className="container relative z-10">
        <header className="mb-12 flex flex-col items-center gap-4 text-center max-md:mb-10">
          <h2 className="font-object leading-dense font-medium tracking-tighter text-balance text-primary max-w-4xl max-lg:max-w-2xl text-[2.25rem] max-lg:text-[1.625rem] text-center mx-auto">
            Smarter support. Stronger{" "}<span className="v2-gradient-text">retention</span>.
          </h2>
          <p className="text-xl font-light text-gray-800 max-w-2xl max-md:text-base">
            Automate the work that drains your team. Keep the customers you already won.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1 max-lg:max-w-md max-lg:mx-auto">
          <div className="relative rounded-2xl border border-border-light bg-gray-50 p-7">
            <div className="relative z-10 flex flex-col gap-7">
              <div>
                <p className="text-lg leading-normal font-light text-gray-800 max-md:text-base">
                  <strong className="font-medium text-primary">Refund requests on autopilot.</strong>{" "}
                  RevenueCat handles Apple refund requests automatically, using real usage data.
                  Your support team has better things to do.
                </p>
              </div>
              <a className="font-object inline-flex items-center gap-1 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 font-medium" href="https://www.revenuecat.com/docs/subscription-guidance/refunds">
                Explore Refunds <ArrowIcon className="w-1.5" />
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl border border-border-light bg-gray-50 p-7">
            <div className="relative z-10 flex flex-col gap-7">
              <div>
                <p className="text-lg leading-normal font-light text-gray-800 max-md:text-base">
                  <strong className="font-medium text-primary">Let users help themselves.</strong>{" "}
                  Customer Center gives subscribers self-serve tools: cancellation
                  surveys, win-back offers, and plan changes. Less churn, fewer tickets.
                </p>
              </div>
              <a className="font-object inline-flex items-center gap-1 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 font-medium" href="https://www.revenuecat.com/customer-center">
                Explore Customer Center <ArrowIcon className="w-1.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
