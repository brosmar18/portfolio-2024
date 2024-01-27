import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='w-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Bryan O. Garduño Gonzalez
        </div>
      </div>
    </footer>
  )
}

export default Footer