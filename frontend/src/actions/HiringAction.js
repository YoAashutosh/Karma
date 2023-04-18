import axios from "axios";
import {
  ADMIN_HIRE_FAIL,
  ADMIN_HIRE_REQUEST,
  ADMIN_HIRE_SUCCESS,
  ALL_HIRE_FAIL,
  ALL_HIRE_REQUEST,
  ALL_HIRE_SUCCESS,
  CLEAR_ERRORS,
  DELETE_HIRE_FAIL,
  DELETE_HIRE_REQUEST,
  DELETE_HIRE_SUCCESS,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  NEW_HIRE_FAIL,
  NEW_HIRE_REQUEST,
  NEW_HIRE_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  HIRE_DETAILS_FAIL,
  HIRE_DETAILS_REQUEST,
  HIRE_DETAILS_SUCCESS,
  UPDATE_HIRE_FAIL,
  UPDATE_HIRE_REQUEST,
  UPDATE_HIRE_SUCCESS,
  ALL_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  ALL_REVIEW_FAIL,
} from "../constans/HiringConstans";

export const getHire =
  (keyword = "", currentPage = 1, category) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_HIRE_REQUEST,
      });

      let link = `/api/v2/hires?keyword=${keyword}&page=${currentPage}`;

      if (category) {
        link = `/api/v2/hires?keyword=${keyword}&page=${currentPage}&category=${category}`;
      }
      const { data } = await axios.get(link);

      dispatch({
        type: ALL_HIRE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_HIRE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All Hires Details
export const getHireDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: HIRE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/hire/${id}`);

    dispatch({
      type: HIRE_DETAILS_SUCCESS,
      payload: data.hire,
    });
  } catch (error) {
    dispatch({
      type: HIRE_DETAILS_FAIL,
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
      `/api/v2/hire/review`,
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

// Create Hire --------Admin
export const createHire = (hireData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_HIRE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v2/hire/new`, hireData, config);

    dispatch({
      type: NEW_HIRE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_HIRE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Admin Hires -----Admin
export const getAdminHire = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_HIRE_REQUEST });

    const { data } = await axios.get("/api/v2/admin/hires");

    dispatch({
      type: ADMIN_HIRE_SUCCESS,
      payload: data.hires,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_HIRE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Hire ------Admin
export const deleteHire = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_HIRE_REQUEST });

    const { data } = await axios.delete(`/api/v2/hire/${id}`);

    dispatch({
      type: DELETE_HIRE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_HIRE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Hire
export const updateHire = (id, hireData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_HIRE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(`/api/v2/hire/${id}`, hireData, config);

    dispatch({
      type: UPDATE_HIRE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_HIRE_FAIL,
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
