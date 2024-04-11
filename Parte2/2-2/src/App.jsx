import { useState } from 'react'
import Persons from './components/Persons'


function App() {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
    }
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }
  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  return (
  <div>
    <h2>Phonebook</h2>
    <form onSubmit={addPerson}>
      <div>
        name : <input value={newName} onChange={handleNameChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    <h2>Numbers</h2>
    <ul>
      {persons.map(person => <Persons person={person.name}/>)}
    </ul>
  </div> 
  )
}

export default App
