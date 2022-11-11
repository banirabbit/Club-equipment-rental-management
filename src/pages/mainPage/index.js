import Header from "../../components/Header/Header";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./index.css";
import { Stack } from "@mui/system";
import { Card, Grid } from "@mui/material";
import { Typography, Button } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
export default function MainPage() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ flexGrow: 1 }} container spacing={2}>
      <Header></Header>
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
              <Tab value="one" label="Item One" />
              <Tab value="two" label="Item Two" />
              <Tab value="three" label="Item Three" />
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
      </Grid>
    </Box>
  );
}
