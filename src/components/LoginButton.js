import React from "react";
import { Button, Box } from "@mui/material";

export default function LoginButton() {
  return (
    <Box sx={{ "& button": { m: 2 } }}>
      <Button variant="contained" size="large">
        登录
      </Button>
    </Box>
  );
}
