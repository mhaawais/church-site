import Hero2 from "@/components/hero2";
import Hero3 from "@/components/hero3";
import HomeHero from "@/components/home-hero";
import HeroMission from "@/components/hero-mission";
import HeroTestimonials from "@/components/hero-testimonials";
import HeroCTA from "@/components/hero-cta";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Hero2 />
      <HeroMission />
      <Hero3 />
      <HeroTestimonials />
      <HeroCTA />
    </>
  );
}
