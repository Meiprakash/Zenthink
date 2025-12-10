"use client";

import { motion } from "framer-motion";

interface BeyondProps {
  beyond?: {
    bname: string;
    bdesc: string;
  };
}

export default function BeyondSection({ beyond }: BeyondProps) {
  if (!beyond) return null;

  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-28">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-semibold text-neutral-900">
            {beyond.bname}
          </h2>

          <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-relaxed">
            {beyond.bdesc}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
