import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "./index.css";
import { getUserInfo } from "../../../actions/UserAction";
import { Card, Grid, Tooltip } from "@mui/material";
import { Typography, Button } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CardEntity from "../../../components/CardEntity/CardEntity";
import { makeStyles } from "@mui/styles";
import { Navigate, useNavigate } from "react-router-dom";
import { TabPanel } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import RefreshIcon from "@mui/icons-material/Refresh";
import { getDeviceList, getEquipId } from "../../../actions/DeviceAction";
import { Fab } from "@mui/material";
import FormPage from "../../FormPage/FormPage";
import EditFormPage from "../../FormPage/EditFormPage";
export default function AdminOverview(props) {
  const { type, setType } = props;
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const [status, setStatus] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [note, setNote] = useState("");
  const [editType, setEditType] = useState("");
  const [rent, setRent] = useState(0);
  const [title, setTitle] = useState("");
  const selector = (state) => {
    return {
      deviceList: state.Device.deviceList,
    };
  };
  const { deviceList } = useSelector(selector);
  const [refresh, setRefresh] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);
  useEffect(() => {
    if (refresh) {
      setType("");
      dispatch(getDeviceList(type));
      setRefresh(false);
    }
    console.log(id);
  });

  useEffect(() => {
    dispatch(getDeviceList(type));
  }, [type]);
  const handleRefresh = () => {
    setRefresh(true);
  };
  const useStyles = makeStyles((theme) => ({
    gameEntry: {
      // 2 items on [0, sm]
      [theme.breakpoints.only("xs")]: {
        "flex-basis": "calc((100% / 2) - 1%)",
      },
      // 4 items on [sm, md[
      [theme.breakpoints.only("sm")]: {
        "flex-basis": "calc((100% / 4) - 1%)",
      },
      // 8 items on [md, infinity]
      [theme.breakpoints.up("md")]: {
        "flex-basis": "calc((100% / 8) - 1%)",
      },
    },
  }));

  const handleRent = (id, status) => {
    setId(Number(id));
    setStatus(status);
    setOpen(true);
  };
  const handleEdit = (note, rent, title, editType) => {
    setEditOpen(true);
    setNote(note);
    setRent(rent);
    setTitle(title);
    setEditType(editType);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  }
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Card
          id="banner"
          sx={{
            width: "90%",
            height: "300px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box display="inline-block">
            <Typography
              fontSize="50px"
              lineHeight="55px"
              color="#000"
              fontWeight="600"
            >
              您好，这里是LEASE
            </Typography>
            <Typography
              fontSize="40px"
              lineHeight="55px"
              color="#000"
              fontWeight="400"
            >
              一个免费的高自由度的办公器材租赁平台。
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <Box sx={{ "& button": { m: 2 } }}>
              <Button
                variant="contained"
                size="large"
                marginBottom="30px"
                endIcon={<ArrowCircleRightIcon />}
              >
                OK, let's go
              </Button>
            </Box>
            <Box sx={{ "& button": { m: 2 } }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<HelpOutlineIcon />}
              >
                More Info
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid
        container
        marginTop="40px"
        direction="row"
        justifyContent="left"
        alignItems="center"
        style={{
          rowGap: "25px",
        }}
        paddingLeft="5%"
        width="100%"
      >
        {deviceList.map((equip) => (
          <Grid
            className={useStyles.gameEntry}
            width="350px"
            height="360px"
            marginRight="20px"
            marginTop="10px"
          >
            <CardEntity
              equip={equip}
              height="100%"
              isAdmin={true}
              handleRent={() => {
                handleRent(equip.equipmentId, equip.status);
              }}
              handleEdit={() => {
                handleEdit(equip.note, equip.rent, equip.title, equip.type);
              }}
            ></CardEntity>
          </Grid>
        ))}
      </Grid>
      <FormPage
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        id={id}
        status={status}
      ></FormPage>
      <EditFormPage
        open={editOpen}
        handleEditClose={handleEditClose}
        note={note}
        setNote={setNote}
        rent={rent}
        setRent={setRent}
        title={title}
        setTitle={setTitle}
        editType={editType}
        setEditType={setEditType}
      ></EditFormPage>
      <Tooltip title="刷新数据">
        <Fab
          size="medium"
          color="primary"
          aria-label="refresh"
          onClick={handleRefresh}
          sx={{
            position: "fixed",
            bottom: 80,
            left: 28,
            zIndex: 1101,
          }}
        >
          <RefreshIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}
