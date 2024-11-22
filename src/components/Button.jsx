import React from 'react'
import { motion } from 'motion/react'
const Button = (props) => {
  return (
    <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className='doto rounded-2xl p-3 bg-yellow-500'>
        {props.btnText}
    </motion.button>
  )
}

export default Button