import Image from 'next/image'
import ServiceCard from "./ServiceCard";

const ServiceArry = [
  {
    title: "Unlimited Testing",
    value: "$499",
    description:
      "Unlimited Testing provides consistent, high-quality testing for teams that need ongoing support Best for teams with regular testing needs.",
    oldPrice: "$599",
    features: [
      "Supporting main software ",
      "24-hour house turnaround time",
      "Manual & Automation Engineering",
    ],
  },
  {
    title: "ADHOC",
    value: "$499",
    oldPrice: "$599",
    description:
      "Unlimited Testing provides consistent, high-quality testing for teams that need ongoing support Best for teams with regular testing needs.",
    features: [
      "Supporting 4 software developers",
      "24-hour turnaround time",
      "Manual & Automation Engineering",
    ],
  },
];

export default function Service() {
  return (
    <div
      className="flex relative justify-center items-center gap-8 flex-col md:flex-row p-3" style={  {minHeight: "140vh"}}   >
      <div className="absolute inset-0 hidden md:block"  style={{
  
        backgroundImage: "url('/Images/QA.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      
      }}
      /> <div className="absolute inset-0  md:hidden -z-10 flex flex-col items-center justify-center gap-48">
     <Image
      src="/Images/QAsmall.svg"
      width={50}
      height={50}
      alt="Picture of the author"
      className='w-full h-auto'
    />
      <Image
      src="/Images/QAsmall.svg"
      width={50}
      height={50}
      alt="Picture of the author"
      className='w-full h-auto'
    />
    </div>
    
    
 
      <div className="absolute sm:block hidden  top-[5%] sm:top-[15%] w-full px-4 lg:flex flex-col  space-y-6 items-center justify-center text-center ">
        <div className="bg-[#EC57A8] px-9 py-2  rounded-full "></div>
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-tight text-black">
          QA Testing as a Subscription Service
        </h1>
      </div>

      {ServiceArry.map((item, index) => (
        <div
          key={index}
          className="bg-white  relative  py-4  gap-0 rounded-[18px] w-full sm:w-[80%] md:w-[45%] mt-[4%] sm:mt-[50%] md:mt-36 px-3  hover:bg-[#150E24] transition duration-300"
        > 
          <ServiceCard
            title={item.title}
            price={item.value}
            description={item.description}
            features={item.features}
            oldPrice={item.oldPrice}
          />
        </div>
      ))}
    </div>
  );
}
