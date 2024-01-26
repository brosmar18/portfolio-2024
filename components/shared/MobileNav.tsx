import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "../../components/ui/sheet";
import Image from 'next/image';
import NavLinks from './NavLinks';
import { BiMenu } from "react-icons/bi";


const MobileNav = () => {
    return (
        <nav className='md:hidden'>
            <Sheet>
                <SheetTrigger>
                    <BiMenu size={24} />
                </SheetTrigger>
                <SheetContent className='flex flex-col bg-inherit gap-6 md:hidden'>
                    <Image
                        src='/assets/images/logo.png'
                        alt='logo'
                        width={50}
                        height={50}
                    />
                    <NavLinks />
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav