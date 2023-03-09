import React from "react";
import { Grid, Box, TextField, Button } from "@mui/material";
import Header from "../../components/Header/Header";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContentBlock from "./CommonModule/ContentBlock";
import RichTextEditor from "./CommonModule/RichTextEditor";

export default function EmailTemplatePage() {
  const [expanded, setExpanded] = useState(false);
  const [edit, setEdit] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const Buttoncss1 = {
    backgroundColor: "#f8bbd0",
    border: "none",
    color: "#fff",
    borderRadius: "2px",
    padding: "8px 15px",
    margin: "0 8px 8px 0"
  }
  const Buttoncss2 = {
    backgroundColor: "#ffe0b2",
    border: "none",
    color: "#fff",
    borderRadius: "2px",
    padding: "8px 15px",
    margin: "0 8px 8px 0"
  }

  return (
    <div>
      <Header isAdmin={true}></Header>
      <Grid item xs={12} direction="column" marginTop="25px" padding="0 5%">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, fontSize: "20px" }}>
              租借成功
            </Typography>

            <Typography sx={{ color: "text.secondary" }}>
              I am an accordion
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {edit ? (
              <>
                <button
                  onClick={() => {
                    setEdit(false);
                  }}
                  style={Buttoncss1}
                >
                  保存
                </button>
                <button
                  onClick={() => {
                    setEdit(false);
                  }}
                  style={Buttoncss2}
                >
                  取消
                </button>
                <ContentBlock title="邮件标题：">
                  <Box
                    sx={{
                      "& .MuiInputBase-Input": { m: 3, width: "35ch" },
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                    ></TextField>
                  </Box>
                </ContentBlock>
                <ContentBlock title="From："></ContentBlock>
                <ContentBlock title="To："></ContentBlock>
                <ContentBlock title="邮件内容：">
                  <RichTextEditor></RichTextEditor>
                </ContentBlock>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setEdit(true);
                  }}
                  style={Buttoncss1}
                >
                  编辑
                </button>
                <ContentBlock title="邮件标题："></ContentBlock>
                <ContentBlock title="From："></ContentBlock>
                <ContentBlock title="To："></ContentBlock>
                <ContentBlock title="邮件内容："></ContentBlock>
              </>
            )}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              You are currently not an owner
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Advanced settings
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Filtering has been entirely disabled for whole web server
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </div>
  );
}
