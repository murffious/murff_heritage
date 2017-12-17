// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'dotenv/config';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
// import store from './store';

// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './redux/reducers/index';
import { AUTH_USER } from './redux/actions/types';
import { composeWithDevTools } from 'redux-devtools-extension';

// App and security/cookie 
import App from './App';
import decode from 'jwt-decode';
import Cookies from 'universal-cookie';


import { persistStore, persistCombineReducers, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native
import { PersistGate } from 'redux-persist/es/integration/react';



// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const store = createStoreWithMiddleware(rootReducer);

// const middleware = [reduxThunk];
// let store = compose(
//   applyMiddleware(...middleware),
//   autoRehydrate()
// )(createStore)(rootReducer);
// persistStore(store, {storage})

// create store move to store file then to redux folder maybe
const config = {
  key: 'root',
  storage: storage,
};
const reducer = persistCombineReducers(config, rootReducer)
var middleware = [reduxThunk]
var reduxStore = function createPersistStore(
  rootReducer,
  
  middleware = [reduxThunk],
) {
  const config = {
    key: 'root',
    storage: storage,
  };

  let store = createStore(
    persistReducer(config, rootReducer),
    
    compose(
        applyMiddleware(...middleware)),
        
  );

 let persistor = persistStore(store);

  return { store, persistor }
}
export const store = reduxStore(rootReducer,
 
  middleware = [reduxThunk])
console.log(store, store.persistor)
const token = new Cookies().get('token');
// console.log(token)

// this is a little more advaced token checker and I have one more in auth checker. can use refresh if needed
// probably move this function and the store later  
const checkAuth = () => {
  // const token = localStorage.getItem('token');
  // const refreshToken = localStorage.getItem('refreshToken');
  // if (!token || !refreshToken) {
  //   return false;
  // }
  if (!token) {
    return false;
  }

  try {
    // { exp: 12903819203 }
    const { exp } = decode(token);
    // console.log(exp)
    if (exp < new Date().getTime() / 1000) {
      return false;
    }

  } catch (e) {
    return false;
  }
 
  return true;
}
checkAuth();

// Check to see if user has a token
if (token) {
  // Update application state. User has token and is probably authenticated
  store.store.dispatch({ type: AUTH_USER });
}
console.log(reduxStore.persistor)
ReactDOM.render(
  <PersistGate persistor={store.persistor}>
    <BrowserRouter>
     <Provider store={store.store}>
    
        <App />
     
      </Provider>
    </BrowserRouter>
  </PersistGate>

, document.getElementById('root'));
registerServiceWorker();

