import React from "react";

import img_2 from "../../assets/img_2.png";
import img_3 from "../../assets/img_3.png";
import img_4 from "../../assets/img_4.png";
import img_5 from "../../assets/img_5.png";
import img_6 from "../../assets/img_6.png";
import img_7 from "../../assets/img_7.jpg";
import img_8 from "../../assets/img_8.jpg";
import img_9 from "../../assets/img_9.jpg";

const Home = () => {
  return (
    <div className="">
      {/* Top section */}
      <div className="flex sm:h-screen">
        <div className="w-[65%] sm:w-[70%] relative">
          <div className="bg-black/30 absolute top-0 left-0 w-full h-full text-center flex flex-col justify-center items-center gap-4 sm:gap-6">
            <p className="sm:text-xl font-semibold text-stone-600">Sub-Title</p>
            <h1 className="sm:text-5xl font-extrabold text-stone-600 border-t-2 border-b-2 border-stone-400 sm:border-stone-600">
              - Title -
            </h1>
            <button className="sm:text-2xl font-extrabold text-white sm:w-fit sm:h-fit p-3 bg-emerald-600">
              DISCOVER MORE
            </button>
          </div>
          <img
            src={"https://source.unsplash.com/random/400x400/?solid,color"}
            alt=""
            className="h-[100%] sm:w-full sm:h-screen object-cover"
          />
        </div>
        <div className="w-[35%]">
          <div className="relative h-[50%]">
            <div className="bg-black/30 absolute top-0 left-0 w-full h-full" />
            <img
              src={"https://source.unsplash.com/random/?micro,machine"}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[50%] text-center flex flex-col justify-center sm:gap-6">
            <h1 className="sm:text-5xl font-extrabold text-stone-600 opacity-60">
              - Title -
            </h1>
            <p className="sm:text-xl font-semibold text-stone-600 opacity-60">
              Sub-Title
            </p>
            <button className="sm:text-2xl font-extrabold text-white opacity-60 mx-1 sm:w-fit sm:h-fit p-3 sm:ml-[29%] bg-emerald-600">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex sm:h-screen">
        <div className="w-[35%]">
          <div className="relative h-[50%]">
            <div className="bg-black/30 absolute top-0 left-0 w-full h-full" />
            <img
              src={"https://source.unsplash.com/random/?micro,solid"}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[50%] text-center flex flex-col justify-center sm:gap-6">
            <h1 className="sm:text-5xl font-extrabold text-stone-600 opacity-60">
              - Title -
            </h1>
            <p className="sm:text-xl font-semibold text-stone-600 opacity-60">
              Sub-Title
            </p>
            <button className="sm:text-2xl font-extrabold text-white opacity-60 border mx-1 sm:w-fit sm:h-fit p-3 sm:ml-[29%] bg-emerald-600">
              DISCOVER MORE
            </button>
          </div>
        </div>
        <div className="w-[65%] sm:w-[70%] relative">
          <div className="bg-black/30 absolute top-0 left-0 w-full h-full text-center flex flex-col justify-center items-center gap-4 sm:gap-6">
            <p className="sm:text-xl font-semibold text-stone-600">Sub-Title</p>
            <h1 className="sm:text-5xl font-extrabold text-stone-600 border-t-2 border-b-2 border-stone-400 sm:border-stone-600">
              - Title -
            </h1>
            <button className="sm:text-2xl font-extrabold text-white sm:w-fit sm:h-fit p-3 bg-emerald-600">
              DISCOVER MORE
            </button>
          </div>
          <img
            src={"https://source.unsplash.com/random/400x400/?solid"}
            alt=""
            className="h-[100%] sm:w-full sm:h-screen object-cover"
          />
        </div>
      </div>

      {/* Buttom Section */}
      <div className="flex sm:h-screen">
        <div className="w-[65%] sm:w-[70%] relative">
          <div className="bg-black/30 absolute top-0 left-0 w-full h-full text-center flex flex-col justify-center items-center gap-4 sm:gap-6">
            <p className="sm:text-xl font-semibold text-stone-600">Sub-Title</p>
            <h1 className="sm:text-5xl font-extrabold text-stone-600 border-t-2 border-b-2 border-stone-400 sm:border-stone-600">
              - Title -
            </h1>
            <button className="sm:text-2xl font-extrabold text-white sm:w-fit sm:h-fit p-3 bg-emerald-600">
              DISCOVER MORE
            </button>
          </div>
          <img
            src={"https://source.unsplash.com/random/400x400/?moon"}
            alt=""
            className="h-[100%] sm:w-full sm:h-screen object-cover"
          />
        </div>
        <div className="w-[35%]">
          <div className="relative h-[50%]">
            <div className="bg-black/30 absolute top-0 left-0 w-full h-full" />
            <img
              src={"https://source.unsplash.com/random/?micro,galaxy"}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[50%] text-center flex flex-col justify-center sm:gap-6">
            <h1 className="sm:text-5xl font-extrabold text-stone-600 opacity-60">
              - Title -
            </h1>
            <p className="sm:text-xl font-semibold text-stone-600 opacity-60">
              Sub-Title
            </p>
            <button className="sm:text-2xl font-extrabold text-white opacity-60 border mx-1 sm:w-fit sm:h-fit p-3 sm:ml-[29%] bg-emerald-600">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
