import React from 'react'
import Navbar from './components/Navbar'
import DisplayFood from './components/DisplayFood'

const Homepage = () => {
  return (
    <>
      <div className='w-screen min-h-screen fixed'> <img src="/anime_chef.jpeg" alt="" /> </div>
      <div className='homepage_wrapper h-screen w-screen relative'>

        <Navbar />
        <header className='w-full h-auto text-center text-3xl text-white chakra-petch-semibold m-2 underline'> Recipe App </header>

        <section className='w-full h-auto flex flex-col items-center mt-8'>
        <DisplayFood />
        </section>

        <div className='w-screen h-auto mt-16 flex flex-col chakra-petch-light text-center justify-center items-center'>
          <p className='w-auto h-auto text-md'> Click on the button below to discover the recepies of endless delicacies... </p>
          <button className='h-16 w-24 rounded-xl chakra-petch-bold text-[#242424] bg-white'>Let's Dig In</button>
        </div>

      </div>
    </>
  )
}

export default Homepage