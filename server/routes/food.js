import express from "express";
import {handleGetAllFood , handleCreateNewFood , handleDeleteFood , handleGetFoodByFoodname} from'../controllers/food.js'

const router = express.Router()
router
.get('/' , handleGetAllFood)
.get('/:foodname' , handleGetFoodByFoodname)
.post('/' , handleCreateNewFood)
.delete('/:id' , handleDeleteFood)

export default router