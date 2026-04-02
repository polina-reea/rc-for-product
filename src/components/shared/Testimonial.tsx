import { ArrowIcon } from "../icons/ArrowIcon";

export function Testimonial() {
  return (
    <section className="bg-white py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20">
      <div className="container">
        <div className="mx-auto max-w-[488px]">
          <article className="mx-auto flex min-h-[300px] max-w-[488px] flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-card">
            <header className="grid grid-cols-[64px_1fr] gap-x-4 gap-y-0.5">
              <div className="row-span-2 flex size-16 items-center justify-center overflow-hidden rounded-[20px] bg-gray-50">
                <span className="font-object font-medium text-primary text-lg">PR</span>
              </div>
              <h3 className="col-start-2 self-end text-lg leading-tight font-medium text-primary">
                Photoroom
              </h3>
              <p className="col-start-2 truncate text-base text-gray-800">
                Photo Editing
              </p>
            </header>
            <blockquote className="py-4 text-base leading-normal font-light text-gray-800">
              <p>
                &quot;RevenueCat enables us to have one single source of truth
                for subscriptions and revenue data. It freed up engineering to
                focus on product instead of billing plumbing.&quot;
              </p>
            </blockquote>
            <footer className="mt-auto grid grid-cols-[40px_1fr_max-content] gap-x-4 gap-y-0.5 max-sm:grid-cols-[40px_1fr]">
              <div className="row-span-2 size-10 rounded-full bg-gray-50 flex items-center justify-center">
                <span className="font-object text-sm font-medium text-primary">OL</span>
              </div>
              <p className="col-start-2 self-end text-base leading-snug font-medium text-primary">
                Olivier Lemarié
              </p>
              <p className="col-start-2 truncate text-base leading-tight font-light text-gray-750">
                Head of Growth, Photoroom
              </p>
              <a
                className="font-object inline-flex items-center gap-x-1 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 col-start-3 row-span-2 row-start-1 self-end text-base font-medium max-sm:col-start-2 max-sm:row-start-3 max-sm:mt-4 max-sm:ml-auto"
                href="https://www.revenuecat.com/customers/photoroom/"
              >
                Read the case study
                <ArrowIcon className="w-1.5!" />
              </a>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}
