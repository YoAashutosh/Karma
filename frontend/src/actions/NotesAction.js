import axios from "axios";
import {
  FETCH_NOTES_REQUEST,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  CREATE_NOTE_REQUEST,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_FAILURE,
  UPDATE_NOTE_REQUEST,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAILURE,
  DELETE_NOTE_REQUEST,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE,
} from "../constans/NotesConstans";

export const fetchNotes = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_NOTES_REQUEST });
    const res = await axios.get("/api/v2/notes");
    dispatch({ type: FETCH_NOTES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: FETCH_NOTES_FAILURE,
      payload: error.response.data.error,
    });
  }
};

export const createNote = (text) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_NOTE_REQUEST });
    const res = await axios.post("/api/v2/notes", { text });
    dispatch({ type: CREATE_NOTE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: CREATE_NOTE_FAILURE,
      payload: error.response.data.error,
    });
  }
};

export const updateNote = (id, text) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_NOTE_REQUEST });
    const res = await axios.put(`/api/v2/notes/${id}`, { text });
    dispatch({ type: UPDATE_NOTE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: UPDATE_NOTE_FAILURE,
      payload: error.response.data.error,
    });
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_NOTE_REQUEST });
    await axios.delete(`/api/v2/notes/${id}`);
    dispatch({ type: DELETE_NOTE_SUCCESS, payload: id });
  } catch (error) {
    dispatch({
      type: DELETE_NOTE_FAILURE,
      payload: error.response.data.error,
    });
  }
};
