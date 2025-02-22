import React, { useState } from 'react';

const fruits = ['Apple', 'Strawberry', 'Grape', 'Peach', 'Tangerine', 'Orange', 'Banana', 'Dragonfruit', 'Guaba'];

const MyFruit = () => {
  const [bucket, setBucket] = useState([]);

  return (
    <div>
      <h3>현재 바구니: {bucket.join(', ')}</h3>
      <button onClick={() => {
        const newFruit = fruits[parseInt(Math.random() * fruits.length)];
        setBucket([...bucket, newFruit]);
      }}>과일 추가</button>
      <button onClick={() => {
        if (bucket.length > 0) {
          const newBucket = [...bucket];
          newBucket.pop();
          setBucket(newBucket);
        }
      }}>과일 제거</button>
      <button onClick={() => setBucket([])}>바구니 비우기</button>
      <ul>
        {fruits.map((f, i) => (
          <li key={i}>{f}개</li>
        ))}
      </ul>
    </div>
  );
};

export default MyFruit;