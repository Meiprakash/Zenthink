// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion, easeOut } from "framer-motion";
// import {
//   ShoppingCart,
//   Package,
//   FileText,
//   Users,
//   BarChart3,
//   Layers,
//   ShieldCheck,
//   CheckCircle2,
// } from "lucide-react";
// import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/Footer";

// const PharmacySoftwarePage = () => {
//   const container = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { staggerChildren: 0.2 } },
//   };
//   const item = {
//     hidden: { opacity: 0, y: 40 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
//   };
//   const features = [
//     {
//       title: "POS INTEGRATION",
//       description:
//         "Quick, accurate billing and payment processing at the point of sale.",
//       icon: <ShoppingCart size={40} strokeWidth={1.5} />,
//     },
//     {
//       title: "INVENTORY MANAGEMENT",
//       description: "Track stock levels, expiry dates, and automate reordering.",
//       icon: <Package size={40} strokeWidth={1.5} />,
//     },
//     {
//       title: "PRESCRIPTION MANAGEMENT",
//       description:
//         "Digitally manage prescriptions, dosage instructions, and patient history.",
//       icon: <FileText size={40} strokeWidth={1.5} />,
//     },
//     {
//       title: "CUSTOMER MANAGEMENT",
//       description:
//         "Maintain customer profiles, loyalty programs, and purchase history.",
//       icon: <Users size={40} strokeWidth={1.5} />,
//     },
//     {
//       title: "REPORTING & ANALYTICS",
//       description:
//         "Generate real-time sales, inventory, and financial reports.",
//       icon: <BarChart3 size={40} strokeWidth={1.5} />,
//     },
//     {
//       title: "MULTI-STORE SUPPORT",
//       description: "Manage multiple pharmacy locations from a single platform.",
//       icon: <Layers size={40} strokeWidth={1.5} />,
//     },
//     {
//       title: "SECURITY & COMPLIANCE",
//       description:
//         "Ensure HIPAA/GDPR-compliant data handling and secure transactions.",
//       icon: <ShieldCheck size={40} strokeWidth={1.5} />,
//     },
//   ];

//   const benefits = [
//     "Efficiency & Accuracy: Automate routine tasks to reduce human error.",
//     "Enhanced Customer Experience: Faster billing and personalized service.",
//     "Real-Time Insights: Make informed business decisions with analytics.",
//     "Scalable & Flexible: Adaptable for small, medium, or large chains.",
//     "Seamless Integration: Works with barcode scanners and payment gateways.",
//   ];

//   return (
//     <div>
//       <Navbar />
//       <div className="min-h-screen bg-white text-gray-900 font-sans p-8 md:p-16">
//         {/* Header Section */}
//         {/* <header className="max-w-7xl mx-auto mb-20">
//           <div className="flex flex-col md:flex-row justify-between items-start gap-8">
//             <div className="md:w-1/2">
//               <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
//                 Pharmacy Software with POS Integration
//               </h1>
//               <p className="text-xl text-gray-600 italic">
//                 "Streamline Your Pharmacy Operations, Enhance Customer
//                 Experience"
//               </p>
//             </div>
//             <div className="md:w-1/3">
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 ZenThink Technologies’ solution is designed to simplify every
//                 aspect of pharmacy management—from inventory control to
//                 billing—ensuring seamless sales operations and improved patient
//                 satisfaction.
//               </p>
//             </div>
//           </div>
//         </header> */}

//         <motion.section
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-50px", amount: 0.1 }}
//           className="w-full flex flex-col lg:flex-row items-start justify-between  sm:ml-11 mb-0 sm:mb-30"
//         >
//           <motion.div
//             variants={item}
//             className="flex-1 max-w-2xl mb-6 sm:mb-8 md:mb-10 lg:mb-0"
//           >
//             <motion.h1
//               initial={{ y: 30, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.8 }}
//               className="text-[28px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium leading-[1.1] sm:leading-[1.15] lg:leading-light text-black"
//             >
//               Pharmacy <span className="text-neutral-500">Software</span> with{" "}
//               <span className="text-neutral-500">POS Integration</span>
//             </motion.h1>
//           </motion.div>

//           <motion.div
//             variants={item}
//             className="flex-1 max-w-md lg:max-w-lg lg:mt-7  sm:mr-19 text-neutral-600 text-sm xs:text-base sm:text-lg leading-relaxed lg:pl-4"
//           >
//             ZenThink Technologies’ solution is designed to simplify every aspect
//             of pharmacy management—from inventory control to billing—ensuring
//             seamless sales operations and improved patient satisfaction.
//           </motion.div>
//         </motion.section>
//         {/* <motion.h1
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium leading-[1.1] sm:leading-[1.15] lg:leading-light text-black w-full lg:w-1/2"
//         >
//           Pharmacy <span className="text-neutral-500">Software</span> with{" "}
//           <span className="text-neutral-500">POS Integration</span>
//         </motion.h1> */}

//         {/* Features Grid */}
//         <motion.section variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-50px", amount: 0.1 }}>
//           <section className="max-w-7xl mx-auto mb-24">
//             <div className="">
//               <h2 className="mb-4 text-[30px] sm:text-2xl md:text-4xl lg:text-[44px] font-medium leading-tight ">
//                 Key Features
//                 {/* <Image src="/badge-icon.jpg" alt="badge" width={16} height={16} /> */}
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="border border-gray-100 bg-gray-50/30 rounded-[2rem] p-10 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
//                 >
//                   <div>
//                     <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed mb-8">
//                       {feature.description}
//                     </p>
//                   </div>
//                   <div className="text-black">{feature.icon}</div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </motion.section>

//         {/* Benefits Section */}
//         <motion.section variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-50px", amount: 0.1 }}>
//           <section className="max-w-7xl mx-auto bg-black text-white rounded-[3rem] p-12 md:p-20">
//             <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest">
//               Core Benefits
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {benefits.map((benefit, index) => (
//                 <div key={index} className="flex items-start gap-4">
//                   <CheckCircle2
//                     className="text-green-400 mt-1 flex-shrink-0"
//                     size={24}
//                   />
//                   <p className="text-lg text-gray-300">{benefit}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </motion.section>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default PharmacySoftwarePage;

"use client";
import React from "react";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import {
  ShoppingCart,
  Package,
  FileText,
  Users,
  BarChart3,
  Layers,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

const PharmacySoftwarePage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const features = [
    {
      title: "POS INTEGRATION",
      description:
        "Quick, accurate billing and payment processing at the point of sale.",
      icon: <ShoppingCart size={40} strokeWidth={1.5} />,
    },
    {
      title: "INVENTORY MANAGEMENT",
      description: "Track stock levels, expiry dates, and automate reordering.",
      icon: <Package size={40} strokeWidth={1.5} />,
    },
    {
      title: "PRESCRIPTION MANAGEMENT",
      description:
        "Digitally manage prescriptions, dosage instructions, and patient history.",
      icon: <FileText size={40} strokeWidth={1.5} />,
    },
    {
      title: "CUSTOMER MANAGEMENT",
      description:
        "Maintain customer profiles, loyalty programs, and purchase history.",
      icon: <Users size={40} strokeWidth={1.5} />,
    },
    {
      title: "REPORTING & ANALYTICS",
      description:
        "Generate real-time sales, inventory, and financial reports.",
      icon: <BarChart3 size={40} strokeWidth={1.5} />,
    },
    {
      title: "MULTI-STORE SUPPORT",
      description: "Manage multiple pharmacy locations from a single platform.",
      icon: <Layers size={40} strokeWidth={1.5} />,
    },
    {
      title: "SECURITY & COMPLIANCE",
      description:
        "Ensure HIPAA/GDPR-compliant data handling and secure transactions.",
      icon: <ShieldCheck size={40} strokeWidth={1.5} />,
    },
  ];

  const benefits = [
    "Efficiency & Accuracy: Automate routine tasks to reduce human error.",
    "Enhanced Customer Experience: Faster billing and personalized service.",
    "Real-Time Insights: Make informed business decisions with analytics.",
    "Scalable & Flexible: Adaptable for small, medium, or large chains.",
    "Seamless Integration: Works with barcode scanners and payment gateways.",
  ];

  return (
    <div>
      <Navbar />

      <div className="min-h-screen  text-gray-900 font-sans p-8 md:p-16">
        {/* HERO SECTION */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px", amount: 0.1 }}
          className="w-full flex flex-col lg:flex-row items-start justify-between sm:ml-11 mb-0 sm:mb-30"
        >
          <motion.div
            variants={item}
            className="flex-1 max-w-2xl mb-6 sm:mb-8 md:mb-10 lg:mb-0"
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[28px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium leading-[1.1] sm:leading-[1.15] lg:leading-light text-black"
            >
              Pharmacy <span className="text-neutral-500">Software</span> with{" "}
              <span className="text-neutral-500">POS Integration</span>
            </motion.h1>
          </motion.div>

          <motion.div
            variants={item}
            className="flex-1 max-w-md lg:max-w-lg lg:mt-7 sm:mr-19 text-neutral-600 text-sm xs:text-base sm:text-lg leading-relaxed lg:pl-4"
          >
            ZenThink Technologies’ solution is designed to simplify every aspect
            of pharmacy management—from inventory control to billing—ensuring
            seamless sales operations and improved patient satisfaction.
          </motion.div>
        </motion.section>

        {/* FEATURES SECTION */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px", amount: 0.1 }}
        >
          <section className="max-w-7xl mx-auto mb-24">
            <motion.h2
              variants={item}
              className="mb-4 text-[30px] sm:text-2xl md:text-4xl lg:text-[44px] font-medium leading-tight"
            >
              Key Features
            </motion.h2>

            <motion.div
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  // whileHover={{ scale: 1.03 }}
                  className="border border-gray-100 bg-gray-50/30 hover:border-lime-500 rounded-[2rem] p-10 flex flex-col justify-between hover:shadow-lg  transition-shadow duration-300"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {feature.description}
                    </p>
                  </div>
                  <div className="text-black">{feature.icon}</div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </motion.section>

        {/* BENEFITS SECTION */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px", amount: 0.1 }}
        >
          <section className="max-w-7xl mx-auto bg-black text-white rounded-[3rem] p-12 md:p-20">
            <motion.h2
              variants={item}
              className="text-3xl font-bold mb-12 uppercase tracking-widest"
            >
              Core Benefits
            </motion.h2>

            <motion.div
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2
                    className="text-lime-500 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default PharmacySoftwarePage;
