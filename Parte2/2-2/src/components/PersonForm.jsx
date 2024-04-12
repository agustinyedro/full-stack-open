import { useState } from "react";


const PersonForm = ({persons , setPersons}) => {
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    console.log(persons)
  
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
        setNewNumber("");
      }
    };
    const handleNameChange = (event) => {
      setNewName(event.target.value);
    };
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value);
    };
  
    const existPerson = (person) => {
      return persons.find((p) => p.name === person);
    };

    return(
        <form onSubmit={addPerson}>
        <div>
          name : <input value={newName} onChange={handleNameChange} />
          <br />
          number : <input  value={newNumber} onChange={handleNumberChange} />
         
          <br />
          <button type="submit">add</button>
        </div>
      </form>
    )
}
export default PersonForm