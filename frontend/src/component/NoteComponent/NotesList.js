import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("/api/v2/notes");
        const data = await response.json();
        setNotes(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNotes();
  }, []);

  const handleDeleteNote = async (id) => {
    try {
      const response = await fetch(`/api/v2/notes/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      } else {
        console.error("Failed to delete note.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="row notes-row">
        <h1 className="text-center mt-5">Notes</h1>
        <div className="d-flex col-12 flex-wrap">
          {notes.map((note) => (
            <div
              className="card bg-light my-3 mx-5 col-xxl-3 justify-content-evenly"
              key={note._id}
            >
              <p
                className="noteDescription text-center"
                style={{ fontSize: "20px" }}
              >
                {note.text}
              </p>
              <div className="d-flex justify-content-center">
                <button
                  onClick={() => handleDeleteNote(note._id)}
                  style={{ width: "80px" }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <Link to="/notes" style={{ textDecoration: "none" }}>
          <div className="d-flex justify-content-start ms-5 my-3">
            <button style={{ width: "150px", height: "50px" }}>
              Create New Note
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default NoteList;
