import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroPage = () => {
  return (
    <>
      <div className="mt-1 pt-3 lg:pt-10 w-full ">
        <div className="flex items-center w-full">
          <h1 className="text-white text-[2.3rem] md:text-[2rem] lg:text-[4rem] font-extrabold font-lobster tracking-tighter">
            welcome to
          </h1>
          <span className="ml-3 inline-flex items-center">
            <div className="relative  lg:h-[40px] w-[66vw] inline-flex rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"></div>
          </span>
        </div>
        <div className="flex flex-col w-full font-extrabold pb-[10vh]">
          <div className="inline-block font-lobster font-extrabold tracking-widest max-w-[100vw] w-full">
            <h2 className="text-white flex flex-wrap text-[2.8rem] lg:text-[6rem] md:text-[4rem] leading-tight">
              Boring Space{" "}
              <span className="mx-3 inline-flex items-center">
                <div className="relative h-[40px] w-[100px] md:h-[50px] md:w-[130px] inline-flex">
                  <Image
                    className="rounded-full"
                    src="/1.png"
                    alt="one"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </span>{" "}
              where underestimation{" "}
              <span className="mx-3 inline-flex items-center">
                <div className="relative  h-[40px] w-[100px] md:h-[50px] md:w-[130px] inline-flex">
                  <Image
                    className="rounded-full object-center"
                    src="/3.png"
                    alt="one"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </span>{" "}
              unleashes{" "}
              <span className="mx-3 inline-flex items-center">
                <div className="relative  h-[40px] w-[100px] md:h-[50px] md:w-[130px] inline-flex">
                  <Image
                    src="/2.png"
                    className="rounded-full object-top"
                    alt="one"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </span>{" "}
              brilliance
            </h2>
          </div>
        </div>
        <hr className="hidden md:block border-t-2 border-white md:mt-[10vh] md:mb-[3vh] my-6" />
        <div className="text-white font-jetbrainmono flex flex-col gap-[1rem] md:flex-row md:items-center md:justify-between">
          <Link href="/companies">
            <p className="cursor-pointer underline">
              For Companies, <br /> Individuals and <br /> Startups
            </p>
          </Link>
          <Link href="/designing-development">
            <p className="cursor-pointer hover:underline">
              From Designing <br /> and Developement
            </p>
          </Link>
          <Link href="/start-project">
            <p className="cursor-pointer hover:underline">Start Project</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
