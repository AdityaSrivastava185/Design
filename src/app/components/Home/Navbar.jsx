import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className={`font-jetbrainmono tracking-tight pb-3`}>
      <div className={``}>
        <div
          className={`flex md:flex-row md:items-center md:justify-between md:gap-[18px]`}
        >
          <div className={`flex items-center justify-center gap-[20px]`}>
            <Link
              href={`#`}
              className={`text-white md:text-2xl font-mono font-extrabold pr-1`}
            >
              BoringDesigner
            </Link>
            <div
              className={`text-white flex md:flex-row md:items-center md:justify-center gap-[20px]`}
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
          <div
            className={`flex md:flex-row md:items-center md:justify-center md:gap-[20px]`}
          >
            <div
              className={`text-white flex items-center justify-center md:gap-[30px]`}
            >
              <Link href={`#`}>Lisence</Link>
              <Link href={`#`}>Join Now</Link>
            </div>
            <p
              className="relative overflow-hidden border-2 border-white text-white px-3 py-2 rounded-full cursor-pointer transition-all shadow-2xl  
  before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] before:duration-500  
  after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] after:duration-500  
  hover:text-white hover:shadow-[#833ab4] hover:before:h-2/4 hover:after:h-2/4"
            >
              <span className="relative z-10">Discover Membership</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
