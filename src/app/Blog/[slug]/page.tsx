import Navbar from "@/app/Components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import ConnectSection from "@/app/Components/ConnectUs";
import Footer from "@/app/Components/Footer";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export const runtime = 'edge';

const blogs = [
  {
    slug: "case-study",
    title: "How We Helped Grow Online",
    author: "Elen Arose",
    date: "May 20, 2025",
    content:
      "This is the full content of the blog post where we explain how we helped a business grow online...",
    image: "/blog-02.png",
    link: "/blog/case-study",
  },
  {
    slug: "design-mistakes",
    title: "Top Mistakes Made With Web Design Process",
    author: "Jenny Kia",
    date: "May 20, 2025",
    content:
      "In this article, we explore the biggest mistakes designers make and how to avoid them for better UX...",
    image: "/blog-07.png",
    link: "/blog/design-mistakes",
  },
];

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-neutral-600">
          404 | Blog Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-neutral-100">
      <Navbar />

      {/* Blog Header Section */}
      <div className="  px-6 md:px-20 py-16 sm:py-16">
        <div className="grid sm:grid-cols-2 p-4 lg:p-8 lg:mb-4 sm:gap-8">
          <h1 className="text-xl sm:text-2xl lg:text-4xl sm:ml-7 text-black font-semibold  mb-4 col-span-1">
            {blog.title}
          </h1>
          <p className="text-neutral-500 text-sm md:text-lg mb-8  col-span-1 lg:ml-19 lg:mr-7">
            {blog.content}
          </p>
        </div>

        {/* Featured Image */}
        <div className="flex justify-center">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1000}
            height={500}
            className="w-full max-w-6xl mx-8  max-h-[500px] object-cover rounded-3xl  sm:mb-3"
          />
        </div>
      </div>

      {/* Blog Body */}
      <div className="grid sm:grid-cols-3 lg:grid-cols-3 lg:ml-25 gap-8 px-6 md:px-20 pb-16 text-black">
        <div className="lg:col-span-2 sm:col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl lg:text-4xl font-semibold mb-3">
              We’ve Ever Heard About Web Design
            </h2>

            <h3 className="text-xl lg:text-2xl font-medium mt-8 mb-2">
              Introduction
            </h3>
            <p className="text-neutral-700 text-sm sm:text-[16px] leading-relaxed">
              Web design is full of opinions — and not all of them are good.
              Agency{" "}
              <Link
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-black font-semibold transition-colors"
              >
                Zenthink
              </Link>{" "}
              has heard some terrible advice tossed around like gospel. Whether
              it’s from outdated blogs, “experts” with no UX background, or
              well-meaning clients repeating bad trends, this kind of advice can
              ruin a website before it even launches. Let’s break down the worst
              offenders—and what you should do instead.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-2xl font-medium mb-5">
              Your Website Just Needs to Look Good
            </h3>
            <p className="text-neutral-700 text-sm sm:text-[16px]">
              A beautiful site is nice—but it’s not everything.
            </p>
            <p className="text-neutral-700 text-sm sm:text-[16px] mb-4">
              Here’s why that’s a problem:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-black font-semibold text-sm sm:text-[16px]">
              <li>Pretty design ≠ user-friendly design</li>
              <li>It might lack accessibility</li>
              <li>It won’t convert without structure</li>
            </ol>
          </div>

          <div>
            <h3 className="text-lg sm:text-2xl font-medium mb-5">
              Put Everything on the Homepage
            </h3>
            <p className="text-neutral-700 mb-3 text-sm sm:text-[16px]">
              Too much information up front can:
            </p>
            <ul className="list-disc list-inside space-y-1 text-black font-semibold text-sm sm:text-[16px]">
              <li>Overwhelm visitors</li>
              <li>Dilute your message</li>
              <li>Confuse your navigation</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6">
            <p className="text-lg md:text-[26px]  text-neutral-700 font-medium">
              “Experts with no UX background, or well-meaning clients repeating
              bad trends, can ruin a website before it even launches.”
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-medium mb-2">
              Internal Navigation Done Right
            </h3>
            <p className="text-neutral-700 text-sm sm:text-[16px]">
              Internal linking helps with both user experience and SEO. Here’s a
              good example of how to do it:{" "}
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-600 transition-colors"
              >
                {" "}
                Explore our UX Design Services
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-medium mb-2">
              Final Thought
            </h3>
            <p className="text-neutral-700 text-sm sm:text-[16px]">
              Web design isn’t just about looking good. It’s about guiding
              users, telling your story, and helping people take action. The
              best sites feel effortless—and that takes thoughtful planning.
              Ready to avoid bad advice and build something great?
            </p>
          </div>
        </div>

        {/* Sidebar  */}
        <div className="col-span-1">
          <div className="sm:px-5 py-3 ">
            <h1 className="text-lg sm:text-2xl">Top Authors</h1>
          </div>
          <div className="grid grid-cols-3 ">
            <div className="col-span-1 lg:mr-1 lg:ml-5">
              <Image
                src="/author.png"
                alt="author "
                width={100}
                height={100}
                className="rounded-2xl lg:w-30 lg:h-30 sm:w-50 sm:h-20"
              />
            </div>
            <div className="col-span-2 lg:mr-30 sm:ml-3 ">
              <h2 className="text-black font-semibold lg:text-xl  mb-2">
                Jenny Kia
              </h2>
              <p className="text-neutral-700 sm:text-sm lg:mt-5 mt-1">
                Web developer
              </p>
              <div className="flex lg:mt-5">
                <a href="https://Twitter.com" className="m-1">
                  {" "}
                  <FaTwitter />
                </a>
                <a href="https://Linkedin.com" className="m-1">
                  <FaLinkedinIn />
                </a>
                <a href="https://Youtube.com" className="m-1">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blog cards */}
      <div className="sm:max-w-7xl sm:mx-auto ml-4 mr-4  ">
        {/* Section Heading */}
        <div className="flex flex-col  md:flex-row md:items-end justify-between mb-16 gap-6">
          {/* Left side title */}
          <div>
            <h2 className="text-xl md:text-5xl sm:text-2xl ml-3 sm:ml-5 sm:mt-3 font-semibold text-neutral-900 leading-tight">
              Related Blog
            </h2>
          </div>

          {/* Right side text */}
          <p className="text-neutral-600 text-sm sm:text-lg leading-relaxed ml-2 max-w-lg">
            We help brands grow through strategic design and digital
            experiences. From brand identity to powerful websites, our services
            are Impression
          </p>
        </div>

        {/* Blog Cards Section */}
        <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-10 ml-3 mr-4">
          {blogs.map((blog, index) => (
            <div key={index}>
              <Link
                href={blog.link}
                className="block group overflow-hidden rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-100"
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
                <div className="p-6">
                  <p className="text-neutral-500 text-sm mb-2">
                    {blog.date} • {blog.author}
                  </p>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {blog.content}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <ConnectSection />
      <Footer />
    </div>
  );
}
