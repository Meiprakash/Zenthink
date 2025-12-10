"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { industriesData } from "@/app/utils/industriesData";
import Navbar from "@/app/components/navbar/Navbar";
import { useRef } from "react";
import TestimonialsSection from "@/app/components/Testimonials";
import FAQ from "@/app/components/FaqSection";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import BeyondSection from "./Beyond";
import CompanySection from "./Company";
import CardsSection from "./Cards";
import DeliverSection from "./Deliver";
import AdvancedSection from "./Advanced";
import TimelineSection from "./TimelineSection";


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
  store: string[];
  beyond: string;
  company: string;
  delivery: string[];
  advanced: string[];
  cards: string[];
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
  // const featureItems = selectedService.whyChoose || [];

  return (
    <main className="font-inter">
      <div className="relative min-h-screen">
        {/* Fixed background gradient - Same as Service page */}
        <div className="fixed inset-0  -z-10" />

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
                    className="text-[30px] sm:text-[40px] md:text-[40px] lg:text-[54px] font-medium leading-[1.2] md:leading-[1.1] text-black"
                  >
                    {selectedService.heading.split(" ").slice(0, 2).join(" ")}{" "}
                    <span className="text-neutral-500">
                      {selectedService.heading.split(" ").slice(2).join(" ")}
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-neutral-600 mt-4 xs:mt-5 sm:mt-6 text-[14px] sm:text-[13px] max-w-2xl"
                  >
                    {selectedService.subtitle ||
                      "Premium solutions crafted with innovation and expertise to drive your business forward."}
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
                      src={selectedService.banner }
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

          <BeyondSection beyond={selectedService.beyond} />
          <CompanySection company={selectedService.company} />
          <DeliverSection deliver={selectedService.deliver} />
          <AdvancedSection advanced={selectedService.advanced} />
          <CardsSection cards={selectedService.cards} />

          <TimelineSection timeline={selectedService.timeline} />

          {/* Additional Sections */}
         
            <TestimonialsSection />
          
         
            <FAQ />
        

          <Footer />
        </div>
      </div>
    </main>
  );
}
