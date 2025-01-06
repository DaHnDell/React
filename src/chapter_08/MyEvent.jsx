import React from 'react';

const MyEvent = () => {
  return (
    <div>
      <div style={{border:"5px solid", padding:50}} onClick={() => console.log("HIGHLEVELCLICKED")}>
        <div style={{border:"5px solid", padding:50}} onClick={(e)=>{
          console.log("MIDLEVELCLICKED")
          console.log("e 객체의 정체 :: " + e);
          console.log(e);
          console.log("e 타겟의 정체 // 이벤트 발동 시킨 놈 :: " + e.target);
          console.log(e.target);
          console.log("e 현재타겟의 정체 // 이벤트가 걸린 놈 :: " + e.currentTarget);
          console.log(e.currentTarget);
          console.log("e 현재타겟의 속성 title :: " + e.currentTarget);
          console.log(e.currentTarget.title);
          e.stopPropagation();
        }} title='I AM TITLE'>
          <button style={{padding:20}} onClick={(e)=> {console.log("LOWLEVELCLICKED")}}>CLICK</button>
        </div>
      </div>
    </div>
  );
}

export default MyEvent;