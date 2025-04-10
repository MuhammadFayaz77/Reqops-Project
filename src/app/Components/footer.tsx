import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="w-full bg-[#0B021F] py-6 px-4">
      <div className="w-[95%] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        
        <div className="flex flex-col items-center md:items-start gap-7 text-center md:text-left">
          <Image
            src="Icons/mainLogo.svg"
            alt="Reqops Logo"
            width={100}
            height={100}
          />
          <h1 className="text-[#FFFFFF] hidden sm:block  text-sm">
            © 2024 Reqops. Made with love in Sydney, Australia.
          </h1>
        </div>

       <div className="flex justify-center items-center gap-8   ">
        <div className="flex flex-col md:flex-row gap-4 text-white text-sm">
          <span className="cursor-pointer hover:text-gray-400">Privacy Policy</span>
          <span className="cursor-pointer hover:text-gray-400">Terms & Conditions</span>
          <span className="cursor-pointer hover:text-gray-400">Contact</span>
        </div>

   
        <button className="p-2 px-4 border rounded-xl border-[#f0f0f0] text-white hover:bg-[#5B5AF7] transition-all duration-300 hidden sm:block">
          Book A Call
        </button>
        
        </div>
      </div>
     
    </div>
  );
}

export default Footer;
