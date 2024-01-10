const Persons = ({ persons, filter, handleDelete }) => {
  // Relies on no duplicate names and is a monstrous function

  const renderFiltered = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    .map(person => <li key={person.name}>{person.name} {person.number} <button onClick={handleDelete} value={person.id}>delete</button></li>)

  return (
    <div>
      <p>{renderFiltered}</p>
    </div>
  )
}

export default Persons