import {
  ADD_STUDENT_STARTED,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAIL,
  VIEW_STUDENT_STARTED,
  VIEW_STUDENT_SUCCESS,
  VIEW_STUDENT_FAIL,
} from "../../lib/constants/actionTypes";

/**
 * @author Ankush Chavan
 * @description Here we have declare student reducer
 */

const initialState = {
  loading: false,
  error: null,
  success: null,
  sutdList: [
    {
      id: "1",
      url: [],
      fName: "Mike",
      mName: "",
      lName: "",
      email: "mike@gmail.com",
      phone: "",
      gender: "Male",
      dob: "21/June/1999",
      address: "10 Downing Street",
      country: "USA",
    },
    {
      id: "2",
      url: [],
      fName: "Jhon",
      mName: "",
      lName: "",
      email: "jhon@gmail.com",
      phone: "",
      gender: "Male",
      dob: "11/April/1990",
      address: "10 Downing Street",
      country: "Canada",
    },
  ],
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
        success: payload,
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
        // sutdList: [],
      };
    case VIEW_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        sutdList: [],
      };
    default:
      return state;
  }
}
