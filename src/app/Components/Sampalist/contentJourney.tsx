"use client";
import { SlArrowDown } from "react-icons/sl";


import React from "react";
;
import { FaUser } from "react-icons/fa";
interface CardProps {
  date: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ date, tags }) => {
 
  return (
    <div className="bg-red-50 border border-red-300 rounded-[12px] p-3 w-full  ">
     <div className="flex items-center   text-gray-900 font-medium bg-red-50 px-3  rounded-md">
      <span>Sort by:</span>
      <div className="relative ml-2 border lg:p-1 bg-[#FFFFFF] rounded-s-lg rounded-r-md ">
        <select className=" appearance-none bg-transparent bg-[#FFFFFF] text-sm  font-medium  focus:outline-none pr-8">
          <option className="px-9" >Latest date</option>
          <option>Oldest date</option>
          
        </select>
        <span className=" py-[9px] border-opacity-30 px-[3px] absolute border-l-2 border-red-500  right-1 top-1/2  -translate-y-1/2 bg-[#FFFFFF] text-xs"><h1 className="px-[2px] font-bold text-[#E33C12]"><SlArrowDown /></h1>
        </span>
      </div>
    </div>
      <div className="flex items-center space-x-3 space-y-4">
        <div className="bg-red-500 text-white rounded-full p-2 mt-4  flex items-center justify-center">
          <span className="text-xl   font-bold"><FaUser  />
          </span>
        </div>
        <div>
          <p className="text-gray-800">{tags.join(", ")}</p>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="px-6 mr-5 border-[1px] border-[#E33C12] hover:text-[#FFFF] text-red-500 rounded-[3px] hover:bg-[#E33C12] transition">
          Report
        </button>
      </div>
    </div>
  );
};


export default Card;

function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
