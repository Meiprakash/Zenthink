"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface DeliverFeature {
  title: string;
  description: string;
  icon?: string; // 🟢 NEW (image support)
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
    <section className="w-full py-20 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 sm:flex"
        >
          <h2 className="text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-neutral-900 leading-tight">
            {deliver.title}
          </h2>

          <p className="text-neutral-600 text-[15px] sm:text-[17px] mt-4 max-w-3xl leading-relaxed">
            {deliver.description}
          </p>
        </motion.div>

        {/* Alternating Feature Blocks */}
        <div className="space-y-20">
          {deliver.features.map((item, i) => {
            const isRight = i % 2 === 1;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isRight ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 m-4 items-center p-5 px-10 rounded-2xl   shadow-md"
              >
                {/* TEXT */}
                <div className={`${isRight ? "md:order-2" : "md:order-1"}`}>
                  <h3 className="text-[24px] sm:text-[28px] md:text-[30px] font-semibold text-neutral-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* IMAGE */}
                <div
                  className={`flex justify-center md:justify-${
                    isRight ? "start" : "end"
                  } ${isRight ? "md:order-1" : "md:order-2"}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl flex items-center justify-center  overflow-hidden"
                  >
                    <Image
                      src={item.icon || "/placeholder-feature.png"} // fallback
                      alt={item.title}
                      width={120}
                      height={120}
                      className="object-contain w-20 h-20 sm:w-24 sm:h-24"
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
