"use client";
import React from "react";
import Image from "next/image";
import Index from "./Index";
import Chart from "./Chart";
import Buttons from "./buttons";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import ScanStats from "./scan";
import ScatterChart from "./scatterchart";
import UploadComponent from "./uploadSamples";
import App from "./model/button";

function Sampalist() {
  return (
    <>
    <div className="flex flex-col lg:flex-row w-full bg-[#FFFFFF]">
    
    <div className="w-full lg:w-[20%] bg-black text-white flex flex-col p-4">
      <Buttons />
    </div>

  
    <div className="w-full  sm:px-6 lg:px-9">
      <div className="py-4 space-y-5">
      
        <Image
          src="Images/Slogo.svg"
          width={160}
          height={160}
          alt="Picture of the author"
        />

     
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
            Performance Overview
          </h1>
          <p className="text-gray-500 px-2 sm:px-7">
            <HiAdjustmentsHorizontal size={30} className="text-black" />
          </p>
        </div>
      </div>

      
      <Chart />
      <ScanStats />

     <App/>
      <div className="flex flex-col lg:flex-row gap-5">
        <Index />
        <ScatterChart />
      </div>
    </div>
    
  </div>
  <UploadComponent/>
  </>
  );
}

export default Sampalist;
