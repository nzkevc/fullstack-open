import { useEffect, useState } from 'react'
import personService from './services/persons'

import Persons from './components/Persons'
import Input from './components/Input'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  // probably bad that it's an object but ehhhhh
  const [errorMessage, setErrorMessage] = useState({ type: 'error', message: null })

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
        setErrorMessage({ type: 'success', message: `${addedPerson.name} sucessfully added to the server` })
        setTimeout(() => {
          setErrorMessage({ type: 'error', message: null })
        }, 5000)
      })
  }

  // STUPID TYPES
  const handleDelete = event => {
    // TODO: don't be stupid with event target and button parameters, just put params in your FUNCTIONNNNN
    if (confirm(`Delete ${persons.find(person => person.id === Number(event.target.value)).name}?`)) {
      personService.deleteResource(event.target.value)
        .then(() => setPersons(persons.filter(person => person.id !== Number(event.target.value))))
    }
  }

  const handleUpdate = (updatedPerson) => {
    personService.update(updatedPerson.id, updatedPerson)
      .catch(error => {
        console.log(error)
        setErrorMessage({ type: 'error', message: `Information of ${updatedPerson.name} has already been removed from the server` })
        setPersons(persons.filter(person => person.id !== updatedPerson.id))
        setTimeout(() => {
          setErrorMessage({ type: 'error', message: null })
        }, 5000)
      })
    setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person))
  }

  const handleNameChange = event => setNewName(event.target.value)
  const handlePhoneChange = event => setNewPhone(event.target.value)
  const handleFilterChange = event => setFilter(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification type={errorMessage.type} message={errorMessage.message}></Notification>
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