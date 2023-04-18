import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";

function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const history = useHistory();

  const { loading, error, success } = useSelector(
    (state) => state.createTender
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/v2/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: noteText }),
      });
      const data = await response.json();
      setNoteText("");
      history.push("/noteslist");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className="card mt-5" onSubmit={handleSubmit}>
        <textarea
          className="card"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <div className="d-flex justify-content-center">
          <Button
            id="createProductBtn"
            type="submit"
            className="mt-4"
            style={{ width: "100px", height: "40px" }}
            disabled={loading ? true : false}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
}

export default NoteForm;
