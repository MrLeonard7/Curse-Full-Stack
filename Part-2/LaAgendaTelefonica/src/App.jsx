import { useEffect, useState } from 'react'
import personService from './Services/persons'
import './Styles/App.css'
import { Persons } from './Components/Persons'
import { Filter } from './Components/Filter'
import { PersonForm } from './Components/PersonForm'


const Notification = ({ message, classNotification }) => {
  if (message == null) {
    return null
    
  }

  return (
    <div className={classNotification} >
      { message }
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [notification, setNotification] = useState(null)
  const [error, setError] = useState(null)

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
    
    const personToModify = persons.find(person => person.name.toLowerCase() === formattedNewName.toLowerCase())
    console.log(personToModify)

    const personObject = {
        name: formattedNewName,
        number: numberToAdd
      }
    
    if (arrayNames.includes(formattedNewName.toLowerCase())) {
      window.confirm(
        `${formattedNewName} is already added to phonebook ,replace the old number with a new one?`)
        ? personService.update(personToModify.id,personObject)
        .then(response => {
          setNotification(
            `${response.name}'s number was modified to ${response.number}`)
          setTimeout(() => {
            setNotification(null)
          }, 5000)
          }).catch(() => {
            setError(
                  `Information of ${personObject.name} has already been removed from server`)
                setTimeout(() => {
                  setError(null)
                  window.location.reload(true)
                }, 5000)
    })
          :setNotification(
          `${formattedNewName}'s number was not modified`)
          setTimeout(() => {
            setNotification(null)
          }, 5000)
    } else if (formattedNewName === '') {
      alert(`Name cannot be empty`)

    }
     else {     

      personService.create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNotification(`${personObject.name} was added`)
        setTimeout(() => {
          setNotification(null)
        }, 5000)
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
    .then(() => {
      setError(`${name} has been eliminated`)
      setTimeout(() => {
      setError(null)
      window.location.reload(true)
    }, 5000)
    }
    )
    : setNotification(`${name} has not been eliminated`)
    setTimeout(() => {
      setNotification(null)
    }, 5000)

  }


  return (
    <div className='App' >
      <h2>Phonebook</h2>

      {notification && 
      <Notification message={notification} classNotification={'notification'} />}
      {error && 
      <Notification message={error} classNotification={'error'} />}

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