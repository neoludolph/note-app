import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [note, setNote] = useState("")
  const [notes, setNotes] = useState([])

  const addNote = () => {
    const newArray = [...notes, note]
    setNotes(newArray)
    setNote("")
  }

  const deleteNote = (index) => {
    notes.filter(index)
  }

  return (
    <div>
      <h1>Meine Notizen</h1>
      <input type="text" placeholder='Your Note...' value={note} onChange={(event) => setNote(event.target.value)}/>
      <button onClick={addNote}>
        Save
      </button>
      <ul>
        {notes.map((note, index) => (
          <li>{note} {<button onClick={() => deleteNote(index)}>Delete</button>}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
