import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Ul, Li } from './styles';
import data from '../../data/articles';

const propTypes = {
  setAdsItems: PropTypes.func.isRequired,
};

class Pagination extends Component {
  state = {
    array: data,
    limitItems: 5,
    currentPage: 1,
    startItem: 0,
    endItem: 5,
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    const { currentPage } = this.state;
    const { currentPage: currentPageNext } = nextState;

    return currentPage !== currentPageNext;
  };

  onClick = page => () => {
    this.filterPage();

    this.setState((prevState) => {
      const { limitItems } = prevState;

      return {
        currentPage: page,
        startItem: page * limitItems - limitItems,
        endItem: page * limitItems,
      };
    });
  };

  getPage = () => {
    const {
      currentPage,
      array,
      limitItems,
    } = this.state;
    let n = 1;
    const allPage = Math.ceil(array.length / limitItems);
    const output = [];

    while (n <= allPage) {
      output.push(n);
      n += 1;
    }

    return (
      <Ul>
        {output.map(item => (
          <Li
            className={currentPage === item && 'active'}
            onClick={this.onClick(item)}
            key={item}
          >
            {item}
          </Li>
        ))}
      </Ul>
    );
  };

  filterPage = () => {
    const { startItem, endItem, array = [] } = this.state;
    const { setAdsItems } = this.props;
    const newArrey = array.slice(startItem, endItem);

    setAdsItems(newArrey);
  };

  render() {
    this.filterPage();

    return (
      <div className="pagination">
        {this.getPage()}
      </div>
    );
  }
}

Pagination.propTypes = PropTypes;

export default Pagination;



