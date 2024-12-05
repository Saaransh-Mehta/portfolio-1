import React from 'react'
import bgImg from '../Images/YellowImg.jpg'
import { motion } from 'motion/react'
const SectionTwo = () => {
    const bg = `url(${bgImg})`
  return (
    <>
        <div className='bg-[#FFCE32] h-[100vh]'>
            <div className='flex flex-col'>
              <div className='orbitron text-6xl text-blue-600 m-[5rem]'>
                About Me
              </div>
             
            

            </div>
        </div>
    </>
  )
}

export default SectionTwo