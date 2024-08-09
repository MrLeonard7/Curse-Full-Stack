import axios from 'axios'
import { useEffect, useState } from 'react'
import './Styles/App.css'


const Persons = (props) => {
  return (
    <>
      {props.results.map(person => 
      <p key={person.name} > {person.name} {person.number}  </p>)}
    </>
  )
}  
 


const Filter = (props) => {
  return (
    <>
      filter show with: 
      <input 
      type='text' 
      onChange={props.searcher} 
      placeholder='Filter' 
      value={props.search}
        />

    </>
  )
}


const PersonForm = (props) => {
  return (
    <>  
      <form onSubmit={props.addPerson} >
        <div>
          name:
           <input
            value={props.newName}
             onChange={props.handleNameChange}
              required/>
        </div>
        <div>
          number:
           <input value={props.newNumber}
            onChange={props.handleNumberChange}
             required/>

          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

    
    </>
  )
}


const App = () => {
  const [persons, setPersons] = useState([])  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() =>{
    axios
    .get('http://localhost:3000/persons')
    .then(response => {
      setPersons(response.data)
    })
  })

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
    setSearch(e.target.value)
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
    <div className='App' >
      <h2>Phonebook</h2>

      <Filter search={search} searcher={searcher} />

      <h3>Add a new</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      
      <Persons results={results} />

    </div>
  )
}

export default App