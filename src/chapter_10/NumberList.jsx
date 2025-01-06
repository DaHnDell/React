import React from 'react';

const NumberList = (props) => {
  const [numbers] = props;
  const ListItem = numbers.map((number => <li> {number} </li>));
  return ListItem;
}

export default NumberList;
