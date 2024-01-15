const express = require('express')

const app = express()

let people = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]

app.get('/', (request, response) => {
  response.json(people)
})

app.get('/:id', (request, response) => {
  const id = Number(request.params.id)
  response.json(people.find(entry => entry.id === id))
})

app.delete('/:id', (request, response) => {
  const id = Number(request.params.id)
  people = people.filter(entry => entry.id !== id)

  response.status(204).end()
})

app.get('/info', (request, response) => {
  response.send(`<p>Phonebook has info for ${people.length} people</p>
                 <p>${new Date()}</p>`)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})