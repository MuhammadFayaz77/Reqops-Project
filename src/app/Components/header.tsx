import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full text-black bg-[#EDF0F5] lg:h-[30vh] ">
      <div className="flex justify-center">
        <div className="flex w-[95%] justify-between pt-6 pb-6">
          <div>
            <Image
              src="/Icons/mainLogo.svg"
              width={150}
              height={150}
              alt="Picture of the author"
            />
          </div>
          <div className="flex gap-5">
            <button className="px-7 py-2 border rounded-xl border-[#5B5AF7] hover:text-white hover:bg-[#5B5AF7] text-base hidden sm:block">
              See Pricing
            </button>
            <button className="lg:px-7 px-3 border rounded-xl border-[#5B5AF7] hover:text-white hover:bg-[#5B5AF7]">
              Book A Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
