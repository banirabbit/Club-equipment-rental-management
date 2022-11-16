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
import { Button } from "@mui/material";
export default function FormPage(props) {
  const { setJump } = props;
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [date, setDate] = useState(dayjs());
  const [phone, setPhone] = useState();
  const [ways, setWays] = useState();
  const handleDateChange = (value) => {
    setDate(value);
  };
  const handleNameChange = (value) => {
    setName(value);
  };
  const handleIdChange = (value) => {
    setId(value);
  };
  const handlePhoneChange = (value) => {
    setPhone(value);
  };
  const handleWaysChange = (value) => {
    setWays(value);
  }
  const handleSubmit = () => {
    setJump("pay");
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
            申请表
          </Typography>
          <FormInput
            label="姓名"
            value={name}
            placeholder="请输入姓名"
            onChange={handleNameChange}
          ></FormInput>
          <FormInput
            label="学号"
            value={id}
            placeholder="请输入学号"
            onChange={handleIdChange}
          ></FormInput>
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
          <Button variant="contained" size="large" onClick={handleSubmit}>点击提交</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
