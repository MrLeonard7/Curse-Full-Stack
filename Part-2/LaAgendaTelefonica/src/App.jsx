import { useEffect, useState } from 'react'
import personService from './Services/persons'
import './Styles/App.css'
import { Persons } from './Components/Persons'
import { Filter } from './Components/Filter'
import { PersonForm } from './Components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([])  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() =>{
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
    
  }, [])

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
      const personObject = {
        name: formattedNewName,
        number: numberToAdd
      }

      personService.create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })

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