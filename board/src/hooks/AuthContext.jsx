import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// 로컬 스토리지의 값 가져오기
// 로긩ㄴ 구현
// 로그아웃도 구현
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [token, setToken] = useState(localStorage.getItem('token')); 
  const navigate = useNavigate();
// token, email
  useEffect(() => {
    if(token && email){
      const storedMember = localStorage.getItem('email');
      setEmail(storedMember);
    }
  }, [token, email])

  const login = (email, token) => {
    setEmail(email);
    setToken(token);

    localStorage.setItem('token', token);
    localStorage.setItem('email', email);

    navigate('/dashboard')
  }

  const logout = (email, token) => {
    setEmail(null);
    setToken(null);
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    navigate('/dashboard')
  }
  return (
    <AuthContext.Provider value={{email, token, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = ()=> useContext(AuthContext);
