"use client";

import React from "react";
import Navbar from "../components/navbar/Navbar";
import FAQ from "../components/FaqSection";
import ConnectSection from "../components/ConnectUs";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";

const Blog: React.FC = () => {
  return (
      <div className="relative min-h-screen">
      {/* Fixed background gradient */}
      <div className="fixed inset-0 bg-gradient-to-bl from-[#ffffff] via-[#ffffff] to-[#f2fde4] -z-10" />
      
      {/* Content */}
      <div className="relative z-0">
        <Navbar />
        <HeroSection />
        <FAQ />
        <ConnectSection />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
