import React from "react";

const Pricing = () => {
  return (
    <div className="min-h-screen mt-[50vh] md:mt-[0vh] md:mb-[20vh] px-[30px] lg:mt-[50vh]">
      <div className=" mt-[4vh] sm:mt-4 sm:mb-1 px-[4vw] md:px-[2vw]">
        <hr className="border border-zinc-700" />
      </div>
      <div className="services md:px-[2vw]">
        <div className="flex flex-row items-center justify-between gap-2 text-center">
          <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            05
          </p>
          <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            //pricing
          </p>
          <p className="text-zinc-400 uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            explore best plans
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-20 md:items-center md:justify-between md:gap-[13vw]">
          <div className="mb-[1vh] mt-[10vh] sm:my-[0vh]">
            <p className="font-bold text-white md:text-[7vw] md:tracking-tighter text-[12vw] font-jetbrainmono tracking-tighter uppercase">
              pricing
            </p>
          </div>
          <div className="h-auto max-w-[50vw] mb-20 sm:max-w-[60vw] md:max-w-[25vw]">
          <div className="flex h-auto w-full flex-col items-end justify-end">
            <p className="font-semibold text-white uppercase text-[5vw] sm:text-[3vw] md:text-[16px] lg:text-lg leading-5 tracking-tighter font-jetbrainmono">
              big or small,we have plans for everyone
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
