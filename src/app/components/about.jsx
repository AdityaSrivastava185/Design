import React from "react";

const steps = [
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
];

const About = () => {
  return (
    <>
      <div>
        <div
          id="about"
          className="flex flex-col md:items-center md:justify-between mx-7 md:mx-5 md:flex-row lg:mt-20"
        >
          <div
            className=" mb-9 md:mb-0
        w-full sm:max-w-[60vw] md:max-w-[40vw] lg:max-w-[50vw] md:mt-0"
          >
            <h1 className=" text-white uppercase text-[10vw] sm:text-[6vw] md:text-[6vw] lg:text-[6vw] sm:leading-[1.1] md:leading-7 lg:leading-[70px] xl:leading-[100px] tracking-tighter font-jetbrainmono font-extrabold appearonscroll text-center md:text-start pt-4 leading-[50px]">
              you think it's boring,think again...:)
            </h1>
          </div>

          <div className="h-auto max-w-full mb-20 sm:max-w-[60vw] md:max-w-[25vw]">
            <div className="flex h-auto w-full flex-col items-end justify-end">
              <p className="font-semibold text-white uppercase text-[5vw] sm:text-[3vw] md:text-[16px] lg:text-lg  tracking-tighter font-jetbrainmono appearonscroll text-center leading-8">
                Place where underestimation reveals the beast you never saw
                coming
              </p>
            </div>
            <div className="mt-4 md:mt-10 flex justify-center">
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-lg px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Get the best membership plans
              </button>
            </div>
          </div>
        </div>
        <div className=" mt-[4vh] sm:mt-4 sm:mb-1 px-[4vw] md:px-[2vw] lg:mt-[20vh]">
          <hr className="border border-zinc-700" />
        </div>
        <div className="about h-auto w-full px-[4vw] md:px-[40px]">
          <div className="flex flex-row items-center justify-between gap-2 text-center mb-10 md:mt-0">
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

          <div className="bg-[#171717] py-24 sm:py-32 lg:mt-8 rounded-xl">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-center text-base/7 font-semibold text-white">
                Effortless Mastery
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-[#E2E2DF] sm:text-5xl">
                Everything you need to achieve high-impact designs with
                precision.
              </p>
              <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                <div className="relative lg:row-span-2">
                  <div className="absolute inset-px rounded-lg bg-[#121212] lg:rounded-l-[2rem]"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] border-2 border-dotted border-[#E2E2DF]">
                    <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                      <p className="mt-2 text-lg font-medium tracking-tight text-[#E2E2DF] max-lg:text-center">
                        MoodBoards
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                        Every great design starts with a vision. We curate a
                        moodboard filled with colors, typography, and design
                        elements that set the tone for your brand's identity.
                        This helps us align creativity with strategy before we
                        dive into execution.
                      </p>
                    </div>
                    <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                      <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden  shadow-2xl">
                        {/* <img
                          className="size-full object-cover object-top"
                          src="/1.png"
                          alt=""
                        /> */}
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
                </div>
                <div className="relative max-lg:row-start-1">
                  <div className="absolute inset-px rounded-lg bg-[#121212] max-lg:rounded-t-[2rem]"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] border-2 border-dotted border-[#E2E2DF]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-[#E2E2DF] max-lg:text-center">
                        Wireframing and Prototype
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                        Once the vision is clear, we sketch out the blueprint.
                        Our wireframing process ensures a seamless user journey,
                        while Figma prototyping brings your ideas to life with
                        interactive previews.
                      </p>
                    </div>
                    <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                      {/* <img
                        className="w-full max-lg:max-w-xs"
                        src="/2.png"
                        alt=""
                      /> */}
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
                </div>
                <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                  <div className="absolute inset-px rounded-lg bg-[#121212]"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] border-2 border-dotted border-[#E2E2DF]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-[#E2E2DF] max-lg:text-center">
                        Design and Development
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                        From web design to frontend development, we merge
                        aesthetics with functionality. Whether it's a sleek
                        landing page or a fully responsive interface, we craft
                        experiences that are both visually stunning and highly
                        intuitive.
                      </p>
                    </div>
                    <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                      {/* <img
                        className="h-[min(152px,40cqw)] object-cover"
                        src="/2.png"
                        alt=""
                      /> */}
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                </div>
                <div className="relative lg:row-span-2">
                  <div className="absolute inset-px rounded-lg bg-[#121212] max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] border-2 border-dotted border-[#E2E2DF]">
                    <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                      <p className="mt-2 text-lg font-medium tracking-tight text-[#E2E2DF] max-lg:text-center">
                        Reviews and Delivery
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                        To ensure alignment, we conclude each phase by
                        presenting our work to you, gathering your suggestions
                        and reviews, and implementing any necessary changes.We
                        refine, test, and perfect every pixel. Our meticulous
                        attention to detail ensures that your brand's digital
                        presence is impactful, immersive, and unforgettable
                      </p>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                </div>
              </div>
            </div>
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
                <h1 className="text-center text-[9vw] sm:text-[6vw] md:text-[3vw] font-extrabold text-white leading-[0.9] tracking-tighter uppercase font-jetbrainmono lg:text-[8vw] appearonscroll">
                  More About Boring Designer
                </h1>
              </div>
            </div>

            <div className="flex h-auto min-h-[30vh] mt-[-4.5rem] sm:min-h-[40vh] md:min-h-[50vh] w-full items-center justify-center sm:mt-[-15vh] md:mt-[-25vh] lg:pt-10">
              <div className="flex h-auto w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] items-center justify-center">
                <h1 className="text-center text-[5vw] sm:text-[3vw] md:text-[1.6vw] font-extrabold text-white leading-6 tracking-tighter font-jetbrainmono appearonscroll xl:leading-10">
                  I'M AN INNOVATIVE DESIGNER AND DIGITAL ARTIST INDIA.MY PASSION
                  FOR MINIMALIST AESTHETICS,ELEGANT TYPOGRAPHY,AND INTUITIVE
                  DESIGN SHINES THROUGH IN MY WORK.
                </h1>
              </div>
            </div>

            <div className="flex h-auto min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] w-full items-center justify-center sm:mt-[-20vh] md:mt-[-30vh] lg:mt-[-30vh] mt-[-8vh] mb-20 ">
              <div className="flex h-auto w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[60vw] items-center justify-center">
                <h1 className="text-center text-[4vw] sm:text-[3vw] md:text-[1.3vw] font-semibold text-[#808080]  tracking-tighter leading-4 lg:text-xl">
                  Unleash a creative force that transforms every pixel into a
                  masterpiece,turning your brand's digital presence into an
                  unforgettable experience.Experience design reimagined—where
                  precision meets passion to elevate your identity into a realm
                  of endless possibilities.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
