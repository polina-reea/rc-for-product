import { Hero } from "@/components/Hero";
import { LogoBar } from "@/components/LogoBar";
import { Pillars } from "@/components/Pillars";
import { Foundation } from "@/components/Foundation";
import { SectionIterate } from "@/components/SectionIterate";
import { SectionUnderstand } from "@/components/SectionUnderstand";
import { SectionExpand } from "@/components/SectionExpand";
import { SectionProtect } from "@/components/SectionProtect";
import { Integrations } from "@/components/Integrations";
import { FinalCta } from "@/components/FinalCta";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VersionSwitcher } from "@/components/VersionSwitcher";

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
        <Integrations />
        <Foundation />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
