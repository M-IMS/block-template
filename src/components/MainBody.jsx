import React from "react";

import img_1 from "../assets/img_1.jpg";
import img_2 from "../assets/img_2.png";
import img_3 from "../assets/img_3.png";
import img_4 from "../assets/img_4.png";
import img_5 from "../assets/img_5.png";
import img_6 from "../assets/img_6.png";
import img_7 from "../assets/img_7.jpg";
import img_8 from "../assets/img_8.jpg";
import img_9 from "../assets/img_9.jpg";

const MainBody = () => {
  return (
    <div className="w-full sm:pl-[16%]">
      {/* Top section */}
      <div className="flex">
        <img src={img_1} alt="" className="w-[65%] sm:w-[70%]" />
        <div className="">
          <img src={img_7} alt="" className="h-[50%]" />
          <img src={img_4} alt="" className="h-[50%]" />
        </div>
      </div>

      {/* Center Section */}
      <div className="flex">
        <div className="">
          <img src={img_8} alt="" className="h-[50%]" />
          <img src={img_5} alt="" className="h-[50%]" />
        </div>
        <img src={img_2} alt="" className="w-[65%] sm:w-[70%]" />
      </div>

      {/* Buttom Section */}
      <div className="flex">
        <img src={img_3} alt="" className="w-[65%] sm:w-[70%]" />
        <div className="">
          <img src={img_9} alt="" className="h-[50%]" />
          <img src={img_6} alt="" className="h-[50%]" />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
