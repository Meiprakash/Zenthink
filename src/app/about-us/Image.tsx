// "use client";

// import { useState } from "react";
// import { X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// export default function SecondComp() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className="relative md:w-full  mx-auto my-10">
//       {/* Image section with motion */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative w-full sm:h-[300px] md:h-[600px]  overflow-hidden"
//       >
//         <Image
//           src="/about-hero-img.jpg"
//           alt="About Hero"
//          fill
//           className="w-full h-full object-cover "
//         />

//         {/* Play Button */}
//         <motion.button
//           type="button"
//           onClick={() => setIsModalOpen(true)}
//           aria-label="Play Video"
//           className="absolute inset-0 flex items-center justify-center z-20"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <div className="bg-white/80 hover:bg-white/95 transition p-5 rounded-full shadow-lg">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-10 h-10 text-black"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//             >
//               <path d="M8 5v14l11-7z" />
//             </svg>
//           </div>
//         </motion.button>
//       </motion.div>

//       {/* Video Modal */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsModalOpen(false)}
//           >
//             {/* Close Button */}
//             <motion.button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-6 right-6 bg-white/80 hover:bg-white text-black p-3 rounded-full z-50 transition"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0 }}
//             >
//               <X className="w-5 h-5" />
//             </motion.button>

//             {/* Video Container */}
//             <motion.div
//               className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] aspect-video rounded-2xl overflow-hidden shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <iframe
//                 className="w-full h-full"
//                 src="https://www.youtube.com/embed/ZW-Q2vi9sOI?autoplay=1&rel=0"
//                 title="About Us Video"
//                 allow="autoplay; fullscreen; picture-in-picture"
//                 allowFullScreen
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SecondComp() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full mx-auto mt-10 mb-16 px-4 sm:px-6 lg:px-10">
      {/* ===== Hero Image Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[250px] sm:h-[350px] md:h-[550px] overflow-hidden rounded-2xl shadow-sm"
      >
        <Image
          src="/about-hero-img.jpg"
          alt="About Hero"
          fill
          className="object-cover"
          priority
        />

        {/* Play Button */}
        <motion.button
          type="button"
          onClick={() => setIsModalOpen(true)}
          aria-label="Play Video"
          className="absolute inset-0 flex items-center justify-center z-20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="bg-white/80 hover:bg-white transition p-4 sm:p-5 rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 sm:w-10 sm:h-10 text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </motion.button>
      </motion.div>

      {/* ===== Video Modal ===== */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 bg-white/80 hover:bg-white text-black p-3 rounded-full z-50 transition"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Video Container */}
            <motion.div
              className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ZW-Q2vi9sOI?autoplay=1&rel=0"
                title="About Us Video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
