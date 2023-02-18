import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div>
        <Navbar />
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale:0.95 }}>
          <Link to='/darkboard' className='text-[#c678dd]'>import <span className='text-[#ed6c75] font-[700]'>Darkboard</span></Link>
        </motion.div>
    </div>
  )
}

export default Home