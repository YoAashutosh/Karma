import axios from "axios";
import {
  ADMIN_TENDER_FAIL,
  ADMIN_TENDER_REQUEST,
  ADMIN_TENDER_SUCCESS,
  ALL_TENDER_FAIL,
  ALL_TENDER_REQUEST,
  ALL_TENDER_SUCCESS,
  CLEAR_ERRORS,
  DELETE_TENDER_FAIL,
  DELETE_TENDER_REQUEST,
  DELETE_TENDER_SUCCESS,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  NEW_TENDER_FAIL,
  NEW_TENDER_REQUEST,
  NEW_TENDER_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  TENDER_DETAILS_FAIL,
  TENDER_DETAILS_REQUEST,
  TENDER_DETAILS_SUCCESS,
  UPDATE_TENDER_FAIL,
  UPDATE_TENDER_REQUEST,
  UPDATE_TENDER_SUCCESS,
  ALL_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  ALL_REVIEW_FAIL,
} from "../constans/TenderConstans";

export const getTender =
  (keyword = "", currentPage = 1, category) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_TENDER_REQUEST,
      });

      let link = `/api/v2/tenders?keyword=${keyword}&page=${currentPage}`;

      if (category) {
        link = `/api/v2/tenders?keyword=${keyword}&page=${currentPage}&category=${category}`;
      }
      const { data } = await axios.get(link);

      dispatch({
        type: ALL_TENDER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_TENDER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All Tenders Details
export const getTenderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: TENDER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/tender/${id}`);

    dispatch({
      type: TENDER_DETAILS_SUCCESS,
      payload: data.tender,
    });
  } catch (error) {
    dispatch({
      type: TENDER_DETAILS_FAIL,
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

// Create Tender --------Admin
export const createTender = (tenderData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_TENDER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/tender/new`,
      tenderData,
      config
    );

    dispatch({
      type: NEW_TENDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_TENDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Admin Tenders -----Admin
export const getAdminTender = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_TENDER_REQUEST });

    const { data } = await axios.get("/api/v2/admin/tenders");

    dispatch({
      type: ADMIN_TENDER_SUCCESS,
      payload: data.tenders,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_TENDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Tender ------Admin
export const deleteTender = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_TENDER_REQUEST });

    const { data } = await axios.delete(`/api/v2/tender/${id}`);

    dispatch({
      type: DELETE_TENDER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TENDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Tender
export const updateTender = (id, tenderData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_TENDER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/tender/${id}`,
      tenderData,
      config
    );

    dispatch({
      type: UPDATE_TENDER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_TENDER_FAIL,
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
