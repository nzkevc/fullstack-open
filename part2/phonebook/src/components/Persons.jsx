const Persons = ({ persons, filter }) => {
  // Relies on no duplicate names and is a fucking monstrous function

  const renderFiltered = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    .map(person => <li key={person.name}>{person.name} {person.phone}</li>)

  return (
    <div>
      <p>{renderFiltered}</p>
    </div>
  )
}

export default Persons