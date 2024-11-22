import React from 'react'
import Button from '../components/Button'
import sectionOneImg from '../Images/desktopCartoon.png'
import cloudImg from '../Images/cloud1.png'
import { motion } from 'motion/react'
const SectionOne = () => {
  return (
    <>
    <div className='flex justify-between h-[100vh]'>
        <div className='w-[50%] flex flex-col gap-4 justify-center'>
            <div className='name-display flex justify-center items-center text-4xl doto '>
                I'm Saaransh.
            </div>
            <div className='description-display flex ml-[8rem] justify-center items-center text-xl doto '>
                     Always curious , Always Questioning
              <img className='h-[28px] mb-[10px] ' src={cloudImg} alt="" />
            </div>
            <div className='connect-btn lg:mt-[2rem] mr-[92px]'>
                    <Button btnText="Let's Connect"/>
            </div>
      <div className='mt-[5rem] '>
    <div className='doto ml-[2rem]'>
      About
    </div>
    <div className='w-[60%] flex justify-center items-center doto ml-[2rem] mt-[5rem]'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quam nam maiores ex quidem architecto ullam. Nobis neque sint tempore dolor, alias, repellendus eligendi modi sit vitae dicta iste totam libero eum praesentium maiores!
    </div>
      </div>

        </div>
        <div className='w-[50%] bg-black flex justify-center flex-col items-center'>
          <div>
          <img className='h-[350px]' src={sectionOneImg} alt="" />
          </div>
          <div className="socials mt-[5rem] doto">
            <ul>
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