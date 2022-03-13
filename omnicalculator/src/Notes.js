import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

function Notes({ notes, setChangedNoteFlag, changedNoteFlag }) {
  return (
    <div>
      <h1>Lastest notes</h1>
      {notes
        .sort((a, b) => {
          return b.id - a.id;
        })
        .map((note) => (
          <div className="singleNoteContainer" key={note.id}>
            <div className="allNoteContainer">
              <div className="leftSideNoteContainer">
                <ReactMarkdown>{note.note}</ReactMarkdown>
                <Link to={`/note/${note.id}`}>
                  <p className="date">{note.date}</p>
                </Link>
              </div>
              <div className="rigthSideNoteContainer">
                <DeleteButton
                  id={note.id}
                  setChangedNoteFlag={setChangedNoteFlag}
                  changedNoteFlag={changedNoteFlag}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default Notes;
