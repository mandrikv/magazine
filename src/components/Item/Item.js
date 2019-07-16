import React from 'react';
import styled from 'styled-components';
import { Button } from '../ui';

const ItemBlock = styled.div`
    margin-bottom: 80px;

    &:not(:last-child) {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
    }
`;

const Wrapper = styled.div`
    display: flex;
`;

const ImgBlock = styled.div`
    display: flex;
    align-items: flex-start;
    flex: 1 1 150px;
`;

const ContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    padding-left: 40px;
`;

function Item(props) {
    const {order, title, description} = props.data;

    return (
      <ItemBlock className="item">
          <Wrapper>
              <ImgBlock>
                  <img src={`https://picsum.photos/150?random=${order}`}/>
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