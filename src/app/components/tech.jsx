import React from "react";

const TechStack = () => {
  return (
    <div className="min-h-screen px-[30px] lg:px-[30px]">
      <div className="mt-[4vh] sm:mt-4 sm:mb-1 px-[4vw] md:px-[2vw]">
        <hr className="border border-zinc-700" />
      </div>
      <div className="services">
        <div className="flex flex-row items-center justify-between gap-2 text-center">
          <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            03
          </p>
          <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            //tools and stacks
          </p>
          <p className="text-zinc-400 uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            tolls used
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-[13vw]">
          <div className="mb-[1vh] mt-[10vh] sm:my-[0vh] lg:mt-10">
            <p className="font-bold text-white md:text-[7vw] md:tracking-tighter text-[12vw] font-jetbrainmono tracking-tighter uppercase lg:[word-spacing:-2.5rem] md:leading-[100px] leading-[54px] appearonscroll">
              tools and stack
            </p>
          </div>
          <div className="lg:w-[30vw] mb-[5vh]">
            <p className="font-semibold text-white md:text-[2vw] md:leading-3.5 md:tracking-tighter md:pt-[10vh] lg:leading-6 lg:text-[1.5vw] text-[4.7vw] font-jetbrainmono tracking-tighter leading-5">
              We design compelling, high-impact experiences, transforming ideas
              into visuals.
            </p>
          </div>
        </div>
        <div className="h-auto w-full md:mt-10 md:pl-[36vw] mt-11">
          {[
            {
              number: "01",
              title: "NextJS/ReactJS",
              desc: "Frontend development code completely written in Next.js and React.js using Tailwind CSS, ensuring highly responsive, efficient, and scalable web applications.",
            },
            {
              number: "02",
              title: "Git and GitHub",
              desc: "Maintaining code versions and making it open-source. GitHub provides a cloud-based platform where you can store, share, and collaborate on code seamlessly.",
            },
            {
              number: "03",
              title: "Framer",
              desc: "A powerful web design platform that turns ideas into interactive, production-ready websites. Framer enables designers and developers to create visually stunning sites.",
            },
            {
              number: "04",
              title: "Figma",
              desc: "A collaborative design tool that allows teams to create, prototype, and iterate designs with precision. Features include real-time collaboration, vector editing, and design systems.",
            },
            {
              number: "05",
              title: "ShadCN UI",
              desc: "A set of beautifully designed, accessible UI components built for modern web applications. Fully open-source and works seamlessly with popular frameworks.",
            },
            {
              number: "06",
              title: "WebStorm",
              desc: "A robust JavaScript and TypeScript IDE by JetBrains. It provides advanced coding assistance, debugging, and seamless integration with modern web technologies.",
            },
            {
              number: "07",
              title: "Visual Studio Code",
              desc: "A powerful IDE by Microsoft, redefining AI-powered coding with GitHub Copilot for modern web and cloud application development.",
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
        </div>
      </div>
    </div>
  );
};

export default TechStack;
