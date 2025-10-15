"use client";

import React from "react";
import Image from "next/image";
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
    <section className="w-full bg-white py-20 px-6 md:px-16   lg:px-24">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 md:ml-15 md:mr-8">
        <div>
          <span className="inline-flex items-center gap-2  text-gray-700 px-3 py-1 rounded-full text-lg font-medium">
            Team
            <Image
              src="/badge.jpg"
              alt="badge"
              width={18}
              height={18}
              className="object-contain"
            />
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold mt-3 text-gray-900">
            Meet Our Professionals <br /> trusted Team
          </h2>
        </div>

        <p className="text-gray-600 max-w-lg text-base md:text-lg">
          We help brands grow through strategic design and digital experiences.
          From brand identity to powerful websites, our services are Impression.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:ml-15 md:mr-8 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-60 h-60 md:w-64 md:h-72 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-gray-500 text-sm">{member.role}</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-3 text-gray-600">
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
