import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput } from './styled/Input.styled';

const Input = ({
  defaultValue,
  onBlur,
}) => (
  <CustomInput
    ref={(input) => { this.textInput = input; }}
    defaultValue={defaultValue}
    onBlur={onBlur}
  />
);

// Defined types for input
Input.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
};

// Defined default value for input
Input.defaultValue = {
  defaultValue: '',
  onBlur: () => {},
};

export default Input;
