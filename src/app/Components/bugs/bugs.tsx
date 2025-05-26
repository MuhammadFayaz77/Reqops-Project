import React from "react";
import RoundedTriangle from "../RoundedTriangle";
import Image from "next/image";
import {
  ImageArray,
  SecurityQuestionsArry,
  SecurityQuestionsArry2,
} from "@/app/Utails/securityQuestions";


function Bugs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden ">
      <div className="">
        <div className="bg-[#150E24] flex flex-col items-center justify-center">
          <div className="relative lg:left-[50%]   lg:m-[-2px]">
            <div className="relative right-16">
              {" "}
              <RoundedTriangle style={{ background: "#EDF0F5" }} />
            </div>
            <div>
              <Image
                src="Images/tindar.svg"
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
                  Preventing Bugs Before Customers Find Them
                </h3>
                {SecurityQuestionsArry2.map((item, index) => (
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

      <div className="flex flex-col w-full items-center justify-center bg-[#5B5AF7]">
        <div className="relative left-[14%] block lg:hidden m-[-6px]">
          <RoundedTriangle style={{ background: "black" }} />
        </div>

        <div className="flex ">
          {ImageArray.map((image, index) => (
            <div
              key={index}
              className="lg:relative lg:left-[80%] relative left-12   "
            >
              <Image
                src={image.src}
                width={70}
                height={70}
                alt={image.alt}
                className="lg:p-0 p-2  "
              />
              <p className="text-white lg:fonnt-bold    lg:text-[14px]    text-center">
                {image.alt}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center lg:pb-9">
          <div className="text-white lg:px-12 px-6">
            <h3 className="lg:text-5xl text-2xl  lg:leading-tight lg:w-[80%] w-[100%]  lg:mt-10 lg:pb-12 mt-5 pb-6">
              Works Smoothly on Every Device
            </h3>
            {SecurityQuestionsArry.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="p-[6px] rounded border-[#EC57A8] border-2"></span>
                <span className="text-white py-1 lg:text-lg text-[12px]">
                  {item.question}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bugs;
