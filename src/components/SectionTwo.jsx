import React from 'react'
import bgImg from '../Images/YellowImg.jpg'
import { motion } from 'motion/react'
const SectionTwo = () => {
    const bg = `url(${bgImg})`
  return (
    <>
        <div className='bg-yellow-400 h-[100vh]'>
            <div className='flex flex-col'>
              <div className='doto text-6xl m-[5rem]'>
                About Me
              </div>
             
            

            </div>
        </div>
    </>
  )
}

export default SectionTwo