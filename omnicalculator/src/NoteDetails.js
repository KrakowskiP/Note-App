import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import ReactMarkdown from "react-markdown";

function NoteDetails() {
  const { id } = useParams();
  const { notes, error, loadingMessage } = useFetch(
    "http://localhost:3000/notes/" + id
  );
  const history = useHistory();

  const deleteNote = () => {
    fetch("http://localhost:3000/notes/" + id, {
      method: "DELETE",
    }).then(() => {
      backHomePage();
    });
  };

  const backHomePage = () => {
    history.push("/");
  };

  return (
    <div className="noteDetail">
      <div className="detailButtonsContainer">
        <div className="backButtonContainer">
          <button className="backButton" onClick={backHomePage}>
            Go back
          </button>
        </div>
        <div className="deleteButtonContainer">
          <button className="deleteButtonDetails" onClick={deleteNote}>
            Delete note
          </button>
        </div>
      </div>
      {loadingMessage && <div>Loading...</div>}
      {error && <div>{error}.</div>}
      {notes && (
        <div className="singleNoteDetails" key={notes.id}>
          <ReactMarkdown>{notes.note}</ReactMarkdown>
          <p className="date">{notes.date}</p>
        </div>
      )}
    </div>
  );
}
export default NoteDetails;
