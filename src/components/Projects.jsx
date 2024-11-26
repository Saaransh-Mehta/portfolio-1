import { motion } from 'motion/react'
import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
   <>
    <div className='flex flex-col h-[100vh] w-[100vw]'>
    <div className='doto text-4xl flex container ml-[5rem] mt-[5rem] mb-[5rem]'>
        <motion.h1 className='cursor-pointer' whileHover={{scale:1.1} }>Projects</motion.h1>
    </div>
    <div className='doto text-xl flex ml-[5rem] w-[60%]'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto at omnis modi, aperiam in eos dolorum similique! Dolor, est blanditiis.</p>
    </div>
    <div className='card-display grid grid-cols-2 place-content-center place-items-center mt-[3rem]'>
    <div>
        <Card header="Card-1" text="lorem lorem lorem lorem lorem lorem"/>
    </div>
    <div>
        <Card header="Card-2" text="lorem lorem lorem lorem lorem lorem"/>
    </div>
    <div>
        <Card header='Crad-3' text="lorem lorem lorem lorem lorem lorem"/>
    </div>
    <div><Card header="card-4" text="lorem lorem lorem lorem lorem lorem"/></div>
    </div>
    </div>
   </>
  )
}

export default Projects