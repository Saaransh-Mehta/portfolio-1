import React from 'react'
import arrow from '../Images/arrowPng.png'
import { motion } from 'motion/react'

const Navbar = () => {
  return (
   <>
   <nav className='flex justify-end gap-2  absolute w-[95%]'>
    <img className='h-[20px]' src={arrow} alt="" />
            <motion.span whileHover={{scale:1.1}} className='cursor-pointer mt-[1rem] text-white doto'>Saaransh Mehta</motion.span>
   </nav>
   </>
  )
}

export default Navbar