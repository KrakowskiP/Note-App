function DeleteButton({ id, setChangedNoteFlag, changedNoteFlag }) {
  const deleteNote = () => {
    fetch("http://localhost:3000/notes/" + id, {
      method: "DELETE",
    });
    setChangedNoteFlag(!changedNoteFlag);
  };

  return (
    <button className="deleteButton" onClick={deleteNote}>
      Delete note
    </button>
  );
}
export default DeleteButton;
