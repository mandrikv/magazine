import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'sharedUi';
import {
  ListAdsItem,
  AdsItem,
  AdsImgBlock,
  AdsContent,
} from '../styles';

const propTypes = {
  data: PropTypes.object.isRequired,
};

const ListAds = (props) => {
  const { data } = props;

  return (
    <ListAdsItem className="l-ads__item">
      <AdsItem className="b-ads">
        {data.order && (
          <AdsImgBlock className="b-ads__images">
            <img
              className="images"
              alt="Photos"
              src={`https://picsum.photos/150?random=${data.order}`}
            />
          </AdsImgBlock>
        )}
        <AdsContent className="b-ads__content">
          {data.title && <h4 className="b-ads__title">{data.title}</h4>}
          {data.description && <p className="b-ads__description">{data.description}</p>}
          <Button className="btn b-ads__btn">
            Read more
          </Button>
        </AdsContent>
      </AdsItem>
    </ListAdsItem>
  );
};

ListAds.propTypes = propTypes;
export default ListAds;
