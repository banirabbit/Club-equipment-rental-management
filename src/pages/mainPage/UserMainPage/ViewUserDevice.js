import React, { useEffect } from "react";
import "./index.css";

import { Card, Grid } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { Navigate, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getDeviceDetail } from "../../../actions/DeviceAction";
import { Button } from "@mui/material";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ViewUserDevice() {
  const [refresh, setRefresh] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    if (refresh) {
      dispatch(getDeviceDetail(userId));
      setRefresh(false);
    }
  });
  const selector = (state) => {
    return {
      deviceInfo: state.Device.deviceInfo,
      userId: state.User.userId,
    };
  };
  const { deviceInfo, userId } = useSelector(selector);
  const handleRefresh = () => {
    setRefresh(true);
  };
  const getStatus = (value) => {
    if(value === "1") {
        return "是"
    }else {
        return "否"
    }
  } 

  const getTime = (value) => {
    if(value != null) {
        return value.split('T')[0];
    }
  }

  return (
    <div>
      <Grid
        container
        id="sheet-out-grid"
        xs={12}
        justifyContent="center"
        alignItems="center"
        backgroundColor="#fff"
      >
        <Grid
          xs={12}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          padding="50px"
        >
          <Button variant="text" onClick={handleRefresh}>
            点击刷新
          </Button>
          <TableContainer
            component={Paper}
            sx={{ minWidth: 700, marginBottom: "100px" }}
          >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>器材名称</StyledTableCell>
                  <StyledTableCell align="right">申请人</StyledTableCell>
                  <StyledTableCell align="right">提交时间</StyledTableCell>
                  <StyledTableCell align="right">归还时间</StyledTableCell>
                  <StyledTableCell align="right">申请用途</StyledTableCell>
                  <StyledTableCell align="right">归还状态</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {deviceInfo.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.equipmentName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.userName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {getTime(row.createTime)}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {getTime(row.expectedTime)}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.purpose}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {getStatus(row.status)}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
