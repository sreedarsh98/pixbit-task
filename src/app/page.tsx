import Navbar from "@/components/Navbar";
import CreateAccount from "@/components/sections/CreateAccount";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import ImageSections from "@/components/sections/ImageSections";
import PromptverseSection from "@/components/sections/PromptverseSection";
import ScrollCards from "@/components/sections/ScrollCards";
import TrendingPromt from "@/components/sections/TrendingPromt";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <PromptverseSection/>
    <TrendingPromt/>
    <ImageSections/>
    <ScrollCards/>
    <Features/>
    <CreateAccount/>
    </>
  );
}
