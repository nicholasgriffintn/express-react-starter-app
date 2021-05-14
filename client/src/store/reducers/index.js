import { combineReducers } from 'redux';
import basicReducer from './basic';

export default combineReducers({
  basic: basicReducer,
});
