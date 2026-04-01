import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-50">
      <div className="container flex h-16 items-center justify-between">
        <a
          className="font-object inline-flex items-center gap-x-1 rounded transition-colors duration-300 text-primary hover:text-secondary-red z-50 w-max pt-1.5"
          href="/"
        >
          <Image
            height={40}
            width={138}
            src="/logo.svg"
            alt="RevenueCat"
            style={{ color: "transparent" }}
          />
          <span className="sr-only">Back to the RevenueCat homepage</span>
        </a>

        <nav className="-ml-2 max-xl:hidden">
          <ul className="flex items-center">
            {["Features", "Solutions", "Developers", "Resources", "Integrations"].map(
              (item) => (
                <li key={item} className="group relative">
                  <button
                    className="inline-flex items-center gap-x-1.25 rounded px-3.5 font-object text-sm text-primary transition-colors duration-300 hover:text-secondary-red after:mt-1.25 after:size-0 after:origin-[center_20%] after:border-4 after:border-transparent after:border-t-current after:transition-transform after:duration-300"
                    type="button"
                  >
                    {item}
                  </button>
                </li>
              )
            )}
            <li className="group relative">
              <a
                className="font-object inline-flex items-center gap-x-1 rounded transition-colors duration-300 text-primary hover:text-secondary-red text-sm px-3.5"
                href="https://www.revenuecat.com/blog"
              >
                Blog
              </a>
            </li>
            <li className="group relative">
              <a
                className="font-object inline-flex items-center gap-x-1 rounded transition-colors duration-300 text-primary hover:text-secondary-red text-sm px-3.5"
                href="https://www.revenuecat.com/pricing"
              >
                Pricing
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-8 max-xl:hidden">
          <a
            className="font-object inline-flex items-center gap-x-1 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 text-sm font-medium tracking-dense"
            href="https://app.revenuecat.com/login"
            rel="noopener noreferrer"
            target="_blank"
          >
            Log In
          </a>
          <a
            className="transition-colors duration-300 whitespace-nowrap font-object font-medium relative inline-flex w-fit items-center justify-center gap-1 bg-secondary-blue-1 hover:bg-secondary-blue-2 text-white h-[2.625rem] rounded-full text-sm px-7 tracking-dense"
            href="https://app.revenuecat.com/signup"
          >
            <span className="relative z-10 inline-flex whitespace-nowrap items-center justify-center gap-1 w-full">
              Sign Up
            </span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="relative -mr-3 size-10 flex-col items-center justify-center gap-1.25 z-50 hidden max-xl:flex"
          type="button"
          aria-label="Menu"
        >
          <span className="block h-0.5 w-6 rounded-full bg-primary" />
          <span className="block h-0.5 w-6 rounded-full bg-primary" />
          <span className="block h-0.5 w-6 rounded-full bg-primary" />
        </button>
      </div>
    </header>
  );
}
