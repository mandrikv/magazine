import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Block, Wrapper } from 'sharedUi';
import data from 'articles';
import { PaginationWrapper, ListWrapper } from './components/styles';
import ListAds from './components/ListAds';
import PaginationAds from './components/PaginationAds';

const propTypes = {
  items: PropTypes.array.isRequired,
  setAdsItems: PropTypes.func.isRequired,
};

const AllAds = (props) => {
  const limitItems = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const {
    items,
    setAdsItems,
  } = props;

  setAdsItems(data);

  const currentItems = items.slice(
    currentPage * limitItems - limitItems,
    currentPage * limitItems,
  );

  const allPages = Math.ceil(items.length / limitItems);
  const output = [];
  let n = 1;

  while (n <= allPages) {
    output.push(n);
    n += 1;
  }

  const onClick = page => () => {
    setCurrentPage(page);
  };

  return (
    <section>
      <Wrapper>
        <Block>
          <ListWrapper className="l-ads">
            {currentItems.map(item => (
              <ListAds
                key={item.order}
                data={item}
              />
            ))}
          </ListWrapper>
          <PaginationWrapper className="b-pagination">
            {output.map(item => (
              <PaginationAds
                key={item}
                currentPage={currentPage}
                item={item}
                fn={onClick}
              />
            ))}
          </PaginationWrapper>
        </Block>
      </Wrapper>
    </section>
  );
};

AllAds.propTypes = propTypes;
export default AllAds;
