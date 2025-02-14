import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className={``}>
      <div className={``}>
        <div
          className={`flex md:flex-row md:items-center md:justify-between md:gap-[18px]`}
        >
          <div className={`flex items-center justify-center gap-[20px]`}>
            <Link
              href={`#`}
              className={`text-white md:text-2xl font-mono font-extrabold pr-5`}
            >
              BoringDesigner
            </Link>
            <div
              className={`text-[#CDCDCD] flex md:flex-row md:items-center md:justify-center gap-[20px]`}
            >
              <div>
                <Link href={`#`}>Introduction</Link>
              </div>
              <div>
                <Link href={`#`}>Memebership Perks</Link>
              </div>
              <div>
                <Link href={`#`}>Pricing</Link>
              </div>
              <div>
                <Link href={`#`}>Log In</Link>
              </div>
            </div>
          </div>
          <div className={`flex md:flex-row md:items-center md:justify-center md:gap-[20px]`}>
           
            <div className={`text-[#CDCDCD] flex items-center justify-center md:gap-[30px]`}>
                <Link href={`#`}>Lisence</Link>
                <Link href={`#`}>Join Now</Link>
            </div>
            <p className={`bg-blue-600 text-white px-3 py-2 rounded-full cursor-pointer`}>
              Discover Membership
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
