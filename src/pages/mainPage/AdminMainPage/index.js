import Header from "../../../components/Header/Header";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./index.css";

import { Card, Grid } from "@mui/material";
import { Typography, Button } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CardEntity from "../../../components/CardEntity/CardEntity";
import { makeStyles } from "@mui/styles";
import { Navigate, useNavigate } from "react-router-dom";
export default function AdminMainPage() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const equipList = [
    {
      type: "camera",
      rent: "50",
      title: "Sony/索尼 ZV-E10 ZV-E10Lvlog微单相机",
      note: "设备贵重需要轻拿轻放，电池用的很快需要多备几块，用完尽量第一时间归还，如果故障请联系我。",
      state: "Yes",
    },
    {
      type: "book",
      rent: "0",
      title: "计算机网络自顶向下方法",
      note: "设备贵重需要轻拿轻放，电池用的很快需要多备几块，用完尽量第一时间归还，如果故障请联系我。",
      state: "Yes",
    },
    {
      type: "computer",
      rent: "20",
      title: "联想(Lenovo)天逸510S英特尔酷睿i5个人商务台式机电脑整机",
      note: "设备贵重需要轻拿轻放，电池用的很快需要多备几块，用完尽量第一时间归还，如果故障请联系我。",
      state: "No",
    },
    {
      type: "experiment",
      rent: "100",
      title: "earcum组合逻辑电路编码译码显示套件",
      note: "设备贵重需要轻拿轻放，电池用的很快需要多备几块，用完尽量第一时间归还，如果故障请联系我。",
      state: "Yes",
    },
    {
      type: "",
      rent: "10",
      title: "家用工具箱套装五金工具套装多功能家庭电工木工电讯维修工具",
      note: "设备贵重需要轻拿轻放，电池用的很快需要多备几块，用完尽量第一时间归还，如果故障请联系我。",
      state: "Yes",
    },
  ];

  const useStyles = makeStyles((theme) => ({
    // inspired by the settings https://www.youtube.com/gaming uses ;)
    gameEntry: {
      // 2 items on [0, sm]
      [theme.breakpoints.only("xs")]: {
        "flex-basis": "calc((100% / 2) - 1%)",
      },
      // 4 items on [sm, md[
      [theme.breakpoints.only("sm")]: {
        "flex-basis": "calc((100% / 4) - 1%)",
      },
      // 8 items on [md, infinity]
      [theme.breakpoints.up("md")]: {
        "flex-basis": "calc((100% / 8) - 1%)",
      },
    },
  }));
  const Navigate = useNavigate();
  const handleRent = () => {
    Navigate("/hit/auth/admin/form");
  };

  return (
    <Box sx={{ flexGrow: 1 }} container spacing={2}>
      <Header isAdmin={true}></Header>
      <Grid
        item
        xs={12}
        direction="column"
        justifyContent="center"
        width="100%"
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box id="logo" sx={{ marginRight: "520px" }}>
            <h1>Lease</h1>
            <span>办公器材租赁平台</span>
          </Box>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab value="one" label="分类" />
              <Tab value="two" label="帮助" />
              <Tab value="three" label="租借记录" />
            </Tabs>
          </Box>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            id="banner"
            sx={{
              width: "1120px",
              height: "300px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box display="inline-block">
              <Typography
                fontSize="50px"
                lineHeight="55px"
                color="#000"
                fontWeight="600"
              >
                您好，这里是LEASE
              </Typography>
              <Typography
                fontSize="40px"
                lineHeight="55px"
                color="#000"
                fontWeight="400"
              >
                一个免费的高自由度的办公器材租赁平台。
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
              <Box sx={{ "& button": { m: 2 } }}>
                <Button
                  variant="contained"
                  size="large"
                  marginBottom="30px"
                  endIcon={<ArrowCircleRightIcon />}
                >
                  OK, let's go
                </Button>
              </Box>
              <Box sx={{ "& button": { m: 2 } }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<HelpOutlineIcon />}
                >
                  More Info
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid
          container
          marginTop="40px"
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{
            rowGap: "25px",
          }}
          spacing={1}
        >
          {equipList.map((equip) => (
            <Grid className={useStyles.gameEntry} width="350px" height="360px">
              <CardEntity
                equip={equip}
                height="100%"
                isAdmin={true}
                handleRent={handleRent}
              ></CardEntity>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
