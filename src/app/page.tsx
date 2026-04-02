import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

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
            <strong className="text-primary">Version 1</strong>{" "}stays true to
            your current design system — same components, typography, and
            patterns from revenuecat.com. It&apos;s designed to feel like it
            could ship tomorrow.
          </p>
          <p>
            <strong className="text-primary">Version 2</strong>{" "}takes the same
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
          <Button href="/v1" size="large">Version 1 — RC Style</Button>
          <Link
            href="/v2"
            className="transition-colors duration-300 whitespace-nowrap font-object font-medium relative inline-flex w-fit items-center justify-center gap-1 bg-primary hover:bg-secondary-blue-2 text-white h-14 rounded-full text-base px-10 tracking-dense"
          >
            Version 2 — With a Spark
          </Link>
        </div>

        {/* Process doc */}
        <a
          href="https://polinareea.notion.site/RevenueCat-x-Polina-335f151570be809ab30cca4bc09297ab"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 text-[15px] font-object font-medium text-secondary-blue-1 hover:text-secondary-blue-2 transition-colors"
        >
          📄 Process Document (Notion)
        </a>

        {/* Signature */}
        <p className="mt-6 text-sm text-gray-750">
          Made with Claude Code by Polina
        </p>
      </div>
    </div>
  );
}
