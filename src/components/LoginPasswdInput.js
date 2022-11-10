import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function LoginPasswdInput(props) {
  const {id, value, placeholder, onChange, error, helperText, label, sx } = props
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
          type="password"
          autoComplete="current-password"
        />
      </div>
    </Box>
  );
}
