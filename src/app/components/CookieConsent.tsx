"use client";

import React, { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Install lucide-react or use a simple svg

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the banner after a small delay when the page opens
  useEffect(() => {
    const hasConsented = localStorage.getItem("cookie-consent");
    if (!hasConsented) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
        >
          <div className="bg-white border border-neutral-200 rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute cursor-pointer top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Content Area */}
            <div className="flex-1 text-start">
              <div className="flex gap-1">
                {/* <Cookie className="w-5 h-6 mt-1  text-[#4A6741]" /> */}
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Cookie Consent
                </h3>
              </div>
              <p className="text-neutral-600 text-sm md:text-[15px] leading-relaxed">
                By clicking{" "}
                <span className="font-medium text-neutral-900 md:text-[16px]">
                  "Accept All Cookies"
                </span>
                , you agree to the storing of cookies on your device to enhance
                site navigation, analyze site usage, and assist in our marketing
                efforts.{" "}
                <Link
                  href="/privacy-policy"
                  className="text-lime-500 font-medium hover:underline"
                >
                  Privacy policy
                </Link>
              </p>
            </div>

            {/* Buttons Area */}
            <div className="flex flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={handleClose}
                className="flex-1 md:flex-none px-6 py-2.5 text-sm font-medium text-black border-1 border-black bg-white rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                Manage cookies
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-2.5 text-sm font-medium text-black border-1 border-black bg-white rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                Accept all
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
