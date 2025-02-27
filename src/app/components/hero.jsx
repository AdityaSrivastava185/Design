import Image from "next/image";
import React from "react";
import Menu from "./menu/menu";

const Hero = () => {
  return (
    <>
      <div className="hero relative w-full h-auto max-w-[1480px] flex flex-col items-center justify-start flex-nowrap overflow-hidden">
        <div className="hero-container relative w-full h-auto flex flex-col items-center justify-center flex-nowrap pt-[10px] pb-[50px] overflow-visible">
          <div className="hero-text relative w-full h-auto flex flex-col items-center justify-center flex-nowrap gap-[8px] px-[10px] overflow-hidden">
            <h1 className="w-full h-auto overflow-hidden font-extrabold text-white text-[11vw]  tracking-tighter leading-[80%] text-center uppercase pb-2 font-jetbrainmono">
              BORINGDESIGNER
            </h1>
          </div>
        </div>
        <div className="image relative w-full h-auto flex flex-col items-center justify-center flex-nowrap gap-[24px] overflow-visible px-[30px] sm:px-0">
          <Image
            src={`/hero-bg.webp`}
            height={700}
            width={700}
            alt="hero image"
            className="relative w-full h-auto overflow-hidden rounded-[53px] object-cover object-top sm:w-[759px] sm:h-[423px] md:w-[1153px] md:h-[882px] lg:w-[1372px] lg:h-[882px]"
          />
        </div>
      </div>
      
    </>
  );
};

export default Hero;
