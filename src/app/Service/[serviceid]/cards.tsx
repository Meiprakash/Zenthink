"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cardItems = [
  {
    image: "/project-06.png",
    title: "UI-UX Design for Project ",
    link: "/Service/ui-ux",
    description:
      "Explore how thoughtful layout and digital storytelling can transform online spaces.",
    tags: ["Solving", "UI/UX Design", "Design", "Web Design"],
  },
  {
    image: "/project-03.png",
    title: "Web Design  for Project",
    link: "/Service/web-dev",
    description:
      "Create a strong portfolio that highlights your creative journey effectively.",
    tags: ["Creative", "Design", "Strategy"],
  },
  {
    image: "/project-05.png",
    title: "Branding  Project",
    link: "/Service/branding",
    description:
      "Recognizing innovation in visual storytelling and brand identity creation.",
    tags: ["Branding", "Visuals", "Award"],
  },
  {
    image: "/project-04.png",
    title: "Motion Project 1",
    link: "/Service/motion",
    description: "Bring stories to life with animation and motion graphics.",
    tags: ["Animation", "Motion", "Creative"],
  },
];

const ProjectCards = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {cardItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href={item.link}
              className="group flex flex-col  sm:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500"
            >
              {/* Left Image */}
              <div className="md:w-1/2 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Right Content */}
              <div className="md:w-1/2 w-full flex flex-col  p-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm text-gray-800 bg-gray-100 px-4 py-1.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;
