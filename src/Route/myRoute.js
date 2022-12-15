import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import NormalLogin from "../pages/LoginPage/normalLogin/NormalLogin";
import MainPage from "../pages/mainPage/UserMainPage";
import AdminMainPage from "../pages/mainPage/AdminMainPage";
import HomePage from "../pages/AuthPage/HomePage";
import FormPage from "../pages/FormPage/FormPage";
import FormMainPage from "../pages/FormPage";
import AddDeviceFormPage from "../pages/FormPage/AddDeviceFormPage";
import AddUserFormPage from "../pages/FormPage/AddUserFormPage";
import UserHomePage from "../pages/UserPage";
import AdminDetailPage from "../pages/UserPage/AdminDetailPage";
import UserDetailPage from "../pages/UserPage/UserDetailPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import FirstLogin from "../pages/LoginPage/FirstLogin/FirstLogin";
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
        <Route path="firstLogin" element={<FirstLogin />} />
        <Route path="detail">
          <Route path="index" element={<UserHomePage />} />
          <Route path="admin" element={<AdminDetailPage />} />
          <Route path="user" element={<UserDetailPage />} />
        </Route>
        <Route path="auth" element={<Logined Element={Outlet} />}>
          <Route path="index" element={<HomePage />} />
          <Route path="user" element={<MainPage />} />
          <Route path="admin" element={<AdminMainPage />} />
          <Route path="admin/createdevice" element={<AddDeviceFormPage />} />
          <Route path="admin/createuser" element={<AddUserFormPage />} />
          
        </Route>
      </Route>
    </Routes>
  );
}
