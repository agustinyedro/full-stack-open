

const Filter = ({ persons, findPerson }) => {
  return (
    <div>
      filter shown with <input value={persons} onChange={findPerson} />
    </div>
  );
};
export default Filter;
