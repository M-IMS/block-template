import React from "react";
import { FaMobileAlt, FaGlobe, FaAddressBook } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const ContactUs = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Top Image section */}
      <div className="w-full h-80">
        <img
          src="https://source.unsplash.com/random/800x500/?contact"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Body section */}
      <div className="sm:mx-36 p-10 ">
        <h1 className="text-2xl font-bold text-start border-b-2 border-dotted border-emerald-200 pb-5 mb-5">
          Let's Talk
        </h1>
        <div className="flex flex-col sm:flex-row sm:flex-nowrap justify-between gap-20">
          <div className="flex">
            <FaMobileAlt size={40} className="text-slate-700/80 pr-4" />
            <ul className="text-slate-500/80">
              <li className="font-bold text-xl">Call</li>
              <li className=" font-medium italic">+880 1234 567 890</li>
            </ul>
          </div>
          <div className="flex">
            <GrMail size={50} className="text-slate-700/80 pr-4" />
            <ul className="text-slate-500/80">
              <li className="font-bold text-xl">Email</li>
              <li className=" font-medium italic">example@email.com</li>
            </ul>
          </div>
          <div className="flex">
            <FaGlobe size={50} className="text-slate-700/80 pr-4" />
            <ul className="text-slate-500/80">
              <li className="font-bold text-xl">Web-site</li>
              <li className=" font-medium italic">example.com</li>
            </ul>
          </div>
          <div className="flex">
            <FaAddressBook size={50} className="text-slate-700/80 pr-4" />
            <ul className="text-slate-500/80">
              <li className="font-bold text-xl">Address</li>
              <li className=" font-medium italic">Ploat No.</li>
              <li className=" font-medium italic">Road No.</li>
              <li className=" font-medium italic">Sector No.</li>
              <li className=" font-medium italic">Area</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
