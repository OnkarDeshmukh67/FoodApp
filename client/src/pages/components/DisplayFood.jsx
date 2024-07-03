import React, { useState } from 'react'

const Displayrecipe = () => {

  const reps = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

  return (
    <>
    <div className='h-auto w-60 flex flex-col chakra-petch-light'>
      <p className='w-60 h-8 text-center text-xl'>Find Delicacies NearBy...</p>

      <span className='w-60 h-60 overflow-hidden rounded-md flex flex-wrap backdrop-blur-xl'>
        
        {reps.map(()=>{
          return <img className='w-16 h-16 rounded-md m-2' src="/healthy_food/food.jpg" alt="" />
        })}

      </span> 
      
    </div>
    </>   
  )
}

export default Displayrecipe