import React from "react";
import Box from "@mui/material/Box";
import Header from "../../components/Header/Header";
import { Card, Grid, CardActions, Button } from "@mui/material";

import { Typography } from "@mui/material";

export default function PaymentPage(props) {
  const { rent, setJump } = props;
  const handleSubmit = () => {
    setJump("default");
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
            租金：{rent} 元
          </Typography>
          <Button variant="contained" size="large" onclick={handleSubmit}>点击支付</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
