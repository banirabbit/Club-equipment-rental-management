import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header/Header";
import { Card, Grid, CardActions } from "@mui/material";
import FormInput from "../../components/FormInput/FormInput";
import { useState } from "react";
import { Typography } from "@mui/material";
import FormDatePicker from "../../components/FormDatePicker/FormDatePicker";
import dayjs from "dayjs";
import FormSelect from "../../components/FormSelect/FormSelect";
import { Button } from "@mui/material";
export default function AddDeviceFormPage(props) {
  const { setJump } = props;
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [ways, setWays] = useState();
  const [rent, setRent] = useState(0);
  const menuList = ["1", "2", "3", "4"]
  const handleNameChange = (value) => {
    setName(value);
  };
  
  const handleWaysChange = (value) => {
    setWays(value);
  };
  const handleCategoryChange = (value) => {
    setCategory(value);
  }
  const handleRentChange = (value) => {
    setRent(value);
  };
  const handleSubmit = () => {
    console.log("success");
  }
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
          <Button variant="contained" size="large" onClick={handleSubmit}>
            点击提交
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
