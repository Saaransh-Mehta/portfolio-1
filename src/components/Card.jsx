import React from 'react'
import { motion } from 'motion/react'

const Card = (props) => {
  return (
    <div>
        <motion.div whileHover={{scale:1.1}}>
        <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div class="p-4">
    <h5 class="mb-2 text-slate-800 text-xl doto-bold font-bold">
      {props.header}
    </h5>
    <p class="text-slate-600 leading-normal doto font-light min-h-[100px]">
    {props.text}
    </p>
 
    <motion.button whileTap={{scale:0.9}} class="doto-bold rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Know more
    </motion.button>
  </div>
</div>
        </motion.div>
    </div>
  )
}

export default Card