"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar";
import FAQ from "../Components/FaqSection";
import ConnectSection from "../Components/ConnectUs";
import Footer from "../Components/Footer";
import Nav from "./Nav";

const Service: React.FC = () => {
  return (
    <div className="bg-[radial-gradient(circle_at_center,white_0%,#EAE4F9_60%,#f9f9f9_100%)]">
      <Navbar />
     
      <section className="w-full  bg-[radial-gradient(circle_at_center,white_0%,#EAE4F9_60%,#f9f9f9_100%)] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex  md:flex-row items-start md:items-end md:ml-17 justify-between gap-8 md:gap-12"
        >
          {/* Left side title */}
          <div className="text-start md:text-left flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
              We Create <br className="hidden sm:block" />
              Amazing Projects
            </h2>
          </div>

          {/* Right side text */}
          <div className="flex-1 text-start md:text-start">
            <p className="text-gray-600 text-base sm:text-sm md:text-lg leading-relaxed md:max-w-md md:ml-37 mx-auto md:mx-0">
              We combine bold ideas with smart strategy to design brand
              experiences that connect, convert, and inspire. From startups to
              industry leaders, we make your brand unforgettable.
            </p>
          </div>
        </motion.div>
      </section>
      <Nav/>
    </div>
  );
};
export default Service;
