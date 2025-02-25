import React from "react";

const Services = () => {
  return (
    <div className="min-h-screen md:mb-[20vh] px-[30px]">
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
            best quality services
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-9 md:items-center md:justify-between md:gap-[13vw]">
          <div className="mb-[1vh] mt-[10vh] sm:my-[0vh]">
            <p className="font-bold text-white md:text-[7vw] md:tracking-tighter text-[12vw] font-jetbrainmono tracking-tighter uppercase">
              Service
            </p>
          </div>
        </div>
        <div className="h-auto w-full mt-20 md:mt-10 md:pl-[10vw] lg:pl-[36vw]">
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
              className="flex flex-col gap-2 sm:gap-3 md:gap-4 md:mb-7 md:flex-row md:items-start md:justify-around"
            >
              <div className="hidden sm:block text-white text-[4vw] sm:text-[4vw] md:text-[2vw] font-bold ">
                {phase.number}
              </div>
              <div className="max-w-[80vw] sm:max-w-[70vw] md:max-w-[50vw] mb-[50px] md:mb-[0px] lg:pb-10">
                <h2 className="text-white max-w-[40vw] md:max-w-[70vw] text-[9vw] sm:text-[4vw] md:text-[2vw] font-bold mb-[10px] md:mb-[0px] uppercase tracking-tighter leading-8 md:leading-none font-jetbrainmono lg:pb-8">
                  {phase.title}
                </h2>
                <p className="text-zinc-500 text-[4.5vw] sm:text-[3vw] md:text-[1vw] leading-5 tracking-tighter lg:text-xl">
                  {phase.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
