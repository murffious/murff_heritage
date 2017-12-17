import 'dotenv/config';
import axios from 'axios';

import { CLIENT_ROOT_URL, errorHandler } from './index';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FORGOT_PASSWORD_REQUEST, RESET_PASSWORD_REQUEST, PROTECTED_TEST } from './types';

// import { browserHistory } from 'react-router';
import Cookies from 'universal-cookie';
const queryString = require('query-string');
const cookies = new Cookies();
const SHARED_SECRET = process.env.REACT_APP_JWT_SHARED_SECRET;
const API_URL = process.env.REACT_APP_API_URL;
const HOST = process.env.REACT_APP_HOST;


//= ===============================
// Authentication actions
//= ===============================
let config = {
  
  headers: { "accept": "application/json", 
             'content-type':'application/x-www-form-urlencoded',
            'authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN }

}

// TO-DO: Add expiration to cookie
export function loginUser({ email, password }) {
  console.log(email, password, config)
  return function (dispatch) {
    axios.post(`${API_URL}/user/auth/`, queryString.stringify({
      email,
       password
    }), config)
    .then((response) => {
      console.log(response)
      // cookie.save('token', response.data.token, { path: '/' });
      const token = response.data.token
      cookies.set('token', response.data.token, { path: '/' });
      // console.log(response.data.token)
      // cookie.save('user', response.data.user, { path: '/' });
      dispatch({ type: AUTH_USER,
                 payload: response.data })

      // window.location.href = `${HOST}/account`;
    })
    .catch((error) => {
      console.log(error);
      errorHandler(dispatch, error.response, AUTH_ERROR);
    }); 
  };
}

export function logoutUser(error) {
  // console.log("I am here")
  return function (dispatch) {
    dispatch({ type: UNAUTH_USER, payload: error || '' });
    cookies.remove('token', { path: '/' });
    // cookie.remove('user', { path: '/' });

    // window.location.href = `${HOST}`;
  };
}

// export function registerUser({ email, firstName, lastName, password }) {
//   return function (dispatch) {
//     axios.post(`${API_URL}/auth/register`, { email, firstName, lastName, password })
//     .then((response) => {
//       cookies.set('token', response.data.token, { path: '/' });
//       cookies.set('user', response.data.user, { path: '/' });
//       dispatch({ type: AUTH_USER });
//       window.location.href = `${CLIENT_ROOT_URL}/dashboard`;
//     })
//     .catch((error) => {
//       errorHandler(dispatch, error.response, AUTH_ERROR);
//     });
//   };
// }



// export function getForgotPasswordToken({ email }) {
//   return function (dispatch) {
//     axios.post(`${API_URL}/auth/forgot-password`, { email })
//     .then((response) => {
//       dispatch({
//         type: FORGOT_PASSWORD_REQUEST,
//         payload: response.data.message,
//       });
//     })
//     .catch((error) => {
//       errorHandler(dispatch, error.response, AUTH_ERROR);
//     });
//   };
// }

// export function resetPassword(token, { password }) {
//   return function (dispatch) {
//     axios.post(`${API_URL}/auth/reset-password/${token}`, { password })
//     .then((response) => {
//       dispatch({
//         type: RESET_PASSWORD_REQUEST,
//         payload: response.data.message,
//       });
//       // Redirect to login page on successful password reset
//     //   browserHistory.push('/login');
//     })
//     .catch((error) => {
//       errorHandler(dispatch, error.response, AUTH_ERROR);
//     });
//   };
// }

// export function protectedTest() {
//   return function (dispatch) {
//     axios.get(`${API_URL}/protected`, {
//       headers: { Authorization: cookies.get('token') },
//     })
//     .then((response) => {
//       dispatch({
//         type: PROTECTED_TEST,
//         payload: response.data.content,
//       });
//     })
//     .catch((error) => {
//       errorHandler(dispatch, error.response, AUTH_ERROR);
//     });
//   };
// }
