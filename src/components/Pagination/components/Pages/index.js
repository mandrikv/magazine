import React from 'react';
import { Li, Ul } from './styles';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.object.isRequired,
  fn: PropTypes.func.isRequired,
};

const Pages = (props) => {
  const {
    currentPage,
    items,
    limitItems,
  } = props.data;

  const allPage = Math.ceil(items.length / limitItems);
  const output = [];

  let n = 1;

  while (n <= allPage) {
    output.push(n);
    n += 1;
  }

  return (
    <Ul>
      {output.map(item => (
        <Li
          className={currentPage === item && 'active'}
          onClick={props.fn(item)}
          key={item}
        >
          {item}
        </Li>
      ))}
    </Ul>
  );
};

Pages.propTypes = propTypes;
export default Pages;
