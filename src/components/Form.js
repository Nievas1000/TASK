import { useState } from "react";

export const Form = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [noteId, setNoteId] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      id: noteId,
      title,
      body,
      createdDate: new Date(),
      modifiedDate: null,
    });
    setNoteId(noteId + 1);
    setTitle("");
    setBody("");
  };
  return (
    <div className="container-form">
      <div>
        <h1>Form to create notes</h1>
        <form className="form-notes" onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};
