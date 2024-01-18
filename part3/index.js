require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const Person = require('./models/person')

const app = express()

morgan.token('json-post', (request) => {
  return JSON.stringify(request.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :json-post'))

app.use(express.static('dist'))
app.use(express.json())

app.get('/api/persons', (request, response) => {
  Person.find({}).then(people => {
    response.json(people)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

// TODO: extract error handling question mark?
app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: `${!body.name && !body.number ? 'body and number' :
        !body.name ? 'body' :
          !body.number ? 'number' : ''} missing`
    })
  }

  // if (people.map(entry => entry.name.toLowerCase()).includes(body.name.toLowerCase())) {
  //   return response.status(400).json({
  //     error: 'name already exists'
  //   })
  // }

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

app.put('api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.get('/info', (request, response) => {
  Person.find({})
    .then(people => {
      response.send(
        `<p>Phonebook has info for ${Object.keys(people).length} people</p>
         <p>${new Date()}</p>`
      )
    })
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

// TODO: should handle wrong ids for put AND get, name already existing?, deletion error?
// CastError - malformatted id
const errorHandler = (error, request, response, next) => {
  if (error === 'CastError') {
    response.status(400).send({ error: 'malformatted id' })
  }
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})