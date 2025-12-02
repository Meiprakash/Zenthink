"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const companies = [
  { name: "Home", link: "#" },
  { name: "About us", link: "/about-us" },
  { name: "Service", link: "/Service" },
  { name: "Blog", link: "/Blog" },
  { name: "Shop", link: "#" },
  { name: "Contact Us", link: "/Contact" },
];

const utilities = [
  "Privacy & policy",
  "Style guide",
  "Changelog",
  "License",
  "404 page",
];

export default function Footer() {
  return (
    <footer className="relative rounded-t-[2rem] bg-black text-white bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-1 py-12 md:py-16">
        {/* TOP SECTION */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 md:gap-5">
          {/* INOVIS (COLUMN 1) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Image
              src="/zenthink.png"
              alt="ZenThink Logo"
              width={1600}
              height={900}
              className="w-full max-w-[280px] md:max-w-[540px] md:-ml-2 h-auto mx-auto md:mx-0"
            />

            <p className="text-base md:text-lg font-medium mb-2 mt-6 md:mt-0 text-center md:text-left">
              Save time. Get Started Now.
            </p>

            <p className="text-neutral-300 max-w-xs text-sm sm:text-base leading-relaxed text-center md:text-left mx-auto md:mx-0">
              Unleash the most advanced Agency and boost your productivity
            </p>

            <div className="mt-8 md:mt-10 sm:mt-14">
              <p className="text-lg font-semibold mb-4 text-center md:text-left">
                Stay in the know
              </p>

              <div className="flex items-center justify-center md:justify-start gap-4">
                {[FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="bg-white text-black p-3 rounded-full hover:bg-lime-500 hover:text-white hover:scale-110 transition-all duration-300 ease-in-out"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* COMPANY & UTILITIES - Desktop View */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden sm:flex sm:col-span-2 lg:col-span-2 justify-around"
          >
            {/* COMPANY (COLUMN 2 - MD/LG) */}
            <div className="md:ml-75">
              <h4 className="font-semibold text-lg mb-6">Company</h4>
              <ul className="md:space-y-7 sm:space-y-4 text-neutral-300 text-sm sm:text-lg">
                {companies.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.link}
                      className="hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* UTILITIES (COLUMN 3 - MD/LG) */}
            <div className="md:ml-40">
              <h4 className="font-semibold text-lg mb-6">Utilities</h4>
              <ul className="md:space-y-7 sm:space-y-4 text-neutral-300 text-sm sm:text-lg">
                {utilities.map((item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* MOBILE VIEW — COMPANY + UTILITIES in 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:hidden"
          >
            <div className="grid grid-cols-2">
              {/* COMPANY MOBILE ONLY */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-center">Company</h4>
                <ul className="space-y-3 text-neutral-300 text-sm text-center">
                  {companies.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.link}
                        className="hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* UTILITIES MOBILE ONLY */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-center">Utilities</h4>
                <ul className="space-y-3 text-neutral-300 text-sm text-center">
                  {utilities.map((item, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 md:my-10 border-t border-neutral-700"></div>

        {/* BOTTOM SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-left text-sm">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-base md:text-md font-normal">
                All Rights Reserved.
              </p>

              <p className="text-xs md:text-[15px] mt-1">
                Designed by{" "}
                <span className="font-semibold text-sm sm:text-[17px]">
                  Zenthink
                </span>{" "}
                <span className="px-2 sm:px-3">|</span> Powered by{" "}
                <span className="font-semibold text-sm sm:text-[17px]">
                  Zenthink
                </span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-6 text-xs sm:text-base">
              <Link href="#" className="hover:text-white transition-colors whitespace-nowrap">
                Privacy policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors whitespace-nowrap">
                Cookies policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}