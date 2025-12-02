"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/app/Components/Navbar/Navbar";
import {
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
// shadcn carousel (for desktop What We Build)
import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { EmblaOptionsType } from "embla-carousel";
import TestimonialsSection from "@/app/Components/Testimonials";
import FAQ from "@/app/Components/FaqSection";
import Footer from "@/app/Components/Footer";

// motion & lenis
import { motion, useMotionValue, useTransform } from "motion/react";
import Lenis from "lenis";

// (OPTIONAL) icons if you want to use; kept minimal
import {
  FiFileText,
  FiCircle,
  FiLayers,
  FiLayout,
  FiCode,
} from "react-icons/fi";

/* ----------------------------- TYPES ----------------------------- */

interface Stat {
  value: string;
  label: string;
}
interface Product {
  name: string;
  price: string;
  image: string;
}
interface TopProduct {
  title: string;
  desc: string;
  price: string;
  image: string;
  features: string[];
}
interface WhyItem {
  name: string;
  desc: string;
}
interface IndustryCard {
  title: string;
  description: string;
  cta?: string;
}
interface WhatWeBuildItem {
  title: string;
  description: string;
}
interface ProcessStep {
  step: number;
  title: string;
  description: string;
}
interface BenefitCard {
  title: string;
  description: string;
}
interface DevelopmentApproach {
  title: string;
  bestFor?: string;
  advantages?: string[];
}

interface Industry {
  title: string;
  slug: string;
  desc: string;
  banner: string;
  stats: Stat[];
  whyChoose: WhyItem[];
  topProducts: TopProduct[];
  products: Product[];
  industriesWeServe?: {
    heading: string;
    description: string;
    cards: IndustryCard[];
  };
  whatWeBuild?: {
    heading: string;
    description: string;
    items: WhatWeBuildItem[];
  };
  developmentProcess?: {
    heading: string;
    description: string;
    steps: ProcessStep[];
  };
  benefits?: {
    heading: string;
    description: string;
    cards: BenefitCard[];
    developmentApproaches?: DevelopmentApproach[];
  };
}

/* ----------------------------- DATA ----------------------------- */
/* Two separate industry objects: web-application and mobile-application.
   Each contains the 4 new sections (industriesWeServe, whatWeBuild, developmentProcess, benefits).
*/

const industriesData: Industry[] = [
  {
    title: "Web Application Development That Powers Modern Business",
    slug: "web-application",
    desc: "Transforming Operations with Scalable, Secure Web Platforms",
    banner: "/placeholder-product.png",
    stats: [
      { value: "500M+", label: "Transactions Processed" },
      { value: "100K+", label: "Active Users Daily" },
      { value: "50+", label: "Enterprises Powered" },
    ],
    whyChoose: [
      {
        name: "Responsive & Scalable",
        desc: "Built with modern frameworks and cloud infrastructure for seamless performance across all devices and growing traffic volumes.",
      },
      {
        name: "User-Centric Design",
        desc: "Intuitive interfaces that enhance user experience and boost productivity through thoughtful UX/UI design and accessibility standards.",
      },
      {
        name: "Secure & Compliant",
        desc: "Enterprise-grade security with data encryption, regular audits, and industry compliance protecting your sensitive business information.",
      },
      {
        name: "Fast Integration",
        desc: "Seamless connectivity with existing CRMs, ERPs, payment gateways, and third-party tools through robust API architecture.",
      },
    ],
    topProducts: [
      {
        title: "AI Diagnosis Engine",
        desc: "AI-powered system that assists doctors...",
        price: "$1599",
        image: "/placeholder-product.png",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
      {
        title: "Medical Analytics Dashboard",
        desc: "Centralized analytics for hospitals...",
        price: "$1899",
        image: "/placeholder-product.png",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
    ],
    products: [
      {
        name: "Patient Analytics App",
        price: "$499",
        image: "/placeholder-product.png",
      },
      {
        name: "AI Medical Bot",
        price: "$799",
        image: "/placeholder-product.png",
      },
      {
        name: "Hospital BI Dashboard",
        price: "$1299",
        image: "/placeholder-product.png",
      },
      {
        name: "Hospital BI Dashboard",
        price: "$1299",
        image: "/placeholder-product.png",
      },
      {
        name: "Hospital BI Dashboard",
        price: "$1299",
        image: "/placeholder-product.png",
      },
      {
        name: "Hospital BI Dashboard",
        price: "$1299",
        image: "/placeholder-product.png",
      },
    ],
    industriesWeServe: {
      heading: "Empowering Businesses Across Key Industries",
      description:
        "We deliver specialized web solutions tailored to the unique challenges and opportunities of your sector.",
      cards: [
        {
          title: "Retail & E-Commerce",
          description:
            "From online storefronts to complex marketplaces, we build web platforms that drive sales, manage inventory, and create seamless shopping experiences across all channels.",
          cta: "Explore Retail Solutions →",
        },
        {
          title: "Company & HR/Staffing",
          description:
            "From recruitment platforms to workforce management systems, we develop web applications that streamline hiring, optimize operations, and empower your HR teams.",
          cta: "Explore HR Solutions →",
        },
      ],
    },
    whatWeBuild: {
      heading: "Comprehensive Web Solutions for Every Business Need",
      description:
        "Our full-stack development expertise covers everything from customer-facing portals to complex enterprise systems.",
      items: [
        {
          title: "Custom Web Applications",
          description:
            "Tailored solutions built from scratch to address your unique business processes, workflows, and operational requirements with complete flexibility.",
        },
        {
          title: "Enterprise Portals",
          description:
            "Centralized platforms that connect employees, customers, and partners with secure access to information, tools, and collaborative workspaces.",
        },
        {
          title: "E-Commerce Platforms",
          description:
            "Complete online retail solutions with product management, payment processing, order fulfillment, and customer engagement capabilities.",
        },
        {
          title: "SaaS Applications",
          description:
            "Multi-tenant cloud platforms with subscription management, user authentication, and scalable architecture serving thousands of concurrent users.",
        },
        {
          title: "Management Systems",
          description:
            "Comprehensive business operation tools for inventory, orders, customers, employees, and resources with real-time tracking and reporting.",
        },
        {
          title: "Analytics Dashboards",
          description:
            "Data visualization platforms that transform complex information into actionable insights through interactive charts, reports, and KPI monitoring.",
        },
      ],
    },
    developmentProcess: {
      heading: "How We Build Your Web Application",
      description:
        "A proven methodology that ensures quality, transparency, and timely delivery.",
      steps: [
        {
          step: 1,
          title: "Discovery & Planning",
          description:
            "We analyze your requirements, define project scope, create technical specifications, and establish clear milestones and success metrics.",
        },
        {
          step: 2,
          title: "Design & Prototyping",
          description:
            "We craft wireframes, design user interfaces, and build interactive prototypes for your feedback before development begins.",
        },
        {
          step: 3,
          title: "Development & Testing",
          description:
            "We build your application using agile sprints, conduct rigorous quality assurance, and ensure cross-browser compatibility and performance.",
        },
        {
          step: 4,
          title: "Deployment & Support",
          description:
            "We launch your application on production servers, provide team training, and offer ongoing maintenance with regular updates and monitoring.",
        },
      ],
    },
    benefits: {
      heading: "The Zenthink Advantage",
      description:
        "Why leading businesses choose us for their web application development.",
      cards: [
        {
          title: "Faster Time to Market",
          description:
            "Our agile methodology and experienced team delivers production-ready applications 30% faster than industry average.",
        },
        {
          title: "Cost-Effective Solutions",
          description:
            "Efficient development processes and reusable components reduce costs without compromising quality or functionality.",
        },
        {
          title: "Future-Proof Technology",
          description:
            "Modern tech stacks and scalable architecture ensure your application stays relevant and performs as your business grows.",
        },
        {
          title: "Ongoing Partnership",
          description:
            "Beyond launch, we provide continuous support, updates, and strategic guidance to maximize your investment.",
        },
      ],
      developmentApproaches: [
        {
          title: "Native Development",
          bestFor: "Performance-critical, complex apps",
          advantages: [
            "Maximum performance and responsiveness",
            "Full access to device capabilities",
            "Superior user experience",
          ],
        },
        {
          title: "Cross-Platform",
          bestFor: "Faster launch, consistent experience",
          advantages: [
            "Single codebase for iOS & Android",
            "40% faster time to market",
            "Lower development costs",
          ],
        },
      ],
    },
  },

  {
    title: "Mobile Application Development That Connects Your Business",
    slug: "mobile-application",
    desc: "Transforming User Experience with Native and Cross-Platform Apps",
    banner: "/placeholder-product.png",
    stats: [
      { value: "5M+", label: "App Downloads" },
      { value: "50K+", label: "Active Users Daily" },
      { value: "4.8★", label: "Average App Rating" },
    ],
    whyChoose: [
      {
        name: "Native & Cross-Platform",
        desc: "Built with optimal technology—native iOS/Android or Flutter/React Native for faster deployment.",
      },
      {
        name: "Intuitive User Experience",
        desc: "Seamless UI with smooth animations, gesture controls, and accessibility features.",
      },
      {
        name: "Offline Functionality",
        desc: "Local data storage ensures your app works even without internet.",
      },
      {
        name: "Push Notifications",
        desc: "Real-time engagement updates that increase user retention.",
      },
    ],
    topProducts: [
      {
        title: "AI Diagnosis Engine",
        desc: "AI-powered system that assists doctors...",
        price: "$1599",
        image: "/placeholder-product.png",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
      {
        title: "Medical Analytics Dashboard",
        desc: "Centralized analytics for hospitals...",
        price: "$1899",
        image: "/placeholder-product.png",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
    ],
    products: [
      {
        name: "Patient Analytics App",
        price: "$499",
        image: "/placeholder-product.png",
      },
      {
        name: "AI Medical Bot",
        price: "$799",
        image: "/placeholder-product.png",
      },
      {
        name: "Hospital BI Dashboard",
        price: "$1299",
        image: "/placeholder-product.png",
      },
      {
        name: "Hospital BI Dashboard",
        price: "$1299",
        image: "/placeholder-product.png",
      },
      {
        name: "Hospital BI Dashboard",
        price: "$1299",
        image: "/placeholder-product.png",
      },
      {
        name: "Hospital BI Dashboard",
        price: "$1299",
        image: "/placeholder-product.png",
      },
    ],
    industriesWeServe: {
      heading: "Mobile Solutions Tailored to Your Industry",
      description:
        "We create specialized mobile applications that address the unique requirements and workflows of your business sector.",
      cards: [
        {
          title: "Retail & E-Commerce",
          description:
            "From mobile shopping apps to inventory scanners, we build applications that enhance customer experience, streamline operations, and boost sales on-the-go.",
          cta: "Explore Retail Mobile Solutions →",
        },
        {
          title: "Company & HR/Staffing",
          description:
            "From recruitment apps to employee portals, we develop mobile solutions that empower HR teams, enable remote work, and improve workforce engagement.",
          cta: "Explore HR Mobile Solutions →",
        },
      ],
    },
    whatWeBuild: {
      heading: "Comprehensive Mobile Solutions for Every Platform",
      description:
        "Our mobile development expertise covers iOS, Android, and cross-platform solutions for diverse business needs.",
      items: [
        {
          title: "Native iOS Applications",
          description:
            "Swift-based iPhone and iPad apps with perfect iOS integration, optimized performance, and adherence to Apple's strict design guidelines.",
        },
        {
          title: "Native Android Applications",
          description:
            "Kotlin-based Android apps compatible across devices, leveraging Google's Material Design for consistent and familiar user experiences.",
        },
        {
          title: "Cross-Platform Apps",
          description:
            "Flutter and React Native solutions that work seamlessly on both iOS and Android, reducing development time and cost significantly.",
        },
        {
          title: "Progressive Web Apps (PWA)",
          description:
            "Web-based apps with native-like functionality, offline access, and home screen installation without app store distribution requirements.",
        },
        {
          title: "Enterprise Mobile Apps",
          description:
            "Secure business applications with device management, authentication integration, and compliance features for internal teams and operations.",
        },
        {
          title: "Consumer Mobile Apps",
          description:
            "Customer-facing applications with social integration, in-app purchases, ratings/reviews, and engaging features that drive user retention.",
        },
      ],
    },
    developmentProcess: {
      heading: "How We Build Your Mobile Application",
      description:
        "A streamlined approach that delivers high-quality apps on schedule and within budget.",
      steps: [
        {
          step: 1,
          title: "Strategy & Planning",
          description:
            "We define your target audience, analyze competitor apps, establish feature priorities, and determine the optimal platform approach for your goals.",
        },
        {
          step: 2,
          title: "UI/UX Design",
          description:
            "We create platform-specific designs, interactive prototypes, and user flows validated through testing before any code is written.",
        },
        {
          step: 3,
          title: "Development & Integration",
          description:
            "We build your app using agile methodology, integrate backend APIs, implement features iteratively, and conduct continuous testing throughout.",
        },
        {
          step: 4,
          title: "Testing & Launch",
          description:
            "We perform comprehensive QA across devices, optimize performance, handle app store submissions, and ensure smooth deployment to users.",
        },
      ],
    },
    benefits: {
      heading: "Why Businesses Choose Our Mobile Development",
      description:
        "Delivering exceptional mobile experiences that drive engagement and business growth.",
      cards: [
        {
          title: "Platform Expertise",
          description:
            "Deep knowledge of iOS and Android ecosystems ensures apps that feel native, perform smoothly, and pass app store reviews first time.",
        },
        {
          title: "Proven Track Record",
          description:
            "Successfully launched 100+ mobile apps with millions of combined downloads, maintaining high ratings and positive user feedback consistently.",
        },
        {
          title: "Ongoing Optimization",
          description:
            "Post-launch analytics monitoring, crash reporting, performance tuning, and regular updates keep your app competitive and bug-free.",
        },
        {
          title: "App Store Success",
          description:
            "Complete support with app store optimization, compelling screenshots, video previews, and descriptions that maximize downloads and visibility.",
        },
      ],
      developmentApproaches: [
        {
          title:
            "Native Development Best for: Performance-critical apps, complex features, optimal user experience",
          bestFor:
            "Performance-critical apps, complex features, optimal user experience",
          advantages: [
            "Maximum performance and responsiveness",
            "Full access to device capabilities",
            "Best platform integration",
            "Superior user experience",
          ],
        },
        {
          title:
            "Cross-Platform Development Best for: Faster launch, budget efficiency, consistent experience",
          bestFor: "Faster launch, budget efficiency, consistent experience",
          advantages: [
            "Single codebase for iOS & Android",
            "40% faster time to market",
            "Lower development costs",
            "Easier maintenance",
          ],
        },
        {
          title:
            "Progressive Web App (PWA) Best for: Web-first approach, no app store needed",
          bestFor: "Web-first approach, no app store needed",
          advantages: [
            "Instant updates without approval",
            "Works across all devices",
            "No download required",
            "Lower barrier to entry",
          ],
        },
      ],
    },
  },
];



/* ----------------------------- UI COMPONENTS ----------------------------- */

/** Helpers - detect mobile breakpoint */
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState<boolean>(typeof window !== "undefined" ? window.innerWidth < breakpoint : false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isMobile;
};

/* ----------------------------- 1) Carousel (3D-ish cards) ----------------------------- */
/* cards-only UI for Industries We Serve */
const DEFAULT_CAROUSEL_ITEMS = (cards: IndustryCard[]) =>
  cards.map((c, idx) => ({
    title: c.title,
    description: c.description,
    id: idx,
    icon: idx === 0 ? <FiFileText className="h-[16px] w-[16px] text-white" /> : idx === 1 ? <FiCircle className="h-[16px] w-[16px] text-white" /> : idx === 2 ? <FiLayers className="h-[16px] w-[16px] text-white" /> : <FiCode className="h-[16px] w-[16px] text-white" />,
  }));

const Carousel = ({ cards, baseWidth = 920, autoplay = false, pauseOnHover = false, loop = false }: { cards: IndustryCard[]; baseWidth?: number; autoplay?: boolean; pauseOnHover?: boolean; loop?: boolean; }) => {
  const items = DEFAULT_CAROUSEL_ITEMS(cards);
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const GAP = 16;
  const trackItemOffset = itemWidth + GAP;
  const carouselItems = loop ? [...items, items[0]] : items;

  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    if (!autoplay) return;
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) return prev + 1;
          if (prev === carouselItems.length - 1) return loop ? 0 : prev;
          return prev + 1;
        });
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [autoplay, isHovered, pauseOnHover, loop, items.length, carouselItems.length]);

  const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 } as any;
  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const VELOCITY_THRESHOLD = 500;
    const DRAG_BUFFER = 0;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div onMouseEnter={() => pauseOnHover && setIsHovered(true)} onMouseLeave={() => pauseOnHover && setIsHovered(false)} className="relative overflow-hidden p-4 rounded-[24px] border border-[#222]" style={{ width: `${baseWidth}px` }}>
      <motion.div
        className="flex"
        drag="x"
        onDragEnd={handleDragEnd}
        style={{ width: itemWidth, gap: `${GAP}px`, perspective: 1000, perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`, x }}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
          const outputRange = [90, 0, -90];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });

          return (
            <motion.div key={index} className="relative shrink-0 flex flex-col items-start justify-between bg-[#222] border border-[#222] rounded-[12px] overflow-hidden cursor-grab active:cursor-grabbing" style={{ width: itemWidth, height: 260, rotateY }}>
              <div className="mb-4 p-5">
                <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#111] mb-4">{item.icon}</span>
                <div className="mb-1 font-black text-lg text-white">{item.title}</div>
                <p className="text-sm text-white">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="flex w-full justify-center">
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${currentIndex % items.length === index ? "bg-[#333333]" : "bg-[rgba(51,51,51,0.4)]"}`}
              animate={{ scale: currentIndex % items.length === index ? 1.2 : 1 }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
/* -------------------------------------------
   Vertical Carousel for "What We Build" Section
-------------------------------------------- */
const VerticalShadCarousel = ({ items }: { items: WhatWeBuildItem[] }) => {
  return (
    <div className="w-full py-6">
      <ShadCarousel
        orientation="vertical"
        className="w-full max-w-xl mx-auto"
      >
        <CarouselContent className="flex flex-col gap-6">
          {items.map((item, idx) => (
            <CarouselItem key={idx}>
              <div className="bg-white p-8 shadow-md rounded-2xl border border-neutral-100">
                <h3 className="text-2xl font-semibold text-black">
                  {item.title}
                </h3>
                <p className="text-neutral-600 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <div className="flex flex-col items-center gap-3 mt-6">
          <CarouselPrevious className="rotate-90" />
          <CarouselNext className="-rotate-90" />
        </div> */}
      </ShadCarousel>
    </div>
  );
};




/* ----------------------------- 3) Mobile fallback for WhatWeBuild: Horizontal swipe carousel ----------------------------- */
/* Option M2: medium cards - ~250px wide */
const MobileWhatWeBuildCarousel = ({ items }: { items: WhatWeBuildItem[] }) => {
  return (
    <div className="overflow-x-auto px-4 py-4">
      <div className="flex gap-4" style={{ paddingBottom: 8 }}>
        {items.map((it, idx) => (
          <div key={idx} className="min-w-[250px] max-w-[250px] bg-white rounded-2xl shadow p-5">
            <h4 className="text-lg font-semibold">{it.title}</h4>
            <p className="text-sm text-neutral-600 mt-2">{it.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ----------------------------- 4) Vertical Timeline ----------------------------- */
const VerticalTimeline = ({ heading, description, steps }: { heading: string; description: string; steps: ProcessStep[] }) => {
  return (
    <section className="py-16 px-6 md:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-black">{heading}</h2>
        <p className="text-neutral-600 mb-8">{description}</p>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-neutral-200 rounded" />
          <div className="ml-12 space-y-8">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                <div className="absolute left-[-36px] top-2 w-8 h-8 rounded-full flex items-center justify-center bg-black text-white font-bold">
                  {s.step}
                </div>
                <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-black">{s.title}</h3>
                  <p className="text-neutral-600 mt-2">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------- 5) Side-by-side Reveal for Benefits ----------------------------- */
const SideBySideReveal = ({ heading, description, cards }: { heading: string; description: string; cards: BenefitCard[] }) => {
  const refs = useRef<Array<HTMLElement | null>>([]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("translate-y-0", "opacity-100");
              entry.target.classList.remove("translate-y-6", "opacity-0");
            }
          });
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);
  return (
    <section className="py-16 px-6 md:px-24 bg-[linear-gradient(180deg,#f8fff8_0%,#ffffff_100%)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-black">{heading}</h2>
        <p className="text-neutral-600 mb-8">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((c, idx) => (
            <div
              key={idx}
              ref={(el) => {
                refs.current[idx] = el;
              }}
              className="transform transition-all duration-700 translate-y-6 opacity-0"
            >
              {" "}
              <div className="p-8 rounded-2xl shadow-md bg-white h-full">
                <h3 className="text-xl font-semibold text-black">{c.title}</h3>
                <p className="text-neutral-600 mt-3">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


/* ----------------------------- MAIN PAGE ----------------------------- */

export default function ServiceDetails() {
  const { serviceid } = useParams();
  const router = useRouter();
  const industry = industriesData.find((d) => d.slug === serviceid);

  const isMobile = useIsMobile(768);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-neutral-600">404 | Page Not Found</h1>
      </div>
    );
  }

  // whyChoose split
  const whyLeft = industry.whyChoose.slice(0, 2);
  const whyRight = industry.whyChoose.slice(2, 4);

  // products carousel scroll ref
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <div className="relative min-h-screen">
      {/* Fixed background gradient */}
      <div className="fixed inset-0 bg-gradient-to-bl from-[#ffffff] via-[#fdfffa] to-[#f2fde4] -z-10" />
      
      {/* Content */}
      <div className="relative z-0">
      <Navbar />

      {/* Header */}
      <section className="py-20 px-6 md:px-24 grid md:grid-cols-2 ml-17 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
            {industry.title}
          </h1>
          <p className="text-neutral-700 mt-6 text-lg">{industry.desc}</p>
          <button
            onClick={() => router.push("/Contact")}
            className="mt-10 bg-black text-white px-7 py-3 rounded-lg hover:bg-neutral-900"
          >
            Request a Quote
          </button>
          <div className="mt-10 flex gap-10 text-center">
            {industry.stats.map((item) => (
              <div key={item.label}>
                <h3 className="text-black text-3xl font-semibold">
                  {item.value}
                </h3>
                <p className="text-neutral-900 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={industry.banner}
          width={360}
          height={360}
          alt={industry.title}
          className="rounded-xl shadow-xl object-cover"
        />
      </section>

      {/* Why Choose */}
      <section className="w-full py-16 ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-black">
            Why Choose {industry.title}?
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-12">
            Discover powerful solutions designed to elevate your business
            operations and drive results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="space-y-10 text-left">
              {whyLeft.map((item, index) => (
                <div key={index}>
                  <h3 className="text-black text-lg font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-neutral-500 text-sm mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute w-56 h-48 bg-[#99f39d] rounded-full bottom-0" />
                <Image
                  src="/product.png"
                  alt="feature"
                  width={200}
                  height={300}
                  className="relative z-10 object-contain"
                />
              </div>
            </div>
            <div className="space-y-10 text-left">
              {whyRight.map((item, index) => (
                <div key={index}>
                  <h3 className="text-black text-lg font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-neutral-500 text-sm mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Top Products */}
      <section className="py-26 px-6 md:px-24 ">
        <h2 className="text-3xl font-bold text-center mb-4 text-black">
          Discover the Best Solutions
        </h2>
        <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-12">
          Explore premium software solutions crafted to bring automation,
          efficiency and intelligent workflows.
        </p>
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          {industry.topProducts.map((p, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[1fr_1fr] gap-4 items-center"
            >
              <div
                className={`flex ${
                  i % 2 === 0 ? "order-1" : "order-2"
                } justify-start ml-14`}
              >
                <div className="relative w-64 h-56 flex items-center justify-center">
                  <div className="absolute w-94 h-62 bg-[#91f096] rounded-2xl" />
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={200}
                    height={200}
                    className="relative z-10 object-contain"
                  />
                </div>
              </div>
              <div
                className={`${i % 2 === 0 ? "order-2" : "order-1"} text-left`}
              >
                <h3 className="text-2xl font-semibold text-black">{p.title}</h3>
                <p className="text-neutral-600 mt-2 text-sm">{p.desc}</p>
                <ul className="text-neutral-700 text-sm mt-3 space-y-1">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-black rounded-full mt-1"></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-3">
                  <button className="bg-black text-white px-6 py-2 rounded-full text-sm">
                    Shop Now
                  </button>
                  <p className="text-lg font-semibold text-black">{p.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products horizontal scroll */}
      <section className="py-16 px-6 md:px-24 ">
        <h2 className="text-3xl font-bold text-center text-black">
          Our Products
        </h2>
        <p className="text-neutral-600 text-center max-w-xl mx-auto mt-2 mb-10">
          Discover tools designed for performance, automation and innovation.
        </p>
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 text-black hover:bg-[#91f096]"
          >
            ◀
          </button>
          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto px-6 scrollbar-hide scroll-smooth"
          >
            {industry.products.map((prod, i) => (
              <div
                key={i}
                className="min-w-[260px] max-w-[260px] mx-auto flex-shrink-0"
              >
                <div className="relative bg-[#99f39d] w-full h-48 rounded-2xl flex items-center justify-center">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    width={110}
                    height={110}
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-black">
                  {prod.name}
                </h3>
                <div className="flex justify-between items-center mt-3">
                  <button className="bg-black text-white px-4 py-1 rounded-full text-sm">
                    Buy Now
                  </button>
                  <p className="font-semibold text-black">{prod.price}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 text-black hover:bg-[#91f096]"
          >
            ▶
          </button>
        </div>
      </section>

      {/* ------------------ NEW JSON SECTIONS ------------------ */}

      {/* 1) Industries We Serve - Carousel */}
      {industry.industriesWeServe && (
        <section className="py-16 px-6 md:px-24 ">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-2 text-black">
              {industry.industriesWeServe.heading}
            </h2>
            <p className="text-neutral-700 mb-8 max-w-2xl text-center">
              {industry.industriesWeServe.description}
            </p>
            <div className="w-full flex justify-center">
              <div className="hidden md:block">
                <Carousel
                  cards={industry.industriesWeServe.cards}
                  baseWidth={920}
                  autoplay={false}
                  pauseOnHover
                  loop={false}
                />
              </div>
              <div className="md:hidden grid gap-6 w-full px-4">
                {industry.industriesWeServe.cards.map((c, i) => (
                  <div
                    key={i}
                    className="bg-neutral-200 p-6 rounded-2xl text-white"
                  >
                    <h3 className="text-xl font-semibold">{c.title}iofhsfoh</h3>
                    <p className="text-neutral-300 mt-2">{c.description}</p>
                    {c.cta && (
                      <p className="mt-3 text-sm text-[#9ae6b4]">{c.cta}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2) What We Build - ScrollStack on desktop, horizontal swipe on mobile */}
      {industry.whatWeBuild && (
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-2 text-black">
              {industry.whatWeBuild.heading}
            </h2>
            <p className="text-neutral-600 mb-8">
              {industry.whatWeBuild.description}
            </p>

            {isMobile ? (
              /* mobile horizontal swipe M2 - 250px cards */
              <MobileWhatWeBuildCarousel items={industry.whatWeBuild.items} />
            ) : (
              /* desktop - ScrollStack */
              <VerticalShadCarousel items={industry.whatWeBuild.items} />
            )}
          </div>
        </section>
      )}

      {/* 3) Development Process - Vertical Timeline */}
      {industry.developmentProcess && (
        <VerticalTimeline
          heading={industry.developmentProcess.heading}
          description={industry.developmentProcess.description}
          steps={industry.developmentProcess.steps}
        />
      )}

      {/* 4) Benefits - Side-by-side reveal */}
      {industry.benefits && (
        <SideBySideReveal
          heading={industry.benefits.heading}
          description={industry.benefits.description}
          cards={industry.benefits.cards}
        />
      )}

      <TestimonialsSection />
      <FAQ />
      <Footer />
    </div>
    </div>
  );
}
