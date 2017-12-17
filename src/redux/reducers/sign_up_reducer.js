import { STORE_SIGN_UP_INFO, STORE_RATES, STORE_PLAN, STORE_PLAYER, STORE_SHIPPING, STORE_PAYMENT} from '../actions/types';
import axios from 'axios';


const API_TOKEN = process.env.REACT_APP_API_TOKEN
const API_URL = process.env.REACT_APP_API_URL;




const INITIAL_STATE = {rates: {}};

export default function signUpReducer( state = INITIAL_STATE, action) {
    switch (action.type) {
      case `${STORE_SIGN_UP_INFO}`:
        return Object.assign({}, state, action.payload);
      case `${STORE_RATES}`:
        return Object.assign({}, state, {rates:action.payload});
      case `${STORE_PLAN}`:
        return Object.assign({}, state, {plan:action.payload});
      case `${STORE_PLAYER}`:
        return Object.assign({}, state, {player:action.payload});
        case `${STORE_SHIPPING}`:
        return Object.assign({}, state, {shipping:action.payload});
      case `${STORE_PAYMENT}`:
        return Object.assign({}, state, {payment:action.payload});
      default:
       return state;
    }
}
 
export function storeSignUpInfo(signUpInfo, verifiedAddress, orgId) {
  console.log(signUpInfo, verifiedAddress)
  signUpInfo.push(verifiedAddress, orgId);
    return function (dispatch) {
        dispatch({
          type: STORE_SIGN_UP_INFO,
          payload: signUpInfo
        });
     
    };
}

export function storeRates(rates) {
  
      return function (dispatch) {
        
          dispatch({
            type: STORE_RATES,
            payload: rates
          });
       
      };
}

export function storePlanInfo(plan) {
  return function (dispatch) {
          
            dispatch({
              type: STORE_PLAN,
              payload: plan
            });
      
        };
}

export function storePlayerInfo(player) {
  return function (dispatch) {
          
            dispatch({
              type: STORE_PLAYER,
              payload: player
            });
      
        };
}

export function storeShippingInfo(shipping) {
  return function (dispatch) {
          
            dispatch({
              type: STORE_SHIPPING,
              payload: shipping
            });
      
        };
}      

export function storePaymentInfo(payment) {
  return function (dispatch) {
          
            dispatch({
              type: STORE_PAYMENT,
              payload: payment
            });
      
        };
}   
            

            
