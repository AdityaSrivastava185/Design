import React from "react";

export const Service = () => {
  return (
    <>
      <div className="md:px-12 text-left text-[#ffffff] h-screen max-w-[111rem]">
        <div>
          <h1 className="text-white text-[4rem] font-extrabold font-jetbrainmono tracking-tighter">
            Services
          </h1>
        </div>
        <hr className="border-t border-white opacity-50 mt-7" />
        <div>
          <p className="text-[3vw]">
            We craft visually stunning and strategically designed experiences
            that captivate, engage, and drive meaningful action.Experiences that
            elevate your brand to new heights.
          </p>
        </div>
        <hr className="border-t border-white opacity-50 mt-7" />
        <div className="flex flex-col md:flex-row items-start md:items-start justify-between p-6 space-y-6 md:space-y-0 md:space-x-8 mt-7">
          <div className="w-full md:w-1/3">
            <p className="text-white text-lg font-semibold">
              What you can expect:
            </p>
          </div>

          {/* Middle Section */}
          <div className="w-2/5 md:w-1/3">
            <p className="text-white text-base leading-relaxed">
              We don’t just design; we craft digital experiences that leave an
              impact. From <span className="underline">Web Design</span> that
              captivates at first glance to{" "}
              <span className="underline">Frontend Development</span> that
              ensures seamless interactions, we bring visions to life.
            </p>
            <br />
            <p className="text-white text-base leading-relaxed">
              Our process starts with{" "}
              <span className="underline">Wireframing</span>—laying the
              foundation of every great product—before evolving into
              high-fidelity <span className="underline">Figma Prototyping</span>
              . Whether it’s a brand refresh or a full-fledged{" "}
              <span className="underline">Design & Development</span> journey,
              we build with precision, passion, and a deep understanding of user
              experience.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/6 text-center md:text-left flex flex-col items-center">
            <p className="text-white text-lg font-semibold">Socials:</p>
            <p className="text-white hover:underline cursor-pointer">
              LinkedIn
            </p>
            <p className="text-white hover:underline cursor-pointer">X</p>
          </div>
        </div>
      </div>
    </>
  );
};
