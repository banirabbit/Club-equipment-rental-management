import React, { useEffect } from "react";

import { Card, Grid, Typography } from "@mui/material";

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
import { Button } from "@mui/material";

export default function HelpPage() {
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
          <Typography variant="h3" fontWeight="600" marginBottom="40px">
            基本信息
          </Typography>
          <Typography fontSize="20px" marginBottom="40px">
            这是 <strong>Lease</strong>, 一个免费的高自由度的办公器材租赁平台。
            它可以用于社团，课题组，项目团队的物品租借管理。
          </Typography>

          <Typography variant="h3" fontWeight="600" marginBottom="40px">
            如何租借器材？
          </Typography>
          <Typography fontSize="20px" marginBottom="40px">
            在首页可以看见不同的设备和设备的描述，以及设备的状态。右上角可以搜索器材，也可以使用分类筛选您想要的类别。不可用表示该设备被别人借走，可用表示该设备可以租借。点击租借之后，正确填写归还日期和手机号，租借理由，既可租借该设备。管理员会收到您的租借信息，让您可以线下领取该设备。使用完成后请立刻归还，管理员在确认您归还后会更改设备的状态，让他人也可以租借。
          </Typography>
          <Typography variant="h3" fontWeight="600" marginBottom="40px">
            逾期未还怎么办？
          </Typography>
          <Typography fontSize="20px" marginBottom="40px">
            如果超过预定的归还时间，系统会给您发送一封邮件提醒您归还，如果超过预定的时间太久，管理员可能会线下采取强制措施。
          </Typography>
          <Typography variant="h3" fontWeight="600" marginBottom="40px">
            如何查看我已经租借的器材？
          </Typography>
          <Typography fontSize="20px" marginBottom="40px">
            右上角的租借记录可以查看您租借的所有细节。
          </Typography>

          <Typography variant="h3" fontWeight="600" marginBottom="40px">
            更多帮助？
          </Typography>
          <Typography fontSize="20px" marginBottom="40px">
            如果在使用过程中出现了其他问题，请联系管理员3174465976@qq.com，我们会在第一时间给予回复。
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
