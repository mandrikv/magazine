import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'sharedUi';
import {
  ItemBlock,
  Wrapper,
  ImgBlock,
  ContentBlock,
} from './styles';

const propTypes = {
  data: PropTypes.object.isRequired,
};

function Item(props) {
  const { data } = props;

  return (
    <ItemBlock className="list-ads__item">
      <Wrapper>
        {data.order && (
          <ImgBlock>
            <img
              alt="Photos"
              src={`https://picsum.photos/150?random=${data.order}`}
            />
          </ImgBlock>
        )}
        <ContentBlock>
          {data.title && <h4>{data.title}</h4>}
          {data.description && <p>{data.description}</p>}
          <Button>
            Read more
          </Button>
        </ContentBlock>
      </Wrapper>
    </ItemBlock>
  );
}

Item.propTypes = propTypes;
export default Item;
