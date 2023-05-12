import { useState } from "react";

export const EditTask = ({ note, isEditing, setEditing }) => {
  const [newTitle, setNewTitle] = useState(note.title);
  const [newBody, setNewBody] = useState(note.body);
  const editNote = () => {
    note.title = newTitle;
    note.body = newBody;
    note.modifiedDate = new Date();
    console.log(note);
    setEditing(false);
  };
  return (
    <div className="edit-container">
      <div className="container-form-edit">
        <form className="form-edit">
          <label>Title:</label>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <label>Body:</label>
          <textarea
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
          />
        </form>
      </div>
      <div className="buttons-task">
        <div className="buttons-edit">
          <button onClick={() => setEditing(!isEditing)}>Cancel</button>
          <button onClick={editNote}>Apply</button>
        </div>
      </div>
    </div>
  );
};
