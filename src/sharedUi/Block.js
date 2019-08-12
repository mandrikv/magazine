import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BlockWrapper = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 40px;
  border-radius: 4px;
  box-shadow: 0px 5px 20px 5px rgba(189,170,189,0.5);
`;

const Block = ({ children }) => (
  <BlockWrapper className="block">
    {children}
  </BlockWrapper>
);

Block.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Block;
