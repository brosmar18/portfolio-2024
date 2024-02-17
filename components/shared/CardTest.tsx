'use client';
import React from 'react';
import { PinContainer } from '../ui/PinContainer';
import { experiences } from '../../constants/index';



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
    </div>
  )
}

export default Card