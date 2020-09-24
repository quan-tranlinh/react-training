import React from 'react';
import PropTypes from 'prop-types';
import { CustomButton } from './styled/Button.styled';

const Button = ({
  onClick,
  customStyle,
  text,
}) => {
  return (
    <CustomButton
      onClick={onClick}
      style={customStyle}
    >
      {text}
    </CustomButton>
  );
};

// Defined types for button
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
};

// Defined default value for Button
Button.defaultValue = {
  onClick: () => {},
  text: '',
  customStyle: {},
};

export default Button;
