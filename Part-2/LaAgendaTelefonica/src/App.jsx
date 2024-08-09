import { useState } from 'react'


const Persons = (props) => <p> {props.name} {props.number} </p> 



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setShearch] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const trimmedNewName = newName.trim()
    const formattedNewName =  trimmedNewName.split(' ')
                                    .filter(word => word !== '')
                                    .join(' ');

    const numberToAdd = newNumber

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
        number: numberToAdd
      }
      setPersons(persons.concat(nameObject))
    }
    setNewName('')
    setNewNumber('')

  } 
  //console.log(persons);

  const searcher = (e) => {
    setShearch(e.target.value)
    console.log(e.target.value)
    
  }

  let results = []
  if (!search) {
    results = persons
  }else{
    results = persons.filter((person) => (
      person.name.toLowerCase().includes(search.toLowerCase())
    ))
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter show with: <input type='text' onChange={searcher} placeholder='Filter' value={search}  />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson} >
        <div>
          name: <input value={newName} onChange={handleNameChange} required/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} required/>
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {results.map(person => <Persons key={person.name} name={person.name} number={person.number} />)}
      </div>
    </div>
  )
}

export default App