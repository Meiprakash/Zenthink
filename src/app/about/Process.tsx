"use client";

import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import Image from "next/image";

const processes = [
  {
    id: 1,
    title: "Listen ",
    desc: "We immerse ourselves in your business context, challenges, and vision through deep conversations",
    icon: <Share2 className="w-10 h-10 text-black" />,
    image: "/using-a-tablet-svgrepo-com.svg",
  },
  {
    id: 2,
    title: "Align ",
    desc: "We synchronize expectations, timelines, and success metrics ensuring complete stakeholder buy-in.",
    image: "/activity-solid-svgrepo-com.svg",
  },
  {
    id: 3,
    title: "Collaborate ",
    desc: "We maintain open communication with regular updates, feedback sessions, and agile adaptability.",
    image: "/collaborate-svgrepo-com.svg",
  },
  {
    id: 4,
    title: "Empower ",
    desc: "We transfer knowledge and provide training—ensuring your team owns and sustains the solution.",
    image:
      "/knowledge-education-creativity-inspiration-intelligence-svgrepo-com.svg",
  },
];

const ProcessSection = () => {
  return (
    <section className="px-5 md:px-16 lg:px-24 py-10 mb-13">
      {/* Section Title */}
      <div className="flex items-start gap-2 mb-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-neutral-900 text-md md:text-lg font-medium"
        >
          Process
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/badge.jpg"
            alt="badge"
            width={20}
            height={20}
            className="w-4 h-4 mt-1"
          />
        </motion.div>
      </div>

      {/* Header Section */}

      <div className="grid sm:grid-cols-2 sm:gap-8 gap-4 items-start ">
        {/* Left: Heading */}
        <div>
          <h2 className="text-[30px] md:text-4xl lg:text-[44px] font-medium text-neutral-900 leading-tight tracking-tight">
            Partnership Principles That Build Lasting Success
          </h2>
        </div>

        {/* Right: Description */}
        <div>
          <p className="text-neutral-600 text-[14px] md:text-[16px] sm:text-[15px] md:text-start leading-relaxed md:mt-3 ">
            We believe meaningful relationships create extraordinary results.
            Our culture is designed to support you from day one to long-term
            partnership honestly, proactively, and respectfully. Here’s the
            Zenthink difference in action.
          </p>
        </div>
      </div>

      {/* Process Cards */}
      <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        {processes.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bbg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%)
            border h-[280px] sm:h-[400px] rounded-3xl p-8 md:p-10 flex flex-col justify-between transition"
          >
            {/* Image on top for 2nd and 4th cards */}
            {(index === 1 || index === 3) && (
              <div className="flex justify-start md:justify-center mb-4 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={90}
                  height={70}
                  className="rounded-full mb-8 md:w-27 sm:w-20 w-15"
                />
              </div>
            )}

            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Image at bottom for 1st and 3rd cards */}
            {(index === 0 || index === 2) && (
              <div className="flex justify-start md:justify-center sm:mt-18 mt-4 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={90}
                  height={70}
                  className="rounded-full sm:mt-7 md:w-27 sm:w-20 w-16"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
