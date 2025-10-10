import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero_Section";
import InvestorsSection from "./Components/Investors";
import AboutUs from "./Components/AboutUS";
import ServiceSection from "./Components/Service";
import RecentWork from "./Component/RecentWork";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <InvestorsSection/>
      <AboutUs/>
      <ServiceSection/>
      <RecentWork/>
    </div>
  );
}
