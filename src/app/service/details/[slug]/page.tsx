"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceDetails } from "@/app/utils/ServiceDetails";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link"
import {
  ArrowUpRight,
  Terminal,
  Box,
  Globe,
  ShieldCheck,
  Activity,
  Cpu,
} from "lucide-react";

export default function ServicePage() {
  const { slug } = useParams();
  const category = ServiceDetails.categories.find((c) => c.slug === slug);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (category?.sections?.[0]) setActiveTab(category.sections[0].slug);
  }, [category]);

  const activeData = category?.sections.find((s) => s.slug === activeTab);

  if (!category || !activeData)
    return (
      <div className="p-20 text-center  uppercase tracking-widest text-neutral-400">
        404 || Page not found
      </div>
    );

  return (
    <div className=" text-[#0A0A0A] min-h-screen  selection:bg-black selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <header className="max-w-7xl mx-auto px-6 mt-20 pb-12 border-b border-neutral-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10"
        >
          <div className="flex-1">
            {/* <div className="flex items-center gap-2  text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">
              <span>Engineering Division</span>
              <span className="text-black">❖</span>
            </div> */}
            <h1 className="text-[28px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-semibold mb-5">
              {category.title}
            </h1>
          </div>
          <div className="max-w-xs pb-4 sm:pt-4">
            <p className="text-sm xs:text-base sm:text-lg  text-neutral-500 font-light leading-snug ">
              Transforming complex business logic into high-performance digital
              infrastructure.
            </p>
          </div>
        </motion.div>
      </header>

      {/* --- TOPIC SELECTOR (STICKY) --- */}
      <nav className="sticky top-[64px] z-40 bg-white/90 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {category.sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.slug)}
              className={`px-8 py-6 text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap relative ${
                activeTab === section.slug
                  ? "text-black"
                  : "text-neutral-300 hover:text-black"
              }`}
            >
              {section.title}
              {activeTab === section.slug && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-black"
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* --- CONTENT ARCHITECTURE --- */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Title Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-3xl">
                <h2 className="text-[28px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-semibold  tracking-tighter leading-[0.9] mb-6">
                  {activeData.title}
                </h2>
                {"platforms" in activeData &&
                  Array.isArray(activeData.platforms) && (
                    <div className="flex gap-2">
                      {activeData.platforms.map((p) => (
                        <span
                          key={p}
                          className="bg-black text-white text-[9px] px-3 py-1 rounded font-bold uppercase tracking-widest"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  )}
              </div>
              {/* <div className="bg-neutral-50 px-6 py-3 rounded-full border border-neutral-100 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 tracking-[0.2em]">
                  Live Solution
                </span>
              </div> */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Context & Industries */}
              <div className="lg:col-span-4 space-y-10">
                <div className="bg-[#0D0D0D] text-white rounded-[3rem] p-12 shadow-2xl relative overflow-hidden">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-500 block mb-10">
                    Strategic Overview
                  </span>
                  <p className="text-2xl font-light leading-snug relative z-10">
                    {activeData.overview}
                  </p>
                  <Globe
                    className="absolute -bottom-10 -right-10 p-10 opacity-10 text-white"
                    size={240}
                  />
                </div>

                {"deliveryModel" in activeData && (
                  <div className="p-10 bg-neutral-50 rounded-[2.5rem] border border-neutral-100">
                    <h4 className="text-[10px] font-black uppercase text-neutral-400 mb-6 tracking-[0.3em]">
                      Delivery Framework
                    </h4>
                    <p className="text-sm font-medium text-neutral-600 leading-relaxed italic">
                      {activeData.deliveryModel as string}
                    </p>
                  </div>
                )}

                <div className="p-10 border border-neutral-100 rounded-[3rem] space-y-8">
                  <h4 className="text-[10px] font-black uppercase text-neutral-400 tracking-widest text-center">
                    Vertical Domain Expertise
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {activeData.industries.map((ind: string) => (
                      <span
                        key={ind}
                        className="px-4 py-2 bg-white border border-neutral-100 rounded-xl text-[10px] font-bold text-neutral-500 uppercase hover:bg-black hover:text-white transition-all cursor-default"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Technical Specification Cards */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {activeData.groups.map((group, gIdx) => (
                  <motion.div
                    key={gIdx}
                    whileHover={{ scale: 1.01 }}
                    className="group bg-white border border-neutral-100 rounded-[2.5rem] p-10 flex flex-col hover:shadow-2xl hover:shadow-neutral-100 transition-all duration-500"
                  >
                    <div className="flex justify-between items-center mb-10">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                        <Terminal size={20} strokeWidth={1.5} />
                      </div>
                      {/* <span className="text-[10px] font-mono opacity-20 group-hover:opacity-100">
                        CAT_0{gIdx + 1}
                      </span> */}
                    </div>

                    <h3 className="text-xl font-bold uppercase mb-8 tracking-tight leading-tight">
                      {group.label}
                    </h3>

                    <ul className="space-y-4">
                      {group.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-4 text-sm font-medium text-neutral-400 group-hover:text-black transition-colors leading-snug"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-200 mt-2 flex-shrink-0 group-hover:bg-black" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* --- CTA SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-black text-white rounded-[4rem] p-20 md:p-32 text-center relative overflow-hidden">
          <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter uppercase relative z-10">
            Build the Future.
          </h2>
          <Link href="/contact">
            <button className="relative z-10 bg-white hover:bg-lime-500  text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3 mx-auto">
              Contact Us <ArrowUpRight size={20} />
            </button>
          </Link>
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25rem] font-black opacity-[0.03] select-none pointer-events-none">
            ZEN
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}