'use client';

import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

  const getLinkClassName = (route: string) => {
    return `text-[16px] font-medium leading-[24px] whitespace-nowrap ${
      pathname === route ? 'text-[#0886D6]' : 'text-[#fafafa]'
    }`;
  };

  return (
    <nav className='px-10 py-5 flex items-center justify-between'>
      <Link href='/home'>
          <Image
            src='/assets/images/logo.png'
            alt='logo'
            width={50}
            height={50}
            priority
          />
      </Link>
      <ul className='flex gap-6'>
        {navLinks.map((link) => (
          <li key={`nav-${link.label}`} className={getLinkClassName(link.route)}>
            <Link href={link.route}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className='flex gap-3'>
        <FaGithub size={30} />
        <FaLinkedin size={30} />
        <FaInstagram size={30} />
        <FaFacebook size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
