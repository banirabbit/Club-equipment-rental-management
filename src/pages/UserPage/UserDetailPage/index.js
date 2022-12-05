import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import Header from "../../../components/Header/Header";
import { Box } from "@mui/system";
import { Card } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import "./index.css";
import { useSelector } from "react-redux";
import ImageUrl from "../../../assets/file.jpeg";
import { Button } from "@mui/material";
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
export default function UserDetailPage() {
  const image = ImageUrl;
  const selector = (state) => {
    return {
      userName: state.User.userId,
      account: state.Login.account,
    };
  };
  const { userName, account } = useSelector(selector);

  return (
    <Box sx={{ flexGrow: 1 }} container spacing={2} id="body">
      <Header isAdmin={false}></Header>
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
        <Stack
          textAlign="center"
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          marginTop="100px"
        >
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
              width: 80,
              height: 80,
              fontSize: "30px",
            }}
          >
            U
          </Avatar>
          <Typography color="#fff" marginTop="20px" fontSize="30px">
            {account}
          </Typography>
        </Stack>
        <Grid
          xs={12}
          direction="column"
          alignItems="center"
          margin="0 80px 0"
          padding="30px"
        >
          <Card>
            <Grid justifyContent="left" direction="row">
              <Grid justifyContent="left" direction="column">
                <Typography margin="20px" display="inline-block">
                  基础资料
                </Typography>
                <Box margin="10px" padding="0 30%" textAlign="left">
                  <Typography display="inline-block">姓名：</Typography>
                  <Box display="inline-block" marginLeft="60%">
                    <Typography>{userName}</Typography>
                  </Box>
                </Box>
                <Box margin="10px" padding="0 30%" textAlign="left">
                  <Typography display="inline-block">性别：</Typography>
                  <Box display="inline-block" marginLeft="60%">
                    <Typography display="inline-block">女</Typography>
                  </Box>
                </Box>
                <Box margin="10px" padding="0 30%" textAlign="left">
                  <Typography display="inline-block">学号：</Typography>
                  <Box display="inline-block" marginLeft="60%">
                    <Typography display="inline-block">{account}</Typography>
                  </Box>
                </Box>
                <Box margin="10px" padding="0 30%" textAlign="left">
                  <Typography display="inline-block">邮箱：</Typography>
                  <Box display="inline-block" marginLeft="60%">
                    <Typography display="inline-block">
                      123456@qq.com
                    </Typography>
                  </Box>
                </Box>
                <Box
                  margin="10px 10px 50px 10px"
                  padding="0 30%"
                  textAlign="left"
                >
                  <Typography display="inline-block">个性签名：</Typography>
                </Box>
                <Button variant="text">编辑资料</Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
