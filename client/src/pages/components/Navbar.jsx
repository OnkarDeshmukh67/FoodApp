import React from 'react'
import Hamburger from './Hamburger'

const Navbar = () => {
  return (
    <nav className='w-screen h-12 flex justify-between'>
      
      <div className='h-full w-auto text-wrap flex'>
        <a className='chakra-petch-light m-2 text-sm' href="#">Home</a>
        <a className='chakra-petch-light m-2 text-sm' href="#">Find</a>
        <a className='chakra-petch-light m-2 text-sm' href="#">About</a>
      </div>

      <Hamburger />

    </nav>
  )
}

export default Navbar