"use client";
import React from "react";
import Navbar from "../Components1/Navbar/Navbar";
import FAQ from "../Components1/FaqSection";
import ConnectSection from "../Components1/ConnectUs";
import Footer from "../Components1/Footer";
import BlogSection from "../Components1/Blog";
import TestimonialsSection from "../Components1/Testimonials";
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