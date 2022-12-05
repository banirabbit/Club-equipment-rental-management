import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header/Header";
import { Card, Grid, CardActions } from "@mui/material";
import FormInput from "../../components/FormInput/FormInput";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { createUser } from "../../actions/UserAction";
import { useDispatch } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../../components/Alert/SuccessAlert";
import FailedAlert from "../../components/Alert/FailedAlert";
export default function AddUserFormPage(props) {
  const { setJump } = props;
  const [id, setId] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [emailExitError, setEmailExitError] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [failOpen, setFailOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  useEffect(() => {
    if (id) {
      setDisabled(false);
    }
  });
  const handleSubmit = async (id) => {
    await dispatch(createUser(id));
  };

  const selector = (state) => {
    return {
      createUserResult: state.User.createUserResult,
      checkEmail: state.User.checkEmail,
    };
  };

  const { createUserResult } = useSelector(selector);

  useEffect(() => {
    let result = createUserResult;
    if (result === "true") {
      setLoading(false);
      setSuccessOpen(true);
      setEmailExitError(false);
      isClear();
    } else if (result === "EmailExit") {
      setEmailExitError(true);
      setLoading(false);
    } else if (result === "error") {
      setFailOpen(true);
    }
  }, [createUserResult]);

  const isClear = () => {
    setId("");
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
      <Header isAdmin={true}></Header>
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
            添加用户
          </Typography>
          <FormInput
            label="学号"
            value={id}
            placeholder="请输入学号"
            error={emailExitError}
            helperText="An account already exists with this email address"
            onChange={handleIdChange}
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
                handleSubmit(id);
              }}
            >
              点击提交
            </LoadingButton>
          </Box>
        </Grid>
        <SuccessAlert
          open={successOpen}
          handleClose={handleSuccessClose}
          message="Successfully create a user."
        ></SuccessAlert>
        <FailedAlert
          open={failOpen}
          handleClose={handleFailClose}
          message="Some error happened."
        ></FailedAlert>
      </Grid>
    </Box>
  );
}
