import { DesignIcon, ExperimentIcon, PublishIcon, AnalyzeIcon, WinnerIcon } from "./Icons";

export function HowItWorks() {
  const steps = [
    {
      title: "Design",
      description: "Build a paywall or let AI generate one for you.",
      icon: <DesignIcon />,
      color: "shadow-feature-blue text-secondary-blue-1",
    },
    {
      title: "Experiment",
      description: "Set up a test. Target by segment, country, or campaign.",
      icon: <ExperimentIcon />,
      color: "shadow-feature-red text-secondary-red",
    },
    {
      title: "Publish",
      description: "It\u2019s live. Instantly. On all platforms.",
      icon: <PublishIcon />,
      color: "shadow-feature-green text-secondary-green",
    },
    {
      title: "Analyze",
      description:
        "Watch performance in real time. Predict long-term revenue impact.",
      icon: <AnalyzeIcon />,
      color: "shadow-feature-blue text-secondary-blue-1",
    },
    {
      title: "Ship the winner",
      description: "One click. Done.",
      icon: <WinnerIcon />,
      color: "shadow-feature-green text-secondary-green",
    },
  ];

  return (
    <section className="bg-gray-50 py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20" id="how-it-works">
      <div className="container">
        <header className="mb-16 flex flex-col items-center gap-4 text-center max-md:mb-10">
          <h2 className="font-object leading-dense font-medium tracking-tighter text-balance text-primary max-w-4xl max-lg:max-w-2xl text-[3.5rem] max-xl:text-[2.75rem] max-lg:text-[2.25rem] max-sm:text-[1.875rem] text-center mx-auto">
            From idea to validated winner — no release required
          </h2>
          <p className="text-xl font-light text-gray-800 max-w-2xl">
            Five steps. Zero release cycles.
          </p>
        </header>

        <ul className="grid grid-cols-5 gap-8 max-xl:gap-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {steps.map((step) => (
            <li key={step.title} className="flex flex-col gap-4">
              <div className="flex flex-col gap-6.5 max-xl:gap-5 max-lg:gap-4.5 max-sm:gap-3.5">
                <div
                  className={`flex size-15 shrink-0 items-center justify-center rounded-full bg-white/80 max-xl:size-14 max-lg:size-12 max-sm:size-11 ${step.color}`}
                  aria-hidden="true"
                >
                  <span className="inline-flex items-center justify-center size-7 max-xl:size-6.5 max-lg:size-6 max-sm:size-5">
                    {step.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-3.5 max-xl:gap-2.5 max-lg:gap-2">
                  <h3 className="font-object text-2xl leading-snug tracking-tighter text-primary max-xl:text-2xl max-lg:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-base leading-normal font-light text-gray-800 max-xl:leading-snug">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
