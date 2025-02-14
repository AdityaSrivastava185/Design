import Link from "next/link";
import React from "react";

const HeroPage = () => {
  return (
    <>
      <div className="text-center mt-10 w-full">
        <h1 className="text-white bg-zinc-800 my-5 border-white rounded-full px-6 py-2 inline-block">
          Reimagine the design and experience the better at
        </h1>
        <div className="text-center">
          <h2 className="text-[4vw] font-bold text-white">
            Vibrant Visions, Magnetic Makeovers
          </h2>
        </div>
        <div className={`flex items-center justify-center md:my-5`}>
          <div className={`md:max-w-[50vw] flex items-center justify-center`}>
            <p className={`text-[#CDCDCD] text-xl leading-relaxed`}>
              Elevate your brand with{" "}
              <span className={`text-white font-bold`}>BoringDesigner</span> —a
              subscription service delivering high-quality, custom web designs
              fast. Enjoy a seamless design experience,and keep your business
              ahead of the curve.
            </p>
          </div>
        </div>
        <div className="text-center md:mt-10">
          <Link href={`#`}>
            <p className="bg-white md:max-w-[15vw] w-full px-3 py-2 rounded-xl inline-flex items-center justify-center mx-auto text-md">
              Get Started
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-right "
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              </span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
