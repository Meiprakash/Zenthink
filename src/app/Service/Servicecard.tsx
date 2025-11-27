import React from "react";
import Image from "next/image";
import Link from "next/link";

const servicecard = [
  {
    name: "IT consulting service",
    desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
    icon: "/service-card-01.jpg",
    link: "/Service/it-consulting",
  },
  {
    name: "Consulting & Strategy",
    desc: "We provide expert technology guidance that aligns IT investments with business objectives. ",
    icon: "/service-card-02.jpg",
    link: "/Service/app-dev",
  },
  {
    name: "Maintenance",
    desc: "We ensure continuous system performance that keeps your operations running  securely. ",
    icon: "/service-card-03.jpg",
    link: "/Service/it-consulting",
  },
  {
    name: "AI & Automation",
    desc: "We implement smart automation solutions that eliminate repetitive tasks and unlock productivity.",
    icon: "/service-card-04.jpg",
    link: "/Service/it-consulting",
  },
  {
    name: "IT consulting service",
    desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
    icon: "/service-card-01.jpg",
    link: "/Service/it-consulting",
  },
  {
    name: "IT consulting service",
    desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
    icon: "/service-card-02.jpg",
    link: "/Service/it-consulting",
  },
  {
    name: "IT consulting service",
    desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
    icon: "/service-card-03.jpg",
    link: "/Service/it-consulting",
  },
  {
    name: "IT consulting service",
    desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
    icon: "/service-card-04.jpg",
    link: "/Service/it-consulting",
  },
  {
    name: "IT consulting service",
    desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
    icon: "/service-card-01.jpg",
    link: "/Service/it-consulting",
  },
];

function Servicecard() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:mx-39 sm:mx-7 mx-5 h-full  ">
        {servicecard.map((i, index) => (
          <div
            key={index}
            className="col-span-1 bg-gray-100 p-5 rounded-xl shadow-xs hover:shadow-xl transition delay-100 duration-150"
          >
            <div className="mb-18">
              <Image
                src={i.icon}
                alt="service icon"
                width={40}
                height={20}
                className="mt-2    rounded-2xl"
              />
            </div>
            <div className="text-xl sm:text-3xl mb-2 text-black font-semibold">
              {i.name}
            </div>
            <div className="text-[14px] text-gray-500">{i.desc}</div>
            <div className="mt-6">
              <Link href={i.link} className="text-black flex gap-1 ">
                Read more{" "}
                <span>
                  <Image
                    src="/arrow2.png"
                    alt="arrow"
                    width={15}
                    height={8}
                    className="mt-1.5 "
                  />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicecard;
