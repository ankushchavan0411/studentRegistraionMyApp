import {
  ADD_STUDENT_STARTED,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAIL,
} from "../../lib/constants/actionTypes";

/**
 * @author Ankush Chavan
 * @description addStudent API is used to add student
 */

export const addStudent = (params) => {
  return (dispatch) => {
    dispatch(addStudentStart());
    // return enterpriseUserService
    //   .logoutUser(params)
    //   .then((res) => {
    //     dispatch(logoutSuccess(res.data));
    //   })
    //   .catch((err) => {
    //     dispatch(logoutFail(errorHandler(err)));
    //   });
  };
};

const addStudentStart = () => ({
  type: ADD_STUDENT_STARTED,
});
const addStudentSuccess = (data) => ({
  type: ADD_STUDENT_SUCCESS,
  payload: data,
});
const addStudentFail = (error) => ({
  type: ADD_STUDENT_FAIL,
  payload: error,
});
