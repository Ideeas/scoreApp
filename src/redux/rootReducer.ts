import { combineReducers } from 'redux';
import loadingReducer from './ducks/Loading';
import userReducer from './ducks/User';

const rootReducer = () =>
  combineReducers({
    userReducer,
    loadingReducer,
  });

export default rootReducer;
