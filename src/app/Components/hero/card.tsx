import React from "react";

interface PricingPlan {
  title: string;
  oldPrice: string;
  newPrice: string;
  description: string;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Unlimited Testing",
    oldPrice: "$900",
    newPrice: "$499",
    description:
      "Unlimited Testing provides, high-quality testing teams that need ongoing support. Best for teams with regular testing needs.",
  },
  {
    title: "ADHOC",
    oldPrice: "$14",
    newPrice: "$9",
    description:
      "Enterprise Testing includes advanced security, compliance, and priority support for large teams with high testing demands.",
  },
];

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  return (
    <div className=" rounded-2xl shadow-lg bg-white   ">
      <div className="relative rounded-2xl p-6">
        <h2 className="lg:text-3xl text-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 uppercase">
          {plan.title}
        </h2>

        <p className="text-gray-600 text-lg mt-3">
          <span className="line-through text-gray-400 text-3xl font-bold">
            {plan.oldPrice}
          </span>
          <span className="text-black font-bold text-3xl  ml-2">
            {plan.newPrice}
          </span>
          <span className="text-gray-500 text-sm">/ per month</span>
        </p>

        <p className="text-gray-500 text-[12px] mt-3 w-full ">{plan.description}</p>

        <button className="w-full mt-4 hidden lg:block bg-[#5B5AF7] font-bold text-white py-2 rounded-lg  shadow-2xl shadow-[#5B5AF7]">
          Start 7 Day Free Trial
        </button>
        <button className="w-full  mt-4 block lg:hidden bg-[#5B5AF7] font-bold text-white py-2 rounded-lg   shadow-md shadow-[#5B5AF7]">
          Start 
        </button>
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <div className="flex flex-col px-2   gap-4  lg:gap-5 lg:px-8  ">
      {pricingPlans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default PricingSection;
