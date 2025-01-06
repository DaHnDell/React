import React, { useState } from 'react';
// 과일 종류 별로 이름이 나오게 할 것.
// 초기값
const MyFruit = () => {
  const fruits = ['Apple', 'Strawberry', 'Grape', 'Peach', 'Tangerine', 'Orange', 'Banana', 'Dragonfruit', 'Guaba'];
  const fruitscnt = fruits.map(f => ([{name: f, count: 0}]));
  const [bucket, setBucket] = useState([...fruitscnt]);
  console.log(fruitscnt);
  return (
    <div>
      <h3>{bucket}</h3>
      <button onClick={()=>{
        const nf = parseInt(Math.random()*bucket.length);
        bucket[nf].count++; // 버켓 자체는 변하지 않음.
        console.log(bucket);
        bucket.push(nf); 
        setBucket([...bucket]);  
      }}>과일 추가</button>
      // {/* <button onClick={()=>{bucket.splice(nf, 1); setBucket([...bucket]);}}>과일 제거</button> */}
      <button onClick={()=>{setBucket([...fruitscnt])}}>바구니 비우기</button>
      <ul>
        {bucket.map((f, i) => {f+=1; <li key = {i}>{f.name} :: {f.count}개 </li>;})}
      </ul>
    </div>
  );
}

export default MyFruit;