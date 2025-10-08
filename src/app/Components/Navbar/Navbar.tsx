"use client";
import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Service", "Blog", "Shop", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-semibold text-black">
          <span className="text-lime-400">Ino</span>Vis
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="hover:text-lime-400 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 rounded-full bg-black text-white hover:bg-lime-400 hover:text-black transition">
            <ShoppingBag size={18} />
          </button>
          <button className="border border-black text-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition">
            Let’s Talk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 hover:text-lime-400 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
            <div className="flex items-center space-x-4 pt-3">
              <button className="p-2 rounded-full bg-black text-white hover:bg-lime-400 hover:text-black transition">
                <ShoppingBag size={18} />
              </button>
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
