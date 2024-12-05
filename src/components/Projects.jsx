import { motion } from 'motion/react'
import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
   <>
    <div className='lg:flex lg:flex-col md:flex lg:w-[100vw]'>
    <div className='orbitron tracking-wider sm:flex sm:justify-center text-4xl lg:flex lg:container lg:ml-[5rem] lg:mt-[5rem] lg:mb-[5rem]'>
        <motion.h1 className='cursor-pointer' whileHover={{scale:1.1} }>Projects</motion.h1>
    </div>
    <div className='orbitron tracking-widest sm:flex sm:justify-center sm:items-center text-xl lg:flex ml-[5rem] w-[60%]'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto at omnis modi, aperiam in eos dolorum similique! Dolor, est blanditiis.</p>
    </div>
    <div className='card-display lg:grid lg:grid-cols-2 sm:flex sm:flex-col  place-content-center place-items-center mt-[3rem]'>
    <div>
        <Card header="Card-1" text="lorem lorem lorem lorem lorem lorem"/>
    </div>
    <div>
        <Card header="Card-2" text="lorem lorem lorem lorem lorem lorem"/>
    </div>
    <div>
       <Card header='Card-3' text="lorem lorem lorem lorem lorem lorem"/>
    </div>
    <div><Card header="card-4" text="lorem lorem lorem lorem lorem lorem"/></div>
    </div>
    </div>
   </>
  )
}

export default Projects