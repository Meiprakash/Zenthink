// "use client";

// import { motion } from "framer-motion";
// import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
// import Link from "next/link";

// const companies = [
//   { name: "Home", link: "#" },
//   { name: "About us", link: "/about-us" },
//   { name: "Service", link: "/Service" },
//   { name: "Blog", link: "/Blog" },
//   { name: "Shop", link: "#" },
//   { name: "Contact Us", link: "/Contact" },
// ];

// const utilities = [
//   "Privacy & policy",
//   "Style guide",
//   "Changelog",
//   "License",
//   "404 page",
// ];

// export default function Footer() {
//   return (
//     <footer
//       className="relative overflow-hidden rounded-t-[2rem] text-white bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage:
//           "linear-gradient(to right, #060606, #0e0a20, #3c0f6e), url('/footer-bg.webp')",
//         backgroundBlendMode: "overlay",
//       }}
//     >
//       <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-16">
//         {/* TOP SECTION */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10 md:gap-20">
//           {/* LEFT SECTION */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="text-5xl md:text-7xl font-semibold mb-3">InoVis</h1>

//             <p className="text-base md:text-lg font-medium mb-2">
//               Save time. Get Started Now.
//             </p>

//             <p className="text-gray-300 max-w-xs text-sm sm:text-base">
//               Unleash the most advanced Agency and boost your productivity
//             </p>

//             {/* SOCIAL ICONS */}
//             <div className="mt-10 sm:mt-12">
//               <p className="text-lg font-semibold mb-4">Stay in the know</p>

//               <div className="flex items-center gap-4">
//                 {[FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, i) => (
//                   <motion.a
//                     key={i}
//                     whileHover={{ scale: 1.15 }}
//                     href="#"
//                     className="bg-white text-black p-3 rounded-full hover:bg-purple-600 hover:text-white transition-all"
//                   >
//                     <Icon />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* COMPANY SECTION */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h4 className="font-semibold text-lg mb-6">Company</h4>

//             <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
//               {companies.map((item, i) => (
//                 <li key={i}>
//                   <Link
//                     href={item.link}
//                     className="hover:text-white transition-colors"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* UTILITIES SECTION */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <h4 className="font-semibold text-lg mb-6">Utilities</h4>

//             <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
//               {utilities.map((item, i) => (
//                 <li key={i}>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>

//         {/* DIVIDER */}
//         <div className="my-10 border-t border-gray-700"></div>

//         {/* BOTTOM SECTION */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-sm">
//             <div>
//               <p className="md:text-lg font-semibold">All Rights Reserved.</p>
//               <p className="text-base md:text-lg mt-1">
//                 Designed by <span className="font-bold">ideapeel</span> |
//                 Powered by <span className="font-bold">Webflow</span>
//               </p>
//             </div>

//             <div className="flex gap-6">
//               <Link href="#" className="hover:text-white transition-colors">
//                 Privacy policy
//               </Link>
//               <Link href="#" className="hover:text-white transition-colors">
//                 Cookies Policy
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const companies = [
  { name: "Home", link: "#" },
  { name: "About us", link: "/about-us" },
  { name: "Service", link: "/Service" },
  { name: "Blog", link: "/Blog" },
  { name: "Shop", link: "#" },
  { name: "Contact Us", link: "/Contact" },
];

const utilities = [
  "Privacy & policy",
  "Style guide",
  "Changelog",
  "License",
  "404 page",
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden rounded-t-[2rem] text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(to right, #060606, #0e0a20, #3c0f6e), url('/footer-bg.webp')",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-1 py-16">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-12 md:gap-5">
          {/* INOVIS (COLUMN 1) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-semibold mb-3">
              InoVis
            </h1>

            <p className="text-base md:text-lg font-medium mb-2">
              Save time. Get Started Now.
            </p>

            <p className="text-gray-300 max-w-xs text-sm sm:text-base leading-relaxed">
              Unleash the most advanced Agency and boost your productivity
            </p>

            <div className="mt-10 sm:mt-14">
              <p className="text-lg font-semibold mb-4">Stay in the know</p>

              <div className="flex items-center gap-4">
                {[FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.15 }}
                    href="#"
                    className="bg-white text-black p-3 rounded-full hover:bg-purple-600 hover:text-white transition-all"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* COMPANY (COLUMN 2 - MD/LG) */}
          <div className="hidden sm:block   md:ml-80 ">
            <h4 className="font-semibold text-lg  mb-6">Company</h4>
            <ul className="md:space-y-7 sm:space-y-4 text-gray-300 text-sm sm:text-lg">
              {companies.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="hover:text-white  transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* UTILITIES (COLUMN 3 - MD/LG) */}
          <div className="hidden sm:block  sm:ml-10">
            <h4 className="font-semibold text-lg mb-6">Utilities</h4>
            <ul className="md:space-y-7 sm:space-y-4 text-gray-300 text-sm sm:text-lg">
              {utilities.map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MOBILE VIEW — COMPANY + UTILITIES in 2 columns */}
          <div className="grid grid-cols-2 gap-10 ml-3 sm:hidden">
            {/* COMPANY MOBILE ONLY */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Company</h4>
              <ul className="space-y-4 text-gray-300 text-sm">
                {companies.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.link}
                      className="hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* UTILITIES MOBILE ONLY */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Utilities</h4>
              <ul className="space-y-4 text-gray-300 text-sm">
                {utilities.map((item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-gray-700"></div>

        {/* BOTTOM SECTION */}
        <div className="flex  flex-row justify-between items-center sm:gap-4 gap-4 text-left text-sm">
          <div>
            <p className="text-[11px] sm:text-base md:text-lg font-semibold">
              All Rights Reserved.
            </p>

            <p className="text-[11px] sm:text-base md:text-lg mt-1">
              Designed by <span className="font-bold text-sm">ideapeel</span> |
              Powered by <span className="font-bold text-sm">Webflow</span>
            </p>
          </div>

          <div className="flex gap-2 sm:gap-6 text-[11px] sm:text-base">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
