"use client";

import { useEffect } from "react";
import "./hero.css"; // Import your CSS file for styling
const CalendlyWidget = () => {
  useEffect(() => {
    const scriptExists = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (!scriptExists) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="calendly-container w-full flex justify-between item-center bg-[#EC57A8] ">
  <div className="w-[30%] text-7xl ">
<h1>If You Can’t Tick Them All… 
It’s Time to Book a Call!</h1>
  </div>
     
      <div
        className="calendly-inline-widget  w-[60%]   "
        data-url="https://calendly.com/gaminghub4990/new-meeting"
        style={{  height: "600px" }}
      ></div>
   
    </div>
  );
};

export default CalendlyWidget;
