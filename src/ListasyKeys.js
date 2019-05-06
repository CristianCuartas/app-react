import React from 'react';

function NumberList(props) {
  const { numbers } = props;
  const listItems = numbers.map(number => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}
const numbers = [1, 2, 3, 4, 5];

function showList() {
  return <NumberList numbers={numbers} />;
}
export default showList;
