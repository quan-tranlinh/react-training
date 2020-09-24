import React from 'react';
import PropTypes from 'prop-types';
import Description from './Description';
import Button from './Button';
import { CustomCard } from './styled/Card.styled';
import { FlexBox } from './styled/FlexBox';

class Card extends React.PureComponent {
  handleDelete = () => {
    this.props.onClick(this.props.weather.id);
  }

  render() {
    const {
      location,
      temperature,
      weatherStatus,
      type,
    } = this.props;

    return (
      <CustomCard>
        <FlexBox>
          <Description
            text={location}
          />
          {
            type === 'base'
              && (
                <Button
                  text="Delete"
                  onClick={this.handleDelete}
                  customStyle={{
                    backgroundColor: 'red',
                    marginLeft: '10px',
                  }}
                />
              )
          }
        </FlexBox>
        <FlexBox>
          <Description
            customStyle={{
              fontSize: '24px',
              color: '#00008B',
            }}
            text={temperature}
          />
          <Description
            text="&deg;C"
          />
        </FlexBox>
        <Description
          text={weatherStatus}
        />
      </CustomCard>
    );
  }
}

// Defined types for Card
Card.propTypes = {
  location: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  weatherStatus: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

// Defined default value for Card
Card.defaultValue = {
  location: '',
  temperature: '',
  weatherStatus: '',
  onClick: () => {},
  type: '',
};

export default Card;
