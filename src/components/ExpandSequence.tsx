"use client";

import { useState, useEffect } from "react";

/* Step 1: Funnel builder — editor + survey screens */
export function StepFunnels() {
  return (
    <div className="flex items-start gap-3">
      {/* Funnel editor panel */}
      <div className="w-[120px] shrink-0 rounded-xl bg-white p-3 shadow-card border border-border-light">
        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-border-light">
          <div className="size-6 rounded-md bg-secondary-blue-1/10 flex items-center justify-center text-[10px] text-secondary-blue-1">+</div>
          <div className="size-6 rounded-md bg-secondary-blue-1/10 flex items-center justify-center text-[10px] text-secondary-blue-1">$</div>
          <div className="size-6 rounded-md bg-secondary-blue-1/10 flex items-center justify-center text-[10px] text-secondary-blue-1">▲</div>
        </div>
        <p className="text-[10px] text-gray-750 uppercase tracking-wider mb-2">Add page</p>
        <p className="text-[10px] font-medium text-primary mb-2">Templates</p>
        <div className="grid grid-cols-2 gap-1.5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-14 rounded-md border border-border-light ${i === 4 ? 'bg-secondary-red/5' : 'bg-gray-50'}`}>
              <div className="p-1.5 space-y-1">
                <div className="h-1 w-full rounded bg-gray-750/10" />
                <div className="h-1 w-3/4 rounded bg-gray-750/10" />
                <div className="h-3 w-full rounded bg-gray-750/5 mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Survey screen 1 */}
      <div className="w-[140px] shrink-0 rounded-xl bg-white p-3 shadow-card border border-border-light mt-6">
        <div className="bg-secondary-blue-1/5 rounded-lg p-2 mb-2">
          <p className="text-[10px] font-medium text-primary text-center">How do you usually express yourself?</p>
        </div>
        <div className="grid grid-cols-2 gap-1.5 mb-3">
          {["Writing", "Voice", "Collage", "Drawing"].map((opt) => (
            <div key={opt} className="rounded-md bg-secondary-blue-1/8 p-1.5 text-center">
              <div className="size-6 mx-auto mb-0.5 rounded bg-secondary-blue-1/15" />
              <span className="text-[8px] text-primary">{opt}</span>
            </div>
          ))}
        </div>
        <div className="w-full rounded-lg bg-secondary-blue-1 py-1.5 text-center text-[10px] font-medium text-white">
          Continue
        </div>
      </div>

      {/* Arrow */}
      <div className="flex items-center self-center text-gray-750/30 mx-0.5">
        <span className="text-lg">→</span>
      </div>

      {/* Survey screen 2 */}
      <div className="w-[140px] shrink-0 rounded-xl bg-white p-3 shadow-card border border-border-light mt-2">
        <div className="bg-secondary-blue-1/5 rounded-lg p-2 mb-2 flex items-center justify-center">
          <span className="text-2xl text-secondary-blue-1">?</span>
        </div>
        <p className="text-[10px] font-medium text-primary text-center mb-2">What do you focus on?</p>
        <div className="space-y-1">
          {["Past events", "Present feelings", "Future plans", "All three"].map((opt) => (
            <div key={opt} className="rounded-md border border-border-light px-2 py-1">
              <span className="text-[9px] text-primary">{opt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Step 2: Web billing — purchase email */
export function StepBilling() {
  return (
    <div className="relative">
      {/* Dashed circle background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="size-[280px] rounded-full border-2 border-dashed border-border-light/60" />
      </div>

      {/* Email/phone mockup */}
      <div className="relative w-[180px] mx-auto rounded-[24px] bg-white p-4 shadow-card border border-border-light">
        {/* Email header bar */}
        <div className="flex items-center justify-between mb-3 text-gray-750">
          <span className="text-[10px]">‹</span>
          <div className="flex gap-2">
            <span className="text-[10px]">🗑</span>
            <span className="text-[10px]">📋</span>
            <span className="text-[10px]">···</span>
          </div>
        </div>

        {/* Sender */}
        <div className="flex items-center gap-2 mb-4">
          <div className="size-7 rounded-full bg-secondary-blue-1 flex items-center justify-center">
            <span className="text-[10px] font-medium text-white">A</span>
          </div>
          <div>
            <p className="text-[10px] font-medium text-primary">Your Customer <span className="font-normal text-gray-750">10:45 P.M</span></p>
            <p className="text-[9px] text-gray-750">Recipient: yourapp@email.com</p>
          </div>
        </div>

        {/* Email content */}
        <div className="text-center mb-3">
          <div className="mx-auto mb-2 size-8 rounded-lg bg-secondary-green/15 flex items-center justify-center">
            <svg className="size-4 text-secondary-green" viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/></svg>
          </div>
          <p className="text-sm font-medium text-primary">Your <span className="text-secondary-green">Pro Plan</span></p>
          <p className="text-sm font-medium text-primary mb-2">Purchase</p>
          <div className="space-y-1 mb-3">
            <div className="h-1.5 w-3/4 mx-auto rounded bg-gray-750/12" />
            <div className="h-1.5 w-1/2 mx-auto rounded bg-gray-750/8" />
          </div>
        </div>

        {/* CTA */}
        <div className="w-full rounded-xl bg-primary py-2 text-center text-[10px] font-medium text-white mb-3">
          Redeem purchase
        </div>

        {/* Reply/Forward */}
        <div className="flex gap-2 justify-center">
          <div className="rounded-full border border-border-light px-3 py-1">
            <span className="text-[9px] text-gray-750">Reply</span>
          </div>
          <div className="rounded-full border border-border-light px-3 py-1">
            <span className="text-[9px] text-gray-750">Forward</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Step 2: Web checkout */
function StepCheckout() {
  return (
    <div className="relative">
      {/* Dashed arc top */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[300px] h-[40px] border-t-2 border-dashed border-border-light/50 rounded-t-full" />

      {/* Browser window */}
      <div className="w-[320px] rounded-xl bg-white shadow-card border border-border-light overflow-hidden">
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border-light">
          <div className="size-2 rounded-full bg-secondary-red" />
          <div className="size-2 rounded-full bg-gray-750/20" />
          <div className="size-2 rounded-full bg-gray-750/20" />
        </div>

        {/* Content: two columns */}
        <div className="flex">
          {/* Left — plan summary */}
          <div className="w-1/2 p-4 border-r border-border-light">
            <div className="mx-auto mb-2 size-8 rounded-full bg-secondary-green flex items-center justify-center">
              <span className="text-white text-[10px]">🚀</span>
            </div>
            <p className="text-center text-xs font-medium text-primary mb-3">Go Pro</p>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-[10px] text-primary">Monthly</span>
              <span className="text-[10px] font-medium text-secondary-green">$19.99/mo</span>
            </div>
            <div className="space-y-1 mb-2">
              <div className="h-1.5 w-full rounded bg-gray-750/10" />
              <div className="h-1.5 w-3/4 rounded bg-gray-750/8" />
            </div>
            <div className="space-y-1.5 mt-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-1">
                  <svg className="size-2.5 text-secondary-green shrink-0" viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/></svg>
                  <div className="h-1.5 rounded bg-gray-750/10" style={{ width: `${80 - i * 12}%` }} />
                </div>
              ))}
            </div>
          </div>

          {/* Right — checkout form */}
          <div className="w-1/2 p-4">
            <p className="text-[11px] font-medium text-primary mb-2">Secure checkout</p>
            <div className="rounded-md border-2 border-secondary-blue-1/40 px-2 py-1.5 mb-2 flex items-center justify-between">
              <span className="text-[9px] text-primary">2345 - •••• - •••• - ••••</span>
              <span className="text-[8px] font-medium text-gray-750 uppercase">visa</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 mb-1.5">
              <div className="rounded-md border border-border-light px-2 py-1.5">
                <span className="text-[9px] text-gray-750">Exp. date</span>
              </div>
              <div className="rounded-md border border-border-light px-2 py-1.5">
                <span className="text-[9px] text-gray-750">Code</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1.5 mb-2">
              <div className="rounded-md border border-border-light px-2 py-1.5">
                <span className="text-[9px] text-gray-750">Country ↓</span>
              </div>
              <div className="rounded-md border border-border-light px-2 py-1.5">
                <span className="text-[9px] text-gray-750">Zip code</span>
              </div>
            </div>
            <div className="space-y-1 mb-3">
              <div className="h-1.5 w-full rounded bg-gray-750/8" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-gray-750">← Back</span>
              <div className="rounded-lg bg-primary px-4 py-1.5">
                <span className="text-[10px] font-medium text-white">Pay now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExpandSequence() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full aspect-[4/3.5]">
      <div className="relative w-full h-full scale-110 max-lg:scale-100 max-md:scale-[0.8] origin-center">
        <div className="absolute inset-0 flex items-center justify-center">

          {/* Step 0: Funnels */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out"
            style={{ opacity: step === 0 ? 1 : 0, pointerEvents: step === 0 ? "auto" : "none" }}
          >
            <StepFunnels />
          </div>

          {/* Step 1: Web Checkout */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out"
            style={{ opacity: step === 1 ? 1 : 0, pointerEvents: step === 1 ? "auto" : "none" }}
          >
            <StepCheckout />
          </div>

          {/* Step 2: Redemption Email */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out"
            style={{ opacity: step === 2 ? 1 : 0, pointerEvents: step === 2 ? "auto" : "none" }}
          >
            <StepBilling />
          </div>

        </div>
      </div>
    </div>
  );
}
