"use client";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "../Components/Navbar/Navbar";
import ConnectSection from "../Components/ConnectUs";
import Footer from "../Components/Footer";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <div className="bg-[radial-gradient(circle_at_center,white_0%,#EAE4F9_60%,#f9f9f9_100%)] min-h-screen">
      <Navbar />

      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full flex  md:flex-row items-start justify-between px-8 md:px-30 py-24 md:py-20 bg-[radial-gradient(circle_at_center,white_0%,#EAE4F9_60%,#f9f9f9_100%)]"
      >
        {/* Left Side — Heading */}
        <motion.div variants={item} className="flex-1 max-w-2xl mb-10 md:mb-0">
          <h1 className="text-gray-900 font-semibold text-4xl sm:text-4xl md:text-6xl leading-tight">
            We Create <br /> Amazing Project
          </h1>
        </motion.div>

        {/* Right Side — Description */}
        <motion.div
          variants={item}
          className="flex-1 max-w-md md:mt-7 text-gray-600 sm:text-md md:text-lg leading-relaxed"
        >
          Our services help you create digital products and solve your problems
          objectively, with strategy, technology, and analysis.
        </motion.div>
      </motion.section>
      <div className="bg-[radial-gradient(circle_at_center,white_0%,#EAE4F9_60%,#f9f9f9_100%)] py-7 px-6 md:px-20">
        {/* ---- Contact Section ---- */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between gap-10"
        >
          {/* ---------- LEFT SIDE (Form) ---------- */}
          <motion.div
            variants={item}
            className="flex-1 bg-white shadow-sm rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
              Contact us
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-gray-800 mb-2 font-medium">
                  Full Name
                </label>
                <input
                  suppressHydrationWarning
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full bg-gray-100 text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-gray-800 mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  suppressHydrationWarning
                  type="text"
                  placeholder="Your Phone Number"
                  className="w-full bg-gray-100 text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-gray-800 mb-2 font-medium">
                  Email Address
                </label>
                <input
                  suppressHydrationWarning
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full bg-gray-100 text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Project URL */}
              <div>
                <label className="block text-gray-800 mb-2 font-medium">
                  Existing Project URL
                </label>
                <input
                  suppressHydrationWarning
                  type="text"
                  placeholder="Your Project URL"
                  className="w-full bg-gray-100 text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-gray-800 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  suppressHydrationWarning
                  rows={5}
                  placeholder="Your Message"
                  className="w-full bg-gray-100 text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full bg-black text-white font-medium py-3 rounded-lg hover:bg-gray-900 transition"
                >
                  Contact Us
                </button>
              </div>
            </form>
          </motion.div>

          {/* ---------- RIGHT SIDE (Cards) ---------- */}
          <motion.div
            variants={item}
            className="flex flex-col gap-6 md:w-1/3 w-full"
          >
            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {/* <Mail className="w-6 h-6 text-black" /> */}
                <Image src="/mail.webp" alt="" width={40} height={26} />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">
                Email Us
              </h3>
              <p className="text-gray-700">ideapeel@gmail.com</p>
            </div>

            {/* Drop in Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {/* <MapPin className="w-6 h-6 text-black" /> */}
                <Image src="/marker.webp" alt="" width={40} height={26} />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">
                Drop in us
              </h3>
              <p className="text-gray-700 flex items-center gap-2">
                ideapeel@gmail.com <span>→</span>
              </p>
            </div>

            {/* Call Us Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {/* <Phone className="w-6 h-6 text-black" /> */}
                <Image src="/active-call.webp" alt="" width={40} height={26} />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">
                Call Us
              </h3>
              <p className="text-gray-700">+1 800 778 884</p>
            </div>
          </motion.div>
        </motion.section>
      </div>
      <ConnectSection />
      <Footer />
    </div>
  );
}
