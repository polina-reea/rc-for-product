import Image from "next/image";

const footerLinks = {
  Features: [
    { label: "Paywalls", href: "https://www.revenuecat.com/feature/paywalls" },
    { label: "Experiments", href: "https://www.revenuecat.com/feature/experiments" },
    { label: "Charts", href: "https://www.revenuecat.com/feature/charts" },
    { label: "Targeting", href: "https://www.revenuecat.com/feature/targeting" },
    { label: "Web Billing", href: "https://www.revenuecat.com/feature/billing" },
    { label: "Funnels", href: "https://www.revenuecat.com/feature/funnels" },
    { label: "Customer Center", href: "https://www.revenuecat.com/customer-center" },
  ],
  Solutions: [
    { label: "For Product Teams", href: "https://www.revenuecat.com/for-product/" },
    { label: "For Developers", href: "https://www.revenuecat.com/for-developers/" },
    { label: "For Indies", href: "https://www.revenuecat.com/for-indies/" },
  ],
  Resources: [
    { label: "Documentation", href: "https://www.revenuecat.com/docs/" },
    { label: "Blog", href: "https://www.revenuecat.com/blog/" },
    { label: "Customer Stories", href: "https://www.revenuecat.com/customers/" },
    { label: "State of Subscription Apps", href: "https://www.revenuecat.com/state-of-subscription-apps-2026/" },
    { label: "Pricing", href: "https://www.revenuecat.com/pricing/" },
  ],
  Company: [
    { label: "About", href: "https://www.revenuecat.com/about/" },
    { label: "Careers", href: "https://www.revenuecat.com/careers/" },
    { label: "Security", href: "https://www.revenuecat.com/security-and-compliance" },
    { label: "Privacy", href: "https://www.revenuecat.com/privacy" },
    { label: "Terms", href: "https://www.revenuecat.com/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border-light bg-white py-16 max-lg:py-12">
      <div className="container">
        <div className="flex gap-16 max-lg:flex-col max-lg:gap-10">
          {/* Logo + tagline */}
          <div className="w-48 shrink-0 max-lg:w-full">
            <a href="https://www.revenuecat.com" className="inline-block">
              <Image src="/logo.svg" alt="RevenueCat" width={160} height={34} className="h-6 w-auto" />
            </a>
            <p className="mt-4 text-sm font-light text-gray-750">
              In-app purchase infrastructure for mobile apps.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid flex-1 grid-cols-4 gap-8 max-md:grid-cols-2 max-sm:gap-6">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <p className="font-object text-sm font-medium text-primary mb-4">
                  {category}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm font-light text-gray-800 hover:text-secondary-blue-1 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex items-center justify-between border-t border-border-light pt-6 max-md:flex-col max-md:gap-3 max-md:items-start">
          <p className="text-sm font-light text-gray-750">
            &copy; {new Date().getFullYear()} RevenueCat, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
