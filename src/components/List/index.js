import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from './components/Item';

function List(props) {
  const { items } = props;

  return (
    <div className="items">
      {items.map(item => (
        <Item
          key={item.order}
          data={item}
        />
      ))}
    </div>
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = ({ ads }) => ({
  items: ads.items,
});

export default connect(
  mapStateToProps,
)(List);
