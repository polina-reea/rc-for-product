import { LinkWithArrow } from "@/components/ui/LinkWithArrow";
import { integrations } from "@/data/integrations";

export function Integrations() {
  return (
    <section className="bg-white py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-object text-[2.25rem] max-lg:text-[1.875rem] max-sm:text-[1.5rem] leading-dense font-medium tracking-tighter text-primary mb-2">
            Works with your stack
          </h2>
          <p className="text-base text-gray-800 max-md:text-sm">
            RevenueCat connects to the tools you already use.
          </p>
        </div>

        <ul className="grid grid-cols-4 gap-8 max-lg:grid-cols-3 max-sm:grid-cols-2 mb-8">
          {integrations.map((i) => (
            <li key={i.name}>
              <a
                className="relative flex flex-col items-center rounded-2xl border border-border-light p-6 pb-5 text-center transition-colors duration-200 hover:border-secondary-blue-1/30 max-md:p-4"
                href={i.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-16 w-auto max-md:h-14"
                  height={64}
                  width={64}
                  src={i.logo}
                  alt={i.name}
                />
                <h3 className="font-object mt-5 whitespace-nowrap text-base leading-snug text-gray-800/70 font-normal">
                  {i.name}
                </h3>
              </a>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <LinkWithArrow href="https://www.revenuecat.com/integrations/">View All Integrations</LinkWithArrow>
        </div>
      </div>
    </section>
  );
}
