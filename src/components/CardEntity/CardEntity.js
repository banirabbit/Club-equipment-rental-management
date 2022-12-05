import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CameraImage from "../../assets/camera.png";
import DefaultImage from "../../assets/default.jpg";
import ComputerImage from "../../assets/computer.jpeg";
import BookImage from "../../assets/book.png";
import ExperiImage from "../../assets/Experimental.jpg";
import { Box } from "@mui/system";
import "./text.css";
import { Tooltip } from "@mui/material";
export default function CardEntity(props) {
  const { equip, isAdmin, handleRent, handleEdit, id } = props;
  const cameraUrl = CameraImage;
  const defaultUrl = DefaultImage;
  const computerUrl = ComputerImage;
  const bookUrl = BookImage;
  const experiUrl = ExperiImage;
  const selectEquipImage = (value) => {
    switch (value) {
      case "camera":
        return cameraUrl;
      case "computer":
        return computerUrl;
      case "book":
        return bookUrl;
      case "experiment":
        return experiUrl;
      default:
        return defaultUrl;
    }
  };

  const getState = (value) => {
    if (value === "1") {
      return "可用";
    } else {
      return "不可用";
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={selectEquipImage(equip.type)}
        alt={equip.title}
      />
      <CardContent>
        <Box height="70px">
          <Tooltip title={equip.title}>
            <Typography id="text" gutterBottom variant="h5" component="div">
              {equip.title}
            </Typography>
          </Tooltip>
        </Box>
        <Typography variant="body2" color="text.secondary">
          押金：{equip.rent}元
        </Typography>
        <Box height="45px">
          <Tooltip title={equip.note}>
            <Typography id="text" variant="body2" color="text.secondary">
              {equip.note}
            </Typography>
          </Tooltip>
        </Box>
        {getState(equip.status) === "可用" ? (
          <Typography variant="body2" id="state" fontWeight="600">
            状态：{getState(equip.status)}
          </Typography>
        ) : (
          <Typography variant="body2" color="rgb(207, 78, 58)" fontWeight="600">
            状态：{getState(equip.status)}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {getState(equip.status) === "可用" && !isAdmin ? (
          <Button size="small" onClick={handleRent}>
            点击租借
          </Button>
        ) : (
          <Button disabled size="small">
            点击租借
          </Button>
        )}

        {isAdmin ? <Button size="small" onClick={handleEdit} >编辑信息</Button> : null}
      </CardActions>
    </Card>
  );
}
