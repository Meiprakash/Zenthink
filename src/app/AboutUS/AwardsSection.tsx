"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const awards = [
  {
    id: 1,
    year: "2025",
    title: "Digital Innovation Summit",
    desc: "Awarded for groundbreaking contributions in product strategy and technology.",
    image: "/award-01.jpg",
  },
  {
    id: 2,
    year: "2024",
    title: "Best UI Design Award",
    desc: "Celebrated for achievements in user interface design, our team pushes the boundaries of what's possible.",
    image: "/award-02.jpg",
  },
  {
    id: 3,
    year: "2023",
    title: "Global IT Agency Award",
    desc: "Recognized for exceptional IT solutions that drive impact and foster innovation.",
    image: "/award-03.jpg",
  },
  {
    id: 4,
    year: "2022",
    title: "Visual Web Artisan",
    desc: "Renowned for exceptional artistry in creating immersive visual web experiences that captivate users.",
    image: "/award-04.jpg",
  },
];

const AwardsSection = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-16 bg-white md:ml-13">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-900 text-lg font-medium"
        >
          Awards
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Image src="/badge.jpg" alt="badge" width={20} height={20} />
        </motion.div>
      </div>

      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex sm:flex-row md:flex-row md:justify-between mb-14 "
      >
        <h3 className="sm:text-2xl md:text-4xl font-bold text-gray-900 max-w-md sm:mr-4 ">
          Achieved awards for excellence recognizing success.
        </h3>
        <p className="text-gray-600 sm:text-sm max-w-lg mt-4 md:mt-0   text-base leading-relaxed">
          We believe great work comes from clear collaboration. Our process is
          designed to guide you from the first idea to final launch—smoothly,
          strategically, and creatively.
        </p>
      </motion.div>

      {/* Awards List */}
      <div className="flex flex-col gap-16 flex-row-3 sm:flex-col-3">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row  md:items-start md:gap-10 border-b border-gray-200 pb-10"
          >
            {/* Image */}
            <div className="w-full md:w-1/5 flex justify-start md:justify-start">
              <Image
                src={award.image}
                alt={award.title}
                width={180}
                height={180}
                className="rounded-lg object-cover shadow-sm"
              />
            </div>

            {/* Year */}
            <div className="flex gap-8 items-center justify-center mt-16">
              <div className="w-full md:w-[6%] mt-4 md:mt-0 flex justify-center h-full md:items-center md:justify-center">
                <p className="text-gray-500 text-base font-medium">
                  {award.year}
                </p>
              </div>

              {/* Title + Description */}
              <div className="md:flex md:flex-row-2 gap-4">
                <div className="">
                  <h4 className="text-xl md:text-2xl  text-gray-900">
                    {award.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-base mt-2 md:mt-3 md:max-w-xl">
                  {award.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
