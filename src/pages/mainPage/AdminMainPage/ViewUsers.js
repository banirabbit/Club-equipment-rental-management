import React, { useEffect } from "react";
import "./index.css";

import { Card, Grid, IconButton, Tooltip, Typography } from "@mui/material";

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
import CheckIcon from "@mui/icons-material/Check";
import { DeleteUser, getUserList } from "../../../actions/UserAction";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SuccessAlert from "../../../components/Alert/SuccessAlert";
import FailedAlert from "../../../components/Alert/FailedAlert";
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

export default function ViewUsers() {
  const [refresh, setRefresh] = useState(true);
  const [successOpen, setSuccessOpen] = useState(false);
  const [failOpen, setFailOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (refresh) {
      dispatch(getUserList());
      setRefresh(false);
    }
  });
  const selector = (state) => {
    return {
      userList: state.User.userList,
      userId: state.User.userId,
      deleteRes: state.User.deleteRes,
    };
  };
  const { userList, userId, deleteRes } = useSelector(selector);
  const handleRefresh = () => {
    setRefresh(true);
  };
  const getStatus = (value) => {
    if (Number(value) > 0) {
      return true;
    } else {
      return false;
    }
  };

  const getRole = (value) => {
    if (value === 1) {
      return "管理员";
    } else {
      return "普通用户";
    }
  };
  const handleDeleteUser = async (account) => {
    await dispatch(DeleteUser(account));
    console.log(deleteRes, "33333333");
    setRefresh(true);
  };

  useEffect(() => {
    if (deleteRes === "true") {
      setRefresh(true);
      setSuccessOpen(true);
    } else if (deleteRes === "error") {
      setFailOpen(true);
    }
  }, [deleteRes]);

  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccessOpen(false);
  };

  const handleFailClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setFailOpen(false);
  };

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
                  <StyledTableCell>姓名</StyledTableCell>
                  <StyledTableCell align="right">学号</StyledTableCell>
                  <StyledTableCell align="right">限权</StyledTableCell>
                  <StyledTableCell align="right">未归还</StyledTableCell>
                  <StyledTableCell align="right">操作</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userList.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.account}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {getRole(row.roleId)}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Typography
                        color={
                          getStatus(row.status) ? "rgb(207, 78, 58)" : "#000"
                        }
                      >
                        {row.borrowed}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {getRole(row.roleId) === "普通用户" &&
                      !getStatus(row.status) ? (
                        <Tooltip title="删除用户">
                          <IconButton
                            onClick={() => {
                              handleDeleteUser(row.account);
                            }}
                          >
                            <DeleteOutlineIcon></DeleteOutlineIcon>
                          </IconButton>
                        </Tooltip>
                      ) : null}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <SuccessAlert
            open={successOpen}
            handleClose={handleSuccessClose}
            message="删除成功"
          ></SuccessAlert>
          <FailedAlert
            open={failOpen}
            handleClose={handleFailClose}
            message="Some error happened."
          ></FailedAlert>
        </Grid>
      </Grid>
    </div>
  );
}
