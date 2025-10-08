"use client";

import { Layers } from "lucide-react";
import hero from "@/assats/hero.jpg";

const rotatingTexts = ["Web Design", "Development", "Branding", "UI/UX Design"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,white_0%,#EAE4F9_60%,#f9f9f9_100%)]">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT SIDE */}
        <div className="max-w-2xl space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
            Designing Digital Worlds That Spark{" "}
            <span className="text-lime-400">Emotion</span> and{" "}
            <span className="text-lime-400">Action</span>
          </h1>
          <p className="text-gray-600">
            From bold websites to memorable brand identities, we turn your
            vision into a digital experience. Let’s build something
            unforgettable—together.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-6">
            {/* lets talk btn */}
            <button className="relative overflow-hidden rounded-full bg-black px-6 py-3 text-white font-medium group cursor-pointer">
              <span className="relative z-10">Let’s Work Together ?</span>
              <span className="absolute inset-0 bg-lime-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
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

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center w-full md:w-1/2">
          {/* Floating Text  */}
          <div className="h-[450px] overflow-hidden flex flex-col justify-center mr-60 z-10">
            <div className="animate-scroll-vertical">
              {[...rotatingTexts, ...rotatingTexts].map((text, i) => (
                <div
                  key={i}
                  className="mb-8 bg-white text-black shadow-md rounded-full px-6 py-2 text-base font-medium whitespace-nowrap flex items-center gap-2"
                >
                  <span>{text}</span>
                  <Layers size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Sphere with pattern */}
          <div
            className="
          absolute
          right-[-140px]
          top-1/2
          -translate-y-1/2
          w-[550px]
          h-[550px]
          md:w-[650px]
          md:h-[650px]
          flex
          items-center
          justify-center
          pointer-events-none
        "
          >
            <div
              className="w-full h-full rounded-full bg-no-repeat bg-center animate-slow-spin"
              style={{
                backgroundImage: `url(${hero.src})`,
                backgroundSize: "contain",
                clipPath: "inset(0 0 0 50%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
