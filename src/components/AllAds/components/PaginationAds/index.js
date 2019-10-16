import React from 'react';
import PropTypes from 'prop-types';
import { PaginationItem } from '../styles';

const propTypes = {
  item: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  fn: PropTypes.func.isRequired,
};

const PaginationAds = (props) => {
  const {
    item,
    page,
    fn,
  } = props;

  return (
    <PaginationItem
      className={`${page === item && 'active'} b-pagination__item`}
      onClick={fn()}
    >
      {item}
    </PaginationItem>
  );
};

PaginationAds.propTypes = propTypes;
export default PaginationAds;
