"use client";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import Navbar from "../Components/Navbar/Navbar";
import SecondComp from "./Image";
import StatsSection from "./CountUP";
import Values from "./Values";
import AwardsSection from "./AwardsSection";
import ProcessSection from "./Process";
import Team from "./Team";
import TestimonialsSection from "../Components/Testimonials";
import FAQ from "../Components/FaqSection";
import BlogSection from "../Components/Blog";
import ConnectSection from "../Components/ConnectUs";
import Footer from "../Components/Footer";

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
      <Navbar />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-5 gap-4 md:mt-3 p-10"
      >

        {/* Hero Heading */}
        <motion.p
          variants={item}
          className="col-span-3 text-gray-950 text-xl md:text-6xl sm:text-3xl md:m-7 md:ml-23 md:mt-10 sm:mt-10 flex-1"
        >
          We’re a Creative Agency with
          <span className="text-gray-700"> Heart</span> and{" "}
          <span className="text-gray-700">Vision</span>
        </motion.p>

        {/* Award Image */}
        <motion.div
          variants={item}
          className="col-span-2 md:mt-15 sm:mt-12 md:ml-23 sm:m-9"
        >
          <Image
            src="/hero-award-img.jpg"
            alt="star-image"
            width={200}
            height={200}
            className="w-10 sm:mb-4 md:w-13 sm:w-12"
          />
          <span className="text-gray-800 md:text-lg sm:mt-8 sm:text-sm">
            2025 Best Award
          </span>
        </motion.div>
        

        {/* Active Users */}
        <motion.div
          variants={item}
          className="col-span-2 md:ml-22 flex items-center gap-3 md:h-13 sm:h-10"
        >
          <Image
            src="/about-avater-group.jpg"
            alt="user-img"
            width={200}
            height={200}
            className=" h-full w-20 md:w-auto lg-w-auto sm:w-auto mt-2 object-contain"
          />
          <p className="text-black grid justify-center mt-2  leading-tight">
            <span className="text-sm md:text-xl sm:text-sm">120K +</span>
            <span className="text-gray-600 md:text-md sm:text-sm">
              Active users
            </span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={item}
          className="col-span-3 md:pl-15 md:mr-38 md:ml-20"
        >
          <h2 className="text-sm ml-7 mt-3 sm:mt-1 md:mt-1 lg:mt-1 md:text-lg text-gray-500 sm:text-sm sm:ml-9 sm:mr-5">
            We combine bold ideas with smart strategy to design brand
            experiences that connect, convert, and inspire. From startups to
            industry leaders.
          </h2>
        </motion.div>
      </motion.div>
      <SecondComp />
      <StatsSection />
      <Values />
      <AwardsSection />
      <ProcessSection />
      <Team />
      <TestimonialsSection />
      <FAQ />
      <BlogSection />
      <ConnectSection />
      <Footer/>
    </div>
  );
}
// "use client";

// import { motion, easeOut } from "framer-motion";
// import Image from "next/image";
// import Navbar from "../Components/Navbar/Navbar";
// import SecondComp from "./Image";
// import StatsSection from "./CountUP";
// import Values from "./Values";
// import AwardsSection from "./AwardsSection";
// import ProcessSection from "./Process";
// import Team from "./Team";
// import TestimonialsSection from "../Components/Testimonials";
// import FAQ from "../Components/FaqSection";
// import BlogSection from "../Components/Blog";
// import ConnectSection from "../Components/ConnectUs";
// import Footer from "../Components/Footer";

// export default function Hero() {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 40 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
//   };

//   return (
//     <div className="bg-gradient-to-r from-white to-[#faf8ff]">
//       <Navbar />

//       {/* ================= HERO SECTION ================= */}
//       <motion.section
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
//       >
//         {/* ========= LEFT SIDE ========= */}
//         <motion.div variants={item} className="space-y-8">
//           {/* Heading */}
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
//             We’re a Creative Agency with{" "}
//             <span className="text-gray-700 font-normal">Heart</span> and{" "}
//             <span className="text-gray-700 font-normal">Vision</span>
//           </h1>

//           {/* Active Users */}
//           <div className="flex items-center gap-3 mt-5">
//             <div className="flex -space-x-3">
//               <Image
//                 src="/user1.jpg"
//                 alt="User 1"
//                 width={40}
//                 height={40}
//                 className="rounded-full border-2 border-white"
//               />
//               <Image
//                 src="/user2.jpg"
//                 alt="User 2"
//                 width={40}
//                 height={40}
//                 className="rounded-full border-2 border-white"
//               />
//               <Image
//                 src="/user3.jpg"
//                 alt="User 3"
//                 width={40}
//                 height={40}
//                 className="rounded-full border-2 border-white"
//               />
//             </div>
//             <div>
//               <p className="text-gray-800 font-semibold text-base md:text-lg">
//                 120K+
//               </p>
//               <p className="text-gray-600 text-sm md:text-base">Active users</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* ========= RIGHT SIDE ========= */}
//         <motion.div
//           variants={item}
//           className="space-y-6 md:space-y-8 sm:mt-10 md:mt-0"
//         >
//           {/* Award Section */}
//           <div className="flex items-center gap-3">
//             <Image
//               src="/hero-award-img.jpg"
//               alt="Award"
//               width={40}
//               height={40}
//               className="rounded-full"
//             />
//             <p className="text-gray-800 font-semibold text-base md:text-lg">
//               2025 Best Award
//             </p>
//           </div>

//           {/* Description */}
//           <p className="text-gray-600 leading-relaxed text-[15px] md:text-[17px] max-w-md">
//             We combine bold ideas with smart strategy to design brand
//             experiences that connect, convert, and inspire. From startups to
//             industry leaders.
//           </p>
//         </motion.div>
//       </motion.section>

//       {/* ========= TEAM IMAGE (below hero) ========= */}
//       <div className="relative w-full md:h-[400px] h-[300px] overflow-hidden">
//         <Image
//           src="/about-video-thumbnail.jpg"
//           alt="Team meeting"
//           fill
//           className="object-cover"
//         />
//         {/* Play Button */}
//         <div className="absolute inset-0 flex justify-center items-center">
//           <button className="bg-white rounded-full shadow-md p-5 hover:scale-110 transition">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="black"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="black"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M5.25 5.25v13.5L18.75 12 5.25 5.25z"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* ================= REMAINING SECTIONS ================= */}
//       <SecondComp />
//       <StatsSection />
//       <Values />
//       <AwardsSection />
//       <ProcessSection />
//       <Team />
//       <TestimonialsSection />
//       <FAQ />
//       <BlogSection />
//       <ConnectSection />
//       <Footer />
//     </div>
//   );
// }
