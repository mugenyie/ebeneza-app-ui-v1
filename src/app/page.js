import BackToTopButton from "@/components/Extras/BackToTopButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HowItWorks />
      <WhyUs />
      <Services />
      <Footer />
      <BackToTopButton />
    </main>
  );
}
