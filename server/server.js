import express from 'express'
import cors from 'cors'

import connectMongoDB from './connection.js'
import userRouter from './routes/user.js'
import foodRouter from './routes/food.js'

const PORT = 8000 

const app = express()
app.use(cors())

app.use(express.urlencoded({extended : false}))
app.use(express.json());

connectMongoDB('mongodb+srv://Onkar:Xiangling@recipeappdb.dfa7tes.mongodb.net/?retryWrites=true&w=majority&appName=RecipeAppDB')

app.use('/user' , userRouter)
app.use('/food' , foodRouter)

app.listen( PORT , ()=> {console.log(`The server is running at port : ${PORT}`)} )