import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex gap-10 flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Image Container  */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/assets/images/hero.png" alt="hero" fill className="object-contain" />
      </div>
      {/* Text Container  */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE  */}
        <h1 className="text-4xl md:text-6xl font-bold">Engineering Seamless Solutions, From Front to Back.</h1>
        {/* DESC */}
        <p className="md:text-xl">Welcome to the intersection of functionality and creativity in my full-stack development journey. Here, you'll find a showcase of versatile projects, each a testament to my approach to building robust and aesthetically pleasing digital experiences.</p>

        {/* BUTTON  */}
        <div className="flex gap-4 w-full z-20">
          <button className="p-4 rounded-lg ring-1 ring-white bg-black text-white">View My Work</button>
          <button className="p-4 rounded-lg ring-1 ring-white">Contact Me</button>
        </div>
      </div>
    </div>
  );
}
