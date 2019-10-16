import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
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

  let {
    page,
  } = useParams();

  if (page === undefined) page = 1;

  const {
    items,
    setAdsItems,
  } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

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

  const onClick = goPage => () => {
    setCurrentPage(goPage);
    history.push(`/page/${goPage}`);
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
                page={currentPage * 1}
                item={item}
                fn={onClick.bind(null, item)}
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
