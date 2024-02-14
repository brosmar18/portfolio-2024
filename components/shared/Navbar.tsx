'use client';

import { navLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';


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
      x: '100vw',
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0
    },
    opened: {
      x: 0,
      opacity: 1
    }
  }

  return (
    <nav className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg'>
      <div className='hidden md:flex gap-4 w-1/3'>
        {navLinks.map(link => (
          <Link className={`rounded p-1 ${pathname === link.route ? 'bg-black text-white' : ''}`} href={link.route} key={link.label}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href='/' className="text-sm rounded-md p-1 bg-black font-semibold flex items-center justify-center">
          <span className="text-white mr-1">Bryan</span>
          <span className="w-12 rounded bg-white text-black flex items-center justify-center">.dev</span>
        </Link>
      </div>
      <div className='hidden md:flex gap-4 w-1/3'>
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
            className="w-10 h-1 bg-white rounded origin-left"></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"></motion.div>
        </button>
        {/* NAV LINKS */}
        {open && (
          <motion.div
            variants={listVariants}
            initial='closed'
            animate='opened'
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >

          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
