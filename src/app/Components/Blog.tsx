"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Case Study: How We Helped Grow Online",
    author: "Elen Arose",
    date: "May 20, 2025",
    description:
      "Learn from industry errors to avoid web design mistakes. This can enhance your skills and lead to better websites.",
    image: "/blog-02.png",
    link: "/Blog/case-study",
  },
  {
    title: "Top Mistakes Make With Web Design Process",
    author: "Jenny Kia",
    date: "May 20, 2025",
    description:
      "Hey, design goes beyond mere aesthetics—it's fundamentally about addressing genuine challenges faced by users.",
    image: "/blog-07.png",
    link: "/blog/design-mistakes",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="w-full bg-[#fafafa] py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex  md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          {/* Left side title */}
          <div>
            <span className="flex text-gray-800 text-lg font-medium  mb-4">
              Blog{" "}
              <span className="ml-2 ">
                <Image
                  src="/badge.jpg"
                  className="w-6 mt-0.9"
                  alt=""
                  width={16}
                  height={16}
                />
              </span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Company insights
            </h2>
          </div>

          {/* Right side text */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            Our services help you create digital products. Stay ahead of the
            curve with our latest insights, tips, and industry trends.
          </p>
        </motion.div>

        {/* Blog Cards Section */}
        <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href={blog.link}
                className="block group overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-100"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={800}
                    height={500}
                    className="w-full h-72 object-cover transition-transform duration-400 group-hover:scale-125"
                  />
                </div>

                {/* Text content */}
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">
                    {blog.date} • {blog.author}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {blog.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-6 ">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-block"
        >
          <Link href="/Blog">
            <button className="relative overflow-hidden text-md font-medium px-7 py-4 rounded-lg text-white bg-black group">
              <span className="relative z-10">See All Blog</span>
              <span className="absolute inset-0 rounded-lg  bg-violet-500 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
