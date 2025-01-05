// import React, { useState } from 'react';
// // 과일 종류 별로 이름이 나오게 할 것.
// const fruits = ['Apple', 'Strawberry', 'Grape', 'Peach', 'Tangerine', 'Orange', 'Banana', 'Dragonfruit', 'Guaba'];
// let nf = fruits[parseInt(Math.random()*fruits.length)];
// const [bucket, setBucket] = useState([]);

// const MyFruit = () => {
//   return (
//     <div>
//       <h3>{bucket}</h3>
//       <button onClick={()=>{bucket.push(nf); setBucket([...bucket]);  }}>과일 추가</button>
//       <button onClick={()=>{bucket.splice(nf, 1); setBucket([...bucket]);}}>과일 제거</button>
//       <button onClick={()=>{setBucket([])}}>바구니 비우기</button>
//       <ul>
//         {fruits.map((f, i) => {f+=1; <li key = {i}>{f}개 </li>;})}
//       </ul>
//     </div>
//   );
// }

// export default MyFruit;

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
