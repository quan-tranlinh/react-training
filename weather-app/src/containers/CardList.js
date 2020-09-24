import { connect } from 'react-redux';
import { deleteWeather, chooseLocation } from '../actions/index';

// Import common component
import CardList from '../components/CardList'

const mapStateToProps = ({ weather, locations }) => {
  return {
    weather,
    locations,
  };
};

const mapDispatchToProps = {
  deleteWeather: (id) => deleteWeather(id),
  chooseLocation: (city) => chooseLocation(city),
};

const CardListContainer = connect(mapStateToProps, mapDispatchToProps)(CardList);

export default CardListContainer;
