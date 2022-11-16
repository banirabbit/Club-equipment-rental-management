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
  const { isAdmin } = props;
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
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.75),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.5),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const handleProfileMenuOpen = () => {
    console.log("1");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpen = Boolean(anchorEl);
  const menuActions = React.useRef(null);
  const preventReopen = React.useRef(false);
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
  const navigate = useNavigate();
  const [deviceOpen, setDeviceOpen] = React.useState(false);
  const [userOpen, setUserOpen] = React.useState(false);
  React.useEffect(() => {
    if(deviceOpen == true && userOpen == false) {
      navigate("/hit/auth/admin/createdevice");
    }else if(deviceOpen == false && userOpen == true) {
      navigate("/hit/auth/admin/createuser");
    }
  })
  const createHandleMenuClick = (menuItem) => {
    if(menuItem === "device") {
      setDeviceOpen(true);
      setUserOpen(false);
    }
    if(menuItem === "user") {
      setDeviceOpen(false);
      setUserOpen(true);
    }
    close();
  };
  const menuId = "primary-search-account-menu";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="Shortcut">
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/hit/auth/index"
            color="#fff"
            fontFamily="'Oleo Script', serif"
            fontSize="50px"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, textDecoration: 'none', }}
          >
            Lease
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="white"
          >
            <AccountCircle />
          </IconButton>
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
                <StyledMenuItem onClick={() => {createHandleMenuClick("device")}}>
                  添加器材
                </StyledMenuItem>
                <StyledMenuItem onClick={() => {createHandleMenuClick("user")}}>
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
