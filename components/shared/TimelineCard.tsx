import React from "react";
import { PinContainer } from "../ui/PinContainer";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { RxCalendar } from "react-icons/rx";

const TimelineCard = ({ title, companyName, icon, points, date }) => {
  return (
    <div className="h-[45rem] md:h-[30rem] w-full flex items-center justify-center">
      <PinContainer
        company={<Image src={icon} alt={companyName} width={50} height={50} />}
      >
        <Card className="flex basis-full flex-col gap-4 tracking-tight sm:basis-1/2 w-[300px] sm:w-[600px] md:-[700px]">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="text-sm text-red-500">
              {companyName}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center space-x-4 rounded-md border p-4">
              <RxCalendar />
              <div className="flex-1 spacd-y-1">
                <p className="text-sm text-muted-foreground">{date}</p>
              </div>
            </div>
            <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              {points.map((point) => (
                <>
                  <span
                    className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"
                    key={`exp-point-${point}`}
                  />
                  <div className="space-y-1 mb-2">
                    <p className="text-sm font-medium">{point}</p>
                  </div>
                </>
              ))}
            </div>
          </CardContent>
        </Card>
      </PinContainer>
    </div>
  );
};

export default TimelineCard;
