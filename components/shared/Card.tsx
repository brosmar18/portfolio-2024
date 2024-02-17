import React from "react";
import { PinContainer } from "../ui/PinContainer";
import Image from "next/image";
import { GiThreePointedShuriken } from "react-icons/gi";

const Card = ({ title, companyName, icon, points }) => {
  return (
    <div className="h-[40rem] w-full flex flex-col items-center justify-center">
      <PinContainer
        company={<Image src={icon} alt={companyName} width={50} height={50} />}
      >
        <div className="flex basis-full flex-col gap-4 tracking-tight sm:basis-1/2 w-[30rem] h-full">
          <h3 className="bg-black p-3 font-semibold rounded-b-lg rounded-s-l">
            {title}
          </h3>
          <h4 className="text-slate-500">{companyName}</h4>
          <div className="font-normal text-base flex flex-col gap-2">
            {points.map((point, index) => (
              <span key={index} className="text-sm text-black">
                {point}
              </span>
            ))}
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export default Card;
