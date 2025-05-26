"use client"
import React, { useState } from "react";

import { FaqsArry } from "../Utails/faqs";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
function Faqs() {
  const [status, setStatus] = useState(Array(FaqsArry.length).fill(false));

  const toggleStatus = (index: number) => {
    setStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = !newStatus[index];
      return newStatus;
    });
  };

  return (
   
   <div className="flex justify-center items-center flex-col w-full pb-28   ">
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl mb-16 text-black">FAQ’s</h1>
      
      <div className="flex justify-center  items-center w-full sm:w-[90%] md:w-[90%] lg:w-[80%] flex-col p-4">
      

        {FaqsArry.map((faq, index) => (
          <div
            key={index}
            className={`flex flex-col relative w-full  border-b-[1px] border-[#333333] `}
          >
            <h2 className="md:text-[20px] py-2 font-light text-[#333333]  ">{faq.question}</h2>
            <button
              onClick={() => toggleStatus(index)}
              className="absolute top-2 right-2 text-lg focus:outline-none"
            >
              {status[index] ? (
               
              
    <GoChevronUp  className="text-black"/>
              ) : (
           <GoChevronDown className="text-black" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                status[index] ? " opacity-100 max-h-[1000px]" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm font-light sm:text-sm md:text-base w-[95%] text-black b p-1">
                {faq.answer}
              </p>
            </div>
            
          </div>
        ))}
        
      </div>
      
    </div>
  );
}

export default Faqs;
