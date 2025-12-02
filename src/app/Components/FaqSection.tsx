"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import { easeOut } from "framer-motion";

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
      "Yes! We tailor all marketing strategies to your brand's goals and target audience.",
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
    <section className="w-full pt-20 md:py-10 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-16 xl:px-32 overflow-hidden">
      {/* Header Section */}
      <motion.div className="" variants={fadeUp}>
        <p className="text-md md:text-base text-neutral-900 mb-3 flex items-center gap-2">
          FAQ{" "}
          <span className="">
            <Image
              src="/badge-icon.webp"
              alt="badge"
              width={16}
              height={16}
              className="w-4"
            />
          </span>
        </p>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-0">
          {/* Left: Heading */}
          <div className="w-full md:w-1/2">
            <h2 className="text-[30px] xs:text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-medium text-neutral-900 leading-[1.2] md:leading-tight tracking-tight">
              Frequently Asked <br className="hidden sm:block" /> Questions
            </h2>
          </div>

          {/* Right: Description */}
          <p className="w-full md:w-1/2 text-neutral-600 text-[14px] md:text-[15px] lg:text-[16px] md:text-start leading-relaxed md:mt-3 md:pl-8">
            Our services help you create digital products. Stay ahead of the
            curve with our latest insights, tips, and industry trends.
          </p>
        </div>
      </motion.div>

      {/* FAQ Grid Section */}
      <div className="max-w-9xl mx-auto mt-8 sm:mt-10 lg:grid lg:grid-cols-2 lg:gap-8 items-start">
        {/* Image Section - Desktop */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative h-[500px] lg:h-[530px] w-full">
            <Image
              src="/faq.jpg"
              alt="FAQ"
              fill
              className="rounded-[25px] object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Floating Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/50 backdrop-blur-sm shadow-xl rounded-2xl p-4 md:p-5 border">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-black mb-2">
                Need More Info?
              </h3>
              <p className="text-neutral-700 text-sm md:text-md mb-3 md:mb-4 leading-relaxed">
                Didn’t find what you were looking for? Let’s chat and solve it
                together!
              </p>
              <Link href="/Service">
                <button className="relative overflow-hidden text-sm md:text-md font-medium px-4 md:px-5 lg:px-6 py-2.5 md:py-3 rounded-lg text-white bg-black group cursor-pointer w-full sm:w-auto">
                  <span className="relative z-10">See All Work</span>
                  <span className="absolute inset-0 rounded-lg bg-lime-500 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Accordion Section */}
        <motion.div
          className="w-full lg:pl-4 xl:pl-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-neutral-200 py-4 xs:py-5 px-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full text-left text-[15px] xs:text-[16px] sm:text-[18px] md:text-xl font-medium text-black transform transition-all duration-500 ease-linear"
              >
                <span className="text-left pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0 text-neutral-900 transform transition-all duration-500 ease-linear" />
                ) : (
                  <Plus className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0 text-neutral-900 transform transition-all duration-500 ease-linear" />
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
                    <p className="text-neutral-600 mt-3 xs:mt-4 text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Image Section - Mobile */}
        <motion.div
          className="w-full flex justify-center py-8 lg:hidden"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative h-[320px] xs:h-[350px] sm:h-[400px] w-full max-w-[400px]">
            <Image
              src="/faq.jpg"
              alt="FAQ"
              fill
              className="rounded-[20px] xs:rounded-[25px] object-cover"
              sizes="(max-width: 768px) 90vw, 400px"
            />
            {/* Floating Card */}
            <div className="absolute bottom-3 xs:bottom-4 left-3 xs:left-4 right-3 xs:right-4 bg-white/50 backdrop-blur-sm shadow-xl rounded-xl xs:rounded-2xl p-3 xs:p-4 border">
              <h3 className="text-lg xs:text-xl font-medium text-black mb-1 xs:mb-2">
                Need More Info?
              </h3>
              <p className="text-neutral-700 text-xs xs:text-sm mb-2 xs:mb-3 leading-relaxed">
                Didn’t find what you were looking for? Let’s chat and solve it
                together!
              </p>
              <Link href="/Service">
                <button className="relative overflow-hidden text-sm xs:text-md font-medium px-4 xs:px-5 py-2 xs:py-2.5 rounded-lg text-white bg-black group cursor-pointer w-full">
                  <span className="relative z-10">See All Work</span>
                  <span className="absolute inset-0 rounded-lg bg-lime-500 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
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