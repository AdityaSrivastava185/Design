import React from "react";

export default function Footer() {
  return (
    <div className="min-h-screen flex flex-col justify-between px-4 md:px-[2vw] lg:mt-7">
      <div className="sm:mt-4 sm:mb-1 mt-[100px] md:mt-[0px]">
        <hr className="border-1 border-zinc-700" />
      </div>

      {/* Intro Section */}
      <div className="text-white flex flex-col items-center text-center mt-20">
        <div className="mt-6 md:mt-15 lg:mt-24 md:max-w-[50vw]">
          <h2 className="text-3xl sm:text-xl md:text-[2vw] font-extrabold md:tracking-tighter md:leading-7 xl:leading-10 font-jetbrainmono tracking-tighter leading-6 appearonscroll">
            BASED IN INDIA, I AM AN INNOVATIVE DESIGNER AND DIGITAL ARTIST. MY
            PASSION FOR MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY, AND INTUITIVE
            DESIGN IS EVIDENT IN MY WORK.
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-20 md:items-center md:justify-between md:gap-[13vw] lg:px-[30px]">
        <div className="mb-[3vh] sm:my-[0vh]">
          <p className="font-bold text-white md:text-[7vw] md:tracking-tighter text-[12vw] font-jetbrainmono tracking-tighter uppercase appearonscroll">
            Linkedin
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-[-9vh] md:items-center md:justify-between md:gap-[13vw] lg:px-[30px]">
        <div className=" mb-10 sm:my-[0vh]">
          <p className="font-bold text-white md:text-[7vw] md:tracking-tighter text-[12vw] font-jetbrainmono tracking-tighter uppercase appearonscroll">
            twitter
          </p>
        </div>
      </div>

      {/* Main Branding */}
      <div className="w-full h-auto flex flex-col items-center md:mt-10">
        <h1 className="text-white text-[10vw] sm:text-[10vw] font-bold uppercase text-center md:leading-20 ">
          boringdesigner.
        </h1>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full text-white sm:px-10 pb-6 sm:pb-2">
        <p className="text-center sm:text-left text-sm sm:text-base">
          © All Rights Reserved to BoringDesigner
        </p>
      </div>
    </div>
  );
}
