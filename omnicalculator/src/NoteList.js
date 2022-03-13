import { useState } from "react";
import InputNote from "./InputNote";
import Notes from "./Notes";
import useFetch from "./useFetch";

function NoteList() {
  const [changedNoteFlag, setChangedNoteFlag] = useState(false);
  const { notes, loadingMessage, error } = useFetch(
    "http://localhost:3000/notes",
    changedNoteFlag
  );

  return (
    <div className="noteInputContainer">
      <div className="noteContent">
        {error && <div>{error}</div>}
        <InputNote
          setChangedNoteFlag={setChangedNoteFlag}
          changedNoteFlag={changedNoteFlag}
        />
        {loadingMessage && <div> Loading... </div>}
        {notes && (
          <Notes
            notes={notes}
            setChangedNoteFlag={setChangedNoteFlag}
            changedNoteFlag={changedNoteFlag}
          />
        )}
      </div>
    </div>
  );
}

export default NoteList;
