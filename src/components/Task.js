import { useState } from "react";
import { EditTask } from "./EditTask";

export const Task = ({ note, deleteNote }) => {
  const [showTask, setShowTask] = useState(false);
  const [isEditing, setEditing] = useState(false);

  return (
    <div className="container-task-edit">
      {!isEditing ? (
        <div className="container-task" onClick={() => setShowTask(!showTask)}>
          <div className="task">
            <div>
              <h4>{note.title}</h4>
              <p>{showTask ? note.body : `${note.body.substring(0, 5)}...`}</p>
            </div>
          </div>
          <div className="buttons-task">
            <button onClick={() => setEditing(!isEditing)}>Edit</button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        </div>
      ) : (
        <EditTask note={note} isEditing={isEditing} setEditing={setEditing} />
      )}
    </div>
  );
};
