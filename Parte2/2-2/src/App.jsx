import { useState } from "react";
import Persons from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    if (existPerson(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    } else if (newName === "") {
      alert("Name cannot be empty");
      return;
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(personObject));
      setNewName("");
    }
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const existPerson = (person) => {
    return persons.find((p) => p.name === person)
  
  };
  const findPerson = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const person = persons.filter((p) => p.name.toLowerCase().includes(searchTerm));
    setSearchResults(person);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <span>filter shown with</span>
      <input onChange={findPerson}/>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name : <input value={newName} onChange={handleNameChange} />
          <br />
          number : <input value={newNumber} onChange={handleNumberChange} />
          <br />
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {searchTerm === "" ? (  
          persons.map((person) => (
            <Persons person={person.name} number={person.number} />
          ))
        )
        : (searchResults.map((person) => (
          <Persons person={person.name} number={person.number} />
        )))}
      </ul>
    </div>
  );
}

export default App;
