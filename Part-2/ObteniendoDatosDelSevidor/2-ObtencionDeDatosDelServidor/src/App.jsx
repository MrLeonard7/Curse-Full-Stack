import './App.css'
import { useState, useEffect } from 'react'
import Note from './components/Note.jsx'
import noteService from './services/notes'



  const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  


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
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      }).catch(error => {
      alert(
        `the note '${note.content}' was already deleted from server`
      )
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

  const handleNewNoteChange = (e) =>
    setNewNote(e.target.value)


  return (
      <>
        <h1>Hola Mundo</h1>
        <div>
          <form onSubmit={addNote}>
            <label>
            new note:
            </label>  
            <input 
            type="text" 
            value={newNote} 
            onChange={handleNewNoteChange}
            required
            />
            <button type="submit">Add Note</button>
          </form>
        </div>
        <ul>
          {notes.map((note, i) =>
         <Note
          key={i}
          note={note}
          toggleImportance={() => toggleImportanceOf(note.id)}
          /> 
          )}

        </ul>
      </>
  )
}

export default App