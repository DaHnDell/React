import React, { useEffect, useState } from 'react';
import useCounter from './useCounter';

const MAX_CAP = 10;

const Accomodate = (props) => {

  const [isFull, setIsFull] = useState(false);
  const [count, incCount, decCount] = useCounter(0);

  useEffect(() => {
    console.log("========================");
    console.log("useEffect() is called");
    console.log(`isFull:${isFull}`);
  })

  useEffect(() => {
    setIsFull(count >= MAX_CAP);
    console.log(`Current count value : ${count}`);
  }, [count]);

  return (
    <div style={{padding:16}}>
      <p>{`Accomodated ${count} people.`}</p>
      <button onClick={incCount} disabled={isFull}>Add 1 person</button>
       / 
      <button onClick={decCount} disabled={count === 0}>Depart 1 person</button>

      {isFull && <p style={{color:"red"}}>Room is FUll.</p>}
      {count === 0 && <p style={{color:"red"}}>Room is EMPTY.</p>}

    </div>
  );
}

export default Accomodate;
