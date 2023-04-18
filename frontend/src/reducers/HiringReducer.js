import {
  ALL_HIRE_FAIL,
  ALL_HIRE_REQUEST,
  ALL_HIRE_SUCCESS,
  CLEAR_ERRORS,
  HIRE_DETAILS_FAIL,
  HIRE_DETAILS_REQUEST,
  HIRE_DETAILS_SUCCESS,
  ADMIN_HIRE_REQUEST,
  ADMIN_HIRE_SUCCESS,
  ADMIN_HIRE_FAIL,
  NEW_HIRE_REQUEST,
  NEW_HIRE_SUCCESS,
  NEW_HIRE_FAIL,
  NEW_HIRE_RESET,
  DELETE_HIRE_REQUEST,
  UPDATE_HIRE_REQUEST,
  DELETE_HIRE_SUCCESS,
  UPDATE_HIRE_SUCCESS,
  DELETE_HIRE_FAIL,
  UPDATE_HIRE_FAIL,
  DELETE_HIRE_RESET,
  UPDATE_HIRE_RESET,
} from "../constans/HiringConstans";

export const hiresReducer = (state = { hires: [] }, action) => {
  switch (action.type) {
    case ALL_HIRE_REQUEST:
    case ADMIN_HIRE_REQUEST:
      return {
        loading: true,
        hires: [],
      };
    case ALL_HIRE_SUCCESS:
      return {
        loading: false,
        hires: action.payload.hires,
        hiresCount: action.payload.hiresCount,
        resultPerPage: action.payload.resultPerPage,
        filteredHiresCount: action.payload.filteredHiresCount,
      };

    case ADMIN_HIRE_SUCCESS:
      return {
        loading: false,
        hires: action.payload,
      };

    case ALL_HIRE_FAIL:
    case ADMIN_HIRE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const hireDetailsReducer = (state = { hire: {} }, action) => {
  switch (action.type) {
    case HIRE_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case HIRE_DETAILS_SUCCESS:
      return {
        loading: false,
        hire: action.payload,
      };
    case HIRE_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// New Hire ----Admin
export const newHireReducer = (state = { hire: {} }, action) => {
  switch (action.type) {
    case NEW_HIRE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_HIRE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        hire: action.payload.hire,
      };
    case NEW_HIRE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_HIRE_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Delete Hire
export const deleteHireReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_HIRE_REQUEST:
    case UPDATE_HIRE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_HIRE_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_HIRE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_HIRE_FAIL:
    case UPDATE_HIRE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_HIRE_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_HIRE_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
