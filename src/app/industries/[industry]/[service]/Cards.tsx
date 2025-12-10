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
            className="relative p-8 rounded-3xl border border-neutral-200 shadow-md hover:shadow-xl overflow-hidden transition-all duration-500"
          >
            {/* Left Highlight Bar - FIXED */}
            <div className="">
              <div className="absolute  left-0 top-1 bottom-1 w-1.5 bg-lime-400 rounded-l-3xl "></div>

              <h3 className="text-[26px] sm:text-[30px] font-semibold text-neutral-900 mb-3">
                {block.title}
              </h3>
              <p className="text-neutral-600 text-[15px] sm:text-[14px] leading-relaxed">
                {block.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
