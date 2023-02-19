import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Typewriter from "typewriter-effect"

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0}}
      className="flex items-center justify-between px-[24px] py-[12px]">
      
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to="/" className="font-[700] text-[#c678dd] drop-shadow-2xl text-[18px] sm:text-[24px]">hello_darkboard</Link>
      </motion.div>   
      <motion.div className='flex gap-[24px]'>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/about" className="text-[#ed6c75] text-[12px] sm:text-[18px] border-[1px] border-[#ed6c75] p-1.5 rounded-md hover:text-black hover:bg-[#ed6c75]">about_us</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/demo" className="text-[#98c379] text-[12px] sm:text-[18px] border-[1px] border-[#98c379] p-1.5 rounded-md hover:text-black hover:bg-[#98c379]">demo</Link>
        </motion.div>
      </motion.div>
      
    </motion.nav>
  )
}

export default Navbar