"use client";
import React, { useState } from "react";
import {
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { date: "10", value: 40000 },
  { date: "11", value: 50000 },
  { date: "12", value: 60000 },
  { date: "13", value: 45000 },
  { date: "14", value: 55000 },
  { date: "15", value: 60000 },
  { date: "16", value: 83234 },
  { date: "17", value: 5000 },
  { date: "18", value: 62000 },
  { date: "19", value: 700 },
  { date: "20", value: 58000 },
  { date: "21", value: 61000 },
  { date: "22", value: 54000 },
  { date: "23", value: 10 },
  { date: "24", value: 5000 },
];

const PerformanceChart: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState("This Month");

  return (
    <div className="p-6  bg-white border-[#FFE1CF69] border-2 rounded-xl   w-[100%] shadow-2xl shadow-[#E33C1230]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Performance Analytics</h2>
        <select
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
          className="   text-[#E33C12] font-semibold py-2  bg-[#F6F6F6] rounded-md focus:outline-none"
        >
          <option>This Month</option>
          <option>Last Month</option>
          <option>Last Months</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={380}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff4d4f" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#ff4d4f" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip cursor={{ strokeDasharray: "9  " }} />

          <XAxis
            dataKey="date"
            tick={{ fill: "#79877" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(value) => `${value}K`}
            axisLine={false}
            tickLine={false}
          />

          <CartesianGrid strokeDasharray="3  " vertical={false} stroke="#ccc" />

          <Area
            type="linear"
            dataKey="value"
            stroke="#ff4d4f"
            fill="url(#colorGradient)"
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
