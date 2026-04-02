"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "../ArrowIcon";
import { FloatingBlobs } from "./FloatingBlobs";
import { PaywallIcon, ExperimentIcon, TargetIcon } from "../Icons";
import { PhoneA, PhoneB, EditorPanel } from "../IterateSequence";

const features = [
  {
    id: "paywalls",
    icon: <PaywallIcon />,
    iconColor: "shadow-feature-blue text-secondary-blue-1",
    title: "Design paywalls, no code",
    aiTag: true,
    description: "Start with AI-generated designs or build from scratch. No-code templates, Figma import, custom HTML. Hit\u00A0publish and it\u2019s live on iOS, Android, and web. No App Store\u00A0review.",
    link: "https://www.revenuecat.com/feature/paywalls",
    linkText: "Explore Paywalls",
  },
  {
    id: "experiments",
    icon: <ExperimentIcon />,
    iconColor: "shadow-feature-red text-secondary-red",
    title: "Experiment and predict winners",
    description: "Up to four variants. RevenueCat predicts the 12-month LTV winner with revenue-based significance while the test is still running. Ship the winner in one\u00A0click.",
    link: "https://www.revenuecat.com/feature/experiments/",
    linkText: "Explore Experiments",
  },
  {
    id: "targeting",
    icon: <TargetIcon />,
    iconColor: "shadow-feature-green text-secondary-green",
    title: "Target the right users",
    description: "Segment by cohort, country, or custom attribute. Show different offerings to different users, no code\u00A0needed.",
    link: "https://www.revenuecat.com/feature/targeting",
    linkText: "Explore Targeting",
  },
];

function PanelPaywalls() {
  return (
    <div className="flex items-center justify-center h-full gap-5">
      <EditorPanel />
      <PhoneA />
    </div>
  );
}

function PanelExperiments() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <div className="flex items-end gap-3">
        <div className="relative">
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex items-center justify-center h-4 px-2 rounded bg-secondary-blue-1 text-[8px] font-medium text-white shadow-sm tracking-wide z-10">A</div>
          <PhoneA className="!h-[268px] flex flex-col justify-between" />
        </div>
        <span className="font-object text-sm text-gray-750/30 italic shrink-0 mb-28">VS</span>
        <div className="relative">
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex items-center justify-center h-4 px-2 rounded bg-secondary-red text-[8px] font-medium text-white shadow-sm tracking-wide z-10">B</div>
          <PhoneB className="!h-[268px] flex flex-col justify-between" />
        </div>
      </div>
      {/* Experiment results */}
      <div className="w-[280px] space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="font-object text-[10px] font-medium text-primary">Results</span>
          <span className="px-1.5 py-0.5 rounded text-[8px] font-medium bg-secondary-green/15 text-secondary-green">Winner</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-secondary-blue-1 font-medium w-5 shrink-0">A</span>
          <div className="flex-1 h-1 rounded-full overflow-hidden bg-border-light">
            <div className="h-full rounded-full bg-secondary-blue-1" style={{ width: "65%", animation: "growBar 1.5s cubic-bezier(0.22,1,0.36,1) forwards" }} />
          </div>
          <span className="text-[9px] font-medium text-secondary-blue-1 w-10 text-right">+23%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-secondary-red font-medium w-5 shrink-0">B</span>
          <div className="flex-1 h-1 rounded-full overflow-hidden bg-border-light">
            <div className="h-full rounded-full bg-secondary-red/40" style={{ width: "42%", animation: "growBar 1.5s cubic-bezier(0.22,1,0.36,1) 0.2s forwards" }} />
          </div>
          <span className="text-[9px] text-gray-750/50 w-10 text-right">$4.82</span>
        </div>
      </div>
    </div>
  );
}

function PanelTargeting() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-[280px] rounded-2xl bg-white p-5 shadow-card border border-border-light">
        <div className="flex items-center justify-between mb-4">
          <span className="font-object text-sm font-medium text-primary">Target Audience</span>
          <svg className="size-4 text-gray-750/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2.5 rounded-lg border-2 border-secondary-blue-1/30 bg-secondary-blue-1/5">
            <span className="text-[12px] text-secondary-blue-1">Country</span>
            <span className="text-[12px] font-medium text-primary">US, UK, DE</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-lg border border-border-light">
            <span className="text-[12px] text-gray-750">Platform</span>
            <span className="text-[12px] font-medium text-primary">iOS</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-lg border border-border-light">
            <span className="text-[12px] text-gray-750">User Type</span>
            <span className="text-[12px] font-medium text-primary">New Users</span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-border-light flex items-center justify-between">
          <span className="text-[11px] text-gray-750">Estimated reach</span>
          <span className="text-[12px] font-medium text-secondary-blue-1">~125,000 users</span>
        </div>
      </div>
    </div>
  );
}

const panels = [PanelPaywalls, PanelExperiments, PanelTargeting];

export function SectionIterateV2() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportH = window.innerHeight;

      // How far we've scrolled into the section (0 = top just entered, 1 = bottom leaving)
      const scrolled = (viewportH - rect.top) / sectionHeight;
      // Map to feature index (skip first ~30% for heading, use remaining 55% for 3 panels)
      const featureProgress = Math.max(0, (scrolled - 0.3) / 0.55);
      const idx = Math.min(2, Math.max(0, Math.floor(featureProgress * 3)));
      setActive(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative v2-section-gradient-blue"
      id="iterate"
      style={{ minHeight: "300vh" }}
    >
      {/* Heading — scrolls away naturally */}
      <div className="container relative z-10 pt-40 pb-12 max-xl:pt-30 max-lg:pt-28 max-sm:pt-20">
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium font-object border border-secondary-blue-1/20 bg-secondary-blue-1/5 text-secondary-blue-1">
            Iterate
          </span>
        </div>
        <h2 className="font-object leading-dense font-medium tracking-tighter text-primary text-[3.25rem] max-xl:text-[2.5rem] max-lg:text-[2rem] max-sm:text-[1.625rem] mx-auto max-w-[48rem] text-center text-pretty">
          Ship paywall changes in minutes.<br /><span className="v2-gradient-text">Predict winners in weeks</span>
        </h2>
      </div>

      {/* Sticky container — only the two-column content pins */}
      <div className="sticky top-16 min-h-[calc(100vh-4rem)] flex flex-col">
        <div className="container relative z-10 flex flex-col flex-1 py-8">

          {/* Desktop: two-column with sticky left nav */}
          <div className="flex gap-16 flex-1 max-lg:hidden">
            {/* Left — feature nav */}
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
                      <h3 className="font-object text-lg leading-tight tracking-tighter text-primary font-medium flex items-center gap-2">
                        {f.title}
                        {f.aiTag && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium text-white shrink-0" style={{ background: "linear-gradient(89deg, #576DDB -14.77%, #A7A1E2 77.04%, #E38DC2 123.95%)" }}>
                            <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                              <path d="M20 3v4" /><path d="M22 5h-4" />
                            </svg>
                            AI
                          </span>
                        )}
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

                {/* Inline testimonial */}
                <div className="mt-auto pt-6 rounded-xl bg-white p-5 border border-border-light" style={{ boxShadow: "0 4px 12px rgba(144,138,208,0.08)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="size-9 rounded-xl object-contain" src="https://cdn.sanity.io/images/c3qnx9b0/production/39f531e18947f35909fa6c1dd5858d562f2b1db9-80x80.svg?w=64&q=75&auto=format" alt="RocketSim" width={36} height={36} />
                    <div>
                      <p className="text-sm font-medium text-primary leading-tight">RocketSim</p>
                      <p className="text-[12px] text-gray-750 leading-tight">Antoine van der Lee, Founder</p>
                    </div>
                  </div>
                  <p className="text-[15px] leading-snug text-gray-800">
                    &ldquo;Using RevenueCat Experiments, I increased <strong className="font-medium v2-gradient-text">RocketSim&rsquo;s LTV by&nbsp;47%</strong>.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Right — visual panel (crossfade) */}
            <div className="flex-1 relative min-h-[450px]">
              <div className="absolute inset-0 rounded-2xl bg-white/40 border border-border-light/50 backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center scale-[1.35] max-xl:scale-[1.15]">
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

          {/* Mobile/tablet fallback */}
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
                        <h3 className="font-object text-xl leading-tight tracking-tighter text-primary font-medium mb-2 flex items-center gap-2">
                          {f.title}
                          {f.aiTag && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-secondary-blue-1/10 text-secondary-blue-1 shrink-0">
                              <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                                <path d="M20 3v4" /><path d="M22 5h-4" />
                              </svg>
                              AI
                            </span>
                          )}
                        </h3>
                        <p className="text-base leading-snug text-gray-800 mb-3">{f.description}</p>
                        <a className="font-object inline-flex items-center gap-2 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 font-medium text-sm" href={f.link}>
                          {f.linkText} <ArrowIcon />
                        </a>
                      </div>
                    </div>
                    <div className="h-[300px] rounded-2xl bg-white/40 border border-border-light/50 overflow-hidden scale-[0.8] origin-top">
                      <Panel />
                    </div>
                  </div>
                );
              })}
              {/* Mobile testimonial */}
              <div className="rounded-xl bg-white p-5 border border-border-light" style={{ boxShadow: "0 4px 12px rgba(144,138,208,0.08)" }}>
                <div className="flex items-center gap-3 mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="size-9 rounded-xl object-contain" src="https://cdn.sanity.io/images/c3qnx9b0/production/39f531e18947f35909fa6c1dd5858d562f2b1db9-80x80.svg?w=64&q=75&auto=format" alt="RocketSim" width={36} height={36} />
                  <div>
                    <p className="text-sm font-medium text-primary leading-tight">RocketSim</p>
                    <p className="text-[12px] text-gray-750 leading-tight">Antoine van der Lee, Founder</p>
                  </div>
                </div>
                <p className="text-[15px] leading-snug text-gray-800">
                  &ldquo;Using RevenueCat Experiments, I increased <strong className="font-medium v2-gradient-text">RocketSim&rsquo;s LTV by&nbsp;47%</strong>.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
