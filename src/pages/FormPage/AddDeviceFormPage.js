import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header/Header";
import { Card, Grid, CardActions } from "@mui/material";
import FormInput from "../../components/FormInput/FormInput";
import { useState } from "react";
import { Typography } from "@mui/material";
import { createDevice } from "../../actions/DeviceAction";
import { useDispatch } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { useSelector } from "react-redux";
import FormSelect from "../../components/FormSelect/FormSelect";
import { useEffect } from "react";
import SuccessAlert from "../../components/Alert/SuccessAlert";
import FailedAlert from "../../components/Alert/FailedAlert";
export default function AddDeviceFormPage(props) {
  const { setJump } = props;
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [ways, setWays] = useState();
  const [rent, setRent] = useState(0);
  const menuList = [
    {
      name: "摄影器材",
      value: "camera",
    },
    {
      name: "电子设备",
      value: "computer",
    },
    {
      name: "书刊杂志",
      value: "book",
    },
    {
      name: "实验设备",
      value: "experiment",
    },
    {
      name: "其他",
      value: "others",
    },
    {
      name: "",
      value: "",
    }
  ]
  const [successOpen, setSuccessOpen] = useState(false);
  const [failOpen, setFailOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (name && category && ways && rent) {
      setDisabled(false);
    }
  });
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  
  const handleWaysChange = (e) => {
    setWays(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }
  const handleRentChange = (e) => {
    setRent(e.target.value);
  };
  const handleSubmit = async (name, ways, category, rent) => {
    await dispatch(createDevice(name, ways, category, rent));
    setSuccessOpen(true);
    isClear();
    setDisabled(true);
  };

  const selector = (state) => {
    return {
      createDeviceResult: state.Device.createDevice,
    };
  };

  const { createDeviceResult } = useSelector(selector);

  useEffect(() => {
    let result = createDeviceResult;
    if (result === "true") {
      setLoading(false);
      setSuccessOpen(true);
      isClear();
    } else if (result === "DeviceExit") {
      setLoading(false);
      setFailOpen(true);
    } else if (result === "error") {
      setFailOpen(true);
    }
  }, [createDeviceResult]);

  const isClear = () => {
    setName("");
    setCategory("");
    setRent(0);
    setWays("");
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
            添加器材
          </Typography>
          <FormInput
            label="名称"
            value={name}
            placeholder="请输入器材名称"
            onChange={handleNameChange}
          ></FormInput>
          <FormInput
            label="备注"
            value={ways}
            placeholder="请输入备注"
            onChange={handleWaysChange}
          ></FormInput>
          <FormSelect
            label="类别"
            value={category}
            placeholder="请选择类别"
            onChange={handleCategoryChange}
            menuList={menuList}
          ></FormSelect>
          <FormInput
            label="押金"
            value={rent}
            placeholder="请输入押金"
            onChange={handleRentChange}
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
                handleSubmit(name, ways, category, rent);
              }}
            >
              点击提交
            </LoadingButton>
          </Box>
        </Grid>
        <SuccessAlert
          open={successOpen}
          handleClose={handleSuccessClose}
          message="创建成功"
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
