"use client";
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import FAQ from "../Components/FaqSection";
import ConnectSection from "../Components/ConnectUs";
import Footer from "../Components/Footer";
import BlogSection from "../Components/Blog";
import TestimonialsSection from "../Components/Testimonials";
import HeroSection from "./HeroSection";
import ServiceCard from "./ServiceCard";

const Service: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed background gradient */}
      <div className="fixed inset-0 bg-gradient-to-bl from-[#ffffff] via-[#ffffff] to-[#f2fde4] -z-10" />
      
      {/* Content */}
      <div className="relative z-0">
        <Navbar />
        <HeroSection />
        <ServiceCard />
        <TestimonialsSection />
        <FAQ />
        <BlogSection />
        <ConnectSection />
        <Footer />
      </div>
    </div>
  );
};

export default Service;