import About from "@/components/blocks/about";
import { HeroSection } from "@/components/blocks/hero-section-5";
import {AryaRampur} from "@/components/blocks/arya-rampur";
import {UpcomingProjects} from "@/components/blocks/upcoming-projects";
import PartnerWithUs from "@/components/blocks/partner-with-us";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection />
    <About />
    <AryaRampur />
    <UpcomingProjects/>
    <PartnerWithUs />
    </>
  );
}
