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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../../actions/UserAction";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import FaceIcon from "@mui/icons-material/Face";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import logo from "../../../assets/logo.svg"
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
  const logoImage = logo;
  const [search, setSearch] = React.useState("");
  const selector = (state) => {
    return {
      userName: state.User.userName,
      account: state.Login.account,
      userRole: state.User.userRole,
      borrowed: state.User.borrowed,
      userLimited: state.User.userLimited,
      userImage: state.User.userImage,
    };
  };
  const { userName, account, userRole, borrowed, userLimited, userImage } =
    useSelector(selector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const getUserRole = () => {
    if (Number(userRole) === 2) {
      return "普通用户";
    } else if (Number(userRole) === 1) {
      return "管理员";
    } else {
      return "游客";
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }} container spacing={2} id="body">
      <Header isAdmin={false} search={search} setSearch={setSearch}></Header>
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
              width: 80,
              height: 80,
              fontSize: "30px",
            }}
            src={logoImage}
          >
            
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
            <Grid container padding="40px">
              <Grid item xs>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FaceIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="姓名" secondary={userName} />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FaceIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="学号" secondary={account} />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="限权" secondary={getUserRole()} />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <CatchingPokemonIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="租借个数" secondary={borrowed} />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <AutoStoriesIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="租借上限" secondary={userLimited} />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <Brightness7Icon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="个人简介" secondary={userImage} />
                  </ListItem>
                </List>
              </Grid>

              <Divider orientation="vertical" flexItem>
                个人信息
              </Divider>
              <Grid padding="45px 150px 50px 180px">
                <Avatar
                  sx={{
                    width: 350,
                    height: 350,
                    fontSize: "30px",
                  }}
                  src={image}
                >
                  
                </Avatar>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
