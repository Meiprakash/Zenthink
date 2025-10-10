"use client";

import { Layers } from "lucide-react";
import Image from "next/image";

const rotatingTexts = ["Web Design","UX Design", "Branding", "UI Design"];

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
            <div className="flex items-center space-x-3 ">
              <div className="flex items-center content-center">
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
              <span className="text-xl text-gray-600">
                <strong>120K+</strong> Active users
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-end w-full md:w-1/2 gap-10 md:gap-16">
          {/* Floating / Scrolling Texts */}
          <div className="h-[400px] md:h-[500px] overflow-hidden flex flex-col justify-center z-10 ml-2">
            <div className="animate-scroll-up ">
              {[...rotatingTexts, ...rotatingTexts].map((text, i) => (
                <div
                  key={`${text}-${i}`}
                  className="mb-16 md:mb-8 bg-white text-black shadow-md rounded-full px-6 py-3 text-sm md:text-base font-medium flex items-center gap-6"
                >
                  <span>{text}</span>
                  <Layers size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Sphere */}
          <div className="relative w-[160px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]">
            <Image
              src="/hero.jpg"
              alt="Hero Pattern"
              fill
              className="object-contain "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
