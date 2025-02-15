import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroPage = () => {
  return (
    <>
      <div className="mt-1 pt-10 rw-full ">
        <div className="mb-3 inline-block p-[2px] rounded-full">
          <h1 className="text-white bg-zinc-800 rounded-full px-6 py-2 font-jetbrainmono tracking-tight">
            Reimagine the design and experience the better at
          </h1>
        </div>
        <div className="inline-block font-lobster tracking-widest mt-7 text-center">
          <h2 className="text-white flex flex-wrap items-center  text-center text-[6vw] md:leading-[100px]">
            Vibrant{" "}
            <span className="mx-3 inline-flex items-center">
              <div className="relative h-[50px] w-[130px] inline-flex">
                <Image
                  className="rounded-full"
                  src="/1.png"
                  alt="one"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </span>{" "}
            Visions,Magnetic{" "}
            <span className="mx-3 inline-flex items-center">
              <div className="relative h-[50px] w-[130px] inline-flex">
                <Image
                  className="rounded-full object-center"
                  src="/3.png"
                  alt="one"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </span>{" "}
            Makeovers:All Perfected{" "}
            <span className="mx-3 inline-flex items-center">
              <div className="relative h-[50px] w-[130px] inline-flex">
                <Image
                  src={`/2.png`}
                  className="rounded-full object-top"
                  alt="one"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </span>{" "}
            Pixel
          </h2>
        </div>
        <div className="flex md:my-5 font-jetbrainmono tracking-tighter">
          <div className="md:max-w-[50vw] flex items-center justify-center">
            <p className="text-white text-xl leading-relaxed ">
              Elevate your brand with{" "}
              <span className="text-white font-bold">BoringDesigner</span>—a subscription delivering high-quality, custom web designs fast.Enjoy a seamless design experience,and keep your business ahead of the curve.
            </p>
          </div>
        </div>
        <div className="md:mt-10 flex md:gap-[20px] items-center tracking-tighter">
          <div className="text-sm tracking-widest text-white">
            <p>Open Source License</p>
          </div>
          <Link href={`#`}>
            <p
              className="relative overflow-hidden border-2 border-white text-white md:max-w-[15vw] w-full px-3 py-2 rounded-full inline-flex items-center justify-center mx-auto text-md shadow-2xl transition-all  
    before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] before:duration-500  
    after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] after:duration-500  
    hover:text-white hover:shadow-[#833ab4] hover:before:h-2/4 hover:after:h-2/4"
            >
              <span className="relative z-10 tracking-wide text-white">Get Started</span>
              <span className="ml-2 relative z-10">
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
                  className="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              </span>
            </p>
          </Link>

          <div className="text-sm tracking-widest text-[#CDCDCD]">
            <p className="text-white">It's free and</p>
            <p className="text-blue-600">open Source</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
