import TestimonialsSection from "./components/Testimonials";
import Hero from "./components/Hero_Section";
import InvestorsSection from "./components/Investors";
import AboutUs from "./components/AboutUS";
import ServiceSection from "./components/Service";
// import RecentWork from "./components/RecentWork";
import FAQ from "./components/FaqSection";
import BlogSection from "./components/Blog";
import ConnectSection from "./components/ConnectUs";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed background gradient */}
      <div className="fixed inset-0 bg-gradient-to-bl from-[#ffffff] via-[#ffffff] to-[#f2fde4] -z-10" />
      
      {/* Content */}
      <div className="relative z-0">
        <Navbar />
        <Hero />
        <InvestorsSection />
        <AboutUs />
        <ServiceSection />
        {/* <RecentWork /> */}
        <TestimonialsSection />
        <FAQ />
        <BlogSection />
        <ConnectSection />
        <Footer />
      </div>
    </div>
  );
}