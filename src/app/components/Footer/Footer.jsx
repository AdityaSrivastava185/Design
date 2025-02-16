import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="md:px-12">
        <div className="flex flex-col  md:flex-row items-center justify-between">
          <div>
            <h1 className="text-white text-[4rem] font-extrabold font-jetbrainmono tracking-tighter">
              EYE:)
            </h1>
            <h1 className="text-white text-[4rem] font-extrabold font-jetbrainmono tracking-tighter">
              OPENING
            </h1>
          </div>
          <div className="text-white">
            <h1 className="text-white text-[4rem] font-extrabold font-jetbrainmono tracking-tighter">
              DESIGNS AND DEVELOPMENT
            </h1>
          </div>
        </div>
        <div className="text-white">
          <div className="flex flex-col items-start justify-between">
            <div className="mt-20 mb-10">
              <p className="underline">Socials-</p>
              <p className="underline">Linkedin</p>
              <p className="underline">X</p>
            </div>
            <div className="mt-20 mb-10">
              <p className="underline">Location-</p>
              <p className="underline">India</p>
            </div>
            <div>
              <p className="underline">Email-</p>
              <p className="underline">aditysrivastava9850152@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
