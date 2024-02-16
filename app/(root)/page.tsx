import React from "react";
import Header from '../../components/shared/Header';
import Stars from '../../components/shared/Stars';

export default function Home() {
  return (
    <div className="h-full flex flex-col gap-10 items-center justify-between lg:flex-row lg:gap-0 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <Stars />
      <Header />
    </div>
  );
}
