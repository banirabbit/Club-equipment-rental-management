import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Box } from "@mui/system";
export default function FormDatePicker(props) {
  const { value, setValue, onChange, defaultValue, label, minDate, maxDate } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component="form" noValidate autoComplete="off">
        <DesktopDatePicker
          label={label}
          inputFormat="YYYY/MM/DD"
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          minDate={minDate}
          maxDate={maxDate}
          renderInput={(params) => (
            <TextField
              required
              sx={{
                m: 2,
                width: "45ch",
              }}
              {...params}
            />
          )}
        />
      </Box>
    </LocalizationProvider>
  );
}
