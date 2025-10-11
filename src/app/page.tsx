import Image from "next/image";
import TestimonialsSection from "./Components/Testimonials";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero_Section";
import InvestorsSection from "./Components/Investors";
import AboutUs from "./Components/AboutUS";
import ServiceSection from "./Components/Service";
import RecentWork from "./Components/RecentWork";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <InvestorsSection/>
      <AboutUs/>
      <ServiceSection/>
      <RecentWork/>
      <TestimonialsSection/>
    </div>
  );
}
