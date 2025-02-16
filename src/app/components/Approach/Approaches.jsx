import react from "react";
import { Prices } from "../Pricing/Price";

export const Approaches = () => {
  return (
    <>
      <div className="md:px-12 text-left text-[#ffffff] max-w-[111rem]">
        <div>
          <h1 className="text-white text-[4rem] font-extrabold font-jetbrainmono tracking-tighter">
            Our Approach
          </h1>
        </div>
        <hr className="border-t border-white opacity-50 my-4" />
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
            <h2 className="text-white text-2xl font-extrabold tracking-wide md:w-1/3 font-jetbrainmono">
              Phase01
            </h2>
            <div className="w-full md:w-1/2">
              <p className="text-white text-xl leading-relaxed">
                <span className="underline">Moodboards</span>
              </p>
              <br />
              <p className="text-white text-lg leading-relaxed">
                Our process starts with{" "}
                <span className="underline">Wireframing</span>—laying the
                foundation of every great product—before evolving into
                high-fidelity{" "}
                <span className="underline">Figma Prototyping</span>. Whether
                it’s a brand refresh or a full-fledged{" "}
                <span className="underline">Design & Development</span> journey,
                we build with precision, passion, and a deep understanding of
                user experience.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
            <h2 className="text-white text-2xl font-extrabold tracking-wide md:w-1/3 font-jetbrainmono">
              Phase02
            </h2>
            <div className="w-full md:w-1/2">
              <p className="text-white text-xl leading-relaxed">
                <span className="underline">Wireframing & Prototyping</span>
              </p>
              <br />
              <p className="text-white text-lg leading-relaxed">
                Our process starts with{" "}
                <span className="underline">Wireframing</span>—laying the
                foundation of every great product—before evolving into
                high-fidelity{" "}
                <span className="underline">Figma Prototyping</span>. Whether
                it’s a brand refresh or a full-fledged{" "}
                <span className="underline">Design & Development</span> journey,
                we build with precision, passion, and a deep understanding of
                user experience.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
            <h2 className="text-white text-2xl font-extrabold tracking-wide md:w-1/3 font-jetbrainmono">
              Phase03
            </h2>
            <div className="w-full md:w-1/2">
              <p className="text-white text-xl leading-relaxed">
                <span className="underline">Design & Development</span>
              </p>
              <br />
              <p className="text-white text-lg leading-relaxed">
                From <span className="underline">web design</span> to{" "}
                <span className="underline">frontend development</span>, we
                merge aesthetics with functionality. Whether it’s a sleek
                landing page or a fully responsive interface, we craft
                experiences that are both visually{" "}
                <span className="underline">stunning</span> and{" "}
                <span className="underline">highly intuitive</span>.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
            <h2 className="text-white text-2xl font-extrabold tracking-wide md:w-1/3 font-jetbrainmono">
              Phase04
            </h2>
            <div className="w-full md:w-1/2">
              <p className="text-white text-xl leading-relaxed">
                <span className="underline">Reviews and Adjustments</span>
              </p>
              <br />
              <p className="text-white text-lg leading-relaxed">
                To ensure alignment, we conclude each phase by presenting our
                work to you, gathering your feedback, and implementing any
                necessary adjustments.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
            <h2 className="text-white text-2xl font-extrabold tracking-wide md:w-1/3 font-jetbrainmono">
              Phase05
            </h2>
            <div className="w-full md:w-1/2">
              <p className="text-white text-xl leading-relaxed">
                <span className="underline">Delivery</span>
              </p>
              <br />
              <p className="text-white text-lg leading-relaxed">
                We refine, test, and perfect every pixel. Our meticulous
                attention to detail ensures that your brand’s digital presence
                is impactful, immersive, and unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
