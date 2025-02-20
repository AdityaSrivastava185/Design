"use client"
import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Note from "./components/note";
import Experience from "./components/experience";
import Pricing from "./components/pricing";
import Footer from "./components/footer";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Note />
        <Experience />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}
