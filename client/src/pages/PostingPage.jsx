import React, { useState } from 'react'
import axios from 'axios'

const PostingPage = () => {

  const [foodData , setFoodData] = useState({
    foodname : '',
    nature : 'Vegetarian',
    country : '',
    recipe : '',
    imageURL : ''
  })

  const handleFoodnameChange = (event) => {
    setFoodData({...foodData , foodname : event.target.value})
  }

  const handleFoodNatureChange = (event) => {
    setFoodData({...foodData , nature : event.target.value})
  }

  const handleFoodCountryChange = (event) => {
    setFoodData({...foodData , country : event.target.value})
  }

  const handleFoodRecipeChange = (event) => {
    setFoodData({...foodData , recipe : event.target.value})
  }

  const handleFoodIMGChange = (event) => {
    setFoodData({...foodData , imageURL : event.target.value})
  }

  const handleSubmitFood = async () => {
    console.log('clicked' , foodData)
    
    await axios.post('http://localhost:8000/food' , 
      {...foodData}, 
    )
  }


  return (
    <div className='postingpage_wrapper w-screen h-screen flex flex-col items-center'>
      <header className='chakra-petch-bold text-xl w-full h-12 text-center m-2'>Post Your Delicacy</header>

      <form className='w-72 h-3/5 mt-4 flex flex-col text-center justify-around chakra-petch-bold'>

        <label className=' bg-gray-600 rounded-md ' htmlFor="foodname">FoodName*</label>
        <input className='w-full bg-white text-black rounded-md' type="text" name="foodname" id="foodname" value={foodData.foodname} onChange={handleFoodnameChange} />

        <label className=' bg-gray-600 rounded-md ' htmlFor="nature">Nature*</label>
        <select className='w-full bg-white text-black rounded-md text-center' name="" id="nature" value={foodData.nature} onChange={handleFoodNatureChange}>
          <option value="Vegetatrian">Vegetatrian</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
        </select>

        <label className=' bg-gray-600 rounded-md ' htmlFor="country">Country</label>
        <input className='w-full bg-white text-black rounded-md' type="text" name="country" id="country" value={foodData.country} onChange={handleFoodCountryChange}/>

        <label className=' bg-gray-600 rounded-md ' htmlFor="recipe">Recipe*</label>
        <textarea className='w-full h-auto bg-white text-black rounded-md' name="" id="recipe" cols="30" rows="4" value={foodData.recipe} onChange={handleFoodRecipeChange}></textarea>
        
        <label className=' bg-gray-600 rounded-md ' htmlFor="imageURL">imageURL</label>
        <input className='w-full bg-white text-black rounded-md' type="text" name="imageURL" id="imageURL" value={foodData.imageURL} onChange={handleFoodIMGChange}/>
        
      </form>

      <button className='chakra-petch-light w-24 h-8 m-4 border bg-white text-[#242424]' type='submit' onClick={handleSubmitFood}>Post</button>
    </div>
  )
}

export default PostingPage