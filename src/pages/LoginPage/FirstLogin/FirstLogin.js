import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card, Grid, CardActions } from "@mui/material";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../../../components/Alert/SuccessAlert";
import FailedAlert from "../../../components/Alert/FailedAlert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Icon } from "@mui/material";
import { IconButton } from "@mui/material";
import { getUserInfo } from "../../../actions/UserAction";
import { resetPassFirstTime, login, clear } from "../../../actions/LoginAction";
export default function FirstLogin() {
  const [password, setPassword] = useState("");
  const [cfmPassword, setCfmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCfmPassword, setShowCfmPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [failOpen, setFailOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = (state) => {
    return {
      resetPass: state.Login.resetPass,
      userId: state.User.userId,
      userName: state.Login.account,
    };
  };
  const { resetPass, userId, userName } = useSelector(selector);
  useEffect(() => {
    if (password && cfmPassword) {
      setDisabled(false);
    }
  });
  const handleSubmit = async () => {
    if(!alert) {
      await dispatch(resetPassFirstTime(userId, password));
    }
  };
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);
  useEffect(() => {
    if (resetPass === true) {
      async function loginFunction() {
        await dispatch(
          login({
            username: userName,
            password: password,
            remember_me: "off",
          })
        );
      }
      loginFunction().then((_r) => {
        let auth = localStorage.getItem("authorization");
        localStorage.setItem("tempauth", auth);
        navigate("/hit/auth/index");
      });
      return () => {};
    } else if (resetPass != "Email Exit" && resetPass != null) {
      handleReset();
      return () => {
        dispatch(clear());
      };
    }
  }, [resetPass]);

  const handleReset = () => {
    if (resetPass) {
      let auth = localStorage.getItem("authorization");
      localStorage.setItem("tempauth", auth);
      navigate("/hit/auth/index");
    }
  };

  useEffect(() => {
    if (password === cfmPassword) {
      setAlert(false);
    } else {
      if (cfmPassword !== "") {
        setAlert(true);
      }
    }
    handleIsDisabled();
  }, [password, cfmPassword]);

  const handleIsDisabled = () => {
    if (password !== "" && cfmPassword !== "" && alert) {
      setDisabled(false);
    } else {
      setDisabled(true);
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
    <Box sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid
        textAlign="center"
        item
        xs={12}
        direction="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        marginTop="25px"
      >
        <Grid
          backgroundColor="#fff"
          xs={12}
          direction="column"
          justifyContent="center"
          alignItems="center"
          margin="0 80px 0"
          padding="30px"
        >
          <Typography
            fontSize="20px"
            lineHeight="25px"
            color="#000"
            fontWeight="400"
          >
            修改密码
          </Typography>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "45ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              // data-testid="newPassword"
              inputProps={{ "data-testid": "newPassword" }}
              id="PasswordInput1"
              label="新密码"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                if (e.target.value.length <= 32) {
                  setPassword(e.target.value);
                }
              }}
            ></TextField>
            <IconButton
              data-testid="icon1"
              id="icon1"
              name="showPassword"
              aria-label="toggle password visibility"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              <Icon>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </Icon>
            </IconButton>
          </Box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "45ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="PasswordInput2"
              label="确认密码"
              variant="outlined"
              type={showCfmPassword ? "text" : "password"}
              value={cfmPassword}
              onChange={(e) => {
                if (e.target.value.length <= 32) {
                  setCfmPassword(e.target.value);
                }
              }}
            ></TextField>
            <IconButton
              data-testid="icon2"
              id="icon2"
              name="showConfirmPassword"
              aria-label="toggle password visibility"
              onClick={() => {
                setShowCfmPassword(!showCfmPassword);
              }}
            >
              <Icon>
                {showCfmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </Icon>
            </IconButton>
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
              onClick={() => {
                handleSubmit();
              }}
            >
              点击提交
            </LoadingButton>
          </Box>
        </Grid>
        <SuccessAlert
          open={successOpen}
          handleClose={handleSuccessClose}
          message="修改成功"
        ></SuccessAlert>
        <FailedAlert
          open={alert}
          handleClose={handleFailClose}
          message="密码不一致"
        ></FailedAlert>
      </Grid>
    </Box>
  );
}
