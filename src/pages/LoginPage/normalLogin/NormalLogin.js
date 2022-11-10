import React from "react";
import LoginContainer from "../../../components/LoginContainer";
import { Box, Card, Typography, Button } from "@mui/material";
import Background from "../../../assets/loginBodyBcground.jpeg";
import LoginNameInput from "../../../components/LoginNameInput";
import LoginPasswdInput from "../../../components/LoginPasswdInput";
import { useState } from "react";
import LoginButton from "../../../components/LoginButton";
import { spacing } from "@mui/system";
export default function NormalLogin() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const bcgStyle = {
    position: "relative",
    width: "100%",
    height: "723px",
    backgroundImage: `url(${Background})`,
  };
  const outContainerStyle = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "85px",
    right: "185px",
    width: 505,
    height: 560,
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "2px 2px 10px rgb(21, 28, 112)",
    textAlign: "center",
  };
  return (
    <Box style={bcgStyle}>
      <Box sx={{
        position: "absolute",
        top: "200px",
        left: "270px",
      }}>
        <Typography fontSize="50px" lineHeight="55px" color="#fff" fontWeight="600">
          Lease
        </Typography>
        <Typography fontSize="50px" lineHeight="55px" color="#fff" fontWeight="600">
          办公用品租赁平台
        </Typography>
      </Box>
      <Card style={outContainerStyle}>
        <Box mt="20px">
          <div>
            <Typography fontSize="34px" lineHeight="110px">
              密码登录
            </Typography>
          </div>
          <Box mb={1}>
            <LoginNameInput
              id="login-name-input"
              label="账号"
              placeholder="请输入账号"
              value={name}
              onchange={(value) => setName(value)}
            ></LoginNameInput>
          </Box>
          <div>
            <LoginPasswdInput
              id="login-name-input"
              label="密码"
              placeholder="请输入密码"
              value={password}
              onchange={(value) => setPassword(value)}
            ></LoginPasswdInput>
          </div>

          <LoginButton></LoginButton>
          <Box sx={{ "& button": { m: 1 } }} spacing={2}>
            <Button href="#">注册账号</Button>
            <Button href="#">找回密码</Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
