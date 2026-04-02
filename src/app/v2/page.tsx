import { HeroV2 } from "@/components/v2/HeroV2";
import { Pillars } from "@/components/Pillars";
import { SectionIterateV2 } from "@/components/v2/SectionIterateV2";
import { SectionUnderstandV2 } from "@/components/v2/SectionUnderstandV2";
import { SectionExpandV2 } from "@/components/v2/SectionExpandV2";
import { SectionProtectV2 } from "@/components/v2/SectionProtectV2";
import { FoundationV2 } from "@/components/v2/FoundationV2";
import { FinalCtaV2 } from "@/components/v2/FinalCtaV2";
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
        <Pillars />
        <SectionIterateV2 />
        <SectionUnderstandV2 />
        <SectionExpandV2 />
        <SectionProtectV2 />
        <FoundationV2 />
        <FinalCtaV2 />
      </main>
      <Footer />
    </>
  );
}
