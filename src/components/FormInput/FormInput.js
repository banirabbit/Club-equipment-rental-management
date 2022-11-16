import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function FormInput(props) {
  const {
    value,
    defaultValue,
    label,
    placeholder,
    onChange,
    error,
    helperText,
  } = props;
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "45ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {error ? (
        <TextField
          error
          id="outlined-error-helper-text"
          label={label}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          helperText={helperText}
        />
      ) : (
        <TextField
          required
          id="outlined-required"
          label={label}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        ></TextField>
      )}
    </Box>
  );
}
