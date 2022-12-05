import React from "react";
import { Grid } from "@mui/material";
import Header from "../../../components/Header/Header";
import { Box } from "@mui/system";
import { Card } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import "./index.css";
export default function AdminDetailPage() {
  return (
    <Box sx={{ flexGrow: 1 }} container spacing={2} id="body">
      <Header isAdmin={true}></Header>
      <Grid
        textAlign="center"
        item
        xs={12}
        direction="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        marginTop="25px"
      >
        <Grid>
          <Avatar
            sx={{ bgcolor: deepOrange[500] }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
            B
          </Avatar>
        </Grid>
        <Grid
          xs={12}
          direction="column"
          justifyContent="center"
          alignItems="center"
          margin="0 80px 0"
          padding="30px"
        >
          <Card width="500px" height="500px"></Card>
        </Grid>
      </Grid>
    </Box>
  );
}
