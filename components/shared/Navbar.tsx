'use client';

import { navLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import Image from 'next/image';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const topVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)"
    }
  };


  const centerVariants = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  };

  const bottomVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255, 255, 255)'
    }
  };

  const listVariants = {
    closed: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    },
    opened: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
  };

  const listItemVariants = {
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    opened: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };


  return (
    <nav className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg'>
      <div className='hidden md:flex gap-4 w-1/3 z-30'>
        {navLinks.map(link => (
          <Link className={`rounded p-1 ${pathname === link.route ? 'bg-white text-black' : ''}`} href={link.route} key={link.label}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center items-center">
        <Link href='/' className="rounded-md p-1 bg-white flex items-center justify-center">
          <Image src='/assets/images/logo.png' alt='logo' width={30} height={30} />
        </Link>
      </div>
      <div className='hidden md:flex items-center justify-center gap-4 w-1/3'>
        <Link href='/'>
          <FaGithub size={28} />
        </Link>
        <Link href='/'>
          <FaLinkedin size={28} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className='md:hidden'>
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => setOpen(!open)}>
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-[3px] bg-white rounded origin-left"></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-[3px] bg-white rounded"></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-[3px] bg-white rounded origin-left"></motion.div>
        </button>
        {/* NAV LINKS */}
        {open && (
          <motion.div
            variants={listVariants}
            initial='closed'
            animate='opened'
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-20"
          >
            {navLinks.map(link => (
              <motion.div
                key={`link-${link.label}`}
                variants={listItemVariants}
              >
                <Link href={link.route}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
