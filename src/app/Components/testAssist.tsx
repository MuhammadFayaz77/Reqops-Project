"use client"
import React, { useState } from "react";
import RoundedTriangle from "./RoundedTriangle";


export default function TestAssist() {
  const [showTriangle, setShowTriangle] = useState(false);

  return (
    <div className="bg-[#EDF0F5] relative  overflow-hidden   flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
      <div className="  relative    lg:left-[60%]  md:left-[30%]  left-[10%]">
      <RoundedTriangle 
  style={{
    background: "#150E24",
   
  }} 
/>

      </div>
      <h1 className="py-2 lg:px-9 px-7 rounded-full  mt-9  bg-[#ec57a8]"></h1>

      <h1 className="lg:text-4xl text-3xl sm:text-5xl md:text-6xl pt-6 sm:pt-9 font-bold text-center">
        ReqOps Test Assist
      </h1>

      <p className="text-center text-[#333333] text-lg sm:text-xl md:text-2xl w-full sm:w-[85%] md:w-[85%] mt-2 sm:mt-9">
        One subscription to streamline it all. 24 hour turn around time. Cancel or pause anytime.
        Book a 30-min intro call!👇🏼
      </p>

      <div className="flex flex-col sm:flex-row gap-4 py-10 sm:py-16   ">
        <button className="px-7 sm:px-16 py-2 rounded-xl bg-[#FFFFFF] border border-[#5B5AF7] text-[#5B5AF7] hover:bg-[#5B5AF7] hover:text-white  text-sm transition duration-300">
          Book A Call
        </button>
        <button className="px-7 sm:px-16 py-2 rounded-xl bg-[#FFFFFF] border border-[#5B5AF7] text-[#5B5AF7] hover:bg-[#5B5AF7] hover:text-white transition duration-300">
          See Pricing
        </button>
      </div>
    </div>
  );
}
