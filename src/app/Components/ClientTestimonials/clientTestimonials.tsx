import StarRate from "@/app/star";
import Image from "next/image";

const ClientTestimonials = ({
  image,
  name,
  role,
  platform,
  description,

}: {
  image: string;
  name: string;
  role?: string;
  platform: string;
  description: string;
  video: string;
}) => {
  return (
    <div className=" rounded-xl bg-[#FFFFFF] shadow-lg flex flex-col md:flex-row w-full  mx-auto"
    
    >
     
      <div className="flex flex-col px-6 py-2 lg:py-4 w-full md:w-[80%]">
        <div className="flex items-center py-1 ">
          <div>
            <Image
              src={image}
              width={80}
              height={80}
              className="rounded-lg"
              alt={name}
            />
          </div>
          <div className="px-3">
            <h1 className="lg:text-2xl text-xl text-black">{name}</h1>
            <p className="text-gray-500 lg:text-[12px] text-[10px]">{role}</p>
            <div className="flex items-center text-[10px]">
              <span className="flex gap-1 justify-center items-center text-[16px] text-[#2867B2] font-bold">
                {platform}
                <h1 className="bg-[#2867B2] text-white w-5 h-5 flex justify-center items-center rounded">
                  in
                </h1>
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="lg:text-[12px] text-[10px] text-gray-500 mt-2">{description}</p>
          <div className="flex lg:gap-2 gap-0 mt-2">
            <StarRate/>
          </div>
        </div>
      </div>
    
      <div className="flex items-center justify-center w-full md:w-[70%] p-4 h-full ">
        <Image
          src="Images/VI.svg"
          width={250}
          height={300}
          className="rounded-lg h-full object-cover"
          alt="video"
        />
      </div>
    </div>
  );
};

export default ClientTestimonials;
