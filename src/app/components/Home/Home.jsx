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
      </div>
    </>
  );
};

export default Hero;
