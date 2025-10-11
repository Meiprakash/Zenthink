"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-tr from-black via-[#0b001f] to-[#3c0f6e] text-white rounded-t-[2rem]">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col-2 md:flex-row md:justify-end md:items-start gap-12">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 md:ml-30 "
          >
            <div className=" md:p-6 ">
              <h2 className="text-9xl ml-0 mb-1">InoVis</h2>
              <p className="text-whitex text-xl mb-2 ">Save time.Get Started Now
              </p>
              <p className="text-gray-400 max-w-xs">
                Unleash the most advanced Agency and boost your productivity
              </p>
            </div>

            <div className="mt-28">
              <p className="text-lg font-semibold mb-3">Stay in the know</p>
              <div className="flex items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="bg-white text-black p-2 rounded-full hover:bg-purple-600 hover:text-white transition-all"
                >
                  <FaTwitter />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="bg-white text-black p-2 rounded-full hover:bg-purple-600 hover:text-white transition-all"
                >
                  <FaLinkedinIn />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="bg-white text-black p-2 rounded-full hover:bg-purple-600 hover:text-white transition-all"
                >
                  <FaYoutube />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Center Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex-1 md:ml-120"
          >
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About us</Link>
              </li>
              <li>
                <Link href="#">Service</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Shop</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex-1"
          >
            <h4 className="font-semibold text-lg mb-4">Utilities</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#">Privacy & policy</Link>
              </li>
              <li>
                <Link href="#">Style guide</Link>
              </li>
              <li>
                <Link href="#">Changelog</Link>
              </li>
              <li>
                <Link href="#">License</Link>
              </li>
              <li>
                <Link href="#">404 page</Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>
            © All Rights Reserved. Designed by{" "}
            <span className="text-white font-medium">ideapeel</span> | Powered
            by <span className="text-white font-medium">Webflow</span>
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
