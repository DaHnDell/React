import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';

const DashBoard = () => {
  const {email, token, logout} = useAuth();
  // const [email, setEmail] = useState(localStorage.getItem('email'));
  // const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  // const handleLogOut = () => {
    // setItem, getItem, removeItem;
    // navigate("/");
    // if(token !== null){
    //   console.log("logout expect");
    //   console.log(email);
    // }else if(email === null){
      //   console.log(email);
      //   console.log("login explect")
      // }
    // token &&  setEmail(localStorage.removeItem('email')); setToken(localStorage.removeItem('token'));
    // !token && navigate("/");
  // }

  return (
    <div>
      <h1> DASHBOARD </h1>
      <p>{!token ? 'Guest' : ''}</p>
      <p>{email}</p>
      <p>{token}</p>
      {/* <button onClick={() => navigate("/list")} {...token === null ? 'disabled' : ''}>List</button> */}
      {/* <Link to="/list" {...token === null ? 'disabled' : ''}>List</Link>
      <button onClick={handleLogOut}>{token ? 'Logout' : 'Login'}</button> */}
      {email ? <> <button onClick={logout}>Log-Out</button><Link to={"/notes"}>List</Link></> : <Link to={"/"}>Log-in</Link>}
    </div>
  );
}

export default DashBoard;
