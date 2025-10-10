"use client";

import { useState } from "react";
import { Trophy, X } from "lucide-react";
import Image from "next/image";

interface AccordionItem {
  title: string;
  content: string;
}

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items: AccordionItem[] = [
    {
      title: "1K+ Projects Done",
      content:
        "Welcome Inovis where storytelling center we are more than video production company creative or the partners video welcome.",
    },
    {
      title: "5K+ Happy Clients",
      content:
        "We take pride in building long-term relationships with clients, delivering value through creativity, innovation, and collaboration.",
    },
    {
      title: "30+ Countries",
      content:
        "Our projects span over 30 countries, empowering brands globally with thoughtful design and visual storytelling.",
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white relative">
      {/* Top Section */}
      <div className="mb-10">
        <p className="text-md text-gray-500 mb-2 flex items-center gap-2">
          About us{" "}
          <span>
            <img src="badge-icon.webp" alt="" className="w-4   " />
          </span>
              </p>
              <div className="flex items-center gap-30">
                  
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Our Approach is Holistic <br className="hidden md:block" /> and
          Collaborative.
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl">
          Website design, a fresh brand identity, or eye-catching marketing
          materials. Our team is skilled in a range of design disciplines,
          including graphic design, web design, UX/UI design, and more.
        </p>
              </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left: Video Thumbnail */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-2xl">
            <img
              src="videimg.jpg"
              alt="About Video"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              aria-label="Play Video"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white/70 hover:bg-white/90 transition p-4 rounded-full shadow-lg">
                <svg
                  xmlns="https://youtu.be/ZW-Q2vi9sOI?si=Dy_DgqTnnKJ5E-gD"
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Right: Accordion Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "bg-gray-50 shadow-sm" : "bg-white"
              }`}
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-gray-700" />
                  <span className="font-semibold text-gray-800 text-lg">
                    {item.title}
                  </span>
                </div>
                <span className="text-gray-600 text-xl">
                  {activeIndex === index ? (
                    <img src="Earo_Up.png" alt="" className="w-5" />
                  ) : (
                    <img src="Earo_Up.png" alt="" className="w-5" />
                  )}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-12 pb-5 text-gray-600 text-sm leading-relaxed">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-[90%] md:w-[70%] lg:w-[50%] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 bg-white/80 hover:bg-white text-black p-2 rounded-full z-10 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="About Us Video"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
