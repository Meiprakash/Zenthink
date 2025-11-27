"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { industriesData } from "@/app/utils/industriesData";
import Navbar from "@/app/Components/Navbar/Navbar";
import { useRef } from "react";

export const runtime = 'edge';

// Define proper interfaces for your data structure
interface Product {
  name: string;
  price: string;
  image: string;
  desc?: string;
}

interface TopProduct {
  title: string;
  desc: string;
  image: string;
  price: string;
  features?: string[];
}

export default function ServiceDetails() {
  const { industry, service } = useParams();

  const selectedIndustry = industriesData.find(
    (i) => i.slug.toLowerCase() === String(industry).toLowerCase()
  );

  const selectedService = selectedIndustry?.services.find(
    (s) => s.slug.toLowerCase() === String(service).toLowerCase()
  );

  const router = useRouter();
  function goto() {
    router.push("/Contact");
  };

  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (!selectedIndustry || !selectedService)
    return (
      <h2 className="text-center py-24 text-xl text-gray-600">Not Found</h2>
    );

  return (
    <main className="font-inter">
      <div className="bg-[#ffe3dd]">
        {/* HERO */}
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
              className="mt-10 bg-black text-white px-7 py-3 rounded-lg hover:bg-gray-900 cursor-pointer"
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

      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-black">
            Why Choose {selectedService.name}?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Discover skincare products crafted with pure, natural ingredients.
            Elevate your beauty routine with solutions designed to nourish,
            protect, and renew your skin.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="space-y-10 text-left">
              <div>
                <h3 className="text-black text-lg font-semibold">
                  100% Natural Ingredients
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Our products are made with pure, natural botanicals — free
                  from harsh chemicals, synthetics, fragrances, or artificial
                  preservatives.
                </p>
              </div>

              <div>
                <h3 className="text-black text-lg font-semibold">
                  Eco-Friendly & Cruelty-Free
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Reduce environmental harm. Our earth-friendly packaging
                  ensures a sustainable skincare experience.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute w-56 h-48 bg-rose-200 rounded-full bottom-0"></div>
                <Image
                  src="/product.png"
                  alt="Product Bottle"
                  width={200}
                  height={300}
                  className="relative z-10 object-contain"
                />
              </div>
            </div>

            <div className="space-y-10 text-left">
              <div>
                <h3 className="text-black text-lg font-semibold">
                  Dermatologist Approved
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Formulated by dermatologists for safe, effective, and
                  irritation-free skincare suitable for all skin types.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black">
                  Proven Results
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Our clinically-tested formulas deliver visible results that
                  boost hydration and improve texture & tone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-26 px-6 md:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-4 text-black">
          Discover the Best {selectedIndustry.title} Solutions
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore our premium solutions crafted to elevate your{" "}
          {selectedIndustry.title} services using innovation, efficiency and
          powerful digital intelligence.
        </p>

        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          {selectedService.topProducts.map((p: TopProduct, i: number) => (
            <div
              key={i}
              className="grid md:grid-cols-[1fr_1fr] gap-4 items-center"
            >
              <div
                className={`flex ${
                  i % 2 === 0
                    ? "order-1 justify-start ml-14 sm:mb-5 md:mb-1"
                    : "order-2 justify-start mt-5 ml-14"
                }`}
              >
                <div className="relative w-64 h-56 flex items-center justify-center">
                  <div className="absolute w-94 h-62 bg-[#ffe0dc] rounded-2xl"></div>
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={200}
                    height={200}
                    className="relative z-10 object-contain"
                  />
                </div>
              </div>

              <div
                className={`${
                  i % 2 === 0 ? "order-2 text-left" : "order-1 text-left"
                }`}
              >
                <h3 className="text-2xl font-semibold text-black">{p.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{p.desc}</p>

                {p.features && (
                  <ul className="text-gray-700 text-sm mt-3 space-y-1">
                    {p.features.map((f: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-black rounded-full mt-1"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

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
          Discover our range of natural skincare products, designed to hydrate,
          brighten, and protect your skin using the power of nature.
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
            {selectedService.products.map((prod: Product, i: number) => (
              <div
                key={i}
                className="min-w-[260px] max-w-[260px] mx-auto flex-shrink-0"
              >
                <div className="relative bg-[#ffe0dc] w-full h-48 rounded-2xl flex items-center justify-center">
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
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {prod.desc || "A gentle, natural product crafted for beautiful skin."}
                </p>

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
    </main>
  );
}