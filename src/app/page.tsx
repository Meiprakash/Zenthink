import Hero from "./Components/Hero_Section";
import InvestorsSection from "./Components/Investors";
import Navbar from "./Components/Navbar/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <InvestorsSection/>
    </div>
  );
}
