"use client";
import React from "react";
import Navbar from "@/app/Components/Navbar/Navbar";
import FAQ from "@/app/Components/FaqSection";
import ConnectSection from "@/app/Components/ConnectUs";
import Footer from "@/app/Components/Footer";
import BlogSection from "@/app/Components/Blog";
import TestimonialsSection from "@/app/Components/Testimonials";
import ServiceCard from "@/app/Service/ServiceCard";
import HeroSection from "@/app/Service/HeroSection";

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