"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, easeOut } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

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
        <motion.div className="mb-8 " variants={fadeUp}>
          <p className="text-md sm:text-lg text-gray-900 mb-3  flex items-center gap-2">
            Blog{" "}
            <span>
              <Image
                src="/badge-icon.webp"
                alt="badge"
                width={16}
                height={16}
                className="w-4"
              />
            </span>
          </p>

          <div className="grid sm:grid-cols-2 gap-8 items-start ">
            {/* Left: Heading */}
            <div>
              <h2 className="text-[23px] sm:text-3xl  md:text-5xl lg:text-[48px] font-semibold  text-gray-900 leading-tight tracking-tight">
                Company insights
              </h2>
            </div>

            {/* Right: Description */}
            <div>
              <p className="text-gray-600 text-[12px] md:text-[16px] sm:text-[15px] md:text-start leading-relaxed md:mt-3 md:mr-14">
                Our services help you create digital products. Stay ahead of the
                curve with our latest insights, tips, and industry trends.
              </p>
            </div>
          </div>
        </motion.div>
        {/* <div className="sm:flex gap-20 sm:gap-3 md:gap-3 lg-gap-3 items-start">
          <h2 className="flex sm:item-start text-start text-lg sm:text-2xl md:text-4xl font-semibold mb-4  text-gray-900">
            Company insights
          </h2>
          <p className="text-gray-600 text-sm sm:text-md max-w-xl sm:ml-10 text-start  mx-auto lg:mx-0">
            Our services help you create digital products. Stay ahead of the
            curve with our latest insights, tips, and industry trends.
          </p>
        </div> */}

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
