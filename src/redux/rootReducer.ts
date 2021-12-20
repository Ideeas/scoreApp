import { combineReducers } from 'redux';
import loadingReducer from './ducks/Loading';
import userReducer from './ducks/User';

export default combineReducers({
  userReducer,
  loadingReducer,
});
