import { useEffect, useState } from 'react'
import personService from './services/persons'

import Persons from './components/Persons'
import Input from './components/Input'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const addPerson = event => {
    event.preventDefault()

    if (persons.find(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      number: newPhone
    }

    personService.create(newPerson)
      .then(addedPerson => {
        setPersons(persons.concat(addedPerson))
        // clear input field
        setNewName('')
        setNewPhone('')

      })
  }

  const handleNameChange = event => setNewName(event.target.value)
  const handlePhoneChange = event => setNewPhone(event.target.value)
  const handleFilterChange = event => setFilter(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Input header='filter shown (by name) with' value={filter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App