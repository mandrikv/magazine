import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from '../Item';

class List extends Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        <div className="items">
          { items.map((item, index) => (
            <Item
              key={index}
              data={item}
            />
          ))}
        </div>
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    items: state.ads.items,
  };
}

export default connect(
  mapStateToProps,
)(List);
