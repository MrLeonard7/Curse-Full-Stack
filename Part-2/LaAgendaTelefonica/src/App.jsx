import { useState } from 'react'

const Names = (props) => <p> {props.text} </p> 

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const trimmedNewName = newName.trim()
    const formattedNewName =  trimmedNewName.split(' ')
                                    .filter(word => word !== '')
                                    .join(' ');
    const arrayNames = persons.map(person => person.name)
    console.log(arrayNames, formattedNewName);
    if (arrayNames.includes(formattedNewName)) {
      alert(`${formattedNewName} is alredy added to phonebook`)

    } else if (formattedNewName === '') {
      alert(`Name cannot be empty`)

    }
     else {
      const nameObject = {
        name: formattedNewName,
      }
      setPersons(persons.concat(nameObject))
    }
    setNewName('')

  } 
  //console.log(persons);


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value={newName} onChange={handleNameChange} required/>
        </div>
        <div>
          number: <input />
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <Names key={person.name} text={person.name} />)}
      </div>
    </div>
  )
}

export default App