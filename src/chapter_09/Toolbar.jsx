import React from 'react';

const styles = {
  wrapper : {
    padding: 16,
    dsiplay: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid grey'
  },
  greeting: {
    marginRight: 8
  }
}

const Toolbar = (props) => {
  const {isLoggedIn, onClickLogin, onClickLogout, onClickToggle} = props;
  return (
    <div style={styles.wrapper}>
      {isLoggedIn && <span style={styles.greeting} > W E L C O M E </span>}
      {isLoggedIn ? (<button onClick={onClickLogout}> L O G O U T </button>) : (<button onClick={onClickLogin}> L O G I N </button>)}
      <button onClick={onClickToggle}> {isLoggedIn ? 'L O G O U T' : 'L O G I N'} </button>
    </div>
  );
}

export default Toolbar;
