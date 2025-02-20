import React from "react";

const Note = () => {
  return (
    <div className="h-screen">
      <div class="sm:mt-4 sm:mb-1 md:px-[2vw]">
        <hr class="border-1 border-zinc-700" />
      </div>
      <div className="flex h-[50vh] w-full items-center justify-center">
        <div className="flex h-auto md:w-[80vw] items-center justify-center">
          <h1 className="text-center text-[3vw] font-semibold text-white md:leading-10 md:tracking-tighter lg:leading-8 xl:leading-none">
          Boring -Designer is always here for communities , individuals and for startups with high end visions , and obvisouly not for boring stuffs
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Note;
