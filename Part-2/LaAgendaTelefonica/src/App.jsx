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
    personService.getAll().then(initialPersons => {+
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
    const formattedNewName =  trimmedNewName
                                    .split(' ')
                                    .filter(word => word !== '')
                                    .join(' ');

    const numberToAdd = newNumber

    const arrayNames = persons.map(person => person.name.toLowerCase())
    console.log(arrayNames);
    
    const objectPerson = persons.find(person => person.name.toLowerCase() === formattedNewName.toLowerCase())
    console.log(objectPerson)

    const personObject = {
        name: formattedNewName,
        number: numberToAdd
      }
    
    if (arrayNames.includes(formattedNewName.toLowerCase())) {
      window.confirm(`${formattedNewName} is already added to phonebook ,replace the old number with a new one?`)
        ? personService.update(objectPerson.id,personObject)
        .then(response => alert(`${response.name}'s number was modified to ${response.number}`)) :
        alert(`${formattedNewName}'s number was not modified`)
      window.location.reload(true)
    } else if (formattedNewName === '') {
      alert(`Name cannot be empty`)

    }
     else {     

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
  const handleDeletePerson = (id, name) => {
    window.confirm(`Delete ${name}`) ? personService.eliminate(id)
    : alert(`${name} has not been eliminated`)
    window.location.reload(true)
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
      
      <Persons results={results} handleDeletePerson={handleDeletePerson} />

    </div>
  )
}

export default App