import express from 'express'
import {handleGetAllUsers , handleCreateNewUser , handleDeleteUser , handleGetUserByUsername} from'../controllers/user.js'

const router = express.Router()
router
.get('/' , handleGetAllUsers)
.get('/:username' , handleGetUserByUsername)
.post('/' , handleCreateNewUser)
.delete('/:id' , handleDeleteUser)

export default router