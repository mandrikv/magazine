import React, { Component } from 'react';
import PropTypes from 'prop-types';
import data from 'articles';
import Pages from './components/Pages';

const propTypes = {
  setAdsItems: PropTypes.func.isRequired,
};

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: data,
      limitItems: 3,
      currentPage: 1,
      startItem: 0,
      endItem: 3,
    };
  }

  componentWillMount() {
    this.filterPage();
  }

  onClick = page => () => {
    this.setState((prevState) => {
      const { limitItems } = prevState;

      return {
        currentPage: page,
        startItem: page * limitItems - limitItems,
        endItem: page * limitItems,
      };
    }, () => {
      this.filterPage();
    });
  };

  filterPage = () => {
    const {
      startItem,
      endItem,
      array = [],
    } = this.state;

    const {
      setAdsItems,
    } = this.props;

    const currentItems = array.slice(startItem, endItem);

    setAdsItems(currentItems);
  };

  render() {
    console.log('render');

    return (
      <div className="pagination">
        <Pages
          data={this.state}
          fn={this.onClick}
        />
      </div>
    );
  }
}

Pagination.propTypes = propTypes;
export default Pagination;
