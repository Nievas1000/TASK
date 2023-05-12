import { useState } from "react";
import { Form } from "./components/Form";
import { ListOfTask } from "./components/ListOfTasks";
import { SearchNotes } from "./components/SearchNotes";
import { useSearchTask } from "./hooks/useSearchTask";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [
    filteredNotes,
    searchByBody,
    searchByTitle,
    searchByFilter,
    selectedFilter,
    setFilteredNotes,
  ] = useSearchTask(notes);
  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (noteId) => {
    if (filteredNotes.length > 0) {
      const updatedNotes = filteredNotes.filter((note) => note.id !== noteId);
      setFilteredNotes(updatedNotes);
    }
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };
  return (
    <div className="App">
      <Form addNote={addNote} />
      <SearchNotes
        searchByBody={searchByBody}
        searchByTitle={searchByTitle}
        selectedFilter={selectedFilter}
        searchByFilter={searchByFilter}
      />
      <ListOfTask
        notes={notes}
        filteredNotes={filteredNotes}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
