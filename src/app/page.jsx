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
      <div className="">
        <div className="md:px-12 py-5 rounded-[20px] max-h-screen min-h-screen">
          <Hero />
        </div>
      </div>
      <div className=" ">
        <Steps />
      </div>
      <div className="">
        <Service />
      </div>
      <div className="">
        <Approaches />
      </div>
      <div className="">
        <Prices />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
