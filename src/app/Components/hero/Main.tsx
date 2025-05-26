import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Image from 'next/image'
import PricingCard from "./card"; 
interface Tester {
  name: string;
  role: string;
  company: string;
  image: string;
  size: string;
  verified?: string;
  style?: string;
  move?: string;
  nameStyle?: string;
}

const testers: Tester[] = [
  {
    name: "Mei Lai",
    role: "QA Automation Specialist",
    verified: "Verified Expert in Selenium and Automated Testing Frameworks",
    style: "lg:text-[10px]  ",
    company: "ZenWave Systems",
    image: "Images/g1.svg",
    size: " lg:w-[75%]    lg:text-[5px]   ",
    move: " lg:mx-5 mx-1 ",
  },
  {
    name: "Nguyen Tran",
    role: "QA Automation Engineer",
    company: "BrightCode Systems",
    verified: "Verified Expert in End-to-End Testing and Automated Frameworks",
    style: "lg:text-[10px] ",
    image: "Images/g2.svg",
    size: "lg:w-[80%] lg:text-[5px]  w-[90%]  ",
    move: " lg:mt-32 mt-20 ",
  },
  {
    name: "Emma John",
    role: "Senior QA Engineer",
    company: "ApexSoft Solutions",
    verified: "Verified Expert in Functional Testing and Regression Suites",
    style: "lg:text-[10px]",
    image: "Images/g3.svg",
    size: "lg:w-[100%] lg:text-[5px]    ",
    move: "lg:mt-24 mt-10  ",
  },
  {
    name: "Ahmad Faizal",
    role: "QA Analyst",
    company: "FlowBridge Labs",
    verified: "Verified Expert in Manual Testing and API Validation",
    style: "lg:text-[10px]",
    image: "Images/g4.svg",
    size: "lg:w-[80%]    lg:text-[5px] ",
    move: " lg:mx-[-8px] lg:relative lg:bottom-52 absolute mt-44 w-[30%] ",
  },
  {
    name: "Daniel White",
    role: "QA Team Lead",
    company: "ZenWave Systems",
    verified:
      "Verified Expert in and Requirements Validation",
    style: " lg:text-[10px]",
    image: "Images/g5.svg",
    size: "lg:w-[70%] lg:text-[5px]  ",
    move:"absolute mt-[75%] ml-[32%] w-[28%] lg:mt-10 lg:ml-0 lg:relative"
,
  },
  {
    name: "Rohit Sharma",
    role: "Principal QA Engineer",
    verified:
      "Verified Expert in Performance Testing and Requirements Validation",
    style: "  lg:text-[10px]",
    company: "CodeClimb Innovations",
    image: "Images/g6.svg",
    size: "lg:w-[110%]  absolute mt-[75%] ml-[64%] w-[36%] lg:mt-1 lg:ml-0 lg:relative ",
  },
  {
    name: "Emma son",
    role: "Senior QA Engineer ",
    company: "ApexQA Solutions",
    verified: "Verified Expert in API Testing and Test Case Writing",
    style: "lg:text-[6px]  ",
    image: "Images/g7.svg",
    size: "lg:w-[60%] lg:text-[4px]",
      move:"absolute mt-[110%] ml-[2%]  lg:mt-[-70%]   w-[28%] lg:mt-10 lg:ml-0 lg:relative"

 
  },
];

function Main() {
  return (
    <div className="relative mt-24     flex  flex-col sm:flex-row sm:items-start justify-center ">
     <div className="absolute top-32 left-0 w-ful -z-10 sm:hidden overflow-hidden">
 <Image
      src="/Images/sm.svg"
      width={50}
      height={50}
      alt="Picture of the author"
      className="w-full object-top "
    />
</div>


      <div className="absolute inset-0 -z-10 hidden sm:block">
    <Image
      src="/Images/lg.svg"
      width={50}
      height={50}
      alt="Picture of the author"
      className='w-full h-full'
    />
      </div>

      <div className="relative z-0 flex     "> {/*  z-10  tha */}
        <div className="grid  grid-cols-3 gap-2 lg:w-[90%]  lg:mt-[35%] mt-24    ">
          {testers.map((tester, index) => (
            <div key={index} className={`  ${tester.move}      ${tester.size}`}>
              <Image
                src={tester.image}
                alt={tester.name}
                className="  w-full lg:rounded-t-2xl rounded-t-md     "
              />

              <div className=" px-1 lg:px-3  bg-white lg:py-2 lg:rounded-b-2xl rounded-b-md ">
                <h3 className=" text-[10px] lg:text-base lg:font-semibold lg:leading-tight ">
                  {tester.name}
                </h3>
                <p className={` text-[6px] lg:text- text-gray-500  ${tester.style}  py-1`}>
                  {tester.role}
                </p>
                <div className="flex justify-center gap-1 text-[5px] lg:text-[15px]  ">
            <h1><IoIosCheckmarkCircle  color="blue" /></h1>
                 <h1 className="flex text-[4px] lg:text-[9px] font-samibold  text-[#5B5AF7]  ">   {tester.verified}</h1>
              
                </div>
                <p
                  className={`lg:text-[9px] text-[4px]  text-gray-400 leading-tight py-1`}
                >
                  {tester.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:mt-[30%] mt-[90%]  mb-8  ">
      <PricingCard/>
      </div>
    </div>
  );
}

export default Main;
