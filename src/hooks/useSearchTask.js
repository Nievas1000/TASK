import { useState } from "react";

export const useSearchTask = (notes) => {
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");

  const searchByFilter = (e) => {
    const value = e.target.value;
    setSelectedFilter(value);
    if (value === "title") {
      notes.sort((note1, note2) => {
        if (note1.title < note2.title) {
          return -1;
        }
        if (note1.title > note2.title) {
          return 1;
        }
        return 0;
      });
    } else if (value === "createdDate") {
      notes.sort((note1, note2) => note1.createdDate - note2.createdDate);
    } else if (value === "modifiedDate") {
      console.log(notes);
      notes.sort((note1, note2) => note2.modifiedDate - note1.modifiedDate);
      console.log(notes);
    }
  };

  const searchByTitle = (e) => {
    const value = e.target.value;
    const data = notes.filter((note) => {
      const noteTitle = note.title.toLowerCase();
      const searchTerm = value.toLowerCase();

      return noteTitle.indexOf(searchTerm) > -1;
    });
    if (value.length > 0) {
      setFilteredNotes(data);
    } else {
      setFilteredNotes([]);
    }
  };
  const searchByBody = (e) => {
    const value = e.target.value;
    const data = notes.filter((note) => {
      const noteTitle = note.body.toLowerCase();
      const searchTerm = value.toLowerCase();

      return noteTitle.includes(searchTerm);
    });
    if (value.length > 0) {
      setFilteredNotes(data);
    } else {
      setFilteredNotes([]);
    }
  };
  return [
    filteredNotes,
    searchByBody,
    searchByTitle,
    searchByFilter,
    selectedFilter,
    setFilteredNotes,
  ];
};
