import React from 'react';
import reduceData from '../utils/helper';
import PropTypes from 'prop-types';

// Import common component
import Card from './commons/Card';
import Description from './commons/Description';
import { CustomFlexBox } from './commons/styled/FlexBox';

class CardList extends React.Component {
  componentDidMount() {
    this.timer = setInterval(this.increaseHours, 50000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  /**
   * Function increment clock
   */
  increaseHours = () => {
    const weatherData = this.props.locations[0] && this.props.locations[0];
    weatherData && this.props.chooseLocation(weatherData.name);
  }

  /**
   * Function handle delete
   * @param id
   */
  handleDelete = (id) => {
    this.props.deleteWeather(id);
  }

  renderCard = (params) => {
    const {
      key,
      weather,
      location,
      temperature,
      weatherStatus,
      type,
      onClick,
    } = params;

    return (
      <Card
        key={key}
        weather={weather}
        location={location}
        temperature={temperature.toString()}
        weatherStatus={weatherStatus}
        type={type}
        onClick={onClick}
      />
    );
  }

  /**
   * Function render weather
   */
  renderWeather = () => {
    const weatherData = this.props.weather[0];
    const weatherList = reduceData(weatherData);

    const listWeather = [];

    for (let property in weatherList) {
      listWeather.push(weatherList[property][0]);
    }

    return (
      listWeather.map((item) => {
        return (
          this.renderCard({
            key: item.id,
            location: item.dt_txt,
            temperature: item.temp,
            weatherStatus: item.main,
          })
        );
      })
    );
  }

  /**
   * Function render location
   * @param weather
   */
  renderLocation = (weather) => {
    return (
      this.renderCard({
        key: weather.id,
        weather,
        location: weather.name,
        temperature: weather.main.temp,
        weatherStatus: weather.weather[0].main,
        type: 'base',
        onClick: this.handleDelete,
      })
    );
  }

  render() {
    const weatherData = this.props.weather[0];
    const locations = this.props.locations;
    const sliceData = !!weatherData && weatherData.response
      ? '' : !!weatherData && weatherData.list.slice(0, 6);

    return (
      <React.Fragment>
        {
          !weatherData && locations
            && (
              <React.Fragment>
                {
                  locations.length > 0
                    && (
                      <Description
                        text="Weather Board"
                        customStyle={{
                          marginBottom: '20px',
                          fontSize: '24px',
                        }}
                      />
                    )
                }
                <CustomFlexBox>
                  {
                    locations.map(this.renderLocation)
                  }
                </CustomFlexBox>
              </React.Fragment>
            )
        }

        <Description
          text={
            weatherData && weatherData.response
              ? `The city is ${weatherData.response.statusText}` : ''
          }
          customStyle={{ fontSize: '24px' }}
        />
        {
        weatherData && !weatherData.response
          && (
            <React.Fragment>
              <Description
                text={weatherData && `This is weather of ${weatherData.city.name}`}
                customStyle={{ fontSize: '24px' }}
              />
              <CustomFlexBox>
                {
                  weatherData && sliceData.map((item) => {
                    return (
                      this.renderCard({
                        key: item.dt,
                        location: item.dt_txt,
                        temperature: item.main.temp,
                        weatherStatus: item.weather[0].main,
                      })
                    );
                  })
                }
              </CustomFlexBox>
              <Description
                text={weatherData && `This is weather forecast in 5 days ${weatherData.city.name}`}
                customStyle={{
                  fontSize: '24px',
                  textAlign: 'center',
                }}
              />
              <CustomFlexBox>
                {this.renderWeather()}
              </CustomFlexBox>
            </React.Fragment>
          )
        }
      </React.Fragment>
    );
  }
}

// Defined types for Card List
CardList.propTypes = {
  deleteWeather: PropTypes.func.isRequired,
  chooseLocation: PropTypes.func.isRequired,
  weather: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired
};

// Defined default value for Card List
CardList.defaultValue = {
  deleteWeather: () => {},
  chooseLocation: () => {},
  weather: [],
  locations: []
};

export default CardList;
