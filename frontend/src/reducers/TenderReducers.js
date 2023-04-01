import {
    ALL_TENDER_FAIL,
    ALL_TENDER_REQUEST,
    ALL_TENDER_SUCCESS,
    CLEAR_ERRORS,
    TENDER_DETAILS_FAIL,
    TENDER_DETAILS_REQUEST,
    TENDER_DETAILS_SUCCESS,
    ADMIN_TENDER_REQUEST,
    ADMIN_TENDER_SUCCESS,
    ADMIN_TENDER_FAIL,
    NEW_TENDER_REQUEST,
    NEW_TENDER_SUCCESS,
    NEW_TENDER_FAIL,
    NEW_TENDER_RESET,
    DELETE_TENDER_REQUEST,
    UPDATE_TENDER_REQUEST,
    DELETE_TENDER_SUCCESS,
    UPDATE_TENDER_SUCCESS,
    DELETE_TENDER_FAIL,
    UPDATE_TENDER_FAIL,
    DELETE_TENDER_RESET,
    UPDATE_TENDER_RESET,
  } from "../constans/TenderConstans";
  
  export const tendersReducer = (state = { tenders: [] }, action) => {
    switch (action.type) {
      case ALL_TENDER_REQUEST:
      case ADMIN_TENDER_REQUEST:
        return {
          loading: true,
          tenders: [],
        };
      case ALL_TENDER_SUCCESS:
        return {
          loading: false,
          tenders: action.payload.tenders,
          tendersCount: action.payload.tendersCount,
          resultPerPage: action.payload.resultPerPage,
          filteredTendersCount: action.payload.filteredTendersCount,
        };
  
      case ADMIN_TENDER_SUCCESS:
        return {
          loading: false,
          tenders: action.payload,
        };
  
      case ALL_TENDER_FAIL:
      case ADMIN_TENDER_FAIL:
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
  
  export const tenderDetailsReducer = (state = { tender: {} }, action) => {
    switch (action.type) {
      case TENDER_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case TENDER_DETAILS_SUCCESS:
        return {
          loading: false,
          tender: action.payload,
        };
      case TENDER_DETAILS_FAIL:
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
  
  
  
  // New Tender ----Admin
  export const newTenderReducer = (state = { tender: {} }, action) => {
    switch (action.type) {
      case NEW_TENDER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_TENDER_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          tender: action.payload.tender,
        };
      case NEW_TENDER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_TENDER_RESET:
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
  
  // Delete Tender
  export const deleteTenderReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_TENDER_REQUEST:
      case UPDATE_TENDER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_TENDER_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_TENDER_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_TENDER_FAIL:
      case UPDATE_TENDER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_TENDER_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_TENDER_RESET:
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
  
  