"use client";
import Image from 'next/image'
import { useEffect, useState } from "react";
import Slider from "react-slick";
import ClientTestimonials from "@/app/Components/ClientTestimonials/clientTestimonials";
import { ClientTestimonialsArrry } from "@/app/Utails/Client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Client = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div
      className="relative p- "
     
    >
      <div className="absolute inset-0 hidden md:block" style={{
        backgroundImage:
          "url('/Images/clientbg1.svg'), url('/Images/clientbg2.svg')",
        backgroundPosition: "top, bottom",
        backgroundRepeat: "no-repeat, no-repeat",
        zIndex:-1,
      }} />
      <div className="absolute inset-0  md:hidden -z-10 flex flex-col items-center justify-center gap-16">
     <Image
      src="/Images/1.svg"
      width={50}
      height={50}
      alt="Picture of the author"
      className='w-full h-auto'
    />
      <Image
      src="/Images/2.svg"
      width={50}
      height={50}
      alt="Picture of the author"
      className='w-full h-auto'
    />
    </div>
      <div className="flex justify-center items-center py-16 lg:py-24 mb-20 w-full">
        <div className="w-[95%]">
          {isMobile ? (
            <Slider {...settings}>
              {ClientTestimonialsArrry.map((items, index) => (
                <div key={index}>
                  <ClientTestimonials
                    image={items.image}
                    name={items.name}
                    role={items.role}
                    platform={items.platform}
                    description={items.description}
                    video={items.video}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-5">
              {ClientTestimonialsArrry.map((items, index) => (
                <ClientTestimonials
                  key={index}
                  image={items.image}
                  name={items.name}
                  role={items.role}
                  platform={items.platform}
                  description={items.description}
                  video={items.video}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Client;
