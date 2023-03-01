import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "../components/pages/AboutUs";
import Business from "../components/pages/Business";
import SupportingIndustries from "../components/pages/SupportingIndustries";
import Sustainability from "../components/pages/Sustainability";
import Careers from "../components/pages/Careers";
import Bulletin from "../components/pages/Bulletin";
import ContactUs from "../components/pages/ContactUs";


const MainBody = () => {
  return (
    <div className="w-full sm:pl-[16%]">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about_us" element={<AboutUs/>} />
        <Route path="/business" element={<Business/>} />
        <Route path="/support_industries" element={<SupportingIndustries/>} />
        <Route path="/sustainability" element={<Sustainability/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/bulletin" element={<Bulletin/>} />
        <Route path="/contact_us" element={<ContactUs/>} />
      </Routes>
     
      
    </div>
  );
};

export default MainBody;
