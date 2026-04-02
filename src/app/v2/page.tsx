import { HeroV2 } from "@/components/v2/HeroV2";
import { Pillars } from "@/components/Pillars";
import { Foundation } from "@/components/Foundation";
import { SectionIterateV2 } from "@/components/v2/SectionIterateV2";
import { SectionUnderstandV2 } from "@/components/v2/SectionUnderstandV2";
import { SectionExpandV2 } from "@/components/v2/SectionExpandV2";
import { SectionProtectV2 } from "@/components/v2/SectionProtectV2";
import { FinalCtaV2 } from "@/components/v2/FinalCtaV2";
import { LogoBar } from "@/components/LogoBar";
import { Integrations } from "@/components/Integrations";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VersionSwitcher } from "@/components/VersionSwitcher";

export default function V2() {
  return (
    <>
      <Navbar />
      <VersionSwitcher current="v2" />
      <main>
        <HeroV2 />
        <LogoBar />
        <Pillars />
        <SectionIterateV2 />
        <SectionUnderstandV2 />
        <SectionExpandV2 />
        <SectionProtectV2 />
        <Integrations />
        <Foundation />
        <FinalCtaV2 />
      </main>
      <Footer />
    </>
  );
}
