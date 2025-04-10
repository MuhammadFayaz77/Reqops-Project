import React from "react";
import RoundedTriangle from "../RoundedTriangle";
import Image from "next/image";
import {
  ImageArray,
  SecurityQuestionsArry,
  SecurityQuestionsArry3,
  SecurityQuestionsArry4,
} from "@/app/Utails/securityQuestions";
import Background from "../Background";

function Data() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden  ">
      <div className="flex flex-col w-full items-center justify-center lg:bg-[#5B5AF7] bg-black">
        <div className="relative right-20 block lg:hidden m-[-6px]">
          <RoundedTriangle style={{ background: "#5B5AF7" }} />
        </div>

        <div className="flex  ">
          <div className="lg:relative     lg:left-[280%]  top-10 lg:m-[-2px] m-[-12px] lg:mt-0  ">
            <Image
              src="Icons/lock.svg"
              width={70}
              height={70}
              alt=""
              className="lg:p-0 p-2  lg:ml-0 ml-44 "
            />
          </div>
        </div>

        <div className="flex justify-center items-center  pb-9">
          <div className="text-white lg:px-12 px-6 ">
            <h3 className="lg:text-5xl text-3xl  mb-9 mt-10 lg:leading-tight w-[100%]  lg:mt-30 lg:pb-12">
              Security & Data Protection
            </h3>
            {SecurityQuestionsArry3.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="p-[6px] rounded border-[#EC57A8] border-2"></span>
                <span className="text-white  py-1 lg:text-lg text-[12px]">
                  {item.question}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <div className="lg:bg-[#150E24] bg-[#5B5AF7]  flex flex-col items-center justify-center">
          <div className="relative lg:left-[50%]   lg:m-[-2px]">
            <div className="relative lg:right-16 ">
           
              <RoundedTriangle style={{ background:  "#5B5AF7",  }} />
            </div>
            <div>
              <Image
                src="Icons/light.svg"
                width={120}
                height={110}
                alt="Picture of the author"
                className=" p-3  lg:absolute absolute top-3 left-24 lg:top-1/4 lg:-left-[45%] "
              />
            </div>
          </div>

          <div className="flex flex-col w-full items-center justify-center pb-12 ">
            <div className="flex justify-center items-center  ">
              <div className="text-white lg:px-16 px-6  ">
                <h3 className="lg:text-5xl text-2xl lg:leading-tight mt-10 pb-6  pt-10 lg:pb-12">
                Fast, Smooth, & Reliable Performance
                </h3>
                {SecurityQuestionsArry4.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center  pb-4 lg:pb-0  lg:space-x-2"
                  >
                    <span className="p-[6px] rounded border-[#EC57A8] border-2"></span>
                    <span className="text-white lg:py-1 text-[12px] px-1  lg:text-lg  ">
                      {item.question}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
