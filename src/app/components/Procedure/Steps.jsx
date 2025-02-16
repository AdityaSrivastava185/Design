import React from "react";
import Image from "next/image";

const Steps = () => {
  return (
    <>
      <div className="md:px-12 text-left text-[#ffffff] pt-12 text-[5.6rem] font-meri leading-relaxed tracking-wide max-w-[111rem]">
        <h2 className="text-[2rem] font-bold">
          <p>
            BoringDesigner is a cutting-edge design agency for ambitious brands
            that want to stand out, captivate their audience, and transform
            their digital presence. Whether you need stunning web designs,
            immersive experiences, or a fresh creative direction, we bring your
            vision to life with precision and style.
          </p>
        </h2>
        <hr className="border-t border-white opacity-50 mt-10" />
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-start justify-between p-6 space-y-6 md:space-y-0 md:space-x-8 mt-10">
        {/* Left Section */}
        <div className="w-full md:w-1/3">
          <p className="text-white text-lg font-semibold">
            What you can expect:
          </p>
        </div>

        {/* Middle Section */}
        <div className="w-2/5 md:w-1/3">
          <p className="text-white text-base leading-relaxed">
            We collaborate with brands and innovators who shape the future—those
            redefining digital experiences, crafting seamless user journeys,
            building next-gen tech, and setting new creative standards.
          </p>
          <br />
          <br />
          <p className="text-white text-base leading-relaxed">
            We believe that the perfect blend of design, strategy, and a touch
            of passion turns ideas into experiences that are bold, impactful,
            and unforgettable.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/6 text-center md:text-left flex flex-col items-center">
          <p className="text-white text-lg font-semibold">Socials:</p>
          <p className="text-white hover:underline cursor-pointer">LinkedIn</p>
          <p className="text-white hover:underline cursor-pointer">X</p>
        </div>
      </div>
    </>
  );
};

export default Steps;
