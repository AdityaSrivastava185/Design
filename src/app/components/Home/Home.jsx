import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import HeroPage from "./Hero";

const Hero = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <HeroPage />
        <div className="relative overflow-hidden bg-transparent text-white">
      {/* Marquee container */}
      <div className="flex py-12 animate-marquee whitespace-nowrap">
        <span className="text-4xl mx-4">Marquee Item 1</span>
        <span className="text-4xl mx-4">Marquee Item 2</span>
        <span className="text-4xl mx-4">Marquee Item 3</span>
        <span className="text-4xl mx-4">Marquee Item 4</span>
        <span className="text-4xl mx-4">Marquee Item 5</span>
      </div>
      <div className="absolute top-0 flex py-12 animate-marquee2 whitespace-nowrap">
        <span className="text-4xl mx-4">Marquee Item 1</span>
        <span className="text-4xl mx-4">Marquee Item 2</span>
        <span className="text-4xl mx-4">Marquee Item 3</span>
        <span className="text-4xl mx-4">Marquee Item 4</span>
        <span className="text-4xl mx-4">Marquee Item 5</span>
      </div>
    </div>
      </div>
    </>
  );
};

export default Hero;
