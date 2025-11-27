// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// const ConnectSection = () => {
//   return (
//     <section className="relative w-full bg-white py-28 flex flex-col items-center justify-center text-center overflow-hidden">
//       {/* Left Sphere */}
//       <motion.div
//         initial={{ x: -250, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="absolute left-0  w-[450px] h-[450px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] opacity-90"
//       >
//         <Image
//           src="/cta-shape-left.jpg"
//           alt="Left Sphere"
//           width={450}
//           height={450}
//           className=" w-450 h-150"
//         />
//       </motion.div>

//       {/* Right Sphere */}
//       <motion.div
//         initial={{ x: 250, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="absolute right-0  w-[450px] h-[450px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] opacity-90"
//       >
//         <Image
//           src="/cta-shape-right.jpg"
//           alt="Right Sphere"
//           width={450}
//           height={450}
//           className=" w-300 h-120 "
//         />
//       </motion.div>

//       {/* Center Content */}
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="relative z-10 max-w-[90%] md:max-w-3xl mx-auto px-4"
//       >
//         <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[6rem] font-bold text-gray-900 leading-tight">
//           Let’s Connect
//         </h2>
//         <h3 className="text-[2rem] sm:text-[2.5rem] md:text-[6rem] font-semibold text-gray-400 mt-2 leading-tight">
//           With Us!
//         </h3>

//         {/* Button */}
//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-10 inline-block"
//         >
//           <Link href="/Contact">
//             <button className="relative overflow-hidden text-md font-medium px-7 py-4 rounded-lg text-white bg-black group">
//               <span className="relative z-10">Contact Us</span>
//               <span className="absolute inset-0 rounded-lg  bg-violet-500 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
//             </button>
//           </Link>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default ConnectSection;
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ConnectSection = () => {
  return (
    <section className="relative w-full bg-white py-28 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Left Sphere */}
      <motion.div
        initial={{ x: -250, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-0 top-1/3 -translate-y-1/2 w-[200px] h-[250px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] opacity-90"
      >
        <Image
          src="/cta-shape-left.jpg"
          alt="Left Sphere"
          width={450}
          height={450}
          className="md:w-450 md:h-140 sm:w-50"
        />
      </motion.div>

      {/* Right Sphere */}
      <motion.div
        initial={{ x: 250, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute right-0 top-1/3 -translate-y-1/2  w-[200px] h-[250px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] opacity-90"
      >
        <Image
          src="/cta-shape-right.jpg"
          alt="Right Sphere"
          width={450}
          height={450}
          className=" md:w-450 md:h-140 sm:w-50"
        />
      </motion.div>

      {/* Center Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-[90%] md:max-w-3xl mx-auto px-4"
      >
        <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[6rem] font-bold text-gray-900 leading-tight">
          Let’s Connect
        </h2>
        <h3 className="text-[2rem] sm:text-[2.5rem] md:text-[6rem] font-semibold text-gray-400 mt-2 leading-tight">
          With Us!
        </h3>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-block"
        >
          <Link href="/Contact">
            <button className="relative overflow-hidden text-md font-medium px-7 py-4 rounded-lg text-white bg-black group">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 rounded-lg bg-violet-500 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ConnectSection;
