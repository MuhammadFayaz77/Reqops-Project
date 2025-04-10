import React from "react";

interface StatsCardProps {
  title: string;
  value: string;
  smallValue?: number | string;
  description: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, smallValue, description }) => {
  return (
    <div className="flex flex-col items-center   ">
      <p className="text-2xl  mb-4 pt-1  text-white  ">{title}</p>
      <div className="w-full h-[6px] rounded-full bg-[#EC57A8] "></div>
      <h2 className="lg:text-8xl text-6xl font-semibold lg:pt-5 pt-6 hidden lg:block">{value}</h2>
<h2 className="lg:text-8xl text-8xl font-semibold lg:pt-5 pt-6 block lg:hidden">{smallValue}</h2>

      <p className="text-lg text-gray-300 mt-5 lg:pb-5">{description}</p>
    </div>
  );
};

export default StatsCard;
