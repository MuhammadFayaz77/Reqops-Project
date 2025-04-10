import Card from "./contentJourney";
import { IoMdAddCircleOutline } from "react-icons/io";

const Index: React.FC = () => {
  const data = [
    { date: "5 months ago", tags: ["certificate", "application", "upload"] },
    { date: "5 months ago", tags: ["certificate", "application", "upload"] },
  ];

  return (
    <div className="w-[100%] max-w-4xl  space-y-3 mt-12    overflow-hidden">
     
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">
          Content Journey
        </h2>
        <button className="flex items-center text-lg bg-[#E33C12] text-white px-4 py-1 rounded-sm hover:bg-[#E33a11] ">
          <IoMdAddCircleOutline size={22} className="mr-2"  />
          Add Samples
        </button>
        
      </div>

     
      <div className="space-y-3">
        {data.map((item, index) => (
          <Card key={index} date={item.date} tags={item.tags} />
        ))}
      </div>
    </div>
  );
};

export default Index;
