"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { industriesData } from "@/app/utils/industriesData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const pathname = usePathname();
  const router = useRouter();

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="w-full "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-7">
        {/* LOGO */}
        <Link href="/">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Image
              src="/ZenThink_Icon.png"
              alt="Logo"
              width={110}
              height={50}
            />
          </motion.div>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {/* STATIC NAV LINKS */}
          <li>
            <Link href="/" className="hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-black">
              About
            </Link>
          </li>
          <li>
            <Link href="/Service" className="hover:text-black">
              Service
            </Link>
          </li>

          {/* INDUSTRIES DROPDOWN */}
          <li className="relative group">
            <span
              className="cursor-pointer hover:text-black"
              onMouseEnter={() => setIsIndustriesOpen(true)}
            >
              Industries
            </span>

            {isIndustriesOpen && (
              <div
                className="absolute left-0 top-8 bg-white border shadow-xl rounded-xl p-6 w-[700px] flex z-50"
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
                          ? "text-black font-semibold border-l-2 border-black pl-2"
                          : "text-gray-600"
                      } hover:text-black`}
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
                      href={`/Industries/${industriesData[selectedIndustry].slug}/${service.slug}`}
                      className="border p-3 rounded-md text-sm hover:shadow-md"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <Link href="/Blog" className="hover:text-black">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-black">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <button className="border border-black text-black px-5 py-2 rounded-lg hover:bg-black hover:text-white">
            Let’s Talk
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 hover:text-black"
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
            className="md:hidden bg-black text-white rounded-2xl mx-6 mt-2"
          >
            <ul className="flex flex-col ml-10 m-6 py-4 space-y-3">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about-us" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link href="/Service" onClick={() => setMenuOpen(false)}>
                Service
              </Link>

              <details>
                <summary>Industries</summary>
                <div className="ml-4 mt-2 space-y-2 text-gray-300">
                  {industriesData.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`/Industries/${ind.slug}`}
                      className="block"
                    >
                      {ind.title}
                    </Link>
                  ))}
                </div>
              </details>

              <Link href="/Blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/Contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
