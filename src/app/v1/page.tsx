import { Hero } from "@/components/v1/Hero";
import { LogoBar } from "@/components/shared/LogoBar";
import { Pillars } from "@/components/shared/Pillars";
import { SectionIterate } from "@/components/v1/SectionIterate";
import { SectionUnderstand } from "@/components/v1/SectionUnderstand";
import { SectionExpand } from "@/components/v1/SectionExpand";
import { SectionProtect } from "@/components/v1/SectionProtect";
import { FoundationWithIntegrations } from "@/components/v1/FoundationWithIntegrations";
import { FinalCta } from "@/components/v1/FinalCta";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { VersionSwitcher } from "@/components/layout/VersionSwitcher";

export default function V1() {
  return (
    <>
      <Navbar />
      <VersionSwitcher current="v1" />
      <main>
        <Hero />
        <LogoBar />
        <Pillars />
        <SectionIterate />
        <SectionUnderstand />
        <SectionExpand />
        <SectionProtect />
        <FoundationWithIntegrations />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
