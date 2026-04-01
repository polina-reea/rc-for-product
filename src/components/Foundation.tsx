import { ArrowIcon } from "./ArrowIcon";

export function Foundation() {
  return (
    <section className="bg-white py-12 max-md:py-8">
      <div className="container">
        <article className="relative mx-auto overflow-hidden rounded-2xl border border-border-light max-md:pb-60"
          style={{
            background: "linear-gradient(rgb(249,249,251),rgb(249,249,251)) padding-box, linear-gradient(135deg, rgb(184,194,224) 0%, rgba(234,237,246,0) 100%) border-box, linear-gradient(rgb(234,237,246),rgb(234,237,246)) border-box",
            boxShadow: "0 20px 30px 0px rgba(144,138,208,0.1), 5px 5px 20px 0 rgba(71,92,133,0.05)",
          }}
        >
          <div className="relative z-10 flex min-h-65 w-[54%] flex-col justify-center bg-gradient-to-r from-gray-50 from-85% to-transparent p-12 max-xl:p-11 max-xl:from-75% max-lg:w-1/2 max-lg:p-8 max-md:w-full max-md:min-h-0 max-md:bg-gradient-to-b max-md:from-90% max-md:p-9 max-md:pt-6">
            <h2 className="font-object leading-dense font-medium tracking-dense text-balance text-primary text-[32px] max-xl:text-[28px] max-lg:text-2xl max-md:text-center max-md:text-xl">
              Drop in the SDK. Start selling.
            </h2>
            <p className="mt-3 font-light text-pretty text-gray-800 text-base max-md:text-center max-md:text-sm">
              Your engineering team drops in the SDK once. Purchases, access control,
              and subscription tracking just work, so your team ships product, not billing code.
            </p>
            <div className="mt-6 flex gap-x-8 gap-y-4 max-md:flex-wrap max-md:justify-center">
              <a
                className="font-object inline-flex items-center gap-2 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 font-medium whitespace-nowrap"
                href="https://www.revenuecat.com/docs/getting-started/installation"
                rel="noopener noreferrer"
                target="_blank"
              >
                Share with your dev team
                <ArrowIcon className="w-1.5!" />
              </a>
            </div>
          </div>

          {/* Code snippet background - desktop */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right max-md:hidden"
            src="https://cdn.sanity.io/images/c3qnx9b0/production/2537f0a3284651834046f34f132d8ecac1234398-4864x1036.png?w=1920&q=75&auto=format"
            alt=""
          />
          {/* Code snippet background - mobile */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover object-bottom max-md:block"
            src="https://cdn.sanity.io/images/c3qnx9b0/production/512dea7fb605b300dae9fbe0eaabf3ba6e686c84-328x405.svg?w=828&q=75&auto=format"
            alt=""
          />
        </article>
      </div>
    </section>
  );
}
