"use client";
import React, { useEffect } from "react";
// import Navbar from "./components/navbar";
import Menu from "./components/menu/menu";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Note from "./components/note";
import Experience from "./components/experience";
import Pricing from "./components/pricing";
import Footer from "./components/footer";
import Lenis from "lenis";
import TechStack from "./components/tech";

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

        <Menu />
        <Hero />
        <About />
        <Services />
        <Note />
        <Experience />
        <Pricing />
        <TechStack />
        <Footer />
      </div>
    </>
  );
}
