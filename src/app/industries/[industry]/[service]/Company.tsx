"use client";

import { motion } from "framer-motion";

interface CompanyProps {
  company?: {
    cname: string;
    cdesc: string;
  };
}

export default function CompanySection({ company }: CompanyProps) {
  if (!company) return null;

  return (
    <section className="w-full py-6 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-28 ">
      <div className="max-w-6xl  m-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-semibold text-neutral-900">
            {company.cname} 
          </h2>

          <p className="text-neutral-600 text-[15px] sm:text-[16px] ">
            {company.cdesc}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
