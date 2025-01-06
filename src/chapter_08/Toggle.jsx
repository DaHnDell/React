import React, { useState } from 'react';

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button onClick={(e) => {setToggle(toggle => !toggle);}} disabled={toggle}> 클릭 </button>
      <div>{toggle ? 'on' : 'off'}</div>
    </>
  );
}

export default Toggle;
