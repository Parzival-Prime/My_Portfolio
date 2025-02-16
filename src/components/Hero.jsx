'use client'

import React from 'react'
import Image from 'next/image'

function Hero() {

  return (
    <section className='relative min-h-screen'>
      {/* heading */}
      <h1 className='text-2xl font-medium mt-4 ml-4 mb-14 font-chakraPetch'>ParzivalPrime001</h1>

      {/* MAIN */}
      <div className='ml-4'>
        <h1 className='text-3xl font-normal mb-2 '>I'm Divyanshu</h1>
        <p className='font-kanit'>AI/ML Practitioner | Full Stack Web Developer</p>
        <p className='text-sm font-inconsolata'>I’m a Computer Science student from UP, India, passionate about Artificial Intelligence & Next-Gen Technologies<br />
        Currently, I’m diving deep into Neural Networks (CNNs, RNNs) and learning to craft futuristic AI-driven solutions</p>
        <br />
        {/* <h2 className='font-chakraPetch'>🔺 Sync Rate: 400% with Tech & Creativity</h2> */}
      </div>
    </section>
  )
}

export default Hero
