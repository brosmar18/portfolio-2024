import Link from 'next/link';
import { navLinks } from '../../constants';;

import React from 'react'
import { usePathname } from 'next/navigation';

const NavLinks = () => {
    const pathname = usePathname();


  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
        {navLinks.map((link) => {
            const isActive = pathname === link.route;
            return (
                <li
                key={link.route}
                className={`${
                  isActive && 'text-[#0886D6]'
                } flex justify-center items-center text-[16px] font-bold leading-[24px] whitespace-nowrap`}
              >
                    <Link href={link.route}>
                        {link.label}
                    </Link>
                </li>
            )
        })}
    </ul>
  )
}

export default NavLinks

