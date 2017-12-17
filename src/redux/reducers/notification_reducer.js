import {STORE_NOTIFICATIONS} from '../actions/types';


const INITIAL_STATE = {notifications: {}};

export default function notificationReducer( state = INITIAL_STATE, action) {
    switch (action.type) {
        case `${STORE_NOTIFICATIONS}`:
            return Object.assign({}, state, {notifications:action.payload});
        default:
            return state;
    }
}

export function notifications(notifications) {
    return function (dispatch) {

        dispatch({
            type: STORE_NOTIFICATIONS,
            payload: notifications
        });


    };
}