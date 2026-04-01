import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="RevenueCat"
          width={180}
          height={40}
          className="mx-auto mb-12"
        />

        {/* Greeting */}
        <h1 className="font-object text-[2.5rem] max-md:text-[1.75rem] font-medium tracking-tight text-primary leading-[1.15] mb-6">
          Hi, RevenueCat team!
        </h1>

        <div className="text-lg max-md:text-base text-gray-800 leading-relaxed space-y-4 mb-12">
          <p>
            Thank you for this opportunity. I built two versions of the
            &quot;For Product&quot; landing page to show how the same
            narrative can live in different visual treatments.
          </p>
          <p>
            <strong className="text-primary">Version 1</strong> stays true to
            your current design system — same components, typography, and
            patterns from revenuecat.com. It&apos;s designed to feel like it
            could ship tomorrow.
          </p>
          <p>
            <strong className="text-primary">Version 2</strong> takes the same
            copy and structure but explores a bolder visual direction — more
            color, more energy, more personality. Think of it as a
            conversation starter about where the brand could go.
          </p>
          <p className="text-base text-gray-750">
            Both pages share the same messaging, narrative arc, and PM-focused
            positioning. The difference is purely visual.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/v1"
            className="transition-colors duration-300 whitespace-nowrap font-object font-medium relative inline-flex w-fit items-center justify-center gap-1 bg-secondary-blue-1 hover:bg-secondary-blue-2 text-white h-14 rounded-full text-base px-10 tracking-dense"
          >
            Version 1 — RC Style
          </Link>
          <Link
            href="/v2"
            className="transition-colors duration-300 whitespace-nowrap font-object font-medium relative inline-flex w-fit items-center justify-center gap-1 bg-primary hover:bg-secondary-blue-2 text-white h-14 rounded-full text-base px-10 tracking-dense"
          >
            Version 2 — With a Spark
          </Link>
        </div>

        {/* Signature */}
        <p className="mt-16 text-sm text-gray-750">
          Made with Claude Code by Polina
        </p>
      </div>
    </div>
  );
}
