// "use client";

// import { motion } from "framer-motion";
// import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/Footer";

// const privacyPolicyData = {
//   company: "ZenThink Technologies",
//   effectiveDate: "01 Jan 2026",

//   introduction: {
//     title: "Introduction",
//     content: [
//       "Your privacy is important to us. At ZenThink Technologies (“ZenThink”, “we”, “our”, “us”), trust is fundamental to our relationship with clients, partners, and website visitors.",
//       "As a service-based IT company, we handle personal, business, and project-related information while delivering software development, cloud, database, DevOps, and IT support services.",
//     ],
//     bullets: [
//       "What personal data we collect",
//       "Why we collect it",
//       "How we use and protect it",
//       "With whom we may share it",
//       "Your rights related to personal data",
//     ],
//   },

//   sections: [
//     {
//       id: "applicability",
//       title: "Applicability of This Privacy Policy",
//       points: [
//         "Visitors to our website",
//         "Individuals who contact us for enquiries or services",
//         "Clients, partners, and business contacts",
//         "Participants in meetings, calls, events, or initiatives organized by ZenThink",
//       ],
//       note: "This policy does not apply to employment-related data of employees or job applicants.",
//     },

//     {
//       id: "website-data",
//       title: "Access to Our Website and Online Services",
//       description:
//         "You may browse our website without directly providing personal information. Certain technical data may be collected automatically.",
//       points: [
//         "IP address",
//         "Browser type and version",
//         "Device type and operating system",
//         "Pages visited and time spent",
//         "Referring URLs",
//         "Language and regional settings",
//       ],
//       purpose: [
//         "Ensure website functionality and security",
//         "Monitor and improve website performance",
//         "Understand usage trends",
//         "Enhance user experience",
//       ],
//     },

//     {
//       id: "contact",
//       title: "Queries, Contact Requests, and Support",
//       points: [
//         "Full name",
//         "Company name and job title",
//         "Business email and phone number",
//         "Content of your enquiry",
//       ],
//       note: "If required information is not provided, our ability to respond may be limited.",
//     },

//     {
//       id: "service-delivery",
//       title: "Service Delivery and Client Engagement",
//       points: [
//         "Project requirements and specifications",
//         "Technical documentation and configurations",
//         "Communication and support records",
//       ],
//       commitment: [
//         "Client data is used only for agreed service purposes",
//         "Access is restricted to authorized personnel",
//         "Security controls protect sensitive information",
//         "Client intellectual property remains with the client",
//       ],
//     },

//     {
//       id: "marketing",
//       title: "Marketing and Business Communications",
//       points: [
//         "Service updates and business communications",
//         "Responding to professional interests",
//         "Maintaining business relationships",
//       ],
//       note: "Marketing communications are sent only where permitted by law and include opt-out options.",
//     },

//     {
//       id: "cookies",
//       title: "Cookies and Similar Technologies",
//       content:
//         "We use cookies to enable website functionality, analyze traffic, and improve user experience. Further details are provided in our Cookies Policy.",
//     },

//     {
//       id: "sharing",
//       title: "Sharing of Personal Data",
//       points: [
//         "Authorized internal teams",
//         "Trusted third-party service providers under confidentiality agreements",
//         "Legal or regulatory authorities when required",
//         "Protection of our rights and systems",
//       ],
//     },

//     {
//       id: "security",
//       title: "Data Security",
//       points: [
//         "Secure infrastructure and access controls",
//         "Restricted access on a need-to-know basis",
//         "Confidentiality obligations for personnel",
//       ],
//       note: "Despite safeguards, no system can guarantee absolute security.",
//     },

//     {
//       id: "retention",
//       title: "Data Retention",
//       points: [
//         "Fulfill service and business purposes",
//         "Comply with legal obligations",
//         "Resolve disputes and maintain records",
//       ],
//     },

//     {
//       id: "rights",
//       title: "Your Rights",
//       points: [
//         "Access your personal data",
//         "Request corrections or updates",
//         "Request deletion",
//         "Withdraw consent",
//         "Request data portability",
//       ],
//     },

//     {
//       id: "changes",
//       title: "Changes to This Privacy Policy",
//       content:
//         "This Privacy Policy may be updated periodically. Changes will be published on this page with a revised effective date.",
//     },
//   ],

//   contact: {
//     company: "ZenThink Technologies",
//     founded: "7 May 2025",
//     email: "info@zenthink.in",
//   },
// };

// const PrivacyPolicy = () => {
//     return (
//         <div>
//             <Navbar/>
//         <section className="px-6 md:px-16 py-12 md:py-20">
//           <div className="max-w-6xl mx-auto">
//             {/* ===== HEADER ===== */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mb-14"
//             >
//               <h1 className="text-[34px] md:text-[48px] font-medium text-neutral-900">
//                 Privacy Policy
//               </h1>
//               <p className="text-neutral-600 mt-3">
//                 {privacyPolicyData.company} · Effective Date:{" "}
//                 {privacyPolicyData.effectiveDate}
//               </p>
//             </motion.div>

//             {/* ===== INTRO ===== */}
//             <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 md:p-10 mb-12">
//               <h2 className="text-2xl font-semibold mb-4">
//                 {privacyPolicyData.introduction.title}
//               </h2>

//               {privacyPolicyData.introduction.content.map((text, i) => (
//                 <p key={i} className="text-neutral-700 mb-3 leading-relaxed">
//                   {text}
//                 </p>
//               ))}

//               <ul className="mt-4 list-disc list-inside text-neutral-700 space-y-1">
//                 {privacyPolicyData.introduction.bullets.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* ===== SECTIONS ===== */}
//             <div className="space-y-10">
//               {privacyPolicyData.sections.map((section, index) => (
//                 <motion.div
//                   key={section.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   className="border border-neutral-200 rounded-3xl p-6 md:p-8"
//                 >
//                   <div className="flex gap-4 mb-4">
//                     <span className="text-neutral-400 text-sm font-medium">
//                       {index + 1}
//                     </span>
//                     <h3 className="text-xl font-semibold text-neutral-900">
//                       {section.title}
//                     </h3>
//                   </div>

//                   {section.content && (
//                     <p className="text-neutral-700 leading-relaxed mb-4">
//                       {section.content}
//                     </p>
//                   )}

//                   {section.description && (
//                     <p className="text-neutral-700 leading-relaxed mb-4">
//                       {section.description}
//                     </p>
//                   )}

//                   {section.points && (
//                     <ul className="list-disc list-inside text-neutral-700 space-y-1">
//                       {section.points.map((p, i) => (
//                         <li key={i}>{p}</li>
//                       ))}
//                     </ul>
//                   )}

//                   {section.purpose && (
//                     <>
//                       <p className="mt-4 font-medium text-neutral-900">
//                         Purpose of collection:
//                       </p>
//                       <ul className="list-disc list-inside text-neutral-700 space-y-1">
//                         {section.purpose.map((p, i) => (
//                           <li key={i}>{p}</li>
//                         ))}
//                       </ul>
//                     </>
//                   )}

//                   {section.commitment && (
//                     <>
//                       <p className="mt-4 font-medium text-neutral-900">
//                         Our commitment:
//                       </p>
//                       <ul className="list-disc list-inside text-neutral-700 space-y-1">
//                         {section.commitment.map((c, i) => (
//                           <li key={i}>{c}</li>
//                         ))}
//                       </ul>
//                     </>
//                   )}

//                   {section.note && (
//                     <p className="mt-4 text-sm text-neutral-500">
//                       {section.note}
//                     </p>
//                   )}
//                 </motion.div>
//               ))}
//             </div>

//             {/* ===== CONTACT ===== */}
//             <div className="mt-16 border-t pt-8 text-neutral-700">
//               <h3 className="text-xl font-semibold mb-2">
//                 Contact Information
//               </h3>
//               <p>{privacyPolicyData.contact.company}</p>
//               <p>Founded: {privacyPolicyData.contact.founded}</p>
//               <p>
//                 Email:{" "}
//                 <a
//                   href={`mailto:${privacyPolicyData.contact.email}`}
//                   className="text-black underline"
//                 >
//                   {privacyPolicyData.contact.email}
//                 </a>
//               </p>
//             </div>
//           </div>
//             </section>
//             <Footer/>
//       </div>
//     );
// };

// export default PrivacyPolicy;

"use client"
import React from "react";
import {
  ShieldCheck,
  Eye,
  MousePointer2,
  MessageSquare,
  Briefcase,
  Mail,
  Cookie,
  Share2,
  Globe,
  Lock,
  Clock,
  UserCheck,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Access to Our Website",
      icon: <MousePointer2 className="w-6 h-6" />,
      content:
        "We collect technical info like IP addresses and browser types to ensure website functionality, safety, and to monitor performance trends.",
    },
    {
      title: "2. Queries & Support",
      icon: <MessageSquare className="w-6 h-6" />,
      content:
        "When you contact us, we collect your name, email, and message content to provide effective support and maintain communication records.",
    },
    {
      title: "3. Service Delivery",
      icon: <Briefcase className="w-6 h-6" />,
      content:
        "We process project requirements and technical documentation. Client data is used only for agreed purposes with restricted access.",
    },
    {
      title: "4. Marketing Updates",
      icon: <Mail className="w-6 h-6" />,
      content:
        "We may share service updates in a B2B context. You can opt-out of these business communications at any time.",
    },
    {
      title: "5. Cookies Policy",
      icon: <Cookie className="w-6 h-6" />,
      content:
        "We use cookies to enable core functionality and analyze traffic to improve your overall user experience.",
    },
    {
      title: "6. Social Media",
      icon: <Share2 className="w-6 h-6" />,
      content:
        "We only review publicly available professional profiles (like LinkedIn) relevant to business interactions.",
    },
    {
      title: "7. Sharing of Data",
      icon: <UserCheck className="w-6 h-6" />,
      content:
        "We do not sell your data. Sharing only occurs with authorized internal teams or trusted third-party providers under contract.",
    },
    {
      title: "8. Global Transfers",
      icon: <Globe className="w-6 h-6" />,
      content:
        "Data may be processed outside your country. We take reasonable steps to ensure safeguards meet data protection laws.",
    },
    {
      title: "9. Data Security",
      icon: <Lock className="w-6 h-6" />,
      content:
        "We implement technical measures and strict access controls to safeguard your information from unauthorized access.",
    },
  ];

    return (
        <div>
            <Navbar/>
        <div className="min-h-screen bg-[#F8FAF5] text-[#1A1A1A] font-sans pb-20">
          {/* Header Section */}
          <header className="pt-20 pb-12 px-6 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#E9F3E1] p-3 rounded-2xl">
                  <ShieldCheck className="w-10 h-10 text-[#4A6741]" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Privacy Policy
              </h1>
              <p className="text-[#555] max-w-2xl mx-auto text-lg">
                At ZenThink Technologies, we recognize that trust is fundamental
                to our relationship. Effective Date:{" "}
                <span className="font-semibold text-[#4A6741]">
                  01 Jan 2026
                </span>
              </p>
            </motion.div>
          </header>

          {/* Intro Cards */}
          <main className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#F1F8EC] p-8 rounded-[32px] border border-[#E2EDDB] hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-6 text-[#4A6741]">{section.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                  <p className="text-[#666] leading-relaxed text-sm">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Detailed Content Section */}
            <section className="bg-white rounded-[40px] p-8 md:p-16 shadow-sm border border-[#F0F0F0]">
              <div className="max-w-3xl mx-auto space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-[#4A6741]" /> 10. Data
                    Retention
                  </h2>
                  <p className="text-[#555] leading-relaxed">
                    We retain personal data only for as long as necessary to
                    fulfill service purposes, comply with legal requirements,
                    and resolve disputes. Once no longer required, data is
                    securely deleted or anonymized.
                  </p>
                </div>

                <div className="bg-[#F8FAF5] p-8 rounded-3xl border-l-4 border-[#4A6741]">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-[#4A6741]" /> 11. Your
                    Rights
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#555]">
                    <li className="flex items-center gap-2">
                      • Access your data
                    </li>
                    <li className="flex items-center gap-2">
                      • Request corrections
                    </li>
                    <li className="flex items-center gap-2">
                      • Request deletion
                    </li>
                    <li className="flex items-center gap-2">
                      • Data portability
                    </li>
                  </ul>
                </div>

                <div className="text-center pt-10 border-t border-[#EEE]">
                  <h3 className="text-xl font-bold mb-2">Need to reach us?</h3>
                  <p className="text-[#666] mb-6">
                    If you have any questions regarding this policy, contact our
                    privacy team.
                  </p>
                  <a
                    href="mailto:info@zenthink.in"
                    className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white hover:text-black px-8 py-3 rounded-full hover:bg-lime-400 transition-colors"
                  >
                    info@zenthink.in <ExternalLink className="w-4 h-4" />
                  </a>
                  <p className="mt-4 text-xs text-[#999]">
                    Founded: 7 May 2025 • ZenThink Technologies
                  </p>
                </div>
              </div>
            </section>
          </main>
            </div>
            <Footer/>
      </div>
    );
};

export default PrivacyPolicy;