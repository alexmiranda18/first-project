const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const uuid = require('uuid')
app.use(express.json())
app.use(cors());


const users = [];

app.get('/users', (request, response) => {
  //if (users.length === 0)
    return response.json(users)
});

app.post('/users', (request, response) => {
  const { name, age } = request.body

  const user = { id: uuid.v4(), name, age }
  users.push(user)

  return response.status(201).json(user)
})

app.put('/users/:id', (request, response) => {
  const { id } = request.params
  const { name, age } = request.body

  const updateUser = { id, name, age }

  const index = users.findIndex(user => user.id === id)

  if (index < 0) {
    return response.status(404).json({ message: " 404 User not found" })
  }
  if (!user)
    users[index] = updateUser
  try {
    const updateUser = { id, name, age }

    const index = users.findIndex(user => user.id === id)

    if (index < 0) {
      return response.status(404).json({ message: "User not found" })
    }
    users[index] = updateUser

    return response.json({ updateUser })
  } catch (error) {
    return response.status(500).json({ message: "Something went wrong" })
  }
})
app.delete('/users/:id', (request, response) => {
  const { id } = request.params;

  const index = users.findIndex(user => user.id === id);

  if (index >= 0) {
    users.splice(index, 1);
    return response.status(204).json();
  }

  return response.status(404).json({ message: "User not found" });
});

app.listen(port, () => {
  console.log('🤖 ta funcionando uhuuu😉😎');
}) 