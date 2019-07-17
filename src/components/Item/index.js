import React from 'react';
import { ItemBlock, Wrapper, ImgBlock, ContentBlock} from './styles';
import { Button } from '../ui';

function Item(props) {
    const {order, title, description} = props.data;

    return (
      <ItemBlock className="item">
          <Wrapper>
              <ImgBlock>
                  <img alt='Photos' src={`https://picsum.photos/150?random=${order}`}/>
              </ImgBlock>
              <ContentBlock>
                  <h4>{title}</h4>
                  <p>{description}</p>
                  <Button>
                      Read more
                  </Button>
              </ContentBlock>
          </Wrapper>
      </ItemBlock>
    );
}

export default Item;