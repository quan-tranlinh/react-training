import { combineReducers } from 'redux';
import weather from './weather';
import locations from './locations';

const rootReducer = combineReducers({
  weather,
  locations,
});

export default rootReducer;
