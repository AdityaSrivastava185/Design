import Image from "next/image";
import React from "react";
import Menu from "./menu/menu";

const Hero = () => {
  return (
    <>
      {/* <div className="hero relative w-full h-auto max-w-[1480px] flex flex-col items-center justify-start flex-nowrap overflow-hidden">
        <div className="hero-container relative w-full h-auto flex flex-col items-center justify-center flex-nowrap pt-[10px] pb-[50px] overflow-visible">
          <div className="hero-text relative w-full h-auto flex flex-col items-center justify-center flex-nowrap gap-[8px] px-[10px] overflow-hidden">
            <h1 className="w-full h-auto overflow-hidden font-extrabold text-white text-[11vw]  tracking-tighter leading-[80%] text-center uppercase pb-2 font-jetbrainmono ">
              BORINGDESIGNER
            </h1>
          </div>
          https://cdn.dribbble.com/userupload/8462058/file/original-c495113c4a944fefaf60582d8df0fe6a.png?resize=1504x1128&vertical=center
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
      </div> */}
      <div>
        <div className="hero-container relative w-full h-auto flex flex-col items-center justify-center flex-nowrap pt-[10px] overflow-visible">
          <div className="hero-text relative w-full h-auto flex flex-col items-center justify-center flex-nowrap gap-[8px] px-[10px] overflow-hidden">
            <h1 className="w-full h-auto overflow-hidden font-extrabold text-[#E2E2DF] text-[11vw]  tracking-tighter leading-[80%] text-center uppercase pb-2 font-jetbrainmono ">
              BORINGDESIGNER
            </h1>
          </div>
        </div>
        <div className="bg-[#121212] min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 md:gap-[2vw]">
          <div className="max-w-lg text-center md:text-left text-[#E2E2DF] space-y-6 md:mt-[-40vh]">
            <h1 className="text-5xl font-bold md:font-normal md:text-6xl lg:text-[3vw] leading-tight tracking-tighter font-jetbrainmono">
              The intelligent <br /> terminal.
            </h1>
            <p className="text-[#A8A8A6] text-lg md:text-xl ">
              Become a command line power user on day one. Warp combines AI and
              your dev team’s knowledge in one fast, intuitive terminal.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-md text-lg font-semibold flex items-center justify-center w-full md:w-auto space-x-2 shadow-lg hover:bg-gray-200">
              <span>Explore Subscriptions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 12h16m-6 6l6-6m-6-6l6 6"
                />
              </svg>
            </button>
          </div>

          <div className="mt-10 md:mb-56 md:mt-0">
            <Image
              src={`/hero-bg.webp`}
              height={700}
              width={700}
              alt="hero image"
              className="relative w-full h-auto overflow-hidden rounded-[53px] object-cover object-top sm:w-[759px] sm:h-[423px] md:w-[1153px] md:h-[882px] lg:w-[1000px] lg:h-[450px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
