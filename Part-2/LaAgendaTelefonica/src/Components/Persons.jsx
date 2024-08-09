export const Persons = (props) => {
  return (
    <>
      {props.results.map(person => <p key={person.name}> {person.name} {person.number}  </p>)}
    </>
  );
};
