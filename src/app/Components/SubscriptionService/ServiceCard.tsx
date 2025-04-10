"use client"
import React from "react";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  price: string;
  oldPrice?: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  oldPrice,
  description,
  features,
}) => {
  return (
    <div className="flex group  relative flex-col md:flex-row      w-full max-w-3xl  text-gray-800 " >
    
      
      <div className="w-full  md:p-8 md:w-2/3 hover:text-white ">
        <h2 className="text-xl md:text-2xl uppercase font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          {title}
        </h2>
        <div className="text-2xl md:text-3xl font-semibold mt-2">
        <span className="line-through text-gray-400 text-3xl font-bold">
            {oldPrice}
          </span>
          <span className="text-black  group-hover:text-white     font-bold text-3xl md:text-4xl ml-2">
            {price}
          </span>
          <span className="text-gray-500 text-sm ">/ per month</span>
        </div>
        <h1 className="text-xs md:text-sm uppercase font-bold text-[#5B5AF7] mt-2">
          Pause or Cancel Anytime
        </h1>
        <p className="text-[12px] text-gray-600 mt-2">
          {description}
        </p>
         <button className="mt-5 hidden sm:block w-full md:w-2/3 text-white py-2 rounded-lg font-semibold bg-[#5B5AF7] transition ">
          Start 7 Day Free Trial
        </button>
      </div>
     
      <div className="w-full md:w-1/3     text-center   ">
        <ul className=" lg:space-y-2 space-y-1 mt-2 mb-2 ">
          {features.map((feature, index) => (
            <li
              key={index}
              className="bg-[#A9A9F824]  text-[#737373]  font-bold  p-5 rounded-lg text-sm "
            >
              {feature}
            </li>
          ))}
        </ul>
        <button className="mt-2 lg:hidden w-full md:w-2/3 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition order-last md:order-none">
         Get In Touch
        </button>

      </div>
    </div>
  );
};

export default ServiceCard;
