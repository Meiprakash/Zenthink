"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { industriesData } from "@/app/utils/industriesData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const pathname = usePathname();

  const isActive = (path: unknown) => pathname === path;
  const isIndustriesActive = pathname.startsWith("/industries");

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="w-full"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between pr-3 py-5 md:px-6 md:py-7">
        {/* LOGO */}
        <Link href="/">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Image
              src="/ZenThink_Icon.png"
              alt="Logo"
              width={140}
              height={60}
            />
          </motion.div>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex space-x-8 text-black/60 font-normal transition-all duration-300 ease-in-out">
          {/* STATIC NAV LINKS */}
          <li>
            <Link 
              href="/" 
              className={`hover:text-lime-500 ${isActive("/") ? "text-black" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`hover:text-lime-500 ${isActive("/about") ? "text-black" : ""}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/service" 
              className={`hover:text-lime-500 ${isActive("/service") ? "text-black" : ""}`}
            >
              Service
            </Link>
          </li>

          {/* INDUSTRIES DROPDOWN */}
          <li className="relative group">
            <span
              className={`cursor-pointer hover:text-lime-500 ${isIndustriesActive ? "text-black" : ""}`}
              onMouseEnter={() => setIsIndustriesOpen(true)}
            >
              Industries
            </span>

            {isIndustriesOpen && (
              <div
                className="absolute -left-24 top-14 bg-white border shadow-md rounded-xl p-6 w-[700px] flex z-50"
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                {/* LEFT SIDEBAR (Industry List) */}
                <div className="w-1/3 border-r pr-4 space-y-2">
                  {industriesData.map((industry, index) => (
                    <p
                      key={industry.title}
                      onMouseEnter={() => setSelectedIndustry(index)}
                      className={`py-2 cursor-pointer transition-all duration-200 ${
                        selectedIndustry === index
                          ? "text-lime-500 border-l-2 border-black pl-2"
                          : "text-neutral-600"
                      } hover:text-lime-500 hover:font-medium`}
                    >
                      {industry.title}
                    </p>
                  ))}
                </div>

                {/* RIGHT SIDE SERVICES */}
                <div className="w-2/3 pl-6 grid grid-cols-2 gap-4 max-h-[220px] overflow-y-auto">
                  {industriesData[selectedIndustry].services.map((service) => (
                    <Link
                      key={service.name}
                      href={`/industries/${industriesData[selectedIndustry].slug}/${service.slug}`}
                      className="border p-3 rounded-md text-md text-neutral-700 font-medium hover:border-lime-500 hover:text-black hover:bg-neutral-50 block"
                      onClick={() => setIsIndustriesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <Link 
              href="/blog" 
              className={`hover:text-lime-500 ${isActive("/blog") ? "text-black" : ""}`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`hover:text-lime-500 ${isActive("/contact") ? "text-black" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="cursor-pointer border border-black text-black font-medium px-5 py-2 rounded-lg hover:bg-black hover:text-white transform transition-all duration-300 ease-in-out">
              Let’s Talk
            </button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-neutral-800 hover:text-black"
        >
          {menuOpen ? <X size={26} /> : <Menu size={29} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black text-white rounded-2xl mx-3 mt-0 overflow-hidden"
          >
            <div className="flex flex-col ml-10 mt-6 py-4 space-y-3">
              <Link 
                href="/" 
                onClick={() => setMenuOpen(false)}
                className={`${isActive("/") ? "text-lime-500 font-semibold" : ""} hover:text-lime-500 transition-colors`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                onClick={() => setMenuOpen(false)}
                className={`${isActive("/about") ? "text-lime-500 font-semibold" : ""} hover:text-lime-500 transition-colors`}
              >
                About
              </Link>
              <Link 
                href="/service" 
                onClick={() => setMenuOpen(false)}
                className={`${isActive("/service") ? "text-lime-500 font-semibold" : ""} hover:text-lime-500 transition-colors`}
              >
                Service
              </Link>

              {/* MOBILE INDUSTRIES DROPDOWN - MATCHING DESKTOP LINKS */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`${isIndustriesActive ? "text-lime-500 font-semibold" : ""}`}>
                    Industries
                  </span>
                </div>
                
                {/* Industry List with Services - Similar to Desktop */}
                <div className="ml-4 space-y-3 text-neutral-300">
                  {industriesData.map((industry) => (
                    <div key={industry.slug} className="space-y-2">
                      <div className="text-sm font-medium text-white/80 border-l-2 border-lime-500 pl-2 py-1">
                        {industry.title}
                      </div>
                      <div className="ml-4 space-y-2">
                        {industry.services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/industries/${industry.slug}/${service.slug}`}
                            onClick={() => setMenuOpen(false)}
                            className="block text-sm text-neutral-400 hover:text-lime-500 transition-colors py-1"
                          >
                            • {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                href="/blog" 
                onClick={() => setMenuOpen(false)}
                className={`${isActive("/blog") ? "text-lime-500 font-semibold" : ""} hover:text-lime-500 transition-colors`}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setMenuOpen(false)}
                className={`${isActive("/contact") ? "text-lime-500 font-semibold" : ""} hover:text-lime-500 transition-colors`}
              >
                Contact
              </Link>
            </div>

            {/* MOBILE CTA BUTTON */}
            <div className="px-10 pb-6 pt-4">
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                <button className="w-full cursor-pointer border border-white/30 text-lime-500 font-medium px-5 py-2.5 rounded-lg bg-white hover:text-black transform transition-all duration-300 ease-in-out">
                  Let’s Talk
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}