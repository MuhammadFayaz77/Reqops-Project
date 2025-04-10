"use client"
import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, Cell, CartesianGrid } from "recharts";

const data = [
  
  { x: 2, y: 2 },
  { x: 4, y: 4 },
  { x: 6, y: 6 },
 
];

export default function ScanChart() {
  return (
    <div className="w-[40%]  pt-10 ">
      <h2 className="text-2xl font-bold text-gray-700 py-3">Scans</h2>
      <div className="bg-white rounded-lg shadow-d border pt-7 shadow-[1px_0px_8px_2px_rgba(227,_60,_18,_0.19)] ">
      <ScatterChart width={310} height={260}  margin={{ right: 16,top:9 , left: -28  }}>
          <XAxis type="number" dataKey="x" tick={false} axisLine={false} tickLine={false} />
          <YAxis type="number" dataKey="y" tick={{ fill: "#aaa" }} axisLine={false} tickLine={false} />
          <CartesianGrid stroke="#ddd" vertical={false} />
          <Tooltip cursor={{ strokeDasharray: "9 " }} />
          <Scatter name="Scans" data={data}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="red" />
            ))}
          </Scatter>
        </ScatterChart>
      </div>
    </div>
  );
}
