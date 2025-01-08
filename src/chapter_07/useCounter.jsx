import React, { useState } from 'react';

const useCounter = (initVal) => {
  const [count, setCount] = useState(initVal);

  const incCount = () => setCount(c => c+1);
  const decCount = () => setCount(c => Math.max(c-1, 0));

  return [count, incCount, decCount];
}

export default useCounter;
