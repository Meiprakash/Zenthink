"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { industriesData } from "@/app/utils/industriesData";
import Navbar from "@/app/Components/Navbar/Navbar";
import { useRef } from "react";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import TestimonialsSection from "@/app/Components/Testimonials";
import FAQ from "@/app/Components/FaqSection";
import Footer from "@/app/Components/Footer";

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
      <div className="bg-[linear-gradient(180deg,#fbfff6_0%,#f5ffe8_100%)]">
        {/* HERO */}
        <Navbar />
        {/* <section className="md:ml-15 py-20 px-6 md:px-24 grid md:grid-cols-2 gap-10 items-center">
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
        </section> */}
        {/* HERO SECTION */}
        <section className="relative overflow-hidden text-black">
          {/* BACKGROUND GRID */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbfff6_0%,#f5ffe8_100%)]"></div>
          <div className="absolute inset-0 opacity-40 bg-[url('/grid.png')] bg-center bg-cover"></div>

          {/* GLOW BALL */}
          <div className="absolute right-20 top-20 w-40 h-40 bg-white/20 blur-3xl rounded-full"></div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT SIDE */}
            <div>
              {/* <p className="uppercase tracking-widest text-green-300 text-sm mb-3">
                Premium Web Design Agency
              </p> */}

              <h1
                className="text-4xl sm:text-6xl lg:text-6xl font-bold leading-tight
        text-black"
              >
                {selectedService.name}
              </h1>

              <p className="mt-6 text-gray-600 max-w-md">
                Custom Websites, Branding & Digital Marketing.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex gap-4">
                <button className="px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-lime-500 transition">
                  Contact Us
                </button>
                <button className="px-6 py-3 rounded-full border bg-black text-white border-white hover:bg-lime-500 hover:text-black transition">
                  View Portfolio
                </button>
              </div>

              {/* Mission + Vision Cards */}
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="bg-[rgba(255,255,255,0.65)] backdrop-blur-lg border border-[#eaf5d5] p-5 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-600 text-sm">
                    Creating web solutions that deliver measurable results.
                  </p>
                </div>

                <div className="bg-[rgba(255,255,255,0.65)] backdrop-blur-lg border border-[#eaf5d5] p-5 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
                  <p className="text-gray-600 text-sm">
                    Helping brands grow through meaningful online experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE CARD */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white text-black w-64 p-6 rounded-3xl shadow-xl space-y-4">
                <Image
                  src="/about-avater-group.jpg"
                  alt="Vela Ranks"
                  width={60}
                  height={60}
                  className="rounded-lg mx-auto"
                />

                <h3 className="text-center text-2xl font-bold">500+</h3>
                <p className="text-center text-gray-700 text-sm">
                  Positive Reviews
                </p>

                <div className="flex justify-center gap-2 mt-3">
                  <Image
                    src="/google.png"
                    alt="Google"
                    width={35}
                    height={35}
                  />
                  <Image src="/g2.png" alt="G2" width={35} height={35} />
                  <Image src="/fb.png" alt="Facebook" width={35} height={35} />
                </div>

                <div className="flex justify-center gap-4 mt-6 text-gray-500">
                  <FaTwitter className="hover:text-black transition" />
                  <FaLinkedinIn className="hover:text-black transition" />
                  <FaYoutube className="hover:text-black transition" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full py-16 bg-[linear-gradient(180deg,#fbfff6_0%,#f5ffe8_100%)]">
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
                <div
                  className="absolute w-56 h-48 bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%)]
 rounded-full bottom-0"
                ></div>
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

      <section className="py-26 px-6 md:px-24 bg-[linear-gradient(180deg,#fbfff6_0%,#f5ffe8_100%)]">
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
                  <div
                    className="absolute w-94 h-62 bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%)]
] rounded-2xl"
                  ></div>
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
                  <button className="bg-black text-black px-6 py-2 rounded-full text-sm">
                    Shop Now
                  </button>
                  <p className="text-lg font-semibold text-black">{p.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-24 bg-[linear-gradient(180deg,#fbfff6_0%,#f5ffe8_100%)]">
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
            className="text-black absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10"
          >
            ◀
          </button>
          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto px-6 hide-scrollbar scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {selectedService.products.map((prod: Product, i: number) => (
              <div
                key={i}
                className="min-w-[260px] max-w-[260px] mx-auto flex-shrink-0"
              >
                <div
                  className="relative bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%)]
 w-full h-48 rounded-2xl flex items-center justify-center"
                >
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
                  {prod.desc ||
                    "A gentle, natural product crafted for beautiful skin."}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <button className="bg-black text-white hover:bg-lime-500 px-4 py-2 rounded-full text-sm">
                    Buy Now
                  </button>
                  <p className="font-semibold text-black">{prod.price}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="text-black absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10"
          >
            ▶
          </button>
        </div>
      </section>
      <TestimonialsSection />
      <FAQ />
      <Footer/>
    </main>
  );
}






// "use client";

// import Image from "next/image";
// import { useParams, useRouter } from "next/navigation";
// import { industriesData } from "@/app/utils/industriesData";
// import Navbar from "@/app/Components/Navbar/Navbar";
// import { useRef } from "react";
// import { motion } from "framer-motion";
// import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

// export const runtime = "edge";

// interface Product {
//   name: string;
//   price: string;
//   image: string;
//   desc?: string;
// }

// interface TopProduct {
//   title: string;
//   desc: string;
//   image: string;
//   price: string;
//   features?: string[];
// }

// export default function ServiceDetails() {
//   const { industry, service } = useParams();
//   const router = useRouter();

//   const selectedIndustry = industriesData.find(
//     (i) => i.slug.toLowerCase() === String(industry).toLowerCase()
//   );

//   const selectedService = selectedIndustry?.services.find(
//     (s) => s.slug.toLowerCase() === String(service).toLowerCase()
//   );

//   const goto = () => router.push("/Contact");

//   const scrollRef = useRef<HTMLDivElement>(null);
//   const scrollLeft = () => {
//     scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
//   };
//   const scrollRight = () => {
//     scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
//   };

//   if (!selectedIndustry || !selectedService)
//     return (
//       <h2 className="text-center py-24 text-xl text-gray-600">Not Found</h2>
//     );

//   return (
//     <main className="font-inter text-black">
//       <div className="bg-[radial-gradient(circle_at_top_left,#071815_0%,#0b2a1f_30%,#071218_100%)] relative overflow-hidden">
//         <Navbar />

//         {/* grid overlay */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             backgroundImage: "url('/grid.png')",
//             opacity: 0.22,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             mixBlendMode: "overlay",
//           }}
//         />

//         {/* Glow sphere */}
//         <div className="absolute -right-24 top-16 w-72 h-72 rounded-full bg-white/6 blur-3xl" />

//         {/* HERO */}
//         <section className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left text */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6"
//           >
//             <p className="uppercase tracking-widest text-green-300 text-sm">
//               Premium Web Design Agency
//             </p>

//             <h1
//               className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-xl
//               bg-gradient-to-r from-white to-green-300 text-transparent bg-clip-text"
//             >
//               Design That <br />
//               Ranks Higher
//             </h1>

//             <p className="text-gray-300 max-w-lg">
//               Custom Websites, Branding & Digital Marketing — crafted to drive
//               traffic, conversions and growth for your business.
//             </p>

//             <div className="flex gap-4 mt-6">
//               <button
//                 onClick={goto}
//                 className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-green-300 transition"
//               >
//                 Contact Us
//               </button>

//               <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
//                 View Portfolio
//               </button>
//             </div>

//             {/* mission / vision cards */}
//             <div className="grid grid-cols-2 gap-4 mt-10">
//               <div className="bg-white/6 backdrop-blur-md p-4 rounded-2xl border border-white/8">
//                 <h4 className="font-semibold mb-2">Our Mission</h4>
//                 <p className="text-sm text-gray-200">
//                   Craft web experiences that convert visitors into customers.
//                 </p>
//               </div>
//               <div className="bg-white/6 backdrop-blur-md p-4 rounded-2xl border border-white/8">
//                 <h4 className="font-semibold mb-2">Our Vision</h4>
//                 <p className="text-sm text-gray-200">
//                   Build digital products that scale and delight users.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right rating card + hero image */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col items-center lg:items-end gap-6"
//           >
//             {/* floating rating card */}
//             <div className="bg-white text-black rounded-3xl w-64 p-6 shadow-2xl">
//               <div className="flex items-center justify-center mb-3">
//                 <Image
//                   src="/velaranks.png"
//                   alt="logo"
//                   width={54}
//                   height={54}
//                   className="rounded-lg"
//                 />
//               </div>

//               <h3 className="text-center text-3xl font-bold">500+</h3>
//               <p className="text-center text-sm text-gray-700">
//                 Positive Reviews
//               </p>

//               <div className="flex justify-center gap-3 mt-4">
//                 <Image src="/google.png" width={36} height={36} alt="g" />
//                 <Image src="/g2.png" width={36} height={36} alt="g2" />
//                 <Image src="/fb.png" width={36} height={36} alt="fb" />
//               </div>

//               <div className="flex justify-center gap-4 mt-5 text-gray-500">
//                 <FaTwitter />
//                 <FaLinkedinIn />
//                 <FaYoutube />
//               </div>
//             </div>

//             {/* main banner image (service banner) */}
//             <div className="relative w-[360px] h-[360px] rounded-2xl overflow-hidden shadow-2xl">
//               <Image
//                 src={selectedService.banner || "/product.png"}
//                 alt={selectedService.name}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </motion.div>
//         </section>
//       </div>

//       {/* FEATURES GRID 3x2 */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 -mt-8">
//         <h2 className="text-2xl text-center text-black font-semibold mb-6">
//           {selectedIndustry.title} — Our Services & Capabilities
//         </h2>

//         <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10">
//           Explore our premium solutions crafted to elevate your{" "}
//           {selectedIndustry.title}.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Render 6 cards (use topProducts or services list) */}
//           {(selectedService.topProducts || Array.from({ length: 6 })).map(
//             (p: TopProduct | any, i: number) => {
//               const title = p?.title || `Service ${i + 1}`;
//               const desc =
//                 p?.desc ||
//                 "We deliver measurable results with strategic design and development.";

//               return (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 12 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.45, delay: i * 0.06 }}
//                   className="bg-white/6 backdrop-blur-md border border-white/8 rounded-2xl p-6 min-h-[180px] flex flex-col justify-between"
//                 >
//                   <div>
//                     <h4 className="text-lg font-semibold text-white/95 mb-2">
//                       {title}
//                     </h4>
//                     <p className="text-sm text-gray-200">{desc}</p>
//                   </div>

//                   <div className="mt-6 flex justify-between items-center">
//                     <div className="text-sm text-gray-300">Learn more</div>
//                     <div className="bg-green-300 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
//                       →
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             }
//           )}
//         </div>
//       </section>

//       {/* WHY CHOOSE / TOP PRODUCTS */}
//       <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 bg-white rounded-2xl shadow-sm">
//         <div className="text-center mb-8">
//           <h3 className="text-2xl font-semibold text-black">
//             Why Choose {selectedService.name}?
//           </h3>
//           <p className="text-gray-600 max-w-2xl mx-auto mt-2">
//             {selectedService.subtitle}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {selectedService.topProducts?.map((p: TopProduct, idx: number) => (
//             <div key={idx} className="flex gap-6 items-center">
//               <div className="relative w-36 h-28 flex items-center justify-center">
//                 <div className="absolute inset-0 bg-[#ffe0dc] rounded-2xl transform rotate-1" />
//                 <Image
//                   src={p.image}
//                   alt={p.title}
//                   width={180}
//                   height={140}
//                   className="relative z-10 object-contain"
//                 />
//               </div>

//               <div>
//                 <h4 className="text-lg font-semibold text-black">{p.title}</h4>
//                 <p className="text-gray-600 text-sm mt-1">{p.desc}</p>
//                 <div className="mt-3 text-sm text-black font-semibold">
//                   {p.price}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* PRODUCTS carousel */}
//       <section className="py-12 px-6 lg:px-12 max-w-7xl mx-auto">
//         <h3 className="text-2xl font-semibold text-black text-center mb-6">
//           Our Products
//         </h3>
//         <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
//           Discover our hand-picked products that complement our services.
//         </p>

//         <div className="relative">
//           <button
//             onClick={scrollLeft}
//             className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20"
//           >
//             ◀
//           </button>

//           <div
//             ref={scrollRef}
//             className="flex gap-6 overflow-x-auto px-6 scrollbar-hide scroll-smooth pb-6"
//           >
//             {selectedService.products.map((prod: Product, i: number) => (
//               <div
//                 key={i}
//                 className="min-w-[260px] max-w-[260px] bg-white/6 border border-white/8 rounded-2xl p-4 text-black flex-shrink-0"
//               >
//                 <div className="relative w-full h-40 rounded-xl overflow-hidden bg-[#ffe0dc] flex items-center justify-center">
//                   <Image
//                     src={prod.image}
//                     alt={prod.name}
//                     width={140}
//                     height={140}
//                     className="object-contain"
//                   />
//                 </div>

//                 <h4 className="mt-4 font-semibold text-lg text-black">
//                   {prod.name}
//                 </h4>
//                 <p className="text-gray-600 text-sm mt-1 line-clamp-2">
//                   {prod.desc}
//                 </p>

//                 <div className="mt-4 flex items-center justify-between">
//                   <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
//                     Buy
//                   </button>
//                   <div className="font-semibold text-black">{prod.price}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={scrollRight}
//             className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20"
//           >
//             ▶
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// }
