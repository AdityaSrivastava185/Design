import React from "react";

const Services = () => {
  return (
    <div className="h-screen lg:px-[30px]">
      <div class="sm:mt-4 sm:mb-1 md:px-[2vw]">
        <hr class="border-1 border-zinc-700" />
      </div>
      <div class="services">
        <div class="flex md:flex-row md:items-center md:justify-between">
          <p class="text-white uppercase md:text-[1.8vw] lg:text-[1.3vw] md:font-semibold md:tracking-tighter">
            03
          </p>
          <p class="text-white uppercase md:text-[1.8vw] lg:text-[1.3vw] md:font-semibold md:tracking-tighter">
            //services
          </p>
          <p class="text-zinc-400 uppercase md:text-[1.8vw] lg:text-[1.3vw] md:font-semibold md:tracking-tighter">
            fast delivery
          </p>
        </div>
        <div class="flex flex-col md:flex-row md:items-center md:justify-between md:gap-[13vw]">
          <div>
            <p class="font-semibold text-white md:text-[7vw] md:tracking-tighter">
              services
            </p>
          </div>
          <div className="lg:w-[20vw]">
            <p class="font-semibold text-white md:text-[2vw] md:leading-3.5 md:tracking-tighter md:pt-[10vh] lg:leading-6 lg:text-[1.5vw]">
              We design compelling, high-impact experiences , transform ideas
              into visuals .
            </p>
          </div>
        </div>
        <div class="h-auto w-full md:mt-10 md:pl-[36vw]">
          <div class="flex flex-col md:mb-7 md:flex-row md:items-start md:justify-around">
            <div class="text-white">01</div>
            <div class="max-w-[50vw]">
              <h2 class="text-white">Open Source </h2>
              <p class="text-zinc-400">
                Making your website completely open source and maintaining it on
                github
              </p>
            </div>
          </div>
          <div class="flex flex-col md:mb-7 md:flex-row md:items-start md:justify-around">
            <div class="text-white">01</div>
            <div class="max-w-[50vw]">
              <h2 class="text-white">Complete Website Design</h2>
              <p class="text-zinc-400">
                Effortless Execution in Figma and Framer , Rapid Results Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae vel facilis sunt suscipit voluptatem error amet quod mollitia quisquam labore provident cupiditate corporis delectus in, quam tenetur, iste, voluptate modi sequi voluptatum odit optio vero! Facilis incidunt laboriosam beatae?
              </p>
            </div>
          </div>
          <div class="flex flex-col md:mb-7 md:flex-row md:items-start md:justify-around">
            <div class="text-white">01</div>
            <div class="max-w-[50vw]">
              <h2 class="text-white">UI/UX Design</h2>
              <p class="text-zinc-400">Interaction Design , Quick Delivery</p>
            </div>
          </div>
          <div class="flex flex-col md:mb-7 md:flex-row md:items-start md:justify-around">
            <div class="text-white">01</div>
            <div class="max-w-[50vw]">
              <h2 class="text-white">Wireframing</h2>
              <p class="text-zinc-400">Complete Wireframes of web designs</p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row md:items-start md:justify-around">
            <div class="text-white">01</div>
            <div class="max-w-[50vw]">
              <h2 class="text-white">Prototyping of Design</h2>
              <p class="text-zinc-400">Full Website Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
