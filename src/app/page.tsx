import TestimonialsSection from "./Components1/Testimonials";
import Navbar from "./Components1/Navbar/Navbar";
import Hero from "./Components1/Hero_Section";
import InvestorsSection from "./Components1/Investors";
import AboutUs from "./Components1/AboutUS";
import ServiceSection from "./Components1/Service";
import RecentWork from "./Components1/RecentWork";
import FAQ from "./Components1/FaqSection";
import BlogSection from "./Components1/Blog";
import ConnectSection from "./Components1/ConnectUs";
import Footer from "./Components1/Footer";

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
        <RecentWork />
        <TestimonialsSection />
        <FAQ />
        <BlogSection />
        <ConnectSection />
        <Footer />
      </div>
    </div>
  );
}