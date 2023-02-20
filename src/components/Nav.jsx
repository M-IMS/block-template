import React from "react";

const Nav = () => {
  return (
    <div className="hidden sm:flex flex-col items-center gap-3 text-center fixed w-[16%]">
      <div className="w-full h-[10%] py-20 border-b-2">
        <h1 className="text-5xl font-bold text-emerald-400">LOGO</h1>
      </div>
      <ul className="text-sm font-normal flex flex-col gap-4 border-b-2 w-full py-5">
        <li className="cursor-pointer">ABOUT US</li>
        <li className="cursor-pointer">BUSINESS</li>
        <li className="cursor-pointer">SUPPORTION INDUSTRIES</li>
        <li className="cursor-pointer">SUSTAINABILITY</li>
        <li className="cursor-pointer">CAREERS</li>
        <li className="cursor-pointer">BULLETIN</li>
        <li className="cursor-pointer">CONTACT US</li>
      </ul>
    </div>
  );
};

export default Nav;
