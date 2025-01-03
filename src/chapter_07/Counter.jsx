import React from 'react';
import { useState } from 'react';

const Counter = (props) => {
  // let count = 0;
  // import시에 명시적으로 사용될 것임을 선언.
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>총 {count} 번 클릭했습니다.</p>
      <button onClick={() => {setCount(count+1); console.log(count);}}> +1 </button>
      <button onClick={() => {setCount(count-1); console.log(count);}}> -1 </button>
      <button onClick={() => {setCount(0); console.log(count);}}> 초기화 </button>
    </div>
  );
}

export default Counter;
