
"use client"
import { useEffect, useRef } from "react";

const RoundedTriangle = ({ style }: { style?:any}) => {
  const triangleRef = useRef<any>(null);

  useEffect(() => {
    if (triangleRef.current) {
      triangleRef.current.style.setProperty("--r", "30px");//25px
    }
  }, []);

  return (
    <div
      ref={triangleRef}
      className="relative overflow-hidden lg:right-[190%] w-[100px] sm:w-[100px] md:w-[140px] md:h-[70px] lg:w-[180px] lg:h-[100px] h-[55px]"
      style={{
        WebkitMask: `
        
          linear-gradient(0deg, #0000 calc(var(--r)/1.414), #000 0),
          radial-gradient(var(--r) at 50% calc(100% - var(--r)*1.414), #000 100%, #0000 101%)
        `,
        clipPath: "polygon(50% 100%, 100% 0, 0 0)",
        background: style?.background,
      }}
    />
  );
};

export default RoundedTriangle;
