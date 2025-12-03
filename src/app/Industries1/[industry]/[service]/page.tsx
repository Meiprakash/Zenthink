"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { industriesData } from "@/app/utils/industriesData";
import Navbar from "@/app/Components1/Navbar/Navbar";
import { useRef } from "react";
import TestimonialsSection from "@/app/Components1/Testimonials";
import FAQ from "@/app/Components1/FaqSection";
import Footer from "@/app/Components1/Footer";
import { motion } from "framer-motion";

export const runtime = 'edge';

// Define proper interfaces for your data structure
interface Product {
  name: string;
  price: string;
  image: string;
  desc?: string;
}

interface TopProduct {
  title: string;
  desc: string;
  image: string;
  price: string;
  features?: string[];
}

interface Service {
  name: string;
  slug: string;
  subtitle: string;
  banner: string;
  stats: { value: string; label: string; }[];
  whyChoose: string[];
  topProducts: TopProduct[];
  products: Product[];
}

export default function IndustryServiceDetails() {
  const { industry, service } = useParams();

  const selectedIndustry = industriesData.find(
    (i) => i.slug.toLowerCase() === String(industry).toLowerCase()
  );

  const selectedService = selectedIndustry?.services.find(
    (s) => s.slug.toLowerCase() === String(service).toLowerCase()
  );

  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (!selectedIndustry || !selectedService)
    return (
      <h2 className="text-center py-24 text-xl text-neutral-600">Not Found</h2>
    );

  // Use whyChoose array for features section
  const featureItems = selectedService.whyChoose || [];

  return (
    <main className="font-inter">
      <div className="relative min-h-screen">
        {/* Fixed background gradient - Same as Service page */}
        <div className="fixed inset-0 bg-gradient-to-bl from-[#ffffff] via-[#fdfffa] to-[#f2fde4] -z-10" />
        
        {/* Content */}
        <div className="relative z-0">
          <Navbar />

          {/* HERO SECTION - Updated with HeroSection styles */}
          <section className="relative overflow-hidden text-black w-full py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8 lg:gap-12"
              >
                {/* Left side title */}
                <div className="lg:flex-1">
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium leading-[1.2] md:leading-[1.1] text-black"
                  >
                    {selectedService.name.split(' ').slice(0, 2).join(' ')}{' '}
                    <span className="text-neutral-500">
                      {selectedService.name.split(' ').slice(2).join(' ')}
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-neutral-600 mt-4 xs:mt-5 sm:mt-6 text-[14px] sm:text-lg max-w-2xl"
                  >
                    {selectedService.subtitle || "Premium solutions crafted with innovation and expertise to drive your business forward."}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 mt-4 sm:mt-6"
                  >
                    {/* Contact button */}
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      className="relative overflow-hidden rounded-lg bg-black px-10 sm:px-6 py-2.5 xs:py-3 sm:py-3 text-white font-medium group cursor-pointer"
                    >
                      <button
                        onClick={() => router.push("/Contact")}
                        className="relative z-10 text-[14px] sm:text-md"
                      >
                        Request a Quote
                      </button>
                      <span className="absolute inset-0 rounded-lg bg-lime-500 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                    </motion.div>

                    {/* Stats */}
                    <div className="flex flex-row gap-4 xs:gap-6 sm:gap-8 text-start md:text-center">
                      {selectedService.stats.map((item, index) => (
                        <div key={index}>
                          <h3 className="text-black text-2xl sm:text-3xl font-semibold">
                            {item.value}
                          </h3>
                          <p className="text-neutral-600 text-[12px] sm:text-[13px]">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right side - Hero image */}
                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="relative flex items-center justify-center w-full lg:w-1/2 mt-8 lg:mt-0"
                >
                  <div className="relative w-[250px] h-[250px] xs:w-[280px] xs:h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-lime-500/20 to-transparent blur-2xl sm:blur-3xl"
                    />
                    <Image
                      src={selectedService.banner}
                      alt={selectedService.name}
                      fill
                      className="object-contain relative z-10"
                      priority
                      sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 350px, (max-width: 1280px) 400px, 450px"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Why Choose Section - Updated with AboutUs styles */}
          <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mb-6 sm:mb-8"
              >
                <p className="text-md sm:text-lg text-neutral-900 mb-3 flex items-center gap-2">
                  Why Choose {selectedService.name}?
                  <span>
                    <Image
                      src="/badge-icon.webp"
                      alt="badge"
                      width={16}
                      height={16}
                      className="min-w-4 h-4"
                    />
                  </span>
                </p>

                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 xs:gap-8 items-start">
                  {/* Left: Heading */}
                  <div>
                    <h2 className="text-[30px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-medium text-neutral-900 leading-[1.2] sm:leading-tight tracking-tight">
                      Driving Principles of Our Solutions
                    </h2>
                  </div>

                  {/* Right: Description */}
                  <div>
                    <p className="text-neutral-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                      Discover solutions crafted with precision and expertise. Elevate your 
                      business with technology designed to innovate, optimize, and scale.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-center">
                {/* Left features */}
                <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
                  {featureItems.slice(0, 2).map((feature: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%) rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 border border-neutral-200 shadow-xs"
                    >
                      <h3 className="text-black text-base xs:text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                        {feature.split(':')[0] || `Feature ${index + 1}`}
                      </h3>
                      <p className="text-neutral-600 text-xs xs:text-sm sm:text-base">
                        {feature.includes(':') ? feature.split(':')[1].trim() : feature}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Center image */}
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center"
                  >
                    <div className="absolute w-full h-full bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%) rounded-xl sm:rounded-2xl"></div>
                    <Image
                      src="/product.png"
                      alt="Service Illustration"
                      width={300}
                      height={300}
                      className="relative z-10 object-contain w-3/4 h-3/4"
                      sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
                    />
                  </motion.div>
                </div>

                {/* Right features */}
                <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
                  {featureItems.slice(2, 4).map((feature: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%) rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 border border-neutral-200 shadow-xs"
                    >
                      <h3 className="text-black text-base xs:text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                        {feature.split(':')[0] || `Feature ${index + 3}`}
                      </h3>
                      <p className="text-neutral-600 text-xs xs:text-sm sm:text-base">
                        {feature.includes(':') ? feature.split(':')[1].trim() : feature}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Top Products Section - Updated with RecentWork styles */}
          <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="mb-6 sm:mb-8"
              >
                <p className="text-md sm:text-lg md:text-xl text-neutral-800 mb-3 flex items-center gap-2">
                  Premium Solutions
                  <span>
                    <Image
                      src="/badge-icon.jpg"
                      alt="badge"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </span>
                </p>
                
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 mb-8 sm:mb-12">
                  <h2 className="text-[30px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-medium text-neutral-900 leading-[1.2] sm:leading-tight tracking-tight">
                    Discover Our Premium Solutions
                  </h2>
                  <p className="text-neutral-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                    Explore our premium solutions crafted to elevate your {selectedIndustry.title} 
                    services using innovation, efficiency and powerful digital intelligence.
                  </p>
                </div>
              </motion.div>

              <div className="space-y-12 sm:space-y-16 md:space-y-20">
                {selectedService.topProducts.map((product: TopProduct, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center ${
                      index % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Image */}
                    <div className="flex justify-center">
                      <div className="relative w-full max-w-md h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 flex items-center justify-center">
                        <div className="absolute w-full h-full bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%) rounded-xl sm:rounded-2xl"></div>
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={300}
                          height={300}
                          className="relative z-10 object-contain w-3/4 h-3/4"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-3 sm:mb-4">
                        {product.title}
                      </h3>
                      <p className="text-neutral-600 mb-4 sm:mb-6 text-[14px] xs:text-base">
                        {product.desc}
                      </p>

                      {product.features && product.features.length > 0 && (
                        <ul className="space-y-1 xs:space-y-2 mb-4 sm:mb-6">
                          {product.features.map((feature: string, featureIndex: number) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-2 xs:gap-3"
                            >
                              <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-neutral-800 rounded-full mt-1.5 xs:mt-2 flex-shrink-0"></div>
                              <span className="text-neutral-700 text-sm xs:text-base">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-4">
                        <div
                          onClick={() => router.push("/Contact")}
                          className="relative overflow-hidden rounded-lg bg-black px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 text-white font-medium group cursor-pointer"
                        >
                          <span className="relative z-10 text-sm xs:text-base">
                            Get Started
                          </span>
                          <span className="absolute inset-0 rounded-lg bg-lime-500 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                        </div>
                        <p className="text-lg sm:text-xl font-semibold text-black">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Products Carousel Section */}
          <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-start md:text-center mb-8 sm:mb-10 md:mb-12"
              >
                <h2 className="text-[24px] xs:text-[26px] sm:text-[32px] md:text-[38px] lg:text-4xl font-semibold text-black mb-3 sm:mb-4">
                  Our Solutions
                </h2>
                <p className="text-neutral-600 max-w-xl mx-auto text-[14px] xs:text-base">
                  Discover our range of innovative solutions, designed to optimize, 
                  automate, and transform your business operations.
                </p>
              </motion.div>

              <div className="relative">
                <button
                  onClick={scrollLeft}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 xs:-translate-x-3 sm:-translate-x-4 bg-white shadow-xs p-2 xs:p-3 rounded-full z-10 hover:bg-gray-50 transition-colors"
                  aria-label="Scroll left"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    className="w-4 h-4 xs:w-5 xs:h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.325 12.85q-.225-.15-.337-.375T5.874 12t.113-.475t.337-.375l8.15-5.175q.125-.075.263-.112T15 5.825q.4 0 .7.288t.3.712v10.35q0 .425-.3.713t-.7.287q-.125 0-.262-.038t-.263-.112z"
                    />
                  </svg>
                </button>

                <div
                  ref={scrollRef}
                  className="flex gap-4 xs:gap-5 sm:gap-6 overflow-x-auto px-2 pb-4 scroll-smooth"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {selectedService.products.map((product: Product, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-full sm:w-1/4 flex-shrink-0 bg-white shadow-xs rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 border border-neutral-200"
                    >
                      <div className="relative bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%) w-full h-36 xs:h-40 sm:h-48 rounded-lg xs:rounded-xl flex items-center justify-center mb-4 xs:mb-5 sm:mb-6">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={120}
                          height={120}
                          className="object-contain w-20 h-20 xs:w-24 xs:h-24"
                        />
                      </div>

                      <h3 className="text-base xs:text-lg font-semibold text-black mb-2">
                        {product.name}
                      </h3>
                      <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                        {product.desc || "A comprehensive solution designed for modern businesses."}
                      </p>

                      <div className="flex justify-between items-center">
                        <div
                          onClick={() => router.push("/Contact")}
                          className="relative overflow-hidden rounded-lg bg-black px-3 xs:px-4 py-1.5 xs:py-2 text-white text-xs xs:text-sm font-medium group cursor-pointer"
                        >
                          <span className="relative z-10">Learn More</span>
                          <span className="absolute inset-0 rounded-lg bg-lime-500 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                        </div>
                        <p className="font-semibold text-lime-500 text-sm xs:text-base">
                          {product.price}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={scrollRight}
                  className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-2 xs:translate-x-3 sm:translate-x-4 bg-white shadow-xs p-2 xs:p-3 rounded-full z-10 hover:bg-gray-50 transition-colors"
                  aria-label="Scroll right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    className="w-4 h-4 xs:w-5 xs:h-5"
                    viewBox="0 0 24 24"
                  >
                    <g transform="rotate(180 12 12)">
                      <path
                        fill="currentColor"
                        d="M6.325 12.85q-.225-.15-.337-.375T5.874 12t.113-.475t.337-.375l8.15-5.175q.125-.075.263-.112T15 5.825q.4 0 .7.288t.3.712v10.35q0 .425-.3.713t-.7.287q-.125 0-.262-.038t-.263-.112z"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* Additional Sections */}
          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-24">
            <TestimonialsSection />
          </div>
          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-24">
            <FAQ />
          </div>
          
          <Footer />
        </div>
      </div>
    </main>
  );
}