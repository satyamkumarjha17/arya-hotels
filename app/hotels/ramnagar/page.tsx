import { HeroSection } from "@/components/blocks/hero-section-5";
import {HeroHotelPage} from "@/components/blocks/hero-hotel-page";
import {FeatureHotelDemo} from "@/components/blocks/hotels-details";
import Testimonials from "@/components/blocks/testimonials";
import HotelGallery from "@/components/blocks/imageGallery";

export default function HotelPage() {
  return (
    <>
    <HeroSection />
    <HeroHotelPage/>
    <FeatureHotelDemo/>
    <Testimonials/>
    <HotelGallery/>
    </>
  );
}
