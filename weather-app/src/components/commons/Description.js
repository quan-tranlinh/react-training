import React from 'react';
import PropTypes from 'prop-types';
import { CustomDescription } from './styled/Description.styled';

class Description extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.text !== this.props.text;
  }

  render() {
    const { text, customStyle } = this.props;

    return (
      <CustomDescription style={customStyle}>
        {text}
      </CustomDescription>
    );
  }
}

// Defined types for Description
Description.propTypes = {
  text: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
};

// Defined default value for Description
Description.defaultValue = {
  text: '',
  customStyle: {},
};

export default Description;
