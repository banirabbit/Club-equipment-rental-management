import React, { useEffect } from 'react'
import FormPage from './FormPage';
import PaymentPage from './PaymentPage';
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Box } from '@mui/system';
export default function FormMainPage() {
  const [jump, setJump] = useState("form");
  const { userRole } = useSelector((state) => {
    return {
      userRole: state.User.userRole,
    };
  });
  useEffect(() => {
    console.log(userRole, jump);
  })
  const container = async (jump) => {   
    switch (jump){
        case "form":
            return (<FormPage setJump={setJump} />);
        case "pay":
            return (<PaymentPage setJump={setJump} />)
        default:
            await handleSubmit()
    }

  }
  const handleSubmit = () => {
    console.log("1");
  }
  return (
    <Box>
      {container(jump)}
    </Box>
  )
}
