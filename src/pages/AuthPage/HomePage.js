import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "../../utils/authTokenHandler";

export default function HomePage() {
  // /simt/auth/index 中引入。根据用户不同的权限进行分流，到达各自的首页。
  // if(localStorage.getItem("authorization") === null) {
  //   return <Navigate to="/hit/login" />
  // }
  
  const auth = getAuth(localStorage.getItem("authorization"));
  useEffect(()=>{
    console.log(auth, "111111");
  })
  //return <div>123</div>
  switch (auth) {
    case "admin:read":
      return <Navigate to="/hit/auth/admin" />;
    case "user:read":
      return <Navigate to="/hit/auth/user" />;
    default:
      return <div>123</div>;
  }
}