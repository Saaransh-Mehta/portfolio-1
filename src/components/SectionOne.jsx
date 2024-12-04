import React from 'react'
import Button from '../components/Button'
import sectionOneImg from '../Images/desktopCartoon.png'
import cloudImg from '../Images/cloud1.png'
import { motion } from 'motion/react'
const SectionOne = () => {
  return (
    <>
    <div className='flex justify-between lg:h-[100vh] sm:h-[100vh]'>
        <div className='lg:w-[50%] sm:w-[50%] flex flex-col gap-4 justify-center'>
            <div className='tracking-wider name-display lg:flex sm:flex lg:justify-center lg:items-center lg:text-4xl orbitron sm:text-2xl sm:items-center sm:justify-center'>
                I'm Saaransh.
            </div>
            <div className='tracking-widest description-display sm:flex lg:flex ml-[8rem] lg:justify-center sm:justify-center items-center text-xl orbitron '>
                     Always curious , Always Questioning
              <img className='h-[28px] mb-[10px] ' src={cloudImg} alt="" />
            </div>
            <div className='connect-btn flex justify-center lg:mt-[2rem] mr-[172px]'>
                    <Button btnText="Let's Connect"/>
            </div>
      <div className='mt-[5rem] '>
    <div className='orbitron ml-[2rem]'>
      About
    </div>
    <div className='w-[60%] flex tracking-widest justify-center items-center orbitron ml-[2rem] mt-[1.8rem]'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quam nam maiores ex quidem architecto ullam. Nobis neque sint tempore dolor, alias, repellendus eligendi modi sit vitae dicta iste totam libero eum praesentium maiores!
    </div>
      </div>

        </div>
        <div className='sm:w-[50%] h-[100vh] lg:w-[50%] bg-yellow-500 sm:flex flex-col '>
          <div className='lg:flex h-[50vh] lg:justify-center lg:items-center lg:text-4xl orbitron tracking-widest'>
            A fullStack Engineer
          </div>
          <div className="socials flex  justify-end mt-[10rem] mr-[3rem] orbitron">
            <ul className='flex gap-3 flex-col'>
              <motion.li whileHover={{scale:1.1}} className='text-white cursor-pointer'>LinkedIn</motion.li>
              <motion.li  whileHover={{scale:1.1}} className='text-white cursor-pointer'>Instagram</motion.li>
              <motion.li  whileHover={{scale:1.1}} className='text-white cursor-pointer'>Twitter</motion.li>
              <motion.li  whileHover={{scale:1.1}} className='text-white cursor-pointer'>Facebook</motion.li>
            </ul>
          </div>
            
        </div>
    </div>
   
        
   
   
        </>
  )
}

export default SectionOne