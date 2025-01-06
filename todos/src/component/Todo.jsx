import React from 'react';

const Todo = ({id, content, writer, regDate}) => {
  // const props = {id, content, writer, regDate};
  // const []
  // if(!{id, content, writer, regDate}){
  //   return ( 
  //   <li>
  //     <p>대체 메세지</p>
  //   </li>
  //   )
  // }
  
  return (
    <li>
      <p>{id}, {content}</p>
      <p>{writer}, {regDate}</p>
    </li>
    // 이렇게 하면 시점이 일치하지 않음.
  );
}

export default Todo;
