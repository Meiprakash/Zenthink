"use client";
import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import logo from "@/app/assets/logo.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/" },
    { name: "Service", href: "/" },
    { name: "Blog", href: "/" },
    { name: "Shop", href: "/" },
    { name: "Contact", href: "/" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Image src={logo} alt="Logo" width={70} height={50} />
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
              <Link href={item.href} className="hover:text-lime-400 transition">
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Shopping Bag */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-black text-white hover:bg-lime-400 hover:text-black transition"
          >
            <ShoppingBag size={18} />
          </motion.button>

          {/* Talk Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block border border-black text-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
          >
            Let’s Talk
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800 hover:text-lime-400 rounded-2xl cursor-pointer transition delay-700 duration-300 ease-in-out"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="md:hidden bg-white border-t border-gray-200"
          >
            <ul className="flex flex-col items-center py-4 space-y-3">
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
                    className="block text-gray-700 hover:text-lime-400 transition"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center space-x-3 pt-3"
              >
                <button className="border border-black text-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition">
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
