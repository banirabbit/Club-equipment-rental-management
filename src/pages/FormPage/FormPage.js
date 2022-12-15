import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header/Header";
import { Card, Grid, CardActions, IconButton } from "@mui/material";
import FormInput from "../../components/FormInput/FormInput";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import FormDatePicker from "../../components/FormDatePicker/FormDatePicker";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../../components/Alert/SuccessAlert";
import FailedAlert from "../../components/Alert/FailedAlert";
import { handleApply } from "../../actions/DeviceAction";
import { Backdrop } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { getUserInfo } from "../../actions/UserAction";
export default function FormPage(props) {
  const { open, setOpen, setRefresh, id, status } = props;
  const [date, setDate] = useState(dayjs().add(1, 'day'));
  const [phone, setPhone] = useState();
  const [ways, setWays] = useState();
  const [successOpen, setSuccessOpen] = useState(false);
  const [failOpen, setFailOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const selector = (state) => {
    return {
      userName: state.User.userName,
      applyPass: state.Device.applyPass,
      account: state.Login.account,
    };
  };
  const { userName, applyPass, account } = useSelector(selector);
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);
  const handleDateChange = (value) => {
    setDate(value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleWaysChange = (e) => {
    setWays(e.target.value);
  };
  const handleSubmit = async () => {
    await dispatch(handleApply(id, account, date, userName, phone, ways));
    setSuccessOpen(true);
    isClear();
    setDisabled(true);
    setOpen(false);
    setRefresh(true)
  };

  useEffect(() => {
    let result = applyPass;
    if (result === "true") {
      setLoading(false);
      setSuccessOpen(true);
      setDisabled(true);
      setOpen(false);
      isClear();
    } else if (result === "器材已被租借") {
      setFailOpen(true);
    } else if(result === "error") {
      setFailOpen(true);
    }
  }, [applyPass]);
  useEffect(() => {
    if (date && phone && ways && status !== "0") {
      setDisabled(false);
    }
  });

  const handleClose = () => {
    setOpen(false);
    isClear();
  };
  const isClear = () => {
    setPhone("");
    setWays("");
    setDate(dayjs().add(1, 'day'));
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
    <Box sx={{ flexGrow: 1 }} container spacing={2} textAlign="center">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Card>
          <IconButton
            sx={{
              position: "relative",
              left: "45%",
            }}
            onClick={() => {
              handleClose();
            }}
          >
            <HighlightOffIcon></HighlightOffIcon>
          </IconButton>
          <Typography
            fontSize="20px"
            lineHeight="25px"
            color="#000"
            fontWeight="400"
          >
            申请表
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
              disabled
              id="outlined-disabled"
              label="姓名"
              defaultValue={userName}
            />
          </Box>
          <FormDatePicker
            label="归还日期"
            value={date}
            onChange={handleDateChange}
            minDate={dayjs()}
            maxDate={dayjs().add(30, "day")}
          ></FormDatePicker>
          <FormInput
            label="手机号"
            value={phone}
            placeholder="请输入手机号"
            onChange={handlePhoneChange}
          ></FormInput>
          <FormInput
            label="用途"
            value={ways}
            placeholder="请输入用途"
            onChange={handleWaysChange}
          ></FormInput>
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
        </Card>
      </Backdrop>
      <SuccessAlert
        open={successOpen}
        handleClose={handleSuccessClose}
        message="租借成功"
      ></SuccessAlert>
      <FailedAlert
        open={failOpen}
        handleClose={handleFailClose}
        message="Some error happened."
      ></FailedAlert>
    </Box>
  );
}
