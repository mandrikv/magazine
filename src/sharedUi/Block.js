import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListAdsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  list-style: none;
  padding: 20px 40px;
  border-radius: 4px;
  box-shadow: 0px 5px 20px 5px rgba(189,170,189,0.5);
`;

const Block = ({ children }) => (
  <ListAdsWrapper className="l-ads__wrapper">
    {children}
  </ListAdsWrapper>
);

Block.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Block;
