import { ArrowIcon } from "./ArrowIcon";

export function Foundation() {
  return (
    <section className="bg-white py-12 max-md:py-8">
      <div className="container">
        <article className="relative mx-auto overflow-hidden border border-transparent shadow-card max-md:max-w-full max-md:pb-52 max-w-268 rounded-2xl max-lg:max-w-180"
          style={{
            background: "linear-gradient(rgb(249,249,251),rgb(249,249,251)) padding-box, linear-gradient(135deg, rgb(184,194,224) 0%, rgba(234,237,246,0) 100%) border-box, linear-gradient(rgb(234,237,246),rgb(234,237,246)) border-box",
          }}
        >
          <div className="relative z-10 flex min-h-65 w-[46%] flex-col justify-center max-xl:bg-linear-to-r max-xl:from-gray-50 max-xl:from-80% max-xl:to-transparent max-lg:w-1/2 max-md:min-h-0 max-md:w-full p-10 max-lg:p-8 max-md:p-9 max-md:pt-7">
            <h2 className="font-object leading-dense font-medium tracking-dense text-balance text-primary text-2xl max-lg:text-xl max-md:text-center">
              IAP handled. Now go build.
            </h2>
            <p className="mt-2.5 font-light text-pretty text-gray-800 max-w-80 text-sm max-md:text-center">
              One SDK, every platform. Purchases, entitlements, and receipt validation just work.
            </p>
            <div className="mt-6 flex gap-x-8 gap-y-4 max-md:flex-wrap max-md:justify-center">
              <a
                className="font-object inline-flex items-center gap-x-1 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 font-medium whitespace-nowrap"
                href="https://www.revenuecat.com/docs/getting-started/installation"
                rel="noopener noreferrer"
                target="_blank"
              >
                Share with your dev team
                <ArrowIcon className="w-1.5!" />
              </a>
            </div>
          </div>

          {/* SDK icons background - desktop */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="pointer-events-none object-cover object-right max-md:hidden"
            sizes="100vw"
            src="https://cdn.sanity.io/images/c3qnx9b0/production/821bcfb8ddfd56dfc8ac77203021814c5c9b2372-1072x259.svg?w=1920&q=75&auto=format"
            alt=""
            style={{ inset: 0, position: "absolute", height: "100%", width: "100%", color: "transparent" }}
          />
          {/* SDK icons background - mobile */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="pointer-events-none hidden object-cover object-bottom max-md:block"
            sizes="100vw"
            src="https://cdn.sanity.io/images/c3qnx9b0/production/8a8a7ae9cdb912774c40d6a60ff6dcd80ce5b3b3-328x319.svg?w=828&q=75&auto=format"
            alt=""
            style={{ inset: 0, position: "absolute", height: "100%", width: "100%", color: "transparent" }}
          />
        </article>
      </div>
    </section>
  );
}
