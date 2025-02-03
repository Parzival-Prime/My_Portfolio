import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <section
      className='relative min-h-screen'
    >
      {/* heading */}
      <h1 className='text-3xl font-medium mt-4 ml-4 mb-14'>Parzival Prime .</h1>

    {/* MAIN */}
      <div className='ml-4'>
        <h1 className='text-3xl font-normal mb-2'>I'm Divyanshu</h1>
        <p>I am a Machine Learning Practitioner | Full Stack Web Developer</p>
      </div>
    </section>
  )
}

export default Hero
