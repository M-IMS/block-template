import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="relative hidden sm:flex flex-col items-center gap-3 text-center sm:fixed w-[16%]">
        <div className="w-full h-[10%] py-20 border-b-2">
          <h1 className="text-5xl font-bold text-emerald-400">LOGO</h1>
        </div>
        <ul className="text-xl font-normal text-center text-slate-600  flex flex-col gap-4 border-b-2 w-full py-5">
          <li className="cursor-pointer hover:text-emerald-300 ease-in duration-200">
            ABOUT US
          </li>
          <li className="cursor-pointer hover:text-emerald-300 ease-in duration-200">
            BUSINESS
          </li>
          <li className="cursor-pointer hover:text-emerald-300 ease-in duration-200">
            SUPPORTING INDUSTRIES
          </li>
          <li className="cursor-pointer hover:text-emerald-300 ease-in duration-200">
            SUSTAINABILITY
          </li>
          <li className="cursor-pointer hover:text-emerald-300 ease-in duration-200">
            CAREERS
          </li>
          <li className="cursor-pointer hover:text-emerald-300 ease-in duration-200">
            BULLETIN
          </li>
          <li className="cursor-pointer hover:text-emerald-300 ease-in duration-200">
            CONTACT US
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div
        onClick={handleNav}
        className="sm:hidden z-10 absolute bg-slate-800/80 w-full p-3"
      >
        <FaBars
          size={20}
          className="cursor-pointer text-emerald-600 ml-[95%]"
        />
      </div>

      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "z-10 overflow-y-hidden sm:hidden ease-in duration-300 absolute text-accent left-0 top-0 h-screen w-full bg-slate-800/95 px-4 py-7 flex flex-col"
            : "z-10 absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="text-2xl font-normal text-center text-slate-300  flex flex-col gap-4 border-b-2 w-full py-5">
          <li className="cursor-pointer hover:text-emerald-300 ease-in duration-300">
            ABOUT US
          </li>
          <li className="cursor-pointer hover:text-emerald-300 ease-in duration-300">
            BUSINESS
          </li>
          <li className="cursor-pointer hover:text-emerald-300 ease-in duration-300">
            SUPPORTING INDUSTRIES
          </li>
          <li className="cursor-pointer hover:text-emerald-300 ease-in duration-300">
            SUSTAINABILITY
          </li>
          <li className="cursor-pointer hover:text-emerald-300 ease-in duration-300">
            CAREERS
          </li>
          <li className="cursor-pointer hover:text-emerald-300 ease-in duration-300">
            BULLETIN
          </li>
          <li className="cursor-pointer hover:text-emerald-300 ease-in duration-300">
            CONTACT US
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
