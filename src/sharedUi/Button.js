import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const Btn = styled.button`
    display: inline-flex;
    justify-content: center;
    align-self: flex-start;
`;

const Button = ({ children, className }) => (
  <Btn className={className}>
    {children}
  </Btn>
);

Button.propTypes = propTypes;
export default Button;
