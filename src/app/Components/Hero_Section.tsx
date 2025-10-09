"use client";

import { Layers } from "lucide-react";
import Image from "next/image";

const rotatingTexts = ["Web Design", "Development", "Branding", "UI/UX Design"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,white_0%,#EAE4F9_60%,#f9f9f9_100%)]">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT SIDE */}
        <div className="max-w-2xl space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
            Designing Digital Worlds That Spark{" "}
            <span className="text-gray-400">Emotion</span> and{" "}
            <span className="text-gray-400">Action</span>
          </h1>
          <p className="text-gray-600">
            From bold websites to memorable brand identities, we turn your
            vision into a digital experience. Let’s build something
            unforgettable—together.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-6">
            {/* Let's talk btn */}
            <button className="relative overflow-hidden rounded-full bg-black px-6 py-3 text-white font-medium group cursor-pointer">
              <span className="relative z-10">Let’s Work Together ?</span>
              <span className="absolute inset-0 bg-blue-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            </button>

            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="User"
                />
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="User"
                />
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="User"
                />
              </div>
              <span className="text-sm text-gray-600">
                <strong>120K+</strong> Active users
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE
        <div className="relative flex items-center justify-center w-full md:w-1/2">
          {/* Floating Text  *
          <div className="h-[350px] md:h-[450px] overflow-hidden flex flex-col justify-center mr-100 md:mr-24 z-10">
            <div className="animate-scroll-vertical">
              {[...rotatingTexts, ...rotatingTexts].map((text, i) => (
                <div
                  key={i}
                  className="mb-6 md:mb-8 bg-white text-black shadow-md rounded-full px-6 py-2 text-sm md:text-base font-medium  flex items-center gap-2"
                >
                  <span>{text}</span>
                  <Layers size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Sphere with pattern *
          <div className="absolute right-[60px] md:right-[-140px] top-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px]  ">
            <Image
              src="/hero.jpg"
              alt="Hero Pattern"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
        </div> */}

        {/* RIGHT SIDE */}
        {/* <div className="relative flex items-center justify-end w-full md:w-1/2 gap-10 md:gap-20"> */}
        {/* Floating Text Section */}
        {/* <div className="flex flex-col justify-center gap-0 md:gap-18 z-10 bg-gray-900">
            <div className="animate-scroll-vertical ">
              {rotatingTexts.map((text, i) => (
                <div
                  key={text}
                  className=" text-black  bg-white shadow-md rounded-full  px-6 py-2 text-sm md:text-base font-medium flex items-center gap-6 animate-float"
                  // style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <span>{text}</span>
                  <Layers size={18} />
                </div>
              ))}
            </div>
          </div> */}
        {/* second */}
        <div className="h-[350px] md:h-[450px] overflow-hidden flex flex-col justify-center mr-0 md:mr-24 z-10">
          <div className="animate-scroll-vertical">
            {[...rotatingTexts, ...rotatingTexts].map((text,i) => (
              <div
                key={i}
                className="mb-6 md:mb-8 bg-white text-black shadow-md rounded-full px-6 py-2 text-sm md:text-base font-medium  flex items-center gap-2"
              >
                <span>{text}</span>
                <Layers size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Sphere (Now part of flex layout, not absolute) */}
        <div className="relative w-[220px] h-[20px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px]">
          <Image
            src="/hero.jpg"
            alt="Hero Pattern"
            fill
            className="object-contain rounded-full"
            priority
          />
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
// }
// "use client";

// import { Layers } from "lucide-react";
// import hero from "@/app/assets/hero.jpg" // ✅ adjust path if needed

// export default function Hero_section() {
//   const floatingTexts = [
//     "Web Design",
//     "Development",
//     "Branding",
//     "UI/UX Design",
//   ];

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-r from-white via-gray-50 to-gray-100 py-24 px-6">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
//         {/* ================= LEFT SECTION ================= */}
//         <div className="flex-1 space-y-6 text-center md:text-left">
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
//             Designing Digital Worlds That Spark <br />
//             <span className="text-gray-800">Emotion</span> and{" "}
//             <span className="text-gray-800">Action</span>
//           </h1>

//           <p className="text-gray-600 max-w-lg mx-auto md:mx-0">
//             From bold websites to memorable brand identities, we turn your
//             vision into a digital experience. Let’s build something
//             unforgettable—together.
//           </p>

//           <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-6">
//             <button className="bg-black text-white rounded-full px-6 py-3 font-medium hover:opacity-90 transition">
//               Let’s Work Together ?
//             </button>

//             <div className="flex items-center space-x-2">
//               <div className="flex -space-x-2">
//                 <img
//                   src="https://i.pravatar.cc/40?img=1"
//                   className="w-8 h-8 rounded-full border-2 border-white"
//                   alt="User 1"
//                 />
//                 <img
//                   src="https://i.pravatar.cc/40?img=2"
//                   className="w-8 h-8 rounded-full border-2 border-white"
//                   alt="User 2"
//                 />
//                 <img
//                   src="https://i.pravatar.cc/40?img=3"
//                   className="w-8 h-8 rounded-full border-2 border-white"
//                   alt="User 3"
//                 />
//               </div>
//               <span className="text-sm text-gray-600">
//                 <strong>120K+</strong> Active users
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* ================= RIGHT SECTION ================= */}
//         <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-4 w-full">
//           {/* FLOATING TEXT LABELS */}
//           <div className="flex-1 flex flex-col items-end justify-center gap-6 relative">
//             {floatingTexts.map((text, i) => (
//               <div
//                 key={i}
//                 className="bg-white text-black shadow-md rounded-full px-6 py-2 text-base font-medium whitespace-nowrap flex items-center gap-2"
//               >
//                 <span>{text}</span>
//                 <Layers size={18} />
//               </div>
//             ))}
//           </div>

//           {/* HALF-SPHERE IMAGE */}
//           <div className="flex-1 flex items-center justify-center">
//             <div
//               className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-no-repeat bg-center bg-contain"
//               style={{
//                 backgroundImage: `url(${hero.src})`,
//                 clipPath: "inset(0 0 0 50%)",
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
