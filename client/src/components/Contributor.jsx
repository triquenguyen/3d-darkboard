import React from 'react'
import LinkedIn from "../assets/linkedin.png"
import GitHub from "../assets/github.png"
import Gmail from "../assets/gmail-logo.png"
import { motion } from 'framer-motion'

export const Contributor = ({ photo, role, major, name, linkedin, github, gmail }) => {
  return (
    <div className='text-left p-[24px]'>
        <div className="text-left font-semibold text-[#e5c07b]">
            {`<${name}>`}
        </div>
        <img className="max-w-[50%] h-auto rounded-xl object-cover w-[240px]" src={photo} alt="image"/>
        <div className="text-[#61AFEF]">
            {role}
        </div>
        <div className="text-[#61AFEF]">
            {major}
        </div>
        <div className="flex gap-2 items-center ">
            <p className="lg:block hidden text-[#61AFEF]">contact me</p> 
            <motion.div whileHover={{ scale: 1.1 }} className='shadow-[#61afef] shadow-md'>
                <a href={linkedin}>
                    <img className="w-[20px] hover:ring-grey" src={LinkedIn} />
                </a> 
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} className='shadow-[#56b6c2] shadow-md'>
                <a href={github}>
                    <img className="w-[20px]" src={GitHub} />
                </a> 
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} className='shadow-[#e06c75] shadow-md'>
                <a href={gmail}>
                    <img className="w-[20px]" src={Gmail} />
                </a> 
            </motion.div>
            
        </div>
        <div className="text-left font-semibold text-[#e5c07b]">
            {`<${name} />`}
        </div>
    </div>
  )
}
