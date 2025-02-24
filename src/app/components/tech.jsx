import React from "react";

const TechStack = () => {
  return (
    <div className="min-h-screen px-[30px]">
      <div className=" mt-[4vh] sm:mt-4 sm:mb-1 px-[4vw] md:px-[2vw]">
        <hr className="border border-zinc-700" />
      </div>
      <div className="services md:px-[2vw]">
        <div className="flex flex-row items-center justify-between gap-2 text-center">
          <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            06
          </p>
          {/* <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            //tools and stack
          </p> */}
          <p className="text-zinc-400 uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            //tools and stack
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-[13vw]">
          <div className="mb-[1vh] mt-[10vh] sm:my-[0vh]">
            <p className="font-bold text-white md:text-[7vw] md:tracking-tighter text-[12vw] font-jetbrainmono tracking-tighter uppercase leading-[1]">
              stacks & tools
            </p>
          </div>
        </div>
        <div className="h-auto w-full md:my-10 md:pl-[36vw]">
          {[
            {
              title: "NextJS/ReactJS",
              subtitle: "Front-end development",
              description:
                "Frontend development code completely written in Next.js and React.js using Tailwind CSS.",
            },
            {
              title: "Git and GitHub",
              subtitle:
                "Maintaining the code versions and making it open source",
              description:
                "GitHub is a cloud-based platform where you can store, share, and work together with others to write code.",
            },
            {
              title: "Framer",
              subtitle: "Web design platform",
              description:
                "The internet is your canvas. Framer is where you design and publish stunning sites.",
            },
            {
              title: "Figma",
              subtitle: "Design tool",
              description:
                "Figma is a collaborative web application for design with additional offline features for macOS and Windows.",
            },
            {
              title: "Shadcn UI",
              subtitle: "Component library",
              description:
                "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.",
            },
            {
              title: "WebStorm",
              subtitle: "JetBrains IDE",
              description: "The JavaScript and TypeScript IDE.",
            },
            {
              title: "Visual Studio Code",
              subtitle: "IDE by Microsoft",
              description:
                "Visual Studio Code redefines AI-powered coding with GitHub Copilot for building and debugging modern web and cloud applications.",
            },
          ].map((item, index) => (
            <div key={index} className="w-full border-b border-zinc-900 pb-5">
              <div className="flex flex-col md:mb-7 md:flex-row md:items-start md:justify-around md:py-2">
                {/* Number (hidden on small screens) */}
                <div className="hidden md:block text-white md:text-[2vw] md:font-bold">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>

                {/* Content Section */}
                <div className="w-full md:max-w-[50vw] md:min-w-[50vw] mt-[10vh]">
                  <h2 className="text-white text-[7vw] sm:text-[5vw] md:text-[2vw] font-bold leading-[1px] md:leading-none mb-[20px] md:mb-[0px] font-jetbrainmono tracking-tighter">
                    {item.title}
                  </h2>
                  <p className="text-white text-[4.6vw] sm:text-[3vw] md:text-[1.5vw] font-semibold tracking-tighter md:tracking-none font-jetbrainmono">
                    {item.subtitle}
                  </p>
                  <p className="text-zinc-500 text-[4vw] sm:text-[2.5vw] md:text-[1vw] font-jetbrainmono tracking-tighter font-semibold pt-5">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
