import { ShipArry } from "@/app/Utails/ship";
import ShipCard from "./shipCard";

import RoundedTriangle from "../RoundedTriangle";

export default function Ship() {
  return (
    <div className="relative  overflow-hidden  bg-[#150E24] flex flex-col items-center text-center text-white px-4  ">
       <div className="absolute lg:relative  left-[15px] m-[-10px]  ">
        <RoundedTriangle style={{ background:  "#EDF0F5" }} />
      </div>
      <div className="relative text-white text-5xl sm:text-7xl md:text-9xl font-bold mt-16 md:mt-32">
        <h1>Ship Faster.</h1>
        <h1>Better. Smarter.</h1>
      </div>

      <div className="relative w-full max-w-2xl Lg:px-4 mt-6">
        <p className="text-sm lg:text-lg sm:text-2xl text-center">
        Scale your app development with battle-tested testing methodologies combined with AI-driven automation.
        </p>
      </div>

     <div
        className="absolute -inset-1 mt-[37%]    bg-cover bg-end opacity-15 h-[90vh] "
        style={{ backgroundImage: "url('/Images/Group.png')" }}
      ></div> 

      <div className="relative flex flex-wrap justify-center gap-6 p-4 pb-12  lg:pb-20 w-full max-w-6xl mt-8">
        {ShipArry.map((items, index) => (
          <div
            key={index}
            className="border-[#5B5AF7] bg-opacity-60 bg-[#22163A] border p-4  rounded-2xl shadow-lg w-full sm:w-[48%] md:w-[30%]"
          >
            <ShipCard
              title={items.title}
              value={items.value}
              smallValue={items.smallValue}
              description={items.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
