// "use client";

// import React from "react";
// import { useParams, notFound } from "next/navigation";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import {
//   ArrowRight,
//   Briefcase,
//   ChevronRight,
//   Layout,
//   Cpu,
//   Zap,
//   ShieldCheck,
//   Code2,
//   Database,
//   Globe,
//   Lock,
//   Server,
//   Terminal,
//   RefreshCw,
//   Cloud,
//   Activity,
//   Users,
//   CheckCircle2,
// } from "lucide-react";

// // Components
// import Navbar from "@/app/components/navbar/Navbar";
// import Footer from "@/app/components/Footer";

// // Data
// import { ServiceDetails } from "@/app/utils/ServiceDetails";

// // Helper function to provide unique icons for each group based on its title
// const getGroupIcon = (label: string) => {
//   const text = label.toLowerCase();
//   if (text.includes("security") || text.includes("compliance"))
//     return <Lock size={20} />;
//   if (text.includes("data") || text.includes("analytics"))
//     return <Database size={20} />;
//   if (text.includes("customer") || text.includes("relationship"))
//     return <Users size={20} />;
//   if (text.includes("enterprise") || text.includes("operations"))
//     return <Layout size={20} />;
//   if (text.includes("cloud") || text.includes("saas"))
//     return <Cloud size={20} />;
//   if (text.includes("modernization") || text.includes("legacy"))
//     return <RefreshCw size={20} />;
//   if (text.includes("infrastructure") || text.includes("code"))
//     return <Terminal size={20} />;
//   if (text.includes("monitoring") || text.includes("logging"))
//     return <Activity size={20} />;
//   return <Cpu size={20} />; // Default Icon
// };

// export default function DynamicServicePage() {
//   const params = useParams();

//   const categorySlug = params?.servicepage as string;
//   const sectionSlug = params?.sectionpage as string;

//   const categoryData = ServiceDetails.categories.find(
//     (c) => c.slug === categorySlug,
//   );
//   if (!categoryData) return notFound();

//   const sectionData = categoryData.sections.find((s) => s.slug === sectionSlug);
//   if (!sectionData) return notFound();

//   return (
//     <div className="min-h-screen  flex flex-col selection:bg-lime-400 selection:text-black">
//       <Navbar />

//       <main className="flex-grow pt-22 pb-20">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* --- TOP NAVIGATION BAR --- */}

//           {/* --- HERO SECTION --- */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="lg:col-span-8"
//             >
//               <div className="flex items-center gap-2 text-lime-600 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
//                 <div className="w-8 h-[2px] bg-lime-500" />
//                 Zenthink Solutions
//               </div>
//               <h1 className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium mb-8 tracking-tighter leading-[1.1]">
//                 {sectionData.title}
//               </h1>
//               <p className="text-neutral-600 mt-1 xs:mt-1 sm:mt-1 text-[14px] sm:text-[17px] leading-relaxed max-w-3xl">
//                 {sectionData.overview}
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="lg:col-span-4 relative"
//             >
//               {/* Modern Technical Blueprint Design */}
//               <div className="bg-white border border-neutral-200 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden">
//                 {/* Subtle Background Decoration */}
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/5 blur-[40px] rounded-full" />

//                 <div className="relative z-10">
//                   <div className="flex items-center gap-3 mb-8">
//                     <div className="w-10 h-10 bg-lime-400 rounded-xl flex items-center justify-center shadow-lg shadow-lime-400/20">
//                       <Cpu size={20} className="text-black" />
//                     </div>
//                     <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
//                       Technical Spec
//                     </span>
//                   </div>

//                   <div className="space-y-6">
//                     {/* Capability 1 */}
//                     <div className="group/spec">
//                       <div className="flex justify-between items-end mb-2">
//                         <span className="text-xs font-bold text-neutral-900 uppercase tracking-tight">
//                           System Scalability
//                         </span>
//                         <span className="text-[10px] font-mono text-lime-600 font-bold">
//                           L-MAX
//                         </span>
//                       </div>
//                       <div className="h-[2px] w-full bg-neutral-100 rounded-full overflow-hidden">
//                         <motion.div
//                           initial={{ width: 0 }}
//                           animate={{ width: "100%" }}
//                           transition={{ duration: 1.5, delay: 0.5 }}
//                           className="h-full bg-lime-400"
//                         />
//                       </div>
//                     </div>

//                     {/* Capability 2 */}
//                     <div className="group/spec">
//                       <div className="flex justify-between items-end mb-2">
//                         <span className="text-xs font-bold text-neutral-900 uppercase tracking-tight">
//                           Security Protocol
//                         </span>
//                         <span className="text-[10px] font-mono text-lime-600 font-bold">
//                           AES-256
//                         </span>
//                       </div>
//                       <div className="h-[2px] w-full bg-neutral-100 rounded-full overflow-hidden">
//                         <motion.div
//                           initial={{ width: 0 }}
//                           animate={{ width: "100%" }}
//                           transition={{ duration: 1.5, delay: 0.7 }}
//                           className="h-full bg-lime-400"
//                         />
//                       </div>
//                     </div>

//                     {/* Feature Tags */}
//                     <div className="pt-4 grid grid-cols-2 gap-2">
//                       {[
//                         "High-Uptime",
//                         "Agile Flow",
//                         "ISO Ready",
//                         "Cloud Native",
//                       ].map((tag) => (
//                         <div
//                           key={tag}
//                           className="flex items-center gap-2 py-2 px-3 bg-neutral-50 rounded-lg border border-neutral-100 transition-colors hover:border-lime-200"
//                         >
//                           <div className="w-1 h-1 bg-lime-500 rounded-full" />
//                           <span className="text-[10px] font-bold text-neutral-500 uppercase">
//                             {tag}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Trust Badge at bottom */}
//                   <div className="mt-4 flex items-center gap-3 p-4 bg-lime-400 rounded-2xl">
//                     <ShieldCheck size={24} className="text-black" />
//                     <div className="flex flex-col">
//                       <span className="text-[10px] font-black uppercase leading-none text-black">
//                         Enterprise Grade
//                       </span>
//                       <span className="text-[10px] font-medium text-black/70 mt-1 uppercase tracking-tighter">
//                         Guaranteed Performance
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* --- FEATURE GROUPS --- */}
//           <div className="space-y-24">
//             {sectionData.groups.map((group, gIdx) => (
//               <motion.section
//                 key={gIdx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="group"
//               >
//                 <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
//                   <div className="w-14 h-14 bg-white border-2 border-slate-900 rounded-2xl flex items-center justify-center text-slate-900 shrink-0 shadow-[4px_4px_0px_0px_#A3E635]">
//                     {getGroupIcon(group.label)}
//                   </div>
//                   <div>
//                     <h3 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
//                       {group.label}
//                     </h3>
//                     <div className="h-1 w-16 bg-lime-400 mt-2 rounded-full group-hover:w-24 transition-all" />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {group.items.map((item, iIdx) => (
//                     <div
//                       key={iIdx}
//                       className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md hover:border-lime-200 transition-all duration-300 flex items-start gap-4 group/item"
//                     >
//                       <div className="mt-1 p-2 bg-lime-50 text-lime-600 rounded-xl group-hover/item:bg-lime-500 group-hover/item:text-white transition-colors">
//                         <CheckCircle2 size={18} />
//                       </div>
//                       <p className="text-slate-600 text-[12px] sm:text-[15px] font-semibold leading-relaxed pt-1">
//                         {item}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </motion.section>
//             ))}
//           </div>

//           {/* --- INDUSTRIES SECTION --- */}
//           <section className="mt-32">
//             <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
//               <div className="lg:w-1/3">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
//                     <Briefcase className="text-lime-600" size={24} />
//                   </div>
//                   <h2 className="text-lg sm:text-2xl font-bold text-slate-900 uppercase tracking-tighter">
//                     Industry Reach
//                   </h2>
//                 </div>
//                 <p className="text-slate-500 text-[12px] sm:text-[15px] font-medium">
//                   Tailored solutions currently powering leaders across these
//                   sectors.
//                 </p>
//               </div>

//               <div className="lg:w-2/3 flex flex-wrap gap-3">
//                 {sectionData.industries.map((ind, i) => (
//                   <span
//                     key={i}
//                     className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-2xl text-sm font-bold shadow-sm hover:border-lime-400 hover:text-lime-600 transition-all cursor-default"
//                   >
//                     {ind}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* --- FINAL CALL TO ACTION --- */}
//           {/* <section className="mt-32 rounded-[4rem] bg-slate-900 p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-lime-900/10">
//             <div className="relative z-10">
//               <h2 className="text-2xl lg:text-5xl font-black mb-6 uppercase tracking-tighter">
//                 Ready to <span className="text-lime-400 italic">Evolve?</span>
//               </h2>
//               <p className="text-slate-400 text-[13px] sm:text-lg mb-12 max-w-2xl mx-auto">
//                 Connect with our solution architects today and transform your
//                 business logic into a scalable reality.
//               </p>
//               <Link href="/contact">
//                 <button className="hover:bg-lime-400 bg-white text-black cursor-pointer px-12 py-5 rounded-2xl font-black text-[13px] sm:text-lg transition-all flex items-center gap-3 mx-auto shadow-xl active:scale-95 group">
//                   Work With ZenThink
//                   <ArrowRight className="group-hover:translate-x-2 transition-transform" />
//                 </button>
//               </Link>
//             </div>

//           </section> */}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }
"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Layout,
  Cpu,
  Database,
  Lock,
  Terminal,
  RefreshCw,
  Cloud,
  Activity,
  Users,
} from "lucide-react";

import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/Footer";
import { ServiceDetails } from "@/app/utils/ServiceDetails";

// ================= ICON HELPER (UNCHANGED LOGIC) =================
const getGroupIcon = (label: string) => {
  const text = label.toLowerCase();
  if (text.includes("security") || text.includes("compliance"))
    return <Lock size={18} />;
  if (text.includes("data") || text.includes("analytics"))
    return <Database size={18} />;
  if (text.includes("customer") || text.includes("relationship"))
    return <Users size={18} />;
  if (text.includes("enterprise") || text.includes("operations"))
    return <Layout size={18} />;
  if (text.includes("cloud") || text.includes("saas"))
    return <Cloud size={18} />;
  if (text.includes("modernization") || text.includes("legacy"))
    return <RefreshCw size={18} />;
  if (text.includes("infrastructure") || text.includes("code"))
    return <Terminal size={18} />;
  if (text.includes("monitoring") || text.includes("logging"))
    return <Activity size={18} />;
  return <Cpu size={18} />;
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

  // ✅ SAFE IMAGE PICK (NO LOGIC BREAK)
  const heroImage = sectionData.image ;

  return (
    <div className="relative min-h-screen selection:bg-black selection:text-white">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-bl from-white via-[#fdfffa] to-[#f2fde4] -z-10" />

      <div className="relative z-0 flex flex-col min-h-screen">
        <Navbar />

        {/* ================= HERO ================= */}
        <section className="w-full py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-[32px] sm:text-[44px] lg:text-[60px] font-medium leading-[1.15]">
                {sectionData.title.split(" ").slice(0, 3).join(" ")}{" "}
                <span className="text-neutral-500">
                  {sectionData.title.split(" ").slice(3).join(" ")}
                </span>
              </h1>

              <p className="mt-5 text-neutral-600 text-[14px] sm:text-lg max-w-xl">
                {sectionData.overview}
              </p>
            </motion.div>

            {/* RIGHT – IMAGE (OPTIONAL) */}
            {heroImage && (
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative flex justify-center"
              >
                <div className="relative ">
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-lime-400/20 blur-3xl" />

                  <Image
                    src={heroImage}
                    alt={sectionData.title}
                    width={400}
                    height={100}
                    priority
                    className="relative z-10 object-contain rounded-2xl"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* ================= FEATURE CARDS (UNIQUE) ================= */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectionData.groups.map((group, gIdx) => (
              <motion.div
                key={gIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gIdx * 0.05 }}
                className="relative group rounded-2xl p-6 bg-white border border-neutral-200
                hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)]
                transition-all duration-300"
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-lime-400 to-transparent rounded-t-2xl" />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center mb-4
                group-hover:bg-black group-hover:text-white transition-colors"
                >
                  {getGroupIcon(group.label)}
                </div>

                <h3 className="text-lg font-semibold mb-4 text-black">
                  {group.label}
                </h3>

                <ul className="space-y-3">
                  {group.items.map((item, iIdx) => (
                    <li
                      key={iIdx}
                      className="flex items-start gap-3 text-sm text-neutral-700"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= INDUSTRIES ================= */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-[26px] sm:text-[36px] font-medium mb-4">
              Industries We Serve
            </h2>
            <p className="text-neutral-600 max-w-xl mx-auto mb-8">
              Tailored solutions for diverse business domains.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {sectionData.industries.map((ind, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-xl bg-white border border-neutral-200
                  text-sm font-semibold text-neutral-700
                  hover:bg-black hover:text-white transition-all"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
