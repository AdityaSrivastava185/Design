import React from "react";

const Navbar = () => {
  return (
    <div className="text-white relative w-[1fr] h-[118px]  m-2 flex flex-col justify-center items-start flex-nowrap gap-[33px] py-[34px] overflow-hidden lg:w-[1440px] lg:h-auto  lg:flex lg:flex-col lg:items-start lg:justify-center lg:gap-[33px]  ">
      <div className="relative w-full h-[50px] flex flex-row justify-between items-center flex-nowrap px-[20px] overflow-hidden lg:w-full lg:h-[50px] lg:flex lg:flex-row lg:items-center lg:justify-between lg:px-[30px]">
        <div className="relative w-auto ">
          <p className="text-[#757575] font-bold">BORINGDESIGNER/</p>
        </div>
        <div className="relative h-[1fr] flex flex-col items-center justify-between flex-nowrap gap-[10px] text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="white"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-grip"
          >
            <circle cx="12" cy="5" r="1" />
            <circle cx="19" cy="5" r="1" />
            <circle cx="5" cy="5" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
            <circle cx="19" cy="19" r="1" />
            <circle cx="5" cy="19" r="1" />
          </svg>
        </div>
        <div className="hidden sm:flex sm:flex-row sm:items-center sm:justify-center flex-nowrap sm:w-[168px] sm:h-[36px]">
           <div className="absolute overflow-hidden border-2 border-white rounded-full  sm:px-[14px] sm:py-[10px] ">
            <p className="relative w-auto z-3 font-semobold">Explore Memebership</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
