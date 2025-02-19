import React from "react";

const About = () => {
  return (
    <div className="about relative w-full h-auto max-w-[1490px] flex flex-col items-start justify-center flex-nowrap sm:gap-[120px] p-[30px] overflow-hidden">
      <div className="content relative w-full h-auto flex flex-col items-start justify-center flex-nowrap gap-[70px] overflow-visible">
        <div className="title relative w-[83%] h-auto flex flex-col items-start justify-center flex-nowrap overflow-visible">
          <h3 className="relative w-full h-auto uppercase text-white text-[40px] font-bold tracking-tighter leading-10 sm:text-[80px] md:text-[80px]">
            you think it's boring , think again… :)
          </h3>
          <p className="text-white relative w-full h-auto max-w-[300px] font-medium text-left text-[18px] pt-[30px]">Place where the underestimation reveals the beast you never saw coming ….</p>
        </div>
      </div>
      <hr className="border-[1px] border-white w-full mt-[30px] mb-[10px] "/>
      <div className="flex flex-row items-center justify-between w-full h-auto relative">
        <div>
            <p className="text-white uppercase tracking-tighter">//approach</p>
        </div>
        <div>
            <p className="text-zinc-600 uppercase tracking-tighter">five phases</p>
        </div>
      </div>
      <div className="bottom relative w-full h-auto flex flex-col items-start justify-center flex-nowrap gap-[80px] overflow-hidden">
        <div className="relative h-auto ">
            <h1 className="text-white uppercase text-[5vw] font-bold tracking-tighter mt-[30px]">moodboards</h1>
            <p className="text-zinc-600 tracking-tighter">Every great design starts with a vision. We curate a moodboard filled with colors, typography, and design elements that set the tone for your brand's identity. This helps us align creativity with strategy before we dive into execution.</p>
        </div>
        <div className="relative h-auto ">
            <h1 className="text-white uppercase text-[5vw] font-bold tracking-tighter ">Wireframing and Prototype</h1>
            <p className="text-zinc-600 tracking-tighter">Once the vision is clear, we sketch out the blueprint. Our wireframing process ensures a seamless user journey, while Figma prototyping brings your ideas to life with interactive previews.</p>
        </div>
        <div className="relative h-auto ">
            <h1 className="text-white uppercase text-[5vw] font-bold tracking-tighter ">deaign and development</h1>
            <p className="text-zinc-600 tracking-tighter">From web design to frontend development, we merge aesthetics with functionality. Whether it's a sleek landing page or a fully responsive interface, we craft experiences that are both visually stunning and highly intuitive.</p>
        </div>
        <div className="relative h-auto ">
            <h1 className="text-white uppercase text-[5vw] font-bold tracking-tighter">reviews and adjustments</h1>
            <p className="text-zinc-600 tracking-tighter">To ensure alignment , we conclude each phase by presenting our work to you , gathering your suggestions and reviews and implementing any neccessary changes</p>
        </div>
        <div className="relative h-auto ">
            <h1 className="text-white uppercase text-[5vw] font-bold tracking-tighter">delivery</h1>
            <p className="text-zinc-600 tracking-tighter">We refine, test, and perfect every pixel. Our meticulous attention to detail ensures that your brand's digital presence is impactful, immersive, and unforgettable.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
