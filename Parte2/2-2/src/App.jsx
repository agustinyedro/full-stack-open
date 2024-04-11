import { useState } from "react";
import Persons from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      number: "040-123456",
    },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map((person) => (
          <Persons person={person.name} number={person.number} />
        ))}
      </ul>
    </div>
  );
}

export default App;
