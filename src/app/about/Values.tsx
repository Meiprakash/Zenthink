"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Values = () => {
  return (
    // <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-1 md:py-8 ">
    //   {/* ===== HEADER ===== */}
    //   <div className="flex items-center gap-2 mb-8">
    //     <h2 className="text-neutral-900 text-lg md:text-xl font-medium">
    //       Values
    //     </h2>
    //     <Image src="/badge.jpg" alt="badge" width={18} height={18} />
    //   </div>

    //   {/* ===== TITLE + DESC ===== */}
    //   <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-12">
    //     <h3 className="text-[30px] sm:text-[34px] md:text-[42px] font-medium leading-tight">
    //       Driving Principles of Our Solutions
    //     </h3>
    //     <p className="text-neutral-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
    //       We believe great software comes from close collaboration. Our process
    //       is designed to guide you from discovery to deployment—efficiently and
    //       strategically.
    //     </p>
    //   </div>

    //   {/* ===== VALUES GRID ===== */}
    //   <div
    //     className="
    //       grid
    //       grid-cols-1
    //       md:grid-cols-3
    //       md:grid-rows-4
    //       gap-4 sm:gap-6
    //     "
    //   >
    //     {/* 1️⃣ INNOVATION */}
    //     <motion.div className="value-card md:col-span-3 border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-5">
    //       <div className=" ">
    //         <div>
    //           <h1 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
    //             INNOVATION
    //           </h1>
    //           <p>
    //             We explore challenges, objectives, and user needs through
    //             discovery workshops and technical assessments.
    //           </p>
    //         </div>
    //         <div className="mt-6 sm:mt-8  ">
    //           <Image
    //             src="/creative-mind-innovation-svgrepo-com.svg"
    //             width={70}
    //             height={70}
    //             alt="quality"
    //             className="object-contain w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 "
    //           />
    //         </div>
    //       </div>
    //     </motion.div>
    //     {/* 6️⃣ SENSE OF BELONGING */}
    //     <motion.div className="value-card md:row-span-2 md:col-start-1 md:row-start-2 border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8">
    //       <h4 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
    //         SENSE OF BELONGING
    //       </h4>
    //       <p>
    //         We foster an inclusive environment where every team member feels
    //         valued, connected, and empowered.
    //       </p>
    //       <div className="mt-6 sm:mt-80">
    //         <Image
    //           src="/belonging.svg"
    //           width={70}
    //           height={70}
    //           alt="quality"
    //           className="object-contain w-12 h-12 xs:w-14 xs:h-14 sm:w-19 sm:h-18 "
    //         />
    //       </div>
    //     </motion.div>

    //     {/* 2️⃣ COLLABORATION */}
    //     <motion.div className="value-card md:col-start-2 md:row-start-2 border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8">
    //       <h4 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
    //         COLLABORATION
    //       </h4>
    //       <p>
    //         We work closely with stakeholders through agile sprints and
    //         transparent communication.
    //       </p>
    //       <div className="mt-6 sm:mt-8">
    //         <Image
    //           src="/collaboration-svgrepo-com.svg"
    //           width={70}
    //           height={70}
    //           alt="quality"
    //           className="object-contain w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 "
    //         />
    //       </div>
    //     </motion.div>

    //     {/* 3️⃣ QUALITY */}
    //     <motion.div className="value-card md:col-start-2 md:row-start-3 border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8">
    //       <h4 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
    //         QUALITY
    //       </h4>
    //       <p>
    //         We maintain high standards through testing, reviews, and performance
    //         optimization.
    //       </p>
    //       <div className="mt-6 sm:mt-8">
    //         <Image
    //           src="/quality-svgrepo-com.svg"
    //           width={70}
    //           height={70}
    //           alt="quality"
    //           className="object-contain w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 "
    //         />
    //       </div>{" "}
    //     </motion.div>

    //     {/* 5️⃣ SECURITY & RELIABILITY */}
    //     <motion.div className="value-card md:row-span-2 md:col-start-3 md:row-start-2 border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8">
    //       <h4 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
    //         SECURITY & RELIABILITY
    //       </h4>
    //       <p>
    //         We prioritize safety, confidentiality, and continuity of systems and
    //         data.
    //       </p>
    //       <div className="mt-6 sm:mt-80">
    //         <Image
    //           src="/reliability.svg"
    //           width={70}
    //           height={70}
    //           alt="quality"
    //           className="object-contain w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 "
    //         />
    //       </div>
    //     </motion.div>

    //     {/* 4️⃣ DELIVERY */}
    //     <motion.div className="value-card md:col-span-3 md:row-start-4 border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 ">
    //       <h4 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
    //         DELIVERY
    //       </h4>
    //       <p>
    //         We deploy reliable solutions, provide training, and ensure long-term
    //         support.
    //       </p>
    //       <div className="mt-6 sm:mt-8">
    //         <Image
    //           src="/delivery-svgrepo-com.svg"
    //           width={70}
    //           height={70}
    //           alt="quality"
    //           className="object-contain w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 "
    //         />
    //       </div>
    //     </motion.div>
    //   </div>
    // </section>
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
          gap-4 sm:gap-6
        "
      >
        {/* 1️⃣ INNOVATION */}
        <motion.div className="value-card md:col-span-1 border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-5">
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
            <div className="mt-6 sm:mt-14  ">
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
        <motion.div className="value-card  border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8">
          <h4 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
            SENSE OF BELONGING
          </h4>
          <p>
            We foster an inclusive environment where every team member feels
            valued, connected, and empowered.
          </p>
          <div className="mt-6 sm:mt-14">
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
        <motion.div className="value-card  border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8">
          <h4 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
            COLLABORATION
          </h4>
          <p>
            We work closely with stakeholders through agile sprints and
            transparent communication.
          </p>
          <div className="mt-6 sm:mt-14">
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
        <motion.div className="value-card  border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8">
          <h4 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
            QUALITY
          </h4>
          <p>
            We maintain high standards through testing, reviews, and performance
            optimization.
          </p>
          <div className="mt-6 sm:mt-14">
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
        <motion.div className="value-card  border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8">
          <h4 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
            SECURITY & RELIABILITY
          </h4>
          <p>
            We prioritize safety, confidentiality, and continuity of systems and
            data.
          </p>
          <div className="mt-6 sm:mt-14">
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
        <motion.div className="value-card  border border-black/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 ">
          <h4 className="text-black text-xl xs:text-2xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3">
            DELIVERY
          </h4>
          <p>
            We deploy reliable solutions, provide training, and ensure long-term
            support.
          </p>
          <div className="mt-6 sm:mt-14">
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
