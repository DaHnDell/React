import React, { useState } from 'react';
import Toolbar from './Toolbar';

const LandingPage = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  }
  
  const onClickLogout = () => {
    setIsLoggedIn(false);
  }
  
  const onClickToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
        onClickToggle={onClickToggle}
      />
      <div style={{padding: 16}}> I Like React !I Like React !I Like React !I Like React !I Like React !I Like React ! </div>
    </div>
  );
}

export default LandingPage;
