import RoundedTriangle from "./RoundedTriangle";

export default function Preper() {
  return (
    <div className=" overflow-hidden  relative lg:bg-[linear-gradient(45deg,#5B5AF7_16%,#EC57A8_62%,#F5A9A0_94%)] bg-[linear-gradient(-45deg,#5B5AF7_16%,#EC57A8_62%,#F5A9A0_94%)] flex flex-col items-center text-center ">
      <div className="absolute lg:left-[86%] md:left-[30%] left-[10%]">
        <RoundedTriangle style={{ background: "#EDF0F5" }} />
      </div>

      <div className=" max-w-[90%] sm:max-w-[70%] lg:max-w-[50%] px-4 mt-[15%]">
        <p className="text-base sm:text-xl lg:text-3xl text-white text-center leading-relaxed">
          See if ReqOps Test Assist is the right fit for you (it totally is).
          Schedule a quick, 15-minute guided tour.
        </p>

        <div className="mt-10  mb-[20%]">
          <button className="bg-[#5B5AF7] px-5 py-3 text-sm sm:text-base rounded-lg text-white hover:bg-[#4A49E2] transition">
            Book a 15-min intro call
          </button>

          <h1 className="pt-8 pb-2 text-white text-sm sm:text-base">
            Prefer to email?
          </h1>
          <p className="text-white text-sm sm:text-base">
            hello@ReqOpsTestAssist.co
          </p>
        </div>
      </div>
    </div>
  );
}
