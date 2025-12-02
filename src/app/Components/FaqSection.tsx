"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import {  easeOut } from "framer-motion";


  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: easeOut },
    },
  };
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
  {
    question: "How quickly can deliver design for our business?",
    answer:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    question: "Offer customized offer solution?",
    answer:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-10 px-4 sm:px-8 lg:px-32 overflow-hidden">
      {/* Header Section */}
      <motion.div className="" variants={fadeUp}>
        <p className="text-md text-neutral-900 mb-3 flex items-center gap-2">
          FAQ{" "}
          <span className="">
            <Image
              src="/badge-icon.webp"
              alt="badge"
              width={16}
              height={16}
              className="w-4 "
            />
          </span>
        </p>

        <div className="flex flex-col md:flex-row items-end justify-between">
          {/* Left: Heading */}
          <div>
            <h2 className="text-[20px] sm:text-2xl md:text-4xl lg:text-[44px] font-medium text-neutral-900 leading-tight tracking-tight">
              Frequently Asked <br/> Questions
            </h2>
          </div>

          {/* Right: Description */}
            <p className="w-[50%] text-neutral-600 text-[12px] md:text-[16px] sm:text-[15px] md:text-start leading-relaxed">
              Our services help you create digital products. Stay ahead of the
              curve with our latest insights, tips, and industry trends.
            </p>
        </div>
      </motion.div>

      {/* FAQ Grid Section */}
      <div className="max-w-9xl mx-auto sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-0 items-start">
        {/* Image Section */}
        <motion.div
          className=""
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="hidden sm:block relative h-[530px] w-auto max-w-lg">
            <Image
              src="/faq.jpg"
              alt="FAQ"
              width={1200} 
              height={530} 
              className="rounded-[25px] w-[1200px] h-[530px] object-cover"
            />

            {/* Floating Card */}
            <div className="absolute  bottom-4 left-4 right-4 bg-white/50 backdrop-blur-sm shadow-xl rounded-2xl p-5 border">
              <h3 className="text-3xl font-medium text-black mb-2 ">Need More Info?</h3>
              <p className="text-neutral-700 text-md mb-3 leading-relaxed">
                Didn’t find what you were looking for? Let’s chat and solve it
                together!
              </p>
              <Link href="/Service">
                <button className="relative overflow-hidden text-md font-medium px-6 py-3 rounded-lg text-white bg-black group cursor-pointer">
                  <span className="relative z-10">See All Work</span>
                  <span className="absolute inset-0 rounded-lg  bg-lime-500 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Accordion Section */}
        <motion.div
          className=" w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-neutral-200 py-5 px-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full text-left text-[14px] sm:text-xl font-medium text-black transform transition-all duration-500 ease-linear"
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus className="w-7 h-7 text-neutral-900 transform transition-all duration-500 ease-linear" />
                ) : (
                  <Plus className="w-7 h-7 text-neutral-900 transform transition-all duration-500 ease-linear" />
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
                    <p className="text-neutral-600 mt-5 text-[12px] sm:text-[16px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
        <motion.div
          className=" flex justify-center mr-10 pb-9 pl-2 w-100 ml-6 mt-5 "
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="sm:hidden items-center mr-20 relative h-[420px] w-[300px]">
            <Image
              src="/faq.jpg"
              alt="FAQ"
              fill
              className="rounded-[25px] object-cover"
            />
            {/* Floating Card */}
            <div className="absolute  bottom-4 left-4 right-4 bg-white shadow-xl rounded-2xl p-3 border">
              <h3 className="text-lg text-black mb-2 ">Need More Info?</h3>
              <p className="text-neutral-700 text-sm mb-3 leading-relaxed">
                Didn’t find what you were looking for? Let’s chat and solve it
                together!
              </p>
              <Link href="/Service">
                <button className="relative overflow-hidden text-md font-medium px-7 py-4 rounded-lg text-white bg-black group cursor-pointer">
                  <span className="relative z-10">See All Work</span>
                  <span className="absolute inset-0 rounded-lg  bg-lime-500 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
