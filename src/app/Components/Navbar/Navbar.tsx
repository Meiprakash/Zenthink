// "use client";

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useRouter, usePathname } from "next/navigation";
// import Industries from "./Industries";

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about-us" },
//   { name: "Service", href: "/Service" },
//   {
//     name: "Industries",
//     dropdown: true,
//     items: [
//       {
//         title: "Healthcare",
//         href: "/industries/healthcare",
//         desc: "We deliver customized healthcare software development solutions, improving patient care, streamlining workflows, and ensuring compliance with industry regulations through innovative technology.",
//         services: [
//           {
//             name: "AI Healthcare Software Development & Consulting",
//             href: "/industries/healthcare/ai-healthcare",
//           },
//           {
//             name: "Healthcare App Development",
//             href: "/industries/healthcare/app-dev",
//           },
//           {
//             name: "EHR Software Development",
//             href: "/industries/healthcare/ehr-software",
//           },
//           {
//             name: "Healthcare AI Chatbot Development",
//             href: "/industries/healthcare/chatbot",
//           },
//           {
//             name: "Telemedicine App Development",
//             href: "/industries/healthcare/telemedicine",
//           },
//           {
//             name: "Medical Billing Software Development",
//             href: "/industries/healthcare/billing",
//           },
//           {
//             name: "Fitness App Development",
//             href: "/industries/healthcare/fitness",
//           },
//           {
//             name: "RPM Software Development",
//             href: "/industries/healthcare/rpm",
//           },
//         ],
//       },
//       {
//         title: "FinTech",
//         href: "/industries/fintech",
//         desc: "We deliver customized healthcare software development solutions, improving patient care, streamlining workflows, and ensuring compliance with industry regulations through innovative technology.",

//         services: [
//           {
//             name: "FinTech App Development",
//             href: "/industries/fintech/app-dev",
//           },
//           {
//             name: "Payment Gateway Solutions",
//             href: "/industries/fintech/payment",
//           },
//         ],
//       },
//       {
//         title: "Logistics",
//         href: "/industries/logistics",
//         desc: "We deliver customized healthcare software development solutions, improving patient care, streamlining workflows, and ensuring compliance with industry regulations through innovative technology.",

//         services: [
//           {
//             name: "Fleet Management Software",
//             href: "/industries/logistics/fleet",
//           },
//         ],
//       },
//       {
//         title: "ELearning",
//         href: "/industries/elearning",
//         desc: "We deliver customized healthcare software development solutions, improving patient care, streamlining workflows, and ensuring compliance with industry regulations through innovative technology.",

//         services: [
//           {
//             name: "Learning App Development",
//             href: "/industries/elearning/app-dev",
//           },
//         ],
//       },
//       {
//         title: "E-Commerce",
//         href: "/industries/ecommerce",
//         desc: "We deliver customized healthcare software development solutions, improving patient care, streamlining workflows, and ensuring compliance with industry regulations through innovative technology.",

//         services: [
//           {
//             name: "E-Commerce Store Development",
//             href: "/industries/ecommerce/store",
//           },
//         ],
//       },
//       {
//         title: "Real Estate",
//         href: "/industries/real-estate",
//         desc: "We deliver customized healthcare software development solutions, improving patient care, streamlining workflows, and ensuring compliance with industry regulations through innovative technology.",

//         services: [
//           {
//             name: "Real Estate CRM Development",
//             href: "/industries/real-estate/crm",
//           },
//         ],
//       },
//     ],
//   },
//   { name: "Blog", href: "/Blog" },
//   { name: "Contact", href: "/Contact" },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
//   const [selectedIndustry, setSelectedIndustry] = useState(0);

//   const pathname = usePathname();
//   const router = useRouter();

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ type: "spring", stiffness: 80, damping: 15 }}
//       className="w-full"
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-7">
//         {/* LOGO */}
//         <Link href="/">
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Image
//               src="/ZenThink_Icon.png"
//               alt="Logo"
//               width={110}
//               height={50}
//             />
//           </motion.div>
//         </Link>

//         {/* DESKTOP NAV */}
//         <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
//           {navItems.map((item) => (
//             <li key={item.name} className="relative group">
//               {!item.dropdown ? (
//                 <Link
//                   href={item.href || "#"}
//                   className={`transition hover:text-black ${
//                     pathname === item.href ? "text-black" : "text-gray-700"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ) : (
//                 <>
//                   {/* INDUSTRIES TITLE */}
//                   <span
//                     className="cursor-pointer hover:text-black"
//                     onMouseEnter={() => setIsIndustriesOpen(true)}
//                   >
//                     {item.name}
//                   </span>

//                   {/* MEGA MENU */}
//                   {isIndustriesOpen && (
//                     <div
//                       className="absolute left-0 top-8 bg-black border shadow-xl rounded-xl p-6 w-[700px] flex z-50"
//                       onMouseEnter={() => setIsIndustriesOpen(true)}
//                       onMouseLeave={() => setIsIndustriesOpen(false)}
//                     >
//                       {/* LEFT SIDEBAR INDUSTRIES */}
//                       <div className="w-1/3 border-r pr-4 space-y-2 bg-green-600">
//                         {item.items.map((industry, index) => (
//                           <Link href={industry.href} key={industry.title}>
//                             <p
//                               key={industry.title}
//                               onMouseEnter={() => setSelectedIndustry(index)}
//                               className={`py-2 cursor-pointer transition-all duration-200 ${
//                                 selectedIndustry === index
//                                   ? "text-black font-semibold border-l-2 border-black pl-2"
//                                   : "text-gray-600"
//                               } hover:text-black`}
//                             >
//                               {industry.title}
//                             </p>
//                           </Link>
//                         ))}
//                       </div>

//                       {/* RIGHT SIDE SERVICES */}
//                       {/* <div> */}
//                         <div className="bg-red-800 w-2/3 pl-6 grid grid-cols-2 gap-4 mb-4 max-h-[220px] overflow-y-auto pr-2 custom-scroll">
//                           {item.items[selectedIndustry]?.services?.map(
//                             (service) => (
//                               <Link
//                                 key={service.name}
//                                 href={service.href || "#"}
//                                 className="border p-3 rounded-md text-sm hover:shadow-md"
//                               >
//                                 {service.name}
//                               </Link>
//                             )
//                           )}
//                         </div>

//                         {/* <p className="bg-yellow-500">{item.items[selectedIndustry].desc}</p> */}
//                       {/* </div> */}
//                     </div>
//                   )}
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* CTA + MOBILE BTN */}
//         <div className="flex items-center space-x-4">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => router.push("/Contact")}
//             className="hidden md:block border border-black text-black px-5 py-2 rounded-lg hover:bg-black hover:text-white"
//           >
//             Let’s Talk
//           </motion.button>

//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden text-gray-800 hover:text-black"
//           >
//             {menuOpen ? <X size={26} /> : <Menu size={29} />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-black text-white rounded-2xl mx-6 mt-2"
//           >
//             <ul className="flex flex-col ml-10 m-6 py-4 space-y-3">
//               {navItems.map((item) => (
//                 <li key={item.name}>
//                   {!item.dropdown ? (
//                     <Link
//                       href={item.href || "#"}
//                       onClick={() => setMenuOpen(false)}
//                       className={`block text-md ${
//                         pathname === item.href
//                           ? "text-blue-400 font-semibold"
//                           : "text-gray-200 hover:text-blue-400"
//                       }`}
//                     >
//                       {item.name}
//                     </Link>
//                   ) : (
//                     <details>
//                       <summary className="cursor-pointer py-2">
//                         {item.name}
//                       </summary>
//                       <div className="ml-4 mt-2 space-y-2 text-gray-300">
//                         {item.items.map((industry) => (
//                           <Link
//                             key={industry.title}
//                             href={industry.href || "#"}
//                             onClick={() => setMenuOpen(false)}
//                             className="block"
//                           >
//                             {industry.title}
//                           </Link>
//                         ))}
//                       </div>
//                     </details>
//                   )}
//                 </li>
//               ))}

//               <button
//                 onClick={() => {
//                   router.push("/Contact");
//                   setMenuOpen(false);
//                 }}
//                 className="border bg-white border-black text-black px-5 py-2 rounded-lg hover:bg-blue-400 hover:text-white"
//               >
//                 Let’s Talk
//               </button>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { industriesData } from "@/app/utils/industriesData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const pathname = usePathname();
  const router = useRouter();

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="w-full"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-7">
        {/* LOGO */}
        <Link href="/">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Image
              src="/ZenThink_Icon.png"
              alt="Logo"
              width={110}
              height={50}
            />
          </motion.div>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {/* STATIC NAV LINKS */}
          <li>
            <Link href="/" className="hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-black">
              About
            </Link>
          </li>
          <li>
            <Link href="/Service" className="hover:text-black">
              Service
            </Link>
          </li>

          {/* INDUSTRIES DROPDOWN */}
          <li className="relative group">
            <span
              className="cursor-pointer hover:text-black"
              onMouseEnter={() => setIsIndustriesOpen(true)}
            >
              Industries
            </span>

            {isIndustriesOpen && (
              <div
                className="absolute left-0 top-8 bg-white border shadow-xl rounded-xl p-6 w-[700px] flex z-50"
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                {/* LEFT SIDEBAR (Industry List) */}
                <div className="w-1/3 border-r pr-4 space-y-2">
                  {industriesData.map((industry, index) => (
                    <p
                      key={industry.title}
                      onMouseEnter={() => setSelectedIndustry(index)}
                      className={`py-2 cursor-pointer transition-all duration-200 ${
                        selectedIndustry === index
                          ? "text-black font-semibold border-l-2 border-black pl-2"
                          : "text-gray-600"
                      } hover:text-black`}
                    >
                      {industry.title}
                    </p>
                  ))}
                </div>

                {/* RIGHT SIDE SERVICES */}
                <div className="w-2/3 pl-6 grid grid-cols-2 gap-4 max-h-[220px] overflow-y-auto">
                  {industriesData[selectedIndustry].services.map((service) => (
                    <Link
                      key={service.name}
                      href={`/Industries/${industriesData[selectedIndustry].slug}/${service.slug}`}
                      className="border p-3 rounded-md text-sm hover:shadow-md"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <Link href="/Blog" className="hover:text-black">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-black">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <button className="border border-black text-black px-5 py-2 rounded-lg hover:bg-black hover:text-white">
            Let’s Talk
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 hover:text-black"
        >
          {menuOpen ? <X size={26} /> : <Menu size={29} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black text-white rounded-2xl mx-6 mt-2"
          >
            <ul className="flex flex-col ml-10 m-6 py-4 space-y-3">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about-us" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link href="/Service" onClick={() => setMenuOpen(false)}>
                Service
              </Link>

              <details>
                <summary>Industries</summary>
                <div className="ml-4 mt-2 space-y-2 text-gray-300">
                  {industriesData.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`/Industries/${ind.slug}`}
                      className="block"
                    >
                      {ind.title}
                    </Link>
                  ))}
                </div>
              </details>

              <Link href="/Blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/Contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
