"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "../ArrowIcon";
import { GlobeIcon, BillingIcon } from "../Icons";
import { StepFunnels, StepBilling } from "../ExpandSequence";

const features = [
  {
    id: "funnels",
    icon: <GlobeIcon />,
    iconColor: "shadow-feature-blue text-secondary-blue-1",
    title: "Build web funnels",
    description: "Multi-step funnels with branching logic. Segment by country, survey response, or UTM\u00A0source. Step-by-step conversion analytics show exactly where users drop\u00A0off.",
    link: "https://www.revenuecat.com/feature/funnels/",
    linkText: "Explore Funnels",
  },
  {
    id: "billing",
    icon: <BillingIcon />,
    iconColor: "shadow-feature-green text-secondary-green",
    title: "Skip the 30%",
    description: "Stripe, Apple Pay, or Google Pay checkout. Test prices the App Store won\u2019t let you. Web purchases auto-unlock in-app\u00A0entitlements.",
    link: "https://www.revenuecat.com/feature/billing/",
    linkText: "Explore Web Billing",
  },
];

function PanelFunnels() {
  return (
    <div className="flex items-center justify-center h-full">
      <StepFunnels />
    </div>
  );
}

function PanelBilling() {
  return (
    <div className="flex items-center justify-center h-full">
      <StepBilling />
    </div>
  );
}

const panels = [PanelFunnels, PanelBilling];

export function SectionExpandV2() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportH = window.innerHeight;

      const scrolled = (viewportH - rect.top) / sectionHeight;
      const featureProgress = Math.max(0, (scrolled - 0.3) / 0.5);
      const idx = Math.min(1, Math.max(0, Math.floor(featureProgress * 2)));
      setActive(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-50"
      id="expand"
      style={{ minHeight: "250vh" }}
    >
      {/* Heading scrolls away */}
      <div className="container relative z-10 pt-40 pb-12 max-xl:pt-30 max-lg:pt-28 max-sm:pt-20">
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium font-object border border-secondary-blue-1/20 bg-secondary-blue-1/5 text-secondary-blue-1">
            Expand
          </span>
        </div>
        <h2 className="font-object leading-dense font-medium tracking-tighter text-primary text-[3.25rem] max-xl:text-[2.5rem] max-lg:text-[2rem] max-sm:text-[1.625rem] mx-auto mb-4 max-w-[48rem] text-center text-pretty">
          Reach users<br /><span className="v2-gradient-text">before the App Store</span>
        </h2>
        <p className="text-xl leading-snug font-light text-gray-800 max-w-2xl mx-auto text-center text-pretty max-md:text-base">
          <a href="https://www.revenuecat.com/state-of-subscription-apps-2025/" target="_blank" rel="noopener noreferrer" className="text-secondary-blue-1 underline decoration-secondary-blue-1/40 underline-offset-4 hover:decoration-secondary-blue-1 transition-colors">41% of top subscription apps</a>{" "}already generate revenue through the web.<br />If your monetization starts at the download, you&apos;re starting too&nbsp;late.
        </p>
      </div>

      {/* Sticky two-column */}
      <div className="sticky top-16 min-h-[calc(100vh-4rem)] flex flex-col">
        <div className="container relative z-10 flex flex-col flex-1 py-8">

          {/* Desktop */}
          <div className="flex gap-16 flex-1 max-lg:hidden">
            <div className="w-[340px] shrink-0 flex flex-col pl-3">
              <div className="flex flex-col flex-1">
                {features.map((f, i) => (
                  <div
                    key={f.id}
                    className="transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] overflow-hidden"
                    style={{
                      flex: active === i ? "1 1 auto" : "0 0 auto",
                      opacity: active === i ? 1 : 0.35,
                    }}
                  >
                    <div className="flex items-center gap-3 py-3">
                      <div className={`flex size-10 shrink-0 items-center justify-center rounded-full bg-white transition-all duration-500 ${f.iconColor}`}>
                        <span className="inline-flex items-center justify-center size-5">{f.icon}</span>
                      </div>
                      <h3 className="font-object text-lg leading-tight tracking-tighter text-primary font-medium">
                        {f.title}
                      </h3>
                    </div>
                    <div
                      className="overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                      style={{
                        maxHeight: active === i ? "200px" : "0px",
                        opacity: active === i ? 1 : 0,
                      }}
                    >
                      <div className="pl-[52px] pb-4">
                        <p className="text-base leading-snug text-gray-800 mb-3">
                          {f.description}
                        </p>
                        <a className="font-object inline-flex items-center gap-2 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 font-medium text-sm" href={f.link}>
                          {f.linkText} <ArrowIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Floga testimonial */}
                <div className="mt-auto pt-6 rounded-xl bg-white p-5 border border-border-light" style={{ boxShadow: "0 4px 12px rgba(144,138,208,0.08)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="size-9 rounded-xl object-contain" src="https://cdn.sanity.io/images/c3qnx9b0/production/72bc3edc393f03211054a0a2fbaa95c7baf0ec28-80x80.svg?w=64&q=75&auto=format" alt="Floga" width={36} height={36} />
                    <div>
                      <p className="text-sm font-medium text-primary leading-tight">Floga</p>
                      <p className="text-[12px] text-gray-750 leading-tight">Fitness Community</p>
                    </div>
                  </div>
                  <p className="text-[15px] leading-snug text-gray-800 mb-2.5">
                    Generated <strong className="font-medium v2-gradient-text">$120K+ in one&nbsp;day</strong>{" "}of pre-launch lifetime memberships via RevenueCat Web&nbsp;Billing.
                  </p>
                  <a className="font-object inline-flex items-center gap-1 text-[13px] text-secondary-blue-1 hover:text-secondary-blue-2 font-medium transition-colors" href="https://www.revenuecat.com/customers/floga" target="_blank" rel="noopener noreferrer">
                    Read Case Study
                    <svg className="w-1.5! shrink-0" viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m0 9.002 6.998-3.844V3.844L0 0v1.711l5.08 2.79L0 7.291z" fill="currentColor" fillRule="evenodd" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div className="flex-1 relative min-h-[450px]">
              <div className="absolute inset-0 rounded-2xl bg-white/40 border border-border-light/50 backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center scale-[1.2] max-xl:scale-100">
                {panels.map((Panel, i) => (
                  <div
                    key={features[i].id}
                    className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                    style={{
                      opacity: active === i ? 1 : 0,
                      transform: active === i ? "translateY(0) scale(1)" : active > i ? "translateY(-20px) scale(0.98)" : "translateY(20px) scale(0.98)",
                      pointerEvents: active === i ? "auto" : "none",
                    }}
                  >
                    <Panel />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile fallback */}
          <div className="hidden max-lg:block">
            <div className="flex flex-col gap-10">
              {features.map((f, i) => {
                const Panel = panels[i];
                return (
                  <div key={f.id} className="flex flex-col gap-5">
                    <div className="flex gap-3.5">
                      <div className={`flex size-10 shrink-0 items-center justify-center rounded-full bg-white ${f.iconColor}`}>
                        <span className="inline-flex items-center justify-center size-5">{f.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-object text-xl leading-tight tracking-tighter text-primary font-medium mb-2">{f.title}</h3>
                        <p className="text-base leading-snug text-gray-800 mb-3">{f.description}</p>
                        <a className="font-object inline-flex items-center gap-2 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 font-medium text-sm" href={f.link}>
                          {f.linkText} <ArrowIcon />
                        </a>
                      </div>
                    </div>
                    <div className="h-[280px] rounded-2xl bg-white/40 border border-border-light/50">
                      <Panel />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
