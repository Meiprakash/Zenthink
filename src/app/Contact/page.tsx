"use client";

import { useState } from "react";
import { motion, easeOut } from "framer-motion";
import { ethers } from "ethers";
import Image from "next/image";
import Navbar from "../Components/Navbar/Navbar";
import ConnectSection from "../Components/ConnectUs";
import Footer from "../Components/Footer";

declare global {
  interface Window {
    ethereum?: ethers.Eip1193Provider;
  }
}

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

  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //  Connect to MetaMask
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask first.");
        return;
      }
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setWalletAddress(accounts[0]);
    } catch (err) {
      console.error("Wallet connection error:", err);
    }
  };

  //  Sign message before submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!walletAddress) {
        alert("Please connect your wallet first.");
        setLoading(false);
        return;
      }

      if (!window.ethereum) {
        alert("MetaMask is not available.");
        setLoading(false);
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const message = `I confirm this contact form submission.\nName: ${form.name}\nEmail: ${form.email}`;
      const signature = await signer.signMessage(message);

      console.log("Form Data:", form);
      console.log("Signature:", signature);

      // After signing, reset form and show success
      setForm({ name: "", phone: "", email: "", url: "", message: "" });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error during signing:", err);
      alert("Something went wrong while signing the message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[linear-gradient(180deg,#fbfff6_0%,#f5ffe8_100%)] min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full flex flex-col sm:flex-row items-start justify-between px-8 md:px-30 py-24 md:py-20"
      >
        <motion.div
          variants={item}
          className="flex-1 max-w-2xl mb-4 sm:mb-10 md:mb-0"
        >
          <h1 className="text-gray-900 font-semibold text-2xl sm:text-4xl md:text-6xl leading-tight">
            We Create <br /> Amazing Project
          </h1>
        </motion.div>

        <motion.div
          variants={item}
          className="flex-1 max-w-md md:mt-7 text-gray-600 text-sm sm:text-md md:text-lg leading-relaxed"
        >
          Our services help you create digital products and solve your problems
          objectively, with strategy, technology, and analysis.
        </motion.div>
      </motion.section>

      {/* CONTACT FORM */}
      <div className="bg-[linear-gradient(180deg,#fbfff6_0%,#f5ffe8_100%)] py-7 px-6 md:px-20">
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between gap-10"
        >
          <motion.div
            variants={item}
            className="flex-1 bg-white shadow-sm rounded-3xl p-8 md:p-12"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center w-full py-12"
              >
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  Thank You!
                </h2>
                <p className="text-gray-600 text-lg">
                  Your message has been signed and submitted successfully.
                </p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
                  Contact us
                </h2>

                <button
                  onClick={connectWallet}
                  type="button"
                  className="mb-6 w-full bg-lime-500 text-white font-medium py-3 rounded-lg hover:bg-lime-700 transition"
                >
                  {walletAddress
                    ? `Connected: ${walletAddress.slice(
                        0,
                        6
                      )}...${walletAddress.slice(-4)}`
                    : "Connect Wallet"}
                </button>

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div>
                    <label className="block text-gray-800 mb-2 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="w-full bg-gray-100 text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-800 mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                      className="w-full bg-gray-100 text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-800 mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email Address"
                      className="w-full bg-gray-100 text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-800 mb-2 font-medium">
                      Existing Project URL
                    </label>
                    <input
                      type="text"
                      name="url"
                      value={form.url}
                      onChange={handleChange}
                      placeholder="Your Project URL"
                      className="w-full bg-gray-100 text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-gray-800 mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="w-full bg-gray-100 text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div className="md:col-span-2 mt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-black text-white font-medium py-3 rounded-lg hover:bg-lime-500 transition"
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
            className="flex flex-col gap-6 md:w-1/3 w-full"
          >
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Image src="/mail.webp" alt="" width={40} height={26} />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">
                Email Us
              </h3>
              <p className="text-gray-700">ideapeel@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Image src="/marker.webp" alt="" width={40} height={26} />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">
                Drop in us
              </h3>
              <p className="text-gray-700 flex items-center gap-2">
                ideapeel@gmail.com <span>→</span>
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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
