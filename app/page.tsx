import Navbar from "@/components/Navbar";
import PageMotion from "@/components/PageMotion";
import PremiumIntro from "@/components/PremiumIntro";
import Hero from "@/sections/Hero";
import ClientMarquee from "@/sections/ClientMarquee";
import Services from "@/sections/Services";
import Work from "@/sections/Work";
import Reviews from "@/sections/Reviews";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <PremiumIntro />
      <PageMotion />
      <Navbar />
      <main>
        <Hero />
        <ClientMarquee />
        <Services />
        <Work />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}
