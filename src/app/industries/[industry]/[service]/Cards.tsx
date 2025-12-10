"use client";

import { motion } from "framer-motion";

interface CardSectionItem {
  title: string;
  description: string;
}

interface CardsProps {
  cards?: {
    sections: CardSectionItem[];
  };
}

export default function CardsSection({ cards }: CardsProps) {
  if (!cards) return null;

  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-28">
      <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {cards.sections.map((block, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl border border-neutral-200 bg-gradient-to-br from-[#ffffff] to-[#f3ffe5] shadow-md hover:shadow-xl transition-all duration-500"
          >
            {/* Left Highlight Bar */}
            <div className="absolute left-0 top-0 h-full w-1 bg-lime-500 rounded-l-xl"></div>

            <h3 className="text-[26px] sm:text-[30px] font-semibold text-neutral-900 mb-3">
              {block.title}
            </h3>
            <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-relaxed">
              {block.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
