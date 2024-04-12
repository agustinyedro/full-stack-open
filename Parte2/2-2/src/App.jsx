import { useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const findPerson = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const person = persons.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(person);
  };
 
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={searchTerm} findPerson={findPerson} />
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons}></PersonForm>
      <h2>Numbers</h2>
      <ul>
      <Persons persons={searchTerm===""?persons:searchResults} />
      </ul>
    </div>
  );
}

export default App;
