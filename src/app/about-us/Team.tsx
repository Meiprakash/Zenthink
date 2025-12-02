"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Twitter, Facebook, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Antone Mccoy",
    role: "CEO, Co-founder",
    image: "/team-01.webp",
  },
  {
    name: "Alina Rose",
    role: "CEO",
    image: "/team-02.webp",
  },
  {
    name: "Jhon Dever",
    role: "Accounts",
    image: "/team-03.webp",
  },
  {
    name: "Lira Flor",
    role: "Co-founder",
    image: "/team-04.webp",
  },
];

const Team = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16   lg:px-24 ">
      {/* Top Section */}
      <div className="flex items-start gap-2 mb-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-neutral-900 text-lg font-medium"
        >
          Team
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/badge.jpg"
            alt="badge"
            width={20}
            height={20}
            className="mt-1"
          />
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 items-start mb-6">
        {/* Left: Heading */}
        <div>
          <h2 className="text-[20px] sm:text-3xl  md:text-5xl lg:text-[48px] font-semibold text-neutral-900 leading-tight tracking-tight">
            Meet Our Professionals trusted Team
          </h2>
        </div>

        {/* Right: Description */}
        <div>
          <p className="text-neutral-600 text-[12px] md:text-[16px] sm:text-[15px] md:text-start leading-relaxed md:mt-3 md:mr-14">
            We help brands grow through strategic design and digital
            experiences. From brand identity to powerful websites, our services
            are Impression.
          </p>
        </div>
      </div>
      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:ml-15 md:mr-8 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-60  h-70 md:w-64 md:h-72 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={340}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-neutral-900">
              {member.name}
            </h3>
            <p className="text-neutral-500 text-sm">{member.role}</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-3 text-neutral-600">
              <Twitter className="w-5 h-5 text-black hover:text-black cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-black hover:text-black cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-black hover:text-black cursor-pointer transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
