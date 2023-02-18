import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-[24px]">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link to="/" className="font-[700] text-[#c678dd]">hello_darkboard</Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link to="/about" className="text-[#ed6c75]">about_us</Link>
      </motion.div>
    </div>
  )
}

export default Navbar