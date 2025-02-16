import AwardsSlider from "@/components/Awards";
import Banner from "@/components/Banner";
import FunFact from "@/components/FunFact";
import MovingText from "@/components/MovingText";
import PortfolioSlider from "@/components/Projects";
import ServicesSection from "@/components/Services";
import TeamSection from "@/components/Team";
import TestimonialSlider from "@/components/TestimonialSlider";
import VideoSection from "@/components/VideoPage";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    
    <Banner/>
    <FunFact/>
    <ServicesSection/>
    <PortfolioSlider/>
    <AwardsSlider/>
    <VideoSection/>
    <TeamSection/>
    <TestimonialSlider/>
    <MovingText/>
    </div>
  );
}
