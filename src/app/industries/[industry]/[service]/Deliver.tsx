"use client";

import { motion } from "framer-motion";

interface DeliverFeature {
  title: string;
  description: string;
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
    <section className="w-full py-16 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-semibold text-neutral-900">
            {deliver.title}
          </h2>

          <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-relaxed mt-3 max-w-3xl">
            {deliver.description}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {deliver.features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-neutral-200 shadow-sm bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%)]"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">
                {item.title}
              </h3>

              <p className="text-neutral-600 text-[14px] sm:text-[15px] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
