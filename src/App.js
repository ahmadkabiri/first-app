import { useState, useEffect, useMemo } from "react";
// import "./App.css";
export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const addNewNote = () => {
    let newNoteObj = {
      id: notes.length + 1,
      title: newNote,
    };

    setNotes((prevNotes) => [...prevNotes, newNoteObj]);
    setNewNote('')
  };



  return (
    <div>
      <input
        type="text"
        value={newNote}
        onChange={(event) => setNewNote(event.target.value)}
      />
      <button onClick={addNewNote}>Add New Note</button>
      <hr />
      <h3>All Notes</h3>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.id} - {note.title}
          </li>
        ))}
      </ul>
      <hr />
      <h3>Js Included Note</h3>
      {useMemo(()=>{
        return notes.filter(note => note.title.toLowerCase().includes("js")).map(note=> (
          <li>{note.id} - {note.title}</li>
        ))
      },[notes])}
    </div>
  );
}
