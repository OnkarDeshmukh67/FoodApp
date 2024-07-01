import React from 'react'
import Navbar from './components/Navbar'
import DisplayFood from './components/DisplayFood'

const Homepage = () => {
  return (
    <>
      <div className='homepage_wrapper h-screen w-screen relative'>

        <Navbar />
        <header className='w-full h-auto text-center text-3xl text-white chakra-petch-semibold m-2 underline'> Recipe App </header>

        <section className='w-full h-auto flex flex-col items-center mt-8'>
        <DisplayFood />
        </section>

      </div>
    </>
  )
}

export default Homepage