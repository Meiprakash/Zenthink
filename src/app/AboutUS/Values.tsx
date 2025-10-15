"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Values = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-16 bg-white">
      {/* Section Heading */}
      <div className="flex items-start gap-2 mb-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-900 text-lg font-medium"
        >
          Values
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Image src="/badge.jpg" alt="badge" width={20} height={20} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex  md:flex-row md:items-start md:justify-between"
      >
        <motion.h3
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="sm:text-2xl md:text-4xl sm:mt-4 font-bold text-gray-900 max-w-md"
        >
          Guiding Lights of Our Works
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-lg mt-4 md:mt-0 sm:ml-5 md:ml-1 text-base leading-relaxed"
        >
          We believe great work comes from clear collaboration. Our process is
          designed to guide you from the first idea to final launch—smoothly,
          strategically, and creatively.
        </motion.p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-3 gap-6 mt-12">
        {/* Column 1 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="col-span-1 row-span-1 bg-gray-100 p-8 flex flex-col items-start justify-between border rounded-xl hover:shadow-lg transition-shadow"
        >
          <div>
            <h2 className="text-black text-2xl font-bold mb-3">CREATIVITY</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We get to know your brand, goals, and audience. Through strategy
              calls.
            </p>
          </div>
          <Image
            src="/value-card-img-01.jpg"
            width={200}
            height={200}
            alt="creativity"
            className="mt-6 sm:w-15 md:w-20 object-contain"
          />
        </motion.div>

        {/* Column 2 */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Collaboration Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-6 flex flex-row items-center gap-2 border rounded-3xl hover:shadow-lg transition-shadow"
          >
            <Image
              src="/value-card-img-02.jpg"
              width={200}
              height={200}
              alt="collaboration"
              className="object-contain sm:w-15"
            />
            <div>
              <h2 className="text-black text-xl font-bold mb-2">
                COLLABORATION
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                We get to know your brand, goals, and audience. Through strategy
                calls.
              </p>
            </div>
          </motion.div>

          {/* Innovation Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-6 flex flex-row items-center gap-6 border rounded-3xl hover:shadow-lg transition-shadow"
          >
            <Image
              src="/value-card-img-03.jpg"
              width={90}
              height={90}
              alt="innovation"
              className="object-contain"
            />
            <div>
              <h2 className="text-black text-xl font-bold mb-2">INNOVATION</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                We get to know your brand, goals, and audience. Through strategy
                calls.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Column 3 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="col-span-1 row-span-1 bg-gray-100 p-8 flex flex-col items-start justify-between border rounded-3xl hover:shadow-lg transition-shadow"
        >
          <div>
            <h2 className="text-black text-2xl font-bold mb-3">EXCELLENCE</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We get to know your brand, goals, and audience. Through strategy
              calls.
            </p>
          </div>
          <Image
            src="/value-card-img-04.jpg"
            width={200}
            height={200}
            alt="excellence"
            className="mt-6 w-50 sm:w-20 object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
