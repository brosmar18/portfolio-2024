import Image from "next/image"
import Link from "next/link"

const Header = () => {
 return (
  <>
   <div className="z-50">
    <Image src='/assets/images/hero.png' alt="" height={600} width={300} />
   </div>
   <div className="w-1/2 flex flex-col gap-8 items-center justify-center">
    <h1 className="text-3xl lg:text-5xl font-bold "> Developing Seamless
     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
      {' '} Solutions {' '}
     </span>,
     From Front to Back.</h1>
    <p className="md:text-xl">Welcome to the intersection of functionality and creativity in my full-stack development journey. Here, you'll find a showcase of versatile projects, each a testament to my approach to building robust and aesthetically pleasing digital experiences.</p>
    <div className="flex gap-4 z-20">
     <Link href='/projects' className="p-4 rounded-lg ring-1 ring-white bg-black text-white">View My Work</Link>
     <Link href='/contact' className="p-4 rounded-lg ring-1 ring-white">Contact Me</Link>
    </div>
   </div>
  </>
 )
}

export default Header