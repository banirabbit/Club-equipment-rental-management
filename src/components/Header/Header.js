import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuUnstyled from "@mui/base/MenuUnstyled";
import MenuItemUnstyled, {
  menuItemUnstyledClasses,
} from "@mui/base/MenuItemUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { SearchField } from "../SearchField/SearchField";
import { getDeviceList, setSearchDevice } from "../../actions/DeviceAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { InputAdornment } from "@mui/material";
import { unstable_batchedUpdates } from "react-dom";
import { logout } from "../../actions/LoginAction";
import { withStyles } from '@material-ui/core/styles';
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



export default function Header(props) {
  const { isAdmin, search, setSearch } = props;
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
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const isOpen = Boolean(anchorEl);
  const isUserOpen = Boolean(anchorElUser);
  const menuActions = React.useRef(null);
  const menuActionsUser = React.useRef(null);
  const preventReopen = React.useRef(false);
  const preventUserReopen = React.useRef(false);
  const dispatch = useDispatch();
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
  const handleUserPageOpen = (event) => {
    if (preventUserReopen.current) {
      event.preventDefault();
      preventUserReopen.current = false;
      return;
    }

    if (isUserOpen) {
      setAnchorElUser(null);
    } else {
      setAnchorElUser(event.currentTarget);
    }
  };
  const close = () => {
    setAnchorEl(null);
  };
  const closeUser = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  const [deviceOpen, setDeviceOpen] = React.useState(false);
  const [userOpen, setUserOpen] = React.useState(false);
  const [loginOutOpen, setLoginOutOpen] = React.useState(false);
  const [profile, setProfile] = React.useState(false);

  React.useEffect(() => {
    if (deviceOpen == true && userOpen == false) {
      navigate("/hit/auth/admin/createdevice");
    } else if (deviceOpen == false && userOpen == true) {
      navigate("/hit/auth/admin/createuser");
    }

    if (loginOutOpen == true && profile == false) {
      dispatch(logout());
      navigate("/hit/login");
    } else if (loginOutOpen == false && profile == true) {
      handleUserPage();
    }
  });
  const createHandleMenuClick = (menuItem) => {
    if (menuItem === "device") {
      setDeviceOpen(true);
      setUserOpen(false);
    }
    if (menuItem === "user") {
      setDeviceOpen(false);
      setUserOpen(true);
    }

    close();
  };
  const createUserHandleMenuClick = (menuItem) => {
    if (menuItem === "logout") {
      setLoginOutOpen(true);
      setProfile(false);
    }
    if (menuItem === "profile") {
      setLoginOutOpen(false);
      setProfile(true);
    }
    closeUser();
  };
  const menuId = "primary-search-account-menu";
  const handleUserPage = () => {
    navigate("/hit/detail/index");
  };

  const handleSearch = (e) => {
    setSearch(e);
  };

  return (
    <Box sx={{ flexGrow: 1 }} width="100%">
      <AppBar position="static" color="Shortcut" width="100%">
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/hit/auth/index"
            color="#fff"
            fontFamily="'Oleo Script', serif"
            fontSize="50px"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
            }}
          >
            Lease
          </Typography>
          
          <SearchField
            id="SearchInput"
            placeholder="Search..."
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            value={search}
            delay={300}
            defaultValue={search}
            handleSearch={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" >
                  <SearchIcon color="white" />
                </InputAdornment>
              ),
              style: {
                fontSize: "15px",
                fontWeight: "600",
                color: "#fff",
              },
              
            }}
            sx={{ background: "Shortcut", }}
            inputProps={{ "aria-label": "search" }}
          ></SearchField>
          
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            color="white"
            onClick={handleUserPageOpen}
          >
            <AccountCircle />
          </IconButton>
          <MenuUnstyled
            actions={menuActionsUser}
            open={isUserOpen}
            onClose={closeUser}
            anchorEl={anchorElUser}
            slots={{ root: Popper, listbox: StyledListbox }}
            slotProps={{ listbox: { id: "simple-menu" } }}
          >
            <StyledMenuItem
              onClick={() => {
                createUserHandleMenuClick("logout");
              }}
            >
              退出登录
            </StyledMenuItem>
            {!isAdmin ? (
              <StyledMenuItem
                onClick={() => {
                  createUserHandleMenuClick("profile");
                }}
              >
                个人主页
              </StyledMenuItem>
            ) : null}
          </MenuUnstyled>
          {isAdmin ? (
            <div>
              <IconButton
                size="large"
                edge="end"
                aria-label="add user and issue"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleCreatePageOpen}
                color="white"
              >
                <AddCircleIcon />
              </IconButton>
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
                    createHandleMenuClick("device");
                  }}
                >
                  添加器材
                </StyledMenuItem>
                <StyledMenuItem
                  onClick={() => {
                    createHandleMenuClick("user");
                  }}
                >
                  添加用户
                </StyledMenuItem>
              </MenuUnstyled>
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
