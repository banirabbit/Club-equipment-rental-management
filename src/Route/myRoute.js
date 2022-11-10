import React from 'react'
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import loginPage from '../pages/LoginPage/login';
export default function myRoute() {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="" />} />
      <Route path="">
      <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}
