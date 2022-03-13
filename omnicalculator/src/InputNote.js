import { useState } from "react";

function InputNote({ setChangedNoteFlag, changedNoteFlag }) {
  const [note, setNote] = useState("");
  const date = new Date().toLocaleDateString();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = { note, date };

    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNote),
    }).then(() => {
      setChangedNoteFlag(!changedNoteFlag);
      setNote("");
    });
  };

  return (
    <div>
      <h2 className="noteDescription">Note</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Note text"
          required
        ></textarea>
        <button className="addButton">Add note</button>
      </form>
    </div>
  );
}
export default InputNote;
