// "use client";

// import { motion } from "framer-motion";
// import { Circle, Zap, Eye, Share2 } from "lucide-react";
// import Image from "next/image";

// const processes = [
//   {
//     id: 1,
//     title: "Discover",
//     desc: "We explore your brand, goals, and audience to uncover key insights.",
//     icon: <Share2 className="w-10 h-10 text-black" />,
//     image: "/badge.jpg",
//   },
//   {
//     id: 2,
//     title: "Design",
//     desc: "We craft tailored visual and UX strategies that align with your vision.",
//     image: "/badge.jpg",
//   },
//   {
//     id: 3,
//     title: "Develop",
//     desc: "We create scalable solutions via strategy calls and planning.",
//     image: "/badge.jpg",
//   },
//   {
//     id: 4,
//     title: "Launch",
//     desc: "We wrap up and launch—ensuring everything goes smoothly.",
//     image: "/badge.jpg",
//   },
// ];

// const ProcessSection = () => {
//   return (
//     <section className="px-6 md:px-16 lg:px-24 py-20 bg-gray-50">
//             <div className="flex items-start gap-2 mb-4">
//               <motion.h2
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="text-gray-900 text-lg font-medium"
//               >
//                 Process
//               </motion.h2>
      
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//                 viewport={{ once: true }}
//               >
//           <Image src="/badge.jpg" alt="badge" width={20} height={20} className="mt-1"/>
//               </motion.div>
//             </div>
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-lg leading-snug">
//           Creative Steps That Deliver Real Results
//         </h2>
//         <p className="text-gray-600 max-w-lg mt-4 md:mt-0 text-base leading-relaxed">
//           We believe great work comes from clear collaboration. Our process is
//           designed to guide you from the first idea to final launch—smoothly,
//           strategically, and creatively. Here’s how we bring your vision to
//           life.
//         </p>
//       </div>

//       {/* Process Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {processes.map((item, index) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-3xl shadow-sm p-8 flex flex-col justify-between hover:shadow-md transition"
//           >
//             <div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//             <div className="flex justify-start mt-8 w-full">{item.image}</div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;
"use client";

import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import Image from "next/image";

const processes = [
  {
    id: 1,
    title: "Discover",
    desc: "We explore your brand, goals, and audience to uncover key insights.",
    icon: <Share2 className="w-10 h-10 text-black" />,
    image: "/process-card-img-01.webp",
  },
  {
    id: 2,
    title: "Design",
    desc: "We craft tailored visual and UX strategies that align with your vision.",
    image: "/process-card-img-02.webp",
  },
  {
    id: 3,
    title: "Develop",
    desc: "We create scalable solutions via strategy calls and planning.",
    image: "/process-card-img-03.webp",
  },
  {
    id: 4,
    title: "Launch",
    desc: "We wrap up and launch—ensuring everything goes smoothly.",
    image: "/process-card-img-04.webp",
  },
];

const ProcessSection = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-20 bg-gray-50">
      {/* Section Title */}
      <div className="flex items-start gap-2 mb-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-900 text-lg font-medium"
        >
          Process
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/badge.jpg"
            alt="badge"
            width={20}
            height={20}
            className="mt-1"
          />
        </motion.div>
      </div>

      {/* Header Section */}

      <div className="grid sm:grid-cols-2 sm:gap-8 gap-4 items-start ">
        {/* Left: Heading */}
        <div>
          <h2 className="text-[20px] sm:text-3xl  md:text-5xl lg:text-[48px] font-semibold text-gray-900 leading-tight tracking-tight">
            Creative Steps That Deliver Real Results
          </h2>
        </div>

        {/* Right: Description */}
        <div>
          <p className="text-gray-600 text-[11px] md:text-[16px] sm:text-[15px] md:text-start leading-relaxed md:mt-3 md:mr-14">
            We believe great work comes from clear collaboration. Our process is
            designed to guide you from the first idea to final launch—smoothly,
            strategically, and creatively. Here’s how we bring your vision to
            life.
          </p>
        </div>
      </div>

      {/* Process Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        {processes.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white h-[340px] sm:h-full rounded-3xl shadow-sm p-12 flex flex-col justify-between hover:shadow-md transition"
          >
            {/* Image on top for 2nd and 4th cards */}
            {(index === 1 || index === 3) && (
              <div className="flex justify-center mb-6 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={90}
                  height={70}
                  className="rounded-full mb-8 md:w-27 sm:w-20 w-17"
                />
              </div>
            )}

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Image at bottom for 1st and 3rd cards */}
            {(index === 0 || index === 2) && (
              <div className="flex justify-center sm:mt-18 mt-6   w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={90}
                  height={70}
                  className="rounded-full sm:mt-18 md:w-27 sm:w-20 w-17 "
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
