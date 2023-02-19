import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 0.7,
        type: "spring",
        damping: 10,
        stiffness: 50
      }}
      className="text-[18px] mt-[25%]">
        <Link to='/' className="font-[700] text-[#c678dd] text-[24px] sm:text-[64px]">hello_darkboard</Link>
        <p className='text-[#61AFEF] py-[48px]'>Experience the cutting-edge technology that enables stunning 3D visualization of drawings in space</p>
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className='pt-[24px]'>
          <Link to='/darkboard' className='border-[1px] text-[12px] sm:text-[18px] border-[#e5c07b] p-1.5 rounded-md drop-shadow-xl hover:shadow-[#e5c07b]'>
            <span className='text-[#c678dd]'>import </span> 
            <span className='text-[#ed6c75] font-[700] '>Darkboard</span>
          </Link>
        </motion.div>
        
    </motion.div>
  )
}

export default Home