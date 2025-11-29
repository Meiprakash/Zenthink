"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/app/Components/Navbar/Navbar";
import { useRef , useEffect } from "react";
import TestimonialsSection from "@/app/Components/Testimonials";
import FAQ from "@/app/Components/FaqSection";
import Footer from "@/app/Components/Footer";

export const runtime = 'edge';

// ✅ Define proper types
interface Stat {
  value: string;
  label: string;
}

interface Product {
  name: string;
  price: string;
  image: string;
}

interface TopProduct {
  title: string;
  desc: string;
  price: string;
  image: string;
  features: string[];
}

interface Service {
  name: string;
  slug: string;
  subtitle: string;
  banner: string;
  stats: Stat[];
  whyChoose: string[];
  topProducts: TopProduct[];
  products: Product[];
}

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

  //  FIND SERVICE BASED ON SLUG
  let selectedService: any = null;
  for (const industry of industriesData) {
    const match = industry.services.find(
      (s) => s.slug.toLowerCase() === String(serviceid).toLowerCase()
    );
    if (match) selectedService = match;
  }

  //  If still not found → show Not Found
  if (!selectedService) {
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
              {selectedService.stats.map((item: any) => (
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
          {selectedService.topProducts.map((p: any, i: number) => (
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
            {selectedService.products.map((prod: any, i: number) => (
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
