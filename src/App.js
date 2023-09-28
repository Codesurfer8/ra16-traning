import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form/Form';
import List from './components/List/List';
import './App.css';

const INITIAL_NOTES = [
  { id: nanoid(), date: '2023-09-28', km: 5 },
  { id: nanoid(), date: '2023-09-27', km: 4 },
];

export default function App() {

  const [notes, setNotes] = useState(INITIAL_NOTES);

  const handleAddNote = (newNote) => {
    const indexOfDate = notes.findIndex((item) => item.date === newNote.date);
    if (indexOfDate === -1) {
      setNotes((prevNotes) => [...prevNotes, newNote]);
    } else {
      setNotes((prevNotes) => {
        const newNotes = [...prevNotes];
        newNotes[indexOfDate].km += newNote.km;
        return newNotes;
      });
    }
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <header>
        <h1 className='title'>Учет пройденного расстояния</h1>
      </header>
      <Form onSubmit={handleAddNote} />
      <List notes={notes} onDeleteNote={handleDeleteNote} />
    </div>
  );
}