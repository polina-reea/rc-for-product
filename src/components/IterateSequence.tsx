"use client";

import { useState, useEffect } from "react";

function PhoneA() {
  return (
    <div className="w-[160px] shrink-0 rounded-[24px] bg-white p-4 shadow-card border border-border-light">
      <div className="mx-auto mb-3 size-16 rounded-full border-[2px] border-secondary-blue-1/20 bg-gradient-to-br from-secondary-blue-1/10 via-secondary-red/10 to-secondary-green/5" />
      <h4 className="text-center text-xs font-medium text-primary italic mb-2">Unlock Premium</h4>
      <div className="space-y-1.5 mb-3">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-1.5">
            <svg className="size-3 text-secondary-green shrink-0" viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/></svg>
            <div className="h-1.5 rounded bg-secondary-blue-1/12" style={{ width: `${80 - i * 15}%` }} />
          </div>
        ))}
      </div>
      <div className="rounded-lg border-2 border-secondary-green p-2 mb-2">
        <div className="flex items-center gap-1.5">
          <div className="size-3 rounded-full border-[2px] border-secondary-green" />
          <span className="text-[10px] font-medium text-primary">Monthly</span>
        </div>
        <div className="mt-1 ml-[18px] h-1.5 w-14 rounded bg-secondary-green/12" />
      </div>
      <div className="rounded-lg border border-border-light p-2 mb-3">
        <div className="flex items-center gap-1.5">
          <div className="size-3 rounded-full border border-gray-750/30" />
          <span className="text-[10px] text-primary">Annual</span>
          <span className="text-[8px] font-medium text-secondary-green bg-secondary-green/10 px-1 rounded">-35%</span>
        </div>
        <div className="mt-1 ml-[18px] h-1.5 w-12 rounded bg-gray-750/8" />
      </div>
      <div className="w-full rounded-lg bg-primary py-2 text-center text-[10px] font-medium text-white">
        Start subscription
      </div>
    </div>
  );
}

function PhoneB() {
  return (
    <div className="w-[160px] shrink-0 rounded-[24px] bg-white p-4 shadow-card border border-border-light">
      <div className="mx-auto mb-3 h-16 rounded-xl bg-gradient-to-br from-secondary-blue-1/10 via-secondary-red/8 to-secondary-green/10" />
      <h4 className="text-center text-[11px] font-medium text-primary mb-0.5">Spice up your kitchen —</h4>
      <p className="text-center text-[11px] text-primary mb-2">go <span className="text-secondary-red font-medium">Pro</span> for benefits</p>
      <div className="space-y-1.5 mb-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-1.5">
            <svg className="size-3 text-primary/50 shrink-0" viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/></svg>
            <div className="h-1.5 rounded bg-gray-750/10" style={{ width: `${75 - i * 12}%` }} />
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-border-light p-2 mb-2 text-center">
        <span className="text-[10px] text-primary">Lifetime membership</span>
      </div>
      <div className="w-full rounded-lg bg-primary py-2 text-center text-[10px] font-bold text-white">
        Start now
      </div>
    </div>
  );
}

function EditorPanel() {
  return (
    <div className="w-[130px] rounded-xl bg-white p-3 shadow-card border border-border-light">
      <p className="font-object text-[10px] font-medium text-gray-750 uppercase tracking-wider mb-2">Paywall Editor</p>
      {["Title", "Offer details", "CTA"].map((label) => (
        <div key={label} className="mb-2">
          <p className="text-[10px] text-primary font-medium mb-0.5">{label}</p>
          <div className="rounded border border-border-light bg-gray-50 px-1.5 py-1">
            <div className="h-1.5 w-12 rounded bg-gray-750/20" />
          </div>
        </div>
      ))}
      <p className="text-[10px] text-primary font-medium mb-1">Colors</p>
      <div className="flex gap-1">
        {["bg-primary", "bg-secondary-blue-1", "bg-secondary-green", "bg-secondary-red"].map((c) => (
          <div key={c} className={`size-4 rounded ${c}`} />
        ))}
      </div>
    </div>
  );
}

function WinnerBadge() {
  return (
    <div className="flex items-center gap-1 rounded-full bg-secondary-green px-2.5 py-1 shadow-lg">
      <svg className="size-3 text-white" viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/></svg>
      <span className="text-[10px] font-medium text-white whitespace-nowrap">Predicted winner</span>
    </div>
  );
}

export function IterateSequence() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Fixed-size stage that scales to fit container
  return (
    <div className="w-full aspect-[4/3.5]">
      <div className="relative w-full h-full scale-115 max-lg:scale-100 max-md:scale-[0.8] origin-center">
        {/* Inner stage — fixed 480x420 coordinate space, scaled via CSS */}
        <div className="absolute inset-0 flex items-center justify-center">

          {/* ====== STEP 0: Editor + Phone A ====== */}
          <div
            className="absolute inset-0 flex items-center justify-center gap-5 transition-opacity duration-700 ease-in-out"
            style={{ opacity: step === 0 ? 1 : 0, pointerEvents: step === 0 ? "auto" : "none" }}
          >
            <EditorPanel />
            <PhoneA />
          </div>

          {/* ====== STEP 1: A/B test ====== */}
          <div
            className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-700 ease-in-out"
            style={{ opacity: step === 1 ? 1 : 0, pointerEvents: step === 1 ? "auto" : "none" }}
          >
            <PhoneA />
            <span className="font-object text-xl text-gray-750/30 italic shrink-0">VS</span>
            <PhoneB />
          </div>

          {/* ====== STEP 2: Winner ====== */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out"
            style={{ opacity: step === 2 ? 1 : 0, pointerEvents: step === 2 ? "auto" : "none" }}
          >
            <div className="relative">
              <PhoneB />
              <div className="absolute -top-3 -right-5">
                <WinnerBadge />
              </div>
              <div className="absolute -bottom-5 -left-24 rounded-lg bg-white px-3 py-2 shadow-card border border-border-light">
                <p className="text-[10px] text-gray-750">Predicted 12-mo LTV</p>
                <p className="font-object text-sm font-medium text-secondary-green">+23% higher</p>
              </div>
            </div>
          </div>

          {/* ====== STEP 3: Targeting ====== */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out"
            style={{ opacity: step === 3 ? 1 : 0, pointerEvents: step === 3 ? "auto" : "none" }}
          >
            <div className="relative">
              <PhoneB />
              <div className="absolute -top-3 -right-5">
                <WinnerBadge />
              </div>
              <div className="absolute top-8 -left-28 rounded-lg bg-white px-2.5 py-2 shadow-card border border-border-light">
                <p className="text-[10px] font-medium text-primary mb-1">Targeting</p>
                <div className="space-y-0.5">
                  {[
                    { color: "bg-secondary-blue-1", text: "US, UK" },
                    { color: "bg-secondary-red", text: "Power users" },
                    { color: "bg-secondary-green", text: "Onboarding" },
                  ].map((r) => (
                    <div key={r.text} className="flex items-center gap-1">
                      <div className={`size-1.5 rounded-full ${r.color}`} />
                      <span className="text-[10px] text-gray-750">{r.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-3 -left-14 flex items-center rounded-full bg-secondary-blue-1/10 px-2.5 py-1">
                <span className="text-[10px] font-medium text-secondary-blue-1">3 segments</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
