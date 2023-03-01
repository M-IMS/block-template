import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "../components/pages/AboutUs";


const MainBody = () => {
  return (
    <div className="w-full sm:pl-[16%]">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about_us" element={<AboutUs/>} />
      </Routes>
     
      
    </div>
  );
};

export default MainBody;
