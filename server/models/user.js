import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username :  {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true,
    unique : true
  },
  usertype : {
    type : String,
    required : false
  }
})

const Users = mongoose.model('user' , userSchema)

export default Users