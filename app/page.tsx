import About from "@/components/blocks/about";
import { HeroSection } from "@/components/blocks/hero-section-5";
import {AryaRamnagar} from "@/components/blocks/arya-ramnagar";
import {UpcomingProjects} from "@/components/blocks/upcoming-projects";
import PartnerWithUs from "@/components/blocks/partner-with-us";
import { ContactPage } from "@/components/ui/contact-page";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection />
    <About />
    <AryaRamnagar />
    <UpcomingProjects/>
    <PartnerWithUs />
    <ContactPage/>
    </>
  );
}
