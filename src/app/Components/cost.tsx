import React from "react";
import RoundedTriangle from "./RoundedTriangle";
import Image from "next/image";

function Cost() {
  return (
    <div className="bg-[#150E24] relative w-full flex flex-col items-center px-4    sm:px-8   lg:bottom-10 ">
      <div className="absolute lg:relative  left-[15px] m-[-1px] block lg:hidden ">
        <RoundedTriangle style={{ background:  "#EDF0F5" }} />
      </div>   <div className="absolute lg:relative  left-[15px] lg:m-[-2px] hidden lg:block ">
        <RoundedTriangle style={{ background:   "#5B5AF7" }} />
      </div>

      <div className="flex flex-col py-16 md:flex-row items-center justify-between   w-full max-w-6xl ">
        <div
          className="absolute inset-0 bg-no-repeat  lg:left-[25%] opacity-15 hidden lg:block"
          style={{ backgroundImage: "url('/Images/GroupCost.svg')  " }}
        ></div>
           <div
          className="absolute inset-0 bg-no-repeat  left-[26%] opacity-15 lg:hidden"
          style={{ backgroundImage: "url('/Images/Cost.svg')  " }}
        ></div>
        <div className="text-white text-start  px-5  md:text-left w-full md:w-1/2 pb-10">
          <h1 className="text-6xl sm:text-5xl md:text-8xl font-bold">
            Slash your testing costs <br />
            <span className="text-primary">by 80%</span>
          </h1>
        </div>

        <div className="text-white px-5 w-full md:w-1/2  lg:justify-center text-start lg:items-center md:items-start ">
          <h1 className="lg:w-[95%]   text-start  md:text-left  flex flex-col gap-8 ">
            <span className="lg:text-4xl text-2xl  font-bold  ">
              Hire On-demand QA Automation Engineers at a fraction of the cost!
            </span>
            <span className="lg:text-3xl text-xl  ">
              Cut through inefficiencies, reduce your costs, and ensure your app
              works perfectly every time.
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Cost;
