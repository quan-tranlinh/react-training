// Import constant
import {
  FETCHING_LOCATION_SUCCESS,
  FETCHING_LOCATION_FAILURE,
  DELETE_LOCATION,
} from '../utils/constant/action';

export default (state = [], action) => {
  switch (action.type) {
    case FETCHING_LOCATION_SUCCESS:
      if (!state.filter(item => item.name === action.payload.data.name).length) {
        return [action.payload.data, ...state];
      } else {
        return state;
      }
    case FETCHING_LOCATION_FAILURE:
      let list = [...state];
      const lengthData = list.length;

      list[lengthData > 0 ? lengthData - 1 : lengthData] = action.payload.data
      return list;
    case DELETE_LOCATION:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
