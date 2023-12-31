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
      if (confirm((`${newName} is already added to the phonebook, replace the old number with a new one?`))) {
        const updatedPerson = { ...persons.find(person => person.name.toLowerCase() === newName.toLowerCase()), number: newPhone }
        handleUpdate(updatedPerson)
        return
      }
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

  // STUPID TYPES
  const handleDelete = event => {
    if (confirm(`Delete ${persons.find(person => person.id === Number(event.target.value)).name}?`)) {
      personService.deleteResource(event.target.value)
        .then(() => setPersons(persons.filter(person => person.id !== Number(event.target.value))))
    }
  }

  const handleUpdate = (updatedPerson) => {
    personService.update(updatedPerson.id, updatedPerson)
    setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person))
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
      <Persons persons={persons} filter={filter} handleDelete={handleDelete} />
    </div>
  )
}

export default App