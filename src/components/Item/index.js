import React from 'react';
import PropTypes from 'prop-types';
import {
  ItemBlock,
  Wrapper,
  ImgBlock,
  ContentBlock,
} from './styles';
import { Button } from '../ui';

function Item(props) {
  const { data } = props;

  return (
    <ItemBlock className="item">
      <Wrapper>
        <ImgBlock>
          <img
            alt="Photos"
            src={`https://picsum.photos/150?random=${data.order}`}
          />
        </ImgBlock>
        <ContentBlock>
          <h4>{data.title}</h4>
          <p>{data.description}</p>
          <Button>
            Read more
          </Button>
        </ContentBlock>
      </Wrapper>
    </ItemBlock>
  );
}

Item.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Item;
