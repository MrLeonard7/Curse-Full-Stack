import { useState, useEffect } from 'react'
import Note from './components/Note.jsx'
import noteService from './services/notes'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2024</em>
    </div>
  )
}


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)


  


  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(changedNote).then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const handleNewNoteChange = (e) => setNewNote(e.target.value)
  
  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)



  return (
      <>
        <h1>Notes</h1>
        <Notification message={errorMessage} />
        <div>
          <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
          </button>
        </div>      
        <ul>
          {notesToShow.map((note, i) =>
         <Note
          key={i}
          note={note}
          toggleImportance={() => toggleImportanceOf(note.id)}
          /> 
          )}
        </ul>
        <div>
          <form onSubmit={addNote}> 
            <input 
            type="text" 
            value={newNote} 
            onChange={handleNewNoteChange}
            required
            />
            <button type="submit">Save</button>
          </form>
        </div>
        <Footer/>
      </>
  )
}

export default App