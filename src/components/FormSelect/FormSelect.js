import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
export default function FormSelect(props) {
  const { value, menuList, label, placeholder, onChange } = props;
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <FormControl required sx={{ m: 2, minWidth: 120, width: "45ch" }}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          label={label}
          onChange={onChange}
        >
          <MenuItem disabled value="default">
            <em>{placeholder}</em>
          </MenuItem>
          {menuList.map((item) => (
            <MenuItem value={item.value}>
              <em>{item.name}</em>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
