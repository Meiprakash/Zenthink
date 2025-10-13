// "use client";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <div className="bg-white">
//       <motion.div
//         initial={{ y: 90, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="grid grid-cols-5 gap-4 md:mt-10 p-10">
//           <p className="col-span-3  text-gray-950 md:text-6xl sm:text-3xl md:m-7 md:mt-10 sm:mt-10 md:ml-19 flex-1 ">
//             We’re a Creative Agency with{" "}
//             <span className="text-gray-700">Heart</span> and{" "}
//             <span className="text-gray-700">Vision</span>
//           </p>
//           <div className="col-span-2 md:mt-15 sm:mt-12 md:ml-20 sm:m-9">
//             <img
//               src="hero-award-img.jpg"
//               alt="star-image"
//               className="sm:mb-4 md:w-13 sm:w-12"
//             />
//             <span className="text-gray-800 md:text-lg sm:mt-8 sm:text-sm">
//               2025 Best Award
//             </span>
//           </div>
//           <div className="col-span-2 md:ml-19 flex items-center gap-3 md:h-13 sm:h-10">
//             <img
//               src="about-avater-group.jpg"
//               alt="user-img"
//               className="h-full w-auto object-contain"
//             />
//             <p className="text-black grid justify-center h-full leading-tight">
//               <span className="md:text-xl sm:text-sm">120K +</span>
//               <span className="text-gray-600 md:text-md sm:text-sm">
//                 Active users
//               </span>
//             </p>
//           </div>

//           <div className="col-span-3 md:pl-15  md:mr-68 ">
//             <h2 className=" md:text-lg text-gray-500 sm:text-sm sm:ml-9 sm:mr-5">
//               We combine bold ideas with smart strategy to design brand
//               experiences that connect, convert, and inspire. From startups to
//               industry leaders.
//             </h2>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
"use client";
import { motion , easeOut } from "framer-motion";

export default function Hero() {
  // container variant for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between each child
      },
    },
  };

  // child animation variant
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <div className="bg-white">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-5 gap-4 md:mt-10 p-10"
      >
        {/* Hero Heading */}
        <motion.p
          variants={item}
          className="col-span-3 text-gray-950 md:text-6xl sm:text-3xl md:m-7 md:ml-15 md:mt-10 sm:mt-10 flex-1"
        >
          We’re a Creative Agency with
                  <span className="text-gray-700">{" "}Heart</span> and{" "}
          <span className="text-gray-700">Vision</span>
        </motion.p>

        {/* Award Image */}
        <motion.div
          variants={item}
          className="col-span-2 md:mt-15 sm:mt-12 md:ml-20 sm:m-9"
        >
          <img
            src="hero-award-img.jpg"
            alt="star-image"
            className="sm:mb-4 md:w-13 sm:w-12"
          />
          <span className="text-gray-800 md:text-lg sm:mt-8 sm:text-sm">
            2025 Best Award
          </span>
        </motion.div>

        {/* Active Users */}
        <motion.div
          variants={item}
          className="col-span-2 md:ml-19 flex items-center gap-3 md:h-13 sm:h-10"
        >
          <img
            src="about-avater-group.jpg"
            alt="user-img"
            className="h-full w-auto object-contain"
          />
          <p className="text-black grid justify-center h-full leading-tight">
            <span className="md:text-xl sm:text-sm">120K +</span>
            <span className="text-gray-600 md:text-md sm:text-sm">
              Active users
            </span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.div variants={item} className="col-span-3 md:pl-15 md:mr-68">
          <h2 className="md:text-lg text-gray-500 sm:text-sm sm:ml-9 sm:mr-5">
            We combine bold ideas with smart strategy to design brand
            experiences that connect, convert, and inspire. From startups to
            industry leaders.
          </h2>
        </motion.div>
      </motion.div>
    </div>
  );
}
