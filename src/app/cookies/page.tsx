"use client"
import React from "react";
import {
  Cookie,
  ShieldCheck,
  BarChart3,
  Settings2,
  Target,
  Clock,
  MousePointerClick,
  ExternalLink,
  Info,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

const CookiesPolicy = () => {
  const cookieCategories = [
    {
      id: "necessary",
      title: "Strictly Necessary",
      status: "Mandatory",
      icon: <Lock className="w-5 h-5" />,
      description:
        "Essential for the website to function. Includes page navigation, secure forms, and session management. These cannot be disabled.",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      id: "performance",
      title: "Performance & Analytics",
      status: "Consent Required",
      icon: <BarChart3 className="w-5 h-5" />,
      description:
        "Helps us understand how visitors interact with the site by collecting anonymous data on pages visited and traffic sources.",
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "functional",
      title: "Functional Cookies",
      status: "Optional",
      icon: <Settings2 className="w-5 h-5" />,
      description:
        "Remembers your choices like language preferences and region settings to provide a more personalized experience.",
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: "targeting",
      title: "Targeting & Marketing",
      status: "Optional",
      icon: <Target className="w-5 h-5" />,
      description:
        "Used to measure campaign effectiveness and deliver relevant content based on your professional interests.",
      color: "bg-amber-100 text-amber-700",
    },
  ];

    return (
        <div>
            <Navbar/>
        <div className="min-h-screen bg-[#F8FAF5] text-[#1A1A1A] font-sans pb-20">
          {/* Hero Section */}
          <header className="pt-20 pb-12 px-6 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-[#E9F3E1] p-4 rounded-full">
                  <Cookie className="w-12 h-12 text-[#4A6741]" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Cookies Policy
              </h1>
              <p className="text-[#555] max-w-2xl mx-auto text-lg leading-relaxed">
                We use cookies to ensure a secure, smooth, and personalized
                browsing experience. Effective Date:{" "}
                <span className="font-semibold text-[#4A6741]">
                  01 Jan 2026
                </span>
              </p>
            </motion.div>
          </header>

          <main className="max-w-6xl mx-auto px-6">
            {/* Intro Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <section className="bg-white p-8 rounded-[32px] border border-[#E2EDDB] shadow-sm">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-[#4A6741]" /> What Are Cookies?
                </h2>
                <p className="text-[#666] text-sm leading-relaxed">
                  Cookies are small text files stored on your device when you
                  visit a website. They help us remember your actions and
                  preferences over time, enabling a smoother and more secure
                  browsing experience.
                </p>
              </section>

              <section className="bg-[#F1F8EC] p-8 rounded-[32px] border border-[#E2EDDB]">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#4A6741]" /> Why We Use
                  Them
                </h2>
                <ul className="text-sm text-[#555] space-y-2">
                  <li className="flex items-center gap-2">
                    • Maintain website security
                  </li>
                  <li className="flex items-center gap-2">
                    • Remember user preferences
                  </li>
                  <li className="flex items-center gap-2">
                    • Analyze and improve performance
                  </li>
                  <li className="flex items-center gap-2">
                    • Prevent fraud and abuse
                  </li>
                </ul>
              </section>
            </div>

            {/* Categories Grid */}
            <h2 className="text-2xl font-bold mb-8 px-2">Cookie Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 ">
              {cookieCategories.map((cat, index) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-[32px] border  hover:border-lime-600 transition-all shadow-sm"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-2xl ${cat.color}`}>
                      {cat.icon}
                    </div>
                    <span
                      className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full ${cat.color}`}
                    >
                      {cat.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{cat.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Management Section */}
            <section className="bg-[#1A1A1A] text-white rounded-[40px] p-8 md:p-16 mb-16">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <MousePointerClick className="w-8 h-8 text-[#E9F3E1]" />
                  <h2 className="text-2xl md:text-3xl font-bold">
                    How to Control Cookies
                  </h2>
                </div>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  You can manage your preferences through your browser settings.
                  Please note that disabling strictly necessary cookies may
                  affect website functionality.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Chrome", "Firefox", "Edge", "Safari"].map((browser) => (
                    <div
                      key={browser}
                      className="border border-white/10 hover:border-lime-400 hover:text-lime-400 rounded-2xl p-4 text-center  transition-colors cursor-default"
                    >
                      <span className="text-sm font-medium ">{browser}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer Info */}
            <footer className="text-center space-y-6">
              <div className="flex justify-center items-center gap-8 text-[#999] text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Session & Persistent Cookies</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Secure Processing</span>
                </div>
              </div>

              <div className="pt-10 border-t border-[#E2EDDB]">
                <p className="text-[#666] mb-4">
                  Questions about our cookie usage?
                </p>
                <a
                  href="mailto:info@zenthink.in"
                  className="inline-flex items-center gap-2 bg-black text-white hover:text-black px-8 py-3 rounded-full hover:bg-lime-400 transition-colors shadow-md"
                >
                  Contact Support <ExternalLink className="w-4 h-4" />
                </a>
                <p className="mt-8 text-xs text-[#999] uppercase tracking-widest">
                  ZenThink Technologies • Established May 2025
                </p>
              </div>
            </footer>
          </main>
            </div>
            <Footer/>
      </div>
    );
};

export default CookiesPolicy;
