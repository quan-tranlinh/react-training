import React from 'react';
import PropTypes from 'prop-types';

// Import common component
import Input from './commons/Input';
import Button from './commons/Button';

class Header extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      location: ''
    }
  }

  /**
   * Function handle follow
   */
  handleFollow = (e) => {
    const weatherData = this.props.weather[0];
    e.preventDefault();
    this.props.resetWeather();
    weatherData && !weatherData.response
      && this.props.chooseLocation(weatherData && weatherData.city.name);
  }

  handleSubmit = () => {
    this.props.handleSubmitLocation(this.state.location)
  }

  handleOnBlur = (e) => {
    this.setState({
      location: e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <Input
          onBlur={this.handleOnBlur}
          defaultValue={this.state.location}
        />
        <Button
          text="Submit"
          onClick={this.handleSubmit}
          customStyle={{ margin: '0 10px' }}
        />
        <Button
          text="Follow"
          onClick={this.handleFollow}
          customStyle={{
            backgroundColor: 'blueviolet',
            marginRight: '10px',
          }}
        />
        <Button
          text="List Location"
          onClick={this.props.handleShowLocation}
        />
      </React.Fragment>
    );
  }
}

// Defined types for Header
Header.propTypes = {
  handleShowLocation: PropTypes.func.isRequired,
  handleSubmitLocation: PropTypes.func.isRequired,
  chooseLocation: PropTypes.func.isRequired,
  resetWeather: PropTypes.func.isRequired,
  weather: PropTypes.array.isRequired
};

// Defined default value for Header
Header.defaultValue = {
  handleShowLocation: () => {},
  handleSubmitLocation: () => {},
  chooseLocation: () => {},
  resetWeather: () => {},
  weather: []
};


export default Header;
