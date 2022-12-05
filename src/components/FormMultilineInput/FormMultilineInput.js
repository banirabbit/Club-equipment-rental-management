import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FormMultilineInput(props) {
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
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={4}
        label={label}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Box>
  );
}
