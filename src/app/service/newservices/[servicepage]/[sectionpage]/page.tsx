"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  Layout,
  Cpu,
  Zap,
  ShieldCheck,
  Code2,
  Database,
  Globe,
  Lock,
  Server,
  Terminal,
  RefreshCw,
  Cloud,
  Activity,
  Users,
  CheckCircle2,
} from "lucide-react";

// Components
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/Footer";

// Data
import { ServiceDetails } from "@/app/utils/ServiceDetails";

// Helper function to provide unique icons for each group based on its title
const getGroupIcon = (label: string) => {
  const text = label.toLowerCase();
  if (text.includes("security") || text.includes("compliance"))
    return <Lock size={20} />;
  if (text.includes("data") || text.includes("analytics"))
    return <Database size={20} />;
  if (text.includes("customer") || text.includes("relationship"))
    return <Users size={20} />;
  if (text.includes("enterprise") || text.includes("operations"))
    return <Layout size={20} />;
  if (text.includes("cloud") || text.includes("saas"))
    return <Cloud size={20} />;
  if (text.includes("modernization") || text.includes("legacy"))
    return <RefreshCw size={20} />;
  if (text.includes("infrastructure") || text.includes("code"))
    return <Terminal size={20} />;
  if (text.includes("monitoring") || text.includes("logging"))
    return <Activity size={20} />;
  return <Cpu size={20} />; // Default Icon
};

export default function DynamicServicePage() {
  const params = useParams();

  const categorySlug = params?.servicepage as string;
  const sectionSlug = params?.sectionpage as string;

  const categoryData = ServiceDetails.categories.find(
    (c) => c.slug === categorySlug,
  );
  if (!categoryData) return notFound();

  const sectionData = categoryData.sections.find((s) => s.slug === sectionSlug);
  if (!sectionData) return notFound();

  return (
    <div className="min-h-screen  flex flex-col selection:bg-lime-400 selection:text-black">
      <Navbar />

      <main className="flex-grow pt-22 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* --- TOP NAVIGATION BAR --- */}
          {/* <nav className="flex items-center gap-3 text-sm font-medium text-slate-400 mb-12">
            <span className="hover:text-lime-500 transition-colors cursor-pointer">
              Services
            </span>
            <ChevronRight size={14} />
            <span className="hover:text-lime-500 transition-colors cursor-pointer capitalize">
              {categoryData.title}
            </span>
            <ChevronRight size={14} />
            <span className="text-slate-900 truncate bg-lime-50 px-3 py-1 rounded-full border border-lime-100">
              {sectionData.title}
            </span>
          </nav> */}

          {/* --- HERO SECTION --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-8"
            >
              <div className="flex items-center gap-2 text-lime-600 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
                <div className="w-8 h-[2px] bg-lime-500" />
                Zenthink Solutions
              </div>
              <h1 className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium mb-8 tracking-tighter leading-[1.1]">
                {sectionData.title}
              </h1>
              <p className="text-neutral-600 mt-1 xs:mt-1 sm:mt-1 text-[14px] sm:text-[17px] leading-relaxed max-w-3xl">
                {sectionData.overview}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-4 bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/10 blur-[50px] rounded-full" />
              <Zap className="mb-4 text-lime-400" size={32} />
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                The ZenThink Edge
              </h3>
              <p className="text-slate-400 text-[11px] sm:text-sm leading-relaxed mb-6">
                Proprietary methodologies designed for rapid scalability and
                enterprise-grade security.
              </p>
              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-2 text-xs font-bold bg-white/5 border border-white/10 p-2 rounded-lg">
                  <ShieldCheck size={14} className="text-lime-400" /> 99.9%
                  Uptime Architecture
                </div>
                <div className="flex items-center gap-2 text-xs font-bold bg-white/5 border border-white/10 p-2 rounded-lg">
                  <ShieldCheck size={14} className="text-lime-400" /> Agile
                  Delivery Model
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- FEATURE GROUPS --- */}
          <div className="space-y-24">
            {sectionData.groups.map((group, gIdx) => (
              <motion.section
                key={gIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
                  <div className="w-14 h-14 bg-white border-2 border-slate-900 rounded-2xl flex items-center justify-center text-slate-900 shrink-0 shadow-[4px_4px_0px_0px_#A3E635]">
                    {getGroupIcon(group.label)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      {group.label}
                    </h3>
                    <div className="h-1 w-16 bg-lime-400 mt-2 rounded-full group-hover:w-24 transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {group.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md hover:border-lime-200 transition-all duration-300 flex items-start gap-4 group/item"
                    >
                      <div className="mt-1 p-2 bg-lime-50 text-lime-600 rounded-xl group-hover/item:bg-lime-500 group-hover/item:text-white transition-colors">
                        <CheckCircle2 size={18} />
                      </div>
                      <p className="text-slate-600 text-[12px] sm:text-[15px] font-semibold leading-relaxed pt-1">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* --- INDUSTRIES SECTION --- */}
          <section className="mt-32">
            <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <Briefcase className="text-lime-600" size={24} />
                  </div>
                  <h2 className="text-lg sm:text-2xl font-bold text-slate-900 uppercase tracking-tighter">
                    Industry Reach
                  </h2>
                </div>
                <p className="text-slate-500 text-[12px] sm:text-[15px] font-medium">
                  Tailored solutions currently powering leaders across these
                  sectors.
                </p>
              </div>

              <div className="lg:w-2/3 flex flex-wrap gap-3">
                {sectionData.industries.map((ind, i) => (
                  <span
                    key={i}
                    className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-2xl text-sm font-bold shadow-sm hover:border-lime-400 hover:text-lime-600 transition-all cursor-default"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* --- FINAL CALL TO ACTION --- */}
          <section className="mt-32 rounded-[4rem] bg-slate-900 p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-lime-900/10">
            <div className="relative z-10">
              <h2 className="text-2xl lg:text-5xl font-black mb-6 uppercase tracking-tighter">
                Ready to <span className="text-lime-400 italic">Evolve?</span>
              </h2>
              <p className="text-slate-400 text-[13px] sm:text-lg mb-12 max-w-2xl mx-auto">
                Connect with our solution architects today and transform your
                business logic into a scalable reality.
              </p>
              <Link href="/contact">
                <button className="hover:bg-lime-400 bg-white text-black cursor-pointer px-12 py-5 rounded-2xl font-black text-[13px] sm:text-lg transition-all flex items-center gap-3 mx-auto shadow-xl active:scale-95 group">
                  Work With ZenThink
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Decorative BG element */}
            {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-400/5 blur-[150px] rounded-full -mt-40 -mr-40" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-lime-400/5 blur-[100px] rounded-full -mb-20 -ml-20" /> */}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
