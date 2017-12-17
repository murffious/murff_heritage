import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import userReducer from './user_reducer';
import businessReducer from './business_reducer';
import signUpReducer from './sign_up_reducer';
import notificationReducer from './notification_reducer';

// Import and combine all reducers to one
const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    user: userReducer,
    organization: businessReducer,
    signUpInfo: signUpReducer,
    notifications: notificationReducer
});

export default rootReducer;
