import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  fn: PropTypes.func,
};

const defaultProps = {
  fn: {},
};

const Btn = styled.button`
    display: inline-flex;
    justify-content: center;
    align-self: flex-start;
`;

const Button = ({ children, className, fn }) => (
  <Btn
    className={className}
    onClick={fn()}
  >
    {children}
  </Btn>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
