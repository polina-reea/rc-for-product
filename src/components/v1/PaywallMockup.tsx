export function PaywallMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Editor panel — behind, left */}
      <div className="absolute left-0 top-12 w-[55%] rounded-2xl bg-white p-5 shadow-card border border-border-light z-0">
        <p className="font-object text-xs font-medium text-gray-750 uppercase tracking-wider mb-5">
          Paywall Editor
        </p>

        <div className="space-y-5">
          <div>
            <p className="text-sm text-primary font-medium mb-2">Title</p>
            <div className="rounded-lg border border-border-light bg-gray-50 px-3 py-2.5">
              <div className="h-2.5 w-24 rounded bg-gray-750/20" />
            </div>
          </div>

          <div>
            <p className="text-sm text-primary font-medium mb-2">Offer details</p>
            <div className="rounded-lg border border-border-light bg-gray-50 px-3 py-2.5">
              <div className="h-2.5 w-20 rounded bg-gray-750/20" />
            </div>
          </div>

          <div>
            <p className="text-sm text-primary font-medium mb-2">Call to action</p>
            <div className="rounded-lg border border-border-light bg-gray-50 px-3 py-2.5">
              <div className="h-2.5 w-28 rounded bg-gray-750/20" />
            </div>
          </div>

          <div>
            <p className="text-sm text-primary font-medium mb-2">Color palette</p>
            <div className="flex gap-2">
              <div className="size-7 rounded-md bg-primary" />
              <div className="size-7 rounded-md bg-secondary-blue-1" />
              <div className="size-7 rounded-md bg-secondary-green ring-2 ring-secondary-green/30 ring-offset-1" />
              <div className="size-7 rounded-md bg-secondary-red" />
              <div className="size-7 rounded-md bg-gray-50 border border-border-light" />
            </div>
          </div>
        </div>
      </div>

      {/* Phone mockup — front, right */}
      <div className="relative ml-auto w-[60%] rounded-3xl bg-white p-5 shadow-card border border-border-light z-10">
        {/* Food image circle */}
        <div className="mx-auto mb-4 size-32 rounded-full border-4 border-secondary-blue-1/30 overflow-hidden bg-gray-50 flex items-center justify-center">
          <div className="size-28 rounded-full bg-gradient-to-br from-secondary-green/20 via-secondary-red/20 to-secondary-blue-1/10" />
        </div>

        {/* Title */}
        <h4 className="text-center text-xl font-medium text-primary italic mb-3">
          Unlock Premium
        </h4>

        {/* Checkmarks */}
        <div className="space-y-2 mb-4 px-2">
          <div className="flex items-center gap-2">
            <svg className="size-4 text-secondary-green shrink-0" viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/></svg>
            <div className="h-2 w-full rounded bg-secondary-blue-1/10" />
          </div>
          <div className="flex items-center gap-2">
            <svg className="size-4 text-secondary-green shrink-0" viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/></svg>
            <div className="h-2 w-3/4 rounded bg-secondary-blue-1/10" />
          </div>
        </div>

        {/* Monthly option — selected */}
        <div className="rounded-xl border-2 border-secondary-green p-3 mb-2.5">
          <div className="flex items-center gap-2">
            <div className="size-4 rounded-full border-4 border-secondary-green" />
            <span className="text-sm font-medium text-primary">Monthly</span>
          </div>
          <div className="mt-1.5 ml-6 h-2 w-20 rounded bg-secondary-green/15" />
        </div>

        {/* Annual option */}
        <div className="rounded-xl border border-border-light p-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="size-4 rounded-full border-2 border-border-light" />
            <span className="text-sm text-primary">Annual</span>
            <span className="text-xs font-medium text-secondary-green bg-secondary-green/10 px-1.5 py-0.5 rounded">-35%</span>
          </div>
          <div className="mt-1.5 ml-6 h-2 w-24 rounded bg-gray-750/10" />
        </div>

        {/* CTA button */}
        <button className="w-full rounded-xl bg-primary py-3 text-sm font-medium text-white">
          Start subscription
        </button>
      </div>
    </div>
  );
}
