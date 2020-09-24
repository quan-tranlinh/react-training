import axios from 'axios';

import {
  CLEAR_DATA_WEATHER,
  FETCHING_WEATHER_SUCCESS,
  FETCHING_WEATHER_FAILURE,
  FETCHING_LOCATION_SUCCESS,
  FETCHING_LOCATION_FAILURE,
  DELETE_LOCATION,
} from '../utils/constant/action';

import { API_KEY } from '../utils/constant/apiKey';

import { URL } from '../utils/constant/url';

const fetchWeatherSuccess = (response) => {
  return {
    type: FETCHING_WEATHER_SUCCESS,
    payload: response,
  };
};

const fetchWeatherFailue = (err) => {
  return {
    type: FETCHING_WEATHER_FAILURE,
    payload: err,
  };
};

const fetchLocationSuccess = (response) => {
  return {
    type: FETCHING_LOCATION_SUCCESS,
    payload: response,
  };
};

const fetchLocationFailue = (err) => {
  return {
    type: FETCHING_LOCATION_FAILURE,
    payload: err,
  };
};

export const fetchWeatherRequest = (city) => {
  const url = `${URL}/forecast?q=${city}&units=metric&APPID=${API_KEY}`;

  return (dispatch) => {
    axios.get(url)
      .then((response) => { dispatch(fetchWeatherSuccess(response)); })
      .catch((err) => { dispatch(fetchWeatherFailue(err)); });
  };
};

export const resetWeather = () => {
  return {
    type: CLEAR_DATA_WEATHER,
  };
};

export const chooseLocation = (city) => {
  const url = `${URL}/weather?q=${city}&units=metric&APPID=${API_KEY}`;

  return (dispatch) => {
    axios.get(url)
      .then((response) => { dispatch(fetchLocationSuccess(response)); })
      .catch((err) => { dispatch(fetchLocationFailue(err)); });
  };
}

export const deleteWeather = (id) => {
  return {
    type: DELETE_LOCATION,
    id,
  };
};
