import Image from "next/image";
import Hero from "./components/Home/Home";
import Steps from "./components/Procedure/Steps";
import { Service } from "./components/Services/Service";

export default function Home() {
  return (
    <>
      <div className=" bg-[url('/bg23.jpeg')] h-screen bg-cover bg-center bg-no-repeat">
        <div className="md:px-12 py-5 rounded-[20px] ">
          <Hero />
        </div>
      </div>
      <div className=" bg-[url('/bg23.jpeg')] h-screen bg-cover bg-center bg-no-repeat">
      <Steps />
      </div>
      <div className=" bg-[url('/bg23.jpeg')] h-screen bg-cover bg-center bg-no-repeat">
      <Service/>
      </div>
    </>
  );
}
