import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Icon } from "@mui/material";
import { IconButton } from "@mui/material";

export default function LoginPasswdInput(props) {
  const {
    id,
    value,
    placeholder,
    onChange,
    error,
    helperText,
    label,
    sx,
    type,
    showPassword,
    setShowPassword,
  } = props;
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 3, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div position="relative">
        <TextField
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          error={error}
          helperText={helperText}
          label={label}
          sx={sx}
          type={type}
          autoComplete="current-password"
        />
        <IconButton
          data-testid="icon1"
          id="icon1"
          name="showPassword"
          aria-label="toggle password visibility"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          style={{ position: "absolute", top: "270px" }}
        >
          <Icon>
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </Icon>
        </IconButton>
      </div>
    </Box>
  );
}
