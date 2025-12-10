"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface DeliverFeature {
  title: string;
  description: string;
  icon?: string | StaticImageData;
}

interface DeliverProps {
  deliver?: {
    title: string;
    description: string;
    features: DeliverFeature[];
  };
}

export default function DeliverSection({ deliver }: DeliverProps) {
  if (!deliver) return null;

  return (
    <section className="w-full py-30 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16  m-3 space-y-5"
        >
          <h2 className="text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-neutral-900 leading-relaxed">
            {deliver.title}
          </h2>

          <p className="text-neutral-600 text-[15px] sm:text-[17px] mt-4 ml-1  leading-relaxed">
            {deliver.description}
          </p>
        </motion.div>

        {/* Alternating Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-10">
          {deliver.features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
    
    border border-neutral-200
    hover:shadow-xl
    rounded-3xl
    p-5 sm:p-8
    flex flex-col
    gap-6
    overflow-hidden
    duration-500
    ${index % 2 === 1 ? "md:translate-y-12" : "md:translate-y-0"}
  `}
            >
              {/* TEXT SECTION */}
              <div className="flex-grow">
                <h3 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-semibold text-neutral-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-neutral-600 text-[14px] mt-4 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* ICON (Fixed Bottom, Never Overflows) */}
              <div className="flex-shrink-0 mt-auto">
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={66}
                    height={60}
                    className="opacity-90 object-contain mx-auto ml-0"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
