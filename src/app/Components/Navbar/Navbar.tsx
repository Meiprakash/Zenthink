"use client";

import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "@/app/assets/logo.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/app/AboutUS/page";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/AboutUS" },
  { name: "Service", href: "/Service" },
  { name: "Blog", href: "/Blog" },
  { name: "Shop", href: "/Shop" },
  { name: "Contact", href: "/Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 2 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="top-0 left-0 w-full    "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-7 bg-[radial-gradient(circle_at_center,white_0%,#EAE4F9_60%,#f9f9f9_100%)]">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 cursor-pointer "
          >
            <Image src={logo} alt="Logo" width={80} height={50} />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={item.href} className="hover:text-black transition">
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Shopping Bag */}
          {/* <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-black text-white transition"
          >
            <ShoppingBag size={18} />
          </motion.button> */}

          {/* Let’s Talk Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/")}
            className="hidden md:block border border-black text-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
          >
            Let’s Talk
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800 hover:text-black rounded-2xl cursor-pointer transition delay-700 duration-300 ease-in-out"
          >
            {menuOpen ? <X size={24} /> : <Menu size={29} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border border-gray-200 rounded-2xl ml-19 mr-24 mt-1 text-white"
          >
            <ul className="flex flex-col items-start ml-10 m-6 py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-gray-200 hover:text-blue-400 transition duration-300 text-md "
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}

              {/* Mobile Let’s Talk */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center space-x-3 pt-3"
              >
                <button
                  onClick={() => {
                    router.push("/");
                    setMenuOpen(false);
                  }}
                  className="border bg-white border-black text-black px-5 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300"
                >
                  Let’s Talk
                </button>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
