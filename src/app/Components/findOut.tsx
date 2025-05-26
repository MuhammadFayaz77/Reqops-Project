import React from "react";
import RoundedTriangle from "./RoundedTriangle";

function FindOut() {
  return (
    <div className="bg-[#EDF0F5]  overflow-hidden  flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
      <div className="  relative   lg:left-[60%]  md:left-[30%]  left-[25%] m-[-16px]    lg:m-[-2px]">
        <RoundedTriangle
          style={{
            background: "#150E24",
          }}
        />
      </div>
      <h1 className="py-2   px-9 rounded-full bg-[#ec57a8]  mt-16  "></h1>

      <h1 className="  lg:w-[50%] lg:text-3xl text-2xl sm:text-3xl md:text-4xl pt-6 sm:pt-16 font-bold text-center text-black">
        Does Your App Work Like It Should?  (Let’s Find Out!)
      </h1>
      
      <p className="text-center  text-[#333333] lg:text-2xl pt-6 pb-14 sm:pt-6 sm:pb-16">
        Request whatever you need, from test plans to user story validation.
      </p>
    </div>
  );
}

export default FindOut;
