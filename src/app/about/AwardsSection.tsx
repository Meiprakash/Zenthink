// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const awards = [
//   {
//     id: 1,
//     year: "2021",
//     title: "Foundation",
//     desc: "Started as TuneUp Technologies which is to develop Mobile App, Web Applications and Websites for the Tier 2 industry client  ",
//     image: "/award-01.jpg",
//   },
//   {
//     id: 2,
//     year: "2022",
//     title: "Expansion",
//     desc: "Focused on building scalable solutions using Artificial Intelligence systems and build 10+ SaaS Applications .",
//     image: "/award-02.jpg",
//   },
//   {
//     id: 3,
//     year: "2023",
//     title: "Advisory",
//     desc: "Planned to onboard 5+ Advisor board members of different verticals to take more foreign projects.",
//     image: "/award-03.jpg",
//   },
//   {
//     id: 4,
//     year: "2024",
//     title: " Team Scaling",
//     desc: " Had a well equipped team of 15 Members with expertise in Mobile, Web and AI development to scale up the system  ",
//     image: "/award-04.jpg",
//   },
//   {
//     id: 5,
//     year: "2025",
//     title: "Incorporation ",
//     desc: " ZenThink Technologies was Incorporated and started to scale up with the vision and accomplished 15+ Industry projects within 6 Months   ",
//     image: "/award-04.jpg",
//   },
//   {
//     id: 6,
//     year: "2026",
//     title: "Growth Vision ",
//     desc: " Vision to reach 10M+ revenue on the Annual Maintenance projects and advanced technology with Cyber security solutions integrated    ",
//     image: "/award-04.jpg",
//   },
//   {
//     id: 7,
//     year: "2030",
//     title: "Global Leadership",
//     desc: "Vision to accomplish as the one of the leading companies to manage all verticals of services for the recursion projects all over the world.  ",
//     image: "/award-04.jpg",
//   },
// ];

// const AwardsSection = () => {
//   return (
//     <section className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-8 sm:py-10 md:py-12 lg:py-16">
//       {/* Header */}
//       <div className="flex items-center gap-2 mb-4 sm:mb-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true, margin: "-50px" }}
//           className="text-neutral-900 text-base sm:text-lg md:text-xl font-medium"
//         >
//           From our Day 1
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           viewport={{ once: true, margin: "-50px" }}
//         >
//           <Image
//             src="/badge.jpg"
//             alt="badge"
//             width={20}
//             height={20}
//             className="w-4 h-4"
//           />
//         </motion.div>
//       </div>

//       {/* Intro Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true, margin: "-50px" }}
//         className="mb-8 sm:mb-10 md:mb-12 lg:mb-14"
//       >
//         <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 items-start">
//           {/* Left: Heading */}
//           <div>
//             <h2 className="text-[24px] xs:text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-medium text-neutral-900 leading-[1.2] sm:leading-tight tracking-tight">
//               Expertise That Transforms Challenges Into Competitive Advantages
//             </h2>
//           </div>

//           {/* Right: Description */}
//           <div>
//             <p className="text-neutral-600 text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
//               We started with a clear goal: help organizations use software to
//               work better. From system improvements to new product builds, our
//               approach has always been practical and outcome-driven.
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       {/* Awards List */}
//       <div className="flex flex-col gap-5 sm:gap-10">
//         {awards.map((award, index) => (
//           <motion.div
//             key={award.id}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.15 }}
//             viewport={{ once: true, margin: "-50px" }}
//             className="flex flex-row items-center gap-8 md:gap-10 py-6 sm:py-8 md:py-10 last:border-b-0"
//           >
//             {/* Image */}
//             <div className="flex justify-center items-center  md:w-1/3 lg:w-1/4">
//               <p className="w-[20px] text-4xl font-semibold sm:text-6xl sm:font-bold">{award.id}</p>
//             </div>

//             {/* Content */}
//             <div className="flex flex-row items-center gap-8 xs:gap-5 sm:gap-6 md:gap-8 w-full px-2 md:px-0">
//               {/* Year */}
//               <div className="md:w-[60px] lg:w-[80px] xl:w-[100px] flex-shrink-0">
//                 <p className="text-neutral-600 text-[14px] sm:text-lg md:text-xl font-medium">
//                   {award.year}
//                 </p>
//               </div>

//               {/* Title + Description */}
//               <div className="flex-1">
//                 <h4 className="text-[20px] sm:text-2xl md:text-2xl lg:text-3xl font-medium text-neutral-900 leading-tight">
//                   {award.title}
//                 </h4>
//                 <p className="text-neutral-600 text-[14px] sm:text-lg mt-2 xs:mt-3 leading-relaxed">
//                   {award.desc}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AwardsSection;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Rocket,
  TrendingUp,
  Users,
  Users2,
  Building2,
  ShieldCheck,
  Globe,
} from "lucide-react";

const awards = [
  {
    id: 1,
    year: "2021",
    title: "Foundation",
    desc: "Started as TuneUp Technologies which is to develop Mobile App, Web Applications and Websites for the Tier 2 industry client",
    icon: <Rocket className="w-8 h-8 sm:w-15 sm:h-15 text-neutral-600" />,
  },
  {
    id: 2,
    year: "2022",
    title: "Expansion",
    desc: "Focused on building scalable solutions using Artificial Intelligence systems and build 10+ SaaS Applications .",
    icon: <TrendingUp className="w-8 h-8 sm:w-15 sm:h-15 text-neutral-600" />,
  },
  {
    id: 3,
    year: "2023",
    title: "Advisory",
    desc: "Planned to onboard 5+ Advisor board members of different verticals to take more foreign projects.",
    icon: <Users className="w-8 h-8 sm:w-15 sm:h-15 text-neutral-600" />,
  },
  {
    id: 4,
    year: "2024",
    title: " Team Scaling",
    desc: " Had a well equipped team of 15 Members with expertise in Mobile, Web and AI development to scale up the system",
    icon: <Users2 className="w-8 h-8 sm:w-15 sm:h-15 text-neutral-600" />,
  },
  {
    id: 5,
    year: "2025",
    title: "Incorporation ",
    desc: " ZenThink Technologies was Incorporated and started to scale up with the vision and accomplished 15+ Industry projects within 6 Months",
    icon: <Building2 className="w-8 h-8 sm:w-15 sm:h-15 text-neutral-600" />,
  },
  {
    id: 6,
    year: "2026",
    title: "Growth Vision ",
    desc: " Vision to reach 10M+ revenue on the Annual Maintenance projects and advanced technology with Cyber security solutions integrated",
    icon: <ShieldCheck className="w-8 h-8 sm:w-15 sm:h-15 text-neutral-600" />,
  },
  {
    id: 7,
    year: "2030",
    title: "Global Leadership",
    desc: "Vision to accomplish as the one of the leading companies to manage all verticals of services for the recursion projects all over the world.",
    icon: <Globe className="w-8 h-8 sm:w-15 sm:h-15 text-neutral-600" />,
  },
];

const AwardsSection = () => {
  return (
    <section className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-8 sm:py-10 md:py-12 lg:py-16">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-neutral-900 text-base sm:text-lg md:text-xl font-medium"
        >
          From our Day 1
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Image
            src="/badge.jpg"
            alt="badge"
            width={20}
            height={20}
            className="w-4 h-4"
          />
        </motion.div>
      </div>

      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-8 sm:mb-10 md:mb-12 lg:mb-14"
      >
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 items-start">
          <div>
            <h2 className="text-[24px] xs:text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-medium text-neutral-900 leading-[1.2] sm:leading-tight tracking-tight">
              Expertise That Transforms Challenges Into Competitive Advantages
            </h2>
          </div>

          <div>
            <p className="text-neutral-600 text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
              We started with a clear goal: help organizations use software to
              work better. From system improvements to new product builds, our
              approach has always been practical and outcome-driven.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Timeline/Awards List */}
      <div className="flex flex-col gap-2">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-row items-center gap-6 md:gap-10 py-6 sm:py-10 border-b border-neutral-100 last:border-b-0"
          >
            {/* Icon Column */}
            <div className="flex justify-center items-center w-[60px] sm:w-1/3 lg:w-1/4 flex-shrink-0">
              <div
                className="p-3 sm:p-5 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30
"
              >
                {award.icon}
              </div>
            </div>

            {/* Content Column */}
            <div className="flex flex-row items-center sm:items-center gap-4 md:gap-8 w-full">
              {/* Year */}
              <div className="min-w-[50px] md:w-[80px] lg:w-[100px] flex-shrink-0">
                <p className="text-neutral-600 text-sm sm:text-lg md:text-xl font-semibold tracking-tighter">
                  {award.year}
                </p>
              </div>

              {/* Title + Description */}
              <div className="flex-1">
                <h4 className="text-[18px] sm:text-2xl md:text-2xl lg:text-3xl font-medium text-neutral-900 leading-tight">
                  {award.title}
                </h4>
                <p className="text-neutral-600 text-[13px] sm:text-base md:text-lg mt-1 sm:mt-2 leading-relaxed max-w-2xl">
                  {award.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;