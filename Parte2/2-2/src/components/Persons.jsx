import Person from "./Person";

const Persons = ({persons}) => {

    
  return (
    persons.map((person) => <Person person={person.name} number={person.number} />)
  )
};
export default Persons;
