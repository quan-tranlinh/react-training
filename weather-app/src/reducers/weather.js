// Import constant
import {
  CLEAR_DATA_WEATHER,
  FETCHING_WEATHER_SUCCESS,
  FETCHING_WEATHER_FAILURE,
} from '../utils/constant/action';

export default (state = [], action) => {
  switch (action.type) {
    case CLEAR_DATA_WEATHER:
      return state = [];
    case FETCHING_WEATHER_SUCCESS:
      let list = [...state];
      const lengthData = list.length;

      list[lengthData > 0 ? lengthData - 1 : lengthData] = action.payload.data
      return list;
    case FETCHING_WEATHER_FAILURE:
      let weathers = [...state];
      const length = weathers.length;

      weathers[length > 0 ? length - 1 : length] = action.payload
      return weathers;
    default:
      return state;
  }
};
