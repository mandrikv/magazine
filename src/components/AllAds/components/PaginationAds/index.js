import React from 'react';
import PropTypes from 'prop-types';
import { PaginationItem } from '../styles';

const propTypes = {
  item: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  fn: PropTypes.func.isRequired,
};

const PaginationAds = (props) => {
  const {
    item,
    currentPage,
    fn,
  } = props;

  return (
    <PaginationItem
      className={`${currentPage === item && 'active'} b-pagination__item`}
      onClick={fn(item)}
    >
      {item}
    </PaginationItem>
  );
};

PaginationAds.propTypes = propTypes;
export default PaginationAds;
