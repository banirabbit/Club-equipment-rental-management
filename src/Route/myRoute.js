import React from 'react'
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import NormalLogin from '../pages/LoginPage/normalLogin/NormalLogin';
import MainPage from '../pages/mainPage';
export default function MyRoute() {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<NormalLogin />} />
    </Routes>
  )
}
