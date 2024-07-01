import mongoose from 'mongoose'

const foodSchema = new mongoose.Schema({
  foodname :  {
    type : String,
    required : true,
    unique : true
  },
  nature : {
    type : String,
    required : true
    // Veg/Non-Veg
  }, 
  country : {
    type : String,
    required : false
  } , 
  recipe : {
    type : String,
    required : true
  },
  imageURL : {
    type : String,
    required : false
  }
})

const Food = mongoose.model('food' , foodSchema)

export default Food