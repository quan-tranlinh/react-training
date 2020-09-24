import { connect } from 'react-redux';
import {
  fetchWeatherRequest,
  resetWeather,
  chooseLocation,
} from '../actions/index';

// Import common component
import Header from '../components/Header'

const mapDispatchToProps = {
  handleSubmitLocation: (name) => fetchWeatherRequest(name),
  handleShowLocation: resetWeather,
  resetWeather: resetWeather,
  chooseLocation: (city) => chooseLocation(city),
};

const mapStateToProps = ({ weather }) => {
  return {
    weather,
  };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
