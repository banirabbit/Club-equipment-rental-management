import React from 'react'
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import NormalLogin from '../pages/LoginPage/normalLogin/NormalLogin';
import MainPage from '../pages/mainPage/UserMainPage';
import AdminMainPage from '../pages/mainPage/AdminMainPage';
import HomePage from '../pages/AuthPage/HomePage';
export default function MyRoute() {
  function Logined(props) {
    const isLogin = !!(
      localStorage.getItem("authorization") &&
      localStorage.getItem("authorization").length > 4
    );
    const { Element } = props;
    if (isLogin) {
      return <Element />;
    } else {
      return <Navigate to="/hit/login" />;
    }
  }
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/hit/login" />} />
      <Route path="/hit/">
        <Route path="login" element={<NormalLogin />} />
        <Route path="auth">
          <Route path="index" element={<HomePage />} />
          <Route path="user" element={<MainPage />} />
          <Route path="admin" element={<AdminMainPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
