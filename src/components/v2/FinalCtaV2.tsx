import { Button } from "@/components/ui/Button";
import { LinkWithArrow } from "@/components/ui/LinkWithArrow";
import { FloatingBlobs } from "./FloatingBlobs";

export function FinalCtaV2() {
  return (
    <section className="relative py-24 max-xl:py-20 max-lg:py-16 max-sm:py-12 bg-white snap-section" style={{ minHeight: "auto" }}>
      <FloatingBlobs color="mixed" />
      <div className="container relative z-10 flex flex-col items-center">
        <h2 className="font-object leading-dense font-medium tracking-tighter text-balance max-w-4xl max-lg:max-w-2xl max-md:max-w-xl text-[3.25rem] max-xl:text-[2.5rem] max-lg:text-[2rem] max-sm:text-[1.625rem] mx-auto text-center text-primary">
          Your monetization shouldn&apos;t need<br /><span className="v2-gradient-text">an engineering sprint</span>
        </h2>
        <p className="mt-5 max-w-2xl text-center text-xl leading-snug font-light text-pretty text-gray-800 max-xl:mt-4 max-lg:mt-3.5 max-lg:max-w-lg max-md:mt-3 max-md:max-w-md max-md:text-base">
          Every feature comes standard, and it&apos;s free to&nbsp;start.
        </p>
        <div className="mt-8 flex items-center gap-8 max-xl:mt-6 max-lg:mt-5 max-lg:gap-6 max-md:mt-6">
          <Button href="https://app.revenuecat.com/signup" variant="gradient">Start for free</Button>
          <LinkWithArrow href="https://demo.revenuecat.com/" size="base">Explore Demo</LinkWithArrow>
        </div>
      </div>
    </section>
  );
}
