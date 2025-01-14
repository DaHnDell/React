import React, { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");
  const {data, loading, error, req} = useAxios("http://localhost:8080/api/");
  // const navigate = useNavigate();
  const {login} = useAuth();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log("email" + email);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    console.log("pass" + password);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const member = {email, password};
    console.log(member);
    try{
      const resp = await req('get', `login?email=${email}`);
      resp && login(email, resp);
      console.log(data);
//    email
//    token
      // localStorage.setItem('email', email);
      // console.log(localStorage.getItem('email'));
      // localStorage.setItem('token', resp);
      // console.log(localStorage.getItem('token'));
      // resp && navigate("/dashboard");
    }
    catch(error){
      console.error("login failed", error);
    }

  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>email :</label>
        <input type='text' id='email' name='email' value={email} onChange={handleChangeEmail}/>
      </div>
      <div>
        <label htmlFor='password'>password :</label>
        <input type='password' id='password' name='password' value={password} onChange={handleChangePassword}/>
      </div>
      <div>
        <button disabled={loading }>{loading ? '로그인 중...' : 'Log - in'}</button>
        {error && <p style={{color:'red'}}> 에러 발생 <br/> {error.message}</p>}
      </div>
    </form>
  );

}

export default LoginForm;
