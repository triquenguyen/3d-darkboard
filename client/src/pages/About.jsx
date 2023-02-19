import React from 'react'
import triquePic from '../assets/trique.jpg'
import simonPic from '../assets/simon.jpg'
import billPic from '../assets/bill.jpg'
import { Contributor } from '../components/Contributor'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

const About = () => {
  const contacts = [
    {
      name: 'Charmi Athuluru',
      role: 'Team Lead',
      linkedin: null,
      github: null,
      major: 'B.S. in Engineering Technology',
      gmail: null,
      photo: simonPic,
    },
    {
      name: 'Aaron Herr',
      role: 'Machine Learning Engineer',
      linkedin: null,
      github: null,
      major: 'B.S. in Applied Mathematics',
      gmail: null,
      photo: billPic,
    },
    {
      name: 'Madeline Schneider',
      linkedin: null,
      role: 'Hardware Engineer',
      github: null,
      major: 'B.S. in Computer Engineering',
      gmail: null,
      photo: simonPic,
    },
    {
      name: 'Trique Nguyen',
      role: 'Frontend Developer',
      linkedin: null,
      github: null,
      major: 'B.S. in Software Engineering',
      gmail: 'dung.n.nguyen@sjsu.edu',
      photo: triquePic,
    },
  ]
  return (
    <div className='p-[24px] text-left'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 0.5,
          type: "spring",
          damping: 10,
          stiffness: 50
        }}
      >
        <h1 className='text-[#e5c07b] text-[32px] text-[#]'>What is <span className='font-[700] text-[#c678dd] text-[24px] drop-shadow-2xl'>hello_darkboard</span>?</h1>
        <div>
          <p className='text-[#61AFEF] text-[18px]'>
            <span className='font-[700] text-[#c678dd] drop-shadow-2xl'>hello_darkboard</span> is a web based 3D visualization tool that allows users to illustrate their ideas in real space
          </p>
          <br />
          <p className='text-left text-[#61AFEF] text-[18px]'>
            The project is the integration of mechanical engineering, physics, machine learning, and web development and implemented the most cutting-edge technology into our project to create a unique and immersive experience for our users
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 0.8,
          type: "spring",
          damping: 10,
          stiffness: 50
        }}
        className='pt-[24px]'
      >
        <h1 className='text-[#e5c07b] text-[32px]'>Meet the team</h1>
        <p className='text-[#61AFEF] text-[18px]'>We are thriving engineering students from San Jose State University with a passion in developing tools to help the world!</p>
      </motion.div>
        {contacts.map((contact) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              delay: 1.1 + 0.3 * contacts.indexOf(contact),
              type: "spring",
              damping: 10,
              stiffness: 50
            }} 
            className='text-left text-[18px] pt-[24px] hover:drop-shadow-2xl'
          >
            <Contributor 
              photo={contact.photo}
              role={contact.role}
              major={contact.major}
              name={contact.name}
              linkedin={contact.linkedin}
              github={contact.github}
              gmail={contact.gmail}
            />
          </motion.div>
          
        ))}
        
      
      
    </div>
  )
}

export default About