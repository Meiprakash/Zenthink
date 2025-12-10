"use client";

import { motion } from "framer-motion";

interface TimelinePhase {
  phase: string;
  details: string[];
}

interface TimelineData {
  title: string;
  duration: string;
  phases: TimelinePhase[];
}

export default function TimelineSection({
  timeline,
}: {
  timeline?: TimelineData;
}) {
  if (!timeline) return null;

  return (
    <section className="w-full py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-neutral-900">
            {timeline.title}
          </h2>

          <p className="text-neutral-600 mt-3 text-sm sm:text-base">
            Project Duration:
            <span className="font-semibold text-neutral-900 ml-2">
              {timeline.duration}
            </span>
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 sm:left-1/2 top-0 h-full w-[2px] hidden sm:block bg-lime-500"></div>

          {/* Phases */}
          <div className="space-y-10">
            {timeline.phases.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute hidden sm:block left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-3 w-4 h-4 bg-lime-500 rounded-full shadow-md" />

                {/* Phase Card */}
                <div
                  className={`
                    border border-neutral-200 shadow-sm rounded-xl 
                    p-5 sm:p-6 w-full sm:w-[48%]
                  `}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-3">
                    {item.phase}
                  </h3>

                  <ul className="space-y-2">
                    {item.details.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-neutral-700 text-sm sm:text-base"
                      >
                        <span className="w-2 h-2 rounded-full bg-neutral-800 mt-1"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
