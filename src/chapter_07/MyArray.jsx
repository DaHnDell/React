import React, { useState } from 'react';

const MyArray = () => {
  const fruits = ['Apple', 'Strawberry', 'Grape', 'Peach', 'Tangerine', 'Orange', 'Banana', 'Dragonfruit', 'Guaba'];
  const [bucket, setBucket] = useState([]);
  let nf = fruits[parseInt(Math.random()*fruits.length)];
  // 주소로 판단하기 때문에
  return (
    <div>
      <h3>{bucket}</h3>
      <button onClick={()=>{bucket.push(nf); setBucket([...bucket]);}}>과일 추가</button>
      <button onClick={()=>{bucket.splice(nf, 1); setBucket([...bucket]);}}>과일 제거</button>
      <button onClick={()=>{setBucket([])}}>바구니 비우기</button>
      <ul>
        {fruits.map((f, i) => <li key ={i}>{f} 개 </li>)}
      </ul>
    </div>
  );
}

export default MyArray;
