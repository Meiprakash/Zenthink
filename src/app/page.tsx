import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero_Section";
import InvestorsSection from "./Components/Investors";
import AboutUs from "./Components/AboutUS";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <InvestorsSection/>
      <AboutUs/>
    </div>
  );
}
