'use client';
import React from 'react';
import { PinContainer } from '../ui/PinContainer';



const Card = () => {
 return (
  <div className="h-[40rem] w-full flex flex-col items-center justify-center">
   <PinContainer
    company='/ui.aceternity.com'
   >
    <div className='flex basis-full flex-col gap-4 tracking-tight sm:basis-1/2 w-[30rem] h-[30rem]'>
     <h3 className='font-bold text-black'>Aceternity</h3>
     <div className='font-normal text-base'>
      <span className='text-slate-500'>
       Customizable Tailwind CSS and Framer Motion Components
      </span>
      
     </div>
    </div>
   </PinContainer>
   {/* <ul className="relative border-s border-white-200 mt-20">
          <li className="mb-10 ms-4">
            <div className="absolute w-6 h-6 bg-white rounded-full mt-1/5 -left-3" />
            <div className="mb-1 text-sm font-normal leading-none text-gray-400 ml-3">
              Feb 2019 - March 2022
            </div>
            <h3 className="text-lg font-semibold ml-3">Work Position</h3>
            <p className="mb-4 text-base font-normal ml-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus odio minus voluptas necessitatibus fugiat sequi
              voluptatem veritatis, nemo ut soluta qui! Iste consectetur amet
              doloribus, dolores optio nesciunt earum libero.
            </p>
          </li>
        </ul> */}
  </div>
 )
}

export default Card