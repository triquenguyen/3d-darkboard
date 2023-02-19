import React from 'react'
import Typewriter from "typewriter-effect"

const Demo = () => {
  return (
    <div className='text-[24px] text-[#abb2bf] mt-[25%]'>
      <h1>This is <span className='font-[700] text-[#c678dd] drop-shadow-2xl text-[18px] sm:text-[24px]'>hello_darkboard</span></h1>
      <Typewriter 
        options={{
          strings: "Full project description and demo coming soon. Stay tuned!", 
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  )
}

export default Demo