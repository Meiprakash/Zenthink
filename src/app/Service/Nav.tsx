// "use client";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// const navItems = [
//   { name: "UIUX", href: "/Service" },
//   { name: "Web Dev", href: "/Service" },
//   { name: "Branding", href: "/Service" },
//   { name: "Motion", href: "/Service" },
// ];

// const Nav = () => {
//   const pathname = usePathname();

//   return (
//     <div className="flex item-center justify-center text-xl  py-6">
//       {/* Desktop Menu */}
//       <ul className="hidden md:flex space-x-8 text-gray-700 font-medium ">
//         {navItems.map((item, index) => (
//           <Link
//             key={item.name}
//             href={item.href}
//             className={`border border-gray-400 transition py-3 px-3 rounded-3xl hover:bg-black hover:text-white ${
//               pathname === item.href ? "text-gray-600" : "bg-black "
//             }`}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default Nav;
"use client";
import { useState } from "react";

const navItems = ["UIUX", "Web Dev", "Branding", "Motion"];

const Nav = () => {
  const [active, setActive] = useState("UIUX"); // default active tab

  return (
    <div className="flex flex-col items-center justify-center text-xl py-6">
      {/* Nav Buttons */}
      <ul className="flex space-x-8 text-gray-700 font-medium">
        {navItems.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className={`cursor-pointer border border-gray-400 transition py-3 px-3 rounded-3xl hover:bg-black hover:text-white ${
              active === item ? "bg-black text-white" : "bg-white text-gray-700"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="mt-6 w-full text-center">
        {active === "UIUX" && <div className="bg-black">UIUX Component Here</div>}
        {active === "Web Dev" && <div>Web Dev Component Here</div>}
        {active === "Branding" && <div>Branding Component Here</div>}
        {active === "Motion" && <div>Motion Component Here</div>}
      </div>
    </div>
  );
};

export default Nav;
