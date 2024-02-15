import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLink = ({ link }: {
 link: {
  route: string;
  label: string;
 }
}) => {
 const pathname = usePathname();
 const isActive = pathname === link.route;

 return (
  <Link className={`rounded p-1 ${isActive ? 'bg-white text-black' : ''}`} href={link.route} key={link.label}>
   {link.label}
  </Link>
 );
}

export default NavLink;
