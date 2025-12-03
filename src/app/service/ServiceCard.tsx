import React from "react";
import Image from "next/image";
import Link from "next/link";

const serviceCard = [
  {
    name: "Web Applications & Websites ",
    desc: "We build responsive, high-performance web platforms that deliver seamless user experiences and drive business results across all devices.",
    icon: "/service-card-01.jpg",
    link: "/service/web-application",
  },
  {
    name: "Mobile Applications ",
    desc: "We develop native and cross-platform mobile apps that engage users, streamline operations, and extend your business reach on iOS and Android.",
    icon: "/service-card-02.jpg",
    link: "/service/mobile-application",
  },
  {
    name: "Legacy Modernization",
    desc: "We transform outdated systems into modern, cloud-ready architectures that reduce costs, improve performance, and eliminate technical debt.",
    icon: "/service-card-03.jpg",
    link: "/service/legacy-modernization",
  },
  {
    name: "API Development & Integration",
    desc: "We design robust APIs and seamless integrations that connect your systems, enable data flow, and create unified digital ecosystems.",
    icon: "/service-card-04.jpg",
    link: "/service/api-development-integration",
  },
  {
    name: "AI-Enhanced Solutions",
    desc: "We integrate intelligent automation and machine learning capabilities that optimize decision-making, predict trends, and unlock hidden insights from your data.",
    icon: "/service-card-01.jpg",
    link: "/service/ai-enhanced-solutions",
  },
];

function ServiceCard() {
  return (
    <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mb-8 md:mb-12 -mt-5 md:mt-0">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 h-full">
        {serviceCard.map((i, index) => {
          const colSpanClass = index < 3 ? "md:col-span-4" : "md:col-span-6";

          return (
            <Link
              key={index}
              href={i.link}
              className={`${colSpanClass} group bg-white p-5 flex flex-col justify-between items-start rounded-xl border border-black/10 transition-all duration-300 ease-in-out hover:-translate-y-1`}
            >
              <div>
                <div className="mb-12">
                  <Image
                    src={i.icon}
                    alt="service icon"
                    width={40}
                    height={20}
                    className="mt-2 rounded-2xl"
                  />
                </div>

                <div>
                  <div className="text-xl sm:text-3xl mb-2 text-black font-semibold group-hover:text-lime-600 transition-colors duration-300">
                    {i.name}
                  </div>

                  <div className="text-[14px] text-gray-500">{i.desc}</div>
                </div>
              </div>

              <div className="mt-6 flex justify-start">
                <span className="text-black py-1 p-2 rounded-2xl w-fit flex gap-1 transform transition-all duration-500 ease-in-out group-hover:gap-3 group-hover:text-lime-500">
                  Read more{" "}
                  <Image
                    src="/arrow2.png"
                    alt="arrow"
                    width={15}
                    height={4}
                    className="mt-1.5 w-4 h-3.5"
                  />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceCard;
