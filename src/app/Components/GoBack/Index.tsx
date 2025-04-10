"use client";
import { GoBackArry } from "@/app/Utails/GoBackArry";
import RoundedTriangle from "../RoundedTriangle";
import GoBackCard from "./goBackCard";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export default function GoBack() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px se choti screen par slider enable
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1, // Medium screen par 2 slides
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative overflow-hidden border-black  flex flex-col items-center text-center">
      <div className="lg:m-[-1px]  lg:relative  absolute lg:left-[45%] m-[-9px] left-[60%]  ">
        <RoundedTriangle style={{ background: "#EC57A8" }} />
      </div>
   <div className="mt-16">
   <div className="w-[5%] px-8 lg:px-10 py-2  rounded-full bg-[#EC57A8] "></div>
   </div>

      <div className="py-0 lg:py-10 px-4 sm:px-6 lg:px-8  pt-8">
  <h1 className="flex flex-col sm:flex-row flex-wrap items-center sm:items-center text-2xl sm:text-2xl lg:text-4xl  sm:font-bold leading-tight">
    We're talking&nbsp;
    <span className="text-2xl sm:text-5xl lg:text-[70px] font-bold text-black">
      "You’ll Never Go Back"
    </span>
    &nbsp;good.
  </h1>
</div>


      <div className="lg:w-[68%] lg:text-pretty lg:text-lg lg:mt lg:mb-16 w-[90%] text-sm pt-7">
        <p>
          Our proprietary system combines AI-driven test automation and manual
          testing expertise to deliver unmatched results. ReqOps Test Assist
          replaces inconsistent freelance testers an other and expensive QA agencies for
          one flat monthly fee, with testing deliverables provided so fast you
          won’t want to go anywhere else.
        </p>
      </div>

      {/* Large Screen - Normal Cards */}
{!isMobile ? (
  <div className="relative flex flex-wrap justify-center gap-6 lg:pb-20 w-full max-w-6xl mt-8">
    {GoBackArry.map((items, index) => (
      <div key={index} className="bg-[#FFFFFF] border rounded-2xl shadow-lg overflow-hidden w-full sm:w-[48%] md:w-[30%] relative">
        <GoBackCard {...items} />
        {/* Card-specific content */}
        {index === 4 && (
          <div className="absolute bottom-[43%] left-[60%] transform -translate-x-1/2 flex gap-2 bg-[#FFFFFF] rounded-md shadow-[-3px_-1px_5px_0px_#00000024] p-2">
            <button className="border p-1 px-3 hover:bg-[#5B5AF7] text-[#5B5AF7] rounded-md border-[#5B5AF7] hover:text-white">
              Pause
            </button>
            <button className="border p-1 px-3 hover:bg-[#5B5AF7] text-[#5B5AF7] rounded-md border-[#5B5AF7] hover:text-white">
              Cancel
            </button>
          </div>
        )}
        {index === 3 && (
          <div className="absolute z-10 bottom-[14%] left-[32%] transform -translate-x-1/2 flex gap-2 px-5 border-white border-[1px] bg-[#EC57A8] text-[12px] rounded-full shadow-[-3px_-1px_5px_0px_#00000024] p-1">
            <button className="">Stakeholder</button>
          </div>
        )}
        {index === 3 && (
          <div className="absolute w-[90%] rounded-full bottom-[20%] left-[50%] shadow-[1px_-1px_4px_1px_#00000024] transform -translate-x-1/2 flex gap-2 bg-[#FFFFFF] items-center p-3">
            <div>
              <Image
                src="Images/gi.svg"
                width={70}
                height={70}
                alt="Picture of the author"
              />
            </div>
            <div className="flex flex-col text-start px-2">
              <h1 className="text-2xl font-semibold">Maggie Tivoli</h1>
              <h1>Test Analyst</h1>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
) : (
  // Small Screen - Carousel
  <div className="w-full max-w-6xl mt-8">
    <Slider {...settings}>
      {GoBackArry.map((items, index) => (
        <div key={index} className="px-3">
          <div className="bg-[#FFFFFF] border realativ rounded-2xl shadow-lg overflow-hidden relative">
            <GoBackCard {...items} />
          </div>
       
          <div className="relative">
  {index === 4 && (
    <div className="absolute bottom-24 left-[60%] transform -translate-x-1/2 z-auto flex gap-2 bg-white rounded-md p-2 shadow-[-3px_-1px_5px_0px_#00000024]">
      <button className="border px-3 py-1 hover:bg-[#5B5AF7] text-[#5B5AF7] rounded-md border-[#5B5AF7] hover:text-white">
        Pause
      </button>
      <button className="border px-3 py-1 hover:bg-[#5B5AF7] text-[#5B5AF7] rounded-md border-[#5B5AF7] hover:text-white">
        Cancel
      </button>
    </div>
  )}
</div>

          {index === 3 && (
            <div className="absolute z-10 bottom-[14%] left-[32%] transform -translate-x-1/2 flex gap-2 px-5 border-white border-[1px] bg-[#EC57A8] text-[12px] rounded-full shadow-[-3px_-1px_5px_0px_#00000024] p-1">
              <button className="">Stakeholder</button>
            </div>
          )}
          {index === 3 && (
            <div className="absolute lg:w-[90%] rounded-full bottom-[20%] left-[50%] shadow-[1px_-1px_4px_1px_#00000024] transform -translate-x-1/2 flex bg-[#FFFFFF] items-center">
              <div>
                <Image
                  src="Images/gi.svg"
                  width={70}
                  height={70}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex flex-col text-start px-1">
                <h1 className="text-xl font-semibold">Maggie Tivoli</h1>
                <h1>Test Analyst</h1>
              </div>
              
            </div>
          )}
        </div>
      ))}
    </Slider>
  </div>
)}

    </div>
  );
}
