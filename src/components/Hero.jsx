'use client'

import React from 'react'

function Brand() {
  return (
    <>
      <div className='relative w-[12.6rem] h-[2rem] pl-1 mt-8 ml-7 mb-16 flex'>
        <div className='absolute w-[13.2rem] h-[2.8rem] -top-[10px] -left-[8px] clip-box-1 bg-purple-800 z-0'></div>

        <h1 className='text-2xl font-medium font-chakraPetch z-20'>ParzivalPrime</h1>

        <div className='absolute  w-[13.2rem] h-[2.8rem] -top-[2px] -left-[2px] bg-[#0fe604] clip-box-2 z-10'></div>
      </div>
    </>
  )
}

function Hero() {

  return (
    <section className='min-h-screen'>
      {/* heading */}
      <Brand />

      {/* MAIN */}
      <div className='ml-4'>
        <h1 className='text-3xl font-normal mb-2 '>Hi! I'm Divyanshu</h1>
        <p className='font-kanit'>
          I am <br /> A <span className='bg-gradient-to-r from-[#FFC300] to-[#ffd460] bg-clip-text text-transparent'>
            Machine Learning Practitioner {' '}
          </span> 
          <br />
           A <span className='bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>
            {' '}MERN Stack Web Developer
          </span>
        </p>
        <p className='text-sm font-inconsolata'>I’m a Computer Science student from UP, India, passionate about Artificial Intelligence & Next-Gen Technologies<br />
          Currently, I’m diving deep into Neural Networks (CNNs, RNNs) and learning to craft futuristic AI-driven solutions</p>
        <br />
        {/* <h2 className='font-chakraPetch'>🔺 Sync Rate: 400% with Tech & Creativity</h2> */}
      </div>
    </section>
  )
}

export default Hero
