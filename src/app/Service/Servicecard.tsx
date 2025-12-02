import React from "react";
import Image from "next/image";
import Link from "next/link";

const servicecard = [
  {
    name: "Web Applications & Websites ",
    desc: "We build responsive, high-performance web platforms that deliver seamless user experiences and drive business results across all devices.",
    icon: "/service-card-01.jpg",
    link: "/Service/web-application",
  },
  {
    name: "Mobile Applications ",
    desc: "We develop native and cross-platform mobile apps that engage users, streamline operations, and extend your business reach on iOS and Android.",
    icon: "/service-card-02.jpg",
    link: "/Service/mobile-application",
  },
  {
    name: "Legacy Modernization",
    desc: "We transform outdated systems into modern, cloud-ready architectures that reduce costs, improve performance, and eliminate technical debt.",
    icon: "/service-card-03.jpg",
    link: "/Service/legacy-modernization",
  },
  {
    name: "AI-Enhanced Solutions ",
    desc: "We integrate intelligent automation and machine learning capabilities that optimize decision-making, predict trends, and unlock hidden insights from your data.",
    icon: "/service-card-04.jpg",
    link: "/Service/ai-enhanced-solutions",
  },
  {
    name: "API Development & Integration ",
    desc: "We design robust APIs and seamless integrations that connect your systems, enable data flow, and create unified digital ecosystems.",
    icon: "/service-card-01.jpg",
    link: "/Service/api-development-integration",
  },
  {
    name: "Custom Software Development ",
    desc: "We engineer tailored enterprise solutions from the ground up—addressing your unique workflows, compliance requirements, and industry-specific challenge.",
    icon: "/service-card-02.jpg",
    link: "/Service/custom-software-development",
  },
  // {
  //   name: "IT consulting service",
  //   desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
  //   icon: "/service-card-03.jpg",
  //   link: "/Service/it-consulting",
  // },
  // {
  //   name: "IT consulting service",
  //   desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
  //   icon: "/service-card-04.jpg",
  //   link: "/Service/it-consulting",
  // },
  // {
  //   name: "IT consulting service",
  //   desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
  //   icon: "/service-card-01.jpg",
  //   link: "/Service/it-consulting",
  // },
];

function Servicecard() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:mx-39 sm:mx-7 mx-5 h-full  ">
        {servicecard.map((i, index) => (
          <div
            key={index}
            className="col-span-1 bg-[linear-gradient(180deg,#fbfff6_0%,#f5ffe8_100%)] p-5 rounded-xl shadow-xs hover:shadow-xl transition delay-100 duration-150"
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
