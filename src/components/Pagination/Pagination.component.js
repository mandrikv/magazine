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
      items: data,
      limitItems: 3,
      currentPage: 1,
    };
  }

  componentWillMount() {
    this.filterPage();
  }

  onClick = page => () => {
    this.setState(() => ({
      currentPage: page,
    }), () => {
      this.filterPage();
    });
  };

  filterPage = () => {
    const {
      currentPage,
      limitItems,
      items = [],
    } = this.state;

    const {
      setAdsItems,
    } = this.props;

    const currentItems = items.slice(
      currentPage * limitItems - limitItems,
      currentPage * limitItems,
    );

    setAdsItems(currentItems);
  };

  render() {
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
