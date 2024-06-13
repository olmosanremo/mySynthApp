import React, { useState } from 'react';
import * as Tone from 'tone';
import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const Synthesizer = ({ user }) => {
  const [notes, setNotes] = useState([]);
  const [recording, setRecording] = useState(false);

  const synth = new Tone.Synth().toDestination();

  const playNote = (note) => {
    synth.triggerAttackRelease(note.frequency, "8n");
    
    if (recording) {
      const noteData = { note: note.name, frequency: note.frequency, time: new Date().toISOString() };
      setNotes([...notes, noteData]);
    }
  };

  const startRecording = () => {
    setNotes([]);
    setRecording(true);
  };

  const stopRecording = async () => {
    setRecording(false);
    if (user) {
      const userDoc = doc(db, 'users', user.uid);
      await setDoc(userDoc, { notes }, { merge: true });
      alert('Noten gespeichert');
    }
  };

  const noteList = [
    { name: 'C4', frequency: '261.63' },
    { name: 'D4', frequency: '293.66' },
    { name: 'E4', frequency: '329.63' },
    // Weitere Noten hinzufügen
  ];

  return (
    <div>
      <h2>Synthesizer</h2>
      <div>
        {noteList.map((note) => (
          <button key={note.name} onClick={() => playNote(note)}>
            {note.name}
          </button>
        ))}
      </div>
      {user && (
        <div>
          <button onClick={startRecording} disabled={recording}>Aufnahme starten</button>
          <button onClick={stopRecording} disabled={!recording}>Aufnahme stoppen</button>
        </div>
      )}
    </div>
  );
};

export default Synthesizer;