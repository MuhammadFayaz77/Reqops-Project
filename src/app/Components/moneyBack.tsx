import React from "react";
import RoundedTriangle from "./RoundedTriangle";
import Image from "next/image";

function MoneyBack() {
  return (
    <div className="bg-[#150E24] relative w-full flex flex-col items-center px-4 sm:px-8">
    
      <div className=" m-[-12px]  lg:m-[-2px] relative right-16    ">
        <RoundedTriangle
          style={{
            background: "#EDF0F5",
          }}
        />
      </div>

      
      <div className="flex flex-col-reverse md:flex-row items-center justify-end  md:gap-0 w-full max-w-6xl">
       
        <div className="text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
            100% Money Back
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
            Guarantee
          </h1>

          <div className="w-full max-w-xl mt-6 mb-9 ">
            <p className="lg:text-lg sm:text-xl text-sm md:text-2xl text-center md:text-left text-white lg:font-bold">
             <span className="lg:text-xl"> Work with us for</span > 4 weeks -<span className="lg:text-xl"> see results or</span> get a full refund. <span className="lg:text-xl ">No risk, just reliable testing.</span>
            </p>
          </div>
         <div className="flex flex-col items-start md:items-start ">
         <button className=" px-16  lg:mt-7  rounded-lg py-2 mb-14 bg-[#5B5AF7]">Start Now</button>
         </div>
        </div>
        <div className=" mt-4">
          <Image
            src="/Images/laptop.svg"
            width={500}
            height={500}
            alt="Money Back Guarantee"
            className="w-[100%] sm:w-[90%] md:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}

export default MoneyBack;
