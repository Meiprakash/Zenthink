"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/app/Components/Navbar/Navbar";
import { useRef } from "react";
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
    title: "IT-Consulting",
    slug: "it-consulting",
    desc: "We deliver advanced digital healthcare solutions...",

    services: [
      {
        name: "AI Healthcare Software Development & Consulting",
        slug: "it-consulting",
        subtitle: "Transforming Healthcare With AI Intelligence",
        banner: "/placeholder-product.png",

        stats: [
          { value: "10M+", label: "Patients Served" },
          { value: "50K+", label: "Doctors Connected" },
          { value: "300+", label: "Hospitals Scaled" },
        ],

        whyChoose: [
          "HIPAA-Compliant Architecture",
          "Smart Diagnosis Assistance",
          "Predictive Treatment Reports",
          "Automated Workflow Systems",
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
        name: "Healthcare App Development",
        slug: "app-dev",
        subtitle: "Smart Patient Care at Your Fingertips",
        banner: "/placeholder-product.png",

        stats: [
          { value: "5M+", label: "App Users" },
          { value: "20K+", label: "Doctors Registered" },
          { value: "4.8 ★", label: "App Rating" },
        ],

        whyChoose: [
          "Doctor & Patient Dashboards",
          "Telemedicine Integration",
          "Secure Medical Payments",
          "Digital Prescription System",
        ],

        topProducts: [
          {
            title: "Telemedicine App",
            desc: "Online consultations, video calls...",
            price: "$999",
            image: "/placeholder-product.png",
            features: [
              "Smart predictions",
              "Fast diagnosis support",
              "Accurate medical insights",
            ],
          },
          {
            title: "Digital Prescription App",
            desc: "Auto-generated prescriptions...",
            price: "$1199",
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
            name: "Doctor App",
            price: "$499",
            image: "/placeholder-product.png",
          },
          {
            name: "Patient App",
            price: "$399",
            image: "/placeholder-product.png",
          },
          {
            name: "Pharmacy App",
            price: "$899",
            image: "/placeholder-product.png",
          },
          {
            name: "Pharmacy App",
            price: "$899",
            image: "/placeholder-product.png",
          },
          {
            name: "Pharmacy App",
            price: "$899",
            image: "/placeholder-product.png",
          },
          {
            name: "Pharmacy App",
            price: "$899",
            image: "/placeholder-product.png",
          },
        ],
      },
    ],
  },
];

export default function ServiceDetails() {
  const { serviceid } = useParams();
  const router = useRouter();
  
  // ✅ Move hooks BEFORE any conditional returns
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  function goto() {
    router.push("/Contact");
  }

  //  ✅ FIND SERVICE - properly typed
  let selectedService: Service | null = null;
  for (const industry of industriesData) {
    const match = industry.services.find(
      (s) => s.slug.toLowerCase() === String(serviceid).toLowerCase()
    );
    if (match) selectedService = match;
  }

  //  If not found → show Not Found
  if (!selectedService) {
    return (
      <h2 className="text-center py-24 text-xl text-gray-600">Not Found</h2>
    );
  }

  return (
    <main className="font-inter ">
      <div className="bg-[#91f096]">
        <Navbar />

        <section className="md:ml-15 py-20 px-6 md:px-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {selectedService.name}
            </h1>

            <p className="text-gray-700 mt-6 text-lg">
              {selectedService.subtitle}
            </p>

            <button
              onClick={goto}
              className="mt-10 bg-black text-white px-7 py-3 rounded-lg hover:bg-gray-900"
            >
              Request a Quote
            </button>

            <div className="mt-10 flex gap-10 text-center">
              {selectedService.stats.map((item) => (
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
            src={selectedService.banner}
            width={360}
            height={360}
            alt={selectedService.name}
            className="rounded-xl shadow-xl object-cover"
          />
        </section>
      </div>
      {/*  WHY CHOOSE  */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-black">
            Why Choose {selectedService.name}?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Discover quality digital solutions designed to elevate your business
            operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {/* LEFT TEXT */}
            <div className="space-y-10 text-left">
              <div>
                <h3 className="text-black text-lg font-semibold">
                  Secure & Scalable
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Built with enterprise-grade security and scalable cloud
                  architecture.
                </p>
              </div>

              <div>
                <h3 className="text-black text-lg font-semibold">
                  Smart Automation
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Reduce manual work with AI-driven workflow automation.
                </p>
              </div>
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

            {/* RIGHT TEXT */}
            <div className="space-y-10 text-left">
              <div>
                <h3 className="text-black text-lg font-semibold">
                  Trusted Worldwide
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Used by hospitals, startups, enterprises and global partners.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black">
                  Proven Results
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Optimized systems deliver reliable performance and insights.
                </p>
              </div>
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
          {selectedService.topProducts.map((p: TopProduct, i: number) => (
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
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10"
          >
            ◀
          </button>

          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto px-6 scrollbar-hide scroll-smooth"
          >
            {selectedService.products.map((prod, i) => (
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
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10"
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
