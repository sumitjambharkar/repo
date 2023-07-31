// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import serviceReducer from './serviceSlice';
import venderReducer from './venderSlice';

const rootReducer = combineReducers({
  user: userReducer,
  service:serviceReducer,
  product:venderReducer
});

export default rootReducer;
