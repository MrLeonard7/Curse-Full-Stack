export const Persons = (props) => {

  

  return (
    <>
      {props.results.map(person => {
        return (
          <div key={person.id}>
            <> {person.name} {person.number} </>
            <button onClick={() => props.handleDeletePerson(person.id, person.name)} >delete</button>
          </div>
        )
      })}
    </>
  );
};
