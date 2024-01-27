'use client';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import {FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";



const MobileNav = () => {
    const pathname = usePathname();

    const getLinkClassName = (route: string) => {
      return `text-[16px] font-medium leading-[24px] whitespace-nowrap ${
        pathname === route ? 'text-[#0886D6]' : 'text-[#fafafa]'
      }`;
    };

    
    return (
        <Sheet>
            <SheetTrigger>
                <BiMenu size={25} />
            </SheetTrigger>
            <SheetContent className="bg-inherit flex flex-col gap-10">
                <Link href='/home'>
                    <Image
                        src='/assets/images/logo.png'
                        alt='logo'
                        width={50}
                        height={50}
                        priority
                    />
                </Link>
                <ul className='flex gap-3 flex-col items-center'>
                    {navLinks.map((link) => (
                        <li key={`nav-${link.label}`} className={getLinkClassName(link.route)}>
                            <Link href={link.route}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-3 items-center justify-center'>
                    <FaGithub size={30} />
                    <FaLinkedin size={30} />
                    <FaInstagram size={30} />
                    <FaFacebook size={30} />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;