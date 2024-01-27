import React from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='w-full border-b z-20'>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="md:hidden flex justify-end p-5">
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
