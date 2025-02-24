import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-col md:items-center md:justify-between mx-7 md:mx-5 md:mt-10 md:flex-row ">
        <div
          className=" mb-9 md:mb-0
        w-full sm:max-w-[60vw] md:max-w-[40vw] mt-[6vh] md:mt-0"
        >
          <h1 className=" font-bold text-white uppercase text-[8vw] sm:text-[6vw] md:text-[6vw] lg:text-[5vw] sm:leading-[1.1] md:leading-7 lg:leading-[70px] tracking-tighter leading-8 font-jetbrainmono">
            you think it's boring,think again...:)
          </h1>
        </div>

        <div className="h-auto max-w-[50vw] mb-20 sm:max-w-[60vw] md:max-w-[25vw]">
          <div className="flex h-auto w-full flex-col items-end justify-end">
            <p className="font-semibold text-white uppercase text-[5vw] sm:text-[3vw] md:text-[16px] lg:text-lg leading-5 tracking-tighter font-jetbrainmono">
              Place where underestimation reveals the beast you never saw coming
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-[4vh] sm:mt-4 sm:mb-1 px-[4vw] md:px-[2vw] lg:mt-[20vh]">
        <hr className="border border-zinc-700" />
      </div>
      <div className="about h-auto w-full px-[4vw] md:px-[40px]">
        <div className="flex flex-row items-center justify-between gap-2 text-center">
          <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            01
          </p>
          <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            //approach
          </p>
          <p className="text-zinc-400 uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            five phases
          </p>
        </div>
        <div className="h-auto w-full mt-20 md:mt-10 md:pl-[10vw] lg:pl-[36vw] lg:mt-[20vh]">
          {[
            {
              number: "01",
              title: "Moodboards",
              desc: "Every great design starts with a vision. We curate a moodboard filled with colors, typography, and design elements that set the tone for your brand's identity. This helps us align creativity with strategy before we dive into execution.",
            },
            {
              number: "02",
              title: "Wireframing and Prototype",
              desc: "Once the vision is clear, we sketch out the blueprint. Our wireframing process ensures a seamless user journey, while Figma prototyping brings your ideas to life with interactive previews.",
            },
            {
              number: "03",
              title: "Design and Development",
              desc: "From web design to frontend development, we merge aesthetics with functionality. Whether it's a sleek landing page or a fully responsive interface, we craft experiences that are both visually stunning and highly intuitive.",
            },
            {
              number: "04",
              title: "Reviews and Adjustments",
              desc: "To ensure alignment, we conclude each phase by presenting our work to you, gathering your suggestions and reviews, and implementing any necessary changes.",
            },
            {
              number: "05",
              title: "Delivery",
              desc: "We refine, test, and perfect every pixel. Our meticulous attention to detail ensures that your brand's digital presence is impactful, immersive, and unforgettable.",
            },
          ].map((phase, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 sm:gap-3 md:gap-4 md:mb-7 md:flex-row md:items-start md:justify-around"
            >
              <div className="hidden sm:block text-white text-[4vw] sm:text-[4vw] md:text-[2vw] font-bold ">
                {phase.number}
              </div>
              <div className="max-w-[80vw] sm:max-w-[70vw] md:max-w-[50vw] mb-[50px] md:mb-[0px] lg:pb-10">
                <h2 className="text-white max-w-[40vw] md:max-w-[0vw] text-[9vw] sm:text-[4vw] md:text-[2vw] font-bold mb-[10px] md:mb-[0px] uppercase tracking-tighter leading-8 md:leading-none font-jetbrainmono lg:pb-8">
                  {phase.title}
                </h2>
                <p className="text-zinc-500 text-[4.5vw] sm:text-[3vw] md:text-[1vw] font-semibold leading-5 tracking-tighter font-jetbrainmono">
                  {phase.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className=" mt-[4vh] sm:mt-4 sm:mb-1 px-[4vw] md:px-[2vw]">
          <hr className="border border-zinc-700" />
        </div>

        <div className="h-auto w-full">
          <div className="flex flex-row items-center justify-between gap-2 text-center">
            <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
              02
            </p>
            <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
              //about me
            </p>
            <p className="text-zinc-400 uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
              know about me
            </p>
          </div>

          <div className="flex h-auto min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] w-full items-center justify-center">
            <div className="flex h-auto w-[40vw] sm:w-[70vw] md:w-[40vw] lg:w-[90vw] items-center justify-center">
              <h1 className="text-center text-[9vw] sm:text-[6vw] md:text-[3vw] font-extrabold text-white leading-[0.9] tracking-tighter uppercase font-jetbrainmono lg:text-[8vw]">
                More About Boring Designer
              </h1>
            </div>
          </div>

          <div className="flex h-auto min-h-[30vh] mt-1 sm:min-h-[40vh] md:min-h-[50vh] w-full items-center justify-center sm:mt-[-15vh] md:mt-[-25vh] lg:pt-5">
            <div className="flex h-auto w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] items-center justify-center">
              <h1 className="text-center text-[5vw] sm:text-[3vw] md:text-[1.6vw] font-extrabold text-white leading-6 tracking-tighter font-jetbrainmono">
                I'M AN INNOVATIVE DESIGNER AND DIGITAL ARTIST INDIA.MY PASSION
                FOR MINIMALIST AESTHETICS,ELEGANT TYPOGRAPHY,AND INTUITIVE
                DESIGN SHINES THROUGH IN MY WORK.
              </h1>
            </div>
          </div>

          <div className="flex h-auto min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] w-full items-center justify-center sm:mt-[-20vh] md:mt-[-30vh] lg:mt-[-35vh] mt-[-8vh] mb-20 ">
            <div className="flex h-auto w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[60vw] items-center justify-center">
              <h1 className="text-center text-[4vw] sm:text-[3vw] md:text-[1.3vw] font-semibold text-[#808080]  tracking-tighter leading-4 font-jetbrainmono">
                Unleash a creative force that transforms every pixel into a
                masterpiece,turning your brand's digital presence into an
                unforgettable experience.Experience design reimagined—where
                precision meets passion to elevate your identity into a realm of
                endless possibilities.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
