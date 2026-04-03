import About from "@/components/About";
import Banner from "@/components/Banner";
import GettingStarted from "@/components/GettingStarted";
import Pricing from "@/components/Pricing";
import Review from "@/components/Review";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import WhyChooseUS from "@/components/WhyChooseUS";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Pricing></Pricing>
      <Tools></Tools>
      <GettingStarted></GettingStarted>
      <WhyChooseUS></WhyChooseUS>
      <Review></Review>
    </div>
  );
}
