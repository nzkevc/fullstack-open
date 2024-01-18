const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('please give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://kevin-cheung:${password}@cluster0.rzd09bb.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)


const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export const Person = mongoose.model('Person', personSchema)

if (process.argv[3] && process.argv[4]) {
  const name = process.argv[3]
  const number = process.argv[4]
  const newPerson = new Person({ name, number })
  console.log(newPerson)

  newPerson.save().then(result => {
    console.log('person saved!')
    mongoose.connection.close()
  })
} else {
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })
}