import {
  ADD_STUDENT_STARTED,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAIL,
  VIEW_STUDENT_STARTED,
  VIEW_STUDENT_SUCCESS,
  VIEW_STUDENT_FAIL,
  EDIT_STUDENT_STARTED,
  EDIT_STUDENT_SUCCESS,
  EDIT_STUDENT_FAIL,
  DELETE_STUDENT_STARTED,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAIL,
  GET_STUDENT_STARTED,
  GET_STUDENT_SUCCESS,
  GET_STUDENT_FAIL,
} from "../../lib/constants/actionTypes";

/**
 * @author Ankush Chavan
 * @description Here we have declare student reducer
 */

const initialState = {
  loading: false,
  error: null,
  status: null,
  success: null,
  sutdList: [],
  student: {},
};

export default function StudentReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case ADD_STUDENT_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ADD_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: "Added succesfully",
        status: payload.status,
      };
    case ADD_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        success: null,
      };
    case VIEW_STUDENT_STARTED:
      return {
        ...state,
        loading: true,
      };
    case VIEW_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        sutdList: payload,
      };
    case VIEW_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        sutdList: [],
      };
    case EDIT_STUDENT_STARTED:
      return {
        ...state,
        loading: true,
      };
    case EDIT_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: payload,
      };
    case EDIT_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        success: null,
      };
    case DELETE_STUDENT_STARTED:
      return {
        ...state,
        loading: true,
      };
    case DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: "Delete successfully",
        status: payload.status,
      };
    case DELETE_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        success: null,
        status: "error",
      };
    case GET_STUDENT_STARTED:
      return {
        ...state,
        loading: true,
      };
    case GET_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        student: payload,
      };
    case GET_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        student: {},
      };
    default:
      return state;
  }
}
