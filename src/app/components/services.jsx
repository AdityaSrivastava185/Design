import React from "react";
import Image from "next/image";


const Services = () => {
  return (
    <div id="services" className=" min-h-screen md:mb-[20vh] px-[30px]">
      <div className=" mt-[4vh] sm:mt-4 sm:mb-1 px-[4vw] md:px-[2vw]">
        <hr className="border border-zinc-700" />
      </div>
      <div className="services md:px-[2vw]">
        <div className="flex flex-row items-center justify-between gap-2 text-center">
          <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            02
          </p>
          <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            //service
          </p>
          <p className="text-zinc-400 uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            best services
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-9 md:items-center md:justify-between md:gap-[13vw]">
          <div className="mb-[1vh] mt-[10vh] sm:my-[0vh]">
            <p className="font-bold text-white md:text-[7vw] md:tracking-tighter text-[12vw] font-jetbrainmono tracking-tighter uppercase appearonscroll">
              Service
            </p>
          </div>
        </div>
        {/* <div className="h-auto w-full mt-20 md:mt-10 md:pl-[10vw] lg:pl-[36vw]">
          {[
            {
              number: "01",
              title: "Open Source Development",
              desc: "We specialize in making your website completely open-source, ensuring transparency, accessibility, and community-driven improvements. By hosting your code on GitHub, we enable seamless collaboration, version control, and continuous enhancements from developers worldwide.",
            },
            {
              number: "02",
              title: "Complete Website Design",
              desc: "We create stunning responsive websites with an emphasis on modern UI/UX design, ensuring your brand stands out. Our expertise in Figma and Framer enables rapid prototyping and precise design execution, delivering seamless digital experiences.",
            },
            {
              number: "03",
              title: "UI/UX Design & Optimization",
              desc: "We go beyond aesthetics—our UI/UX design services focus on user psychology, intuitive navigation, and high engagement. By leveraging behavioral analytics and A/B testing, we ensure your website drives conversions and delivers an exceptional user experience.",
            },
            {
              number: "04",
              title: "Wireframing & Prototyping",
              desc: "Before diving into development, we create detailed wireframes and prototypes to visualize the entire user journey. Our structured approach ensures error-free development, cost reduction, and an efficient design-to-code transition.",
            },
            {
              number: "05",
              title: "Prototyping & Full Website Development",
              desc: "We build high-performance, SEO-friendly websites with the latest technologies. From front-end development (React, Next.js, TailwindCSS)",
            },
          ].map((phase, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 sm:gap-3 md:gap-4 md:mb-7 md:flex-row md:items-start md:justify-around appearonscroll"
            >
              <div className="hidden sm:block text-white text-[4vw] sm:text-[4vw] md:text-[2vw] font-bold ">
                {phase.number}
              </div>
              <div className="max-w-[80vw] sm:max-w-[70vw] md:max-w-[50vw] mb-[50px] md:mb-[0px] lg:pb-10">
                <h2 className="text-white max-w-[40vw] md:max-w-[70vw]  text-[6vw] sm:text-[4vw] md:text-[2vw] font-bold mb-[10px] md:mb-[0px] uppercase tracking-tighter leading-8 md:leading-none font-jetbrainmono lg:pb-8">
                  {phase.title}
                </h2>
                <p className="text-zinc-500 text-[4.5vw] sm:text-[3vw] md:text-[1vw] leading-5 tracking-tighter lg:text-xl">
                  {phase.desc}
                </p>
              </div>
            </div>
          ))}
        </div> */}
        <div className="bg-[#171717] py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-[#121212] lg:rounded-l-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] border-2 border-dotted border-[#E2E2E2DF]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-medium tracking-tight text-[#E2E2E2DF] max-lg:text-center">
                      Open Source Development
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                      We specialize in making your website completely
                      open-source, ensuring transparency, accessibility, and
                      community-driven improvements. By hosting your code on
                      GitHub, we enable seamless collaboration, version control,
                      and continuous enhancements from developers worldwide.
                    </p>
                  </div>
                  <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden  shadow-2xl">
                      <img
                        className="size-full object-cover object-top"
                        src="/1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
              </div>
              <div className="relative max-lg:row-start-1">
                <div className="absolute inset-px rounded-lg bg-[#121212] max-lg:rounded-t-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] border-2 border-dotted border-[#E2E2E2DF]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-[#E2E2E2DF] max-lg:text-center">
                      Complete Website Design and Development
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                      We create stunning responsive websites with an emphasis on
                      modern UI/UX design, ensuring your brand stands out. Our
                      expertise in Figma and Framer enables rapid prototyping
                      and precise design execution, delivering seamless digital
                      experiences.
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
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] border-2 border-dotted border-[#E2E2E2DF]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-[#E2E2E2DF] max-lg:text-center">
                      UI/UX Design & Optimization
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
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] border-2 border-dotted border-[#E2E2E2DF] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-medium tracking-tight text-[#E2E2E2DF] max-lg:text-center">
                      Wireframing & Prototyping
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                      Before diving into development, we create detailed
                      wireframes and prototypes to visualize the entire user
                      journey. Our structured approach ensures error-free
                      development, cost reduction, and an efficient
                      design-to-code transition.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
