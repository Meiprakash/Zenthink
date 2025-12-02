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
    <footer className="relative  rounded-t-[2rem] bg-black text-white bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1300px] mx-auto px-6 md:px-1 py-16">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-12 md:gap-5">
          {/* INOVIS (COLUMN 1) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-4xl sm:text-6xl md:text-[94px] font-semibold mb-3 text-white"
            >
              Zenthink
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
                    className="bg-white text-black p-3 rounded-full hover:bg-lime-500 hover:text-white transition-all"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* COMPANY (COLUMN 2 - MD/LG) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hidden sm:block   md:ml-75 ">
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
          </motion.div>
          {/* UTILITIES (COLUMN 3 - MD/LG) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hidden sm:block  md:ml-40">
              <h4 className="font-semibold text-lg mb-6">Utilities</h4>
              <ul className="md:space-y-7 sm:space-y-4 text-gray-300 text-sm sm:text-lg">
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
          </motion.div>

          {/* MOBILE VIEW — COMPANY + UTILITIES in 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-gray-700"></div>

        {/* BOTTOM SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex  flex-row justify-between items-center sm:gap-4 gap-4 text-left text-sm">
            <div>
              <p className="text-[11px] sm:text-base md:text-lg font-semibold">
                All Rights Reserved.
              </p>

              <p className="text-[11px] sm:text-base md:text-lg mt-1">
                Designed by <span className="font-bold text-sm">ideapeel</span>{" "}
                | Powered by <span className="font-bold text-sm">Webflow</span>
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
        </motion.div>
      </div>
    </footer>
  );
}
// "use client";

// import { motion } from "framer-motion";
// import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
// import Link from "next/link";

// const companies = [
//   { name: "Home", link: "/" },
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

// export default function PremiumFooter() {
//   return (
//     <footer className="relative bg-black text-white rounded-t-[2.5rem]">
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
//         {/* GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr] gap-16">
//           {/* BRAND COLUMN */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1
//               className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-6 
//               bg-gradient-to-r from-lime-200 to-lime-100 text-transparent bg-clip-text"
//             >
//               Zenthink
//             </h1>

//             <p className="text-lg font-medium text-gray-200">
//               Save time. Get Started Now.
//             </p>

//             <p className="text-gray-400 mt-2 text-base max-w-sm leading-relaxed">
//               Unleash the most advanced Agency and boost your productivity with
//               intelligent workflow automation.
//             </p>

//             {/* SOCIAL ICONS */}
//             <div className="mt-10 flex gap-5">
//               {[FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, i) => (
//                 <motion.a
//                   whileHover={{ scale: 1.15, y: -3 }}
//                   key={i}
//                   href="#"
//                   className="p-3 rounded-full bg-white text-black shadow-md hover:bg-lime-300 hover:text-black transition-all"
//                 >
//                   <Icon size={18} />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* COMPANY LINKS */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h4 className="font-semibold text-xl mb-6 text-white/90">
//               Company
//             </h4>

//             <ul className="space-y-5 text-gray-400 text-lg">
//               {companies.map((item, i) => (
//                 <li key={i}>
//                   <Link
//                     href={item.link}
//                     className="hover:text-white relative inline-block transition-all
//                     before:content-[''] before:absolute before:-bottom-1 before:left-0 
//                     before:w-0 before:h-[2px] before:bg-lime-300
//                     hover:before:w-full before:transition-all before:duration-300"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* UTILITIES LINKS */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h4 className="font-semibold text-xl mb-6 text-white/90">
//               Utilities
//             </h4>

//             <ul className="space-y-5 text-gray-400 text-lg">
//               {utilities.map((item, i) => (
//                 <li key={i}>
//                   <Link
//                     href="#"
//                     className="hover:text-white relative inline-block transition-all
//                     before:content-[''] before:absolute before:-bottom-1 before:left-0 
//                     before:w-0 before:h-[2px] before:bg-lime-300
//                     hover:before:w-full before:transition-all before:duration-300"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>

//         {/* DIVIDER */}
//         <div className="my-14 border-t border-white/10"></div>

//         {/* BOTTOM ROW */}
//         <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm gap-5">
//           <div className="text-center sm:text-left">
//             <p className="font-medium text-white/90 text-base">
//               © All Rights Reserved.
//             </p>
//             <p className="mt-1">
//               Designed by <span className="font-bold">ideapeel</span> | Powered
//               by <span className="font-bold">Webflow</span>
//             </p>
//           </div>

//           <div className="flex gap-6 text-base">
//             <Link href="#" className="hover:text-white transition">
//               Privacy policy
//             </Link>
//             <Link href="#" className="hover:text-white transition">
//               Cookies policy
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
