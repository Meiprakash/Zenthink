import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div>
      
        <div className="py-4 sm:py-6 md:py-8 lg:py-10">
          {/* Hero Section */}
          <section className="w-full pt-8 sm:pt-10 md:pt-12 lg:pt-16 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col lg:flex-row max-w-7xl mx-auto items-start justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12"
            >
              {/* Left side title */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium leading-[1.1] sm:leading-[1.15] lg:leading-light text-black w-full lg:w-1/2"
              >
                We Engineer{" "}
                <span className="text-neutral-500">Transformative</span> Software{" "}
                <span className="text-neutral-500">Solutions</span>
              </motion.h1>

              {/* Right side text */}
              <p className="text-neutral-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed w-full lg:w-1/2 lg:pl-4">
                We combine bold ideas with smart strategy to design brand
                experiences that connect, convert, and inspire. From startups to
                industry leaders, we make your brand unforgettable.
              </p>
            </motion.div>
          </section>

          {/* Stats & CTA Section */}
          <section className="w-full px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28 mb-8 sm:mb-10 md:mb-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
                {/* Left Large Card - Contact CTA */}
                <div className="relative lg:col-span-3 h-[250px] xs:h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px]">
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden">
                    <Image
                      src="/service2.webp"
                      alt="Contact our team"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>

                  <div className="absolute bottom-3 xs:bottom-4 left-3 xs:left-4 right-3 xs:right-4 md:bottom-6 md:left-6 md:right-6 bg-white/90 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 border border-white/20 shadow-lg">
                    <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-black">
                      Need More Info?
                    </h3>
                    <p className="text-neutral-800 text-[12px] sm:text-base mt-1 xs:mt-2 mb-3 xs:mb-4">
                      Didn’t find what you were looking for? Let’s chat and solve it together!
                    </p>
                    <Link href="/Contact" className="inline-block">
                      <button className="relative overflow-hidden text-xs xs:text-sm sm:text-base font-medium px-4 xs:px-5 py-2 xs:py-2.5 md:px-6 md:py-3 rounded-lg text-white bg-black hover:bg-gray-900 transition-all duration-300 group w-full sm:w-auto">
                        <span className="relative z-10">Contact Us</span>
                        <span className="absolute inset-0 rounded-lg bg-lime-500 transform -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Middle Card - Stats */}
                <div className="lg:col-span-1 bg-white rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 border border-gray-100 shadow-xs flex flex-row md:flex-col items-center md:items-start justify-between h-[80px] sm:h-[250px] md:h-[300px] lg:h-[400px]">
                  <div className="text-black text-sm xs:text-base sm:text-lg md:text-xl">
                    <span className="block">Satisfied</span>
                    <span className="block font-medium">Customers</span>
                  </div>
                  <div className="mt-0 sm:mt-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-600">
                    200K+
                  </div>
                  <div className="flex justify-center lg:justify-start">
                    <div className="relative w-20 h-14 xs:w-24 xs:h-16 sm:w-28 sm:h-18 md:w-32 md:h-20">
                      <Image
                        src="/about-avater-group.jpg"
                        alt="Happy customers"
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 150px"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="lg:col-span-2 h-[200px] xs:h-[220px] sm:h-[250px] md:h-[300px] lg:h-[400px]">
                  <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden">
                    <Image
                      src="/service3.jpg"
                      alt="Our services"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Intro Section */}
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
                    From customer-facing applications to backend infrastructure, our
                    solutions are engineered to improve performance, increase
                    agility, and deliver measurable ROI.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
    </div>
  )
}

export default HeroSection
