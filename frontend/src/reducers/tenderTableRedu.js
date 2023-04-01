import {
  ALL_TENDERTABLE_FAIL,
  ALL_TENDERTABLE_REQUEST,
  ALL_TENDERTABLE_SUCCESS,
  CLEAR_ERRORS,
  TENDERTABLE_DETAILS_FAIL,
  TENDERTABLE_DETAILS_REQUEST,
  TENDERTABLE_DETAILS_SUCCESS,
  ADMIN_TENDERTABLE_REQUEST,
  ADMIN_TENDERTABLE_SUCCESS,
  ADMIN_TENDERTABLE_FAIL,
  NEW_TENDERTABLE_REQUEST,
  NEW_TENDERTABLE_SUCCESS,
  NEW_TENDERTABLE_FAIL,
  NEW_TENDERTABLE_RESET,
  DELETE_TENDERTABLE_REQUEST,
  UPDATE_TENDERTABLE_REQUEST,
  DELETE_TENDERTABLE_SUCCESS,
  UPDATE_TENDERTABLE_SUCCESS,
  DELETE_TENDERTABLE_FAIL,
  UPDATE_TENDERTABLE_FAIL,
  DELETE_TENDERTABLE_RESET,
  UPDATE_TENDERTABLE_RESET,
} from "../constans/tenderTableCons";

export const tendertablesReducer = (state = { tendertables: [] }, action) => {
  switch (action.type) {
    case ALL_TENDERTABLE_REQUEST:
    case ADMIN_TENDERTABLE_REQUEST:
      return {
        loading: true,
        tendertables: [],
      };
    case ALL_TENDERTABLE_SUCCESS:
      return {
        loading: false,
        tendertables: action.payload.tendertables,
        tendertablesCount: action.payload.tendertablesCount,
        resultPerPage: action.payload.resultPerPage,
        filteredTenderTablesCount: action.payload.filteredTenderTablesCount,
      };

    case ADMIN_TENDERTABLE_SUCCESS:
      return {
        loading: false,
        tendertables: action.payload,
      };

    case ALL_TENDERTABLE_FAIL:
    case ADMIN_TENDERTABLE_FAIL:
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

export const tendertableDetailsReducer = (
  state = { tendertable: {} },
  action
) => {
  switch (action.type) {
    case TENDERTABLE_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case TENDERTABLE_DETAILS_SUCCESS:
      return {
        loading: false,
        tendertable: action.payload,
      };
    case TENDERTABLE_DETAILS_FAIL:
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

// New TenderTable ----Admin
export const newTenderTableReducer = (state = { tendertable: {} }, action) => {
  switch (action.type) {
    case NEW_TENDERTABLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_TENDERTABLE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        tendertable: action.payload.tendertable,
      };
    case NEW_TENDERTABLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_TENDERTABLE_RESET:
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

// Delete TenderTable
export const deleteTenderTableReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TENDERTABLE_REQUEST:
    case UPDATE_TENDERTABLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TENDERTABLE_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_TENDERTABLE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_TENDERTABLE_FAIL:
    case UPDATE_TENDERTABLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_TENDERTABLE_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_TENDERTABLE_RESET:
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
