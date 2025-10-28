import Navbar from "@/app/Components/Navbar/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectCards from "./cards";
import FAQ from "@/app/Components/FaqSection";
import Blog from "@/app/Blog/page";
import ConnectSection from "@/app/Components/ConnectUs";
import Footer from "@/app/Components/Footer";
import BlogSection from "@/app/Components/Blog";

const services = [
  {
    serviceId: "ui-ux",
    title: "UI-UX Design for Project ",
    author: "Elen Arose",
    date: "May 20, 2025",
    content:
      "This is the full content of the blog post where we explain how we helped a business grow online...",
    image: "/blog-02.png",
    tags: ["UI/UX Design", "Solving", "Design"],
    serv: "UI-UX Design",
    PojectOverView:
      " Welcome to innovis, where cutting-edge technology meets exceptional design. The innovis  Website Template is a solution crafted for emerging AI startups looking to establish a strong online presence. This template seamlessly blends advanced with a sleek and modern design, providing a platform to showcase your AI innovations and captivate your audience.",
  },
  {
    serviceId: "web-dev",
    title: "Web Design  for Project ",
    author: "Elen Arose",
    date: "May 20, 2025",
    content:
      "This is the full content of the blog post where we explain how we helped a business grow online...",
    image: "/project-05.png",
    tags: ["UI/UX Design", "Solving", "Design"],
    serv: "Web Design",
  },
  {
    serviceId: "branding",
    title: "Branding  Project ",
    author: "Elen Arose",
    date: "May 20, 2025",
    content: "Create memorable brands that stand out in the market.",
    image: "/project-04.png",
    tags: ["UI/UX Design", "Solving", "Design"],
    serv: "Branding",
  },
  {
    serviceId: "motion",
    title: "Motion  Project ",
    author: "Elen Arose",
    date: "May 20, 2025",
    content: "Bring stories to life with animation and motion graphics.",
    image: "/project-03.png",
    tags: ["UI/UX Design", "Solving", "Design"],
    serv: "Branding",
  },
];

const cardItems = [
  {
    image: "/project-06.png",
    title: "UIUX Project 1",
    link: "/Service/ui-ux",
    description:
      "Add life to your brand through animation, movement, and storytelling.",
    tags: ["UI/UX", "Design", "Creative"],
  },
  {
    image: "/project-05.png",
    title: "Web Dev Project 1",
    link: "/Service/web-dev",

    description:
      "Modernize your site with strategic updates that improve usability.",
    tags: ["Web", "Development", "Strategy"],
  },
  {
    image: "/project-04.png",
    title: "Branding Project 1",
    link: "/Service/branding",
    description: "Create memorable brands that stand out in the market.",
    tags: ["Branding", "Marketing", "Design"],
  },
  {
    image: "/project-03.png",
    title: "Motion Project 1",
    link: "/Service/motion",
    description: "Bring stories to life with animation and motion graphics.",
    tags: ["Animation", "Motion", "Creative"],
  },
];

export default function serviceId({
  params,
}: {
  params: { serviceid: "string" };
}) {
  const Service = services.find((b) => b.serviceId === params.serviceid); //in this place seriveId ngarathu params la vara endpoint.

  if (!Service) {
    return <div>SErvice not found</div>;
  }
  return (
    <div className="bg-white">
      <Navbar />
      <div className=" grid grid-cols-2 p-10 mb-4 mt-10  ">
        <div className="col-span-1 sm:text-4xl md:text-6xl font-semibold text-black md:ml-29    ">
          {Service.title}
        </div>
        <div className="col-span-1 text-gray-600 md:text-lg  sm:text-sm md:mr-50 md:ml-30  ">
          {" "}
          {Service.content}
          <div className="mt-10">
            {Service.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-md "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap3">
        <div className="col-span-1">
          <Image
            src={Service.image}
            alt={Service.title}
            width={1000}
            height={500}
            className="max-w-[900px] md:w-150 max-h-[600px] sm:w-110 lg:w-500  min-h-[300px] object-cover rounded-3xl  mb-8 md:ml-39 sm:ml-12"
          />
        </div>
        <div className="col-span-1 gap-6  md:ml-90 sm:ml-35  ">
          <h2 className="md:text-4xl sm:text-2xl text-black">General Info</h2>
          <div className="gap-13 md:mt-15 ml-2 ">
            <div className="md:mt-10 sm:mt-5 md:mb-10 md:text-xl sm:text-lg text-gray-700">
              <p>Clients</p>
              <p className="text-black">Inovis</p>
            </div>
            <div className="md:mt-10 sm:mt-5 md:mb-10 md:text-xl sm:text-lg text-gray-700">
              <p>Services</p>
              <p className="text-black">{Service.serv}</p>
            </div>
            <div className="md:mt-10 sm:mt-5 md:mb-10 md:text-xl sm:text-lg text-gray-700">
              <p>Website Link</p>
              <a href="www.google.com" className="text-black underline">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:ml-4 ">
        <div className="col-span-2 text-black md:ml-40 sm:ml-9 mt-9 ">
          <div>
            <h2 className="md:text-2xl sm:text-lg font-semibold">
              Project Overview :
            </h2>
            <p className="text-gray-700 mt-3 mb-5 lg:text-lg">
              {Service.PojectOverView}
            </p>
          </div>
          <div>
            <h2 className="lg:text-2xl md:text-xl sm:text-lg font-semibold">
              Benefits :
            </h2>
            <li className="text-gray-700 mb-2 mt-2 lg:text-lg">
              <b className="text-black font-semibold">
                {" "}
                Cross-Platform Compatibility:{" "}
              </b>
              We build apps that work flawlessly on both Android and iOS, giving
              your users a consistent experience, no matter which platform they
              prefer.
            </li>
            <li className="text-gray-700 mb-2 mt-2 lg:text-lg">
              <b className="text-black font-semibold">
                {" "}
                Cross-Platform Compatibility:{" "}
              </b>
              We build apps that work flawlessly on both Android and iOS, giving
              your users a consistent experience, no matter which platform they
              prefer.
            </li>
            <li className="text-gray-700 mb-2 mt-2 md:text-lg">
              <b className="text-black font-semibold">
                {" "}
                Cross-Platform Compatibility:{" "}
              </b>
              We build apps that work flawlessly on both Android and iOS, giving
              your users a consistent experience, no matter which platform they
              prefer.
            </li>
            <li className="text-gray-700 mb-2 mt-2 md:text-lg">
              <b className="text-black font-semibold">
                {" "}
                Cross-Platform Compatibility:{" "}
              </b>
              We build apps that work flawlessly on both Android and iOS, giving
              your users a consistent experience, no matter which platform they
              prefer.
            </li>
            <li className="text-gray-700 mb-2 mt-2 md:text-lg">
              <b className="text-black font-semibold">
                {" "}
                Cross-Platform Compatibility:{" "}
              </b>
              We build apps that work flawlessly on both Android and iOS, giving
              your users a consistent experience, no matter which platform they
              prefer.
            </li>

            <div className="lg:mt-4 sm:mt-2 lg:text-lg sm:text-md text-gray-700">
              <p>
                In a world where mobile devices dominate, having a powerful and
                user-friendly mobile app is essential for any business. We
                specialize in creating custom mobile apps for both Android and
                iOS platforms, ensuring your brand reaches its audience on the
                devices they use the most. Whether you need a simple app to
                streamline services or a complex solution with advanced
                features, we deliver high-performance apps
              </p>
            </div>
            <div className="lg:mt-4 sm:mt-2 lg:text-lg sm:text-md text-gray-700">
              <p>
                <b className="text-black font-semibold">Conclusion : </b>Whether
                you're looking to build a new mobile app from scratch or improve
                an existing one, our team is ready to bring your ideas to life
                on both Android and iOS. With a focus on innovation,
                performance, and user satisfaction, we build mobile apps that
                not only meet your needs but also drive business success. Let us
                help you create an app that stands out in the crowded app
                marketplace and delivers a top-tier experience for your users.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 text-black lg:ml-30 lg:mt-12 sm:mt-13 sm:ml-6">
          <div className="lg:mt-5 lg:mb-6 sm:mb-6">
            <p className="lg:text-4xl sm:text-2xl">40%</p>
            <p className="lg:text-lg text-gray-700">Ecommerce Growth</p>
          </div>

          <div className="lg:mt-5 lg:mb-6 sm:mb-6">
            <p className="lg:text-4xl sm:text-2xl">78K</p>
            <p className="lg:text-lg text-gray-700">Organic Submission</p>
          </div>

          <div className="lg:mt-5 lg:mb-6 sm:mb-6">
            <p className="lg:text-4xl sm:text-2xl">360%</p>
            <p className="lg:text-lg text-gray-700">
              Increased in organic sassion
            </p>
          </div>

          <div className="lg:mt-5 lg:mb-6 sm:mb-6">
            <p className="lg:text-4xl sm:text-2xl">4K +</p>
            <p className="lg:text-lg text-gray-700">New Visitors</p>
          </div>
        </div>
      </div>
      <section className="w-full   py-18 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="flex  md:flex-row items-start md:items-end md:ml-17 justify-between gap-8 md:gap-12">
          {/* Left side title */}
          <div className="text-start md:text-left flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl lg:ml-5  text-black leading-tight">
              Related Project
            </h2>
          </div>

          {/* Right side text */}
          <div className="flex-1 text-start md:text-start">
            <p className="text-gray-600 text-base sm:text-sm md:text-lg leading-relaxed md:max-w-md md:ml-37 mx-auto md:mx-0">
              We help brands grow through strategic design and digital
              experiences. From brand identity to powerful websites, our
              services are Impression.
            </p>
          </div>
        </div>
      </section>
      <ProjectCards />
      <FAQ />
      <BlogSection/>
      <ConnectSection />
      <Footer/>
    </div>
  );
}
