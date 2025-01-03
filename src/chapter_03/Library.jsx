import React from 'react';
import Book from './Book';
import MyBook from './MyBook';

const result = [
  {
    name : "운다고 달라지는 일은 아무것도 없겠지만",
    numOfPage : 1300
  },

  {
    name : "데미안",
    numOfPage : 2400
  },

  {
    name : "폭풍의 언덕",
    numOfPage : 3200
  }
];


const Library = () => {
  return (
    <>
      {/* <Book name = {result[0].name}> numOfPage = {result[0].numOfPage}</Book>
      <Book name = {result[1].name}> numOfPage = {result[1].numOfPage}</Book>
      <Book name = {result[2].name}> numOfPage = {result[2].numOfPage}</Book> */}
      {/* <Book name = {result.map(element => <Book)}></Book> */}
      {result.filter(element=> element.numOfPage != 2400).map(element => <Book name={element.name} numOfPage={element.numOfPage}/>)}
      <MyBook name="스프링부트" numOfPage="98120"/>
    </>
  );
}

export default Library;
