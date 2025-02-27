import Image from "next/image";
import React from "react";
import Menu from "./menu/menu";

const Hero = () => {
  return (
    <>
      <div className="hero relative w-full h-auto max-w-full flex flex-col items-center justify-start flex-nowrap overflow-hidden px-10">
        <div className="hero-container relative w-full h-auto flex flex-col items-center justify-center flex-nowrap pt-[10px]  overflow-visible">
          <div className="hero-text relative w-full h-auto flex flex-col items-center justify-center flex-nowrap gap-[8px] overflow-hidden">
            <h1 className="w-full h-auto overflow-hidden font-extrabold text-white text-[9vw]  tracking-tighter leading-[80%] text-center uppercase pb-2 font-jetbrainmono">
              BORINGDESIGNER
            </h1>
          </div>
        </div>
        <div className="image relative w-full flex flex-col items-center justify-center gap-6 sm:px-0 border-t-2 border-b-2 border-dashed border-[#c0bfbfdf] py-7">
          <Image
            src={`/hero-bg.webp`}
            alt="hero image"
            className="w-full max-w-[1800px] h-auto object-cover object-top"
            width={1300}
            height={900}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
