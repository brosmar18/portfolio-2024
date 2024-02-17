import React from "react";
import { experiences } from "../../../constants/index";
import TimelineCard from "../../../components/shared/TimelineCard";

const Experience = () => {
  return (
    <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 mt-8 h-full">
      <div>
        <p className="sm:text-[18px] text-[14px] uppercase tracking-wider text-center">
          What I&#39;ve done
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-20">
          Work Experience
        </h2>
      </div>
      <div className="flex flex-col-reverse gap-8 items-center justify-center relative">
        {experiences.map((experience) => (
          <TimelineCard
            key={`exp-card-${experience.company_name}`}
            title={experience.title}
            companyName={experience.company_name}
            icon={experience.icon}
            points={experience.points}
            date={experience.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
