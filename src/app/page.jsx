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
      <div className="bg-[url('/bg23.jpeg')] h-screen bg-cover bg-center bg-no-repeat ">
        <div className="md:px-12 py-5 rounded-[20px] ">
          <Hero />
        </div>
      </div>
      <div className="bg-[url('/bg23.jpeg')] bg-cover bg-center bg-no-repeat ">
        <Steps />
      </div>
      <div className="bg-[url('/bg23.jpeg')] bg-cover bg-center bg-no-repeat ">
        <Service />
      </div>
      <div className="bg-[url('/bg23.jpeg')] bg-cover bg-center bg-no-repeat ">
        <Approaches />
      </div>
      <div className="bg-[url('/bg23.jpeg')] h-screen pt-20  bg-cover bg-center bg-no-repeat">
        <Prices />
      </div>
      <div className="bg-[url('/bg23.jpeg')] h-screen  bg-cover bg-center bg-no-repeat "></div>
      <div className="bg-[url('/20.png')]h-screen">
        <Footer />
      </div>
    </>
  );
}
