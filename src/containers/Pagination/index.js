import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Ul, Li } from './styles';
import data from '../../data/articles';
// import { setAdsItems } from '../../store/ads/action';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: data,
      limitItems: 5,
      currentPage: 1,
      startItem: 0,
      endItem: 5,
      length: data.length,
      func: this.onClick,
    };

    this.onClick = this.onClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { currentPage } = this.state;
    const { currentPage: currentPageNext } = nextState;
    return currentPage !== currentPageNext;
  }

  filterPage() {
    const { startItem, endItem, array = [] } = this.state;
    const { setAdsItems } = this.props;
    const newArrey = array.slice(startItem, endItem);

    setAdsItems(newArrey);
  }

  onClick = (page) => () => {
    this.filterPage(page);

    this.setState(prevState => {
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
      func,
      currentPage,
      length,
      limitItems,
    } = this.state;
    let n = 1;
    const allPage = Math.ceil(length / limitItems);
    const output = [];

    while (n <= allPage) {
      output.push(n);
      n++;
    }

    return (
      <Ul>
        {output.map(item => (
          <Li
            className={currentPage === item && 'active'}
            onClick={func(item)}
            key={item}
          >
            {item}
          </Li>
        ))}
      </Ul>
    );
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

Pagination.propTypes = {
  setAdsItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.ads.items,
});


// TODO Не знаю как правильно подключить и использвать Action

// const mapDispatchToProps = dispatch => ({
//   setAdsItems: setAdsItems,
// });

export default connect(
  mapStateToProps,
  dispatch => ({
    setAdsItems: (items) => {
      dispatch({
        type: 'ads/SET_ITEMS',
        payload: items,
      });
    },
  }),
)(Pagination);
