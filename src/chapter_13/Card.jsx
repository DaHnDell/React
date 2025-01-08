import React, { Children } from 'react';

const Card = (props) => {
  const { title, backgroundColor, children } = props;
  return (
    <div style={{margin:0, padding:0, borderRadius:0, boxShadow:'0 0 4px grey', backgroundColor: backgroundColor || "white"}}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default Card;
