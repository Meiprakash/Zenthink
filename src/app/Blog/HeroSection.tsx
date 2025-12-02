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
      "Delve into the ways in which emotional connections and visual identities shape and influence the perception of a brand in the minds of consumers.",
    image: "/blog-07.png",
    link: "/Blog/design-mistakes",
  },
  {
    title: "What Makes a Brand Stand Out in 2025?s",
    author: "Jenny Kia",
    date: "May 20, 2025",
    description:
      "Hey, design goes beyond mere aesthetics—it's fundamentally about addressing genuine challenges faced by users.",
    image: "/blog-06.png",
    link: "/blog/design-mistakes",
  },
  {
    title: "Behind the Scenes: Our Creative Process Explained",
    author: "Jenny Kia",
    date: "May 20, 2025",
    description:
      "Discover the fascinating process behind transforming innovative ideas into powerful digital experiences that truly resonate with users.",
    image: "/blog-05.png",
    link: "/Blog/design-mistakes",
  },
  {
    title: "How Branding Shapes the Way Customers Feel",
    author: "Jenny Kia",
    date: "May 20, 2025",
    description:
      "Explore key strategies brands use to stand out in today's competitive market. Learn how they build unique identities and engage consumers.",
    image: "/blog-04.png",
    link: "/Blog/design-mistakes",
  },
  {
    title: "Why Great Design Is More Than Just Looks",
    author: "Jenny Kia",
    date: "May 20, 2025",
    description:
      "Avoid common mistakes that harm your website's performance and user experience. Being aware of these pitfalls can improve functionality and satisfaction.",
    image: "/blog-03.png",
    link: "/Blog/design-mistakes",
  },
  {
    title: "The $0 Marketing Plan Creative Strategies",
    author: "Jenny Kia",
    date: "May 20, 2025",
    description:
      "Explore these fantastic and cost-free strategies to promote your digital products effectively and stand out in the market!",
    image: "/blog-02.png",
    link: "/Blog/design-mistakes",
  },
  {
    title: "Worst Advice We've Ever Heard About Web Design",
    author: "Jenny Kia",
    date: "May 20, 2025",
    description:
      "A digital overhaul increased website traffic, enhanced user engagement, and fueled business growth.",
    image: "/blog-01.png",
    link: "/Blog/design-mistakes",
  },
];

const HeroSection = () => {
  return (
    <div>
      <section className="w-full pt-12 md:py-24 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row md:items-start justify-between mb-8 md:mb-16 gap-6"
          >
            {/* Left side title */}
            <div>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-[30px] md:text-[60px] font-medium leading-light text-black"
              >
              Blogs
              </motion.h1>
            </div>

            {/* Right side text */}
            <p className="text-neutral-600 text-[14px] md:text-lg leading-relaxed max-w-lg -mt-3 md:mt-0">
              We combine bold ideas with smart strategy to design brand
              experiences that connect, convert, and inspire. From startups to
              industry leaders unforgettable.
            </p>
          </motion.div>

          {/* Blog Cards Section */}
          <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-10 md:gap-16">
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
                  className="block group overflow-hidden transition-all duration-100"
                >
                  {/* Image */}
                  <div className="overflow-hidden rounded-3xl">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={800}
                      height={500}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-125"
                    />
                  </div>

                  {/* Text content */}
                  <div className="pt-6">
                    <p className="text-neutral-500 text-sm mb-2">
                      {blog.date} • {blog.author}
                    </p>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2 transition-colors duration-300">
                      {blog.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {blog.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
