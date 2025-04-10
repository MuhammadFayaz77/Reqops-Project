"use client";



import Image from 'next/image'
import RoundedTriangle from '../Components/RoundedTriangle';

const CalendlyWidget = () => {
  return (
   <div className='relative w-full flex flex-col items-center bg-[#EC57A8]  pb-9  '>
          <div className="absolute lg:left-[86%] md:left-[30%] left-[10%] lg:block hidden ">
        <RoundedTriangle style={{ background: "#150E24" }} />
      </div>
      <div className="absolute lg:left-[86%] md:left-[30%] left-[10%] lg:hidden block ">
        <RoundedTriangle style={{ background: "#5B5AF7" }} />
      </div>
     <div className="flex justify-center items-center   mt-16">
     
     <div className="calendly-container w-[90%] md:w-[90%] flex flex-col md:flex-row justify-between items-center bg-[#EC57A8] p-4 space-y-8 ">
       
       
       <div className="w-full md:w-[40%] text-start text-4xl md:text-7xl font-bold text-white lg:text-center md:text-left">
         <h1>If You Can’t Tick Them <br />All…</h1>
         <h1>It’s Time to Book a Call!</h1>
       </div>

     
       <div className="flex justify-center md:justify-end w-full md:w-[40%]">
         <Image
           src="Images/Calendly.svg"
           width={500}
           height={500}
           alt="Calendly logo"
           className="max-w-full"
         />
       </div>
       
     </div>
   </div>
   </div>
  );
};

export default CalendlyWidget;
