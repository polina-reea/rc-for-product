import { Button } from "@/components/ui/Button";
import { LinkWithArrow } from "@/components/ui/LinkWithArrow";

export function FinalCta() {
  return (
    <section className="py-40 max-xl:py-30 max-lg:py-28 max-sm:py-20 bg-white">
      <div className="container flex flex-col items-center">
        <h2 className="font-object leading-dense font-medium tracking-tighter text-balance text-primary max-w-4xl max-lg:max-w-2xl max-md:max-w-xl text-[3.25rem] max-xl:text-[2.5rem] max-lg:text-[2rem] max-sm:text-[1.625rem] mx-auto text-center">
          Your monetization shouldn&apos;t need<br />an engineering sprint
        </h2>
        <p className="mt-5 max-w-2xl text-center text-xl leading-snug font-light text-pretty text-gray-800 max-xl:mt-4 max-lg:mt-3.5 max-lg:max-w-lg max-md:mt-3 max-md:max-w-md max-md:text-base">
          Every feature comes standard, and it&apos;s free to start.
        </p>
        <div className="mt-8 flex items-center gap-8 max-xl:mt-6 max-lg:mt-5 max-lg:gap-6 max-md:mt-6">
          <Button href="https://app.revenuecat.com/signup">Start for free</Button>
          <LinkWithArrow href="https://demo.revenuecat.com/" size="base">Explore Demo</LinkWithArrow>
        </div>
      </div>
    </section>
  );
}
