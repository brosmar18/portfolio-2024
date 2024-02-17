import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { cn } from "../../../utils/cn";
import { experiences } from "../../../constants/index";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

const Experience = () => {
  return (
    <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 mt-8">
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
        Work Experience
      </h2>
      <div className="flex flex-col-reverse mt-10 gap-10 items-center justify-center">
        {experiences.map((experience) => (
          <Card
            className='w-[300px] sm:w-[350px] md:w-[380px]'
            key={`experience-card-${experience.company_name}`}
          >
            <CardHeader>
              <CardTitle>{experience.title}</CardTitle>
              <CardDescription className="text-sm text-red-500">
                {experience.company_name}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                {experience.points.map((point) => (
                  <>
                    <span
                      className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"
                      key={`exp-point-${point}`}
                    />
                    <div className="space-y-1 mb-2">
                      <p className="text-sm font-medium leading-none">
                        {point}
                      </p>
                    </div>
                  </>
                ))}
              </div>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experience;
