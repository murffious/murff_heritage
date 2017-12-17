
//= =====================
// Why is this file beneficial?
//= =====================
// It is often claimed that constants are unnecessary, and for small projects, this might be correct.
// For larger projects, there are some benefits to defining action types as constants:

// It helps keep the naming consistent because all action types are gathered in a single place.
// Sometimes you want to see all existing actions before working on a new feature. 
// It may be that the action you need was already added by somebody on the team, but you didn’t know.
// The list of action types that were added, removed, and changed in a Pull Request helps everyone 
//  on the team keep track of scope and implementation of new features.
// If you make a typo when importing an action constant, you will get undefined (prevents ReferenceError). 
// This is much easier to notice than a typo when you wonder why nothing happens when the action is dispatched.


//= =====================
// Notification Actions
//= =====================
export const STORE_NOTIFICATIONS = 'store_notifications';

//= =====================
// Auth Actions
//= =====================
export const AUTH_USER = 'auth_user',
UNAUTH_USER = 'unauth_user',
AUTH_ERROR = 'auth_error',
FORGOT_PASSWORD_REQUEST = 'forgot_password_request',
RESET_PASSWORD_REQUEST = 'reset_password_request',
PROTECTED_TEST = 'protected_test';

//= =====================
// User Profile Actions
//= =====================
export const FETCH_USER = 'fetch_user';
export const USER_UPDATE = 'user_update';


//= =====================
// Business Actions
//= =====================
export const GET_BUSINESS = 'get_business';


//= =====================
// Sign Up Actions
//= =====================
export const STORE_SIGN_UP_INFO = 'store_sign_up_info';
export const ADDRESS_VERIFIED_BY_SHIPPO = 'address_verified_by_shippo';
export const STORE_RATES = "store_rates";
export const STORE_PLAN = "store_plan";
export const STORE_PLAYER = "store_player";
export const STORE_PAYMENT = "store_payment";
export const STORE_SHIPPING = "store_shipping";



//= =====================
// Messaging Actions
//= =====================
export const FETCH_CONVERSATIONS = 'fetch_conversations',
FETCH_RECIPIENTS = 'fetch_recipients',
START_CONVERSATION = 'start_conversation',
FETCH_SINGLE_CONVERSATION = 'fetch_single_conversation',
CHAT_ERROR = 'chat_error',
SEND_REPLY = 'send_reply';

//= =====================
// Page Actions
//= =====================
export const SEND_CONTACT_FORM = 'send_contact_form',
STATIC_ERROR = 'static_error';

//= =====================
// Customer Actions
//= =====================
export const CREATE_CUSTOMER = 'create_customer',
FETCH_CUSTOMER = 'fetch_customer',
CANCEL_SUBSCRIPTION = 'cancel_subscription',
UPDATE_BILLING = 'update_billing',
BILLING_ERROR = 'billing_error',
CHANGE_SUBSCRIPTION = 'change_subscription';

// not using
// export const EMAIL_CHANGED = 'email_changed';
// export const PASSWORD_CHANGED = 'password_changed';
// export const LOGIN_USER_SUCCESS = 'login_user_success';
// export const LOGIN_USER_FAIL = 'login_user_fail';
// export const LOGIN_USER = 'login_user';

export const EMPLOYEE_UPDATE = 'employee_update';
// export const EMPLOYEE_CREATE = 'employee_create';
export const EMPLOYEES_FETCH_SUCCESS = 'employees_fetch_success';
// export const EMPLOYEE_SAVE_SUCCESS = 'employee_save_success';