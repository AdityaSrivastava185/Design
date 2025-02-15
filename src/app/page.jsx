import Image from "next/image";
import Hero from "./components/Home/Home";

export default function Home() {
  return (
    <>
      <div className={`md:px-32 py-5 h-screen w-full bg-[url('/20.png')] bg-cover bg-center bg-no-repeat`}>
        <Hero />
      </div>
    </>
  );
}
