import mongoose from "mongoose";

const connectMongoDB = async (url) => {
return mongoose.connect(url)
.then(()=>{console.log('connection to mongodb succeeded')})
.catch((err)=>{console.log(`error : ${err}`)})
}

export default connectMongoDB