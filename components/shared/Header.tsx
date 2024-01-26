import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='max-w-7xl lg:max-auto p-5 md:px-10 xl:px-0 w-full'>
        <Link href='/' className='w-36'>
          <Image 
            src='/assets/images/logo.png'
            alt='logo'
            width={50}
            height={50}
          />
        </Link>
        <nav>
          
        </nav>
      </div>
    </header>
  )
}

export default Header