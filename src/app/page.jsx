import About from "@/components/About";
import Banner from "@/components/Banner";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Pricing></Pricing>
    </div>
  );
}
