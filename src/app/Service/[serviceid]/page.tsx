// import Navbar from "@/app/Components/Navbar/Navbar";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import ProjectCards from "./cards";
// import FAQ from "@/app/Components/FaqSection";
// import Blog from "@/app/Blog/page";
// import ConnectSection from "@/app/Components/ConnectUs";
// import Footer from "@/app/Components/Footer";
// import BlogSection from "@/app/Components/Blog";

// const services = [
//   {
//     serviceId: "it-consulting",
//     title: "IT consulting service ",
//     author: "Elen Arose",
//     date: "May 20, 2025",
//     content:
//       "This is the full content of the blog post where we explain how we helped a business grow online...",
//     image: "/blog-02.png",
//     tags: ["UI/UX Design", "Solving", "Design"],
//     serv: "UI-UX Design",
//     PojectOverView:
//       " Welcome to innovis, where cutting-edge technology meets exceptional design. The innovis  Website Template is a solution crafted for emerging AI startups looking to establish a strong online presence. This template seamlessly blends advanced with a sleek and modern design, providing a platform to showcase your AI innovations and captivate your audience.",
//   },
//   {
//     serviceId: "web-dev",
//     title: "Web Design  for Project ",
//     author: "Elen Arose",
//     date: "May 20, 2025",
//     content:
//       "This is the full content of the blog post where we explain how we helped a business grow online...",
//     image: "/project-05.png",
//     tags: ["UI/UX Design", "Solving", "Design"],
//     serv: "Web Design",
//   },
//   {
//     serviceId: "branding",
//     title: "Branding  Project ",
//     author: "Elen Arose",
//     date: "May 20, 2025",
//     content: "Create memorable brands that stand out in the market.",
//     image: "/project-04.png",
//     tags: ["UI/UX Design", "Solving", "Design"],
//     serv: "Branding",
//   },
//   {
//     serviceId: "motion",
//     title: "Motion  Project ",
//     author: "Elen Arose",
//     date: "May 20, 2025",
//     content: "Bring stories to life with animation and motion graphics.",
//     image: "/project-03.png",
//     tags: ["UI/UX Design", "Solving", "Design"],
//     serv: "Branding",
//   },
// ];

// // const cardItems = [
// //   {
// //     image: "/project-06.png",
// //     title: "UIUX Project 1",
// //     link: "/Service/ui-ux",
// //     description:
// //       "Add life to your brand through animation, movement, and storytelling.",
// //     tags: ["UI/UX", "Design", "Creative"],
// //   },
// //   {
// //     image: "/project-05.png",
// //     title: "Web Dev Project 1",
// //     link: "/Service/web-dev",

// //     description:
// //       "Modernize your site with strategic updates that improve usability.",
// //     tags: ["Web", "Development", "Strategy"],
// //   },
// //   {
// //     image: "/project-04.png",
// //     title: "Branding Project 1",
// //     link: "/Service/branding",
// //     description: "Create memorable brands that stand out in the market.",
// //     tags: ["Branding", "Marketing", "Design"],
// //   },
// //   {
// //     image: "/project-03.png",
// //     title: "Motion Project 1",
// //     link: "/Service/motion",
// //     description: "Bring stories to life with animation and motion graphics.",
// //     tags: ["Animation", "Motion", "Creative"],
// //   },
// // ];

// export default function serviceId({
//   params,
// }: {
//   params: { serviceid: "string" };
// }) {
//   const Service = services.find((b) => b.serviceId === params.serviceid); //in this place seriveId ngarathu params la vara endpoint.

//   if (!Service) {
//     return <div>Service not found</div>;
//   }
//   return (
//     <div className="bg-white">
//       <Navbar />
//       <div className=" grid grid-cols-1  sm:grid-cols-2 p-10 mb-4 mt-10  ">
//         <div
//           className="col-span-1 items-start text-4xl mb-4
//          sm:text-4xl md:text-6xl font-semibold text-black md:ml-29    "
//         >
//           {Service.title}
//         </div>
//         <div className="col-span-1 text-gray-600 text-sm mt-3 md:text-lg  sm:text-sm md:mr-50 md:ml-30  ">
//           {" "}
//           {Service.content}
//           <div className="mt-10">
//             {Service.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-md "
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap3">
//         <div className="col-span-1">
//           <Image
//             src={Service.image}
//             alt={Service.title}
//             width={1000}
//             height={500}
//             className="w-full  h-[300px] md:w-full md:h-100 sm:w-110 lg:w-500   object-cover rounded-3xl    mb-8 md:ml-39 sm:ml-12"
//           />
//         </div>
//         <div className="ml-7 sm:col-span-1 gap-6  md:ml-90 sm:ml-35  ">
//           <h2 className="text-2xl md:text-4xl sm:text-2xl text-black mb-4">
//             General Info
//           </h2>

//           {/*  Mobile View Layout */}
//           <div className="items-start sm:hidden block w-90 mt-4 mb-4 ml-2 ">
//             {/* Row Titles */}
//             <div className="grid grid-cols-3  text-gray-700 text-md mb-2">
//               <p>Clients</p>
//               <p>Services</p>
//               <p>Website Link</p>
//             </div>

//             {/* Row Values */}
//             <div className="grid grid-cols-3 text-black text-sm font-medium">
//               <p>Inovis</p>
//               <p>{Service.serv}</p>
//               <a
//                 href="https://www.google.com"
//                 target="_blank"
//                 className="text-black underline"
//               >
//                 Visit Website
//               </a>
//             </div>
//           </div>

//           {/*  Laptop / Tablet View Layout (your original one) */}
//           <div className="hidden sm:block gap-13 md:mt-15 ml-2">
//             <div className="md:mt-10 sm:mt-5 md:mb-10 md:text-xl sm:text-lg text-gray-700">
//               <p>Clients</p>
//               <p className="text-black">Inovis</p>
//             </div>
//             <div className="md:mt-10 sm:mt-5 md:mb-10 md:text-xl sm:text-lg text-gray-700">
//               <p>Services</p>
//               <p className="text-black">{Service.serv}</p>
//             </div>
//             <div className="md:mt-10 sm:mt-5 md:mb-10 md:text-xl sm:text-lg text-gray-700">
//               <p>Website Link</p>
//               <a
//                 href="https://www.google.com"
//                 target="_blank"
//                 className="text-black underline"
//               >
//                 Visit Website
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="grid sm:grid-cols-3 grid-cols-1 sm:ml-4 ">
//         <div className="col-span-2 text-black m-7 md:ml-40 sm:ml-9 mt-9 ">
//           <div>
//             <h2 className="text-2xl md:text-2xl sm:text-lg font-semibold">
//               Project Overview :
//             </h2>
//             <p className="text-gray-700 mt-3 mb-5 lg:text-lg">
//               {Service.PojectOverView}
//             </p>
//           </div>
//           <div>
//             <h2 className="text-lg lg:text-2xl md:text-xl sm:text-lg font-semibold">
//               Benefits :
//             </h2>
//             <li className="text-gray-700 mb-2 mt-2 text-sm lg:text-lg">
//               <b className="text-black font-semibold">
//                 {" "}
//                 Cross-Platform Compatibility:{" "}
//               </b>
//               We build apps that work flawlessly on both Android and iOS, giving
//               your users a consistent experience, no matter which platform they
//               prefer.
//             </li>
//             <li className="text-gray-700 mb-2 mt-2 text-sm lg:text-lg">
//               <b className="text-black font-semibold">
//                 {" "}
//                 Cross-Platform Compatibility:{" "}
//               </b>
//               We build apps that work flawlessly on both Android and iOS, giving
//               your users a consistent experience, no matter which platform they
//               prefer.
//             </li>
//             <li className="text-gray-700 mb-2 mt-2 text-sm md:text-lg">
//               <b className="text-black font-semibold">
//                 {" "}
//                 Cross-Platform Compatibility:{" "}
//               </b>
//               We build apps that work flawlessly on both Android and iOS, giving
//               your users a consistent experience, no matter which platform they
//               prefer.
//             </li>
//             <li className="text-gray-700 mb-2 mt-2 text-sm md:text-lg">
//               <b className="text-black font-semibold">
//                 {" "}
//                 Cross-Platform Compatibility:{" "}
//               </b>
//               We build apps that work flawlessly on both Android and iOS, giving
//               your users a consistent experience, no matter which platform they
//               prefer.
//             </li>
//             <li className="text-gray-700 mb-2 mt-2 text-sm md:text-lg">
//               <b className="text-black font-semibold">
//                 {" "}
//                 Cross-Platform Compatibility:{" "}
//               </b>
//               We build apps that work flawlessly on both Android and iOS, giving
//               your users a consistent experience, no matter which platform they
//               prefer.
//             </li>

//             <div className="text-sm lg:mt-4 sm:mt-2 lg:text-lg sm:text-md text-gray-700">
//               <p>
//                 In a world where mobile devices dominate, having a powerful and
//                 user-friendly mobile app is essential for any business. We
//                 specialize in creating custom mobile apps for both Android and
//                 iOS platforms, ensuring your brand reaches its audience on the
//                 devices they use the most. Whether you need a simple app to
//                 streamline services or a complex solution with advanced
//                 features, we deliver high-performance apps
//               </p>
//             </div>
//             <div className="mt-4 lg:mt-4 sm:mt-2 lg:text-lg sm:text-md text-gray-700">
//               <p className="text-sm">
//                 <b className="text-black  font-semibold">
//                   Conclusion :{" "}
//                 </b>
//                 Whether you're looking to build a new mobile app from scratch or
//                 improve an existing one, our team is ready to bring your ideas
//                 to life on both Android and iOS. With a focus on innovation,
//                 performance, and user satisfaction, we build mobile apps that
//                 not only meet your needs but also drive business success. Let us
//                 help you create an app that stands out in the crowded app
//                 marketplace and delivers a top-tier experience for your users.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-1  text-black ml-40 lg:ml-30 lg:mt-12 sm:mt-13 sm:ml-6">
//           <div className="mt-5 lg:mt-5 lg:mb-6 sm:mb-6">
//             <p className=" lg:text-4xl sm:text-2xl">40%</p>
//             <p className="lg:text-lg text-gray-700">Ecommerce Growth</p>
//           </div>

//           <div className="mt-4 lg:mt-5 lg:mb-6 sm:mb-6">
//             <p className="lg:text-4xl sm:text-2xl">78K</p>
//             <p className="lg:text-lg text-gray-700">Organic Submission</p>
//           </div>

//           <div className=" mt-4  lg:mt-5 lg:mb-6 sm:mb-6">
//             <p className="lg:text-4xl sm:text-2xl">360%</p>
//             <p className="lg:text-lg text-gray-700">
//               Increased in organic sassion
//             </p>
//           </div>

//           <div className="mt-4  lg:mt-5 lg:mb-6 sm:mb-6">
//             <p className="lg:text-4xl sm:text-2xl">4K +</p>
//             <p className="lg:text-lg text-gray-700">New Visitors</p>
//           </div>
//         </div>
//       </div>
//       <section className="w-full pt-6 px-5   sm:py-18 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
//         <div className=" sm:flex md:flex-row items-start md:items-end md:ml-17 justify-between gap-8 md:gap-12">
//           {/* Left side title */}
//           <div className="text-start md:text-left flex-1">
//             <h2 className="text-2xl sm:text-4xl md:text-3xl lg:text-5xl lg:ml-5  text-black leading-tight">
//               Related Project
//             </h2>
//           </div>

//           {/* Right side text */}
//           <div className="flex-1 text-start md:text-start">
//             <p className="text-gray-600 text-sm sm:text-md md:text-lg leading-relaxed md:max-w-md mt-4 md:ml-37 mx-auto md:mx-0">
//               We help brands grow through strategic design and digital
//               experiences. From brand identity to powerful websites, our
//               services are Impression.
//             </p>
//           </div>
//         </div>
//       </section>
//       <ProjectCards />
//       <FAQ />
//       <BlogSection />
//       <ConnectSection />
//       <Footer />
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/app/Components/Navbar/Navbar";
import { useRef , useEffect } from "react";
import TestimonialsSection from "@/app/Components/Testimonials";
import FAQ from "@/app/Components/FaqSection";
import Footer from "@/app/Components/Footer";


const industriesData = [
  {
    title: "Web Application Development That Powers Modern Business",
    slug: "web-application",
    desc: "Transforming Operations with Scalable, Secure Web Platforms",

    name: "AI Healthcare Software Development & Consulting",
    subtitle: "Transforming Healthcare With AI Intelligence",
    banner: "/placeholder-product.png",

    stats: [
      { value: "500M+", label: "Transactions Processed" },
      { value: "100K+", label: "Active Users Daily" },
      { value: "50+", label: "Enterprises Poweredd" },
    ],

    whyChoose: [
      {
        name: "Responsive & Scalable",
        desc: "Built with modern frameworks and cloud infrastructure for seamless performance across all devices and growing traffic volumes.",
      },
      {
        name: "User-Centric Design ",
        desc: "Intuitive interfaces that enhance user experience and boost productivity through thoughtful UX/UI design and accessibility standards.",
      },
      {
        name: "Secure & Compliant ",
        desc: "Enterprise-grade security with data encryption, regular audits, and industry compliance protecting your sensitive business information.",
      },
      {
        name: "Fast Integration ",
        desc: "BSeamless connectivity with existing CRMs, ERPs, payment gateways, and third-party tools through robust API architecture.",
      },
    ],

    topProducts: [
      {
        title: "AI Diagnosis Engine",
        desc: "AI-powered system that assists doctors...",
        price: "$1599",
        image: "/placeholder-product.png",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
      {
        title: "Medical Analytics Dashboard",
        desc: "Centralized analytics for hospitals...",
        price: "$1899",
        image: "/placeholder-product.png",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
    ],

    products: [
      {
        name: "Patient Analytics App",
        price: "$499",
        image: "/placeholder-product.png",
      },
      {
        name: "AI Medical Bot",
        price: "$799",
        image: "/placeholder-product.png",
      },
      {
        name: "Hospital BI Dashboard",
        price: "$1299",
        image: "/placeholder-product.png",
      },
      {
        name: "Hospital BI Dashboard",
        price: "$1299",
        image: "/placeholder-product.png",
      },
      {
        name: "Hospital BI Dashboard",
        price: "$1299",
        image: "/placeholder-product.png",
      },
      {
        name: "Hospital BI Dashboard",
        price: "$1299",
        image: "/placeholder-product.png",
      },
    ],
  },
  {
    title: "Mobile Application Development That Connects Your Business",
    slug: "mobile-application",
    desc: "Transforming User Experience with Native and Cross-Platform Apps",
    banner: "/placeholder-product.png",

    stats: [
      { value: "5M+", label: "App Downloads" },
      { value: "50K+", label: "Active Users Daily" },
      { value: "4.8★", label: "Average App Rating" },
    ],

    whyChoose: [
      // {
      //   title: "Why Choose Our Mobile Application Development Services?",
      //   desc:"Discover powerful mobile solutions designed to engage users and streamline operations on any device."
      // },
      {
        name: "Native & Cross-Platform le",
        desc: "Built with optimal technology—native iOS/Android for performance or Flutter/React Native for faster deployment across both platforms simultaneously.",
      },
      {
        name: "Intuitive User Experience ",
        desc: "Seamless interfaces following platform guidelines that users love, with smooth animations, gesture controls, and accessibility features built-in.",
      },
      {
        name: "Offline Functionality",
        desc: "Smart local data storage and sync capabilities ensure your app works perfectly even without internet connectivity for uninterrupted productivity.",
      },
      {
        name: "Push Notifications  ",
        desc: "Real-time engagement through targeted notifications, alerts, and updates that keep users informed and drive meaningful interactions.",
      },
    ],

    topProducts: [
      {
        title: "AI Diagnosis Engine",
        desc: "AI-powered system that assists doctors...",
        price: "$1599",
        image: "/placeholder-product.png",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
      {
        title: "Medical Analytics Dashboard",
        desc: "Centralized analytics for hospitals...",
        price: "$1899",
        image: "/placeholder-product.png",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
    ],

    products: [
      {
        name: "Patient Analytics App",
        price: "$499",
        image: "/placeholder-product.png",
      },
      {
        name: "AI Medical Bot",
        price: "$799",
        image: "/placeholder-product.png",
      },
      {
        name: "Hospital BI Dashboard",
        price: "$1299",
        image: "/placeholder-product.png",
      },
      {
        name: "Hospital BI Dashboard",
        price: "$1299",
        image: "/placeholder-product.png",
      },
      {
        name: "Hospital BI Dashboard",
        price: "$1299",
        image: "/placeholder-product.png",
      },
      {
        name: "Hospital BI Dashboard",
        price: "$1299",
        image: "/placeholder-product.png",
      },
    ],
  },
];


export default function ServiceDetails() {
  const { serviceid } = useParams();
  const router = useRouter();



  let industry = industriesData.find((d) => d.slug === serviceid)
  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-600">
          404 | Blog Not Found
        </h1>
      </div>
    );
  }

 

  // Navigation
  function goto() {
    router.push("/Contact");
  }

  // Scroll Ref
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };
  useEffect(() => {
  console.log("ithu dhan kthu",industry);
  
  }, [])
  
  //whychoose component
 
  const whyLeft = industry.whyChoose.slice(0, 2);
  const whyRight = industry.whyChoose.slice(2, 4);

  
  

  return (
    <main className="font-inter ">
      <div className="bg-[#91f096]">
        <Navbar />

        <section className="md:ml-15 py-20 px-6 md:px-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {industry.title}
            </h1>

            <p className="text-gray-700 mt-6 text-lg">{industry.desc}</p>

            <button
              onClick={goto}
              className="mt-10 bg-black text-white px-7 py-3 rounded-lg hover:bg-gray-900"
            >
              Request a Quote
            </button>

            <div className="mt-10 flex gap-10 text-center">
              {industry.stats.map((item: any) => (
                <div key={item.label}>
                  <h3 className="text-black text-3xl font-semibold">
                    {item.value}
                  </h3>
                  <p className="text-gray-900 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <Image
            src={industry.banner}
            width={360}
            height={360}
            alt={industry.title}
            className="rounded-xl shadow-xl object-cover"
          />
        </section>
      </div>
      {/*  WHY CHOOSE  */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-black">
            Why Choose {industry.title}?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Discover powerful web solutions designed to elevate your business
            operations and drive measurable results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {/* LEFT TEXT COLUMN */}
            <div className="space-y-10 text-left">
              {whyLeft.map((item, index) => (
                <div key={index}>
                  <h3 className="text-black text-lg font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CENTER IMAGE */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute w-56 h-48 bg-[#99f39d] rounded-full bottom-0"></div>
                <Image
                  src="/product.png"
                  alt="AI Product"
                  width={200}
                  height={300}
                  className="relative z-10 object-contain"
                />
              </div>
            </div>

            {/* RIGHT TEXT COLUMN */}
            <div className="space-y-10 text-left">
              {whyRight.map((item, index) => (
                <div key={index}>
                  <h3 className="text-black text-lg font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-26 px-6 md:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-4 text-black">
          Discover the Best Solutions
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore premium software solutions crafted to bring automation,
          efficiency and intelligent workflows.
        </p>

        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          {industry.topProducts.map((p: any, i: number) => (
            <div
              key={i}
              className="grid md:grid-cols-[1fr_1fr] gap-4 items-center"
            >
              {/* IMAGE SIDE */}
              <div
                className={`flex ${
                  i % 2 === 0
                    ? "order-1 justify-start ml-14"
                    : "order-2 justify-start ml-14"
                }`}
              >
                <div className="relative w-64 h-56 flex items-center justify-center">
                  <div className="absolute w-94 h-62 bg-[#91f096] rounded-2xl" />

                  <Image
                    src={p.image}
                    alt={p.title}
                    width={200}
                    height={200}
                    className="relative z-10 object-contain"
                  />
                </div>
              </div>

              {/* TEXT SIDE */}
              <div
                className={`${i % 2 === 0 ? "order-2" : "order-1"} text-left`}
              >
                <h3 className="text-2xl font-semibold text-black">{p.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{p.desc}</p>

                {/* FEATURES */}
                <ul className="text-gray-700 text-sm mt-3 space-y-1">
                  {p.features.map((f: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-black rounded-full mt-1"></span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center gap-3">
                  <button className="bg-black text-white px-6 py-2 rounded-full text-sm">
                    Shop Now
                  </button>
                  <p className="text-lg font-semibold text-black">{p.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* OUR PRODUCTS{" "} */}
      <section className="py-16 px-6 md:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center text-black">
          Our Products
        </h2>

        <p className="text-gray-600 text-center max-w-xl mx-auto mt-2 mb-10">
          Discover tools designed for performance, automation and innovation.
        </p>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 text-black hover:bg-[#91f096]"
          >
            ◀
          </button>

          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto px-6 scrollbar-hide scroll-smooth"
          >
            {industry.products.map((prod: any, i: number) => (
              <div
                key={i}
                className="min-w-[260px] max-w-[260px] mx-auto flex-shrink-0"
              >
                <div className="relative bg-[#99f39d] w-full h-48 rounded-2xl flex items-center justify-center">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    width={110}
                    height={110}
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-4 font-semibold text-lg text-black">
                  {prod.name}
                </h3>

                <div className="flex justify-between items-center mt-3">
                  <button className="bg-black text-white px-4 py-1 rounded-full text-sm">
                    Buy Now
                  </button>

                  <p className="font-semibold text-black">{prod.price}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 text-black hover:bg-[#91f096] "
          >
            ▶
          </button>
        </div>
      </section>
      <TestimonialsSection />
      <FAQ />
      <Footer />
    </main>
  );
}
