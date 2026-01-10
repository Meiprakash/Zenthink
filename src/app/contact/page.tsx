"use client";

import { useState } from "react";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import ConnectSection from "../components/ConnectUs";
import Footer from "../components/Footer";



export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    url: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 

  // Sign message before submission
 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();
   setLoading(true);

   try {
     const res = await fetch("/api/contact", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(form),
     });

     if (!res.ok) {
       throw new Error("Failed");
     }

     setForm({
       name: "",
       phone: "",
       email: "",
       url: "",
       message: "",
     });

     setIsSubmitted(true);
   } catch (error) {
     alert("Something went wrong. Please try again.");
   } finally {
     setLoading(false);
   }
 };



  return (
    <div className="relative min-h-screen">
      {/* Fixed background gradient */}
      <div className="fixed inset-0 bg-gradient-to-bl from-[#ffffff] via-[#ffffff] to-[#f2fde4] -z-10" />

      {/* Content */}
      <div className="relative z-0">
        <Navbar />

        {/* HERO SECTION */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px", amount: 0.1 }}
          className="w-full flex flex-col lg:flex-row items-start justify-between px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-30 py-12 sm:py-16 md:py-20 lg:py-24"
        >
          <motion.div
            variants={item}
            className="flex-1 max-w-2xl mb-6 sm:mb-8 md:mb-10 lg:mb-0"
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[28px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium leading-[1.1] sm:leading-[1.15] lg:leading-light text-black"
            >
              Create your <br />{" "}
              <span className="text-neutral-500">Virtual</span> IT Department
            </motion.h1>
          </motion.div>

          <motion.div
            variants={item}
            className="flex-1 max-w-md lg:max-w-lg lg:mt-7 text-neutral-600 text-sm xs:text-base sm:text-lg leading-relaxed lg:pl-4"
          >
            Our services help you create digital products and solve your
            problems objectively, with strategy, technology, and analysis.
          </motion.div>
        </motion.section>

        {/* CONTACT FORM */}
        <div className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 md:mb-10">
          <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-10"
          >
            <motion.div
              variants={item}
              className="flex-1 bg-white shadow-sm rounded-2xl lg:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-center w-full py-8 sm:py-10 md:py-12"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 mb-3 sm:mb-4">
                    Thank You!
                  </h2>
                  <p className="text-neutral-600 text-base sm:text-lg md:text-xl">
                    Your message has been signed and submitted successfully.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h2 className="mb-6 sm:mb-8 text-[24px] xs:text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-medium text-neutral-900 leading-[1.2] sm:leading-tight tracking-tight">
                    Contact us
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6"
                  >
                    <div>
                      <label className="block text-neutral-800 mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Full Name"
                        className="w-full bg-neutral-100 text-black rounded-lg p-2.5 sm:p-3 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-neutral-800 mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                        className="w-full bg-neutral-100 text-black rounded-lg p-2.5 sm:p-3 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-neutral-800 mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email Address"
                        className="w-full bg-neutral-100 text-black rounded-lg p-2.5 sm:p-3 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-neutral-800 mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                        Existing Project URL
                      </label>
                      <input
                        type="text"
                        name="url"
                        value={form.url}
                        onChange={handleChange}
                        placeholder="Your Project URL"
                        className="w-full bg-neutral-100 text-black rounded-lg p-2.5 sm:p-3 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-neutral-800 mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full bg-neutral-100 text-black resize-none rounded-lg p-2.5 sm:p-3 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                      />
                    </div>

                    <div className="md:col-span-2 mt-1 sm:mt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black text-white font-medium py-3.5 rounded-lg hover:bg-lime-500 transition text-sm sm:text-base"
                      >
                        {loading ? "Signing Message..." : "Submit Form"}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>

            {/* RIGHT SIDE CONTACT CARDS */}
            <motion.div
              variants={item}
              className="flex flex-col gap-4 xs:gap-5 sm:gap-6 lg:w-1/3 w-full"
            >
              <div className="bg-white p-4 xs:p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm transition">
                <div className="bg-neutral-100 w-10 h-10 xs:w-12 xs:h-12 rounded-full flex items-center justify-center mb-3 xs:mb-4">
                  <Image
                    src="/mail.webp"
                    alt="Email icon"
                    width={24}
                    height={16}
                    className="min-w-6 min-h-4"
                  />
                </div>
                <h3 className="text-base xs:text-lg font-semibold mb-1 text-neutral-900">
                  Email Us
                </h3>
                <p className="text-neutral-700 text-sm xs:text-base">
                  info@zenthink.in
                </p>
              </div>

              <div className="bg-white p-4 xs:p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm transition">
                <div className="bg-neutral-100 w-10 h-10 xs:w-12 xs:h-12 rounded-full flex items-center justify-center mb-3 xs:mb-4">
                  <Image
                    src="/marker.webp"
                    alt="Location icon"
                    width={24}
                    height={16}
                    className="min-w-6 min-h-4"
                  />
                </div>
                <h3 className="text-base xs:text-lg font-semibold mb-1 text-neutral-900">
                  Location
                </h3>
                <p className="text-neutral-700 text-sm xs:text-base flex items-center gap-1 xs:gap-2">
                  Headquarters:
                  Registered Office: 132, SOUTHBAZZAR,KOTHEER
                  STREET, POO KADAI LANE Tiruchengodu Namakkal Tamil Nadu India
                  637211<span></span>
                </p>
              </div>

              <div className="bg-white p-4 xs:p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm transition">
                <div className="bg-neutral-100 w-10 h-10 xs:w-12 xs:h-12 rounded-full flex items-center justify-center mb-3 xs:mb-4">
                  <Image
                    src="/active-call.webp"
                    alt="Phone icon"
                    width={24}
                    height={16}
                    className="min-w-6 min-h-4 rotate-90"
                  />
                </div>
                <h3 className="text-base xs:text-lg font-semibold mb-1 text-neutral-900">
                  Call Us
                </h3>
                <p className="text-neutral-700 text-sm xs:text-base">
                  +91 9944500207
                </p>
              </div>
            </motion.div>
          </motion.section>
        </div>

        <ConnectSection />
        <Footer />
      </div>
    </div>
  );
}