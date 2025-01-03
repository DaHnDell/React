import React from 'react';
import AirBNB from './AirBNB';

const AirBnBList = (props) => {
  return (
    <>
      <AirBNB imageSrc="https://placehold.jp/300x300.png" title="Seoul" text="Capital of South Korea"  style={{backgroundColor: '#de3151'}}/>
      <AirBNB imageSrc="https://placehold.jp/300x300.png" title="Busan" text="Seafood" style={{backgroundColor: '#cc2d4a'}}/>
      <AirBNB imageSrc="https://placehold.jp/300x300.png" title="Hweng-Seong" text="K-cow" style={{backgroundColor: '#d93b30' }}/>
      <AirBNB imageSrc="https://placehold.jp/300x300.png" title="Naju" text="K-pear" style={{backgroundColor: '#bc1a6e'}}/>
    </>
    // {items.map((item, idx) => <BnbItem key={idx} {...items})}
    // const url = {src : www.naver.com}
    // const src = url.src;
    //
    //
    
  );
}

export default AirBnBList;
