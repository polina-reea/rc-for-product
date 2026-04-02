import { ArrowIcon } from "./ArrowIcon";

export function SectionProtect() {
  return (
    <section className="bg-white py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20" id="protect">
      <div className="container">
        <header className="mb-12 flex flex-col items-center gap-4 text-center max-md:mb-10">
          <h2 className="font-object leading-dense font-medium tracking-tighter text-balance text-primary max-w-4xl max-lg:max-w-2xl text-[3.25rem] max-xl:text-[2.5rem] max-lg:text-[2rem] max-sm:text-[1.625rem] text-center mx-auto">
            Smarter support<br />Stronger retention
          </h2>
          <p className="text-xl font-light text-gray-800 max-w-2xl text-pretty max-md:text-base">
            Automate the work that drains your team.<br />Keep the customers you already won.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1 max-lg:max-w-md max-lg:mx-auto">
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-border-light bg-gray-50">
            <div className="flex-1 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="pointer-events-none w-full object-cover object-top"
                height={344}
                width={592}
                alt=""
                src="https://www.revenuecat.com/static/3ba59cea1efa5cf563950c108fefc3fb/12bcc/card1.png"
              />
            </div>
            <div className="p-7 bg-gradient-to-t from-gray-50 from-70% to-transparent -mt-12 relative z-10">
              <p className="text-lg leading-[133.5%] font-light text-gray-800">
                <strong className="font-medium text-primary">Refund requests on&nbsp;autopilot.</strong>{" "}
                RevenueCat handles Apple refund requests automatically, using real usage&nbsp;data. Your support team has better things to&nbsp;do.
              </p>
              <a className="font-object inline-flex items-center gap-1 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 font-medium mt-4" href="https://www.revenuecat.com/docs/subscription-guidance/refunds">
                Explore Refunds <ArrowIcon className="w-1.5" />
              </a>
            </div>
          </div>

          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-border-light bg-gray-50">
            <div className="flex-1 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="pointer-events-none w-full object-cover object-top"
                height={227}
                width={590}
                alt=""
                src="https://www.revenuecat.com/website/_next/static/media/management.2591cace.svg"
              />
            </div>
            <div className="p-7 bg-gradient-to-t from-gray-50 from-70% to-transparent -mt-12 relative z-10">
              <p className="text-lg leading-[133.5%] font-light text-gray-800">
                <strong className="font-medium text-primary">Let users help&nbsp;themselves.</strong><br />Customer Center gives subscribers self-serve cancel flows, win-back offers, and plan&nbsp;changes. Less churn, fewer&nbsp;tickets.
              </p>
              <a className="font-object inline-flex items-center gap-1 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 font-medium mt-4" href="https://www.revenuecat.com/customer-center">
                Explore Customer Center <ArrowIcon className="w-1.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
