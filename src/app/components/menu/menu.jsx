"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import "./menu.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const menuOptions = [
  { path: "#", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#approach", label: "Approach" },
  { path: "#experience", label: "Experience" },
  { path: "#services", label: "Services" },
  { path: "#pricing", label: "Pricing" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useGSAP(() => {
    gsap.set(".menu-overlay", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      display: "none", // Ensure it's hidden initially
    });

    gsap.set(".menu-link-item-holder", { y: 75, opacity: 0 });

    tl.current = gsap
      .timeline({ paused: true })
      .set(".menu-overlay", { display: "flex" }) // Ensure visibility before animation
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(
        ".menu-link-item-holder",
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
        },
        "-=0.75"
      );
  });

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse().then(() => {
        gsap.set(".menu-overlay", { display: "none" }); // Hide after reverse animation
      });
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container text-white mb-[15vh] md:mb-[17vh] relative" ref={container}>
      <div className="menu-bar fixed bg-[#1D1D1D] px-14 rounded-2xl">
        <div className="menu-logo text-white font-jetbrainmono">
          <Link href="/">BORINGDESIGNER/</Link>
        </div>
        <div className="menu-open font-jetbrainmono" onClick={toggleMenu}>
          <p className="text-white">Menu</p>
        </div>
      </div>
      <div className="menu-overlay md:gap-[100px] gap-[20px]">
        <div className="menu-overlay-bar md:flex md:flex-row md:items-center md:justify-between w-full">
          {/* <div className="menu-logo">
            <Link href="/">BoringDesigner</Link>
          </div> */}
          <div className="menu-close font-jetbrainmono" onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>
        {/* <div className="menu-close-icon">
          <p>&#x2715;</p>
        </div> */}
        <div className="menu-copy">
          <div className="menu-links">
            {menuOptions.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder " onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link tracking-tighter">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info md:mt-[12vh] font-jetbrainmono mt-[5vh]">
            <div className="menu-info-col">
              <a href="#">Twitter(X)</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
