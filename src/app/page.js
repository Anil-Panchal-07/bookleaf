import Image from "next/image";
import HeroSection from "./home/Herosection";
import Navbar from "@/_components/layouts/Navbar";
import WhyBookLeaf from "./home/WhyBookLeaf";

export default function Home() {
  return (
    <div className="">
     
    <HeroSection/>
    <WhyBookLeaf/>
    </div>
  );
}
