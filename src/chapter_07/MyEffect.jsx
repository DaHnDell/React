import React, { useEffect, useState } from 'react';

const MyEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `총 ${count} 번 클릭했습니다.`;
  }, [count])
  return (
    <div>
      <p>총 {count} 번 클릭했습니다.</p>
      <button onClick={() =>  setCount(count + 1)}>버튼?이에요?</button>
    </div>
  );
}

export default MyEffect;
