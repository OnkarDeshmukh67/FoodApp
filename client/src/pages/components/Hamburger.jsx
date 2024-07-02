import React, { useState } from 'react'
import './SlideIn.css'

const Hamburger = () => {

  const [isHamburger , setIsHamburger] = useState(false)

  const triggerHamburger = () => {
   !isHamburger ? setIsHamburger(true) : setIsHamburger(false) 
  }

  return (
    <>
      <menu onClick={triggerHamburger} className='h-6 w-6 absolute right-2 top-2 z-10 flex flex-col justify-around items-start'>
        <span className={`duration-700 ${isHamburger ? `translate-y-1 rotate-45` : `` } border w-full`}></span>
        <span className={`${isHamburger ? `hidden` : ``} border w-full`}></span>
        <span className={`duration-700 ${isHamburger ? `-translate-y-2 -rotate-45` : `` } border w-full`}></span>
      </menu>
      <section className={`w-screen h-screen backdrop-blur-sm chakra-petch-light ${isHamburger ? `slideIn fixed` : `slideOut duration-500`}`}>
        This is the Hamburger Area
      </section>
    </>
  )
}

export default Hamburger