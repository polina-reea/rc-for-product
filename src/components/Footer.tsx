import Image from "next/image";

const footerNav = {
  Resources: [
    { label: "Press Kit", href: "https://www.revenuecat.com/press-kit/" },
    { label: "Careers", href: "https://jobs.ashbyhq.com/revenuecat" },
    { label: "Blog", href: "https://www.revenuecat.com/blog/" },
    { label: "Podcast", href: "https://subclub.com/" },
    { label: "Customer Stories", href: "https://www.revenuecat.com/testimonials" },
    { label: "Partners", href: "https://www.revenuecat.com/partners/" },
    { label: "Help Center", href: "https://community.revenuecat.com/" },
    { label: "Contact", href: "https://www.revenuecat.com/contact/" },
  ],
  Documentation: [
    { label: "Quickstart Guide", href: "https://www.revenuecat.com/docs/welcome/overview/" },
    { label: "Migration Guide", href: "https://www.revenuecat.com/docs/migrating-to-revenuecat/migration-paths/" },
    { label: "SDKs", href: "https://www.revenuecat.com/docs/getting-started/installation/" },
    { label: "API Reference", href: "https://www.revenuecat.com/docs/api-v1/" },
    { label: "Sample Apps", href: "https://www.revenuecat.com/docs/platform-resources/sample-apps/" },
    { label: "System Status", href: "https://status.revenuecat.com/" },
    { label: "View All Docs", href: "https://www.revenuecat.com/docs/" },
  ],
  Product: [
    { label: "Why RevenueCat", href: "https://www.revenuecat.com/why-revenuecat" },
    { label: "Integrations", href: "https://www.revenuecat.com/integrations/" },
    { label: "For Engineering Teams", href: "https://www.revenuecat.com/for-developers/" },
    { label: "For Marketing Teams", href: "https://www.revenuecat.com/for-marketing" },
    { label: "For Product Teams", href: "https://www.revenuecat.com/for-product/" },
    { label: "Pricing", href: "https://www.revenuecat.com/pricing/" },
    { label: "Changelog", href: "https://www.revenuecat.com/changelog" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "https://www.revenuecat.com/privacy" },
    { label: "Terms and Conditions", href: "https://www.revenuecat.com/terms" },
    { label: "GDPR", href: "https://www.revenuecat.com/gdpr" },
    { label: "Security and Compliance", href: "https://www.revenuecat.com/security-and-compliance" },
    { label: "Fair Billing Policy", href: "https://www.revenuecat.com/fair-billing/" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container grid grid-cols-12 gap-x-8 py-20 max-xl:py-11 max-lg:py-16 max-md:flex max-md:flex-col max-md:items-start max-md:py-10">
        {/* Left — Logo + Social + Copyright */}
        <div className="col-span-4 flex flex-col justify-end max-xl:col-span-3 max-lg:col-span-5 max-md:order-last max-md:mt-9">
          <a className="mb-auto inline-block max-md:hidden" href="https://www.revenuecat.com">
            <Image src="/logo.svg" alt="RevenueCat" width={138} height={40} className="h-10 w-auto" />
          </a>

          {/* Social icons */}
          <nav className="flex gap-3 mt-7">
            <a
              className="inline-block text-primary hover:text-primary/70 transition-colors duration-200"
              href="https://github.com/RevenueCat"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="size-9" fill="currentColor" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M18 .45c-9.9 0-18 8.1-18 18 0 7.988 5.175 14.738 12.263 17.1.9.113 1.237-.337 1.237-.9v-3.037c-5.062 1.125-6.075-2.363-6.075-2.363-.787-2.025-2.025-2.587-2.025-2.587-1.688-1.125.112-1.125.112-1.125 1.8.112 2.813 1.8 2.813 1.8 1.575 2.7 4.163 1.912 5.288 1.462a3.9 3.9 0 0 1 1.125-2.362c-4.05-.45-8.213-2.025-8.213-8.888 0-1.912.675-3.6 1.8-4.837-.225-.45-.787-2.25.225-4.725 0 0 1.462-.45 4.95 1.8 1.463-.45 2.925-.563 4.5-.563s3.038.225 4.5.563c3.488-2.363 4.95-1.913 4.95-1.913 1.012 2.475.338 4.275.225 4.725 1.125 1.238 1.8 2.813 1.8 4.838 0 6.862-4.163 8.437-8.213 8.887.675.563 1.238 1.688 1.238 3.375v4.95c0 .45.337 1.013 1.238.9C30.825 33.188 36 26.438 36 18.45c0-9.9-8.1-18-18-18" fillRule="evenodd" />
              </svg>
              <span className="sr-only">Github</span>
            </a>
            <a
              className="inline-block text-primary hover:text-primary/70 transition-colors duration-200"
              href="https://x.com/revenuecat"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="size-9" fill="none" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22.5" cy="22.5" fill="currentColor" r="22.5" />
                <path d="m11.056 12 8.88 12.134L11 34h2.011l7.824-8.638L27.155 34H34l-9.38-12.817L32.938 12h-2.011l-7.205 7.955L17.9 12zm2.958 1.514h3.144l13.884 18.972h-3.144z" fill="#fff" />
              </svg>
              <span className="sr-only">X (formerly Twitter)</span>
            </a>
            <a
              className="inline-block text-primary hover:text-primary/70 transition-colors duration-200"
              href="https://mastodon.social/@revenuecat"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="size-9" fill="none" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22.5" cy="22.5" fill="currentColor" r="22.5" />
                <g clipPath="url(#mastodon_a)">
                  <path clipRule="evenodd" d="M28.077 29.765c3.215-.388 6.015-2.39 6.367-4.218.554-2.88.509-7.03.509-7.03 0-5.624-3.648-7.272-3.648-7.272-1.839-.853-4.997-1.212-8.277-1.24h-.081c-3.281.028-6.437.387-8.276 1.24 0 0-3.648 1.648-3.648 7.272l-.003 1.075c-.005 1.036-.011 2.186.019 3.386.132 5.5.998 10.92 6.031 12.265 2.321.62 4.314.75 5.919.662 2.91-.163 4.544-1.05 4.544-1.05l-.096-2.133s-2.08.663-4.416.582c-2.314-.08-4.756-.252-5.13-3.122a6 6 0 0 1-.053-.805s2.272.561 5.15.694c1.761.082 3.412-.104 5.089-.306m2.573-4.002v-6.81q0-2.087-1.056-3.315c-.726-.819-1.678-1.238-2.859-1.238-1.366 0-2.401.53-3.086 1.592l-.665 1.127-.665-1.127c-.684-1.061-1.72-1.592-3.086-1.592-1.181 0-2.133.42-2.86 1.238q-1.056 1.228-1.055 3.315v6.81h2.67v-6.61c0-1.393.581-2.1 1.742-2.1 1.283 0 1.927.839 1.927 2.498v3.618h2.655V19.55c0-1.66.643-2.498 1.926-2.498 1.16 0 1.741.707 1.741 2.1v6.61h2.67Z" fill="#fff" fillRule="evenodd" />
                </g>
                <defs>
                  <clipPath id="mastodon_a"><path d="M11 10h24v26H11z" fill="#fff" /></clipPath>
                </defs>
              </svg>
              <span className="sr-only">Mastodon</span>
            </a>
          </nav>

          <p className="mt-7 text-sm leading-none text-primary">
            &copy; {new Date().getFullYear()} RevenueCat
          </p>
        </div>

        {/* Right — Nav columns */}
        <nav className="col-span-8 flex gap-16 pt-4 max-xl:col-span-9 max-xl:gap-10 max-lg:col-span-7 max-lg:grid max-lg:grid-cols-2 max-lg:gap-8 max-md:mt-5 max-md:w-full max-md:gap-x-4 max-md:gap-y-9 max-md:pt-0">
          {Object.entries(footerNav).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-object text-base font-medium leading-none text-primary">
                {category}
              </h3>
              <ul className="mt-5 space-y-2 max-lg:mt-3 max-lg:space-y-1">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      className="font-object inline-flex items-center whitespace-nowrap py-2 text-sm leading-tight text-primary transition-colors duration-200 hover:text-secondary-red"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
