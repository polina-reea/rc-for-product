"use client";

import { useState, useEffect } from "react";

const STEP_DURATION = 3000;
const STEPS = ["Design", "Test", "Winner", "Target"];

export function PhoneA({ className = "" }: { className?: string }) {
  return (
    <div className={`w-[130px] shrink-0 rounded-[24px] bg-white p-4 shadow-card border border-border-light ${className}`}>
      <div className="mx-auto mb-3 size-14 rounded-full border-[2px] border-secondary-blue-1/20 bg-gradient-to-br from-secondary-blue-1/10 via-secondary-red/10 to-secondary-green/5" />
      <h4 className="text-center text-[10px] font-medium text-primary italic mb-2">Unlock Premium</h4>
      <div className="space-y-1.5 mb-3">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-1.5">
            <svg className="size-2.5 text-secondary-green shrink-0" viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/></svg>
            <div className="h-1.5 rounded bg-secondary-blue-1/12" style={{ width: `${80 - i * 15}%` }} />
          </div>
        ))}
      </div>
      <div className="rounded-lg border-2 border-secondary-green p-1.5 mb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="size-2.5 rounded-full border-[2px] border-secondary-green" />
          <span className="text-[9px] font-medium text-primary">Monthly</span>
        </div>
      </div>
      <div className="rounded-lg border border-border-light p-1.5 mb-3">
        <div className="flex items-center gap-1.5">
          <div className="size-2.5 rounded-full border border-gray-750/30" />
          <span className="text-[9px] text-primary">Annual</span>
          <span className="text-[7px] font-medium text-secondary-green bg-secondary-green/10 px-1 rounded">-35%</span>
        </div>
      </div>
      <div className="w-full rounded-lg bg-primary py-1.5 text-center text-[9px] font-medium text-white">
        Start subscription
      </div>
    </div>
  );
}

export function PhoneB({ className = "" }: { className?: string }) {
  return (
    <div className={`w-[130px] shrink-0 rounded-[24px] bg-white p-4 shadow-card border border-border-light ${className}`}>
      <div className="mx-auto mb-3 h-14 rounded-xl bg-gradient-to-br from-secondary-blue-1/10 via-secondary-red/8 to-secondary-green/10" />
      <h4 className="text-center text-[10px] font-medium text-primary mb-0.5">Spice up your kitchen —</h4>
      <p className="text-center text-[10px] text-primary mb-2">go <span className="text-secondary-red font-medium">Pro</span></p>
      <div className="space-y-1.5 mb-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-1.5">
            <svg className="size-2.5 text-primary/50 shrink-0" viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/></svg>
            <div className="h-1.5 rounded bg-gray-750/10" style={{ width: `${75 - i * 12}%` }} />
          </div>
        ))}
      </div>
      <div className="w-full rounded-lg bg-primary py-1.5 text-center text-[9px] font-bold text-white">
        Start now
      </div>
    </div>
  );
}

export function EditorPanel({ className = "" }: { className?: string }) {
  return (
    <div className={`w-[120px] rounded-xl bg-white p-3 shadow-card border border-border-light ${className}`}>
      <p className="font-object text-[9px] font-medium text-gray-750 uppercase tracking-wider mb-2">Paywall Editor</p>
      {["Title", "Offer", "CTA"].map((label) => (
        <div key={label} className="mb-2">
          <p className="text-[9px] text-primary font-medium mb-0.5">{label}</p>
          <div className="rounded border border-border-light bg-gray-50 px-1.5 py-1">
            <div className="h-1.5 w-10 rounded bg-gray-750/20" />
          </div>
        </div>
      ))}
      <p className="text-[9px] text-primary font-medium mb-1">Colors</p>
      <div className="flex gap-1">
        {["bg-primary", "bg-secondary-blue-1", "bg-secondary-green", "bg-secondary-red"].map((c) => (
          <div key={c} className={`size-3 rounded ${c}`} />
        ))}
      </div>
    </div>
  );
}

export function IterateSequence() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, STEP_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full aspect-[4/3.2]">
        <div className="relative w-full h-full scale-110 max-lg:scale-100 max-md:scale-[0.8] origin-center">
          <div className="absolute inset-0 flex items-center justify-center">

            {/* Editor panel — visible in step 0, slides left and fades out */}
            <div
              className="absolute transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
              style={{
                opacity: step === 0 ? 1 : 0,
                transform: step === 0
                  ? "translateX(-90px)"
                  : "translateX(-140px)",
              }}
            >
              <EditorPanel />
            </div>

            {/* Phone A — center in step 0, slides left in step 1+, fades in step 2+ */}
            <div
              className="absolute transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
              style={{
                opacity: step <= 1 ? 1 : 0,
                transform: step === 0
                  ? "translateX(40px)"
                  : step === 1
                    ? "translateX(-50px)"
                    : "translateX(-80px) scale(0.95)",
              }}
            >
              <div className="relative">
                <PhoneA />
                <div
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2 transition-all duration-500"
                  style={{ opacity: step === 1 ? 1 : 0, transform: step === 1 ? "translateY(0)" : "translateY(4px)" }}
                >
                  <span className="flex items-center justify-center h-4 px-2 rounded bg-secondary-blue-1 text-[8px] font-medium text-white shadow-sm tracking-wide">A</span>
                </div>
              </div>
            </div>

            {/* VS label — appears in step 1 */}
            <div
              className="absolute transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
              style={{
                opacity: step === 1 ? 1 : 0,
                transform: step >= 1 ? "translateX(0)" : "translateX(-20px)",
              }}
            >
              <span className="font-object text-lg text-gray-750/30 italic">VS</span>
            </div>

            {/* Phone B — slides in from right in step 1, stays center for 2-3 */}
            <div
              className="absolute transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
              style={{
                opacity: step >= 1 ? 1 : 0,
                transform: step === 0
                  ? "translateX(100px) scale(0.95)"
                  : step === 1
                    ? "translateX(50px)"
                    : "translateX(0)",
              }}
            >
              <div className="relative">
                <PhoneB />

                {/* A/B indicator — appears in step 1 */}
                <div
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2 transition-all duration-500"
                  style={{ opacity: step === 1 ? 1 : 0, transform: step === 1 ? "translateY(0)" : "translateY(4px)" }}
                >
                  <span className="flex items-center justify-center h-4 px-2 rounded bg-secondary-red text-[8px] font-medium text-white shadow-sm tracking-wide">B</span>
                </div>

                {/* Winner badge — appears in step 2+ */}
                <div
                  className="absolute -top-3 -right-4 transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                  style={{
                    opacity: step >= 2 ? 1 : 0,
                    transform: step >= 2 ? "scale(1) translateY(0)" : "scale(0.5) translateY(8px)",
                  }}
                >
                  <div className="flex items-center gap-1 rounded-full bg-secondary-green px-2 py-1 shadow-lg">
                    <svg className="size-2.5 text-white" viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/></svg>
                    <span className="text-[9px] font-medium text-white whitespace-nowrap">Predicted winner</span>
                  </div>
                </div>

                {/* LTV stat — appears in step 2 */}
                <div
                  className="absolute -bottom-4 -left-20 transition-all duration-500 delay-200 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                  style={{
                    opacity: step === 2 ? 1 : 0,
                    transform: step === 2 ? "translateY(0)" : "translateY(8px)",
                  }}
                >
                  <div className="rounded-lg bg-white px-2.5 py-1.5 shadow-card border border-border-light">
                    <p className="text-[9px] text-gray-750">Predicted 12-mo LTV</p>
                    <p className="font-object text-xs font-medium text-secondary-green">+23% higher</p>
                  </div>
                </div>

                {/* Targeting panel — slides in from left in step 3 */}
                <div
                  className="absolute top-6 -left-16 transition-all duration-600 delay-100 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                  style={{
                    opacity: step === 3 ? 1 : 0,
                    transform: step === 3 ? "translateX(0)" : "translateX(20px)",
                  }}
                >
                  <div className="rounded-lg bg-white px-2.5 py-2 shadow-card border border-border-light">
                    <p className="text-[9px] font-medium text-primary mb-1">Targeting</p>
                    <div className="space-y-0.5">
                      {[
                        { color: "bg-secondary-blue-1", text: "US, UK" },
                        { color: "bg-secondary-red", text: "Power users" },
                        { color: "bg-secondary-green", text: "Onboarding" },
                      ].map((r) => (
                        <div key={r.text} className="flex items-center gap-1">
                          <div className={`size-1.5 rounded-full ${r.color}`} />
                          <span className="text-[9px] text-gray-750">{r.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Segments badge — appears in step 3 */}
                <div
                  className="absolute -bottom-3 -left-2 transition-all duration-500 delay-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                  style={{
                    opacity: step === 3 ? 1 : 0,
                    transform: step === 3 ? "scale(1)" : "scale(0.8)",
                  }}
                >
                  <div className="flex items-center rounded-full bg-secondary-blue-1/10 px-2 py-1">
                    <span className="text-[9px] font-medium text-secondary-blue-1">3 segments</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Progress bar with step labels */}
      <div className="w-full max-w-[280px] mx-auto -mt-2">
        <div className="flex justify-between mb-2">
          {STEPS.map((label, i) => (
            <button
              key={label}
              type="button"
              className={`font-object text-[11px] transition-colors duration-300 ${
                i === step ? "text-primary font-medium" : "text-gray-750/50"
              }`}
              onClick={() => setStep(i)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="h-0.5 w-full rounded-full bg-border-light overflow-hidden">
          <div
            className="h-full rounded-full bg-secondary-blue-1 transition-all ease-linear"
            style={{
              width: `${((step + 1) / STEPS.length) * 100}%`,
              transitionDuration: `${STEP_DURATION}ms`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
