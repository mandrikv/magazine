import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../Item';

class List extends Component {
  getItems = () => {
    return this.props.items.map((item, index) => (
      <Item
        key={index}
        data={item}
      />
    ));
  };

  render() {
    return (
      <div>
        <div className="items">
          {this.getItems()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.ads.items,
  };
}

export default connect(
  mapStateToProps,
)(List);
