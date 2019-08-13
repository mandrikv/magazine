import React from 'react';
import PropTypes from 'prop-types';
import ListAdsItem from './components/ListAdsItem';
import Ul from './styles'

const propTypes = {
  items: PropTypes.array.isRequired,
};

const ListAds = (props) => {
  const { items } = props;

  return (
    <Ul className="list-ads">
      {items.map(item => (
        <ListAdsItem
          key={item.order}
          data={item}
        />
      ))}
    </Ul>
  );
};

ListAds.propTypes = propTypes;
export default ListAds;
