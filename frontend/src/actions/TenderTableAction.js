import axios from "axios";
import {
  ADMIN_TENDERTABLE_FAIL,
  ADMIN_TENDERTABLE_REQUEST,
  ADMIN_TENDERTABLE_SUCCESS,
  ALL_TENDERTABLE_FAIL,
  ALL_TENDERTABLE_REQUEST,
  ALL_TENDERTABLE_SUCCESS,
  CLEAR_ERRORS,
  DELETE_TENDERTABLE_FAIL,
  DELETE_TENDERTABLE_REQUEST,
  DELETE_TENDERTABLE_SUCCESS,
  NEW_TENDERTABLE_FAIL,
  NEW_TENDERTABLE_REQUEST,
  NEW_TENDERTABLE_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  TENDERTABLE_DETAILS_FAIL,
  TENDERTABLE_DETAILS_REQUEST,
  TENDERTABLE_DETAILS_SUCCESS,
  UPDATE_TENDERTABLE_FAIL,
  UPDATE_TENDERTABLE_REQUEST,
  UPDATE_TENDERTABLE_SUCCESS,
} from "../constans/tenderTableCons";

export const getTenderTable =
  (keyword = "", currentPage = 1, category) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_TENDERTABLE_REQUEST,
      });

      let link = `/api/v2/tendertable?keyword=${keyword}&page=${currentPage}`;

      if (category) {
        link = `/api/v2/tendertable?keyword=${keyword}&page=${currentPage}&category=${category}`;
      }
      const { data } = await axios.get(link);

      dispatch({
        type: ALL_TENDERTABLE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_TENDERTABLE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All TenderTables Details
export const getTenderTableDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: TENDERTABLE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/tendertable/${id}`);

    dispatch({
      type: TENDERTABLE_DETAILS_SUCCESS,
      payload: data.tenderts,
    });
  } catch (error) {
    dispatch({
      type: TENDERTABLE_DETAILS_FAIL,
      payload: error.response.message,
    });
  }
};

// NEW REVIEW
export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/tender/review`,
      reviewData,
      config
    );

    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create TenderTable --------Admin
export const createTenderTable = (tendertableData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_TENDERTABLE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/tendertable/new`,
      tendertableData,
      config
    );

    dispatch({
      type: NEW_TENDERTABLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_TENDERTABLE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Admin TenderTables -----Admin
export const getAdminTenderTables = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_TENDERTABLE_REQUEST });

    const { data } = await axios.get("/api/v2/admin/tendertables");

    dispatch({
      type: ADMIN_TENDERTABLE_SUCCESS,
      payload: data.tendertables,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_TENDERTABLE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete TenderTable ------Admin
export const deleteTenderTable = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_TENDERTABLE_REQUEST });

    const { data } = await axios.delete(`/api/v2/tendertable/${id}`);

    dispatch({
      type: DELETE_TENDERTABLE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TENDERTABLE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update TenderTable
export const updateTenderTable = (id, tendertableData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_TENDERTABLE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/tendertable/${id}`,
      tendertableData,
      config
    );

    dispatch({
      type: UPDATE_TENDERTABLE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_TENDERTABLE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//   Clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
