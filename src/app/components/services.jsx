import React from "react";

const Services = () => {
  return (
    <div className="h-screen px-[30px] lg:px-[30px]">
      <div className=" mt-[4vh] sm:mt-4 sm:mb-1 px-[4vw] md:px-[2vw]">
        <hr className="border border-zinc-700" />
      </div>
      <div className="services">
        <div className="flex flex-row items-center justify-between gap-2 text-center">
          <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            03
          </p>
          <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            //service
          </p>
          <p className="text-zinc-400 uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            fast delivery
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-[13vw]">
          <div className="mb-[1vh] mt-[10vh] sm:my-[0vh]">
            <p className="font-bold text-white md:text-[7vw] md:tracking-tighter text-[12vw] font-jetbrainmono tracking-tighter uppercase">
              services
            </p>
          </div>
          <div className="lg:w-[20vw] mb-[5vh] ">
            <p className="font-semibold text-white md:text-[2vw] md:leading-3.5 md:tracking-tighter md:pt-[10vh] lg:leading-6 lg:text-[1.5vw] text-[4.7vw] font-jetbrainmono tracking-tighter leading-5">
              We design compelling,high-impact experiences,transform ideas
              into visuals.
            </p>
          </div>
        </div>
        <div className="h-auto w-full md:mt-10 md:pl-[36vw] mt-11">
          {[
            {
              number: "01",
              title: "Open Source",
              desc: "Making your website completely open source and maintaining it on GitHub.",
            },
            {
              number: "02",
              title: "Complete Website Design",
              desc: "Effortless Execution in Figma and Framer, Rapid Results.",
            },
            {
              number: "03",
              title: "UI/UX Design",
              desc: "Interaction Design, Quick Delivery.",
            },
            {
              number: "04",
              title: "Wireframing",
              desc: "Complete Wireframes of web designs.",
            },
            {
              number: "05",
              title: "Prototyping of Design",
              desc: "Full Website Development.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-start justify-between gap-4 md:gap-10 md:mb-7 mb-[6vh]"
            >
              <div className="text-white text-md font-bold min-w-[10%] font-jetbrainmono">
                {item.number}
              </div>
              <div className="flex-1 max-w-[80%] md:max-w-[45vw] pb-10 border-b border-zinc-900">
                <h2 className="text-white text-2xl font-bold font-jetbrainmono tracking-tighter pb-2 sm:pb-0 leading-6">
                  {item.title}
                </h2>
                <p className="text-zinc-400 text-md md:tracking-wide font-semibold md:leading-5 font-jetbrainmono tracking-tighter leading-4">
                  {item.desc}
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
