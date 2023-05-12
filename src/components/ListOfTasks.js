import { Task } from "./Task";

export const ListOfTask = ({ notes, filteredNotes, deleteNote }) => {
  return (
    <div>
      {filteredNotes.length > 0
        ? filteredNotes.map((note) => {
            return <Task note={note} deleteNote={deleteNote} key={note.id} />;
          })
        : notes.map((note) => {
            return <Task note={note} deleteNote={deleteNote} key={note.id} />;
          })}
    </div>
  );
};
