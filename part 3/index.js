const express = require('express')

const app = express()

app.use(express.json())

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

const generateId = () => {
  return Math.random() * 10000
}

app.get('/api/persons', (request, response) => {
  response.json(people)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = people.find(entry => entry.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  people = people.filter(entry => entry.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    response.status(400).json({
      error: `${!body.name && !body.number ? 'body and number' :
        !body.name ? 'body' :
          !body.number ? 'number' : ''} missing`
    })
  }

  if (people.map(entry => entry.name.toLowerCase()).includes(body.name.toLowerCase())) {
    response.status(400).json({
      error: 'name already exists'
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number || ''
  }

  people = people.concat(person)
  response.json(person)
})

app.get('/info', (request, response) => {
  response.send(`<p>Phonebook has info for ${people.length} people</p>
                 <p>${new Date()}</p>`)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})