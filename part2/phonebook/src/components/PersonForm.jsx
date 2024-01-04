const PersonForm = ({ newName, handleNameChange, newPhone, handlePhoneChange, addPerson }) => {

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>phone: <input value={newPhone} onChange={handlePhoneChange} /></div>
        <div><button type="submit">add</button></div>
      </form>
    </div>
  )
}

export default PersonForm