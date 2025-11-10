"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden rounded-t-[1rem] text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(to right, #060606, #0e0a20, #3c0f6e), url('/footer-bg.webp')",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-16">
        {/* <div className="flex flex-wrap justify-between gap-1  lg:gap-20 md:ml-9">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-[250px] flex-1"
          >
            <p className="text-6xl md:text-8xl sm:text-[52px] font-semibold mb-3 ">
              InoVis
            </p>
            <p className="text-md md:text-lg sm:text-lg lg:text-lg mb-2 font-medium tracking-tight">
              Save time. Get Started Now.
            </p>
            <p className="text-gray-400 max-w-xs text-base leading-relaxed">
              Unleash the most advanced Agency and boost your productivity
            </p>

            <div className="mt-40 md:ml-0">
              <p className="text-lg font-semibold mb-4">Stay in the know</p>
              <div className="flex items-center gap-4">
                {[
                  { icon: <FaTwitter />, href: "#" },
                  { icon: <FaLinkedinIn />, href: "#" },
                  { icon: <FaYoutube />, href: "#" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.15 }}
                    href={item.href}
                    className="bg-white text-black p-3 rounded-full hover:bg-purple-600 hover:text-white transition-all"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="min-w-[150px] flex-1  md:ml-110 sm:ml-10"
          >
            <h4 className="font-semibold md:text-2xl mb-6">Company</h4>
            <ul className="space-y-6 text-gray-200 text-sm md:text-lg mb-6">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about-us" },
                { name: "Service", link: "/Service" },
                { name: "Blog", link: "/Blog" },
                { name: "Shop", link: "/shop" },
                { name: "Contact Us", link: "/Contact" },
              ].map((item, i) => (
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="min-w-[150px] flex-1 "
          >
            <h4 className="font-semibold md:text-2xl mb-4">Utilities</h4>
            <ul className="space-y-6 text-gray-200 text-sm md:text-lg">
              {[
                "Privacy & policy",
                "Style guide",
                "Changelog",
                "License",
                "404 page",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div> */}
        {/* Top Section */}
        <div className="grid grid-cols-3 sm:grid-cols-3  lg:grid-cols-3 gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <p className="text-5xl sm:text-6xl md:text-8xl font-semibold mb-3">
              InoVis
            </p>
            <p className="text-sm md:text-lg sm:text-lg mb-2 font-medium tracking-tight">
              Save time. Get Started Now.
            </p>
            <p className="text-gray-400 max-w-xs text-sm sm:text-base leading-relaxed">
              Unleash the most advanced Agency and boost your productivity
            </p>

            <div className="mt-10 sm:mt-20">
              <p className="text-lg font-semibold mb-4">Stay in the know</p>
              <div className="flex items-center gap-4">
                {[FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.15 }}
                    href="#"
                    className="bg-white text-black p-3 rounded-full hover:bg-purple-600 hover:text-white transition-all"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <div className="flex gap-20 ml-10 md:gap-30 md:ml-10 sm:gap-20 sm:ml-30 lg:gap-25 lg:ml-100">
            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=""
            >
              <h4 className="font-semibold text-lg sm:text-xl mb-6">Company</h4>
              <ul className="space-y-4 text-gray-200 text-sm sm:text-base">
                {[
                  "Home",
                  "About Us",
                  "Service",
                  "Blog",
                  "Shop",
                  "Contact Us",
                ].map((item, i) => (
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
            </motion.div>

            {/* Utilities */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className=""
            >
              <h4 className="font-semibold text-xl mb-6">Utilities</h4>
              <ul className="space-y-4 text-gray-200 text-sm sm:text-base">
                {[
                  "Privacy & policy",
                  "Style guide",
                  "Changelog",
                  "License",
                  "404 page",
                ].map((item, i) => (
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
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="min-w-[150px] flex-1"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white gap-4 text-center sm:text-left">
            <div>
              <p className="md:text-lg font-semibold">All Rights Reserved.</p>
              <p className="text-lg">
                Designed by{" "}
                <span className="text-white md:text-xl font-bold">
                  ideapeel | <span>{"   "}</span>
                </span>{" "}
                Powered by{" "}
                <span className="text-white md:text-xl font-bold">
                  {" "}
                  Webflow
                </span>
              </p>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookies Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
