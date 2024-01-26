'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLinks from './NavLinks';
import MobileNav from './MobileNav';


const Header = () => {
  return (
    <header className='w-full border-b z-20'>
      <div className='max-w-7xl lg:max-auto p-5 md:px-10 xl:px-0 w-full flex items-center justify-between'>
        <Link href='/' className='w-36'>
            <Image 
              src='/assets/images/logo.png'
              alt='logo'
              width={50}
              height={50}
            />
        </Link>
        <nav className='hidden md:flex md:justify-between w-full max-w-xs'>
          <NavLinks />
        </nav>
        <div className='flex w-32 justify-end gap-3'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
