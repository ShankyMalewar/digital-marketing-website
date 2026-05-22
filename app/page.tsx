import Navbar from "@/components/Navbar";
import PremiumIntro from "@/components/PremiumIntro";
import Hero from "@/sections/Hero";
import ClientMarquee from "@/sections/ClientMarquee";
import Services from "@/sections/Services";
import Work from "@/sections/Work";
import Process from "@/sections/Process";
import About from "@/sections/About";
import Reviews from "@/sections/Reviews";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <PremiumIntro />
      <Navbar />
      <main>
        <Hero />
        <ClientMarquee />
        <Services />
        <Work />
        <Process />
        <About />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}
