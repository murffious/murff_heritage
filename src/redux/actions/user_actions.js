// import {
//     EMPLOYEE_UPDATE,
//     EMPLOYEE_CREATE,
//     EMPLOYEES_FETCH_SUCCESS,
//     EMPLOYEE_SAVE_SUCCESS
//   } from './types';
  

// export const employeesFetch = () => {
//     const { currentUser } = firebase.auth();
  
//     return (dispatch) => {
//       firebase.database().ref(`/users/${currentUser.uid}/employees`)
//         .on('value', snapshot => {
//           dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
//         });
//     };
//   };


//   export const employeeUpdate = ({ prop, value }) => {
//     return {
//       type: EMPLOYEE_UPDATE,
//       payload: { prop, value }
//     };
//   };