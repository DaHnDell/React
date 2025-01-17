import {BrowserRouter, Route, Routes} from "react-router-dom";
import List from "./component/board/List";
import Write from "./component/board/Write";
import React from "react";
import LoginForm from "./component/member/LoginForm";
import DashBoard from "./component/common/DashBoard";
import ProtectedRoute from "./component/common/ProtectedRoute";
import { AuthProvider } from "./hooks/AuthContext";
import View from "./component/board/View";
import Modify from "./component/board/Modify";

// import "../../css/not_found.scss"
// 로그인 성공 시 스토리지에 토큰, 이메일 저장 1) 페이지 이동 -> dashboard / 2) dashboard 내부에서 스토리지 내의 값을 확인(state) / 3) 로그아웃 구현
function App() {
  return (
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/notes" element={
          <ProtectedRoute>
            <List />
          </ProtectedRoute>
          }/>
        <Route path="/write" element={
          <ProtectedRoute>
            <Write />
          </ProtectedRoute>
          }/>
        <Route path="/notes/:num" element={
          <ProtectedRoute>
            <View />
          </ProtectedRoute>
        }/>
        <Route path="/notes/modify/:num" element={
          <ProtectedRoute>
            <Modify />
          </ProtectedRoute>
        }/>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
  );
}

export default App;
