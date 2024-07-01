import Users from '../models/user.js'

export async function handleGetAllUsers (req , res) {
  const allUsers = await Users.find({})
  res.send(allUsers) 
}

export async function handleCreateNewUser (req , res) {
  const body = req.body
  await Users.create({ 
    ...body 
  })
  return res.status(201).send('User Created')
}

export async function handleDeleteUser (req , res) {
  await Users
  .deleteOne({_id : req.params.id})
  .then((ent) => res.send(`Successfully deleted the requested entry`))
  .catch((err) => res.send(`Could not delete , try again?`))
}

export async function handleGetUserByUsername (req , res) {
  await Users
  .findOne({username : req.params.username})
  .then(user => res.send(user))
  .catch(er => res.send(`Could not find the User`))
}