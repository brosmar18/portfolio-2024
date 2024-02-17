import React from "react";
import Card from "../../../components/shared/Card";
import { experiences } from "../../../constants/index";

const Practice = () => {
  return (
    <div className="sm:px-16 px-6 sm:py-14 py-8 max-w-7xl mx-auto relative z-0 mt-8 border-s border-gray-200">
      <div>
        <p className="sm:text-[18px] text-[14px] uppercase tracking-wider text-center">
          What I&#39;ve done
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Work Experience
        </h2>
      </div>
      {experiences.map((experience, index) => (
        <>
          <div className="absolute w-10 h-10 bg-white rounded-full -left-5" />
          <div className="text-red-400 text-sm font-semibold">
            {experience.date}
          </div>
          <Card
            key={index}
            title={experience.title}
            companyName={experience.company_name}
            icon={experience.icon}
            points={experience.points}
          />
        </>
      ))}
    </div>
  );
};

export default Practice;
