import Header from "../../../components/Header/Header";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./index.css";
import { TabContext } from "@mui/lab";
import { Card, Grid } from "@mui/material";
import { TabList, TabPanel } from "@mui/lab";
import UserOverview from "./UserOverview";
import MenuUnstyled from "@mui/base/MenuUnstyled";
import MenuItemUnstyled, {
  menuItemUnstyledClasses,
} from "@mui/base/MenuItemUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled, alpha } from "@mui/material/styles";
import ViewUserDevice from "./ViewUserDevice";
import HelpPage from "../HelpPage/HelpPage";

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

export default function UserMainPage() {
  const [value, setValue] = React.useState("1");

  const StyledListbox = styled("ul")(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    box-shadow: 0px 4px 30px ${
      theme.palette.mode === "dark" ? grey[900] : grey[200]
    };
    `
  );
  const Popper = styled(PopperUnstyled)`
    z-index: 1;
  `;

  const StyledMenuItem = styled(MenuItemUnstyled)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
    user-select: none;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${menuItemUnstyledClasses.focusVisible} {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
      background-color: ${
        theme.palette.mode === "dark" ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
  
    &.${menuItemUnstyledClasses.disabled} {
      color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${menuItemUnstyledClasses.disabled}) {
      background-color: ${
        theme.palette.mode === "dark" ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
    `
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpen = Boolean(anchorEl);
  const menuActions = React.useRef(null);
  const preventReopen = React.useRef(false);
  const [type, setType] = React.useState("");
  const [search, setSearch] = React.useState("");
  const handleCreatePageOpen = (event) => {
    if (preventReopen.current) {
      event.preventDefault();
      preventReopen.current = false;
      return;
    }

    if (isOpen) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const close = () => {
    setAnchorEl(null);
  };

  const createHandleMenuClick = (menuItem) => {
    if (menuItem === "camera") {
      setType("camera");
    }
    if (menuItem === "experiment") {
      setType("experiment");
    }
    if (menuItem === "book") {
      setType("book");
    }
    if (menuItem === "computer") {
      setType("computer");
    }
    if (menuItem === "others") {
      setType("others");
    }
    setValue("1");
    close();
  };

  const handleChange = (event, newValue) => {
    if (newValue === "2") {
      console.log(newValue, "4444444")
      handleCreatePageOpen(event);
    } else {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }} container spacing={2}>
      <Header isAdmin={false} search={search} setSearch={setSearch} type={type}></Header>
      <Grid
        item
        xs={12}
        direction="column"
        justifyContent="center"
        width="100%"
      >
        <Grid
          container
          xs={12}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box width="100%">
            <Box
              id="logo"
              sx={{
                position: "relative",
                left: "6.25%",
              }}
            >
              <h1>Lease</h1>
              <span>办公器材租赁平台</span>
            </Box>
            <TabContext value={value}>
              <Box display="inline-block" position="relative" left="53%">
                <TabList
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example"
                >
                  <Tab value="1" label="主页" />
                  <Tab value="2" label="分类" />
                  <Tab value="3" label="帮助" />
                  <Tab value="4" label="租借记录" />
                </TabList>
              </Box>
              <MenuUnstyled
                actions={menuActions}
                open={isOpen}
                onClose={close}
                anchorEl={anchorEl}
                slots={{ root: Popper, listbox: StyledListbox }}
                slotProps={{ listbox: { id: "simple-menu" } }}
              >
                <StyledMenuItem
                  onClick={() => {
                    createHandleMenuClick("camera");
                  }}
                >
                  摄影器材
                </StyledMenuItem>
                <StyledMenuItem
                  onClick={() => {
                    createHandleMenuClick("experiment");
                  }}
                >
                  实验设备
                </StyledMenuItem>
                <StyledMenuItem
                  onClick={() => {
                    createHandleMenuClick("book");
                  }}
                >
                  书刊杂志
                </StyledMenuItem>
                <StyledMenuItem
                  onClick={() => {
                    createHandleMenuClick("computer");
                  }}
                >
                  电子设备
                </StyledMenuItem>
                <StyledMenuItem
                  onClick={() => {
                    createHandleMenuClick("others");
                  }}
                >
                  其他
                </StyledMenuItem>
              </MenuUnstyled>
              <TabPanel value="1" overFlow="hidden">
                <UserOverview type={type} setType={setType} search={search}></UserOverview>
              </TabPanel>
              <TabPanel value="2"></TabPanel>
              <TabPanel value="3">  
              <HelpPage></HelpPage>   
              </TabPanel>
              <TabPanel value="4">
                <ViewUserDevice></ViewUserDevice>
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
