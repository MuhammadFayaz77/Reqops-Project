import React from "react";


interface Tester {
  name: string;
  role: string;
  company: string;
  image: string;
}

interface Plan {
  title: string;
  oldPrice: string;
  newPrice: string;
  description: string;
}

const testers: Tester[] = [
  { name: "Mei Lai", role: "QA Lead", company: "TechCorp", image: "#" },
  { name: "Nguyen Tran", role: "Automation Engineer", company: "ByteSystems", image: "#" },
  { name: "Emma Johnson", role: "Senior QA Engineer", company: "ApexQA Solutions", image: "#" },
  { name: "Ahmad Faizal", role: "QA Analyst", company: "QualityTesters Ltd", image: "#" },
  { name: "Daniel Victor", role: "QA Engineer", company: "TestGenius", image: "#" },
  { name: "Rohit Sharma", role: "Principal QA Engineer", company: "CodeChecks Innovations", image: "#" },
];

const plans: Plan[] = [
  
  {
    title: "UNLIMITED TESTING",
    oldPrice: "$900",
    newPrice: "$499",
    description: "Unlimited Testing provides consistent, high-quality testing for teams that need ongoing support.",
  },
  {
    title: "ADHOC",
    oldPrice: "$14",
    newPrice: "$9",
    description: "Adhoc Testing is flexible, on-demand testing for occasional projects. Perfect for businesses with sporadic testing needs.",
  },
];

const HomePage = () => {
  return (
    <div className="">
         
         <div
  className="absolute top-0 left-1/2 transform translate-x-12 rotate-180 w-[120px] h-[90px] bg-gray-100"
  style={{
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
   
  }}
></div>
      <div className=" flex gap-6 mb-8 ">
        {testers.map((tester, index) => (
          <div key={index} className="bg-white p-4 rounded-2xl shadow-lg">
            <img src={tester.image} alt={tester.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold">{tester.name}</h3>
            <p className="text-sm text-gray-500">{tester.role}</p>
            <p className="text-xs text-gray-400">{tester.company}</p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold text-purple-700">{plan.title}</h3>
            <p className="text-gray-500 text-sm line-through">{plan.oldPrice}</p>
            <p className="text-3xl font-extrabold text-gray-900">{plan.newPrice} <span className="text-sm">/month</span></p>
            <p className="text-gray-600 my-4">{plan.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Start 7 Day Free Trial</button>
          </div>
        ))}
      </div>
    </div>
  );
};

 {/*  // chat boot
export default HomePage;
// import { useEffect, useRef, useState } from "react";
import { X, Trash, Send, Smile } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export function ChatModal({ show, onClose }: { show: boolean; onClose: () => void }) {
  if (!show) return null;

  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "👋 Hi, I'm Kodee, Hostinger AI sales expert. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Could you please tell me more about your project goals?" }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 flex items-end sm:items-center justify-end p-4">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] sm:w-96 max-h-[80vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Kodee</h2>
          <div className="flex space-x-3">
            <button className="text-gray-500 hover:text-red-500">
              <Trash size={18} />
            </button>
            <button className="text-gray-500 hover:text-black" onClick={onClose}>
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div ref={chatRef} className="p-4 flex-1 overflow-y-auto space-y-3 bg-gray-100">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`p-3 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-900 flex items-start space-x-2"
                }`}
              >
                {msg.sender === "bot" && (
                  <span className="bg-purple-500 text-white p-2 rounded-full">✈️</span>
                )}
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

       
        <div className="border-t p-3 flex items-center bg-white">
          <button className="text-gray-500 hover:text-gray-700">
            <Smile size={22} />
          </button>
          <input
            type="text"
            placeholder="Message Kodee"
            className="w-full px-4 py-2 mx-2 rounded-full border focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
*/}
// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true, // Set infinite to true to keep the autoplay continuous
    slidesToShow: 4, // Adjust to fit within 900px
    slidesToScroll: 1, // 1 slide at a time for smoother transitions
    autoplay: true,
    speed: 1000, // Transition speed
    autoplaySpeed: 1000, // Delay between slides
    pauseOnHover: true, // Pause autoplay on hover
  };

  return (
    <div className="flex justify-center items-center  py-10">
      <div className="w-[900px] border">
        <Slider {...settings}>
          <div>
            <h1 className="text-xl font-bold text-center">Slide 1 Content</h1>
          </div>
          <div>
            <h1 className="text-xl font-bold text-center">Slide 2 Content</h1>
          </div>
          <div>
            <h1 className="text-xl font-bold text-center">Slide 3 Contnt</h1>
          </div>
          <div>
            <h1 className="text-xl font-bold text-center">Slide 4 Content</h1>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default AutoPlay;
//           {index === 1 && (
<div className=" absolute inset-1  top-36 border-2 border-red  flex  w-[200px] h-[100px] ">
<div  className="    border-2 border-red py-1   ">
<h1 className="text-7xl">$</h1>  

</div>

</div>
            )}

            {index === 4 && (
              <div className="absolute  bottom-[43%] left-[60%] transform -translate-x-1/2 flex gap-2 bg-[#FFFFFF] rounded-md shadow-[-3px_-1px_5px_0px_#00000024] p-2">
                <button className="border p-1 px-3 hover:bg-[#5B5AF7] text-[#5B5AF7] rounded-md border-[#5B5AF7] hover:text-white">
                  Pause
                </button>
                <button className="border p-1 px-3 hover:bg-[#5B5AF7] text-[#5B5AF7] rounded-md border-[#5B5AF7] hover:text-white">
                  Cancel
                </button>
              </div>
            )}
             {index === 3 && (
              <div className="absolute  z-10 bottom-[14%] left-[32%] transform -translate-x-1/2 flex gap-2  px-5 border-white border-[1px] bg-[#EC57A8] text-[12px] rounded-full shadow-[-3px_-1px_5px_0px_#00000024] p-1">
               <button className=" ">Stakeholder</button>
              </div>
            )}
            {index === 3 && (
              <div className="absolute w-[90%] rounded-full  bottom-[20%] left-[50%]  shadow-[1px_-1px_4px_1px_#00000024] transform -translate-x-1/2 flex gap-2 bg-[#FFFFFF]  items-center p-3 ">
                <div>
                  {" "}
                  <Image
                    src="Images/gi.svg"
                    width={70}
                    height={70}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex flex-col text-start px-2">
                  <h1 className="text-2xl font-semibold">Maggie Tivoli</h1>
                  <h1>Test Analyst</h1>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>