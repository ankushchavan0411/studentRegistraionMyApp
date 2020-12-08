import {
  ADD_STUDENT_STARTED,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAIL,
} from "../../lib/constants/actionTypes";

/**
 * @author Ankush Chavan
 * @description Here we have declare student reducer
 */

const initialState = {
  loading: false,
  error: null,
  success: null,
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
      };
    case ADD_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
