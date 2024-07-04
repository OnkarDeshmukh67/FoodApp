import React from 'react'
import Navbar from './components/Navbar'
import DisplayFood from './components/DisplayFood'
import {Link} from 'react-router-dom'

const Homepage = () => {
  return (
    <>
      <img className='w-screen h-auto fixed' src="/chef.png" alt="" />
      <div className='homepage_wrapper h-screen w-screen relative'>

        <Navbar />
        <header className='w-full h-auto text-center text-3xl text-white chakra-petch-semibold m-2 underline'> Recipe App </header>

        <section className='w-full h-auto flex flex-col items-center mt-8'>
        <DisplayFood />
        </section>

        <section className='w-screen h-auto mt-16 flex flex-col chakra-petch-light text-center justify-center items-center'>
          <p className='w-48 h-auto text-lg'> Discover the recepies of endless delicacies... </p>
          <Link to = {'/postFood'} className='h-16 w-24 rounded-xl chakra-petch-bold text-[#242424] bg-white flex justify-center items-center'>Let's Dig In</Link>
        </section>

      </div>
    </>
  )
}

export default Homepage