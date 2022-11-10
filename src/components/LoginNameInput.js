import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function LoginNameInput(props) {
  const { id, label, placeholder, onChange, value, error, helperText, sx } = props;
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 3, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          error={error}
          helperText={helperText}
          label={label}
          sx={sx}
        />
      </div>
    </Box>
  );
}
