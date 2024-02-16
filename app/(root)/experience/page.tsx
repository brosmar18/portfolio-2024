'use client';
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 mt-8">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center'>
          What I&#39;ve done
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center'>
          Work Experience
        </h2>
      </motion.div>
    </div>
  )
}

export default Experience