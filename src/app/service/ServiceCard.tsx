import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const serviceCard = [
  {
    name: "Web Applications & Websites ",
    desc: "We build responsive, high-performance web platforms that deliver seamless user experiences and drive business results across all devices.",
    icon: "/web-development-svgrepo-com.svg",
    link: "/service/web-application",
  },
  {
    name: "Mobile Applications ",
    desc: "We develop native and cross-platform mobile apps that engage users, streamline operations, and extend your business reach on iOS and Android.",
    icon: "/mobile-development-coding-code-xcode-svgrepo-com.svg",
    link: "/service/mobile-application",
  },
  {
    name: "Legacy Modernization",
    desc: "We transform outdated systems into modern, cloud-ready architectures that reduce costs, improve performance, and eliminate technical debt.",
    icon: "/tron-arrow-svgrepo-com.svg",
    link: "/service/legacy-modernization",
  },
  {
    name: "API Development & Integration",
    desc: "We design robust APIs and seamless integrations that connect your systems, enable data flow, and create unified digital ecosystems.",
    icon: "/api-svgrepo-com.svg",
    link: "/service/api-development-integration",
  },
  {
    name: "AI-Enhanced Solutions",
    desc: "We integrate intelligent automation and machine learning capabilities that optimize decision-making, predict trends, and unlock hidden insights from your data.",
    icon: "/ai-svgrepo-com.svg",
    link: "/service/ai-enhanced-solutions",
  },
];

function ServiceCard() {
  return (
    <div>
        <section className="w-full py-10 md:py-12 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-2 mb-3 md:mb-0">
              <span className="text-md sm:text-lg md:text-xl font-medium text-neutral-900">
                Our Services
              </span>
              <span className="relative w-4 h-4 xs:w-5 xs:h-5">
                <Image
                  src="/badge-icon.webp"
                  alt="Verified badge"
                  fill
                  className="object-contain w-4 h-4"
                />
              </span>
            </div>

            {/* Section Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8 lg:gap-12"
            >
              {/* Left side title */}
              <div className="lg:flex-1">
                <h2 className="text-[30px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-medium text-neutral-900 leading-[1.2] sm:leading-tight tracking-tight">
                  Software Excellence Across Every Business Function
                </h2>
              </div>

              {/* Right side text */}
              <div className="lg:flex-1 lg:max-w-md lg:pl-4 -mt-3 md:mt-0">
                <p className="text-neutral-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                  We create technology that directly impacts your bottom line.
                  From customer-facing applications to backend infrastructure,
                  our solutions are engineered to improve performance, increase
                  agility, and deliver measurable ROI.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mb-8 md:mb-12 -mt-5 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 h-full">
          {serviceCard.map((i, index) => {
            const colSpanClass = index < 3 ? "md:col-span-4" : "md:col-span-6";

            return (
              <Link
                key={index}
                href={i.link}
                className={`${colSpanClass} group e p-5 flex flex-col justify-between items-start rounded-xl border border-black/10 transition-all duration-300 ease-in-out hover:-translate-y-1`}
              >
                <div>
                  <div className="mb-12">
                    <Image
                      src={i.icon}
                      alt="service icon"
                      width={40}
                      height={20}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <div className="text-xl sm:text-3xl mb-2 text-black font-semibold group-hover:text-lime-600 transition-colors duration-300">
                      {i.name}
                    </div>

                    <div className="text-[14px] text-gray-500">{i.desc}</div>
                  </div>
                </div>

                <div className="mt-6 flex justify-start ">
                  <span className="text-black py-1  rounded-2xl w-fit flex gap-1 transform transition-all duration-500 ease-in-out group-hover:gap-3 group-hover:text-lime-500">
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
    </div>
  );
}

export default ServiceCard;
