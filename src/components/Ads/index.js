import React from 'react';
import { Block, Wrapper } from 'sharedUi';
import {
  useParams,
} from 'react-router-dom';
import data from 'articles';

const Ads = () => {
  const { ads } = useParams();
  const item = data.filter(items => items.order === Number(ads)).shift();

  return (
    <section>
      <Wrapper>
        <Block>
          {ads && (
            <h1>{`ADS-${ads}`}</h1>
          )}
          {item.title && (
            <h4>{item.title}</h4>
          )}
          {item.description && (
            <p>{item.description}</p>
          )}
        </Block>
      </Wrapper>
    </section>
  );
};

export default Ads;
