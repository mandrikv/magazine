import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const WrapperContent = styled.div`
`;

const Content = styled.div`
    max-width: 960px;
    padding: 0 10px;
    margin: 0 auto;
`;

const Wrapper = ({ children }) => (
  <WrapperContent className="wrapper">
    <Content className="container">
      {children}
    </Content>
  </WrapperContent>
);

Wrapper.propTypes = propTypes;
export default Wrapper;
