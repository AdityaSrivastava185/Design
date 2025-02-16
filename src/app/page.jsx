import Image from "next/image";
import Hero from "./components/Home/Home";
import Steps from "./components/Procedure/Steps";
import { Service } from "./components/Services/Service";
import { Approaches } from "./components/Approach/Approaches";
import { Prices } from "./components/Pricing/Price";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="mb-2 h-screen bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="md:px-12 py-5 rounded-[20px] ">
          <Hero />
        </div>
      </div>
      <div className=" bg-cover bg-center bg-no-repeat bg-fixed ">
        <Steps />
      </div>
      <div className=" bg-cover bg-center bg-no-repeat bg-fixed">
        <Service />
      </div>
      <div className="bg-cover bg-center bg-no-repeat bg-fixed">
        <Approaches />
      </div>
      <div className=" h-screen pt-20  bg-cover bg-center bg-no-repeat bg-fixed">
        <Prices/>
      </div>
      <div className=" h-screen  bg-cover bg-center bg-no-repeat bg-fixed">
      </div>
      <div className="h-screen">
        <Footer/>
      </div>
    </>
  );
}
