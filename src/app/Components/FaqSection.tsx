"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Webflow and why is it the best website builder?",
    answer:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    question: "How can I measure the success of marketing campaigns?",
    answer:
      "We provide analytics and insights to track campaign success and optimize performance for the best ROI.",
  },
  {
    question: "What is included in your branding services?",
    answer:
      "Our branding services include logo design, brand strategy, tone of voice, and full identity systems.",
  },
  {
    question: "Do you offer customized marketing solutions?",
    answer:
      "Yes! We tailor all marketing strategies to your brand’s goals and target audience.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-0 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Header Section */}
      <motion.div
        className="max-w-6xl mx-auto text-center lg:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="flex justify-center lg:justify-start items-center text-lg text-black mb-2 tracking-wide">
          FAQ{" "}
          <span>
            <Image
              src="/badge.jpg"
              className="w-5 ml-2 mt-1"
              alt="badge"
              width={16}
              height={16}
            />
          </span>
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 leading-tight text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl  mx-auto lg:mx-0">
          Our services help you create digital products. Stay ahead of the curve
          with our latest insights, tips, and industry trends.
        </p>
      </motion.div>

      {/* FAQ Grid Section */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
        {/* Image Section */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-sm">
            <Image
              src="/faq.jpg"
              alt="FAQ"
              width={400}
              height={400}
              className="rounded-[25px] w-full h-110 object-cover shadow-sm"
            />

            {/* Floating Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white shadow-xl rounded-2xl p-5 border">
              <h3 className="text-lg text-black mb-2 ">Need More Info?</h3>
              <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                Didn’t find what you were looking for? Let’s chat and solve it
                together!
              </p>
              <button className="relative overflow-hidden text-sm font-medium px-4 py-3 rounded-lg text-white bg-black group">
                <span className="relative z-10">See All Work</span>
                <span className="absolute inset-0 rounded-lg bg-gradient-to-tr bg-blue-800 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Accordion Section */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full text-left text-lg font-medium text-black"
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-900" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-900" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 mt-2 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
