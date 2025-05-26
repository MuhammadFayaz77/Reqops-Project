import React from "react";
import Image from "next/image";
const GoBackCard = ({
  bg,
  size,
  description,
  title,
  image,
  buttons,
  Analyst,
  Stakeholder,
  buttoname,
}: {
  bg?: string;
  description: string;
  title: string;
  image?: string;
  buttons?: boolean;
  size?: string;
  Analyst?: string;
  Stakeholder?: string;
  buttoname?: string;
}) => {
  return (
    <div className="">
      <div className="px-4">
        <p className="  text-xl p-2  font-semibold text-start text-black   ">{title}</p>

        <p className=" p-2  text-start text-black">{description}</p>
      </div>
      {buttons && (
        <div className={`${Analyst} ${Stakeholder}  `}>
          <button className=" text-[12px] ">{buttoname}</button>
        </div>
      )}

      <div
        className="   h-[34vh] bg-cover bg-end bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Image
          src={image || "/Images/gi.svg"}
          width={250}
          height={250}
          alt="Picture of the author"
          className={`${size} `}
        />
      </div>
    </div>
  );
};

export default GoBackCard;
