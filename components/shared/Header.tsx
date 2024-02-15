import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='w-full border-b'>
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
