import React, { useEffect } from "react";
import LoginContainer from "../../../components/LoginContainer";
import { Box, Card, Typography, Button, InputAdornment } from "@mui/material";
import Background from "../../../assets/loginBodyBcground.jpeg";
import LoginNameInput from "../../../components/LoginNameInput";
import LoginPasswdInput from "../../../components/LoginPasswdInput";
import { useState } from "react";
import LoginButton from "../../../components/LoginButton";
import { login } from "../../../actions/LoginAction";
import { LoadingButton } from "@mui/lab";
import { spacing } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./body.css";
import { Grid, Backdrop } from "@mui/material";
import { loginFailedClear } from "../../../actions/LoginAction";
import SuccessAlert from "../../../components/Alert/SuccessAlert";
import FailedAlert from "../../../components/Alert/FailedAlert";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

export default function NormalLogin() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [failOpen, setFailOpen] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = (state) => {
    return {
      errMsg: state.Login.errorMsg,
      isAuthenticated: state.Login.isAuthenticated,
      firstLogin: state.Login.ifFirst,
    };
  };
  const { errMsg, isAuthenticated, firstLogin } = useSelector(selector);
  const bcgStyle = {
    position: "relative",
    width: "100%",
    height: "723px",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
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
  useEffect(() => {
    handleLogin();
    return () => {
      dispatch(loginFailedClear());
    };
  }, [isAuthenticated]);
  useEffect(() => {
    if (name && password) {
      setDisabled(false);
    }
  });

  const handleLogin = () => {
    if (isAuthenticated) {
      console.log(firstLogin);
      if (firstLogin) {
        navigate("/hit/firstLogin");
      } else {
        navigate("/hit/auth/index");
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && password) {
      var remember_flag = rememberMe ? "on" : "off";
      setLoading(true);
      await dispatch(
        login({
          username: name,
          password: password,
          remember_me: remember_flag,
        })
      );
      setLoading(false);
    }
    if (errMsg !== null) {
      setFailOpen(true);
    }
  };

  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccessOpen(false);
  };

  const handleFailClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setFailOpen(false);
  };
  return (
    <Box style={bcgStyle}>
      <Box
        sx={{
          position: "absolute",
          top: "200px",
          left: "270px",
        }}
      >
        <Typography
          fontSize="50px"
          lineHeight="55px"
          color="#fff"
          fontWeight="600"
        >
          Lease
        </Typography>
        <Typography
          fontSize="50px"
          lineHeight="55px"
          color="#fff"
          fontWeight="600"
        >
          办公用品租赁平台
        </Typography>
      </Box>
      <Card style={outContainerStyle}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
                onChange={(e) => {
                  if (e.target.value.length <= 100) {
                    setName(e.target.value);
                  }
                }}
              ></LoginNameInput>
            </Box>
            <Box>
              <LoginPasswdInput
                id="login-name-input"
                label="密码"
                placeholder="请输入密码"
                value={password}
                type={showPassword ? "text" : "password"}
                position="absolute"
                onChange={(e) => {
                  var value = e.target.value;
                  var strlist = value.split(" ");
                  value = "";
                  for (var key in strlist) {
                    value = value + strlist[key];
                  }
                  if (value.length <= 32) {
                    setPassword(value);
                  }
                }}
                showPassword={showPassword}
                setShowPassword={setShowPassword}               
              ></LoginPasswdInput>
            </Box>
            <Box display="flex" width="100%" justifyContent="center" mb={1}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      onClick={() => {
                        setRememberMe(!rememberMe);
                      }}
                    />
                  }
                  label="Remember me"
                />
              </FormGroup>
            </Box>
            <Box display="flex" width="100%" justifyContent="center" mb={1}>
              <LoadingButton
                id="basicLoginPageLoginLoadingButton"
                disabled={disabled}
                loading={loading}
                variant="contained"
                color="lightBlue"
                size="large"
                sx={{
                  color: "#FFFFFF",
                }}
                type={"submit"}
              >
                登录
              </LoadingButton>
            </Box>
          </Box>
        </form>
      </Card>
      <SuccessAlert
        open={successOpen}
        handleClose={handleSuccessClose}
        message="提交成功"
      ></SuccessAlert>
      <FailedAlert
        open={failOpen}
        handleClose={handleFailClose}
        message={errMsg}
      ></FailedAlert>
    </Box>
  );
}
