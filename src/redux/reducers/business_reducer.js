

// ******** Thinking moving all three profile page functions to one profile reducer
import { GET_BUSINESS } from '../actions/types';
import axios from 'axios';

// const putUserURL = 
const API_TOKEN = process.env.REACT_APP_API_TOKEN
const API_URL = process.env.REACT_APP_API_URL;
// export function getProfiles() {
//     console.log('getting profiles...')
//     const promise = axios.get(getUserURL).then(res => {
//       console.log(res.data)
//       return res.data
//     }).catch(err => console.log(err))
//     return {
//       type: GET_PROFILES,
//       payload: promise
//     }
//   }
//   export function fetchUser(uid) {
//   axios.get(`${getUserURL}/user/${uid}`, {

// CruiseControl categories
  const INITIAL_STATE = {name: null, 
                            attributes: {cmno: null}, plan: null, categories: [], 
                            address: {address_line_1:null,
                            address_line_2: null,
                            city:null,
                            country:null,
                            postal_code:null,
                            region:null} 
    };
  export default function businessReducer( state = INITIAL_STATE, action) {
    // console.log(action.payload)
    switch (action.type) {
      case `${GET_BUSINESS}`:
        return Object.assign({}, state, action.payload);
    //   case `${BUSINESS_UPDATE}`:
    //     return { ...state, [action.payload.prop]: action.payload.value }
  
      default:
       return state;
    }
  }
export function getBusiness(id) {
  let getUserURL = `${API_URL}/organization/${id}/?fill_data=true`
    return function (dispatch) {
      axios.get(getUserURL, {
        headers: { Authorization: `Bearer ${API_TOKEN}` }
      })
      .then((response) => {
        console.log(response.data)
        dispatch({
          type: GET_BUSINESS,
          payload: response.data
        });
      })
      .catch(response => dispatch(errorHandler(response.error)));
    };
  }
  export function errorHandler(dispatch, error, type) {
    console.log('Error type: ', type);
    console.log(error);
  
    let errorMessage = error.response ? error.response.data : error;
  
     // NOT AUTHENTICATED ERROR
    // if (error.status === 401 || error.response.status === 401) {
    //   errorMessage = 'You are not authorized to do this.';
    //   return dispatch(logoutUser(errorMessage));
    // }
  
    dispatch({
      type,
      payload: errorMessage,
    });
  }
