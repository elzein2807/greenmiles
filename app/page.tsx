import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import TravelProcess from "@/components/TravelProcess";
import Tourism from "@/components/Tourism";
import Reviews from "@/components/Reviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Branches from "@/components/Branches";
import Accreditation from "@/components/Accreditation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="home">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <TravelProcess />
        <Tourism />
        <Reviews />
        <WhyChooseUs />
        <Contact />
        <Branches />
        <Accreditation />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
