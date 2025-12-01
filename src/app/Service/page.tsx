"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar";
import Nav from "./Nav";
import FAQ from "../Components/FaqSection";
import ConnectSection from "../Components/ConnectUs";
import Footer from "../Components/Footer";
import BlogSection from "../Components/Blog";
import TestimonialsSection from "../Components/Testimonials";
import Servicecard from "./Servicecard";
// import Servicecard from "./ourservice/page";

const Service: React.FC = () => {
  return (
    <div className="bg-[radial-gradient(circle_at_center,white_0%,#EAE4F9_60%,#f9f9f9_100%)]">
      <Navbar />

      <section className="w-full   py-9 px-6 md:px-12 lg:px-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col  sm:flex-row items-start md:items-end md:ml-17 justify-between gap-4 sm:gap-8 md:gap-12"
        >
          {/* Left side title */}
          <div className="text-start md:text-left flex-1">
            <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              We Engineer Transformative Software Solutions
            </h2>
          </div>

          {/* Right side text */}
          <div className="flex-1 text-start md:text-start md:mb-11">
            <p className="text-gray-600 sm:text-base text-sm md:text-lg leading-relaxed md:max-w-md md:ml-37 mx-auto md:mx-0">
              We combine bold ideas with smart strategy to design brand
              experiences that connect, convert, and inspire. From startups to
              industry leaders, we make your brand unforgettable.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-6 md:gap-4 gap-4 mx-4 sm:gap-1 sm:ml-10">
        <div className="md:ml-34 sm:col-span-3   ">
          <Image
            src="/service2.webp"
            alt="service"
            width={800}
            height={20}
            className="rounded-2xl"
          />
        </div>
        <div className="sm:col-span-1 bg-gray-200 text-black p-2 rounded-2xl sm:w-40 md:w-60 sm:ml-2 md:ml-1 ">
          <div className="mt-4 ml-2 md:text-3xl sm:text-xl text-lg text-gray-600">
            Satisfied <h2 className="sm:flex ">Customers</h2>
          </div>
          <div className="mt-4 sm:mt-15 md:text-5xl ml-2">200K+</div>
          <div className="mt-7 md:mt-24 ml-2">
            <Image
              src="/about-avater-group.jpg"
              alt="img"
              width={100}
              height={100}
              className="sm:w-20 md:w-30"
            />
          </div>
        </div>
        <div className="sm:col-span-2  md:mr-30   sm:ml-18 md:ml-10">
          <Image
            src="/service3.jpg"
            alt="service"
            width={800}
            height={600}
            className="h-60 md:h-98 w-full object-cover rounded-2xl"
          />
        </div>
      </div>
      {/* Servicecard section*/}
      <div className="mt-18">
        {" "}
        <p className="text-md text-gray-900  md:ml-39 sm:ml-7 ml-7 flex items-center gap-2">
          Our Services{" "}
          <span className="">
            <Image
              src="/badge-icon.webp"
              alt="badge"
              width={16}
              height={16}
              className="w-4 "
            />
          </span>
        </p>
        <section className="w-full   py-5 px-6 md:px-12 lg:px-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col  sm:flex-row items-start md:items-end md:ml-17 justify-between gap-4 sm:gap-8 md:gap-12"
          >
            {/* Left side title */}
            <div className="text-start md:text-left flex-1">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                {/* We Create <br className="hidden sm:block" />
              Amazing Projects */}
                Software Excellence Across Every Business Function
              </h2>
            </div>

            {/* Right side text */}
            <div className="flex-1 text-start md:text-start">
              <p className="text-gray-600 sm:text-base text-sm md:text-[15px] leading-relaxed md:max-w-md md:ml-37 mx-auto md:mx-0 mb-9">
                We create technology that directly impacts your bottom line.
                From customer-facing applications to backend infrastructure, our
                solutions are engineered to improve performance, increase
                agility, and deliver measurable ROI
              </p>
            </div>
          </motion.div>
        </section>
      </div>
      <Servicecard />
      <TestimonialsSection />
      <FAQ />
      <BlogSection />
      <ConnectSection />
      <Footer />
    </div>
  );
};
export default Service;
