import Food from '../models/food.js'

export async function handleGetAllFood (req , res) {
  const allFood = await Food.find({})
  res.send(allFood) 
}

export async function handleCreateNewFood (req , res) {
  const body = req.body
  await Food.create({ 
    ...body 
  })
  return res.status(201).send('Food Created')
}

export async function handleDeleteFood (req , res) {
  await Food
  .deleteOne({_id : req.params.id})
  .then((ent) => res.send(`Successfully deleted the requested entry`))
  .catch((err) => {res.send(`Could not delete , try again?`)})
}

export async function handleGetFoodByFoodname (req , res) {
  await Food
  .findOne({foodname : req.params.foodname})
  .then(food => res.send(food))
  .catch(er => res.send(`Could not find the Food`))
}