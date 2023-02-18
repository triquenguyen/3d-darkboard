import React from 'react'
import triquePic from '../assets/trique.jpg'
import simonPic from '../assets/simon.jpg'
import billPic from '../assets/bill.jpg'
import { Contributor } from '../components/Contributor'
import Navbar from '../components/Navbar'

const About = () => {
  const contacts = [
    {
      name: 'Bill Zhang',
      linkedin: 'https://www.linkedin.com/in/bill-zhang-57976b1b3/',
      github: 'https://github.com/IdkwhatImD0ing',
      info: 'B.S. in Computer Science at UC Santa Cruz',
      gmail: 'billzhangsc@gmail.com',
      photo: billPic,
    },
    {
      name: 'Trique Nguyen',
      linkedin: 'https://www.linkedin.com/in/trique-nguyen/',
      github: 'https://github.com/triquenguyen',
      info: 'B.S. in Software Engineering at San Jose State University',
      gmail: 'dung.n.nguyen@sjsu.edu',
      photo: triquePic,
    },
    {
      name: 'Simon Quach',
      linkedin: 'https://www.linkedin.com/in/simonquach04/',
      github: 'https://github.com/simon-quach',
      info: 'B.S. in Mathematics at Orange Coast College',
      gmail: 'simonquach.tech@gmail.com',
      photo: simonPic,
    },
  ];
  return (
    <div>
      <Navbar />
      <Contributor 
          photo={triquePic}
          role="frontend developer"
          major="b.s. in software sngineering"
          name="TriqueNguyen"
          linkedin="https://www.linkedin.com/in/trique-nguyen/"
          github="https://github.com/triquenguyen"
          gmail="ngngoctridung123@gmail.com"
      />

    </div>
  )
}

export default About