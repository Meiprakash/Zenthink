"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import FAQ from "../Components/FaqSection";
import ConnectSection from "../Components/ConnectUs";
import Footer from "../Components/Footer";
import BlogSection from "../Components/Blog";

// Define the Tab type
type Tab = "UIUX" | "WebDev" | "Branding" | "Motion";

// Nav buttons
const navItems: Tab[] = ["UIUX", "WebDev", "Branding", "Motion"];

// Cards data with correct typing
const cardsData: Record<
  Tab,
  {
    image: string;
    title: string;
    link: string;
    description: string;
    tags: string[];
  }[]
> = {
  UIUX: [
    {
      image: "/project-06.png",
      title: "UIUX Project 1",
      link: "/Service/ui-ux",
      description:
        "Add life to your brand through animation, movement, and storytelling.",
      tags: ["UI/UX", "Design", "Creative"],
    },
  ],
  WebDev: [
    {
      image: "/project-05.png",
      title: "Web Dev Project 1",
      link: "/service/UIUX-project-1",

      description:
        "Modernize your site with strategic updates that improve usability.",
      tags: ["Web", "Development", "Strategy"],
    },
  ],
  Branding: [
    {
      image: "/project-06.png",
      title: "Branding Project 1",
      link: "/service/UIUX-project-1",
      description: "Create memorable brands that stand out in the market.",
      tags: ["Branding", "Marketing", "Design"],
    },
  ],
  Motion: [
    {
      image: "/project-05.png",
      title: "Motion Project 1",
      link: "/service/UIUX-project-1",
      description: "Bring stories to life with animation and motion graphics.",
      tags: ["Animation", "Motion", "Creative"],
    },
  ],
};

const Nav = () => {
  const [active, setActive] = useState<Tab>("UIUX");

    return (
      <div>
        <div className="flex flex-col items-center justify-center text-xl py-10 bg-gray-50bg-[radial-gradient(circle_at_center,white_0%,#EAE4F9_60%,#f9f9f9_100%)] min-h-screen">
          {/* Nav Buttons */}
          <ul className="flex flex-wrap justify-center gap-4 text-gray-700 font-medium mb-10">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className={`cursor-pointer border border-gray-400 transition-all duration-300 py-3 px-6 rounded-3xl hover:bg-black hover:text-white ${
                  active === item
                    ? "bg-black text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Cards Section */}
          <div className="w-full flex flex-col items-center">
            <AnimatePresence mode="wait">
              {cardsData[active].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="w-full max-w-7xl mx-auto mb-10"
                >
                  <Link href={card.link}>
                    <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-3xl shadow-sm overflow-hidden p-6 cursor-pointer">
                      {/* Left Image */}
                      {/* <h2>{ card.title}</h2> */}
                      <motion.div
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-1/2 overflow-hidden rounded-2xl"
                      >
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={500}
                          height={400}
                          className="w-full h-auto rounded-2xl object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </motion.div>

                      {/* Right Content */}
                      <div className="mt-6 md:mt-0 md:ml-10 w-full md:w-1/2 p-6 text-left">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                          {card.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {card.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3">
                          {card.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
            <FAQ />
            <BlogSection />
            <ConnectSection />
            <Footer/>
            
      </div>
    );
};

export default Nav;
