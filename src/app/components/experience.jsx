import React from "react";

const Experience = () => {
  return (
    <div className="h-screen md:mb-[20vh] px-[30px]">
      <div className=" mt-[4vh] sm:mt-4 sm:mb-1 px-[4vw] md:px-[2vw]">
        <hr className="border border-zinc-700" />
      </div>
      <div className="services md:px-[2vw]">
        <div className="flex flex-row items-center justify-between gap-2 text-center">
          <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            04
          </p>
          <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            //experience
          </p>
          <p className="text-zinc-400 uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            2024-present
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-9 md:items-center md:justify-between md:gap-[13vw]">
          <div className="mb-[1vh] mt-[10vh] sm:my-[0vh]">
            <p className="font-bold text-white md:text-[7vw] md:tracking-tighter text-[12vw] font-jetbrainmono tracking-tighter uppercase">
              experience
            </p>
          </div>
        </div>
        <div className="h-auto w-full mt-5 md:mt-10 md:pl-[10vw] lg:pl-[36vw]">
          {[
            {
              number: "01",
              title: "Hanalabs",
              role: "Frontend Developer",
              desc: "Worked on various dynamic projects for multiple companies, designing and developing user-friendly and visually appealing interfaces. Delivered tailored solutions that met the unique requirements of each project. Built high-performance frontends using Next.js, TypeScript, and Tailwind CSS, ensuring clean, maintainable, and scalable code.",
            },
            {
              number: "02",
              title: "Prisma-ORM",
              role: "Open Source Contributor",
              desc: "Improved Prisma Client Documentation and updated command references in the Prisma Client documentation to ensure greater clarity and accuracy.",
            },
            {
              number: "03",
              title: "Signodes Club",
              role: "Open Source Mentor",
              desc: "Mentored 20+ students on contributing to open-source projects using GitHub. Provided step-by-step guidance on best practices for version control, collaboration, and contributing effectively. Emphasized the importance of clean code, documentation, and communication in open-source contributions.",
            },
          ].map((experience, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 sm:gap-3 md:gap-4 md:mb-7 md:flex-row md:items-start md:justify-around lg:pb-10"
            >
              <div className="hidden sm:block text-white text-[4vw] sm:text-[4vw] md:text-[2vw] font-bold">
                {experience.number}
              </div>
              <div className="max-w-[80vw] sm:max-w-[70vw] md:max-w-[50vw] mb-[50px] md:mb-0">
                <h2 className="text-white text-[7vw] sm:text-[4vw] md:text-[2vw] font-bold  md:mb-0 font-jetbrainmono tracking-tighter uppercase">
                  {experience.title}
                </h2>
                <p className="text-white text-[4.5vw] sm:text-[3vw] md:text-[1.5vw] font-semibold mb-6 font-jetbrainmono tracking-tighter">
                  {experience.role}
                </p>
                <p className="text-zinc-500 text-[4.5vw] sm:text-[3vw] md:text-[1vw] tracking-tighter  leading-4 lg:text-xl">
                  {experience.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
