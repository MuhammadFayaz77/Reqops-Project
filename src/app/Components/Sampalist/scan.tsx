"use client";
import { useState } from "react";

const ScanStats = () => {
  // State for scan counts
  const [weeklyScan, setWeeklyScan] = useState(0);
  const [monthlyScan, setMonthlyScan] = useState(1);
  const [totalScan, setTotalScan] = useState(1);

  // State for checkbox checked status
  const [isWeeklyChecked, setIsWeeklyChecked] = useState(false);
  const [isMonthlyChecked, setIsMonthlyChecked] = useState(false);
  const [isTotalChecked, setIsTotalChecked] = useState(false);

  // Labels 
  const scanLabels = ["Weekly scan", "Monthly scan", "Total scan"];
  const scanValues = [weeklyScan, monthlyScan, totalScan];
  const checkStates = [isWeeklyChecked, isMonthlyChecked, isTotalChecked];
  const checkSetters = [setIsWeeklyChecked, setIsMonthlyChecked, setIsTotalChecked];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-14    ">
      {scanLabels.map((label, index) => (
        <div
          key={index}
          className="border-red-200 bg-[#FFFFFF]  p-7  shadow-[1px_0px_4px_2px_rgba(227,_60,_18,_0.19)]  flex flex-col items-center justify-center rounded-sm"
        >
          <div className="flex items-center space-x-3 ">
            <div
              className={`w-5 h-5 rounded-full border-2 border-[#E33C12] flex items-center justify-center cursor-pointer ${
                checkStates[index] ? "bg-[#E33C12]" : "bg-transparent"
              }`}
              onClick={() => checkSetters[index](!checkStates[index])}
            >
              {checkStates[index] && (
                <svg
                  className="w-5 h-5 text-white rounded-full "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>

            
            <span className="text-lg font-bold  flex flex-wrap text-center gap-2 ">
              {label} <h1 className="flex text-base justify-center items-center "> (<h1 className="text-[#E33C12] ">{scanValues[index]}</h1>)</h1>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScanStats;
