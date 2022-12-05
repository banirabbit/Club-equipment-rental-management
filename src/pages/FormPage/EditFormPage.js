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
import FormMultilineInput from "../../components/FormMultilineInput/FormMultilineInput";
export default function EditFormPage(props) {
  const {
    open,
    setOpen,
    note,
    setNote,
    title, 
    setTitle, 
    editType,
    setEditType,
    rent,
    setRent,
    setRefresh,
    handleEditClose,
    id,
    status,
  } = props;
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
  
  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleRentChange = (e) => {
    setRent(e.target.value);
  };
  const handleSubmit = async () => {
    console.log("1");
  };

  useEffect(() => {
    let result = applyPass;
    if (result === "true") {
      setLoading(false);
      setSuccessOpen(true);
      setDisabled(true);
      setOpen(false);
      
    } else if (result === "器材已被租借") {
      setFailOpen(true);
    }
  }, [applyPass]);
  useEffect(() => {
    if (note && title && editType && rent) {
      setDisabled(false);
    }
  });

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
              handleEditClose();
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
            编辑信息
          </Typography>
          {/* <Box
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
          </Box> */}
          <FormInput
            label="名称"
            value={title}
            placeholder="请输入名称"
            onChange={handleTitleChange}
          ></FormInput>
          <FormInput
            label="租金"
            value={rent}
            placeholder="请输入租金"
            onChange={handleRentChange}
          ></FormInput>
          <FormMultilineInput
            label="备注"
            value={note}
            placeholder="请输入备注"
            onChange={handleNoteChange}
          ></FormMultilineInput>
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
        message="提交成功"
      ></SuccessAlert>
      <FailedAlert
        open={failOpen}
        handleClose={handleFailClose}
        message="Some error happened."
      ></FailedAlert>
    </Box>
  );
}
