// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const Values = () => {
//   return (
//     <section className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-8 sm:py-10 md:py-12 lg:py-16">
//       {/* ===== Section Header ===== */}
//       <div className="flex items-center gap-2 mb-4 sm:mb-8">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true, margin: "-50px" }}
//           className="text-neutral-900 text-base sm:text-lg md:text-xl font-medium"
//         >
//           Values
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           viewport={{ once: true, margin: "-50px" }}
//         >
//           <Image
//             src="/badge.jpg"
//             alt="badge"
//             width={22}
//             height={22}
//             className="w-4 h-4"
//           />
//         </motion.div>
//       </div>

//       {/* ===== Heading & Paragraph ===== */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true, margin: "-50px" }}
//         className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10"
//       >
//         <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 items-start">
//           {/* Left: Heading */}
//           <div>
//             <h2 className="text-[30px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-medium text-neutral-900 leading-[1.2] sm:leading-tight tracking-tight">
//               Driving Principles of Our Solutions
//             </h2>
//           </div>

//           {/* Right: Description */}
//           <div>
//             <p className="text-neutral-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
//               We believe great software comes from close collaboration. Our
//               process is designed to guide you from initial discovery to final
//               deployment—efficiently, strategically, and systematically.
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       {/* ===== GRID Layout ===== */}
//       <div
//         className="
//           mt-8 sm:mt-10 md:mt-12 lg:mt-14
//           grid
//           grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
//           lg:grid-rows-2
//           gap-4 xs:gap-5 sm:gap-6 md:gap-8
//         "
//       >
//         {/* === Card 1: INNOVATION (spans 2 rows) === */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true, margin: "-50px" }}
//           className="bg-white border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 flex flex-col justify-between transition-all lg:row-span-2"
//         >
//           <div>
//             <h2 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
//               INNOVATION
//             </h2>
//             <p className="text-neutral-700 text-sm xs:text-base leading-relaxed">
//               We explore your business challenges, objectives, and user needs.
//               Through discovery workshops and technical assessments
//             </p>
//           </div>
//           <div className="mt-6 sm:mt-8">
//             <Image
//               src="/creative-mind-innovation-svgrepo-com.svg"
//               width={90}
//               height={90}
//               alt="innovation"
//               className="object-contain w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 "
//             />
//           </div>
//         </motion.div>

//         {/* === Card 2: COLLABORATION (top middle) === */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//           viewport={{ once: true, margin: "-50px" }}
//           className="bg-white border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 flex flex-col justify-between transition-all"
//         >
//           <div>
//             <h2 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
//               COLLABORATION
//             </h2>
//             <p className="text-neutral-700 text-sm xs:text-base leading-relaxed">
//               We partner with your team, aligning stakeholders and gathering
//               requirements. Through agile sprints and transparent communication
//             </p>
//           </div>
//           <div className="mt-6 sm:mt-8">
//             <Image
//               src="/collaboration-svgrepo-com.svg"
//               width={70}
//               height={70}
//               alt="collaboration"
//               className="object-contain w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16"
//             />
//           </div>
//         </motion.div>

//         {/* === Card 3: QUALITY (spans 2 rows) === */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           viewport={{ once: true, margin: "-50px" }}
//           className="bg-white border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 flex flex-col justify-between transition-all lg:row-span-2"
//         >
//           <div>
//             <h2 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
//               QUALITY
//             </h2>
//             <p className="text-neutral-700 text-sm xs:text-base leading-relaxed">
//               We ensure code excellence, security standards, and performance
//               optimization. Through rigorous testing and peer reviews
//             </p>
//           </div>
//           <div className="mt-6 sm:mt-8">
//             <Image
//               src="/quality-svgrepo-com.svg"
//               width={70}
//               height={70}
//               alt="quality"
//               className="object-contain w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 "
//             />
//           </div>
//         </motion.div>

//         {/* === Card 4: DELIVERY (bottom middle) === */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           viewport={{ once: true, margin: "-50px" }}
//           className="bg-white border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 flex flex-col justify-between transition-all"
//         >
//           <div>
//             <h2 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
//               DELIVERY
//             </h2>
//             <p className="text-neutral-700 text-sm xs:text-base leading-relaxed">
//               We deploy reliable solutions, provide comprehensive training, and
//               ongoing support. Through structured implementation and
//               maintenance.
//             </p>
//           </div>
//           <div className="mt-6 sm:mt-8">
//             <Image
//               src="/delivery-svgrepo-com.svg"
//               width={70}
//               height={70}
//               alt="delivery"
//               className="object-contain w-12 h-12 xs:w-14 xs:h-14 sm:w-22 sm:h-19"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Values;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Values = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-1 md:py-8 ">
      {/* ===== HEADER ===== */}
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-neutral-900 text-lg md:text-xl font-medium">
          Values
        </h2>
        <Image src="/badge.jpg" alt="badge" width={18} height={18} />
      </div>

      {/* ===== TITLE + DESC ===== */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-12">
        <h3 className="text-[30px] sm:text-[34px] md:text-[42px] font-medium leading-tight">
          Driving Principles of Our Solutions
        </h3>
        <p className="text-neutral-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
          We believe great software comes from close collaboration. Our process
          is designed to guide you from discovery to deployment—efficiently and
          strategically.
        </p>
      </div>

      {/* ===== VALUES GRID ===== */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          md:grid-rows-4
          gap-4 sm:gap-6
        "
      >
        {/* 1️⃣ INNOVATION */}
        <motion.div className="value-card md:col-span-3 border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-5">
          <div className=" ">
            <div>
              <h1 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
                INNOVATION
              </h1>
              <p>
                We explore challenges, objectives, and user needs through
                discovery workshops and technical assessments.
              </p>
            </div>
            <div className="mt-6 sm:mt-8  ">
              <Image
                src="/creative-mind-innovation-svgrepo-com.svg"
                width={70}
                height={70}
                alt="quality"
                className="object-contain w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 "
              />
            </div>
          </div>
        </motion.div>
        {/* 6️⃣ SENSE OF BELONGING */}
        <motion.div className="value-card md:row-span-2 md:col-start-1 md:row-start-2 border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8">
          <h4 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
            SENSE OF BELONGING
          </h4>
          <p>
            We foster an inclusive environment where every team member feels
            valued, connected, and empowered.
          </p>
          <div className="mt-6 sm:mt-80">
            <Image
              src="/belonging.svg"
              width={70}
              height={70}
              alt="quality"
              className="object-contain w-12 h-12 xs:w-14 xs:h-14 sm:w-19 sm:h-18 "
            />
          </div>
        </motion.div>

        {/* 2️⃣ COLLABORATION */}
        <motion.div className="value-card md:col-start-2 md:row-start-2 border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8">
          <h4 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
            COLLABORATION
          </h4>
          <p>
            We work closely with stakeholders through agile sprints and
            transparent communication.
          </p>
          <div className="mt-6 sm:mt-8">
            <Image
              src="/collaboration-svgrepo-com.svg"
              width={70}
              height={70}
              alt="quality"
              className="object-contain w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 "
            />
          </div>
        </motion.div>

        {/* 3️⃣ QUALITY */}
        <motion.div className="value-card md:col-start-2 md:row-start-3 border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8">
          <h4 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
            QUALITY
          </h4>
          <p>
            We maintain high standards through testing, reviews, and performance
            optimization.
          </p>
          <div className="mt-6 sm:mt-8">
            <Image
              src="/quality-svgrepo-com.svg"
              width={70}
              height={70}
              alt="quality"
              className="object-contain w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 "
            />
          </div>{" "}
        </motion.div>

        {/* 5️⃣ SECURITY & RELIABILITY */}
        <motion.div className="value-card md:row-span-2 md:col-start-3 md:row-start-2 border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8">
          <h4 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
            SECURITY & RELIABILITY
          </h4>
          <p>
            We prioritize safety, confidentiality, and continuity of systems and
            data.
          </p>
          <div className="mt-6 sm:mt-80">
            <Image
              src="/reliability.svg"
              width={70}
              height={70}
              alt="quality"
              className="object-contain w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 "
            />
          </div>
        </motion.div>

        {/* 4️⃣ DELIVERY */}
        <motion.div className="value-card md:col-span-3 md:row-start-4 border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 ">
          <h4 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
            DELIVERY
          </h4>
          <p>
            We deploy reliable solutions, provide training, and ensure long-term
            support.
          </p>
          <div className="mt-6 sm:mt-8">
            <Image
              src="/delivery-svgrepo-com.svg"
              width={70}
              height={70}
              alt="quality"
              className="object-contain w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
