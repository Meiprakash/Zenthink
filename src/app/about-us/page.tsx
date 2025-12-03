"use client";

import Navbar from "../Components/Navbar/Navbar";
import SecondComp from "./Image";
import StatsSection from "./CountUP";
import Values from "./Values";
import AwardsSection from "./AwardsSection";
import ProcessSection from "./Process";
import TestimonialsSection from "../Components/Testimonials";
import FAQ from "../Components/FaqSection";
import BlogSection from "../Components/blog";
import ConnectSection from "../Components/ConnectUs";
import Footer from "../Components/Footer";
import HeroSection from "./HeroSection";

export default function Hero() {


  return (
    <div className="relative min-h-screen">
      {/* Fixed background gradient */}
      <div className="fixed inset-0 bg-gradient-to-bl from-[#ffffff] via-[#ffffff] to-[#f2fde4] -z-10" />
      
      {/* Content */}
      <div className="relative z-0">
      <Navbar />
      <HeroSection />
      <SecondComp />
      <StatsSection />
      <Values />
      <AwardsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQ />
      <BlogSection />
      <ConnectSection />
      <Footer />
    </div>
    </div>
  );
}
