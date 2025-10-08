"use client";
import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

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
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image src={logo} alt="Logo" width={70} height={50} />
            {/* <span className="text-xl font-bold text-gray-800">InoVis</span> */}
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:text-lime-400 transition">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Shopping Bag */}
          <button className="p-2 rounded-full bg-black text-white hover:bg-lime-400 hover:text-black transition">
            <ShoppingBag size={18} />
          </button>

          {/* “Let’s Talk” button visible on md+ */}
          <button className="hidden md:block border border-black text-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition">
            Let’s Talk
          </button>

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
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 hover:text-lime-400 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <div className="flex items-center space-x-3 pt-3">
              {/* <button className="p-2 rounded-full bg-black text-white hover:bg-lime-400 hover:text-black transition">
                <ShoppingBag size={18} />
              </button> */}
              <button className="border border-black text-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition">
                Let’s Talk
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
