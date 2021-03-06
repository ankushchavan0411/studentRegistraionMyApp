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
 * @description addStudent API is used to add student
 */

export const addStudent = (params) => {
  return (dispatch) => {
    dispatch(addStudentStart());
    setTimeout(() => {
      try {
        if (params) {
          dataSource.push({ ...params, id: dataSource.length + 1 });
        }
        dispatch(getStudents());
        dispatch(addStudentSuccess({ status: "success" }));
        setTimeout(() => {
          dispatch(addStudentSuccess({ status: null }));
        }, 100);
      } catch (error) {
        dispatch(addStudentFail(error));
      }
    }, 1000);
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

/**
 * @author Ankush Chavan
 * @description getStudents API is used to get students
 */

export const getStudents = () => {
  return (dispatch) => {
    dispatch(getStudentsStart());
    try {
      dispatch(getStudentsSuccess(dataSource));
    } catch (error) {
      dispatch(getStudentsFail(error));
    }
  };
};

const getStudentsStart = () => ({
  type: VIEW_STUDENT_STARTED,
});
const getStudentsSuccess = (data) => ({
  type: VIEW_STUDENT_SUCCESS,
  payload: data,
});
const getStudentsFail = (error) => ({
  type: VIEW_STUDENT_FAIL,
  payload: error,
});

/**
 * @author Ankush Chavan
 * @description editStudent API is used to edit record
 */

export const editStudent = () => {
  return (dispatch) => {
    dispatch(editStudentStart());
    try {
      dispatch(editStudentSuccess());
    } catch (error) {
      dispatch(editStudentFail(error));
    }
  };
};

const editStudentStart = () => ({
  type: EDIT_STUDENT_STARTED,
});
const editStudentSuccess = (data) => ({
  type: EDIT_STUDENT_SUCCESS,
  payload: data,
});
const editStudentFail = (error) => ({
  type: EDIT_STUDENT_FAIL,
  payload: error,
});

/**
 * @author Ankush Chavan
 * @description deleteStudent API is used to delete record from list
 */

export const deleteStudent = (id) => {
  return (dispatch) => {
    dispatch(deleteStudentStart());
    setTimeout(() => {
      try {
        dataSource = dataSource.filter((item) => item.id !== id);
        dispatch(getStudents());
        dispatch(deleteStudentSuccess({ status: "success" }));
        setTimeout(() => {
          dispatch(deleteStudentSuccess({ status: null }));
        }, 100);
      } catch (error) {
        dispatch(deleteStudentFail(error));
      }
    }, 1000);
  };
};

const deleteStudentStart = () => ({
  type: DELETE_STUDENT_STARTED,
});
const deleteStudentSuccess = (data) => ({
  type: DELETE_STUDENT_SUCCESS,
  payload: data,
});
const deleteStudentFail = (error) => ({
  type: DELETE_STUDENT_FAIL,
  payload: error,
});

/**
 * @author Ankush Chavan
 * @description getStudent API is used to get record from list
 */

export const getStudent = (id) => {
  return (dispatch) => {
    dispatch(getStudentStart());
    try {
      const student = dataSource.filter((item) => item.id === id);
      dispatch(getStudentSuccess(student[0]));
    } catch (error) {
      dispatch(getStudentFail(error));
    }
  };
};

const getStudentStart = () => ({
  type: GET_STUDENT_STARTED,
});
const getStudentSuccess = (data) => ({
  type: GET_STUDENT_SUCCESS,
  payload: data,
});
const getStudentFail = (error) => ({
  type: GET_STUDENT_FAIL,
  payload: error,
});

/**
 * @author Ankush Chavan
 * @description dataSource is used as a dummy data
 */

let dataSource = [
  {
    id: "1",
    images: [
      {
        name: "image.png",
        status: "done",
        url:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
    ],
    fName: "Mike",
    mName: "",
    lName: "",
    email: "mike@gmail.com",
    mobNo: "",
    gender: "Male",
    dob: "21/June/1999",
    address: "10 Downing Street",
    country: "USA",
  },
  {
    id: "2",
    images: [
      {
        name: "image.png",
        status: "done",
        url:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
    ],
    fName: "Jhon",
    mName: "",
    lName: "",
    email: "jhon@gmail.com",
    mobNo: "",
    gender: "Male",
    dob: "11/April/1990",
    address: "10 Downing Street",
    country: "Canada",
  },
];
