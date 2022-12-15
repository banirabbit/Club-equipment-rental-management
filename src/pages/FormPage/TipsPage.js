import React from "react";
import Box from "@mui/material/Box";
import { Card, Grid, CardActions, IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { Backdrop } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
export default function TipsPage(props) {
  const { open, setOpen, handleClose } = props;

  return (
    <Box sx={{ flexGrow: 1 }} container spacing={2} textAlign="center">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Card >
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
          <Box padding="0 20px 40px 20px">
            <Typography
              fontSize="30px"
              lineHeight="25px"
              color="#000"
              fontWeight="400"
              marginBottom="30px"
            >
              <ReportGmailerrorredIcon></ReportGmailerrorredIcon>
              温馨提示
            </Typography>
            <Typography fontSize="20px">
              您的租借数目已达上限，无法继续操作，请及时归还租借的物品。
            </Typography>
          </Box>
        </Card>
      </Backdrop>
    </Box>
  );
}
