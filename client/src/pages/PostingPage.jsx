import React, { useState } from 'react'

const PostingPage = () => {

  const [foodData , setFoodData] = useState({
    foodname : '',
    nature : '',
    country : '',
    recipe : '',
    imageURL : ''
  })

  return (
    <div className='postingpage_wrapper w-screen h-screen flex flex-col items-center'>
      <header className='chakra-petch-bold text-xl w-full h-12 text-center m-2'>Post Your Delicacy</header>

      <form className='w-72 h-3/5 mt-4 flex flex-col text-center justify-around chakra-petch-bold'>

        <label className=' bg-gray-600 rounded-md ' htmlFor="foodname">FoodName*</label>
        <input className='w-full bg-white text-black rounded-md' type="text" name="foodname" id="foodname" onChange={(e => {
          {setFoodData(
            foodData.foodname = e.target.value
          )}
        })}/>

        <label className=' bg-gray-600 rounded-md ' htmlFor="nature">Nature*</label>
        <select className='w-full bg-white text-black rounded-md text-center' name="" id="nature" onChange={(e => {
          {setFoodData(
            ...foodData,
            nature = e.target.value
          )}
        })}>
          <option value="Vegetatrian">Vegetatrian</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
        </select>

        <label className=' bg-gray-600 rounded-md ' htmlFor="country">Country</label>
        <input className='w-full bg-white text-black rounded-md' type="text" name="country" id="country" onChange={(e => {
          {setFoodData(
            ...foodData,
            country = e.target.value
          )}
        })}/>

        <label className=' bg-gray-600 rounded-md ' htmlFor="recipe">Recipe*</label>
        {/* <input className='w-full bg-white text-black rounded-md' type="text" name="recipe" id="recipe" /> */}
        <textarea className='w-full h-auto bg-white text-black rounded-md' name="" id="recipe" cols="30" rows="4" onChange={(e => {
          {setFoodData(
            ...foodData,
            recipe = e.target.value
          )}
        })}>
        </textarea>
        
        <label className=' bg-gray-600 rounded-md ' htmlFor="imageURL">imageURL</label>
        <input className='w-full bg-white text-black rounded-md' type="text" name="imageURL" id="imageURL" onChange={(e => {
          {setFoodData(
            ...foodData,
            imageURL = e.target.value
          )}
        })}/>
        
      </form>

      <button className='chakra-petch-light w-24 h-8 m-4 border bg-white text-[#242424]' type='submit' onClick={console.log(foodData)}>Post</button>
    </div>
  )
}

export default PostingPage